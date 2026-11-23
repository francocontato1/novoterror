// Corpos humanoides procedurais + IA das entidades.
import * as THREE from 'three';
import * as T from './textures.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const tmp = V(), tmp2 = V();

function limb(len, r, mat) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, Math.max(0.01, len - r * 2), 4, 10), mat);
  m.position.y = -len / 2; m.castShadow = true; m.receiveShadow = true;
  g.add(m); g.userData.mesh = m;
  return g;
}

export function makeMats() {
  return {
    paleSkin: new THREE.MeshStandardMaterial({ map: T.skin(21, [176, 168, 150]), roughness: 0.55 }),
    greySkin: new THREE.MeshStandardMaterial({ map: T.skin(22, [92, 96, 88]), roughness: 0.42 }),
    childSkin: new THREE.MeshStandardMaterial({ map: T.skin(25, [190, 172, 158]), roughness: 0.6 }),
    demonSkin: new THREE.MeshStandardMaterial({ map: T.skin(29, [34, 31, 30]), roughness: 0.16, metalness: 0.08 }),
    horn: new THREE.MeshStandardMaterial({ map: T.skin(30, [70, 62, 52]), roughness: 0.7 }),
    demonMouth: new THREE.MeshStandardMaterial({ color: 0x100000, emissive: 0x500800, emissiveIntensity: 1.5 }),
    nightgown: new THREE.MeshStandardMaterial({ map: T.cloth(23, [150, 140, 122], 1.6), roughness: 0.95, side: THREE.DoubleSide }),
    shirt: new THREE.MeshStandardMaterial({ map: T.cloth(24, [118, 122, 116], 1.1), roughness: 0.9 }),
    pants: new THREE.MeshStandardMaterial({ map: T.cloth(26, [60, 55, 50], 0.2), roughness: 0.95 }),
    childDress: new THREE.MeshStandardMaterial({ map: T.cloth(27, [170, 120, 140], 0.3), roughness: 0.95, side: THREE.DoubleSide }),
    hole: new THREE.MeshBasicMaterial({ color: 0x000000 }),
    eyeShine: new THREE.MeshBasicMaterial({ color: 0x101010 }),
    hair: new THREE.MeshStandardMaterial({ map: T.hairStrands(), alphaTest: 0.3, transparent: false, side: THREE.DoubleSide, roughness: 0.5, color: 0x2a2420 }),
    ghost: new THREE.MeshStandardMaterial({ color: 0x0c0c0c, roughness: 1 }),
  };
}

