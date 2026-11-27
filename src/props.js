// Objetos modelados em detalhe: telefone de disco, geladeira antiga, viatura.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as T from './textures.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
// sujeira/ferrugem sobre esmalte
function enamelTex(seed = 3, base = '#e6e0cf') {
  return canvasTex(512, 512, (x, W, H) => {
    x.fillStyle = base; x.fillRect(0, 0, W, H);
    let s = seed; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 60; i++) { const g = x.createRadialGradient(r() * W, r() * H, 1, r() * W, r() * H, 20 + r() * 80); g.addColorStop(0, 'rgba(120,100,60,0.12)'); g.addColorStop(1, 'rgba(120,100,60,0)'); x.fillStyle = g; x.fillRect(0, 0, W, H); }
    for (let i = 0; i < 26; i++) { // escorridos de ferrugem
      const sx = r() * W, sy = r() * H * 0.7, len = 20 + r() * 120;
      const g = x.createLinearGradient(0, sy, 0, sy + len); g.addColorStop(0, 'rgba(110,50,15,0.55)'); g.addColorStop(1, 'rgba(110,50,15,0)');
      x.fillStyle = g; x.fillRect(sx, sy, 1 + r() * 3, len);
      x.fillStyle = 'rgba(90,40,12,0.6)'; x.beginPath(); x.arc(sx, sy, 1 + r() * 3, 0, 7); x.fill();
    }
    for (let i = 0; i < 2000; i++) { x.fillStyle = `rgba(60,50,30,${r() * 0.08})`; x.fillRect(r() * W, r() * H, 1, 1); }
    // marcas de dedos com sangue perto do puxador
    for (let i = 0; i < 4; i++) { x.fillStyle = 'rgba(80,0,0,0.5)'; x.beginPath(); x.ellipse(W * 0.12 + r() * 30, H * 0.45 + r() * 80, 5, 9, r(), 0, 7); x.fill(); }
  });
}

