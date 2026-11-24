// Corpo humano real (modelo "female02" da Reallusion iClone, exemplos do three.js) com esqueleto
// montado por código. Um esqueleto virtual invisível recebe as poses; o esqueleto real copia,
// compensando a postura em que o modelo foi feito (uma mão na cintura, o outro braço caído).
import * as THREE from 'three';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const DOWN = V(0, -1, 0);

// articulações medidas no modelo original (cm)
const J = {
  hips: V(0.5, 92, 5.5), chest: V(0.5, 125, 6), neck: V(1, 141, 4), headJ: V(3, 148, 5), top: V(3, 168, 4),
  shL: V(-13.5, 136, 2), elL: V(-14.5, 108.5, -0.5), wrL: V(-21, 86, 6.6), tipL: V(-22.5, 71, 8),
  shR: V(16, 136, 2), elR: V(23, 115, -9), wrR: V(17.5, 99, 12), tipR: V(14, 94, 15),
  hipL: V(-5.5, 87, 5), knL: V(-3.2, 50, 4), anL: V(-0.5, 13, -10), toeL: V(0.5, 2, 4),
  hipR: V(5, 87, 6), knR: V(5.5, 50, 8), anR: V(4.7, 9, -2), toeR: V(5, 2, 15),
};

function dirtyTex(img, kind) {
  const c = document.createElement('canvas'); c.width = c.height = 1024;
  const x = c.getContext('2d'); x.drawImage(img, 0, 0, 1024, 1024);
  const d = x.getImageData(0, 0, 1024, 1024), p = d.data;
  for (let i = 0; i < p.length; i += 4) {
    const l = p[i] * 0.3 + p[i + 1] * 0.59 + p[i + 2] * 0.11;
    const sat = kind === 'hair' ? 0.2 : 0.12, k = kind === 'hair' ? 0.4 : 0.6;
    p[i] = (l + (p[i] - l) * sat) * k * 0.95; p[i + 1] = (l + (p[i + 1] - l) * sat) * k; p[i + 2] = (l + (p[i + 2] - l) * sat) * k * 0.96;
  }
  x.putImageData(d, 0, 0);
  let s = kind.length * 77 + 5; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  if (kind === 'face') {
    // órbitas vazias, lágrimas de sangue, boca escura
    for (const [ex, ey] of [[0.322, 0.392], [0.49, 0.392]]) {
      const cx = ex * 1024, cy = ey * 1024;
      const g = x.createRadialGradient(cx, cy, 2, cx, cy, 70);
      g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.35, 'rgba(5,0,0,0.95)'); g.addColorStop(0.7, 'rgba(40,10,30,0.5)'); g.addColorStop(1, 'rgba(40,20,40,0)');
      x.fillStyle = g; x.beginPath(); x.ellipse(cx, cy, 70, 52, 0, 0, 7); x.fill();
      for (let k = 0; k < 3; k++) {
        const sx = cx - 18 + k * 16, len = 120 + r() * 220;
        const gg = x.createLinearGradient(0, cy, 0, cy + len); gg.addColorStop(0, 'rgba(60,0,0,0.95)'); gg.addColorStop(1, 'rgba(60,0,0,0)');
        x.strokeStyle = gg; x.lineWidth = 6 + r() * 8; x.beginPath(); x.moveTo(sx, cy + 20); x.quadraticCurveTo(sx + (r() - 0.5) * 20, cy + len / 2, sx + (r() - 0.5) * 26, cy + len); x.stroke();
      }
    }
    const mx = 0.405 * 1024, my = 0.6 * 1024, mg = x.createRadialGradient(mx, my, 2, mx, my, 80);
    mg.addColorStop(0, 'rgba(0,0,0,0.95)'); mg.addColorStop(0.5, 'rgba(30,0,5,0.7)'); mg.addColorStop(1, 'rgba(30,0,5,0)');
    x.fillStyle = mg; x.beginPath(); x.ellipse(mx, my, 80, 50, 0, 0, 7); x.fill();
  }
  // veias, sujeira e sangue
  x.lineCap = 'round';
  for (let i = 0; i < (kind === 'hair' ? 0 : 120); i++) {
    let px = r() * 1024, py = r() * 1024; x.strokeStyle = `rgba(40,30,60,${0.08 + r() * 0.15})`; x.lineWidth = 1 + r() * 2;
    x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 8; k++) { px += (r() - 0.5) * 30; py += (r() - 0.3) * 24; x.lineTo(px, py); } x.stroke();
  }
  for (let i = 0; i < (kind === 'body' ? 45 : 8); i++) {
    const cx = r() * 1024, cy = r() * 1024, rr = 10 + r() * 60;
    const g = x.createRadialGradient(cx, cy, 1, cx, cy, rr); g.addColorStop(0, `rgba(${50 + r() * 30},0,0,${0.5 + r() * 0.4})`); g.addColorStop(1, 'rgba(40,0,0,0)');
    x.fillStyle = g; x.beginPath(); x.arc(cx, cy, rr, 0, 7); x.fill();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.flipY = true;
  return t;
}