export function buildHumanoid(M, o = {}) {
  const h = o.h ?? 1.7, s = h / 1.7, thin = o.thin ?? 1, armK = o.armK ?? 1;
  const skin = o.skin || M.paleSkin, top = o.top || skin, bottom = o.bottom || skin;
  const P = {};
  P.root = new THREE.Group();
  P.hips = new THREE.Group(); P.hips.position.y = 0.95 * s; P.root.add(P.hips);
  const pelvis = new THREE.Mesh(new THREE.CapsuleGeometry(0.12 * thin * s, 0.1 * s, 4, 10), bottom);
  pelvis.rotation.z = Math.PI / 2; pelvis.castShadow = true; P.hips.add(pelvis);
  P.spine = new THREE.Group(); P.spine.position.y = 0.04 * s; P.hips.add(P.spine);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.15 * thin * s, 0.32 * s, 4, 12), top);
  torso.position.y = 0.26 * s; torso.scale.set(1, 1, 0.68); torso.castShadow = true; P.spine.add(torso);
  // costelas aparentes no demônio
  P.neck = new THREE.Group(); P.neck.position.y = 0.52 * s; P.spine.add(P.neck);
  const nm = new THREE.Mesh(new THREE.CapsuleGeometry(0.042 * s * thin, 0.09 * s * (o.longNeck ?? 1), 4, 8), skin); nm.position.y = 0.05 * s; nm.castShadow = true; P.neck.add(nm);
  P.head = new THREE.Group(); P.head.position.y = 0.12 * s * (o.longNeck ?? 1); P.neck.add(P.head);
  const hm = new THREE.Mesh(new THREE.SphereGeometry(0.105 * s, 20, 16), skin);
  hm.scale.set(0.88, 1.12 * (o.longHead ?? 1), 0.98); hm.position.y = 0.08 * s * (o.longHead ?? 1); hm.castShadow = true; P.head.add(hm);
  if (!o.faceless) {
    for (const sx of [-1, 1]) {
      const e = new THREE.Mesh(new THREE.SphereGeometry(0.024 * s, 10, 8), M.hole);
      e.position.set(sx * 0.036 * s, 0.1 * s, 0.083 * s); e.scale.set(1, 0.8, 0.6); P.head.add(e);
    }
    const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.03 * s, 10, 8), M.hole);
    mouth.position.set(0, 0.015 * s, 0.088 * s); mouth.scale.set(0.9, o.mouthOpen ?? 0.35, 0.4); P.head.add(mouth); P.mouth = mouth;
  } else {
    // fenda vertical no lugar do rosto
    const slit = new THREE.Mesh(new THREE.SphereGeometry(0.03 * s, 10, 8), o.mouthMat || M.hole);
    slit.position.set(0, 0.07 * s, 0.09 * s); slit.scale.set(0.35, 3.2, 0.5); P.head.add(slit); P.mouth = slit;
  }
  for (const side of [-1, 1]) {
    const key = side < 0 ? 'L' : 'R';
    const sh = new THREE.Group(); sh.position.set(side * 0.2 * thin * s, 0.46 * s, 0); P.spine.add(sh);
    const ua = limb(0.3 * s * armK, 0.045 * s * thin, o.sleeves ? top : skin); sh.add(ua);
    const fa = new THREE.Group(); fa.position.y = -0.3 * s * armK; ua.add(fa);
    fa.add(limb(0.28 * s * armK, 0.037 * s * thin, skin));
    const hand = new THREE.Group(); hand.position.y = -0.28 * s * armK; fa.add(hand);
    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.07 * s, 0.09 * s, 0.03 * s), skin); palm.position.y = -0.045 * s; palm.castShadow = true; hand.add(palm);
    const fl = (o.fingerK ?? 1) * 0.09 * s;
    for (let i = 0; i < 4; i++) {
      const f = limb(fl, 0.009 * s, skin); f.position.set((i - 1.5) * 0.016 * s, -0.09 * s, 0); f.rotation.x = 0.15; hand.add(f);
    }
    P['arm' + key] = ua; P['fore' + key] = fa; P['hand' + key] = hand; P['shoulder' + key] = sh;
    const leg = limb(0.45 * s, 0.065 * s * thin, bottom); leg.position.set(side * 0.09 * s, 0, 0); P.hips.add(leg);
    const shin = new THREE.Group(); shin.position.y = -0.45 * s; leg.add(shin);
    shin.add(limb(0.45 * s, 0.05 * s * thin, o.barelegs ? skin : bottom));
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.08 * s, 0.05 * s, 0.22 * s), skin);
    foot.position.set(0, -0.47 * s, 0.05 * s); foot.castShadow = true; shin.add(foot);
    P['leg' + key] = leg; P['shin' + key] = shin;
  }
  if (o.dress) {
    const d = new THREE.Mesh(new THREE.CylinderGeometry(0.16 * s, 0.3 * s, 0.62 * s * (o.dressLen ?? 1), 14, 3, true), o.dress);
    d.position.y = -0.27 * s * (o.dressLen ?? 1); d.castShadow = true; P.hips.add(d); P.dress = d;
  }
  if (o.hair) {
    const hg = new THREE.Group(); P.head.add(hg); P.hair = hg;
    const len = o.hairLen ?? 0.6;
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.17 * s, len * s), M.hair);
      pl.position.set(Math.sin(a) * 0.08 * s, 0.14 * s - len * s / 2, Math.cos(a) * 0.08 * s);
      pl.rotation.y = a; pl.castShadow = true; hg.add(pl);
    }
    if (o.hairFace) {
      const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.22 * s, len * s), M.hair);
      pl.position.set(0, 0.16 * s - len * s / 2, 0.11 * s); pl.castShadow = true; hg.add(pl);
    }
  }
  P.root.traverse(m => { if (m.isMesh) m.userData.creature = true; });
  return P;
}

