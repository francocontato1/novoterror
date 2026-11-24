// Corpos anatômicos procedurais: membros torneados, tronco com costelas, pano com dobras, cabelo em mechas.
import * as THREE from 'three';
import * as T from './textures.js';
import { makeFace } from './faces.js';

// normal map de pele (poros + rugas) gerado
let skinNormal = null;
function skinNormalMap() {
  if (skinNormal) return skinNormal;
  const S = 256, c = document.createElement('canvas'); c.width = c.height = S;
  const x = c.getContext('2d'), h = new Float32Array(S * S);
  let s = 5; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < S * S; i++) h[i] = r() * 0.25;
  for (let k = 0; k < 300; k++) { const cx = r() * S, cy = r() * S, len = 10 + r() * 50; for (let t = 0; t < len; t++) { const px = Math.floor(cx + t) % S, py = Math.floor(cy + Math.sin(t * 0.2) * 3 + S) % S; h[py * S + px] -= 0.6; } }
  const img = x.createImageData(S, S);
  for (let y = 0; y < S; y++) for (let xx = 0; xx < S; xx++) {
    const i = y * S + xx, dx = h[y * S + (xx + 1) % S] - h[i], dy = h[((y + 1) % S) * S + xx] - h[i];
    const nx = -dx * 2, ny = -dy * 2, nz = 1, l = Math.hypot(nx, ny, nz);
    img.data[i * 4] = (nx / l * 0.5 + 0.5) * 255; img.data[i * 4 + 1] = (ny / l * 0.5 + 0.5) * 255; img.data[i * 4 + 2] = (nz / l * 0.5 + 0.5) * 255; img.data[i * 4 + 3] = 255;
  }
  x.putImageData(img, 0, 0);
  skinNormal = new THREE.CanvasTexture(c); skinNormal.wrapS = skinNormal.wrapT = THREE.RepeatWrapping; skinNormal.repeat.set(3, 3);
  return skinNormal;
}

export function bodyMats() {
  const nm = skinNormalMap();
  const skinM = (seed, base, o = {}) => {
    const m = new THREE.MeshPhysicalMaterial({ map: T.skin(seed, base), normalMap: nm, roughness: o.rough ?? 0.5, sheen: 0.35, sheenRoughness: 0.7, sheenColor: new THREE.Color(o.sheen ?? 0x7a8a80), clearcoat: o.wet ?? 0.2, clearcoatRoughness: 0.45 });
    m.normalScale.set(0.6, 0.6); return m;
  };
  return {
    deadSkin: skinM(22, [104, 108, 98], { wet: 0.4 }),
    paleSkin: skinM(21, [138, 128, 112], { rough: 0.6, wet: 0.08 }),
    childSkin: skinM(25, [186, 168, 154], { rough: 0.65, wet: 0 }),
    demonSkin: skinM(29, [30, 27, 26], { rough: 0.25, wet: 0.9, sheen: 0x302020 }),
    gown: new THREE.MeshStandardMaterial({ map: T.cloth(23, [140, 132, 114], 2.0), roughness: 0.95, side: THREE.DoubleSide, alphaMap: tornAlpha(), alphaTest: 0.5 }),
    shirt: new THREE.MeshStandardMaterial({ map: T.cloth(24, [92, 96, 84], 1.9), roughness: 0.95, side: THREE.DoubleSide }),
    pants: new THREE.MeshStandardMaterial({ map: T.cloth(26, [52, 48, 42], 0.4), roughness: 0.95 }),
    childDress: new THREE.MeshStandardMaterial({ map: T.cloth(27, [170, 120, 138], 0.4), roughness: 0.95, side: THREE.DoubleSide, alphaMap: tornAlpha(3), alphaTest: 0.5 }),
    hair: new THREE.MeshStandardMaterial({ map: T.hairStrands(), alphaTest: 0.32, side: THREE.DoubleSide, roughness: 0.42, color: 0x2a2420 }),
    nail: new THREE.MeshStandardMaterial({ color: 0x2a2018, roughness: 0.3 }),
    hole: new THREE.MeshBasicMaterial({ color: 0x000000 }),
    ghost: new THREE.MeshStandardMaterial({ color: 0x0b0b0b, roughness: 1 }),
    horn: new THREE.MeshStandardMaterial({ map: T.skin(30, [70, 62, 52]), roughness: 0.75 }),
    demonMouth: new THREE.MeshStandardMaterial({ color: 0x100000, emissive: 0x500800, emissiveIntensity: 1.5 }),
  };
}