// ------------------------------------------------------------------ TELEFONE
export function makePhone(env) {
  const g = new THREE.Group();
  const plastic = new THREE.MeshPhysicalMaterial({ color: 0xcdbf9e, roughness: 0.38, clearcoat: 0.5, clearcoatRoughness: 0.5, envMap: env, envMapIntensity: 0.6 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1a1714, roughness: 0.6 });
  const metal = new THREE.MeshStandardMaterial({ color: 0xb8b8b0, roughness: 0.25, metalness: 0.9, envMap: env });
  // base com face frontal inclinada (perfil lateral extrudado)
  const prof = new THREE.Shape();
  prof.moveTo(-0.105, 0); prof.lineTo(0.105, 0); prof.lineTo(0.095, 0.05); prof.lineTo(0.055, 0.095); prof.lineTo(-0.075, 0.1); prof.lineTo(-0.1, 0.06); prof.lineTo(-0.105, 0);
  const bgeo = new THREE.ExtrudeGeometry(prof, { depth: 0.19, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.01, bevelSegments: 4, curveSegments: 6 });
  bgeo.translate(0, 0, -0.095); bgeo.rotateY(-Math.PI / 2);
  const base = new THREE.Mesh(bgeo, plastic); base.castShadow = base.receiveShadow = true; g.add(base);
  // disco rotativo na face inclinada
  const dialG = new THREE.Group(); dialG.position.set(0, 0.078, 0.072); dialG.rotation.x = -0.83; g.add(dialG);
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.047, 0.049, 0.006, 32), new THREE.MeshStandardMaterial({ color: 0xece6d6, roughness: 0.5 })); plate.rotation.x = Math.PI / 2; dialG.add(plate);
  const numbers = canvasTex(256, 256, (x, W, H) => {
    x.fillStyle = '#f0ead8'; x.fillRect(0, 0, W, H); x.fillStyle = '#222'; x.font = 'bold 22px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle';
    for (let i = 0; i < 10; i++) { const a = -Math.PI * 0.3 + i * (Math.PI * 1.5 / 9); x.fillText(String((i + 1) % 10), W / 2 + Math.cos(a) * 92, H / 2 + Math.sin(a) * 92); }
  });
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.046, 32), new THREE.MeshStandardMaterial({ map: numbers, roughness: 0.5 })); face.position.z = 0.0035; dialG.add(face);
  const wheel = new THREE.Mesh(new THREE.RingGeometry(0.026, 0.046, 40), new THREE.MeshPhysicalMaterial({ color: 0x2a2622, roughness: 0.3, clearcoat: 0.8, transparent: true, opacity: 0.88 })); wheel.position.z = 0.006; dialG.add(wheel);
  for (let i = 0; i < 10; i++) { const a = -Math.PI * 0.3 + i * (Math.PI * 1.5 / 9); const hole = new THREE.Mesh(new THREE.CircleGeometry(0.0075, 16), new THREE.MeshStandardMaterial({ color: 0xf0ead8 })); hole.position.set(Math.cos(a) * 0.036, -Math.sin(a) * 0.036, 0.0068); dialG.add(hole); }
  const stop = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.012, 0.006), metal); stop.position.set(0.04, -0.03, 0.009); stop.rotation.z = 0.6; dialG.add(stop);
  const cent = new THREE.Mesh(new THREE.CircleGeometry(0.016, 20), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })); cent.position.z = 0.0072; dialG.add(cent);
  // ganchos
  for (const sx of [-0.068, 0.068]) {
    const f = new THREE.Mesh(new RoundedBoxGeometry(0.03, 0.03, 0.05, 2, 0.008), plastic); f.position.set(sx, 0.112, -0.02); g.add(f);
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.02, 10), dark); pin.position.set(sx, 0.125, -0.02); g.add(pin);
  }
  // monofone
  const hs = new THREE.Group(); hs.position.set(0, 0.145, -0.02); g.add(hs);
  const curve = new THREE.CatmullRomCurve3([V(-0.1, -0.01, 0), V(-0.05, 0.012, 0), V(0.05, 0.012, 0), V(0.1, -0.01, 0)]);
  const handle = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.014, 12), plastic); handle.scale.set(1, 1, 1.25); hs.add(handle);
  const cupProf = [V(0.0, 0), V(0.024, 0.0), V(0.03, 0.01), V(0.032, 0.026), V(0.028, 0.032), V(0.0, 0.034)].map((p) => new THREE.Vector2(p.x, p.y));
  for (const sx of [-1, 1]) {
    const cup = new THREE.Mesh(new THREE.LatheGeometry(cupProf, 24), plastic); cup.position.set(sx * 0.1, -0.012, 0); cup.rotation.x = Math.PI; hs.add(cup);
    const grille = new THREE.Mesh(new THREE.CircleGeometry(0.02, 20), dark); grille.position.set(sx * 0.1, -0.047, 0); grille.rotation.x = Math.PI / 2; hs.add(grille);
  }
  hs.traverse((m) => { if (m.isMesh) m.castShadow = true; });
  // fio espiral até a lateral da base
  const pts = []; for (let i = 0; i <= 400; i++) { const t = i / 400; const a = t * Math.PI * 2 * 26; const p = V(-0.1 - t * 0.06, -0.02 - Math.sin(t * Math.PI) * 0.07, 0.0 - t * 0.02); p.x += Math.cos(a) * 0.006; p.y += Math.sin(a) * 0.006; pts.push(p); }
  const cord = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 800, 0.0022, 5), new THREE.MeshStandardMaterial({ color: 0xbfb193, roughness: 0.5 })); hs.add(cord);
  // fio da parede
  const wpts = [V(0, 0.01, -0.105), V(0, 0.005, -0.2), V(0.05, 0.0, -0.3), V(0.0, 0.0, -0.5)];
  g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(wpts), 20, 0.003, 5), dark));
  g.userData.handset = hs; g.userData.hsBase = hs.position.clone();
  return g;
}