// ---------------------------------------------------------------
class Creature {
  constructor(game, parts, o = {}) {
    this.g = game; this.P = parts; this.root = parts.root;
    this.pos = V(); this.yaw = 0; this.vel = V();
    this.active = false; this.state = 'idle'; this.t = 0; this.stateT = 0;
    this.hp = o.hp ?? 3; this.maxHp = this.hp; this.stun = 0;
    this.path = []; this.repath = 0; this.atkCD = 0; this.stepT = 0;
    this.poseClock = 0; this.radius = o.radius ?? 0.35;
    this.root.visible = false; game.scene.add(this.root);
  }
  setState(s) { this.state = s; this.stateT = 0; }
  show(b) { this.active = b; this.root.visible = b; }
  place(x, y, z, yaw = 0) { this.pos.set(x, y, z); this.yaw = yaw; this.sync(); }
  sync() { this.root.position.copy(this.pos); this.root.rotation.y = this.yaw; }
  chest() { return tmp.copy(this.pos).setY(this.pos.y + 1.2); }
  dist() { const p = this.g.player.pos; return Math.hypot(p.x - this.pos.x, p.z - this.pos.z); }
  faceTo(x, z, k = 1) {
    const target = Math.atan2(x - this.pos.x, z - this.pos.z);
    let d = target - this.yaw; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2;
    this.yaw += d * Math.min(1, k);
  }
  // segue rota A* até o alvo
  moveToward(target, speed, dt, floorFn = true) {
    const L = this.g.level;
    this.repath -= dt;
    if (this.repath <= 0) {
      this.repath = 0.3 + Math.random() * 0.15;
      if (L.clearLine(this.pos.x, this.pos.z, target.x, target.z)) this.path = [V(target.x, 0, target.z)];
      else this.path = L.findPath(this.pos.x, this.pos.z, target.x, target.z) || [];
    }
    let wp = this.path[0];
    while (wp && Math.hypot(wp.x - this.pos.x, wp.z - this.pos.z) < 0.25 && this.path.length > 1) { this.path.shift(); wp = this.path[0]; }
    if (!wp) return 0;
    const dx = wp.x - this.pos.x, dz = wp.z - this.pos.z, d = Math.hypot(dx, dz);
    if (d < 0.01) return 0;
    const step = Math.min(d, speed * dt);
    this.pos.x += dx / d * step; this.pos.z += dz / d * step;
    if (floorFn) this.pos.y = L.floorY(this.pos.x, this.pos.z);
    this.faceTo(wp.x, wp.z, dt * 8);
    L.pushDoors(this.pos, this.g.audio);
    return step;
  }
  // visto pelo jogador? (no enquadramento, sem parede no meio, e iluminado)
  isSeen(pt) {
    const G = this.g, cam = G.camera;
    const p = pt || this.chest();
    tmp2.copy(p).sub(cam.position);
    const d = tmp2.length(); tmp2.divideScalar(d);
    const fwd = cam.userData.fwd;
    const dot = tmp2.dot(fwd);
    if (dot < Math.cos(THREE.MathUtils.degToRad(48))) return false;
    if (!G.level.los(cam.position, p)) return false;
    const lit = G.lightsOn || d < 2.2 || (G.player.flashlightOn && dot > Math.cos(0.55) && d < 16) || G.flashT > 0;
    return lit;
  }
  hitBy(ray) {
    if (!this.active) return null;
    const r = new THREE.Raycaster(ray.origin, ray.direction, 0, 40);
    const hits = r.intersectObject(this.root, true);
    return hits.length ? hits[0] : null;
  }
  attack(dmg) {
    this.g.player.damage(dmg, this.pos);
    this.atkCD = 1.2;
  }
  pushPlayerApart() {
    const p = this.g.player.pos; const dx = p.x - this.pos.x, dz = p.z - this.pos.z, d = Math.hypot(dx, dz);
    const min = this.radius + 0.3;
    if (d < min && d > 0.001) { const k = (min - d); this.pos.x -= dx / d * k; this.pos.z -= dz / d * k; }
  }
}