// distância de ponto a segmento, normalizada pelo raio
function segDist(p, a, b, r) {
  const ab = b.clone().sub(a), t = THREE.MathUtils.clamp(p.clone().sub(a).dot(ab) / ab.lengthSq(), 0, 1);
  return p.distanceTo(a.clone().addScaledVector(ab, t)) / r;
}

export function buildRealBody(data, imgs, o = {}) {
  const H = o.h ?? 1.62, S = H / 168, OFF = V(-0.5, 0, -5.5);
  const w = (v) => v.clone().add(OFF).multiplyScalar(S);
  const P = {};
  // ---------- esqueleto virtual (recebe as poses do código) ----------
  P.root = new THREE.Group();
  P.hips = new THREE.Group(); P.hips.position.copy(w(J.hips)).setX(0).setZ(0); P.root.add(P.hips);
  P.spine = new THREE.Group(); P.hips.add(P.spine);
  P.neck = new THREE.Group(); P.neck.position.copy(J.neck.clone().sub(J.hips).multiplyScalar(S)); P.spine.add(P.neck);
  P.head = new THREE.Group(); P.head.position.copy(J.headJ.clone().sub(J.neck).multiplyScalar(S)); P.neck.add(P.head);
  P.hair = new THREE.Group(); P.head.add(P.hair);
  P.mouth = new THREE.Object3D(); P.mouth.scale.set(1, 1, 1); P.head.add(P.mouth);
  const sides = { L: ['shL', 'elL', 'wrL', 'tipL', 'hipL', 'knL', 'anL', 'toeL'], R: ['shR', 'elR', 'wrR', 'tipR', 'hipR', 'knR', 'anR', 'toeR'] };
  for (const k of ['L', 'R']) {
    const [sh, el, wr, tip, hp, kn, an] = sides[k];
    const shoulder = new THREE.Group(); shoulder.position.copy(J[sh].clone().sub(J.hips).multiplyScalar(S)); P.spine.add(shoulder);
    const arm = new THREE.Group(); shoulder.add(arm);
    const fore = new THREE.Group(); fore.position.y = -J[el].distanceTo(J[sh]) * S; arm.add(fore);
    const hand = new THREE.Group(); hand.position.y = -J[wr].distanceTo(J[el]) * S; fore.add(hand);
    const leg = new THREE.Group(); leg.position.copy(J[hp].clone().sub(J.hips).multiplyScalar(S)); P.hips.add(leg);
    const shin = new THREE.Group(); shin.position.y = -J[kn].distanceTo(J[hp]) * S; leg.add(shin);
    Object.assign(P, { ['shoulder' + k]: shoulder, ['arm' + k]: arm, ['fore' + k]: fore, ['hand' + k]: hand, ['leg' + k]: leg, ['shin' + k]: shin });
  }
  // ---------- esqueleto real ----------
  const bones = {}, list = [];
  const mk = (name, parent, pos) => { const b = new THREE.Bone(); b.name = name; b.position.copy(pos); if (parent) parent.add(b); bones[name] = b; list.push(b); return b; };
  const rel = (a, b) => J[a].clone().sub(J[b]).multiplyScalar(S);
  const bH = mk('hips', null, w(J.hips));
  mk('spine', bH, V(0, 0, 0)); mk('neck', bones.spine, rel('neck', 'hips')); mk('head', bones.neck, rel('headJ', 'neck'));
  const C = {};
  for (const k of ['L', 'R']) {
    const [sh, el, wr, tip, hp, kn, an, toe] = sides[k];
    mk('shoulder' + k, bones.spine, rel(sh, 'hips'));
    mk('arm' + k, bones['shoulder' + k], V(0, 0, 0));
    mk('fore' + k, bones['arm' + k], rel(el, sh));
    mk('hand' + k, bones['fore' + k], rel(wr, el));
    mk('leg' + k, bH, rel(hp, 'hips'));
    mk('shin' + k, bones['leg' + k], rel(kn, hp));
    // rotação que leva "para baixo" até a direção real de cada segmento no modelo
    const q = (a, b) => new THREE.Quaternion().setFromUnitVectors(DOWN, J[b].clone().sub(J[a]).normalize());
    C['arm' + k] = q(sh, el); C['fore' + k] = q(el, wr); C['hand' + k] = q(wr, tip); C['leg' + k] = q(hp, kn); C['shin' + k] = q(kn, an);
  }
  const skeleton = new THREE.Skeleton(list);
  // ---------- pesos de cada vértice ----------
  const segs = [
    ['hips', J.hips.clone().setY(76), J.hips.clone().setY(104), 15], ['spine', J.hips.clone().setY(104), J.neck, 14],
    ['neck', J.neck, J.headJ, 6], ['head', J.headJ, J.top, 11],
  ];
  for (const k of ['L', 'R']) {
    const [sh, el, wr, tip, hp, kn, an, toe] = sides[k];
    segs.push(['arm' + k, J[sh], J[el], 4.8], ['fore' + k, J[el], J[wr], 4.2], ['hand' + k, J[wr], J[tip], 4.5], ['leg' + k, J[hp], J[kn], 8.5], ['shin' + k, J[kn], J[an], 6], ['shin' + k, J[an], J[toe], 5.5]);
  }
  const adj = new Set(['hips|spine', 'spine|neck', 'neck|head', 'spine|armL', 'spine|armR', 'armL|foreL', 'armR|foreR', 'foreL|handL', 'foreR|handR', 'hips|legL', 'hips|legR', 'legL|shinL', 'legR|shinR']);
  const isAdj = (a, b) => adj.has(a + '|' + b) || adj.has(b + '|' + a);
  const idx = Object.fromEntries(list.map((b, i) => [b.name, i]));
  const mats = {};
  const meshes = [];
  for (const [key, g] of Object.entries(data)) {
    const n = g.p.length / 3, pos = new Float32Array(n * 3), si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
    const p = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      p.set(g.p[i * 3], g.p[i * 3 + 1], g.p[i * 3 + 2]);
      let best = [['head', 0]];
      if (key === '01' || key === '02') best = [[p.y < J.neck.y + 2 ? 'neck' : 'head', 0]];
      else {
        const ds = segs.map(([name, a, b, r]) => [name, segDist(p, a, b, r)]).sort((u, v) => u[1] - v[1]);
        best = [ds[0]];
        const second = ds.find((d) => d[0] !== ds[0][0]);
        if (second && isAdj(ds[0][0], second[0]) && second[1] < ds[0][1] * 1.8 + 0.25) best.push(second);
      }
      if (best.length === 2) {
        const w1 = 1 / Math.pow(best[0][1] + 0.05, 3), w2 = 1 / Math.pow(best[1][1] + 0.05, 3), t = w1 + w2;
        si[i * 4] = idx[best[0][0]]; sw[i * 4] = w1 / t; si[i * 4 + 1] = idx[best[1][0]]; sw[i * 4 + 1] = w2 / t;
      } else { si[i * 4] = idx[best[0][0]]; sw[i * 4] = 1; }
      const q = w(p); pos[i * 3] = q.x; pos[i * 3 + 1] = q.y; pos[i * 3 + 2] = q.z;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.u), 2));
    geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(g.n), 3));
    geo.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
    geo.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
    const kind = key === '01' ? 'hair' : key === '02' ? 'face' : 'body';
    mats[kind] = mats[kind] || new THREE.MeshPhysicalMaterial({
      map: imgs[kind] ? dirtyTex(imgs[kind], kind) : null, roughness: kind === 'hair' ? 0.6 : 0.62, side: THREE.DoubleSide,
      sheen: kind === 'hair' ? 0 : 0.12, sheenColor: new THREE.Color(0x5a6a60), clearcoat: 0.08, clearcoatRoughness: 0.6,
    });
    const m = new THREE.SkinnedMesh(geo, mats[kind]);
    m.castShadow = true; m.receiveShadow = true; m.frustumCulled = false; m.userData.creature = true;
    meshes.push(m);
  }
  P.root.add(bH);
  P.root.updateMatrixWorld(true);
  for (const m of meshes) { P.root.add(m); m.bind(skeleton); }
  // copia a pose do esqueleto virtual para o real
  const qa = new THREE.Quaternion();
  const I = new THREE.Quaternion();
  const drive = (name, v, parentC) => {
    const b = bones[name]; const c = C[name] || I;
    qa.copy(parentC || I).multiply(v.quaternion).multiply(c.clone().invert());
    b.quaternion.copy(qa);
  };
  P.drive = () => {
    bH.position.set(P.hips.position.x, P.hips.position.y, P.hips.position.z).add(w(J.hips).setY(0));
    bH.quaternion.copy(P.hips.quaternion);
    bones.spine.quaternion.copy(P.spine.quaternion);
    bones.neck.quaternion.copy(P.neck.quaternion);
    bones.head.quaternion.copy(P.head.quaternion);
    for (const k of ['L', 'R']) {
      bones['shoulder' + k].quaternion.copy(P['shoulder' + k].quaternion);
      drive('arm' + k, P['arm' + k], null);
      drive('fore' + k, P['fore' + k], C['arm' + k]);
      drive('hand' + k, P['hand' + k], C['fore' + k]);
      drive('leg' + k, P['leg' + k], null);
      drive('shin' + k, P['shin' + k], C['leg' + k]);
    }
  };
  P.real = true; P.meshes = meshes; P.mats = mats;
  P.drive();
  return P;
}
