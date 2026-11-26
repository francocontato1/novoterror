// Corpos humanoides procedurais + IA das entidades.
import * as THREE from 'three';
import * as T from './textures.js';
import { buildBody, bodyMats } from './bodies.js';
import { buildRealBody } from './realbody.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const tmp = V(), tmp2 = V();

function limb(len, r, mat) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, Math.max(0.01, len - r * 2), 4, 10), mat);
  m.position.y = -len / 2; m.castShadow = true; m.receiveShadow = true;
  g.add(m); g.userData.mesh = m;
  return g;
}

let ASSETS = null;
export function setCreatureAssets(a) { ASSETS = a; }

export function makeMats() {
  const B = bodyMats();
  return { ...B, greySkin: B.deadSkin, nightgown: B.gown, eyeShine: B.hole };
}

// rosto escaneado onde faz sentido; esfera (com cabelo) para figuras de costas
export function buildHumanoid(M, o = {}) {
  const opts = { ...o };
  if (opts.dress === undefined && opts.top === M.nightgown) { opts.dress = M.gown; opts.top = opts.skin; }
  if (opts.faceless) opts.face = null;
  return buildBody(M, opts, ASSETS);
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
  sync() { this.root.position.copy(this.pos); this.root.rotation.y = this.yaw; if (this.P.drive) this.P.drive(); }
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
  // ponto central do corpo para mira (muda com a postura)
  aimPoint() { return tmp.copy(this.pos).setY(this.pos.y + (this.aimH ?? 1.2)); }
  hitBy(ray, assist = 0) {
    if (!this.active || this.state === 'hidden' || this.state === 'idle') return null;
    const r = new THREE.Raycaster(ray.origin, ray.direction, 0, 40);
    const hits = r.intersectObject(this.root, true);
    if (hits.length) return hits[0];
    // área de acerto do tamanho do corpo + assistência angular
    const c = this.aimPoint().clone(), d = c.distanceTo(ray.origin);
    const rad = (this.hitR ?? 0.42) + d * assist;
    const p = new THREE.Vector3();
    if (ray.intersectSphere(new THREE.Sphere(c, rad), p)) return { point: p, distance: p.distanceTo(ray.origin), face: null };
    return null;
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

// ------------------- A MÃE: caça pelo teto, despenca, ataca, sobe de novo -------------------
const CEIL = 2.68;
export class Crawler extends Creature {
  constructor(game, M) {
    const P = ASSETS && ASSETS.female ? buildRealBody(ASSETS.female.data, ASSETS.female.imgs, { h: 1.64 }) : buildHumanoid(M, { h: 1.62, thin: 0.72, armK: 1.45, fingerK: 1.9, skin: M.greySkin, dress: M.gown, dressLen: 0.72, hair: true, hairFace: false, hairLen: 0.8, face: 'mother', barelegs: true });
    super(game, P, { hp: 3, radius: 0.42 });
    this.hitR = 0.5;
    this.onCeiling = false; this.fleeTo = null; this.onFlee = null; this.skT = 0; this.retreatT = 0; this.flip = 0;
  }
  pose(t, moving) {
    const P = this.P, ph = t * 9;
    const a = Math.sin(ph) * moving, b = Math.sin(ph + Math.PI) * moving;
    P.hips.position.y = 0.52 + Math.abs(Math.sin(ph)) * 0.04 * moving;
    P.hips.rotation.set(1.42, 0, Math.sin(ph) * 0.08 * moving);
    P.spine.rotation.set(-0.12, 0, -Math.sin(ph) * 0.1 * moving);
    P.neck.rotation.set(-0.9, 0, Math.sin(t * 13) * 0.06);
    // no teto a cabeça gira 180° para olhar para baixo
    P.head.rotation.set(-0.7, this.onCeiling ? Math.PI * 0.92 : 0, 0.35 + Math.sin(t * 17) * 0.05);
    P.armL.rotation.set(-2.15 + a * 0.45, 0, -0.55); P.armR.rotation.set(-2.15 + b * 0.45, 0, 0.55);
    P.foreL.rotation.set(0.95 - a * 0.3, 0, 0.25); P.foreR.rotation.set(0.95 - b * 0.3, 0, -0.25);
    P.handL.rotation.set(0.8, 0, 0); P.handR.rotation.set(0.8, 0, 0);
    P.legL.rotation.set(-0.75 + b * 0.35, 0, -1.0); P.legR.rotation.set(-0.75 + a * 0.35, 0, 1.0);
    P.shinL.rotation.set(-1.9, 0, 0); P.shinR.rotation.set(-1.9, 0, 0);
    if (P.hair) P.hair.rotation.x = this.onCeiling ? -1.4 : 1.2;
  }
  stunPose(t) {
    const P = this.P;
    P.hips.position.y = 0.35; P.hips.rotation.set(1.2, 0, Math.sin(t * 23) * 0.2);
    P.spine.rotation.set(-0.6 + Math.sin(t * 40) * 0.15, 0, 0);
    P.armL.rotation.set(-2.9, 0, -0.3 + Math.sin(t * 31) * 0.4); P.armR.rotation.set(-2.9, 0, 0.3 + Math.sin(t * 29) * 0.4);
    P.foreL.rotation.set(-1.8, 0, 0); P.foreR.rotation.set(-1.8, 0, 0);
    P.neck.rotation.x = -0.2 + Math.sin(t * 50) * 0.3; P.head.rotation.set(0, Math.sin(t * 37) * 0.8, Math.sin(t * 19) * 0.5);
    P.legL.rotation.set(-0.4 + Math.sin(t * 27) * 0.4, 0, -0.6); P.legR.rotation.set(-0.4 - Math.sin(t * 25) * 0.4, 0, 0.6);
  }
  setCeiling(on) { this.onCeiling = on; this.root.rotation.z = on ? Math.PI : 0; }
  toCeiling(x, z, state = 'ceiling') {
    this.show(true); this.setCeiling(true);
    this.pos.set(x, CEIL, z); this.setState(state); this.stun = 0;
  }
  hunt(x, z) { this.hp = this.maxHp; this.toCeiling(x, z, 'ceilHunt'); }
  drop() { this.setCeiling(false); this.setState('drop'); this.pos.y = 2.1; this.dropV = 0; }
  hurt(hit) {
    if (['flee', 'hidden'].includes(this.state)) return;
    this.hp--; this.g.audio.scream(this.pos.clone().setY(this.pos.y > 1.5 ? 2.2 : 0.8), { pitch: 1.3, dur: 0.7 });
    this.g.spawnBlood(hit.point, hit.face ? hit.face.normal : null);
    if (this.hp <= 0) { this.flee(); return; }
    if (this.onCeiling || this.state === 'poise') { this.fall(); return; }
    this.stun = Math.max(this.stun, 0.8);
  }
  // flash: no teto ela despenca e se debate no chão (vulnerável)
  flashed() {
    if (['flee', 'hidden', 'ceiling', 'climb'].includes(this.state)) return;
    this.g.audio.scream(this.pos.clone().setY(this.onCeiling ? 2.2 : 0.8), { pitch: 1.6, dur: 1.2, vol: 0.9 });
    if (this.onCeiling || this.state === 'poise') this.fall(); else { this.stun = 3.2; this.setState('floor'); }
  }
  fall() { this.setCeiling(false); this.setState('fall'); this.pos.y = 2.2; this.dropV = 0; }
  flee() { this.setState('flee'); this.stun = 0; this.g.audio.scream(this.pos.clone().setY(1), { pitch: 1.1, dur: 2.2, vol: 1.2 }); }
  // de pé, torta: pescoço quebrado, braços esticados para você
  poseUpright(t, moving) {
    const P = this.P, ph = t * 6.5, j = Math.sin(t * 31) * 0.05;
    P.hips.position.y = 0.88 + Math.abs(Math.sin(ph)) * 0.03 * moving;
    P.hips.rotation.set(0, 0, Math.sin(ph) * 0.06 + j);
    P.spine.rotation.set(0.32 + j, 0, -0.08);
    P.neck.rotation.set(0.25, 0.1, 0.75 + Math.sin(t * 9) * 0.06);
    P.head.rotation.set(-0.35, 0, 0.25 + j * 2);
    P.armL.rotation.set(-1.35 + Math.sin(ph) * 0.2 * moving, 0, -0.18); P.armR.rotation.set(-1.5 - Math.sin(ph) * 0.2 * moving, 0, 0.22);
    P.foreL.rotation.set(-0.25, 0, 0); P.foreR.rotation.set(-0.15, 0, 0);
    P.handL.rotation.set(0.5, 0, 0); P.handR.rotation.set(0.5, 0, 0);
    P.legL.rotation.set(Math.sin(ph) * 0.45 * moving, 0, -0.06); P.legR.rotation.set(-Math.sin(ph) * 0.45 * moving, 0, 0.06);
    P.shinL.rotation.set(Math.max(0, -Math.sin(ph)) * 0.7 * moving + 0.08, 0, 0); P.shinR.rotation.set(Math.max(0, Math.sin(ph)) * 0.7 * moving + 0.08, 0, 0);
    if (P.hair) P.hair.rotation.x = 0.1;
  }
  update(dt) {
    if (!this.active) return;
    this.t += dt; this.stateT += dt; this.atkCD -= dt;
    const G = this.g, A = G.audio, L = G.level;
    this.poseClock -= dt;
    const doPose = this.poseClock <= 0; if (doPose) this.poseClock = 1 / 18;
    const st = this.state;
    if (st === 'hidden') return;
    this.aimH = this.onCeiling ? -0.42 : (st === 'floor' ? 1.15 : 0.45);
    if (st === 'ceiling') { if (doPose) this.pose(this.t * 0.2, 0.15); this.sync(); return; }
    // caçando pelo teto: o som denuncia; mais lenta que você correndo
    if (st === 'ceilHunt' || st === 'ceilRetreat') {
      let target = G.player.pos;
      if (st === 'ceilRetreat') { target = this.retreatTo || target; if (this.stateT > 5) this.setState('ceilHunt'); }
      const sp = st === 'ceilRetreat' ? 3.2 : (this.dist() > 6 ? 2.6 : 1.9);
      const moved = this.moveToward(target, sp, dt, false); this.pos.y = CEIL;
      if (doPose) this.pose(this.t, moved > 0 ? 1 : 0);
      this.skT -= dt; if (this.skT <= 0 && moved > 0) { this.skT = 0.2 + Math.random() * 0.12; A.skitter(this.pos.clone(), 0.14, 0.6); }
      if (Math.random() < dt * 0.25) A.creak(this.pos.clone(), 1.2, 0.5, 1.1);
      if (st === 'ceilHunt' && this.dist() < 2.2 && this.atkCD <= 0 && L.los(G.camera.position, this.pos.clone().setY(2.3))) {
        // aviso: para em cima de você e grita antes de cair
        this.setState('poise'); A.scream(this.pos.clone().setY(2.3), { pitch: 1.3, dur: 0.8, vol: 1.1 }); G.flickerT = 0.6;
      }
      this.sync(); return;
    }
    if (st === 'poise') {
      if (doPose) { this.pose(this.t * 3, 0.3); this.P.neck.rotation.z = Math.sin(this.t * 40) * 0.3; }
      this.faceTo(G.player.pos.x, G.player.pos.z, dt * 6);
      if (this.stateT > 0.9) { this.drop(); this.lunge = this.dist() < 2.6; }
      this.sync(); return;
    }
    if (st === 'drop' || st === 'fall') {
      this.dropV -= 11 * dt; this.pos.y += this.dropV * dt;
      if (this.lunge) { const p = G.player.pos; const dx = p.x - this.pos.x, dz = p.z - this.pos.z, d = Math.hypot(dx, dz) || 1; const k = Math.max(0, Math.min(d - 0.7, 2.5 * dt)); this.pos.x += dx / d * k; this.pos.z += dz / d * k; this.faceTo(p.x, p.z, 1); }
      const fy = L.floorY(this.pos.x, this.pos.z);
      if (this.pos.y <= fy) {
        this.pos.y = fy; A.bodyFall(this.pos.clone()); G.shake(0.25);
        this.setState('floor');
        if (st === 'fall') this.stun = 3.3;
        else { this.stun = 0.5; if (this.lunge && this.dist() < 1.4) { this.attack(16); A.scream(this.pos.clone().setY(1.4), { pitch: 1.35, dur: 0.6 }); this.atkCD = 1.4; } }
        this.lunge = false;
      }
      if (doPose) this.stunPose(this.t); this.sync(); return;
    }
    if (this.stun > 0) { this.stun -= dt; this.aimH = 0.4; if (doPose) this.stunPose(this.t); this.pushPlayerApart(); this.sync(); return; }
    if (st === 'floor') {
      // levanta torta e vem andando; depois de um tempo volta ao teto
      const moved = this.moveToward(G.player.pos, 2.3, dt);
      if (doPose) this.poseUpright(this.t, moved > 0 ? 1 : 0);
      this.stepT -= dt; if (this.stepT <= 0 && moved > 0) { this.stepT = 0.42; A.footstep('wood', this.pos, 0.5); if (Math.random() < 0.3) A.boneCrack(this.pos.clone().setY(1.5), 1); }
      if (this.dist() < 1.1 && this.atkCD <= 0) { this.attack(16); A.scream(this.pos.clone().setY(1.4), { pitch: 1.4, dur: 0.5 }); this.climb(); }
      else if (this.stateT > 4.5) this.climb();
      this.pushPlayerApart(); this.sync(); return;
    }
    if (st === 'climb') {
      this.pos.y += dt * 5;
      if (doPose) this.stunPose(this.t);
      if (this.pos.y >= CEIL - 0.5) {
        this.setCeiling(true); this.pos.y = CEIL; A.skitter(this.pos.clone(), 0.5, 0.8);
        const p = G.player.pos, spots = L.stalkerSpots.filter((s2) => Math.hypot(s2.x - p.x, s2.z - p.z) > 4.5 && L.floorY(s2.x, s2.z) === 0);
        this.retreatTo = spots[Math.floor(Math.random() * spots.length)] || L.stalkerSpots[0];
        this.setState('ceilRetreat'); this.atkCD = 3;
      }
      this.sync(); return;
    }
    if (st === 'flee') {
      if (this.onCeiling) this.setCeiling(false);
      const tgt = this.fleeTo || V(15, 0, 7);
      const moved = this.moveToward(tgt, 5.5, dt);
      if (doPose) this.pose(this.t, 1);
      if (Math.hypot(tgt.x - this.pos.x, tgt.z - this.pos.z) < 0.6 || this.stateT > 5) { this.show(false); this.setState('hidden'); if (this.onFlee) this.onFlee(); }
      if (moved && Math.random() < dt * 6) A.skitter(this.pos, 0.3, 0.5);
      this.sync(); return;
    }
    if (st === 'chase') { this.climb(); }
    this.sync();
  }
  climb() { this.setState('climb'); this.stun = 0; }
}

// ------------------- O PAI: só se move quando ninguém olha -------------------
export class Stalker extends Creature {
  constructor(game, M) {
    const P = buildHumanoid(M, { h: 1.88, thin: 0.95, armK: 1.25, fingerK: 1.4, skin: M.paleSkin, top: M.shirt, bottom: M.pants, face: 'father', sleeves: true, hair: true, hairLen: 0.14 });
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
    P.neck.rotation.z = 0.42 + k * 0.4;
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
        if (this.creakT <= 0 && d < 10) { this.creakT = 0.55; A.footstep('wood', this.pos, 0.55); if (Math.random() < 0.35) A.creak(this.pos, 0.5, 0.35, 0.7); else if (d > 4 && Math.random() < 0.3) A.drag(this.pos, 0.45); }
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
    const P = buildHumanoid(M, { h: 3.0, thin: 0.7, armK: 1.75, fingerK: 2.6, skin: M.demonSkin, faceless: true, longHead: 1.9, longNeck: 1.9, mouthMat: M.demonMouth, ribs: true });
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