// ------------------- A MÃE: rasteja pelo teto e pelo chão -------------------
export class Crawler extends Creature {
  constructor(game, M) {
    const P = buildHumanoid(M, { h: 1.62, thin: 0.72, armK: 1.4, fingerK: 1.8, skin: M.greySkin, top: M.nightgown, bottom: M.nightgown, hair: true, hairFace: true, hairLen: 0.75, mouthOpen: 1.4 });
    super(game, P, { hp: 3, radius: 0.45 });
    this.onCeiling = false; this.pause = 0; this.nextPause = 2; this.fleeTo = null; this.onFlee = null;
  }
  pose(t, moving) {
    const P = this.P, ph = t * 9;
    const a = Math.sin(ph) * moving, b = Math.sin(ph + Math.PI) * moving;
    // de bruços, tronco paralelo ao chão, membros abertos como aranha
    P.hips.position.y = 0.52 + Math.abs(Math.sin(ph)) * 0.04 * moving;
    P.hips.rotation.set(1.42, 0, Math.sin(ph) * 0.08 * moving);
    P.spine.rotation.set(-0.12, 0, -Math.sin(ph) * 0.1 * moving);
    P.neck.rotation.set(-0.9, 0, Math.sin(t * 13) * 0.06);
    P.head.rotation.set(-0.7, 0, 0.35 + Math.sin(t * 17) * 0.05);
    P.armL.rotation.set(-2.15 + a * 0.45, 0, -0.55); P.armR.rotation.set(-2.15 + b * 0.45, 0, 0.55);
    P.foreL.rotation.set(0.95 - a * 0.3, 0, 0.25); P.foreR.rotation.set(0.95 - b * 0.3, 0, -0.25);
    P.handL.rotation.set(0.8, 0, 0); P.handR.rotation.set(0.8, 0, 0);
    P.legL.rotation.set(-0.75 + b * 0.35, 0, -1.0); P.legR.rotation.set(-0.75 + a * 0.35, 0, 1.0);
    P.shinL.rotation.set(-1.9, 0, 0); P.shinR.rotation.set(-1.9, 0, 0);
    if (P.dress) P.dress.rotation.x = 0;
    if (P.hair) P.hair.rotation.x = 1.2;
  }
  stunPose(t) {
    const P = this.P;
    P.hips.position.y = 0.4; P.spine.rotation.x = 0.3 + Math.sin(t * 40) * 0.1;
    P.armL.rotation.set(-2.6, 0, -0.3 + Math.sin(t * 31) * 0.3); P.armR.rotation.set(-2.6, 0, 0.3 + Math.sin(t * 29) * 0.3);
    P.foreL.rotation.set(-1.6, 0, 0); P.foreR.rotation.set(-1.6, 0, 0);
    P.neck.rotation.x = 0.6 + Math.sin(t * 50) * 0.2; P.head.rotation.y = Math.sin(t * 37) * 0.6;
  }
  toCeiling(x, z) {
    this.onCeiling = true; this.show(true);
    this.pos.set(x, 2.68, z); this.root.rotation.z = Math.PI; this.setState('ceiling');
  }
  drop() {
    this.onCeiling = false; this.root.rotation.z = 0; this.setState('drop');
    this.pos.y = 2.0; this.dropV = 0;
  }
  hurt(hit) {
    if (this.state === 'flee' || this.state === 'hidden') return;
    this.hp--; this.stun = 0.6; this.g.audio.scream(this.pos.clone().setY(0.8), { pitch: 1.3, dur: 0.7 });
    this.g.spawnBlood(hit.point, hit.face ? hit.face.normal : null);
    if (this.hp <= 0) this.flee();
  }
  flashed() {
    if (this.state === 'flee' || this.state === 'hidden' || this.state === 'ceiling') return;
    this.stun = 2.6; this.g.audio.scream(this.pos.clone().setY(0.8), { pitch: 1.6, dur: 1.2, vol: 0.8 });
  }
  flee() {
    this.setState('flee'); this.stun = 0;
    this.g.audio.scream(this.pos.clone().setY(0.8), { pitch: 1.1, dur: 2.2, vol: 1.2 });
  }
  update(dt) {
    if (!this.active) return;
    this.t += dt; this.stateT += dt; this.atkCD -= dt;
    const G = this.g, A = G.audio;
    // pose "engasgada": atualiza a 14 quadros/s com tremores
    this.poseClock -= dt;
    const doPose = this.poseClock <= 0; if (doPose) this.poseClock = 1 / 14;
    if (this.state === 'ceiling') {
      if (doPose) { this.pose(this.t * 0.2, 0.2); this.P.head.rotation.y = Math.PI * 0.95; }
      this.sync(); this.root.rotation.z = Math.PI; return;
    }
    if (this.state === 'drop') {
      this.dropV -= 9.8 * dt; this.pos.y += this.dropV * dt;
      const fy = G.level.floorY(this.pos.x, this.pos.z);
      if (this.pos.y <= fy) { this.pos.y = fy; A.bodyFall(this.pos); this.setState('chase'); this.stun = 0.4; }
      if (doPose) this.pose(this.t, 0); this.sync(); return;
    }
    if (this.state === 'hidden') return;
    if (this.stun > 0) {
      this.stun -= dt; if (doPose) this.stunPose(this.t); this.sync(); return;
    }
    if (this.state === 'flee') {
      const tgt = this.fleeTo || V(15, 0, 7);
      const moved = this.moveToward(tgt, 5.5, dt);
      if (doPose) this.pose(this.t, 1);
      if (Math.hypot(tgt.x - this.pos.x, tgt.z - this.pos.z) < 0.6 || this.stateT > 6) {
        this.show(false); this.setState('hidden'); if (this.onFlee) this.onFlee();
      }
      if (moved && Math.random() < dt * 6) A.skitter(this.pos, 0.3, 0.5);
      this.sync(); return;
    }
    if (this.state === 'chase') {
      const d = this.dist();
      this.nextPause -= dt;
      if (this.pause > 0) { this.pause -= dt; if (doPose) { this.pose(this.t, 0); this.P.head.rotation.z = Math.sin(this.t * 40) * 0.4; } }
      else {
        if (this.nextPause <= 0 && d > 2.5) { this.pause = 0.35 + Math.random() * 0.6; this.nextPause = 1.6 + Math.random() * 2.2; A.boneCrack(this.pos.clone().setY(0.6), 2); }
        const speed = this.retreat > 0 ? -2.5 : 3.9;
        if (this.retreat > 0) {
          this.retreat -= dt;
          const p = G.player.pos; const dx = this.pos.x - p.x, dz = this.pos.z - p.z, dd = Math.hypot(dx, dz) || 1;
          const nx = this.pos.x + dx / dd * 2.5 * dt, nz = this.pos.z + dz / dd * 2.5 * dt;
          if (G.level.walkable(nx, nz)) { this.pos.x = nx; this.pos.z = nz; }
          this.faceTo(p.x, p.z, dt * 6);
        } else {
          this.moveToward(G.player.pos, speed, dt);
        }
        if (doPose) this.pose(this.t, 1);
        this.stepT -= dt; if (this.stepT <= 0) { this.stepT = 0.11; A.skitter(this.pos, 0.12, 0.6); }
        if (d < 1.05 && this.atkCD <= 0) {
          this.attack(22); A.scream(this.pos.clone().setY(0.8), { pitch: 1.4, dur: 0.6 }); this.retreat = 0.9;
        }
      }
      this.pushPlayerApart();
      this.pos.y = G.level.floorY(this.pos.x, this.pos.z);
      this.sync();
    }
  }
}

