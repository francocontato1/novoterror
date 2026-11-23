// A casa dos Vasconcelos: geometria, materiais, luzes, portas, colisão e navegação.
import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import * as T from './textures.js';
import { buildHumanoid } from './creatures.js';

const H = 2.7, TH = 0.15;
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

function std(map, o = {}) {
  const m = new THREE.MeshStandardMaterial({ map, roughness: o.rough ?? 0.88, metalness: o.metal ?? 0, color: o.color ?? 0xffffff });
  if (o.bump !== false && map) { m.bumpMap = map; m.bumpScale = o.bump ?? 1.5; }
  if (o.roughMap) m.roughnessMap = o.roughMap;
  return m;
}

// escala UV de uma caixa para que a textura tenha tamanho fixo no mundo
function scaleBoxUV(geo, w, h, d, tile) {
  const uv = geo.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) {
    const k = f * 4 + i; uv.setXY(k, uv.getX(k) * dims[f][0] / tile, uv.getY(k) * dims[f][1] / tile);
  }
  uv.needsUpdate = true;
}

export function buildLevel(game) {
  const scene = game.scene;
  const L = {
    colliders: [], occluders: [], bounce: [], interact: [], doors: [], bulbs: [], reveal: [], props: {}, updaters: [],
    stalkerSpots: [V(1, 0, 7), V(15, 0, 6.8), V(1, 0, 11), V(14.5, 0, 5), V(9, 0, 7), V(4.5, 0, 1)],
  };
  const group = new THREE.Group(); scene.add(group);

  // ---------- materiais ----------
  const M = {
    wpSala: std(T.wallpaper(3, [150, 138, 102])),
    wpHall: std(T.wallpaper(5, [138, 118, 92])),
    wpCasal: std(T.wallpaper(8, [118, 134, 126])),
    wpKid: std(T.wallpaper(9, [176, 146, 146])),
    tileK: std(T.tiles(7, [188, 198, 182], 8), { rough: 0.35, bump: 2 }),
    tileB: std(T.tiles(12, [170, 196, 202], 10), { rough: 0.3, bump: 2 }),
    floorK: std(T.tiles(15, [138, 62, 48], 6), { rough: 0.5, bump: 2 }),
    floorB: std(T.tiles(16, [200, 200, 196], 12), { rough: 0.35, bump: 2 }),
    wood: std(T.woodFloor(5), { rough: 0.6, bump: 2 }),
    porch: std(T.woodFloor(6), { rough: 0.8, color: 0x8a8a8a }),
    ext: std(T.plaster(14), { color: 0xcabd98, rough: 0.95, bump: 0.6 }),
    ceil: std(T.plaster(13), { rough: 0.95 }),
    conc: std(T.concrete(11), { rough: 0.92, bump: 3 }),
    darkWood: std(T.woodFloor(9), { color: 0x6a4a35, rough: 0.6 }),
    paintWood: std(T.woodFloor(10), { color: 0xd8d0c0, rough: 0.7 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 0.45, metalness: 0.7 }),
    rust: std(T.concrete(31), { color: 0x8a5a3a, rough: 0.8, metal: 0.4 }),
    white: std(T.plaster(22), { color: 0xe6e2d8, rough: 0.4 }),
    fabric: std(T.cloth(40, [110, 80, 60], 0.15)),
    blanket: std(T.cloth(41, [120, 60, 70], 0.9)),
    sheet: std(T.cloth(42, [205, 200, 190], 1.0)),
    redCloth: std(T.cloth(43, [120, 10, 12], 0)),
    black: new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.6 }),
    plastic: new THREE.MeshStandardMaterial({ color: 0x1e1e1e, roughness: 0.35 }),
    food: new THREE.MeshStandardMaterial({ color: 0x2a1c0e, roughness: 0.9 }),
    bone: new THREE.MeshStandardMaterial({ color: 0xd8d0b8, roughness: 0.5 }),
    bloodPool: new THREE.MeshStandardMaterial({ color: 0x2a0000, roughness: 0.08, metalness: 0.1 }),
    candle: new THREE.MeshStandardMaterial({ color: 0xe8dfc8, roughness: 0.6 }),
    glass: new THREE.MeshStandardMaterial({ map: T.dirtyGlass(), transparent: true, roughness: 0.1, metalness: 0.3, depthWrite: false }),
    car: new THREE.MeshStandardMaterial({ color: 0xdedede, roughness: 0.25, metalness: 0.4 }),
    carDark: new THREE.MeshStandardMaterial({ color: 0x111418, roughness: 0.2, metalness: 0.6 }),
    tire: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 }),
    bark: std(T.concrete(51), { color: 0x4a3a2c, rough: 1 }),
  };
  const mudT = T.mud(17);
  M.mud = std(mudT.map, { roughMap: mudT.rough, rough: 1, bump: 3 });
  L.M = M;

  // ---------- utilitários ----------
  const addCol = (x0, x1, y0, y1, z0, z1, tag) => { const c = { x0, x1, y0, y1, z0, z1, on: true, tag }; L.colliders.push(c); return c; };
  function box(w, h, d, mat, x, y, z, o = {}) {
    const geo = new THREE.BoxGeometry(w, h, d);
    scaleBoxUV(geo, w, h, d, o.tile ?? 1.2);
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y + h / 2, z);
    if (o.ry) m.rotation.y = o.ry;
    m.castShadow = o.cast ?? true; m.receiveShadow = true;
    (o.parent || group).add(m);
    if (o.col) {
      if (o.ry) { const c = Math.abs(Math.cos(o.ry)), s = Math.abs(Math.sin(o.ry)); const ww = w * c + d * s, dd = w * s + d * c; addCol(x - ww / 2, x + ww / 2, y, y + h, z - dd / 2, z + dd / 2); }
      else addCol(x - w / 2, x + w / 2, y, y + h, z - d / 2, z + d / 2);
    }
    if (o.occ !== false && o.col) L.occluders.push(m);
    return m;
  }
  function cyl(rt, rb, h, mat, x, y, z, seg = 16, o = {}) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
    m.position.set(x, y + h / 2, z); m.castShadow = o.cast ?? true; m.receiveShadow = true;
    (o.parent || group).add(m); return m;
  }
  function plane(w, h, mat, x, y, z, rx = 0, ry = 0, tile = 1.2, o = {}) {
    const geo = new THREE.PlaneGeometry(w, h);
    if (tile) { const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / tile, uv.getY(i) * h / tile); }
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, 0);
    m.receiveShadow = true; m.castShadow = o.cast ?? false; (o.parent || group).add(m);
    if (tile && w * h > 3) L.bounce.push(m);
    return m;
  }
  function decal(tex, w, h, x, y, z, rx, ry, o = {}) {
    const mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, depthWrite: false, roughness: o.rough ?? 0.25, polygonOffset: true, polygonOffsetFactor: -2, opacity: o.opacity ?? 1 });
    const m = plane(w, h, mat, x, y, z, rx, ry, 0, o); m.renderOrder = 2;
    if (o.rz) m.rotation.z = o.rz;
    return m;
  }
  const floorDecal = (tex, s, x, z, y = 0.006, rz = 0, o) => decal(tex, s, s, x, y, z, -Math.PI / 2, 0, { rz, ...o });

  // parede alinhada a eixo com aberturas (portas / janelas)
  // axis 'x': parede ao longo de x em z=c. axis 'z': ao longo de z em x=c. matP = face que olha +normal
  function wall(axis, c, a, b, openings = [], matP, matN, y0 = 0, h = H, o = {}) {
    const segs = []; let cur = a;
    const ops = [...openings].sort((p, q) => p.a - q.a);
    for (const op of ops) { if (op.a > cur) segs.push({ a: cur, b: op.a, lo: 0, hi: h }); if (op.bottom > 0) segs.push({ a: op.a, b: op.b, lo: 0, hi: op.bottom }); if (op.top < h) segs.push({ a: op.a, b: op.b, lo: op.top, hi: h }); cur = op.b; }
    if (cur < b) segs.push({ a: cur, b, lo: 0, hi: h });
    const side = matN || matP;
    const mats = axis === 'x' ? [side, side, matP, matP, matP, side] : [matP, side, matP, matP, matP, matP];
    for (const s of segs) {
      const len = s.b - s.a, mid = (s.a + s.b) / 2, hh = s.hi - s.lo;
      const w = axis === 'x' ? len : TH, d = axis === 'x' ? TH : len;
      const geo = new THREE.BoxGeometry(w, hh, d); scaleBoxUV(geo, w, hh, d, o.tile ?? 1.2);
      // ajusta v para continuidade vertical
      const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) + (y0 + s.lo) / (o.tile ?? 1.2));
      const m = new THREE.Mesh(geo, mats);
      const x = axis === 'x' ? mid : c, z = axis === 'x' ? c : mid;
      m.position.set(x, y0 + s.lo + hh / 2, z); m.castShadow = true; m.receiveShadow = true; group.add(m);
      addCol(x - w / 2, x + w / 2, y0 + s.lo, y0 + s.hi, z - d / 2, z + d / 2);
      L.occluders.push(m);
    }
    // vidros + molduras nas janelas
    for (const op of ops) if (op.window) {
      const mid = (op.a + op.b) / 2, len = op.b - op.a, hh = op.top - op.bottom;
      const gx = axis === 'x' ? mid : c, gz = axis === 'x' ? c : mid;
      const g = plane(len, hh, M.glass, gx, y0 + op.bottom + hh / 2, gz, 0, axis === 'x' ? 0 : Math.PI / 2, 0);
      g.renderOrder = 3; g.receiveShadow = false;
      const fw = 0.05;
      const fr = (ww, hh2, dd, x, y, z) => box(ww, hh2, dd, M.paintWood, x, y, z, { tile: 0.6 });
      if (axis === 'x') {
        fr(len + 0.1, fw, 0.2, mid, y0 + op.bottom - fw, c); fr(len + 0.1, fw, 0.2, mid, y0 + op.top, c);
        fr(fw, hh, 0.2, op.a, y0 + op.bottom, c); fr(fw, hh, 0.2, op.b, y0 + op.bottom, c); fr(fw * 0.6, hh, 0.06, mid, y0 + op.bottom, c);
        addCol(op.a, op.b, y0, y0 + op.top, c - 0.1, c + 0.1);
      } else {
        fr(0.2, fw, len + 0.1, c, y0 + op.bottom - fw, mid); fr(0.2, fw, len + 0.1, c, y0 + op.top, mid);
        fr(0.2, hh, fw, c, y0 + op.bottom, op.a); fr(0.2, hh, fw, c, y0 + op.bottom, op.b); fr(0.06, hh, fw * 0.6, c, y0 + op.bottom, mid);
        addCol(c - 0.1, c + 0.1, y0, y0 + op.top, op.a, op.b);
      }
      L.windows = L.windows || []; L.windows.push(g);
    }
  }
  const win = (a, b) => ({ a, b, bottom: 0.95, top: 2.1, window: true });
  const gap = (a, b) => ({ a, b, bottom: 0, top: 2.1 });

  // porta articulada
  function door(axis, c, a, b, o = {}) {
    const w = b - a, pivot = new THREE.Group();
    if (axis === 'x') pivot.position.set(a, 0, c); else pivot.position.set(c, 0, a);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(axis === 'x' ? w - 0.02 : 0.045, 2.08, axis === 'x' ? 0.045 : w - 0.02), o.mat || M.darkWood);
    if (axis === 'x') panel.position.set(w / 2, 1.04, 0); else panel.position.set(0, 1.04, w / 2);
    panel.castShadow = true; panel.receiveShadow = true; pivot.add(panel);
    // maçaneta
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), M.metal);
    if (axis === 'x') knob.position.set(w - 0.1, 1.0, 0.05); else knob.position.set(0.05, 1.0, w - 0.1);
    pivot.add(knob); const k2 = knob.clone(); if (axis === 'x') k2.position.z = -0.05; else k2.position.x = -0.05; pivot.add(k2);
    // batente
    const tr = (ww, hh, dd, x, y, z) => box(ww, hh, dd, M.paintWood, x, y, z, { tile: 0.6 });
    if (axis === 'x') { tr(0.06, 2.12, 0.2, a - 0.03, 0, c); tr(0.06, 2.12, 0.2, b + 0.03, 0, c); tr(w + 0.12, 0.06, 0.2, (a + b) / 2, 2.1, c); }
    else { tr(0.2, 2.12, 0.06, c, 0, a - 0.03); tr(0.2, 2.12, 0.06, c, 0, b + 0.03); tr(0.2, 0.06, w + 0.12, c, 2.1, (a + b) / 2); }
    group.add(pivot);
    const col = axis === 'x' ? addCol(a, b, 0, 2.1, c - 0.06, c + 0.06, 'door') : addCol(c - 0.06, c + 0.06, 0, 2.1, a, b, 'door');
    const D = {
      pivot, panel, col, axis, open: o.open ?? 0, target: o.open ?? 0, dir: o.dir ?? 1, locked: !!o.locked, name: o.name || 'Porta',
      pos: axis === 'x' ? V((a + b) / 2, 1.1, c) : V(c, 1.1, (a + b) / 2), jammed: false,
    };
    D.set = (v, snd = true) => { D.target = v; if (snd && game.audio.ctx) game.audio.doorOpen(D.pos); };
    D.slam = () => { D.target = 0; D.open = Math.min(D.open, 0.05); game.audio.doorSlam(D.pos); game.shake(0.15); };
    L.doors.push(D);
    L.interact.push({
      pos: D.pos, door: D, get label() { return D.locked ? (D.lockLabel || 'Trancada') : (D.target > 0.5 ? 'Fechar' : 'Abrir') },
      use: () => {
        if (D.locked) { game.audio.latch(D.pos); game.audio.creak(D.pos, 0.2, 0.3); if (D.onLocked) D.onLocked(); return; }
        D.set(D.target > 0.5 ? 0 : 1);
      },
    });
    return D;
  }

  // interação genérica
  function interact(pos, label, use, o = {}) {
    const I = { pos, label, use, enabled: o.enabled ?? true, range: o.range ?? 1.9, hold: o.hold };
    L.interact.push(I); return I;
  }

  // lâmpada pendurada
  function bulb(x, z, room, o = {}) {
    const y = o.y ?? H;
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.4, 4), M.black); cord.position.set(x, y - 0.2, z); group.add(cord);
    const sock = cyl(0.025, 0.03, 0.06, M.black, x, y - 0.46, z, 8, { cast: false });
    const bm = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xffc48a, emissiveIntensity: 0, roughness: 0.2 });
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), bm); b.position.set(x, y - 0.5, z); group.add(b);
    const light = new THREE.PointLight(0xffc890, 0, o.dist ?? 7, 2); light.position.set(x, y - 0.55, z); group.add(light);
    const B = { light, mat: bm, base: (o.power ?? 7) * 3.5, room, flicker: 0, dead: false, pos: V(x, y - 0.5, z) };
    L.bulbs.push(B); return B;
  }

  // =================================================================
  //  TERRENO EXTERNO
  // =================================================================
  const ground = (x0, x1, z0, z1) => plane(x1 - x0, z1 - z0, M.mud, (x0 + x1) / 2, -0.01, (z0 + z1) / 2, -Math.PI / 2, 0, 5);
  ground(-45, 45, -45, 0); ground(-45, 0, 0, 40); ground(0, 45, 12, 40); ground(16, 45, 0, 6); ground(16, 45, 8, 12); ground(20, 45, 6, 8);
  // limites invisíveis do quintal + cerca
  addCol(-3.2, -3, -2, 3, -16.5, 0.2); addCol(19, 19.2, -2, 3, -16.5, 0.2); addCol(-3.2, 19.2, -2, 3, -16.6, -16.4);
  addCol(-3.2, 0, -2, 3, -0.1, 0.1); addCol(16, 19.2, -2, 3, -0.1, 0.1);
  const fencePost = (x, z) => box(0.1, 1.2, 0.1, M.bark, x, 0, z, { tile: 0.5 });
  for (let z = -16.5; z <= 0; z += 2) { fencePost(-3.1, z); fencePost(19.1, z); }
  for (let x = -3; x <= 19; x += 2) if (x < 5 || x > 9) fencePost(x, -16.5);
  box(0.04, 0.08, 16.5, M.bark, -3.1, 0.9, -8.25, { tile: 0.5 }); box(0.04, 0.08, 16.5, M.bark, 19.1, 0.9, -8.25, { tile: 0.5 });
  box(0.04, 0.08, 16.5, M.bark, -3.1, 0.45, -8.25, { tile: 0.5 }); box(0.04, 0.08, 16.5, M.bark, 19.1, 0.45, -8.25, { tile: 0.5 });
  box(8, 0.08, 0.04, M.bark, 1, 0.9, -16.5, { tile: 0.5 }); box(10, 0.08, 0.04, M.bark, 14, 0.9, -16.5, { tile: 0.5 });

  // árvores secas
  function tree(x, z, h, seed) {
    let s = seed;
    const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
    const branch = (p, dir, len, rad, depth) => {
      const end = p.clone().addScaledVector(dir, len);
      const m = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.7, rad, len, 6), M.bark);
      m.position.copy(p).lerp(end, 0.5); m.quaternion.setFromUnitVectors(V(0, 1, 0), dir.clone().normalize()); m.castShadow = true; group.add(m);
      if (depth > 0) for (let i = 0; i < 3; i++) {
        const nd = dir.clone().add(V((r() - 0.5) * 1.4, r() * 0.5, (r() - 0.5) * 1.4)).normalize();
        branch(end, nd, len * (0.55 + r() * 0.2), rad * 0.6, depth - 1);
      }
    };
    branch(V(x, 0, z), V(0, 1, 0), h * 0.4, 0.18, 4);
  }
  tree(-7, -6, 7, 3); tree(-9, -14, 8, 7); tree(23, -10, 9, 11); tree(24, 3, 7, 5); tree(-6, 6, 8, 13); tree(10, -22, 9, 17); tree(-1, -20, 6, 19);

  // viatura
  const car = new THREE.Group(); car.position.set(7.5, 0, -12); car.rotation.y = -0.15; group.add(car);
  box(1.75, 0.62, 4.1, M.car, 0, 0.3, 0, { parent: car });
  box(1.55, 0.5, 2.1, M.car, 0, 0.92, -0.25, { parent: car });
  box(1.5, 0.42, 2.0, M.carDark, 0, 0.96, -0.25, { parent: car }).scale.set(1.04, 1, 1.02);
  box(1.77, 0.12, 4.12, M.carDark, 0, 0.55, 0, { parent: car });
  for (const [wx, wz] of [[-0.82, 1.3], [0.82, 1.3], [-0.82, -1.3], [0.82, -1.3]]) {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.22, 16), M.tire); w.rotation.z = Math.PI / 2; w.position.set(wx, 0.31, wz); w.castShadow = true; car.add(w);
  }
  const barR = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.22), new THREE.MeshStandardMaterial({ color: 0x300000, emissive: 0xff0000, emissiveIntensity: 0 }));
  barR.position.set(-0.3, 1.47, -0.1); car.add(barR);
  const barB = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.22), new THREE.MeshStandardMaterial({ color: 0x000030, emissive: 0x0030ff, emissiveIntensity: 0 }));
  barB.position.set(0.3, 1.47, -0.1); car.add(barB);
  const hlMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2d0, emissiveIntensity: 3 });
  for (const sx of [-0.6, 0.6]) { const hl = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.04), hlMat); hl.position.set(sx, 0.72, 2.06); car.add(hl); }
  addCol(5.9, 9.1, 0, 1.5, -14.2, -9.8);
  const redL = new THREE.PointLight(0xff1010, 0, 11, 2); redL.position.set(6.9, 1.7, -12); group.add(redL);
  const blueL = new THREE.PointLight(0x1040ff, 0, 11, 2); blueL.position.set(8.1, 1.7, -12); group.add(blueL);
  const head = new THREE.SpotLight(0xfff0d8, 220, 32, 0.42, 0.5, 1.6);
  head.position.set(7.8, 0.75, -9.8); head.target.position.set(6.2, 1.0, 2); group.add(head, head.target);
  head.castShadow = true; head.shadow.mapSize.set(1024, 1024); head.shadow.camera.near = 0.5; head.shadow.camera.far = 30; head.shadow.bias = -0.0004;
  L.props.car = { car, redL, blueL, barR, barB, head, hlMat };
  L.updaters.push((dt, t) => {
    if (!L.props.car.sirenOn) { redL.intensity = blueL.intensity = 0; barR.material.emissiveIntensity = barB.material.emissiveIntensity = 0; return; }
    const ph = (t * 2.2) % 1, r = ph < 0.5 && (ph * 8 % 1) < 0.6 ? 1 : 0, b = ph >= 0.5 && (ph * 8 % 1) < 0.6 ? 1 : 0;
    redL.intensity = r * 30; blueL.intensity = b * 40; barR.material.emissiveIntensity = r * 6; barB.material.emissiveIntensity = b * 6;
  });
  interact(V(7.5, 1, -9.6), 'Rádio da viatura', () => game.story.event('carRadio'), { range: 2.4 });

  // =================================================================
  //  CASA
  // =================================================================
  // pisos
  plane(8, 6, M.wood, 4, 0, 3, -Math.PI / 2, 0, 2.2);
  plane(8, 6, M.floorK, 12, 0, 3, -Math.PI / 2, 0, 1.6);
  plane(16, 2, M.wood, 8, 0, 7, -Math.PI / 2, 0, 2.2);
  plane(6, 4, M.wood, 3, 0, 10, -Math.PI / 2, 0, 2.2);
  plane(4, 4, M.floorB, 8, 0, 10, -Math.PI / 2, 0, 1.2);
  plane(6, 4, M.wood, 13, 0, 10, -Math.PI / 2, 0, 2.2);
  // teto
  plane(16, 12, M.ceil, 8, H, 6, Math.PI / 2, 0, 2);
  // telhado
  const roofMat = std(T.concrete(61), { color: 0x5a3020, rough: 0.9 });
  const ang = Math.atan2(1.6, 6.8);
  const r1 = box(17.2, 0.1, 7.1, roofMat, 8, 0, 0, { tile: 2 }); r1.position.set(8, H + 0.85, 2.8); r1.rotation.x = ang;
  const r2 = box(17.2, 0.1, 7.1, roofMat, 8, 0, 0, { tile: 2 }); r2.position.set(8, H + 0.85, 9.2); r2.rotation.x = -ang;
  box(16, 0.2, 12, M.ext, 8, H, 6, { tile: 3 });
  // empenas
  for (const gx of [0, 16]) {
    const sh = new THREE.Shape(); sh.moveTo(-6, 0); sh.lineTo(6, 0); sh.lineTo(0, 1.65); sh.lineTo(-6, 0);
    const gm = new THREE.Mesh(new THREE.ShapeGeometry(sh), M.ext); gm.position.set(gx, H, 6); gm.rotation.y = Math.PI / 2; group.add(gm);
    const gm2 = gm.clone(); gm2.rotation.y = -Math.PI / 2; group.add(gm2);
  }

  // paredes externas
  wall('x', 0, 0, 16, [win(1.8, 3.4), gap(5.4, 6.4), win(10, 11.6)], M.wpSala, M.ext);
  // ajusta face interna da cozinha
  wall('x', 12, 0, 16, [win(1.0, 2.2), win(4.4, 5.4), win(11, 12.4)], M.ext, M.wpCasal);
  wall('z', 0, 0, 12, [win(1.5, 3.0), win(10.4, 11.6)], M.wpSala, M.ext);
  wall('z', 16, 0, 12, [win(2.2, 3.6), gap(6.5, 7.5)], M.ext, M.tileK);
  // internas
  wall('z', 8, 0, 6, [gap(2.5, 3.5)], M.tileK, M.wpSala);
  wall('x', 6, 0, 16, [gap(3.5, 4.5), gap(11.5, 12.5)], M.wpHall, M.wpSala);
  wall('x', 8, 0, 16, [gap(2.5, 3.5), gap(7.5, 8.5), gap(12.5, 13.5)], M.wpCasal, M.wpHall);
  wall('z', 6, 8, 12, [], M.tileB, M.wpCasal);
  wall('z', 10, 8, 12, [], M.wpKid, M.tileB);

  // portas
  const front = door('x', 0, 5.4, 6.4, { name: 'Porta da frente', open: 0.12 });
  door('x', 6, 11.5, 12.5, { open: 1, dir: 1 });
  const dCasal = door('x', 8, 2.5, 3.5, { open: 0 });
  const dBath = door('x', 8, 7.5, 8.5, { open: 0 });
  const dKid = door('x', 8, 12.5, 13.5, { open: 0 });
  const dBase = door('z', 16, 6.5, 7.5, { open: 0, locked: true, name: 'Porão', mat: std(T.woodFloor(33), { color: 0x4a3020 }) });
  dBase.lockLabel = 'Trancada com cadeado';
  L.props.doors = { front, dCasal, dBath, dKid, dBase };

  // varanda
  plane(10, 2.6, M.porch, 8, 0.01, -1.3, -Math.PI / 2, 0, 2);
  box(10.4, 0.12, 2.9, M.darkWood, 8, 2.55, -1.35, { tile: 2 });
  for (const px of [3.1, 6.9, 9.1, 12.9]) box(0.12, 2.55, 0.12, M.paintWood, px, 0, -2.5, { col: true, tile: 0.6 });
  box(0.6, 0.45, 0.6, M.darkWood, 11.5, 0, -1, { col: true, tile: 0.6 }); // cadeira velha
  box(0.6, 0.55, 0.06, M.darkWood, 11.5, 0.45, -1.28, { tile: 0.6 });
  const porchBulb = bulb(6, -1.2, 'porch', { y: 2.55, power: 0 });
  porchBulb.dead = true;

  // ---------- SALA ----------
  const sofa = [box(0.9, 0.42, 2.1, M.fabric, 0.55, 0, 2.2, { col: true }), box(0.22, 0.5, 2.1, M.fabric, 0.18, 0.42, 2.2), box(0.9, 0.22, 0.2, M.fabric, 0.55, 0.42, 1.2), box(0.9, 0.22, 0.2, M.fabric, 0.55, 0.42, 3.2)];
  box(0.5, 0.5, 1.1, M.darkWood, 3.3, 0, 2.2, { col: true });
  box(0.5, 0.46, 0.58, M.plastic, 3.32, 0.5, 2.2);
  const tvTex = T.tvStatic();
  const tvScreen = plane(0.44, 0.34, new THREE.MeshStandardMaterial({ map: tvTex, emissive: 0xffffff, emissiveMap: tvTex, emissiveIntensity: 1.2 }), 3.065, 0.73, 2.2, 0, -Math.PI / 2, 0);
  const tvLight = new THREE.PointLight(0xa8c0ff, 1.2, 4, 2); tvLight.position.set(2.8, 0.75, 2.2); group.add(tvLight);
  L.props.tv = { tvTex, tvScreen, tvLight, on: true };
  L.updaters.push((dt, t) => { if (L.props.tv.on) { if (Math.random() < 0.5) tvTex.userData.update(t); tvLight.intensity = 0.7 + Math.random() * 0.6; } else tvLight.intensity = 0; });
  // mesa de jantar posta
  box(1.7, 0.05, 0.95, M.darkWood, 5.5, 0.73, 4.2, { tile: 0.8 });
  for (const [lx, lz] of [[-0.78, -0.4], [0.78, -0.4], [-0.78, 0.4], [0.78, 0.4]]) box(0.06, 0.73, 0.06, M.darkWood, 5.5 + lx, 0, 4.2 + lz);
  addCol(4.65, 6.35, 0, 0.78, 3.72, 4.68);
  const chairs = [[5.1, 3.45, 0], [5.9, 3.45, 0], [5.1, 4.95, Math.PI], [5.9, 4.95, Math.PI]];
  for (const [cx, cz, r] of chairs) {
    box(0.42, 0.04, 0.42, M.darkWood, cx, 0.45, cz, { tile: 0.6 });
    for (const [lx, lz] of [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]]) box(0.04, 0.45, 0.04, M.darkWood, cx + lx, 0, cz + lz);
    box(0.42, 0.5, 0.04, M.darkWood, cx, 0.49, cz + (r ? 0.19 : -0.19), { tile: 0.6 });
  }
  // cadeira caída
  const fallen = box(0.42, 0.04, 0.42, M.darkWood, 6.7, 0.0, 4.6, { tile: 0.6 }); fallen.rotation.z = 1.4; fallen.position.y = 0.21;
  const plateMat = new THREE.MeshStandardMaterial({ color: 0xe8e4da, roughness: 0.3 });
  const plates = [[5.1, 3.95], [5.9, 3.95], [5.1, 4.45], [5.9, 4.45]];
  for (const [px, pz] of plates) {
    cyl(0.13, 0.1, 0.02, plateMat, px, 0.755, pz, 20);
    const f = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), M.food); f.scale.set(1, 0.35, 0.8); f.position.set(px + 0.02, 0.78, pz); group.add(f);
  }
  // dentes no prato
  for (let i = 0; i < 9; i++) { const t = new THREE.Mesh(new THREE.BoxGeometry(0.009, 0.014, 0.008), M.bone); t.position.set(5.9 + (Math.random() - 0.5) * 0.12, 0.775, 4.45 + (Math.random() - 0.5) * 0.12); t.rotation.set(Math.random() * 3, Math.random() * 3, 0); group.add(t); }
  floorDecal(T.bloodSplat(3, 'splat'), 0.25, 5.9, 4.45, 0.769);
  interact(V(5.9, 0.9, 4.45), 'Examinar prato', () => game.story.event('teeth'));
  // tapete
  plane(2.6, 1.8, std(T.cloth(44, [110, 40, 35], 0.3), { bump: false }), 5.5, 0.004, 4.2, -Math.PI / 2, 0, 1.3);
  // rastro de sangue até o corredor
  for (let i = 0; i < 7; i++) floorDecal(T.bloodSplat(10 + i, 'smear'), 0.9, 5.1 - i * 0.18, 4.9 + i * 0.17, 0.007 + i * 0.0005, -0.8 + (Math.random() - 0.5) * 0.4);
  // retrato da avó (olhos queimados)
  const gp = plane(0.5, 0.65, new THREE.MeshStandardMaterial({ map: T.grannyPortrait(), roughness: 0.4 }), 0.085, 1.75, 2.2, 0, Math.PI / 2, 0);
  box(0.04, 0.72, 0.57, M.darkWood, 0.09, 1.39, 2.2);
  gp.position.x = 0.115;
  interact(V(0.3, 1.7, 2.2), 'Examinar retrato', () => game.story.event('granny'));
  // crucifixo invertido
  box(0.04, 0.5, 0.04, M.darkWood, 1.6, 1.45, 5.9); box(0.3, 0.04, 0.04, M.darkWood, 1.6, 1.55, 5.9);
  // foto da família
  plane(0.5, 0.4, new THREE.MeshStandardMaterial({ map: T.familyPhoto(2, 4, false), roughness: 0.4 }), 6.4, 1.6, 5.91, 0, Math.PI, 0);
  // escrita revelada pelo flash
  const rv1 = decal(T.bloodText('ELA NOS EMPRESTOU'), 2.6, 0.65, 7.91, 1.6, 4.7, 0, -Math.PI / 2, { rough: 0.6 });
  L.reveal.push(rv1);
  // telefone de parede
  box(0.08, 0.22, 0.16, M.plastic, 7.88, 1.3, 1.3);
  const handset = box(0.06, 0.05, 0.22, M.plastic, 7.84, 1.48, 1.3);
  L.props.phone = { pos: V(7.8, 1.4, 1.3), handset };
  interact(V(7.8, 1.4, 1.3), 'Telefone', () => game.story.event('phone'));
  // interruptor
  box(0.08, 0.12, 0.02, M.white, 4.8, 1.2, 0.09);
  interact(V(4.8, 1.25, 0.1), 'Interruptor', () => game.story.event('switch'));
  bulb(4, 3, 'sala');

  // ---------- COZINHA ----------
  box(0.62, 0.88, 4.6, M.white, 15.6, 0, 2.6, { col: true });
  box(0.66, 0.04, 4.62, std(T.concrete(71), { color: 0x6a6a62, rough: 0.4 }), 15.58, 0.88, 2.6);
  box(0.45, 0.04, 0.6, M.metal, 15.6, 0.89, 3.1); // pia
  box(0.36, 0.7, 4.6, M.white, 15.75, 1.55, 2.6, { tile: 0.8 });
  box(0.62, 0.88, 0.62, M.white, 15.6, 0, 5.4, { col: true });
  for (const [bx, bz] of [[15.45, 5.25], [15.75, 5.25], [15.45, 5.55], [15.75, 5.55]]) cyl(0.08, 0.08, 0.02, M.black, bx, 0.88, bz, 12);
  // geladeira
  box(0.72, 0.6, 0.68, M.white, 8.7, 0, 0.5, { tile: 0.8 });
  box(0.72, 1.12, 0.04, M.white, 8.7, 0.6, 0.18, { tile: 0.8 });
  box(0.04, 1.12, 0.68, M.white, 8.36, 0.6, 0.5, { tile: 0.8 });
  box(0.04, 1.12, 0.68, M.white, 9.04, 0.6, 0.5, { tile: 0.8 });
  box(0.72, 0.04, 0.68, M.white, 8.7, 1.68, 0.5, { tile: 0.8 });
  box(0.64, 0.015, 0.6, M.metal, 8.7, 1.15, 0.5);
  addCol(8.34, 9.06, 0, 1.72, 0.16, 0.84);
  const fPivot = new THREE.Group(); fPivot.position.set(8.34, 0, 0.86); group.add(fPivot);
  const fDoor = box(0.72, 1.1, 0.06, M.white, 0.36, 0.6, 0, { parent: fPivot, tile: 0.8 });
  const fLight = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 1.0), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xdde8ff, emissiveIntensity: 0 }));
  fLight.position.set(8.7, 1.15, 0.2); group.add(fLight);
  // mão decepada na geladeira
  const handG = new THREE.Group(); handG.position.set(8.7, 1.25, 0.5); handG.rotation.set(0.2, 0.5, 1.5); group.add(handG);
  const sk = new THREE.MeshStandardMaterial({ map: T.skin(55, [170, 150, 135]), roughness: 0.5 });
  const palm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.03), sk); handG.add(palm);
  for (let i = 0; i < 4; i++) { const f = new THREE.Mesh(new THREE.CapsuleGeometry(0.009, 0.07, 3, 6), sk); f.position.set((i - 1.5) * 0.019, 0.09, 0); f.rotation.x = 0.4 + i * 0.1; handG.add(f); }
  const wrist = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.028, 0.04, 10), new THREE.MeshStandardMaterial({ color: 0x5a0000, roughness: 0.3 })); wrist.position.y = -0.07; handG.add(wrist);
  floorDecal(T.bloodSplat(21, 'pool'), 0.4, 8.7, 0.5, 1.13);
  for (let i = 0; i < 4; i++) { const j = cyl(0.05, 0.05, 0.14, new THREE.MeshStandardMaterial({ color: 0x5a3010, roughness: 0.2, transparent: true, opacity: 0.8 }), 8.5 + i * 0.12, 0.75, 0.4, 10); }
  L.props.fridge = { pivot: fPivot, light: fLight, open: 0, target: 0 };
  interact(V(8.9, 1.1, 1.0), 'Abrir geladeira', () => game.story.event('fridge'));
  floorDecal(T.bloodSplat(22, 'pool'), 1.4, 9.3, 1.4, 0.006);
  // mesa da cozinha
  box(1.1, 0.05, 0.8, M.darkWood, 11.5, 0.75, 3, { tile: 0.8 });
  for (const [lx, lz] of [[-0.5, -0.35], [0.5, -0.35], [-0.5, 0.35], [0.5, 0.35]]) box(0.05, 0.75, 0.05, M.darkWood, 11.5 + lx, 0, 3 + lz);
  addCol(10.95, 12.05, 0, 0.8, 2.6, 3.4);
  const knife = box(0.3, 0.005, 0.03, M.metal, 11.3, 0.8, 3.1); knife.rotation.y = 0.4;
  floorDecal(T.bloodSplat(23, 'splat'), 0.5, 11.6, 3.0, 0.776);
  // quadro de luz
  box(0.4, 0.5, 0.1, M.rust, 13.5, 1.3, 0.13);
  const fuseLed = new THREE.Mesh(new THREE.SphereGeometry(0.012, 6, 6), new THREE.MeshStandardMaterial({ color: 0x220000, emissive: 0xff2000, emissiveIntensity: 0 }));
  fuseLed.position.set(13.65, 1.72, 0.19); group.add(fuseLed);
  L.props.fuse = { led: fuseLed };
  interact(V(13.5, 1.55, 0.25), 'Quadro de luz', () => game.story.event('fusebox'));
  // gaveta com munição
  L.props.drawer = interact(V(15.25, 0.8, 1.4), 'Abrir gaveta', () => game.story.event('drawer'));
  bulb(12, 3, 'cozinha');
  // pegadas de sangue cruzando a cozinha (dedos virados para trás)
  for (let i = 0; i < 9; i++) floorDecal(T.bloodSplat(60 + (i % 2), 'hand'), 0.22, 9.6 + i * 0.55, 2.0 + Math.sin(i) * 0.3 + (i % 2) * 0.25, 0.007, Math.PI + (i % 2 ? 0.3 : -0.3), { opacity: 0.8 });

  // ---------- CORREDOR ----------
  plane(14, 0.9, std(T.cloth(45, [90, 30, 30], 0.2), { bump: false }), 8, 0.004, 7, -Math.PI / 2, 0, 1.2);
  const photoSpots = [4.8, 5.8, 9.6, 10.6, 14.2];
  photoSpots.forEach((px, i) => {
    plane(0.32, 0.26, new THREE.MeshStandardMaterial({ map: T.familyPhoto(5 + i, 3 + (i % 2), true, i % 2 === 0), roughness: 0.4 }), px, 1.55 + (i % 2) * 0.12, 7.91, 0, Math.PI, 0);
    box(0.36, 0.3, 0.02, M.darkWood, px, 1.40 + (i % 2) * 0.12, 7.92);
  });
  // oratório da avó
  box(0.6, 0.9, 0.35, M.darkWood, 9.5, 0, 6.27, { col: true, tile: 0.6 });
  for (let i = 0; i < 3; i++) cyl(0.015, 0.015, 0.1 + i * 0.03, M.candle, 9.35 + i * 0.15, 0.9, 6.25, 8);
  const saint = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.16, 3, 8), new THREE.MeshStandardMaterial({ color: 0x5a6a8a, roughness: 0.5 })); saint.position.set(9.5, 1.03, 6.2); group.add(saint);
  // santo de cabeça para baixo
  saint.rotation.z = Math.PI;
  bulb(4, 7, 'hall', { power: 5 }); bulb(12, 7, 'hall', { power: 5 });
  // avó fantasma (só no flash) no fim do corredor
  const M2 = game.cmats;
  const ghost = buildHumanoid(M2, { h: 1.55, skin: M2.ghost, top: M2.ghost, bottom: M2.ghost, dress: M2.ghost, hair: true, hairLen: 0.3, mouthOpen: 2.5 });
  ghost.root.position.set(15.3, 0, 7.0); ghost.root.rotation.y = -Math.PI / 2; ghost.neck.rotation.z = 0.5; group.add(ghost.root);
  L.reveal.push(ghost.root); L.props.ghost = ghost.root;

  // ---------- QUARTO DO CASAL ----------
  box(1.7, 0.42, 2.1, M.darkWood, 3, 0, 10.9, { col: true });
  box(1.6, 0.2, 2.0, M.sheet, 3, 0.42, 10.9);
  box(1.62, 0.06, 1.5, M.blanket, 3, 0.62, 10.6);
  box(1.7, 0.9, 0.08, M.darkWood, 3, 0.4, 11.95, { tile: 0.8 });
  for (const px of [2.6, 3.4]) { const p = box(0.55, 0.12, 0.35, M.sheet, px, 0.62, 11.65); p.rotation.x = -0.2; }
  floorDecal(T.bloodSplat(31, 'pool'), 1.1, 3.3, 10.6, 0.685, 0.5);
  box(0.45, 0.55, 0.4, M.darkWood, 1.75, 0, 11.7, { col: true });
  box(0.45, 0.55, 0.4, M.darkWood, 4.25, 0, 11.7, { col: true });
  box(0.6, 2.0, 1.5, M.darkWood, 0.38, 0, 9.0, { col: true });
  // fusível no criado-mudo
  const fuseItem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.07, 8), new THREE.MeshStandardMaterial({ color: 0xd8c890, roughness: 0.3, metalness: 0.4 }));
  fuseItem.rotation.z = Math.PI / 2; fuseItem.position.set(4.25, 0.57, 11.65); group.add(fuseItem);
  L.props.fuseItem = fuseItem;
  L.props.fuseI = interact(V(4.25, 0.6, 11.65), 'Pegar fusível', () => game.story.event('takeFuse'), { enabled: false });
  bulb(3, 10, 'casal');
  // escrita no teto
  decal(T.bloodText('NÃO OLHE PRA CIMA'), 2.2, 0.55, 3, H - 0.01, 9.4, Math.PI / 2, 0, { rz: Math.PI });

  // ---------- BANHEIRO ----------
  const tubX = 7.05, tubZ = 11.5;
  box(1.7, 0.55, 0.08, M.white, tubX, 0, 11.08, { col: true });
  box(0.08, 0.55, 0.8, M.white, 6.2, 0, tubZ); box(0.08, 0.55, 0.8, M.white, 7.9, 0, tubZ, { col: true });
  box(1.7, 0.06, 0.8, M.white, tubX, 0, tubZ);
  addCol(6.15, 7.95, 0, 0.6, 11.05, 11.95);
  const bloodSurf = plane(1.6, 0.74, M.bloodPool, tubX, 0.47, tubZ, -Math.PI / 2, 0, 0);
  L.props.tub = { surf: bloodSurf, pos: V(tubX, 0.5, tubZ) };
  decal(T.bloodSplat(41, 'drip'), 0.6, 0.6, 7.4, 0.3, 11.035, 0, Math.PI);
  // vaso e pia
  box(0.38, 0.4, 0.5, M.white, 9.6, 0, 9.0, { col: true }); box(0.4, 0.35, 0.18, M.white, 9.75, 0.4, 9.0);
  box(0.45, 0.12, 0.38, M.white, 9.7, 0.78, 10.7, { col: true }); cyl(0.05, 0.07, 0.78, M.white, 9.75, 0, 10.7, 10);
  // espelho (renderização real de reflexo)
  const mirror = new Reflector(new THREE.PlaneGeometry(0.55, 0.75), { textureWidth: 512, textureHeight: 680, color: 0x9a9a9a, clipBias: 0.003 });
  mirror.position.set(9.9, 1.55, 10.7); mirror.rotation.y = -Math.PI / 2; group.add(mirror);
  mirror.camera.layers.enable(2);
  box(0.03, 0.82, 0.62, M.darkWood, 9.93, 1.14, 10.7);
  L.props.mirror = mirror;
  bulb(8, 10, 'banheiro', { power: 4 });
  floorDecal(T.bloodSplat(42, 'pool'), 0.9, 7.6, 10.2, 0.006);
  // sangue escorrendo por baixo da porta (aparece depois)
  const underDoor = floorDecal(T.bloodSplat(43, 'pool'), 1.4, 8, 7.5, 0.008); underDoor.visible = false;
  L.props.underDoor = underDoor;

  // ---------- QUARTO DA CRIANÇA ----------
  box(0.95, 0.38, 1.9, std(T.woodFloor(12), { color: 0xb08a70 }), 15.42, 0, 10.85, { col: true });
  box(0.9, 0.12, 1.85, std(T.cloth(46, [200, 170, 190], 0.1)), 15.42, 0.38, 10.85);
  box(0.95, 0.7, 0.06, std(T.woodFloor(12), { color: 0xb08a70 }), 15.42, 0, 11.82);
  // brinquedos
  const toyCols = [0xb03030, 0x3050b0, 0xd0a020, 0x30a050];
  for (let i = 0; i < 6; i++) { const t = box(0.08, 0.08, 0.08, new THREE.MeshStandardMaterial({ color: toyCols[i % 4], roughness: 0.6 }), 11.5 + Math.random() * 1.5, 0, 9 + Math.random() * 2); t.rotation.y = Math.random() * 3; }
  const doll = buildHumanoid(game.cmats, { h: 0.35, skin: game.cmats.childSkin, dress: game.cmats.childDress, hair: true, hairLen: 0.2 });
  doll.root.position.set(12.2, 0.05, 11.4); doll.root.rotation.set(-Math.PI / 2, 0, 0.6); group.add(doll.root);
  doll.head.rotation.y = Math.PI;
  // desenhos
  [9.0, 9.7, 10.4].forEach((z, i) => plane(0.4, 0.31, new THREE.MeshStandardMaterial({ map: T.childDrawing(4 + i), roughness: 0.8 }), 10.085, 1.25 + (i % 2) * 0.15, z, 0, Math.PI / 2, 0));
  interact(V(10.3, 1.3, 9.7), 'Examinar desenhos', () => game.story.event('drawings'));
  bulb(13, 10, 'kid', { power: 5 });
  // marcas de mãos no teto (aparecem depois)
  const hands = new THREE.Group(); group.add(hands); hands.visible = false;
  for (let i = 0; i < 26; i++) {
    const d = decal(T.bloodSplat(80 + (i % 4), 'hand'), 0.24, 0.24, 10.6 + Math.random() * 5, H - 0.008, 8.5 + Math.random() * 3.3, Math.PI / 2, 0, { rz: Math.random() * 6.28, parent: hands });
  }
  L.props.ceilingHands = hands;
  // chave
  const key = new THREE.Group();
  const km = new THREE.MeshStandardMaterial({ color: 0x9a8a5a, metalness: 0.8, roughness: 0.35 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.005, 6, 12), km); key.add(ring);
  const stem = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.06, 0.004), km); stem.position.y = -0.045; key.add(stem);
  key.rotation.x = -Math.PI / 2; key.position.set(14.7, 0.01, 10.6); key.visible = false; group.add(key);
  L.props.key = key;
  L.props.keyI = interact(V(14.7, 0.2, 10.6), 'Pegar chave', () => game.story.event('takeKey'), { enabled: false });

  // =================================================================
  //  ESCADA + PORÃO
  // =================================================================
  const BY = -3;
  wall('x', 6, 16, 20, [], M.conc, M.ext, BY, H - BY, { tile: 1.5 });
  wall('x', 8, 16, 20, [], M.ext, M.conc, BY, H - BY, { tile: 1.5 });
  box(4.2, 0.2, 2.3, M.ext, 18, H, 7, { tile: 2 });
  box(4, 0.1, 2, M.conc, 18, H - 0.1, 7, { tile: 2, cast: false });
  wall('z', 20, 6, 8, [{ a: 6, b: 8, bottom: 0, top: 2.4 }], M.conc, M.conc, BY, H - BY);
  for (let i = 0; i < 12; i++) {
    const x0 = 16 + i * (4 / 12), y = -i * (3 / 12);
    box(4 / 12, 0.08, 2, M.darkWood, x0 + 2 / 12, y - 0.08 - 3 / 12, 7, { tile: 0.8 });
  }
  // corrimão
  const rail = box(4.6, 0.05, 0.05, M.darkWood, 18, 0, 6.2); rail.position.y = -0.6; rail.rotation.z = -Math.atan2(3, 4);
  // porão
  plane(8, 12, M.conc, 24, BY + 0.005, 6, -Math.PI / 2, 0, 2.5);
  plane(8, 12, M.conc, 24, -0.6, 6, Math.PI / 2, 0, 2.5);
  for (let z = 0.5; z < 12; z += 1.4) box(8, 0.18, 0.12, M.darkWood, 24, -0.78, z, { tile: 1 });
  wall('z', 20, 0, 6, [], M.conc, M.conc, BY, 2.4, { tile: 1.5 });
  wall('z', 20, 8, 12, [], M.conc, M.conc, BY, 2.4, { tile: 1.5 });
  wall('z', 28, 0, 12, [], M.conc, M.conc, BY, 2.4, { tile: 1.5 });
  wall('x', 0, 20, 28, [], M.conc, M.conc, BY, 2.4, { tile: 1.5 });
  wall('x', 12, 20, 28, [], M.conc, M.conc, BY, 2.4, { tile: 1.5 });
  for (const [px, pz] of [[23, 3.6], [23.2, 9], [25.8, 6.4]]) box(0.35, 2.4, 0.35, M.conc, px, BY, pz, { col: true, tile: 1 });
  // estantes com potes
  for (let s = 0; s < 3; s++) {
    box(2.4, 0.04, 0.45, M.darkWood, 23.8, BY + 0.4 + s * 0.6, 0.35, { tile: 0.8 });
    for (let j = 0; j < 7; j++) cyl(0.05, 0.05, 0.18, new THREE.MeshStandardMaterial({ color: [0x4a2a10, 0x3a3010, 0x501010][j % 3], roughness: 0.15, transparent: true, opacity: 0.85 }), 22.8 + j * 0.32, BY + 0.44 + s * 0.6, 0.35, 10);
  }
  addCol(22.6, 25, BY, BY + 2, 0.1, 0.6);
  L.props.ammoBox = interact(V(24.8, BY + 1.1, 0.5), 'Caixa de munição', () => game.story.event('ammoBox'));
  // corpos embrulhados pendurados de cabeça para baixo
  const wrapped = [];
  for (const [wx, wz] of [[22.3, 2.4], [24.6, 10.6], [26.4, 2.8], [21.6, 10.2]]) {
    const g = new THREE.Group(); g.position.set(wx, -0.6, wz); group.add(g);
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.5, 4), M.bark); rope.position.y = -0.25; g.add(rope);
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 1.1, 6, 12), M.sheet); body.position.y = -1.25; body.scale.set(1, 1, 0.8); body.castShadow = true; g.add(body);
    body.scale.set(1, 1, 0.75); body.rotation.z = (Math.random() - 0.5) * 0.15;
    const headB = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), std(T.cloth(47, [120, 40, 35], 1.8))); headB.position.y = -1.95; headB.scale.set(1, 1.15, 0.9); g.add(headB);
    for (const ry of [-0.7, -1.1, -1.5, -1.8]) { const rr = new THREE.Mesh(new THREE.TorusGeometry(0.2 - Math.abs(ry + 1.25) * 0.05, 0.012, 5, 16), M.bark); rr.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.3; rr.position.y = ry; rr.scale.set(1, 0.78, 1); g.add(rr); }
    const drip = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.002, 0.35, 4), M.bloodPool); drip.position.y = -2.25; g.add(drip);
    wrapped.push(g);
    floorDecal(T.bloodSplat(90 + wrapped.length, 'pool'), 0.7, wx, wz, BY + 0.007);
  }
  L.props.wrapped = wrapped;
  L.updaters.push((dt, t) => wrapped.forEach((g, i) => { g.rotation.z = Math.sin(t * 0.7 + i * 2) * 0.05; g.rotation.y = Math.sin(t * 0.3 + i) * 0.4 + (g.userData.spin || 0); }));
  // altar
  const altar = new THREE.Group(); group.add(altar);
  box(0.8, 0.9, 1.8, M.darkWood, 27.4, BY, 6, { col: true, parent: altar });
  box(0.84, 0.5, 1.84, M.redCloth, 27.4, BY + 0.5, 6, { parent: altar });
  plane(0.4, 0.52, new THREE.MeshStandardMaterial({ map: T.grannyPortrait(), roughness: 0.4 }), 27.88, BY + 1.35, 6, 0, -Math.PI / 2, 0, { parent: altar });
  plane(0.4, 0.31, new THREE.MeshStandardMaterial({ map: T.familyPhoto(9, 5, true), roughness: 0.4 }), 27.86, BY + 1.15, 5.4, 0, -Math.PI / 2, 0, { parent: altar });
  // crânio com chifres
  const skull = new THREE.Group(); skull.position.set(27.45, BY + 1.0, 6.45); altar.add(skull);
  const sk1 = new THREE.Mesh(new THREE.SphereGeometry(0.11, 12, 10), M.bone); sk1.scale.set(0.8, 0.9, 1.3); skull.add(sk1);
  for (const sx of [-1, 1]) { const horn = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.3, 8), M.bone); horn.position.set(sx * 0.06, 0.12, -0.05); horn.rotation.set(-0.6, 0, sx * 0.5); skull.add(horn); }
  for (const sx of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), M.black); e.position.set(sx * 0.04, 0.02, 0.12); skull.add(e); }
  skull.rotation.y = -Math.PI / 2;
  cyl(0.12, 0.08, 0.08, M.metal, 27.3, BY + 0.9, 5.6, 14, { parent: altar });
  plane(0.18, 0.18, M.bloodPool, 27.3, BY + 0.985, 5.6, -Math.PI / 2, 0, 0, { parent: altar });
  // velas
  const candles = [];
  const flameMat = new THREE.SpriteMaterial({ map: T.softDot(), color: 0xffa040, blending: THREE.AdditiveBlending, depthWrite: false });
  for (let i = 0; i < 9; i++) {
    const cx = 27.15 + (i % 3) * 0.17, cz = 5.3 + Math.floor(i / 3) * 0.7 + (Math.random() - 0.5) * 0.2, h = 0.08 + Math.random() * 0.15;
    cyl(0.02, 0.022, h, M.candle, cx, BY + 0.9, cz, 8, { parent: altar });
    const f = new THREE.Sprite(flameMat); f.scale.set(0.05, 0.09, 1); f.position.set(cx, BY + 0.93 + h, cz); altar.add(f); candles.push(f);
  }
  const candleL = new THREE.PointLight(0xff8a30, 0, 10, 1.7); candleL.position.set(27.2, BY + 1.3, 6); group.add(candleL);
  L.props.altar = { group: altar, candles, candleL, lit: false, pos: V(27.2, BY + 1, 6) };
  L.updaters.push((dt, t) => {
    const A = L.props.altar;
    candles.forEach((c, i) => { c.visible = A.lit; c.scale.y = 0.08 + Math.sin(t * 17 + i * 3) * 0.015 + Math.random() * 0.01; });
    candleL.intensity = A.lit ? 9 + Math.sin(t * 13) * 1.5 + Math.random() * 2 : 0;
  });
  decal(T.bloodText('A DÍVIDA FICA NA FAMÍLIA', 1400, 256, 110), 3.4, 0.62, 27.91, BY + 1.85, 6, 0, -Math.PI / 2, { rough: 0.5 });
  for (let i = 0; i < 6; i++) decal(T.bloodSplat(100 + i, 'hand'), 0.25, 0.25, 27.91, BY + 0.9 + Math.random() * 1.2, 4.2 + Math.random() * 3.6, 0, -Math.PI / 2, { rz: Math.random() * 6 });
  L.props.diaryI = interact(V(27.1, BY + 1, 6.6), 'Ler diário', () => game.story.event('diary'));
  L.props.burnI = interact(V(27.1, BY + 1, 6), 'Queimar o altar', () => game.story.event('burn'), { enabled: false, hold: 2.2 });
  const diary = box(0.16, 0.04, 0.22, std(T.cloth(48, [70, 40, 30], 0.3)), 27.1, BY + 0.9, 6.6);
  L.props.diary = diary;
  // fogo
  const fireG = new THREE.Group(); group.add(fireG); fireG.visible = false;
  const fireMat = new THREE.SpriteMaterial({ map: T.softDot(), color: 0xff6a20, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  const fireSprites = [];
  for (let i = 0; i < 60; i++) { const s = new THREE.Sprite(fireMat.clone()); fireG.add(s); fireSprites.push({ s, life: Math.random() }); }
  const fireL = new THREE.PointLight(0xff7020, 0, 14, 1.6); fireL.position.set(27, BY + 1.4, 6); group.add(fireL);
  L.props.fire = { g: fireG, sprites: fireSprites, light: fireL, level: 0 };
  L.updaters.push((dt, t) => {
    const F = L.props.fire; if (!fireG.visible) { fireL.intensity = 0; return; }
    const k = F.level;
    for (const p of fireSprites) {
      p.life += dt * (1.2 + Math.random());
      if (p.life > 1) { p.life = 0; p.x = 27.4 + (Math.random() - 0.5) * 0.7; p.z = 6 + (Math.random() - 0.5) * 1.7 * Math.min(1, 0.3 + k); }
      const y = BY + 0.95 + p.life * (0.4 + k * 1.3);
      p.s.position.set(p.x + Math.sin(t * 5 + p.life * 6) * 0.05, y, p.z);
      const sc = (0.15 + k * 0.5) * (1 - p.life * 0.7); p.s.scale.set(sc, sc * 1.6, 1);
      p.s.material.opacity = (1 - p.life) * 0.8; p.s.material.color.setHSL(0.06 - p.life * 0.05, 1, 0.5 - p.life * 0.25);
    }
    fireL.intensity = (5 + k * 30) * (0.8 + Math.random() * 0.4);
  });

  // =================================================================
  //  CHUVA
  // =================================================================
  const RN = 2200, rp = new Float32Array(RN * 6);
  const rg = new THREE.BufferGeometry(); rg.setAttribute('position', new THREE.BufferAttribute(rp, 3));
  const rain = new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0x606a74, transparent: true, opacity: 0.16 }));
  rain.frustumCulled = false; scene.add(rain);
  const drops = []; for (let i = 0; i < RN; i++) drops.push({ x: 0, y: -100, z: 0, v: 9 + Math.random() * 3 });
  const covered = (x, z) => (x > -0.2 && x < 16.2 && z > -0.2 && z < 12.2) || (x > 2.8 && x < 13.2 && z > -2.8 && z < 0) || (x > 15.8 && x < 20.2 && z > 5.8 && z < 8.2);
  L.updaters.push((dt) => {
    const c = game.camera.position;
    for (let i = 0; i < RN; i++) {
      const d = drops[i]; d.y -= d.v * dt;
      if (d.y < 0) { d.x = c.x + (Math.random() - 0.5) * 24; d.z = c.z + (Math.random() - 0.5) * 24; d.y = 4 + Math.random() * 6; if (covered(d.x, d.z)) d.y = -100 - Math.random(); }
      const o = i * 6; rp[o] = d.x; rp[o + 1] = d.y; rp[o + 2] = d.z; rp[o + 3] = d.x + 0.01; rp[o + 4] = d.y + 0.32; rp[o + 5] = d.z;
    }
    rg.attributes.position.needsUpdate = true;
  });

  // relâmpago
  const lightning = new THREE.DirectionalLight(0xb8c8ff, 0);
  lightning.position.set(-14, 22, -20); lightning.target.position.set(8, 0, 4); scene.add(lightning, lightning.target);
  lightning.castShadow = true; lightning.shadow.mapSize.set(1024, 1024);
  Object.assign(lightning.shadow.camera, { left: -26, right: 26, top: 26, bottom: -26, near: 1, far: 70 });
  lightning.shadow.autoUpdate = false; lightning.shadow.needsUpdate = true;
  L.props.lightning = lightning;

  // =================================================================
  //  NAVEGAÇÃO
  // =================================================================
  L.floorY = (x, z) => {
    if (x > 16 && x < 20 && z > 5.9 && z < 8.1) return -3 * Math.min(1, Math.max(0, (x - 16) / 4));
    if (x >= 20) return BY;
    return 0;
  };
  L.surface = (x, z) => {
    if (x >= 16 && z > 5.9 && z < 8.1 && x < 20) return 'wood';
    if (x >= 20) return 'concrete';
    if (z < 0) return (x > 3 && x < 13 && z > -2.6) ? 'porch' : 'mud';
    if (x > 8 && x < 16 && z < 6) return 'tile';
    if (x > 6 && x < 10 && z > 8) return 'tile';
    return 'wood';
  };
  L.insideAt = (x, z) => (x >= 0 && x <= 16 && z >= 0 && z <= 12) ? 1 : (x > 16 && z > 5.9 && z < 8.1) ? 1 : (x >= 20 ? 1 : (z > -2.6 && z < 0 && x > 3 && x < 13 ? 0.4 : 0));
  L.room = (x, z) => {
    if (x >= 20) return 'porao'; if (x > 16) return 'escada';
    if (z < 0) return 'fora';
    if (z < 6) return x < 8 ? 'sala' : 'cozinha';
    if (z < 8) return 'hall';
    return x < 6 ? 'casal' : x < 10 ? 'banheiro' : 'kid';
  };

  const GX0 = -4, GZ0 = -17, CS = 0.4, GW = Math.ceil((30 - GX0) / CS), GH = Math.ceil((14 - GZ0) / CS);
  let grid = new Uint8Array(GW * GH);
  L.buildGrid = () => {
    grid = new Uint8Array(GW * GH);
    for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) {
      const x = GX0 + (i + 0.5) * CS, z = GZ0 + (j + 0.5) * CS, fy = L.floorY(x, z), m = 0.22;
      let blocked = false;
      for (const c of L.colliders) {
        if (c.tag === 'door' || !c.on) continue;
        if (c.y1 < fy + 0.25 || c.y0 > fy + 1.6) continue;
        if (x + m > c.x0 && x - m < c.x1 && z + m > c.z0 && z - m < c.z1) { blocked = true; break; }
      }
      grid[j * GW + i] = blocked ? 1 : 0;
    }
  };
  const cellOf = (x, z) => [Math.floor((x - GX0) / CS), Math.floor((z - GZ0) / CS)];
  const free = (i, j) => i >= 0 && j >= 0 && i < GW && j < GH && grid[j * GW + i] === 0;
  L.walkable = (x, z) => { const [i, j] = cellOf(x, z); return free(i, j); };
  L.clearLine = (x0, z0, x1, z1) => {
    const d = Math.hypot(x1 - x0, z1 - z0), n = Math.ceil(d / (CS * 0.5));
    for (let k = 0; k <= n; k++) { const t = k / Math.max(1, n); if (!L.walkable(x0 + (x1 - x0) * t, z0 + (z1 - z0) * t)) return false; }
    return true;
  };
  L.findPath = (x0, z0, x1, z1) => {
    let [si, sj] = cellOf(x0, z0); const [ei, ej] = cellOf(x1, z1);
    if (!free(si, sj)) { // desencalha
      outer: for (let r = 1; r < 4; r++) for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) if (free(si + di, sj + dj)) { si += di; sj += dj; break outer; }
    }
    const N = GW * GH, g = new Float32Array(N).fill(Infinity), came = new Int32Array(N).fill(-1), closed = new Uint8Array(N);
    const open = [[0, sj * GW + si]]; g[sj * GW + si] = 0;
    const goal = ej * GW + ei; let iter = 0, best = -1, bestH = Infinity;
    while (open.length && iter++ < 6000) {
      let bi = 0; for (let k = 1; k < open.length; k++) if (open[k][0] < open[bi][0]) bi = k;
      const [, cur] = open.splice(bi, 1)[0];
      if (closed[cur]) continue; closed[cur] = 1;
      const ci = cur % GW, cj = (cur / GW) | 0;
      const hh = Math.hypot(ci - ei, cj - ej); if (hh < bestH) { bestH = hh; best = cur; }
      if (cur === goal) { best = cur; break; }
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        if (!di && !dj) continue;
        const ni = ci + di, nj = cj + dj; if (!free(ni, nj)) continue;
        if (di && dj && (!free(ci + di, cj) || !free(ci, cj + dj))) continue;
        const nk = nj * GW + ni, ng = g[cur] + (di && dj ? 1.414 : 1);
        if (ng < g[nk]) { g[nk] = ng; came[nk] = cur; open.push([ng + Math.hypot(ni - ei, nj - ej), nk]); }
      }
    }
    if (best < 0) return null;
    const out = []; let c = best;
    while (c >= 0) { out.push(V(GX0 + (c % GW + 0.5) * CS, 0, GZ0 + (((c / GW) | 0) + 0.5) * CS)); c = came[c]; }
    out.reverse(); out.shift();
    if (best === goal) out.push(V(x1, 0, z1));
    return out;
  };

  // linha de visão contra paredes
  const ray = new THREE.Raycaster();
  L.los = (a, b) => {
    const dir = b.clone().sub(a); const d = dir.length(); dir.divideScalar(d);
    ray.set(a, dir); ray.far = d - 0.15;
    const doorsMeshes = L.doors.filter(D => D.open < 0.3).map(D => D.panel);
    return ray.intersectObjects([...L.occluders, ...doorsMeshes], false).length === 0;
  };
  // criaturas abrem portas no caminho (com estrondo)
  L.pushDoors = (pos, audio) => {
    for (const D of L.doors) {
      if (D.locked || D.target > 0.5) continue;
      if (Math.hypot(D.pos.x - pos.x, D.pos.z - pos.z) < 1.0 && Math.abs(L.floorY(D.pos.x, D.pos.z) - pos.y) < 1) { D.target = 1; D.open = Math.max(D.open, 0.3); audio.doorSlam(D.pos, 0.8); }
    }
  };

  L.update = (dt, t) => {
    for (const D of L.doors) {
      D.open += (D.target - D.open) * Math.min(1, dt * 4);
      D.pivot.rotation.y = -D.dir * D.open * 1.75;
      D.col.on = D.open < 0.35;
    }
    const F = L.props.fridge; F.open += (F.target - F.open) * Math.min(1, dt * 3); F.pivot.rotation.y = -F.open * 1.9;
    for (const B of L.bulbs) {
      let k = game.lightsOn && !B.dead ? 1 : 0;
      if (B.flicker > 0) { B.flicker -= dt; k *= Math.random() < 0.5 ? 0.05 : 1; }
      B.light.intensity = B.base * k;
      B.mat.emissiveIntensity = k * 6;
    }
    L.updaters.forEach(f => f(dt, t));
  };

  L.bounceList = [...L.occluders, ...L.bounce];
  L.buildGrid();
  return L;
}