function tornAlpha(seed = 1) {
  const W = 256, H = 256, c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, W, H);
  let s = seed * 77 + 1; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  x.fillStyle = '#000'; x.beginPath(); x.moveTo(0, H);
  for (let i = 0; i <= 40; i++) x.lineTo(i / 40 * W, H - 4 - r() * 40 * (r() < 0.25 ? 2 : 1));
  x.lineTo(W, H); x.fill();
  for (let i = 0; i < 18; i++) { x.beginPath(); x.ellipse(r() * W, H * 0.45 + r() * H * 0.45, 2 + r() * 8, 3 + r() * 12, r() * 3, 0, 7); x.fill(); }
  const t = new THREE.CanvasTexture(c); return t;
}

// membro torneado (pivô no topo, desce em -y); prof: lista [t, raio] com t 0..1
function limb(len, prof, mat, seg = 12) {
  const pts = [];
  for (let i = 0; i <= 16; i++) {
    const t = i / 16;
    let rr = prof[0][1];
    for (let k = 1; k < prof.length; k++) if (t <= prof[k][0]) { const a = prof[k - 1], b = prof[k]; const u = (t - a[0]) / (b[0] - a[0]); rr = a[1] + (b[1] - a[1]) * (u * u * (3 - 2 * u)); break; }
    pts.push(new THREE.Vector2(Math.max(0.002, rr), -t * len));
  }
  pts.unshift(new THREE.Vector2(0.001, 0)); pts.push(new THREE.Vector2(0.001, -len));
  const geo = new THREE.LatheGeometry(pts, seg);
  const g = new THREE.Group(); const m = new THREE.Mesh(geo, mat); m.castShadow = true; m.receiveShadow = true; g.add(m); g.userData.mesh = m;
  return g;
}

function clothTube(prof, len, mat, folds = 9, seed = 1) {
  const pts = [];
  for (let i = 0; i <= 24; i++) { const t = i / 24; let rr = prof(t); pts.push(new THREE.Vector2(rr, -t * len)); }
  const geo = new THREE.LatheGeometry(pts, 40);
  const p = geo.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const a = Math.atan2(v.z, v.x), t = -v.y / len, rr = Math.hypot(v.x, v.z);
    const f = 1 + (Math.sin(a * folds + seed + t * 2.5) * 0.06 + Math.sin(a * folds * 2.3 + seed * 3) * 0.025) * (0.3 + t);
    p.setXYZ(i, Math.cos(a) * rr * f, v.y, Math.sin(a) * rr * f);
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mat); m.castShadow = true; m.receiveShadow = true;
  return m;
}