// ------------------- O PAI: só se move quando ninguém olha -------------------
export class Stalker extends Creature {
  constructor(game, M) {
    const P = buildHumanoid(M, { h: 1.92, thin: 0.9, armK: 1.35, fingerK: 1.4, skin: M.paleSkin, top: M.shirt, bottom: M.pants, sleeves: false, mouthOpen: 2.2 });
    super(game, P, { hp: 3, radius: 0.35 });
    this.seen = false; this.unseenT = 0; this.creakT = 0; this.headTurned = false;
    this.idlePose();
  }
  idlePose() {
    const P = this.P;
    P.spine.rotation.x = 0.12; P.neck.rotation.x = 0.35; P.neck.rotation.z = 0.42;
    P.armL.rotation.set(0.05, 0, 0.06); P.armR.rotation.set(0.05, 0, -0.06);
    P.foreL.rotation.set(-0.08, 0, 0); P.foreR.rotation.set(-0.1, 0, 0);
    P.legL.rotation.set(0, 0, 0); P.legR.rotation.set(0, 0, 0);
    P.shinL.rotation.set(0, 0, 0); P.shinR.rotation.set(0, 0, 0);
    P.head.rotation.y = this.headTurned ? Math.PI : 0;
  }
  approachPose(k) {
    const P = this.P;
    P.armL.rotation.set(-1.2 * k, 0, 0.1); P.armR.rotation.set(-1.3 * k, 0, -0.1);
    P.foreL.rotation.set(-0.2, 0, 0); P.foreR.rotation.set(-0.3, 0, 0);
    P.neck.rotation.z = 0.42 + k * 0.4; P.mouth.scale.y = 0.6 + k * 2.4;
  }
  hurt(hit) {
    this.hp--; this.g.audio.boneCrack(this.chest().clone(), 3); this.g.spawnBlood(hit.point, hit.face ? hit.face.normal : null);
    this.stun = 0.5;
    if (this.hp <= 0) { this.hp = this.maxHp; this.vanish(); }
  }
  flashed() { if (this.state === 'hunt' && this.dist() < 9) this.vanish(); }
  vanish() {
    const A = this.g.audio; A.whisper(this.chest().clone(), 1.2, 0.8);
    // reaparece longe, fora de vista
    const spots = this.g.level.stalkerSpots;
    const p = this.g.player.pos;
    const far = spots.filter(s => Math.hypot(s.x - p.x, s.z - p.z) > 7);
    const s = far[Math.floor(Math.random() * far.length)] || spots[0];
    this.place(s.x, this.g.level.floorY(s.x, s.z), s.z, Math.random() * 6);
    this.relocated = 1.5;
  }
  update(dt) {
    if (!this.active) return;
    this.t += dt; this.stateT += dt; this.atkCD -= dt;
    const G = this.g, A = G.audio;
    if (this.state === 'idle') { this.sync(); return; }
    if (this.relocated > 0) this.relocated -= dt;
    if (this.stun > 0) { this.stun -= dt; this.sync(); return; }
    this.seen = this.isSeen() || this.isSeen(tmp.copy(this.pos).setY(this.pos.y + 1.75));
    const d = this.dist();
    if (this.state === 'hunt') {
      if (this.seen) {
        this.unseenT = 0;
        // parado... mas a cabeça às vezes estala
        if (Math.random() < dt * 0.25) { A.boneCrack(this.chest().clone().setY(this.pos.y + 1.7), 1); this.P.neck.rotation.z += 0.15; }
      } else {
        this.unseenT += dt;
        const speed = d > 9 ? 4.2 : 2.8;
        this.moveToward(G.player.pos, speed, dt);
        this.approachPose(THREE.MathUtils.clamp(1 - (d - 1) / 6, 0, 1));
        this.creakT -= dt;
        if (this.creakT <= 0 && d < 10) { this.creakT = 0.55; A.footstep('wood', this.pos, 0.55); if (Math.random() < 0.35) A.creak(this.pos, 0.5, 0.35, 0.7); }
      }
      if (d < 1.15 && this.atkCD <= 0 && this.relocated <= 0) {
        this.attack(34);
        A.scream(this.chest().clone(), { pitch: 0.75, dur: 0.9, vol: 1.2 });
        this.atkCD = 2.5;
        setTimeout(() => { if (this.state === 'hunt') this.vanish(); }, 350);
      }
      this.pushPlayerApart();
    }
    this.sync();
  }
}