// ------------------------------------------------------------------ GELADEIRA
export function makeFridge(env) {
  const W = 0.72, Hh = 1.62, D = 0.66;
  const enamel = new THREE.MeshPhysicalMaterial({ map: enamelTex(3, '#c8c2b0'), roughness: 0.32, clearcoat: 0.6, clearcoatRoughness: 0.35, envMap: env, envMapIntensity: 0.35 });
  const liner = new THREE.MeshStandardMaterial({ map: enamelTex(9, '#8e8a7c'), roughness: 0.55, envMap: env, envMapIntensity: 0.15 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xd0d0d0, roughness: 0.12, metalness: 1, envMap: env, envMapIntensity: 1 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x2a2522, roughness: 0.8 });
  const g = new THREE.Group();
  const t = 0.04;
  const panel = (w, h, d, x, y, z, mat = enamel, r = 0.015) => { const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; g.add(m); return m; };
  panel(W, Hh, t, 0, Hh / 2, -D / 2 + t / 2, enamel, 0.02);            // fundo
  panel(t, Hh, D, -W / 2 + t / 2, Hh / 2, 0, enamel, 0.03);            // laterais
  panel(t, Hh, D, W / 2 - t / 2, Hh / 2, 0, enamel, 0.03);
  panel(W, t * 1.5, D, 0, Hh - t * 0.75, 0, enamel, 0.05);             // topo arredondado
  panel(W, 0.12, D, 0, 0.06, 0, enamel, 0.02);                          // base
  // revestimento interno
  panel(W - 2 * t, Hh - 0.2, 0.01, 0, Hh / 2 + 0.03, -D / 2 + t + 0.005, liner, 0.004);
  panel(0.01, Hh - 0.2, D - t, -W / 2 + t + 0.005, Hh / 2 + 0.03, 0.02, liner, 0.004);
  panel(0.01, Hh - 0.2, D - t, W / 2 - t - 0.005, Hh / 2 + 0.03, 0.02, liner, 0.004);
  // congelador
  panel(W - 2 * t - 0.04, 0.22, D - 0.12, 0, Hh - 0.26, -0.03, new THREE.MeshStandardMaterial({ color: 0xa8b0b4, roughness: 0.2, metalness: 0.7, envMap: env }), 0.01);
  // prateleiras de arame
  const wire = new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.35, metalness: 0.8, envMap: env });
  for (const y of [0.42, 0.78, 1.1]) {
    for (let i = 0; i < 13; i++) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, D - 0.1, 5), wire); w.rotation.x = Math.PI / 2; w.position.set(-W / 2 + t + 0.03 + i * ((W - 2 * t - 0.06) / 12), y, 0.0); g.add(w); }
    const fr = new THREE.Mesh(new THREE.BoxGeometry(W - 2 * t - 0.02, 0.006, 0.006), wire); fr.position.set(0, y, (D - 0.1) / 2); g.add(fr);
  }
  // gaveta de legumes
  panel(W - 2 * t - 0.04, 0.2, D - 0.12, 0, 0.24, -0.02, new THREE.MeshPhysicalMaterial({ color: 0xcfe0e0, roughness: 0.1, transparent: true, opacity: 0.35, transmission: 0.2 }), 0.01);
  // porta
  const pivot = new THREE.Group(); pivot.position.set(-W / 2, 0, D / 2); g.add(pivot);
  const door = new THREE.Mesh(new RoundedBoxGeometry(W, Hh - 0.12, 0.07, 3, 0.03), enamel); door.position.set(W / 2, 0.12 + (Hh - 0.12) / 2, 0.035); door.castShadow = true; pivot.add(door);
  const gasket = new THREE.Mesh(new THREE.BoxGeometry(W - 0.06, Hh - 0.2, 0.012), rubber); gasket.position.set(W / 2, 0.12 + (Hh - 0.12) / 2, -0.004); pivot.add(gasket);
  const inner = new THREE.Mesh(new RoundedBoxGeometry(W - 0.08, Hh - 0.24, 0.03, 2, 0.01), liner); inner.position.set(W / 2, 0.12 + (Hh - 0.12) / 2, -0.02); pivot.add(inner);
  for (const y of [0.5, 0.85, 1.2]) { const sh = new THREE.Mesh(new THREE.BoxGeometry(W - 0.14, 0.09, 0.06), liner); sh.position.set(W / 2, y, -0.06); pivot.add(sh); }
  // garrafas na porta
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x3a4a2a, roughness: 0.05, transmission: 0.6, transparent: true, opacity: 0.7, envMap: env });
  for (let i = 0; i < 3; i++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.03, 0.22, 12), glass); b.position.set(0.16 + i * 0.15, 0.97, -0.06); pivot.add(b); }
  // puxador cromado tipo alavanca
  const hp = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.22, 4, 10), chrome); hp.position.set(W - 0.06, 1.0, 0.1); pivot.add(hp);
  for (const y of [0.88, 1.12]) { const st = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.012, 0.04, 8), chrome); st.rotation.x = Math.PI / 2; st.position.set(W - 0.06, y, 0.08); pivot.add(st); }
  // plaquinha
  const badge = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.035), new THREE.MeshStandardMaterial({ map: canvasTex(256, 56, (x, w, h) => { x.fillStyle = '#b8b8b0'; x.fillRect(0, 0, w, h); x.fillStyle = '#4a1010'; x.font = 'italic bold 34px Georgia'; x.textAlign = 'center'; x.fillText('Gelomatic', w / 2, 40); }), metalness: 0.8, roughness: 0.3, envMap: env }));
  badge.position.set(W / 2, 1.42, 0.072); pivot.add(badge);
  // luz interna (só funciona com energia)
  const bulb = new THREE.PointLight(0xe8f0ff, 0, 1.6, 2); bulb.position.set(0, Hh - 0.42, 0.05); g.add(bulb);
  return { group: g, pivot, bulb, W, D, H: Hh };
}