// constrói humanoide com a mesma hierarquia usada pela IA
export function buildBody(M, o = {}, assets = null) {
  const h = o.h ?? 1.7, s = h / 1.7, thin = o.thin ?? 1, armK = o.armK ?? 1;
  const skin = o.skin || M.deadSkin, top = o.top || skin, bottom = o.bottom || skin;
  const P = {};
  P.root = new THREE.Group();
  P.hips = new THREE.Group(); P.hips.position.y = 0.95 * s; P.root.add(P.hips);
  // pelve + tronco (perfil com cintura e caixa torácica)
  const torso = limb(0.62 * s, [[0, 0.07], [0.1, 0.13], [0.35, 0.115], [0.55, 0.135], [0.78, 0.15], [0.9, 0.12], [1, 0.05]].map(([t, r]) => [t, r * thin * s]), top, 20);
  torso.rotation.x = Math.PI; torso.position.y = -0.1 * s; torso.userData.mesh.scale.set(1.15, 1, 0.72);
  P.spine = new THREE.Group(); P.spine.position.y = 0.0; P.hips.add(P.spine); P.spine.add(torso);
  // costelas aparentes (quando a pele está exposta)
  if (o.ribs) for (let i = 0; i < 6; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.135 * thin * s, 0.006 * s, 4, 16, Math.PI * 0.9), skin);
    rib.position.set(0, (0.3 + i * 0.035) * s, 0.0); rib.rotation.set(Math.PI / 2, 0, Math.PI * 0.05 - Math.PI * 0.45); rib.scale.set(1.05, 0.62, 1); P.spine.add(rib);
  }
  P.neck = new THREE.Group(); P.neck.position.y = 0.5 * s; P.spine.add(P.neck);
  const nk = limb(0.13 * s * (o.longNeck ?? 1), [[0, 0.05], [0.5, 0.042], [1, 0.05]].map(([t, r]) => [t, r * s * thin]), skin, 12);
  nk.rotation.x = Math.PI; nk.position.y = -0.02 * s; P.neck.add(nk);
  P.head = new THREE.Group(); P.head.position.y = 0.11 * s * (o.longNeck ?? 1); P.neck.add(P.head);
  const face = o.face && assets ? makeFace(assets, o.face) : null;
  if (face) {
    face.scale.multiplyScalar(s * (o.headK ?? 1) * 1.28);
    face.position.set(0, 0.03 * s, -0.012 * s); P.head.add(face); P.face = face;
    P.mouth = face.children[1];
  } else {
    const hm = new THREE.Mesh(new THREE.SphereGeometry(0.105 * s, 24, 18), skin);
    hm.scale.set(0.86, 1.15 * (o.longHead ?? 1), 0.98); hm.position.y = 0.09 * s * (o.longHead ?? 1); hm.castShadow = true; P.head.add(hm);
    const slit = new THREE.Mesh(new THREE.SphereGeometry(0.03 * s, 10, 8), o.mouthMat || M.hole);
    slit.position.set(0, 0.07 * s, 0.092 * s); slit.scale.set(0.35, 3.2, 0.5); P.head.add(slit); P.mouth = slit;
  }
  for (const side of [-1, 1]) {
    const key = side < 0 ? 'L' : 'R';
    const sh = new THREE.Group(); sh.position.set(side * 0.19 * thin * s, 0.43 * s, 0); P.spine.add(sh);
    const al = 0.29 * s * armK, fl = 0.27 * s * armK;
    const ua = limb(al, [[0, 0.055], [0.25, 0.05], [0.8, 0.036], [1, 0.034]].map(([t, r]) => [t, r * s * thin]), o.sleeves ? top : skin); sh.add(ua);
    const fa = new THREE.Group(); fa.position.y = -al; ua.add(fa);
    fa.add(limb(fl, [[0, 0.034], [0.25, 0.038], [0.85, 0.024], [1, 0.022]].map(([t, r]) => [t, r * s * thin]), skin));
    const hand = new THREE.Group(); hand.position.y = -fl; fa.add(hand);
    const palm = limb(0.085 * s, [[0, 0.022], [0.5, 0.03], [1, 0.026]].map(([t, r]) => [t, r * s]), skin, 8); palm.userData.mesh.scale.set(1.2, 1, 0.45); hand.add(palm);
    const fk = (o.fingerK ?? 1);
    for (let i = 0; i < 4; i++) {
      const fg = new THREE.Group(); fg.position.set((i - 1.5) * 0.017 * s, -0.08 * s, 0); fg.rotation.set(0.12 + i * 0.04, 0, (i - 1.5) * 0.06); hand.add(fg);
      const l1 = 0.045 * s * fk, l2 = 0.04 * s * fk;
      fg.add(limb(l1, [[0, 0.0085 * s], [1, 0.007 * s]], skin, 6));
      const f2 = new THREE.Group(); f2.position.y = -l1; f2.rotation.x = 0.35; fg.add(f2);
      f2.add(limb(l2, [[0, 0.007 * s], [1, 0.0045 * s]], skin, 6));
      const nail = new THREE.Mesh(new THREE.ConeGeometry(0.004 * s, 0.014 * s * fk, 5), M.nail); nail.position.y = -l2 - 0.005 * s; nail.rotation.x = Math.PI; f2.add(nail);
    }
    const th = limb(0.05 * s * fk, [[0, 0.01 * s], [1, 0.006 * s]], skin, 6); th.position.set(side * -0.025 * s, -0.035 * s, 0.01 * s); th.rotation.z = side * -0.7; hand.add(th);
    P['arm' + key] = ua; P['fore' + key] = fa; P['hand' + key] = hand; P['shoulder' + key] = sh;
    const tl = 0.45 * s, sl = 0.44 * s;
    const leg = limb(tl, [[0, 0.085], [0.2, 0.08], [0.85, 0.048], [1, 0.045]].map(([t, r]) => [t, r * s * thin]), bottom); leg.position.set(side * 0.09 * s, 0, 0); P.hips.add(leg);
    const shin = new THREE.Group(); shin.position.y = -tl; leg.add(shin);
    shin.add(limb(sl, [[0, 0.045], [0.25, 0.05], [0.85, 0.03], [1, 0.028]].map(([t, r]) => [t, r * s * thin]), o.barelegs ? skin : bottom));
    const foot = limb(0.21 * s, [[0, 0.03], [0.3, 0.035], [1, 0.022]].map(([t, r]) => [t, r * s]), skin, 8);
    foot.rotation.x = -Math.PI / 2; foot.position.set(0, -sl, -0.04 * s); foot.userData.mesh.scale.set(1.25, 1, 0.6); shin.add(foot);
    P['leg' + key] = leg; P['shin' + key] = shin;
  }
  if (o.dress) {
    const len = 0.95 * s * (o.dressLen ?? 1);
    const d = clothTube((t) => (0.17 + t * 0.13 + Math.sin(t * Math.PI) * 0.02) * s * thin, len, o.dress, 9, (o.seed ?? 1));
    d.position.y = 0.52 * s; P.spine.add(d); P.dress = d;
  }
  if (o.hair) {
    const hg = new THREE.Group(); P.head.add(hg); P.hair = hg;
    const len = (o.hairLen ?? 0.6) * s, N = 26;
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      const front = Math.cos(a) > 0.55;
      if (front && !o.hairFace) continue;
      const w = (0.06 + Math.random() * 0.05) * s;
      const geo = new THREE.PlaneGeometry(w, len * (0.8 + Math.random() * 0.35), 1, 6);
      // curva para fora (cai do couro cabeludo)
      const p = geo.attributes.position;
      for (let k = 0; k < p.count; k++) { const yy = p.getY(k); const t = 0.5 - yy / (len); p.setZ(k, Math.max(0, 0.35 - t) * 0.06 * s + t * 0.01 * s); }
      geo.translate(0, -len / 2 * 0.95, 0);
      const pl = new THREE.Mesh(geo, M.hair);
      const rr = 0.085 * s;
      pl.position.set(Math.sin(a) * rr, 0.19 * s, Math.cos(a) * rr * 0.95);
      pl.rotation.y = a; pl.rotation.x = front ? -0.12 : 0.08;
      pl.castShadow = true; hg.add(pl);
    }
    // topo do couro cabeludo
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.105 * s, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), new THREE.MeshStandardMaterial({ color: 0x0e0b09, roughness: 0.55 }));
    cap.position.set(0, 0.105 * s, -0.012 * s); cap.scale.set(1, 1.05, 1.12); hg.add(cap);
  }
  P.root.traverse((m) => { if (m.isMesh) m.userData.creature = true; });
  return P;
}
