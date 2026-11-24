// Jogador: movimento com inércia, câmera corporal, revólver .38, lanterna e flash.
import * as THREE from 'three';
import * as T from './textures.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

export class Player {
  constructor(game) {
    this.g = game;
    this.pos = V(7, 0, -9.3);
    this.vel = V();
    this.yaw = Math.PI; this.pitch = 0; // olhando para +z (casa)
    this.yawV = 0; this.pitchV = 0;
    this.height = 1.6; this.radius = 0.3;
    this.health = 100; this.stamina = 1; this.fear = 0;
    this.ammo = 6; this.reserve = 12; this.reloading = 0;
    this.flashCharge = 1; this.flashlightOn = true;
    this.bob = 0; this.stepPhase = 0; this.lastStep = 0;
    this.keys = {}; this.locked = false; this.frozen = false;
    this.shakeAmt = 0; this.recoil = 0; this.dead = false; this.deathT = 0;
    this.hurtT = 10; this.damageFx = 0;
    this.buildRig();
  }

  buildRig() {
    const cam = this.g.camera;
    // lanterna segurada na mão esquerda, sob o revólver (técnica Harries)
    this.rig = new THREE.Group(); cam.add(this.rig);
    this.flashlight = new THREE.SpotLight(0xfff1dc, 20, 26, 0.5, 0.6, 1.7);
    this.flashlight.map = T.flashlightCookie();
    this.flashlight.castShadow = true;
    this.flashlight.shadow.mapSize.set(1024, 1024);
    this.flashlight.shadow.camera.near = 0.15; this.flashlight.shadow.camera.far = 26;
    this.flashlight.shadow.bias = -0.0006; this.flashlight.shadow.normalBias = 0.02;
    this.flashlight.position.set(-0.12, -0.16, -0.25);
    this.flashTarget = new THREE.Object3D(); this.flashTarget.position.set(0, 0, -6);
    this.flashlight.target = this.flashTarget;
    this.g.scene.add(this.flashlight, this.flashTarget);
    this.lightDir = V(0, 0, -1);
    // luz de flash da câmera
    this.flashPoint = new THREE.PointLight(0xf4f6ff, 0, 18, 1.4); this.g.scene.add(this.flashPoint);
    // clarão do disparo
    this.muzzle = new THREE.PointLight(0xffb060, 0, 10, 2); this.g.scene.add(this.muzzle);
    // luz de preenchimento mínima (o sensor sempre capta algo)
    this.fill = new THREE.PointLight(0x9fb0c0, 0.6, 5, 2); this.g.scene.add(this.fill);
    // luz rebatida: simula a luz da lanterna voltando das superfícies (iluminação global falsa)
    this.bounce = new THREE.PointLight(0xd8c6aa, 0, 7, 2); this.g.scene.add(this.bounce);
    this.bounceRay = new THREE.Raycaster(); this.bounceRay.far = 16; this.bouncePos = V();

    // revólver .38 + mãos com luvas táticas + manga da farda
    const gun = this.gun = new THREE.Group();
    const steel = new THREE.MeshStandardMaterial({ color: 0x23252a, metalness: 0.9, roughness: 0.28 });
    const steelD = new THREE.MeshStandardMaterial({ color: 0x0e0f11, metalness: 0.8, roughness: 0.4 });
    const glove = new THREE.MeshStandardMaterial({ map: T.cloth(70, [34, 34, 36], 0), roughness: 0.9 });
    const sleeve = new THREE.MeshStandardMaterial({ map: T.cloth(72, [52, 58, 66], 0), roughness: 0.95 });
    const wood = new THREE.MeshStandardMaterial({ map: T.woodFloor(71), color: 0x6a4030, roughness: 0.45 });
    const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, sc) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); if (sc) m.scale.set(...sc); gun.add(m); return m; };
    const cap = (r, l) => new THREE.CapsuleGeometry(r, l, 4, 10);
    add(new THREE.BoxGeometry(0.024, 0.042, 0.08), steel, 0, 0.018, -0.028);
    add(new THREE.BoxGeometry(0.017, 0.01, 0.07), steel, 0, 0.043, -0.05);
    this.cyl = add(new THREE.CylinderGeometry(0.0195, 0.0195, 0.042, 18), steel, 0, 0.022, -0.048, Math.PI / 2);
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; add(new THREE.BoxGeometry(0.004, 0.004, 0.03), steelD, Math.cos(a) * 0.0195, 0.022 + Math.sin(a) * 0.0195, -0.048); }
    add(new THREE.CylinderGeometry(0.0082, 0.0085, 0.11, 14), steel, 0, 0.031, -0.125, Math.PI / 2);
    add(new THREE.BoxGeometry(0.011, 0.013, 0.1), steel, 0, 0.018, -0.12);
    add(new THREE.BoxGeometry(0.003, 0.009, 0.006), steel, 0, 0.043, -0.176);
    add(new THREE.BoxGeometry(0.008, 0.02, 0.012), steelD, 0, 0.046, 0.016, -0.5);
    add(new THREE.TorusGeometry(0.015, 0.0026, 5, 12, Math.PI), steel, 0, -0.004, -0.018, 0, Math.PI / 2, Math.PI);
    add(new THREE.BoxGeometry(0.004, 0.016, 0.004), steelD, 0, -0.006, -0.018, 0.3);
    add(cap(0.015, 0.06), wood, 0, -0.038, 0.024, -0.32, 0, 0, [0.85, 1, 1.3]);
    // mão direita envolvendo o cabo
    add(cap(0.024, 0.045), glove, 0.004, -0.04, 0.034, -0.32, 0, 0, [1.25, 1, 1.15]);
    for (let i = 0; i < 3; i++) add(cap(0.0098, 0.026), glove, -0.002, -0.017 - i * 0.017, 0.002, 0, 0, Math.PI / 2);
    add(cap(0.009, 0.038), glove, -0.016, 0.004, -0.03, Math.PI / 2); // indicador fora do gatilho
    add(cap(0.0095, 0.034), glove, -0.017, 0.028, -0.005, Math.PI / 2 + 0.2); // polegar
    add(cap(0.033, 0.16), sleeve, 0.02, -0.085, 0.12, 1.05, 0, -0.15); // antebraço
    // mão esquerda segurando a lanterna sob a arma
    const fl = this.flGroup = new THREE.Group(); fl.position.set(-0.03, -0.062, -0.01); gun.add(fl);
    const flm = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.014, 0.12, 14), new THREE.MeshStandardMaterial({ color: 0x131313, metalness: 0.6, roughness: 0.35 }));
    flm.rotation.x = Math.PI / 2; fl.add(flm);
    const bezel = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.018, 0.02, 14), flm.material); bezel.rotation.x = Math.PI / 2; bezel.position.z = -0.065; fl.add(bezel);
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.016, 14), new THREE.MeshStandardMaterial({ color: 0x333333, emissive: 0xfff0d0, emissiveIntensity: 2 }));
    lens.position.z = -0.0755; lens.rotation.y = Math.PI; fl.add(lens); this.lens = lens;
    const lh = new THREE.Mesh(cap(0.025, 0.04), glove); lh.rotation.z = Math.PI / 2; lh.position.set(0.004, -0.006, 0.01); lh.scale.set(1, 1.2, 1.3); fl.add(lh);
    const la = new THREE.Mesh(cap(0.033, 0.16), sleeve); la.position.set(-0.05, -0.04, 0.1); la.rotation.set(1.1, 0, 0.35); fl.add(la);
    gun.traverse(m => { if (m.isMesh) { m.castShadow = false; m.receiveShadow = false; } });
    gun.position.set(0.085, -0.145, -0.36);
    this.gunBase = gun.position.clone();
    this.gunLow = V(0.11, -0.27, -0.32);
    this.aimK = 0; this.sinceShot = 99;
    // a arma é desenhada numa cena própria (nunca atravessa paredes)
    this.g.gunHolder.add(gun);
    this.gunLight = new THREE.PointLight(0xfff0dc, 0, 2, 1.5); this.gunLight.position.set(0.05, 0.15, -0.1); this.g.gunHolder.add(this.gunLight);
    this.gunAmb = new THREE.HemisphereLight(0x8090a0, 0x201810, 0.15); this.g.gunScene.add(this.gunAmb);
    // clarão visual
    const fm = new THREE.SpriteMaterial({ map: T.softDot(), color: 0xffc070, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 });
    this.muzzleSprite = new THREE.Sprite(fm); this.muzzleSprite.scale.set(0.12, 0.12, 1); this.muzzleSprite.position.set(0, 0.032, -0.23); gun.add(this.muzzleSprite);
  }

  setInput(keys) { this.keys = keys; }
  look(dx, dy) {
    if (this.frozen || this.dead) return;
    const s = 0.0022 * this.g.sens;
    this.yawV -= dx * s; this.pitchV -= dy * s;
  }

  damage(n, from) {
    if (this.dead || this.g.godMode) return;
    this.health -= n; this.hurtT = 0; this.damageFx = 1;
    this.g.audio.hit(); this.g.shake(0.6);
    // empurrão para longe do agressor
    const dx = this.pos.x - from.x, dz = this.pos.z - from.z, d = Math.hypot(dx, dz) || 1;
    this.vel.x += dx / d * 4; this.vel.z += dz / d * 4;
    this.yawV += (Math.random() - 0.5) * 0.25; this.pitchV += 0.08;
    if (this.health <= 0) this.die(from);
  }
  die(from) {
    this.dead = true; this.deathT = 0; this.health = 0;
    this.deathFrom = from.clone();
    this.g.onDeath();
  }

  shoot() {
    if (this.dead || this.frozen || this.reloading > 0 || this.g.noteOpen) return;
    if (this.fireCD > 0) return;
    if (this.ammo <= 0) { this.g.audio.dryFire(); this.fireCD = 0.3; return; }
    this.ammo--; this.fireCD = 0.42; this.sinceShot = 0; this.aimK = Math.max(this.aimK, 0.85);
    const cam = this.g.camera, A = this.g.audio;
    A.gunshot(cam.position);
    this.recoil = 1; this.pitchV += 0.045; this.yawV += (Math.random() - 0.5) * 0.02;
    this.muzzle.intensity = 60; this.muzzleSprite.material.opacity = 1; this.muzzleSprite.material.rotation = Math.random() * 6;
    this.g.shake(0.25);
    this.g.alertAll();
    // acerto
    const ray = new THREE.Ray(cam.position.clone(), cam.userData.fwd.clone());
    ray.direction.x += (Math.random() - 0.5) * 0.012; ray.direction.y += (Math.random() - 0.5) * 0.012; ray.direction.normalize();
    let best = null, bestC = null;
    for (const c of this.g.creatures) { const h = c.hitBy(ray, 0.05); if (h && (!best || h.distance < best.distance)) { best = h; bestC = c; } }
    const wallHit = new THREE.Raycaster(ray.origin, ray.direction, 0, 60).intersectObjects(this.g.level.occluders, false)[0];
    if (best && (!wallHit || best.distance < wallHit.distance + 0.3)) { bestC.hurt(best); this.g.audio.fleshHit(best.point); this.g.hitMarker && this.g.hitMarker(); }
    else if (wallHit) this.g.bulletHole(wallHit);
  }
  reload() {
    if (this.reloading > 0 || this.ammo >= 6 || this.reserve <= 0 || this.dead) return;
    this.reloading = 2.4; this.reloadStage = 0; this.g.audio.reloadClick(0);
  }
  cameraFlash() {
    if (this.dead || this.frozen || this.flashCharge < 1 || this.g.noteOpen) return;
    this.flashCharge = 0; this.g.flashT = 0.18;
    this.g.audio.cameraFlash(); this.g.audio.flashCharge(3.2);
    this.g.onFlash();
  }
  toggleFlashlight() {
    this.flashlightOn = !this.flashlightOn; this.g.audio.flashlightClick();
  }

  collide(nx, nz) {
    const L = this.g.level, r = this.radius;
    const fy = L.floorY(nx, nz);
    let x = nx, z = nz;
    for (let it = 0; it < 2; it++) for (const c of L.colliders) {
      if (!c.on) continue;
      if (c.y1 < fy + 0.3 || c.y0 > fy + 1.75) continue;
      if (x + r > c.x0 && x - r < c.x1 && z + r > c.z0 && z - r < c.z1) {
        const px = Math.min(x + r - c.x0, c.x1 - (x - r)), pz = Math.min(z + r - c.z0, c.z1 - (z - r));
        if (px < pz) x += (x < (c.x0 + c.x1) / 2 ? -px : px);
        else z += (z < (c.z0 + c.z1) / 2 ? -pz : pz);
      }
    }
    return [x, z];
  }

  update(dt) {
    const G = this.g, cam = G.camera, A = G.audio, L = G.level;
    this.fireCD = (this.fireCD || 0) - dt;
    this.hurtT += dt;
    if (this.dead) { this.deathUpdate(dt); return; }

    // olhar com inércia (peso do equipamento)
    const k = Math.min(1, dt * 22);
    const dyaw = this.yawV * k, dpitch = this.pitchV * k;
    this.yaw += dyaw; this.pitch = THREE.MathUtils.clamp(this.pitch + dpitch, -1.35, 1.35);
    this.yawV -= dyaw; this.pitchV -= dpitch;

    // movimento
    const K = this.keys;
    let fx = 0, fz = 0;
    if (!this.frozen && !G.noteOpen) {
      if (K.KeyW || K.ArrowUp) fz += 1; if (K.KeyS || K.ArrowDown) fz -= 1;
      if (K.KeyA || K.ArrowLeft) fx -= 1; if (K.KeyD || K.ArrowRight) fx += 1;
    }
    const TS = G.touchState;
    if (TS && !this.frozen && !G.noteOpen) { fx += TS.x; fz -= TS.y; }
    const moving = Math.hypot(fx, fz) > 0.15;
    const run = moving && (K.ShiftLeft || K.ShiftRight || (TS && TS.run)) && this.stamina > 0.05 && fz > 0;
    const sp = run ? 3.5 : 1.55;
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    let wx = -sin * fz + cos * fx, wz = -cos * fz - sin * fx;
    const wl = Math.max(1, Math.hypot(wx, wz)); wx /= wl; wz /= wl;
    const acc = moving ? 10 : 8;
    this.vel.x += ((moving ? wx * sp : 0) - this.vel.x) * Math.min(1, dt * acc);
    this.vel.z += ((moving ? wz * sp : 0) - this.vel.z) * Math.min(1, dt * acc);
    this.stamina = THREE.MathUtils.clamp(this.stamina + (run ? -dt / 5.5 : dt / 7), 0, 1);
    const [nx, nz] = this.collide(this.pos.x + this.vel.x * dt, this.pos.z + this.vel.z * dt);
    const realSpeed = Math.hypot(nx - this.pos.x, nz - this.pos.z) / Math.max(dt, 1e-4);
    this.pos.x = nx; this.pos.z = nz;
    const fy = L.floorY(this.pos.x, this.pos.z);
    this.pos.y += (fy - this.pos.y) * Math.min(1, dt * 12);

    // passos e balanço
    const spd = Math.min(realSpeed, 4);
    this.stepPhase += dt * spd * 1.85;
    if (spd > 0.3) {
      const s = Math.floor(this.stepPhase / Math.PI);
      if (s !== this.lastStep) { this.lastStep = s; A.footstep(L.surface(this.pos.x, this.pos.z), this.pos.clone().setY(this.pos.y + 0.05), run ? 0.9 : 0.55, run); }
    }
    const bobAmt = Math.min(1, spd / 3.5);
    const bobY = Math.abs(Math.sin(this.stepPhase)) * 0.045 * bobAmt + Math.sin(G.time * 1.3) * 0.004;
    const bobX = Math.cos(this.stepPhase) * 0.025 * bobAmt;
    // respiração no enquadramento
    const breathe = Math.sin(G.time * (1.4 + this.fear * 2)) * 0.003 * (1 + this.fear * 2);

    // tremor
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 1.6);
    const sh = this.shakeAmt * this.shakeAmt;
    const shx = (Math.random() - 0.5) * sh * 0.08, shy = (Math.random() - 0.5) * sh * 0.08;

    cam.position.set(this.pos.x + cos * bobX, this.pos.y + this.height - 0.04 + bobY + breathe, this.pos.z - sin * bobX);
    cam.rotation.order = 'YXZ';
    cam.rotation.y = this.yaw + shx;
    cam.rotation.x = this.pitch + shy + this.recoil * 0.02;
    cam.rotation.z = -this.yawV * 0.6 - fx * 0.008 * bobAmt + Math.cos(this.stepPhase) * 0.004 * bobAmt;
    cam.updateMatrixWorld();
    cam.getWorldDirection(cam.userData.fwd);
    cam.userData.up.set(0, 1, 0).applyQuaternion(cam.quaternion);

    // arma: atraso (sway), recuo, recarga
    this.recoil = Math.max(0, this.recoil - dt * 5);
    const gp = this.gun.position, gb = this.gunBase;
    const reloadK = this.reloading > 0 ? Math.sin(Math.min(1, (2.4 - this.reloading) / 2.4) * Math.PI) : 0;
    const lowered = G.noteOpen || this.frozen ? 1 : 0;
    this.sinceShot += dt;
    const aimWant = (G.combat || this.sinceShot < 2.5) && !lowered ? 1 : 0;
    this.aimK += (aimWant - this.aimK) * Math.min(1, dt * (aimWant ? 7 : 2.5));
    const ak = this.aimK, gl = this.gunLow;
    const bx = gl.x + (gb.x - gl.x) * ak, by = gl.y + (gb.y - gl.y) * ak, bz = gl.z + (gb.z - gl.z) * ak;
    gp.x += (bx + this.yawV * 0.3 + bobX * 0.4 - gp.x) * Math.min(1, dt * 12);
    gp.y += (by - this.pitchV * 0.3 - bobY * 0.3 - reloadK * 0.1 - lowered * 0.25 - this.recoil * 0.01 - gp.y) * Math.min(1, dt * 12);
    gp.z = bz + this.recoil * 0.05;
    this.gun.rotation.x = this.recoil * 0.35 + reloadK * 0.9 - (1 - ak) * 0.55;
    this.gun.rotation.y = (1 - ak) * 0.25;
    this.gun.rotation.z = reloadK * 0.6;
    this.cyl.position.x = reloadK * 0.03;
    if (this.reloading > 0) {
      this.reloading -= dt;
      if (this.reloadStage === 0 && this.reloading < 1.6) { this.reloadStage = 1; A.reloadClick(1); }
      if (this.reloadStage === 1 && this.reloading < 0.5) { this.reloadStage = 2; A.reloadClick(2); }
      if (this.reloading <= 0) { const n = Math.min(6 - this.ammo, this.reserve); this.ammo += n; this.reserve -= n; }
    }
    this.muzzle.intensity *= Math.pow(0.0005, dt);
    this.muzzle.position.copy(cam.position).addScaledVector(cam.userData.fwd, 0.6);
    this.muzzleSprite.material.opacity *= Math.pow(0.0001, dt);

    // lanterna segue a mão com atraso
    const want = cam.userData.fwd.clone();
    this.lightDir.lerp(want, Math.min(1, dt * 14)).normalize();
    const lp = new THREE.Vector3(-0.1, -0.17, -0.2).applyQuaternion(cam.quaternion).add(cam.position);
    this.flashlight.position.copy(lp);
    this.flashTarget.position.copy(lp).addScaledVector(this.lightDir, 6);
    let fl = this.flashlightOn ? 1 : 0;
    if (G.flicker > 0) fl *= Math.random() < 0.55 ? 0.03 : (0.6 + Math.random() * 0.4);
    this.flashlight.intensity = 30 * fl;
    // rebatimento
    this.bounceRay.set(lp, this.lightDir);
    const bh = this.bounceRay.intersectObjects(G.level.bounceList, false)[0];
    if (bh && fl > 0) {
      const n = bh.face ? bh.face.normal.clone().transformDirection(bh.object.matrixWorld) : V(0, 1, 0);
      if (n.dot(this.lightDir) > 0) n.negate();
      this.bouncePos.copy(bh.point).addScaledVector(n, 0.35);
      this.bounce.position.lerp(this.bouncePos, Math.min(1, dt * 20));
      const d = Math.max(1, bh.distance);
      this.bounce.intensity = fl * Math.min(4, 20 / (d * d));
    } else this.bounce.intensity = 0;
    this.lens.material.emissiveIntensity = 2 * fl;
    this.fill.position.copy(cam.position);
    this.g.gunHolder.position.copy(cam.position); this.g.gunHolder.quaternion.copy(cam.quaternion);
    this.gunLight.intensity = 0.25 * fl + (G.lightsOn ? 0.5 : 0) + this.muzzle.intensity * 0.05 + (G.flashT > 0 ? 6 : 0);
    this.gunAmb.intensity = G.lightsOn ? 0.5 : 0.12;
    this.fill.intensity = G.lightsOn ? 0.1 : 0.6;

    // flash da câmera
    this.flashCharge = Math.min(1, this.flashCharge + dt / 3.2);
    this.flashPoint.position.copy(cam.position).addScaledVector(cam.userData.fwd, 0.3);
    this.flashPoint.intensity = G.flashT > 0 ? 900 * (G.flashT / 0.18) : 0;

    // vida regenera devagar
    if (this.hurtT > 4) this.health = Math.min(100, this.health + dt * 10);
    this.damageFx = Math.max(this.damageFx - dt * 1.2, (100 - this.health) / 100 * 0.6);
  }

  deathUpdate(dt) {
    const cam = this.g.camera; this.deathT += dt;
    const k = Math.min(1, this.deathT / 0.7);
    // câmera cai no chão e tomba de lado
    cam.position.y += ((this.pos.y + 0.12) - cam.position.y) * Math.min(1, dt * 6);
    cam.rotation.z += (1.35 - cam.rotation.z) * Math.min(1, dt * 5);
    const f = this.deathFrom;
    const want = Math.atan2(-(f.x - this.pos.x), -(f.z - this.pos.z));
    cam.rotation.y += (want - cam.rotation.y) * dt * 2 * k;
    cam.rotation.x += (0.15 - cam.rotation.x) * dt * 2;
    cam.updateMatrixWorld(); cam.getWorldDirection(cam.userData.fwd);
    this.gun.visible = false;
    this.flashlight.intensity = Math.random() < 0.2 ? 0 : 30;
  }

  respawn(p, yaw) {
    this.pos.copy(p); this.yaw = yaw; this.pitch = 0; this.vel.set(0, 0, 0);
    this.health = 100; this.dead = false; this.gun.visible = true; this.damageFx = 0; this.reloading = 0; this.stamina = 1;
    this.flashlightOn = true; this.flashCharge = 1;
  }
}