// ------------------------------------------------------------------ VIATURA
export function makePoliceCar(env) {
  const g = new THREE.Group();
  const paint = new THREE.MeshPhysicalMaterial({ map: carPaintTex(), color: 0xf2f2ee, roughness: 0.32, metalness: 0.15, clearcoat: 1, clearcoatRoughness: 0.08, envMap: env, envMapIntensity: 1.2 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x111214, roughness: 0.55, envMap: env, envMapIntensity: 0.4 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x0a0d10, roughness: 0.08, metalness: 0.2, clearcoat: 1, envMap: env, envMapIntensity: 0.9, polygonOffset: true, polygonOffsetFactor: -1 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.15, metalness: 1, envMap: env });
  const L = 3.9, Wd = 1.64;
  // silhueta lateral de hatch compacto (z = comprimento, y = altura)
  const s = new THREE.Shape();
  const wr = 0.33, wf = 1.25, wb = -1.22;
  s.moveTo(-L / 2, 0.3);
  s.lineTo(wb - wr - 0.05, 0.3); s.absarc(wb, 0.3, wr + 0.05, Math.PI, 0, true);
  s.lineTo(wf - wr - 0.05, 0.3); s.absarc(wf, 0.3, wr + 0.05, Math.PI, 0, true);
  s.lineTo(L / 2 - 0.02, 0.3);
  s.bezierCurveTo(L / 2 + 0.04, 0.42, L / 2 + 0.05, 0.62, L / 2 - 0.02, 0.72);      // frente
  s.bezierCurveTo(1.6, 0.78, 1.1, 0.84, 0.75, 0.86);                                   // capô
  s.lineTo(0.05, 1.33);                                                                // para-brisa
  s.bezierCurveTo(-0.3, 1.38, -1.05, 1.38, -1.4, 1.32);                                // teto
  s.bezierCurveTo(-1.7, 1.15, -1.9, 0.98, -L / 2 + 0.02, 0.9);                         // tampa traseira
  s.bezierCurveTo(-L / 2 - 0.03, 0.6, -L / 2 - 0.02, 0.4, -L / 2, 0.3);
  const geo = new THREE.ExtrudeGeometry(s, { depth: Wd - 0.12, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 5, curveSegments: 24 });
  geo.translate(0, 0, -(Wd - 0.12) / 2); geo.rotateY(-Math.PI / 2);
  // achata as laterais superiores (estufa mais estreita que o corpo)
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) { const y = p.getY(i); if (y > 0.86) p.setX(i, p.getX(i) * (1 - (y - 0.86) * 0.32)); }
  geo.computeVertexNormals();
  const body = new THREE.Mesh(geo, paint); body.castShadow = body.receiveShadow = true; g.add(body);
  // janelas (cópia levemente inflada da estufa, só a parte de cima)
  const wgeo = geo.clone(); const wp = wgeo.attributes.position;
  for (let i = 0; i < wp.count; i++) { const y = wp.getY(i); if (y < 0.9) wp.setY(i, 0.9); wp.setX(i, wp.getX(i) * 1.02); }
  wgeo.computeVertexNormals();
  const win = new THREE.Mesh(wgeo, glass); win.scale.set(1, 1, 1); win.position.y = 0.012; g.add(win);
  // colunas (pilares) e faixa preta das portas
  for (const z of [0.0, -0.75]) for (const sx of [-1, 1]) { const pil = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.42, 0.07), paint); pil.position.set(sx * 0.73, 1.12, z - 0.1); pil.rotation.z = sx * 0.16; g.add(pil); }
  // para-choques
  for (const z of [L / 2 + 0.02, -L / 2 - 0.02]) { const b = new THREE.Mesh(new RoundedBoxGeometry(Wd + 0.04, 0.16, 0.12, 3, 0.04), trim); b.position.set(0, 0.36, z); g.add(b); }
  // grade
  const grill = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.1), new THREE.MeshStandardMaterial({ map: canvasTex(128, 16, (x, w, h) => { x.fillStyle = '#111'; x.fillRect(0, 0, w, h); x.fillStyle = '#333'; for (let i = 0; i < w; i += 6) x.fillRect(i, 0, 3, h); }), roughness: 0.6 }));
  grill.position.set(0, 0.6, L / 2 + 0.07); g.add(grill);
  // faróis e lanternas
  const hl = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2d0, emissiveIntensity: 4, roughness: 0.1 });
  const tl = new THREE.MeshStandardMaterial({ color: 0x400000, emissive: 0xff1000, emissiveIntensity: 1.2, roughness: 0.2 });
  for (const sx of [-0.58, 0.58]) {
    const h = new THREE.Mesh(new RoundedBoxGeometry(0.36, 0.13, 0.05, 2, 0.02), hl); h.position.set(sx, 0.64, L / 2 + 0.05); g.add(h);
    const t = new THREE.Mesh(new RoundedBoxGeometry(0.14, 0.26, 0.05, 2, 0.02), tl); t.position.set(sx * 1.18, 0.72, -L / 2 - 0.02); g.add(t);
  }
  // rodas
  const tire = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.92 });
  const rim = new THREE.MeshStandardMaterial({ color: 0x8a8a8a, roughness: 0.35, metalness: 0.9, envMap: env });
  for (const [x, z] of [[-0.72, wf], [0.72, wf], [-0.72, wb], [0.72, wb]]) {
    const w = new THREE.Group(); w.position.set(x, wr, z); g.add(w);
    const tt = new THREE.Mesh(new THREE.TorusGeometry(wr - 0.08, 0.085, 12, 32), tire); tt.rotation.y = Math.PI / 2; tt.scale.set(1, 1, 1.4); tt.castShadow = true; w.add(tt);
    const rm = new THREE.Mesh(new THREE.CylinderGeometry(wr - 0.12, wr - 0.12, 0.18, 24), rim); rm.rotation.z = Math.PI / 2; w.add(rm);
    for (let i = 0; i < 5; i++) { const sp = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.14, 0.03), trim); sp.position.x = Math.sign(x) * 0.095; sp.rotation.x = i * Math.PI * 2 / 5; sp.translateY(0.07); w.add(sp); }
  }
  // retrovisores e maçanetas
  for (const sx of [-1, 1]) {
    const m = new THREE.Mesh(new RoundedBoxGeometry(0.06, 0.09, 0.14, 2, 0.02), trim); m.position.set(sx * 0.86, 1.0, 0.55); g.add(m);
    for (const z of [0.05, -0.85]) { const h = new THREE.Mesh(new RoundedBoxGeometry(0.02, 0.025, 0.12, 2, 0.008), chrome); h.position.set(sx * 0.81, 0.9, z); g.add(h); }
  }
  // giroflex
  const bar = new THREE.Group(); bar.position.set(0, 1.4, -0.45); g.add(bar);
  const bb = new THREE.Mesh(new RoundedBoxGeometry(1.15, 0.1, 0.26, 3, 0.04), trim); bar.add(bb);
  const lensR = new THREE.MeshStandardMaterial({ color: 0x500000, emissive: 0xff0a00, emissiveIntensity: 0, roughness: 0.15, transparent: true, opacity: 0.85, envMap: env, envMapIntensity: 0.8 });
  const lensB = new THREE.MeshStandardMaterial({ color: 0x000040, emissive: 0x0030ff, emissiveIntensity: 0, roughness: 0.15, transparent: true, opacity: 0.85, envMap: env, envMapIntensity: 0.8 });
  const lr = new THREE.Mesh(new RoundedBoxGeometry(0.52, 0.11, 0.24, 3, 0.05), lensR); lr.position.set(-0.29, 0.04, 0); bar.add(lr);
  const lb = new THREE.Mesh(new RoundedBoxGeometry(0.52, 0.11, 0.24, 3, 0.05), lensB); lb.position.set(0.29, 0.04, 0); bar.add(lb);
  // antena
  const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.004, 0.6, 5), trim); ant.position.set(0.4, 1.65, -1.3); ant.rotation.x = -0.15; g.add(ant);
  // portas entreabertas: motorista
  g.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
  return { group: g, lensR, lensB, hlMat: hl };
}

