// Rostos realistas a partir da cabeça escaneada (Lee Perry-Smith, Infinite-Realities, CC BY 3.0),
// deformada: mandíbula deslocada, órbitas vazias, pele morta.
import * as THREE from 'three';

const EYE = [[-0.77, 1.62, 1.8], [0.77, 1.62, 1.8]];
const MOUTH_Y = 0.47;

function skinFromScan(img, kind) {
  const c = document.createElement('canvas'); c.width = c.height = 1024;
  const x = c.getContext('2d');
  x.drawImage(img, 0, 0, 1024, 1024);
  const d = x.getImageData(0, 0, 1024, 1024), p = d.data;
  // pele morta: dessatura, esverdeia/acinzenta, aumenta contraste das manchas
  const tint = kind === 'father' ? [0.92, 0.9, 0.86] : kind === 'tiago' ? [0.86, 0.88, 0.92] : [0.8, 0.86, 0.82];
  for (let i = 0; i < p.length; i += 4) {
    const l = (p[i] * 0.3 + p[i + 1] * 0.59 + p[i + 2] * 0.11);
    const s = kind === 'father' ? 0.35 : 0.15;
    p[i] = (l + (p[i] - l) * s) * tint[0]; p[i + 1] = (l + (p[i + 1] - l) * s) * tint[1]; p[i + 2] = (l + (p[i + 2] - l) * s) * tint[2];
  }
  x.putImageData(d, 0, 0);
  // veias
  let seed = 11; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  x.lineCap = 'round';
  for (let i = 0; i < 90; i++) {
    let px = 100 + r() * 820, py = 120 + r() * 700;
    x.strokeStyle = `rgba(${40 + r() * 30},${30 + r() * 30},${70 + r() * 40},${0.12 + r() * 0.22})`; x.lineWidth = 0.8 + r() * 2.2;
    x.beginPath(); x.moveTo(px, py);
    for (let k = 0; k < 10; k++) { px += (r() - 0.5) * 34; py += (r() - 0.3) * 26; x.lineTo(px, py); }
    x.stroke();
  }
  // hematomas em volta dos olhos
  for (const [ex, ey] of [[440, 300], [584, 300]]) {
    const g = x.createRadialGradient(ex, ey, 4, ex, ey, 90);
    g.addColorStop(0, 'rgba(10,0,0,0.95)'); g.addColorStop(0.35, 'rgba(40,10,30,0.7)'); g.addColorStop(1, 'rgba(60,30,60,0)');
    x.fillStyle = g; x.beginPath(); x.arc(ex, ey, 90, 0, 7); x.fill();
    // lágrimas de sangue
    if (kind !== 'tiago') for (let k = 0; k < 3; k++) {
      const sx = ex - 14 + k * 13 + r() * 6, len = 90 + r() * 170;
      const gg = x.createLinearGradient(0, ey, 0, ey + len);
      gg.addColorStop(0, 'rgba(50,0,0,0.95)'); gg.addColorStop(1, 'rgba(70,0,0,0)');
      x.strokeStyle = gg; x.lineWidth = 3 + r() * 5; x.beginPath(); x.moveTo(sx, ey + 10);
      x.bezierCurveTo(sx + (r() - 0.5) * 12, ey + len * 0.4, sx + (r() - 0.5) * 18, ey + len * 0.7, sx + (r() - 0.5) * 20, ey + len); x.stroke();
    }
  }
  // boca: lábios escuros e sangue escorrendo
  const mg = x.createRadialGradient(512, 478, 4, 512, 478, 80);
  mg.addColorStop(0, 'rgba(10,0,0,0.95)'); mg.addColorStop(0.6, 'rgba(50,5,10,0.6)'); mg.addColorStop(1, 'rgba(60,10,20,0)');
  x.fillStyle = mg; x.beginPath(); x.ellipse(512, 478, 90, 60, 0, 0, 7); x.fill();
  if (kind !== 'father') for (let k = 0; k < 5; k++) {
    const sx = 470 + r() * 85, len = 80 + r() * 220;
    x.strokeStyle = `rgba(${55 + r() * 30},0,0,0.85)`; x.lineWidth = 3 + r() * 6;
    x.beginPath(); x.moveTo(sx, 500); x.quadraticCurveTo(sx + (r() - 0.5) * 20, 500 + len / 2, sx + (r() - 0.5) * 30, 500 + len); x.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

const smooth = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };

// kind: 'mother' | 'father' | 'tiago' | 'scare'
export function makeFace(A, kind = 'mother') {
  if (!A || !A.head) return null;
  const src = A.head;
  const geo = src.geometry.clone();
  const pos = geo.attributes.position, uv = geo.attributes.uv, n = pos.count;
  const col = new Float32Array(n * 3).fill(1);
  const jaw = kind === 'scare' ? 1.35 : kind === 'mother' ? 1.1 : kind === 'father' ? 0.55 : 0.25;
  const v = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    v.fromBufferAttribute(pos, i);
    const front = smooth(-0.2, 1.4, v.z);
    // mandíbula deslocada para baixo (boca aberta além do possível)
    if (v.y < MOUTH_Y) {
      const below = MOUTH_Y - v.y;
      const k = front * smooth(2.6, 0.6, Math.abs(v.x));
      v.y -= (Math.min(below, 0.35) / 0.35) * jaw * k + below * 0.22 * jaw * k;
      v.z -= below * 0.06 * jaw * k;
    }
    // faixa dos lábios esticada = cavidade escura
    const lip = smooth(0.95, 0.2, Math.abs(v.x)) * front * smooth(MOUTH_Y + 0.25, MOUTH_Y, v.y) * smooth(MOUTH_Y - 0.45, MOUTH_Y - 0.05, v.y);
    // órbitas afundadas
    let socket = 0;
    for (const [ex, ey, ez] of EYE) {
      const d = Math.hypot(v.x - ex, (v.y - ey) * 1.25);
      if (v.z > 0.8) { const k = smooth(0.62, 0.15, d); socket = Math.max(socket, k); v.z -= k * 0.42; }
    }
    // maçãs do rosto encovadas
    const cheek = front * smooth(1.6, 0.9, Math.abs(Math.abs(v.x) - 1.25) + Math.abs(v.y - 0.75));
    v.x -= Math.sign(v.x) * cheek * 0.12;
    pos.setXYZ(i, v.x, v.y, v.z);
    const dark = Math.max(socket * 0.97, lip * (kind === 'father' ? 0.75 : 0.96));
    col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = 1 - dark;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  const cacheKey = 'skin_' + kind;
  A[cacheKey] = A[cacheKey] || (A.headMaps.map && A.headMaps.map.image ? skinFromScan(A.headMaps.map.image, kind) : null);
  const mat = new THREE.MeshPhysicalMaterial({
    map: A[cacheKey], normalMap: A.headMaps.normalMap || null, vertexColors: true,
    roughness: kind === 'father' ? 0.62 : 0.42, metalness: 0, sheen: 0.4, sheenRoughness: 0.6, sheenColor: new THREE.Color(0x6a7a70),
    clearcoat: kind === 'mother' || kind === 'scare' ? 0.35 : 0.1, clearcoatRoughness: 0.4,
  });
  mat.normalScale.set(1.2, 1.2);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true; mesh.receiveShadow = true;
  // cavidade da boca e dentes
  const g = new THREE.Group(); g.add(mesh);
  const cav = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), new THREE.MeshStandardMaterial({ color: 0x060000, roughness: 0.3 }));
  cav.scale.set(0.85, 0.5 + jaw * 0.6, 0.6); cav.position.set(0, MOUTH_Y - 0.25 - jaw * 0.55, 1.55); g.add(cav);
  if (jaw > 0.5) {
    const tm = new THREE.MeshStandardMaterial({ color: 0xb8a98a, roughness: 0.35 });
    for (let i = 0; i < 9; i++) {
      const t = new THREE.Mesh(new THREE.ConeGeometry(0.06 + Math.random() * 0.03, 0.22 + Math.random() * 0.12, 5), tm);
      const a = (i / 8 - 0.5) * 1.6; t.position.set(Math.sin(a) * 0.6, MOUTH_Y - 0.08, 1.85 + Math.cos(a) * 0.25 - 0.25); t.rotation.x = Math.PI; g.add(t);
      const b = t.clone(); b.position.y = MOUTH_Y - 0.3 - jaw * 1.1; b.rotation.x = 0; b.position.z -= 0.12; g.add(b);
    }
  }
  // reflexo úmido nos olhos (dois pontos de luz no fundo da órbita: dá vida ao vazio)
  if (kind !== 'tiago') for (const [ex, ey] of EYE) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 10), new THREE.MeshPhysicalMaterial({ color: 0x020202, roughness: 0.05, clearcoat: 1 }));
    e.position.set(ex * 0.96, ey, 1.42); g.add(e);
  }
  // escala para metros: cabeça ~ 0.26 m do queixo ao topo
  g.scale.setScalar(0.033);
  return g;
}
