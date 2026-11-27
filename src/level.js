// A casa dos Vasconcelos: geometria, materiais, luzes, portas, colisão e navegação.
import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import * as T from './textures.js';
import { buildHumanoid } from './creatures.js';
import { pbr, place } from './assets.js';
import { makePhone, makeFridge, makePoliceCar, carDecals } from './props.js';
import { makeFace } from './faces.js';

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
  const addCol = (x0, x1, y0, y1, z0, z1, tag) => { const c = { x0, x1, y0, y1, z0, z1, on: true, tag }; L.colliders.push(c); return c; };

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
  // ---------- materiais fotográficos (Poly Haven, CC0) ----------
  const A = game.assets, env = A && A.env;
  const P = (name, worldTile, baseTile, o = {}) => {
    if (!A || !A.tex[name] || !A.tex[name].map) return null;
    const m = pbr(A, name, o), k = baseTile / worldTile;
    for (const key of ['map', 'normalMap', 'roughnessMap']) if (m[key]) { m[key] = m[key].clone(); m[key].repeat.set(k, k); m[key].needsUpdate = true; }
    return m;
  };
  const ov = (key, m) => { if (m) M[key] = m; };
  ov('wpSala', P('decrepit_wallpaper', 1.7, 1.2, { color: 0xe2d6bc }));
  ov('wpHall', P('decrepit_wallpaper', 1.7, 1.2, { color: 0xc8b8a0 }));
  ov('wpCasal', P('peeling_painted_wall', 2.0, 1.2, { color: 0xc4d0c4 }));
  ov('wpKid', P('plastered_wall_03', 2.0, 1.2, { color: 0xf0c4c0 }));
  ov('tileK', P('long_white_tiles', 1.0, 1.2, { env: 0.5, color: 0xd8d4c4 }));
  ov('tileB', P('interior_tiles', 1.3, 1.2, { env: 0.5, color: 0xc8c0a8 }));
  ov('floorK', P('terracotta_floor_tiles', 1.8, 1.6, { env: 0.4 }));
  ov('floorB', P('worn_tile_floor', 1.3, 1.2, { env: 0.5 }));
  ov('wood', P('old_wood_floor', 2.4, 2.2, { env: 0.45 }));
  ov('porch', P('weathered_planks', 2.2, 2.0, { color: 0xa8a090 }));
  ov('ext', P('worn_plaster_wall', 2.6, 1.2, { color: 0xd8ccb0 }));
  ov('ceil', P('damaged_plaster', 2.5, 2, { color: 0xd8d4c8 }));
  ov('conc', P('concrete_wall_003', 2.5, 1.5, {}));
  M.concFloor = P('concrete_floor_worn_001', 2.5, 2.5, {}) || M.conc;
  ov('darkWood', P('wood_cabinet_worn_long', 1.0, 1.2, { color: 0xa08068 }));
  M.rust = P('rusty_metal_02', 1.15, 1.15, { metal: 0.45, rough: 0.8, env: 0.4 }) || M.rust;
  M.bark = P('bark_bluegum', 1.8, 1.2, { color: 0x7a6c5c, rough: 1 }) || M.bark;
  M.cabinet = P('wood_cabinet_worn_long', 1.0, 1.2, { color: 0xe4dccb }) || M.white;
  M.door = P('rough_pine_door', 1, 1, { color: 0xb09a86 });
  ov('mud', P('brown_mud_leaves_01', 3.2, 5, { rough: 0.7, env: 0.6 }));
  M.roof = P('corrugated_iron', 2.0, 2.4, { metal: 0.55, rough: 0.65, color: 0x9a9288, env: 0.5 });
  M.carpet = P('dirty_carpet', 1.4, 1.3, { color: 0x9a6a5a });
  M.trim = M.darkWood;
  M.curtain = new THREE.MeshStandardMaterial({ map: T.cloth(52, [150, 128, 100], 0.25), roughness: 0.95, side: THREE.DoubleSide, color: 0xc8b8a0 });
  M.shade = new THREE.MeshStandardMaterial({ map: T.cloth(53, [190, 170, 130], 0.15), roughness: 0.9, side: THREE.DoubleSide, emissive: 0x000000 });
  M.ceramic = new THREE.MeshPhysicalMaterial({ map: T.plaster(23), color: 0xf0eee6, roughness: 0.15, clearcoat: 0.8, clearcoatRoughness: 0.2, envMap: env, envMapIntensity: 0.6 });
  // coloca modelo com colisor opcional
  const model = (name, x, y, z, ry = 0, o = {}) => {
    const m = A ? place(A, name, group, x, y, z, ry, o) : null;
    if (m && o.col) { const b = m.userData.box; addCol(b.min.x, b.max.x, b.min.y, b.max.y, b.min.z, b.max.z); }
    return m;
  };

  // ---------- utilitários ----------
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
      if (y0 === 0 && s.lo === 0 && !o.noTrim) {
        for (const [face, mat] of [[1, mats[axis === 'x' ? 4 : 0]], [-1, mats[axis === 'x' ? 5 : 1]]]) {
          if (mat === M.ext || mat === M.conc) continue;
          const bw = axis === 'x' ? len : 0.016, bd = axis === 'x' ? 0.016 : len;
          const bb = new THREE.Mesh(new THREE.BoxGeometry(bw, 0.095, bd), M.trim);
          bb.position.set(axis === 'x' ? x : x + face * (TH / 2 + 0.008), 0.048, axis === 'x' ? z + face * (TH / 2 + 0.008) : z); bb.receiveShadow = true; group.add(bb);
        }
      }
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
      if (y0 === 0) for (const [face, mat] of [[1, mats[axis === 'x' ? 4 : 0]], [-1, mats[axis === 'x' ? 5 : 1]]]) {
        if (mat === M.ext) continue;
        const off = TH / 2 + 0.07, top = y0 + op.top + 0.14, ch = op.top - op.bottom + 0.45;
        const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, len + 0.5, 8), M.metal); rod.rotation.z = Math.PI / 2; if (axis === 'z') rod.rotation.set(Math.PI / 2, 0, 0);
        rod.position.set(axis === 'x' ? mid : c + face * off, top + 0.02, axis === 'x' ? c + face * off : mid); group.add(rod);
        for (const side of [-1, 1]) {
          const cw = len * (0.32 + Math.random() * 0.12), geo = new THREE.PlaneGeometry(cw, ch, 18, 6), pp = geo.attributes.position;
          for (let i = 0; i < pp.count; i++) { const u = pp.getX(i) / cw + 0.5, vv = (pp.getY(i) / ch + 0.5); pp.setZ(i, Math.sin(u * Math.PI * 7) * 0.035 + Math.sin(u * 23) * 0.006 - (1 - vv) * 0.02 * side); }
          geo.computeVertexNormals();
          const cm = new THREE.Mesh(geo, M.curtain);
          const along = mid + side * (len / 2 + 0.25 - cw / 2);
          if (axis === 'x') { cm.position.set(along, top - ch / 2, c + face * off); cm.rotation.y = face > 0 ? 0 : Math.PI; }
          else { cm.position.set(c + face * off, top - ch / 2, along); cm.rotation.y = face > 0 ? Math.PI / 2 : -Math.PI / 2; }
          cm.castShadow = true; cm.receiveShadow = true; group.add(cm);
        }
      }
    }
  }
  const win = (a, b) => ({ a, b, bottom: 0.95, top: 2.1, window: true });
  const gap = (a, b) => ({ a, b, bottom: 0, top: 2.1 });

  // porta articulada
  function door(axis, c, a, b, o = {}) {
    const w = b - a, pivot = new THREE.Group();
    if (axis === 'x') pivot.position.set(a, 0, c); else pivot.position.set(c, 0, a);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(axis === 'x' ? w - 0.02 : 0.045, 2.08, axis === 'x' ? 0.045 : w - 0.02), o.mat || M.door || M.darkWood);
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
    const bm = new THREE.MeshPhysicalMaterial({ color: 0x8a8070, emissive: 0xffc48a, emissiveIntensity: 0, roughness: 0.05, transmission: 0.4, transparent: true, opacity: 0.85, envMap: env });
    const bp = [[0.012, 0], [0.014, 0.02], [0.03, 0.05], [0.034, 0.075], [0.028, 0.1], [0.0, 0.112]].map(([r, h]) => new THREE.Vector2(r, -h));
    const b = new THREE.Mesh(new THREE.LatheGeometry(bp, 16), bm); b.position.set(x, y - 0.46, z); group.add(b);
    const fil = new THREE.Mesh(new THREE.TorusGeometry(0.008, 0.0012, 4, 12, Math.PI), new THREE.MeshBasicMaterial({ color: 0x331a00 })); fil.position.set(x, y - 0.535, z); group.add(fil);
    const light = new THREE.PointLight(0xffc890, 0, o.dist ?? 7, 2); light.position.set(x, y - 0.55, z); group.add(light);
    if (!o.noShade) { const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.2, 0.2, 20, 1, true), M.shade.clone()); sh.position.set(x, y - 0.52, z); sh.castShadow = false; group.add(sh); bm.userData.shade = sh; }
    const B = { light, mat: bm, base: (o.power ?? 7) * 2.6, room, flicker: 0, dead: false, pos: V(x, y - 0.5, z) };
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
  model('dead_tree_trunk', -1.6, 0, -7.5, 0.7); model('dead_tree_trunk_02', 15.8, 0, -13.2, 2.2); model('dead_tree_trunk', 13.5, 0, -4.2, -0.4);
  tree(-7, -6, 7, 3); tree(-9, -14, 8, 7); tree(23, -10, 9, 11); tree(24, 3, 7, 5); tree(-6, 6, 8, 13); tree(10, -22, 9, 17); tree(-1, -20, 6, 19);

  // viatura
  const carObj = makePoliceCar(env); const car = carObj.group; car.position.set(7.5, 0, -12); car.rotation.y = -0.15; group.add(car);
  carDecals(car, env);
  addCol(6.4, 8.6, 0, 1.5, -14.1, -9.9);
  const redL = new THREE.PointLight(0xff1010, 0, 12, 2); redL.position.set(7.2, 1.75, -12.4); group.add(redL);
  const blueL = new THREE.PointLight(0x1040ff, 0, 12, 2); blueL.position.set(7.9, 1.75, -12.4); group.add(blueL);
  const head = new THREE.SpotLight(0xfff0d8, 220, 32, 0.42, 0.5, 1.6);
  head.position.set(7.8, 0.7, -9.9); head.target.position.set(6.2, 1.0, 2); group.add(head, head.target);
  head.castShadow = true; head.shadow.mapSize.set(1024, 1024); head.shadow.camera.near = 0.5; head.shadow.camera.far = 30; head.shadow.bias = -0.0004;
  const barR = { material: carObj.lensR }, barB = { material: carObj.lensB }, hlMat = carObj.hlMat;
  L.props.car = { car, redL, blueL, barR, barB, head, hlMat };
  L.updaters.push((dt, t) => {
    if (!L.props.car.sirenOn) { redL.intensity = blueL.intensity = 0; barR.material.emissiveIntensity = barB.material.emissiveIntensity = 0; return; }
    const ph = (t * 2.2) % 1, r = ph < 0.5 && (ph * 8 % 1) < 0.6 ? 1 : 0, b = ph >= 0.5 && (ph * 8 % 1) < 0.6 ? 1 : 0;
    redL.intensity = r * 30; blueL.intensity = b * 40; barR.material.emissiveIntensity = r * 8; barB.material.emissiveIntensity = b * 8;
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
  const roofMat = M.roof || std(T.concrete(61), { color: 0x5a3020, rough: 0.9 });
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
  if (!model('plastic_monobloc_chair_01', 11.5, 0, -1.1, 2.6, { col: true, dirty: 0.75 })) box(0.6, 0.45, 0.6, M.darkWood, 11.5, 0, -1, { col: true, tile: 0.6 });
  model('rubber_boots', 4.6, 0, -0.35, 0.4); model('rubber_boots', 4.85, 0, -0.3, -0.2);
  model('trashbag', 13.6, 0, -0.6, 1.0, { dirty: 0.7 });
  const porchBulb = bulb(6, -1.2, 'porch', { y: 2.55, power: 0, noShade: true });
  porchBulb.dead = true;
  // sino de vento pendurado no beiral (som: MUSCChim_WindChimes_LOOP, Meta pack)
  (() => {
    const cx = 12.55, cz = -2.25, top = 2.52;
    const sinos = new THREE.Group(); sinos.position.set(cx, top, cz);
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.012, 12), M.paintWood);
    plate.position.y = -0.02; plate.castShadow = true; sinos.add(plate);
    const strG = new THREE.CylinderGeometry(0.002, 0.002, 1, 4);
    const clapper = new THREE.Group(); clapper.position.y = -0.16; sinos.add(clapper);
    const clapperBall = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), M.rust); clapperBall.position.y = 0.1; clapper.add(clapperBall);
    for (let i = 0; i < 6; i++) {
      const an = (i / 6) * Math.PI * 2 + 0.2, rr = 0.042, len = 0.1 + (i % 3) * 0.035;
      const st = new THREE.Mesh(strG, M.metal); st.position.set(Math.cos(an) * rr, -0.06, Math.sin(an) * rr); st.scale.y = 0.12; sinos.add(st);
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, len, 8), M.rust);
      tube.position.set(Math.cos(an) * rr, -0.12 - len / 2, Math.sin(an) * rr); tube.castShadow = true; sinos.add(tube);
    }
    group.add(sinos);
    L.updaters.push((dt, t) => {
      const sway = Math.sin(t * 1.7) * 0.03 + Math.sin(t * 0.53 + 1.7) * 0.05 + Math.sin(t * 4.3) * 0.012;
      sinos.rotation.x = sway * 0.7; sinos.rotation.z = sway;
      game.audio.chimes(V(cx, top - 0.2, cz));
    });
  })();

  // ---------- SALA ----------
  if (!model('Sofa_01', 0.42, 0, 2.2, Math.PI / 2, { col: true, dirty: 0.8 })) box(0.9, 0.42, 2.1, M.fabric, 0.55, 0, 2.2, { col: true });
  box(0.45, 0.5, 1.0, M.darkWood, 3.35, 0, 2.2, { col: true, tile: 0.8 });
  const tvM = model('Television_01', 3.35, 0.5, 2.2, -Math.PI / 2);
  const tvFront = tvM ? tvM.userData.box.min.x - 0.004 : 3.065;
  const tvCy = tvM ? (tvM.userData.box.min.y + tvM.userData.box.max.y) / 2 + 0.01 : 0.73;
  if (!tvM) box(0.5, 0.46, 0.58, M.plastic, 3.32, 0.5, 2.2);
  model('mantel_clock_01', 3.4, 0.5, 2.62, -Math.PI / 2);
  const tvTex = T.tvStatic();
  const tvScreen = plane(0.36, 0.27, new THREE.MeshStandardMaterial({ map: tvTex, emissive: 0xffffff, emissiveMap: tvTex, emissiveIntensity: 1.0, roughness: 0.1, polygonOffset: true, polygonOffsetFactor: -2 }), tvFront - 0.012, tvCy, 2.2, 0, -Math.PI / 2, 0);
  plane(0.42, 0.33, new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.4 }), tvFront - 0.002, tvCy, 2.2, 0, -Math.PI / 2, 0);
  const tvLight = new THREE.PointLight(0xa8c0ff, 1.2, 4, 2); tvLight.position.set(tvFront - 0.3, tvCy, 2.2); group.add(tvLight);
  L.props.tv = { tvTex, tvScreen, tvLight, on: true };
  let tvAcc = 0;
  L.updaters.push((dt, t) => { if (L.props.tv.on) { tvAcc += dt; if (tvAcc > 1 / 30) { tvAcc = 0; tvTex.userData.update(t); } tvLight.intensity = 0.7 + Math.random() * 0.6; } else tvLight.intensity = 0; });
  // telefone de disco sobre o criado-mudo ao lado do sofá
  const stand = model('ClassicNightstand_01', 0.33, 0, 3.75, Math.PI / 2, { col: true });
  const standTop = stand ? stand.userData.box.max.y : 0.6;
  if (!stand) box(0.45, 0.6, 0.45, M.darkWood, 0.33, 0, 3.75, { col: true });
  const phone = makePhone(env); phone.position.set(0.36, standTop, 3.72); phone.rotation.y = Math.PI / 2 + 0.25; group.add(phone);
  L.props.phone = { pos: V(0.4, standTop + 0.1, 3.72), handset: phone.userData.handset, obj: phone, base: phone.position.clone() };
  const phI = interact(V(0.4, standTop + 0.1, 3.72), 'Telefone', () => game.story.event('phone'), { range: 2.3 });
  Object.defineProperty(phI, 'label', { get: () => (game.story && game.story.ring ? 'Atender o telefone' : 'Telefone') });
  // mesa de jantar posta
  const tbl = model('dining_table', 5.6, 0, 4.2, 0, { col: true, dirty: 0.85 });
  const TT = tbl ? tbl.userData.box.max.y : 0.78;
  if (!tbl) { box(1.7, 0.05, 0.95, M.darkWood, 5.5, 0.73, 4.2, { tile: 0.8 }); addCol(4.65, 6.35, 0, 0.78, 3.72, 4.68); }
  for (const [cx, cz, r] of [[5.0, 3.25, 0], [6.2, 3.25, 0], [5.0, 5.15, Math.PI], [6.2, 5.15, Math.PI]]) model('dining_chair_02', cx, 0, cz, r, { dirty: 0.8 });
  // cadeira derrubada
  const fc = model('dining_chair_02', 7.1, 0, 4.4, 1.1, { dirty: 0.8 });
  if (fc) { fc.rotation.z = Math.PI / 2; fc.position.y = 0.22; fc.position.x = 7.25; }
  const plateMat = new THREE.MeshPhysicalMaterial({ color: 0xe8e4da, roughness: 0.25, clearcoat: 0.8, envMap: env });
  const plates = [[5.0, 3.85], [6.2, 3.85], [5.0, 4.55], [6.2, 4.55]];
  for (const [px, pz] of plates) {
    cyl(0.13, 0.1, 0.02, plateMat, px, TT, pz, 24);
    const f = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), M.food); f.scale.set(1, 0.32, 0.8); f.position.set(px + 0.02, TT + 0.03, pz); group.add(f);
    const fk = box(0.02, 0.004, 0.18, M.metal, px + 0.17, TT, pz); fk.rotation.y = 0.1;
  }
  // dentes no prato
  for (let i = 0; i < 11; i++) { const t = new THREE.Mesh(new THREE.CapsuleGeometry(0.004, 0.01, 2, 5), M.bone); t.position.set(6.2 + (Math.random() - 0.5) * 0.12, TT + 0.026, 4.55 + (Math.random() - 0.5) * 0.12); t.rotation.set(Math.random() * 3, Math.random() * 3, 0); group.add(t); }
  floorDecal(T.bloodSplat(3, 'splat'), 0.25, 6.2, 4.55, TT + 0.022);
  interact(V(6.2, TT + 0.1, 4.55), 'Examinar prato', () => game.story.event('teeth'));
  // tapete
  plane(3.0, 2.0, M.carpet || std(T.cloth(44, [110, 40, 35], 0.3), { bump: false }), 5.6, 0.004, 4.2, -Math.PI / 2, 0, 1.3);
  // rastro de sangue até o corredor
  for (let i = 0; i < 7; i++) floorDecal(T.bloodSplat(10 + i, 'smear'), 0.9, 5.1 - i * 0.18, 4.9 + i * 0.17, 0.007 + i * 0.0005, -0.8 + (Math.random() - 0.5) * 0.4);
  // retrato da avó (olhos queimados)
  const frame = A && A.models.hanging_picture_frame_01 ? A.models.hanging_picture_frame_01.clone(true) : null;
  if (frame) {
    frame.traverse((q) => { if (q.isMesh && q.material.name && q.material.name.endsWith('artwork')) { q.material = q.material.clone(); q.material.map = T.grannyPortrait(); q.material.map.flipY = false; q.material.map.needsUpdate = true; } });
    frame.position.set(0.078, 1.72, 4.6); frame.rotation.y = Math.PI / 2; frame.scale.setScalar(0.82); group.add(frame);
  } else {
    const gp = plane(0.5, 0.65, new THREE.MeshStandardMaterial({ map: T.grannyPortrait(), roughness: 0.4 }), 0.115, 1.75, 4.6, 0, Math.PI / 2, 0);
    box(0.04, 0.72, 0.57, M.darkWood, 0.09, 1.39, 4.6);
  }
  interact(V(0.3, 1.7, 4.6), 'Examinar retrato', () => game.story.event('granny'));
  // crucifixo invertido
  box(0.04, 0.5, 0.04, M.darkWood, 1.6, 1.45, 5.9); box(0.3, 0.04, 0.04, M.darkWood, 1.6, 1.55, 5.9);
  // foto da família
  plane(0.5, 0.4, new THREE.MeshStandardMaterial({ map: T.familyPhoto(2, 4, false), roughness: 0.4 }), 6.4, 1.6, 5.91, 0, Math.PI, 0);
  // escrita revelada pelo flash
  const rv1 = decal(T.bloodText('ELA NOS EMPRESTOU'), 2.6, 0.65, 7.91, 1.6, 4.7, 0, -Math.PI / 2, { rough: 0.6 });
  L.reveal.push(rv1);
  // interruptor
  box(0.08, 0.12, 0.02, M.white, 4.8, 1.2, 0.09);
  interact(V(4.8, 1.25, 0.1), 'Interruptor', () => game.story.event('switch'));
  bulb(4, 3, 'sala');

  // ---------- COZINHA ----------
  box(0.62, 0.88, 4.6, M.cabinet, 15.6, 0, 2.6, { col: true, tile: 1.0 });
  for (let i = 0; i < 6; i++) box(0.02, 0.6, 0.7, M.cabinet, 15.28, 0.12, 0.65 + i * 0.75, { tile: 0.8 });
  box(0.66, 0.04, 4.62, std(T.concrete(71), { color: 0x6a6a62, rough: 0.4 }), 15.58, 0.88, 2.6);
  box(0.45, 0.04, 0.6, M.metal, 15.6, 0.89, 3.1); // pia
  box(0.36, 0.7, 4.6, M.cabinet, 15.75, 1.55, 2.6, { tile: 0.8 });
  box(0.62, 0.88, 0.62, M.ceramic, 15.6, 0, 5.4, { col: true });
  model('pot_enamel_01', 15.5, 0.9, 5.3, 0.6);
  for (const [bx, bz] of [[15.45, 5.25], [15.75, 5.25], [15.45, 5.55], [15.75, 5.55]]) cyl(0.08, 0.08, 0.02, M.black, bx, 0.88, bz, 12);
  // geladeira antiga — e o que ficou dentro dela
  const fr = makeFridge(env); fr.group.position.set(8.72, 0, 0.53); group.add(fr.group);
  addCol(8.34, 9.1, 0, 1.65, 0.18, 0.88);
  const tiagoHead = A ? makeFace(A, 'tiago') : null;
  if (tiagoHead) {
    tiagoHead.scale.setScalar(0.041); tiagoHead.position.set(0, 0.98, 0.02); tiagoHead.rotation.set(-0.12, 0.25, 0.08); fr.group.add(tiagoHead);
    const stump = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.015, 16), new THREE.MeshPhysicalMaterial({ color: 0x5a0808, roughness: 0.25, clearcoat: 1 })); stump.position.set(0, 0.8, 0.03); fr.group.add(stump);
    const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.13, 0.03, 24), new THREE.MeshPhysicalMaterial({ color: 0xd8d4c8, roughness: 0.2, clearcoat: 1, envMap: env })); dish.position.set(0, 0.795, 0.02); fr.group.add(dish);
    const pool = new THREE.Mesh(new THREE.CircleGeometry(0.14, 20), M.bloodPool); pool.rotation.x = -Math.PI / 2; pool.position.set(0, 0.812, 0.02); fr.group.add(pool);
  }
  for (let i = 0; i < 4; i++) { const j = cyl(0.045, 0.045, 0.14, new THREE.MeshPhysicalMaterial({ color: [0x5a3010, 0x6a1010, 0x3a3a10, 0x5a2a20][i], roughness: 0.1, transmission: 0.3, transparent: true, opacity: 0.85, envMap: env }), -0.22 + i * 0.14, 1.11, -0.1, 12, { parent: fr.group }); }
  floorDecal(T.bloodSplat(21, 'drip'), 0.5, 0, 0, 0.43, 0, { parent: fr.group });
  L.props.fridge = { pivot: fr.pivot, light: fr.bulb, open: 0, target: 0 };
  interact(V(8.95, 1.1, 1.0), 'Abrir geladeira', () => game.story.event('fridge'));
  floorDecal(T.bloodSplat(22, 'pool'), 1.4, 9.3, 1.4, 0.006);
  // mesa da cozinha
  box(1.1, 0.05, 0.8, M.darkWood, 11.5, 0.75, 3, { tile: 0.8 });
  model('wooden_bowl_01', 11.75, 0.8, 2.85, 0);
  for (const [cx, cz, r] of [[11.2, 2.35, 0], [11.9, 3.7, Math.PI]]) model('dining_chair_02', cx, 0, cz, r, { dirty: 0.75 });
  if (!model('painted_wooden_cabinet', 9.4, 0, 5.62, Math.PI, { col: true, dirty: 0.85 })) {}
  model('trashbag', 14.75, 0, 5.62, 0.4, { dirty: 0.7 });
  for (const [lx, lz] of [[-0.5, -0.35], [0.5, -0.35], [-0.5, 0.35], [0.5, 0.35]]) box(0.05, 0.75, 0.05, M.darkWood, 11.5 + lx, 0, 3 + lz);
  addCol(10.95, 12.05, 0, 0.8, 2.6, 3.4);
  const knife = box(0.3, 0.005, 0.03, M.metal, 11.3, 0.8, 3.1); knife.rotation.y = 0.4;
  floorDecal(T.bloodSplat(23, 'splat'), 0.5, 11.6, 3.0, 0.776);
  // quadro de luz
  const pbx = model('power_box_01', 13.5, 1.15, 0.12, 0);
  if (!pbx) box(0.4, 0.5, 0.1, M.rust, 13.5, 1.3, 0.13);
  const fuseLed = new THREE.Mesh(new THREE.SphereGeometry(0.012, 6, 6), new THREE.MeshStandardMaterial({ color: 0x220000, emissive: 0xff2000, emissiveIntensity: 0 }));
  fuseLed.position.set(13.72, pbx ? pbx.userData.box.max.y - 0.04 : 1.72, pbx ? pbx.userData.box.max.z + 0.005 : 0.19); group.add(fuseLed);
  L.props.fuse = { led: fuseLed };
  interact(V(13.5, 1.55, 0.25), 'Quadro de luz', () => game.story.event('fusebox'));
  // gaveta com munição
  L.props.drawer = interact(V(15.25, 0.8, 1.4), 'Abrir gaveta', () => game.story.event('drawer'));
  bulb(12, 3, 'cozinha');
  // pegadas de sangue cruzando a cozinha (dedos virados para trás)
  for (let i = 0; i < 9; i++) floorDecal(T.bloodSplat(60 + (i % 2), 'hand'), 0.22, 9.6 + i * 0.55, 2.0 + Math.sin(i) * 0.3 + (i % 2) * 0.25, 0.007, Math.PI + (i % 2 ? 0.3 : -0.3), { opacity: 0.8 });

  // ---------- CORREDOR ----------
  plane(14, 0.9, M.carpet || std(T.cloth(45, [90, 30, 30], 0.2), { bump: false }), 8, 0.004, 7, -Math.PI / 2, 0, 1.2);
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
  const bed = model('old_bed_frame', 3, 0, 10.9, Math.PI, { col: true });
  if (bed) { bed.scale.x = 1.7; bed.updateMatrixWorld(true); const bb = new THREE.Box3().setFromObject(bed); L.colliders[L.colliders.length - 1].x0 = bb.min.x; L.colliders[L.colliders.length - 1].x1 = bb.max.x; }
  else box(1.7, 0.42, 2.1, M.darkWood, 3, 0, 10.9, { col: true });
  box(1.45, 0.18, 1.9, M.sheet, 3, 0.36, 10.85);
  const blanket = box(1.5, 0.05, 1.35, M.blanket, 3, 0.54, 10.6); blanket.rotation.z = 0.02;
  for (const px of [2.6, 3.4]) { const p = box(0.55, 0.12, 0.35, M.sheet, px, 0.54, 11.6); p.rotation.x = -0.25; }
  floorDecal(T.bloodSplat(31, 'pool'), 1.1, 3.3, 10.6, 0.592, 0.5);
  const ns1 = model('ClassicNightstand_01', 1.6, 0, 11.7, Math.PI, { col: true });
  const ns2 = model('ClassicNightstand_01', 4.4, 0, 11.7, Math.PI, { col: true });
  const nsTop = ns2 ? ns2.userData.box.max.y : 0.55;
  if (!ns1) { box(0.45, 0.55, 0.4, M.darkWood, 1.75, 0, 11.7, { col: true }); box(0.45, 0.55, 0.4, M.darkWood, 4.25, 0, 11.7, { col: true }); }
  if (!model('vintage_cabinet_01', 0.36, 0, 9.15, Math.PI / 2, { col: true, dirty: 0.8 })) box(0.6, 2.0, 1.5, M.darkWood, 0.38, 0, 9.0, { col: true });
  // fusível no criado-mudo
  const fuseItem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.07, 8), new THREE.MeshStandardMaterial({ color: 0xd8c890, roughness: 0.3, metalness: 0.4 }));
  fuseItem.rotation.z = Math.PI / 2; fuseItem.position.set(4.35, nsTop + 0.016, 11.65); group.add(fuseItem);
  L.props.fuseItem = fuseItem;
  L.props.fuseI = interact(V(4.35, nsTop + 0.05, 11.65), 'Pegar fusível', () => game.story.event('takeFuse'), { enabled: false });
  bulb(3, 10, 'casal');
  // escrita no teto
  decal(T.bloodText('NÃO OLHE PRA CIMA'), 2.2, 0.55, 3, H - 0.01, 9.4, Math.PI / 2, 0, { rz: Math.PI });

  // ---------- BANHEIRO ----------
  const tubX = 7.05, tubZ = 11.5;
  box(1.7, 0.55, 0.08, M.ceramic, tubX, 0, 11.08, { col: true });
  box(0.08, 0.55, 0.8, M.ceramic, 6.2, 0, tubZ); box(0.08, 0.55, 0.8, M.ceramic, 7.9, 0, tubZ, { col: true });
  box(1.7, 0.06, 0.8, M.ceramic, tubX, 0, tubZ);
  addCol(6.15, 7.95, 0, 0.6, 11.05, 11.95);
  const bloodSurf = plane(1.6, 0.74, M.bloodPool, tubX, 0.47, tubZ, -Math.PI / 2, 0, 0);
  L.props.tub = { surf: bloodSurf, pos: V(tubX, 0.5, tubZ) };
  decal(T.bloodSplat(41, 'drip'), 0.6, 0.6, 7.4, 0.3, 11.035, 0, Math.PI);
  // vaso e pia
  box(0.38, 0.4, 0.5, M.ceramic, 9.6, 0, 9.0, { col: true }); box(0.4, 0.35, 0.18, M.ceramic, 9.75, 0.4, 9.0);
  box(0.45, 0.12, 0.38, M.ceramic, 9.7, 0.78, 10.7, { col: true }); cyl(0.05, 0.07, 0.78, M.ceramic, 9.75, 0, 10.7, 10);
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
  if (!model('old_bed_frame', 15.42, 0, 10.85, Math.PI, { col: true, tint: 0xf0d8d8 })) box(0.95, 0.38, 1.9, std(T.woodFloor(12), { color: 0xb08a70 }), 15.42, 0, 10.85, { col: true });
  box(0.84, 0.14, 1.85, std(T.cloth(46, [200, 170, 190], 0.1)), 15.42, 0.34, 10.85);
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
  plane(8, 12, M.concFloor, 24, BY + 0.005, 6, -Math.PI / 2, 0, 2.5);
  plane(8, 12, M.conc, 24, -0.6, 6, Math.PI / 2, 0, 2.5);
  for (let z = 0.5; z < 12; z += 1.4) box(8, 0.18, 0.12, M.darkWood, 24, -0.78, z, { tile: 1 });
  wall('z', 20, 0, 6, [], M.conc, M.conc, BY, 2.4, { tile: 1.5 });
  wall('z', 20, 8, 12, [], M.conc, M.conc, BY, 2.4, { tile: 1.5 });
  wall('z', 28, 0, 12, [], M.conc, M.conc, BY, 2.4, { tile: 1.5 });
  wall('x', 0, 20, 28, [], M.conc, M.conc, BY, 2.4, { tile: 1.5 });
  wall('x', 12, 20, 28, [], M.conc, M.conc, BY, 2.4, { tile: 1.5 });
  for (const [px, pz] of [[23, 3.6], [23.2, 9], [25.8, 6.4]]) box(0.35, 2.4, 0.35, M.conc, px, BY, pz, { col: true, tile: 1 });
  // estantes, caixotes, barris
  const sh1 = model('wooden_bookshelf_worn', 22.6, BY, 0.38, 0, { col: true, dirty: 0.75 });
  const sh2 = model('wooden_bookshelf_worn', 24.1, BY, 0.38, 0, { col: true, dirty: 0.75 });
  if (!sh1) { for (let s2 = 0; s2 < 3; s2++) box(2.4, 0.04, 0.45, M.darkWood, 23.8, BY + 0.4 + s2 * 0.6, 0.35, { tile: 0.8 }); addCol(22.6, 25, BY, BY + 2, 0.1, 0.6); }
  for (let j = 0; j < 10; j++) cyl(0.045, 0.045, 0.16, new THREE.MeshPhysicalMaterial({ color: [0x4a2a10, 0x3a3010, 0x501010][j % 3], roughness: 0.1, transmission: 0.3, transparent: true, opacity: 0.85, envMap: env }), 22.1 + (j % 5) * 0.22 + Math.floor(j / 5) * 1.5, BY + 0.43 + (j % 2) * 0.68, 0.38, 10);
  model('ammo_box', 24.7, BY + 1.12, 0.4, 0.2);
  model('wooden_crate_01', 21.1, BY, 3.6, 0.3, { col: true }); model('wooden_crate_01', 21.1, BY + 0.35, 3.6, 0.5); model('wooden_crate_01', 26.8, BY, 9.8, 1.4, { col: true });
  model('Barrel_01', 27.2, BY, 11.3, 0, { col: true, dirty: 0.8 }); model('Barrel_01', 26.5, BY, 11.45, 1, { col: true, dirty: 0.8 }); model('trashbag', 21.4, BY, 0.8, 2, { dirty: 0.6 });
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
  // fogo: chamas de shader (fbm) em billboard + brasas + fumaça + luz viva
  const fireG = new THREE.Group(); group.add(fireG); fireG.visible = false;
  const fireShaderMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { t: { value: 0 }, k: { value: 0 } },
    vertexShader: `varying vec2 vUv; uniform float t, k;
      void main(){ vUv = uv; vec3 p = position;
        float w = (0.4 + k * 0.8) * uv.y * uv.y;
        p.x += sin(t * 3.1 + uv.y * 5.0) * 0.09 * w + sin(t * 7.3) * 0.02 * w;
        p.z += cos(t * 2.4 + uv.y * 6.0) * 0.07 * w;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
    fragmentShader: `varying vec2 vUv; uniform float t, k;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int j = 0; j < 4; j++) { v += a * noise(p); p *= 2.03; a *= 0.55; } return v; }
      void main(){
        vec2 uv = vUv;
        vec2 q = vec2(uv.x * 2.0 - 1.0, uv.y);
        q.x *= 1.0 + q.y * 1.1;
        float n = fbm(vec2(q.x * 3.0 + sin(t * 0.7) * 0.4, uv.y * 4.5 - t * 3.4));
        float shape = 1.0 - smoothstep(0.0, 0.8, abs(q.x) * (1.25 - n * 0.8) + uv.y * 0.95 - n * 0.4);
        shape *= smoothstep(0.0, 0.1, uv.y);
        float a = clamp(shape * shape * 1.7 - 0.06, 0.0, 1.0) * (0.45 + k * 0.55);
        float core = clamp(shape * 1.6 - uv.y * 1.1, 0.0, 1.0);
        vec3 col = mix(vec3(0.95, 0.22, 0.02), vec3(1.0, 0.55, 0.08), clamp(shape * 1.3, 0.0, 1.0));
        col = mix(col, vec3(1.0, 0.9, 0.45), core * core);
        gl_FragColor = vec4(col * (1.4 + core), a);
      }`,
  });
  const flameGeo = new THREE.PlaneGeometry(1.0, 1.35); flameGeo.translate(0, 0.675, 0);
  const flame = new THREE.Mesh(flameGeo, flameMat); flame.position.set(27.35, BY + 0.9, 6); flame.frustumCulled = false; fireG.add(flame);
  const fireMat = new THREE.SpriteMaterial({ map: T.softDot(), color: 0xffa030, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  const smokeMat = new THREE.SpriteMaterial({ map: T.softDot(), color: 0x35322e, transparent: true, opacity: 0, depthWrite: false });
  const fireSprites = [];
  for (let i = 0; i < 26; i++) { const s = new THREE.Sprite(fireMat.clone()); fireG.add(s); fireSprites.push({ s, life: Math.random(), ember: true }); }
  for (let i = 0; i < 8; i++) { const s = new THREE.Sprite(smokeMat.clone()); fireG.add(s); fireSprites.push({ s, life: Math.random(), smoke: true }); }
  const fireL = new THREE.PointLight(0xff7020, 0, 15, 1.5); fireL.position.set(27.1, BY + 1.5, 6); fireL.castShadow = true; group.add(fireL);
  L.props.fire = { g: fireG, sprites: fireSprites, light: fireL, level: 0 };
  L.updaters.push((dt, t) => {
    const F = L.props.fire; if (!fireG.visible) { fireL.intensity = 0; return; }
    const k = F.level;
    fireShaderMat.uniforms.t.value = t; flameMat.uniforms.k.value = k;
    flame.scale.set(0.45 + k * 0.85, 0.4 + k * 1.15, 1);
    flame.rotation.y = Math.atan2(game.camera.position.x - flame.position.x, game.camera.position.z - flame.position.z);
    for (const p of fireSprites) {
      p.life += dt * (p.smoke ? 0.35 : 1.1 + Math.random() * 0.8);
      if (p.life > 1) {
        p.life = 0;
        p.x = 27.35 + (Math.random() - 0.5) * 0.6 * (0.5 + k);
        p.z = 6 + (Math.random() - 0.5) * 1.5 * (0.4 + k * 0.8);
      }
      if (p.smoke) {
        p.s.position.set(p.x + Math.sin(t * 0.8 + p.life * 9) * 0.25 * p.life, BY + 1.9 + p.life * (1.6 + k * 1.4), p.z);
        const sc = 0.3 + p.life * 1.1; p.s.scale.set(sc, sc, 1);
        p.s.material.opacity = Math.max(0, (0.5 - Math.abs(p.life - 0.3) * 0.9)) * (0.25 + k * 0.4);
      } else {
        p.s.position.set(p.x + Math.sin(t * 4 + p.life * 11) * 0.09, BY + 1.0 + p.life * (0.9 + k * 1.9), p.z);
        const sc = (0.035 + k * 0.03) * (1 - p.life * 0.8); p.s.scale.set(sc, sc * (1.4 + p.life), 1);
        p.s.material.opacity = (1 - p.life) * (0.5 + k * 0.4);
        p.s.material.color.setHSL(0.07 - p.life * 0.045, 1, 0.55 - p.life * 0.2);
      }
    }
    const fl = 0.72 + Math.sin(t * 11.3) * 0.14 + Math.sin(t * 27.7) * 0.08 + Math.random() * 0.12;
    fireL.intensity = (4 + k * 38) * fl;
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
      if (B.mat.userData.shade) B.mat.userData.shade.material.emissive.setRGB(0.5 * k, 0.38 * k, 0.22 * k);
    }
    L.updaters.forEach(f => f(dt, t));
  };

  L.bounceList = [...L.occluders, ...L.bounce];
  L.buildGrid();
  return L;
}