function carPaintTex() {
  return canvasTex(1024, 256, (x, W, H) => {
    x.fillStyle = '#f4f4f0'; x.fillRect(0, 0, W, H);
    // faixa azul escura lateral + inscrição (o UV da extrusão espalha esta textura pelas laterais)
    x.fillStyle = '#16324f'; x.fillRect(0, H * 0.58, W, H * 0.1);
    x.fillStyle = '#a01818'; x.fillRect(0, H * 0.68, W, H * 0.025);
    let s = 7; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 300; i++) { x.fillStyle = `rgba(90,70,40,${r() * 0.1})`; x.fillRect(r() * W, H * 0.75 + r() * H * 0.25, 2 + r() * 8, 1 + r() * 3); }
  });
}

// inscrição lateral como decalque
export function carDecals(car, env) {
  const tex = canvasTex(1024, 160, (x, w, h) => {
    x.clearRect(0, 0, w, h); x.fillStyle = '#16324f'; x.font = 'bold 86px Arial Black, Arial'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText('POLÍCIA MILITAR', w / 2, h / 2 + 4);
  });
  const num = canvasTex(256, 128, (x, w, h) => { x.fillStyle = '#16324f'; x.font = 'bold 90px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('2207', w / 2, h / 2); });
  const mk = (t, w, h) => new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshPhysicalMaterial({ map: t, transparent: true, roughness: 0.3, clearcoat: 1, envMap: env, polygonOffset: true, polygonOffsetFactor: -6, depthWrite: false }));
  for (const sx of [-1, 1]) {
    const d = mk(tex, 1.5, 0.23); d.position.set(sx * 0.828, 0.7, -0.1); d.rotation.y = sx * Math.PI / 2; car.add(d);
    const n = mk(num, 0.4, 0.2); n.position.set(sx * 0.828, 1.18, -1.15); n.rotation.y = sx * Math.PI / 2; car.add(n);
  }
}