// ------------------- O CREDOR -------------------
export class Credor extends Creature {
  constructor(game, M) {
    const P = buildHumanoid(M, { h: 3.0, thin: 0.78, armK: 1.75, fingerK: 2.6, skin: M.demonSkin, faceless: true, longHead: 1.9, longNeck: 1.9, mouthMat: M.demonMouth });
    super(game, P, { hp: 999, radius: 0.55 });
    this.speed = 1.4; this.stepT = 0; this.growlT = 3;
    // galhada de chifres secos, como os galhos das árvores do quintal
    let sd = 7; const r = () => (sd = (sd * 9301 + 49297) % 233280) / 233280;
    const branch = (parent, len, rad, depth, rot) => {
      const g = new THREE.Group(); g.rotation.set(...rot); parent.add(g);
      const m = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.55, rad, len, 6), M.horn); m.position.y = len / 2; m.castShadow = true; g.add(m);
      if (depth > 0) for (let i = 0; i < 2; i++) { const e = new THREE.Group(); e.position.y = len; g.add(e); branch(e, len * 0.7, rad * 0.6, depth - 1, [(r() - 0.5) * 1.2, r() * 3, (i ? 1 : -1) * (0.3 + r() * 0.5)]); }
    };
    for (const sx of [-1, 1]) { const h = new THREE.Group(); h.position.set(sx * 0.05, 0.38, -0.02); P.head.add(h); branch(h, 0.22, 0.022, 3, [-0.3, 0, sx * 0.7]); }
  }
  walkPose(t, k) {
    const P = this.P, ph = t * 3.2;
    P.spine.rotation.x = 0.35 + Math.sin(ph * 2) * 0.03; P.neck.rotation.x = 0.4; P.neck.rotation.z = Math.sin(t * 0.7) * 0.25;
    P.legL.rotation.x = Math.sin(ph) * 0.45 * k; P.legR.rotation.x = Math.sin(ph + Math.PI) * 0.45 * k;
    P.shinL.rotation.x = Math.max(0, -Math.sin(ph)) * 0.8 * k; P.shinR.rotation.x = Math.max(0, Math.sin(ph)) * 0.8 * k;
    P.armL.rotation.set(Math.sin(ph + Math.PI) * 0.25 * k - 0.2, 0, 0.12); P.armR.rotation.set(Math.sin(ph) * 0.25 * k - 0.2, 0, -0.12);
    P.foreL.rotation.x = -0.3; P.foreR.rotation.x = -0.3;
    P.hips.position.y = 0.95 * (3.0 / 1.7) + Math.abs(Math.sin(ph)) * 0.06;
    P.mouth.scale.y = 3.2 + Math.sin(t * 2) * 0.6;
  }
  emerge(x, z) {
    this.show(true); this.place(x, this.g.level.floorY(x, z) - 3.2, z, 0); this.setState('emerge');
    this.g.audio.growl(V(x, -2, z), 4, 1.4);
  }
  hurt(hit) {
    this.stun = Math.max(this.stun, 0.7); this.g.audio.growl(this.chest().clone(), 0.8, 0.8);
    this.g.spawnBlood(hit.point, null, 0x0a0a0a);
  }
  flashed() { if (this.state === 'hunt' && this.dist() < 10) { this.recoil = 2.5; this.g.audio.scream(this.chest().clone().setY(this.pos.y + 2.6), { pitch: 0.45, dur: 1.6, vol: 1.3 }); } }
  die() { this.setState('die'); this.g.audio.scream(this.chest().clone().setY(this.pos.y + 2.5), { pitch: 0.35, dur: 3.5, vol: 1.6 }); this.g.audio.growl(this.pos, 4, 1.5); }
  update(dt) {
    if (!this.active) return;
    this.t += dt; this.stateT += dt; this.atkCD -= dt;
    const G = this.g, A = G.audio;
    const fy = G.level.floorY(this.pos.x, this.pos.z);
    if (this.state === 'emerge') {
      this.pos.y = Math.min(fy, fy - 3.2 + this.stateT * 1.1);
      this.walkPose(this.t * 0.3, 0.2);
      this.P.armL.rotation.x = -2.8 + this.stateT * 0.5; this.P.armR.rotation.x = -2.9 + this.stateT * 0.5;
      if (this.stateT > 3.2) { this.setState('hunt'); A.scream(this.chest().clone().setY(fy + 2.6), { pitch: 0.4, dur: 2.2, vol: 1.5 }); }
      this.sync(); return;
    }
    if (this.state === 'die') {
      this.pos.y -= dt * 0.9; this.P.spine.rotation.x += dt * 0.3; this.P.armL.rotation.x -= dt; this.P.armR.rotation.x -= dt * 1.2;
      this.P.neck.rotation.z = Math.sin(this.t * 30) * 0.5;
      if (this.stateT > 4) this.show(false);
      this.sync(); return;
    }
    if (this.stun > 0) { this.stun -= dt; this.P.spine.rotation.x = 0.7; this.P.neck.rotation.x = 1.0; this.sync(); return; }
    if (this.recoil > 0) {
      this.recoil -= dt;
      const p = G.player.pos; const dx = this.pos.x - p.x, dz = this.pos.z - p.z, dd = Math.hypot(dx, dz) || 1;
      const nx = this.pos.x + dx / dd * 1.6 * dt, nz = this.pos.z + dz / dd * 1.6 * dt;
      if (G.level.walkable(nx, nz)) { this.pos.x = nx; this.pos.z = nz; }
      this.P.armL.rotation.set(-2.4, 0, 0.4); this.P.armR.rotation.set(-2.5, 0, -0.4); this.P.neck.rotation.x = -0.6 + Math.sin(this.t * 40) * 0.2;
      this.sync(); return;
    }
    if (this.state === 'hunt') {
      const moved = this.moveToward(G.player.pos, this.speed, dt);
      this.walkPose(this.t, moved > 0 ? 1 : 0);
      this.stepT -= dt * this.speed / 1.4;
      if (this.stepT <= 0) { this.stepT = 0.98; A.heavyStep(this.pos, 1); G.shake(0.05); }
      this.growlT -= dt; if (this.growlT <= 0) { this.growlT = 3 + Math.random() * 3; A.growl(this.chest().clone().setY(this.pos.y + 2.5), 1.8, 0.9); }
      const d = this.dist();
      if (d < 1.7 && this.atkCD <= 0) {
        this.attack(48); A.scream(this.chest().clone().setY(this.pos.y + 2.5), { pitch: 0.5, dur: 0.9, vol: 1.4 }); this.atkCD = 1.8;
        this.P.armR.rotation.x = -1.8;
      }
      this.pushPlayerApart();
    }
    this.sync();
  }
}

// figura estática (Clara, fantasmas, corpos)
export function staticFigure(game, M, o) {
  const P = buildHumanoid(M, o);
  game.scene.add(P.root);
  return P;
}
