// Texturas procedurais (geradas em canvas) — nenhum arquivo externo.
import * as THREE from 'three';

// ---------- ruído tileável ----------
function rng(seed) {
  let s = seed % 2147483647; if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647, (s - 1) / 2147483646);
}
function makeNoise(seed = 1) {
  const r = rng(seed);
  const g = new Float32Array(256 * 256);
  for (let i = 0; i < g.length; i++) g[i] = r();
  const n = (x, y, P) => {
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const x0 = ((xi % P) + P) % P, y0 = ((yi % P) + P) % P;
    const x1 = (x0 + 1) % P, y1 = (y0 + 1) % P;
    const a = g[y0 * 256 + x0], b = g[y0 * 256 + x1], c = g[y1 * 256 + x0], d = g[y1 * 256 + x1];
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
  // fbm periódico: x,y em [0,1)
  const fbm = (x, y, base = 4, oct = 5, sx = 1, sy = 1) => {
    let t = 0, amp = 0.5, f = base, norm = 0;
    for (let o = 0; o < oct; o++) {
      t += n(x * f * sx, y * f * sy, 256) * amp;
      norm += amp; amp *= 0.5; f *= 2;
    }
    return t / norm;
  };
  const fbmP = (x, y, base = 4, oct = 5) => {
    let t = 0, amp = 0.5, f = base, norm = 0;
    for (let o = 0; o < oct; o++) { t += n(x * f, y * f, f) * amp; norm += amp; amp *= 0.5; f *= 2; }
    return t / norm;
  };
  return { n, fbm, fbmP, r };
}

function canvas(w, h = w) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
function toTex(c, { repeat = true, srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
// aplica função por pixel: f(u,v) -> [r,g,b] ou [r,g,b,a]
function pixels(ctx, w, h, f) {
  const img = ctx.getImageData(0, 0, w, h); const d = img.data;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4; const o = f(x / w, y / h, d[i], d[i + 1], d[i + 2], d[i + 3]);
    d[i] = o[0]; d[i + 1] = o[1]; d[i + 2] = o[2]; d[i + 3] = o.length > 3 ? o[3] : 255;
  }
  ctx.putImageData(img, 0, 0);
}

const cache = {};
const memo = (k, f) => cache[k] || (cache[k] = f());

// ---------- Papel de parede envelhecido ----------
export function wallpaper(seed = 3, tint = [148, 138, 104]) {
  return memo('wp' + seed + tint, () => {
    const S = 512, N = makeNoise(seed);
    const [c, x] = canvas(S);
    x.fillStyle = `rgb(${tint})`; x.fillRect(0, 0, S, S);
    // listras e motivo damasco
    for (let i = 0; i < 8; i++) {
      x.fillStyle = i % 2 ? 'rgba(0,0,0,0.06)' : 'rgba(255,240,200,0.05)';
      x.fillRect(i * 64, 0, 64, S);
    }
    x.strokeStyle = 'rgba(70,60,40,0.22)'; x.lineWidth = 2;
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      const cx = i * 128 + 64 + (j % 2) * 0, cy = j * 128 + 64;
      x.beginPath(); x.ellipse(cx, cy, 14, 26, 0, 0, Math.PI * 2); x.stroke();
      x.beginPath(); x.moveTo(cx, cy - 40); x.quadraticCurveTo(cx + 24, cy, cx, cy + 40); x.quadraticCurveTo(cx - 24, cy, cx, cy - 40); x.stroke();
      x.beginPath(); x.arc(cx, cy, 4, 0, 7); x.fill();
    }
    // envelhecimento: ruído multiplicativo, manchas, bolor
    pixels(x, S, S, (u, v, r, g, b) => {
      const n = N.fbmP(u, v, 4, 5);
      const stain = Math.max(0, N.fbmP(u + 0.3, v, 2, 4) - 0.52) * 3.2;
      const mold = Math.max(0, N.fbmP(u, v + 0.7, 8, 4) - 0.6) * 4 * (v > 0.7 ? (v - 0.7) * 3.3 : 0);
      const k = 0.72 + n * 0.45 - stain * 0.35;
      return [r * k - mold * 40 + stain * 8, g * k - mold * 25, b * k - mold * 45 - stain * 18];
    });
    // escorridos de umidade verticais
    for (let i = 0; i < 18; i++) {
      const sx = N.r() * S, len = 60 + N.r() * 300;
      const gr = x.createLinearGradient(0, 0, 0, len);
      gr.addColorStop(0, 'rgba(60,40,15,0.25)'); gr.addColorStop(1, 'rgba(60,40,15,0)');
      x.fillStyle = gr; x.fillRect(sx, 0, 2 + N.r() * 7, len);
    }
    return toTex(c);
  });
}

// ---------- Piso de taco/tábua ----------
export function woodFloor(seed = 5) {
  return memo('wood' + seed, () => {
    const S = 512, N = makeNoise(seed);
    const [c, x] = canvas(S);
    const plankW = 64, tone = [];
    for (let i = 0; i < 8; i++) tone.push(0.75 + N.r() * 0.4);
    pixels(x, S, S, (u, v) => {
      const pi = Math.floor(u * 8);
      const t = tone[pi];
      const grain = N.fbm(u * 1.0, v, 2, 4, 8, 1);
      const lines = Math.sin((u * 8 * 30 + grain * 18) ) * 0.5 + 0.5;
      const k = t * (0.6 + grain * 0.5 + lines * 0.12);
      const off = (pi % 2) * 0.5 + pi * 0.13;
      const seam = Math.abs(((v + off) % 0.5) - 0.0) < 0.004 ? 0.35 : 1;
      const gap = (u * 8) % 1 < 0.025 ? 0.25 : 1;
      const dirt = 0.85 + N.fbmP(u, v, 3, 4) * 0.3;
      return [120 * k * seam * gap * dirt, 78 * k * seam * gap * dirt, 48 * k * seam * gap * dirt];
    });
    return toTex(c);
  });
}

// ---------- Azulejo ----------
export function tiles(seed = 7, base = [196, 204, 192], n = 8) {
  return memo('tile' + seed + base + n, () => {
    const S = 512, N = makeNoise(seed);
    const [c, x] = canvas(S);
    const tv = []; for (let i = 0; i < n * n; i++) tv.push(0.88 + N.r() * 0.16);
    pixels(x, S, S, (u, v) => {
      const tx = u * n, ty = v * n, fx = tx % 1, fy = ty % 1;
      const grout = fx < 0.04 || fy < 0.04;
      const grime = N.fbmP(u, v, 6, 4);
      if (grout) { const g = 70 + grime * 50; return [g, g * 0.95, g * 0.85]; }
      const k = tv[Math.floor(ty) * n + Math.floor(tx)] * (0.85 + grime * 0.2);
      const edge = Math.min(fx, fy, 1 - fx, 1 - fy) < 0.08 ? 0.93 : 1;
      return [base[0] * k * edge, base[1] * k * edge, base[2] * k * edge];
    });
    // rachaduras
    x.strokeStyle = 'rgba(40,40,35,0.6)'; x.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      let px = N.r() * S, py = N.r() * S; x.beginPath(); x.moveTo(px, py);
      for (let k = 0; k < 8; k++) { px += (N.r() - 0.5) * 30; py += (N.r() - 0.3) * 20; x.lineTo(px, py); }
      x.stroke();
    }
    return toTex(c);
  });
}

// ---------- Concreto ----------
export function concrete(seed = 11) {
  return memo('conc' + seed, () => {
    const S = 512, N = makeNoise(seed);
    const [c, x] = canvas(S);
    pixels(x, S, S, (u, v) => {
      const n = N.fbmP(u, v, 4, 6), d = N.fbmP(u + 0.5, v, 16, 3);
      const stain = Math.max(0, N.fbmP(u, v + 0.2, 2, 3) - 0.55) * 2.5;
      const pit = d > 0.78 ? 0.6 : 1;
      const k = (0.45 + n * 0.45) * pit * (1 - stain * 0.5);
      return [112 * k, 108 * k, 100 * k];
    });
    return toTex(c);
  });
}

// ---------- Teto de reboco ----------
export function plaster(seed = 13) {
  return memo('pl' + seed, () => {
    const S = 256, N = makeNoise(seed);
    const [c, x] = canvas(S);
    pixels(x, S, S, (u, v) => {
      const n = N.fbmP(u, v, 4, 5);
      const ring = N.fbmP(u, v, 2, 3);
      const stain = 1 - Math.max(0, ring - 0.55) * 1.6 - Math.exp(-Math.pow((ring - 0.58) * 40, 2)) * 0.12;
      const k = (0.72 + n * 0.28);
      return [190 * k * stain, 182 * k * stain, 160 * k * (stain * stain)];
    });
    return toTex(c);
  });
}

// ---------- Lama / terreno ----------
export function mud(seed = 17) {
  return memo('mud' + seed, () => {
    const S = 512, N = makeNoise(seed);
    const [c, x] = canvas(S); const [c2, x2] = canvas(S);
    const rough = [];
    pixels(x, S, S, (u, v) => {
      const n = N.fbmP(u, v, 4, 6);
      const puddle = N.fbmP(u + 0.37, v + 0.11, 2, 4);
      const wet = puddle > 0.58;
      rough.push(wet ? 30 : 200 + n * 55);
      const k = (0.35 + n * 0.5) * (wet ? 0.45 : 1);
      const grass = Math.max(0, N.fbmP(u, v, 8, 3) - 0.6) * 2;
      return [70 * k - grass * 20, 52 * k + grass * 18, 36 * k - grass * 10];
    });
    let i = 0; pixels(x2, S, S, () => { const r = rough[i++]; return [r, r, r]; });
    return { map: toTex(c), rough: toTex(c2, { srgb: false }) };
  });
}

// ---------- Sangue (decal transparente) ----------
export function bloodSplat(seed = 1, kind = 'splat') {
  return memo('blood' + seed + kind, () => {
    const S = 256, r = rng(seed * 97 + 3);
    const [c, x] = canvas(S);
    const col = (a) => `rgba(${60 + r() * 30},${r() * 6},${r() * 6},${a})`;
    if (kind === 'splat' || kind === 'pool') {
      const big = kind === 'pool';
      for (let i = 0; i < (big ? 70 : 40); i++) {
        const a = r() * 6.28, d = r() * (big ? 70 : 50);
        x.fillStyle = col(0.85); x.beginPath();
        x.arc(128 + Math.cos(a) * d, 128 + Math.sin(a) * d, (big ? 18 : 6) + r() * (big ? 30 : 22), 0, 7); x.fill();
      }
      if (!big) for (let i = 0; i < 80; i++) {
        const a = r() * 6.28, d = 60 + r() * 60;
        x.fillStyle = col(0.9); x.beginPath(); x.arc(128 + Math.cos(a) * d, 128 + Math.sin(a) * d, 0.8 + r() * 3.5, 0, 7); x.fill();
      }
    } else if (kind === 'drip') {
      for (let i = 0; i < 30; i++) {
        x.fillStyle = col(0.9); x.beginPath(); x.arc(128 + (r() - 0.5) * 120, 30 + r() * 30, 6 + r() * 16, 0, 7); x.fill();
      }
      for (let i = 0; i < 14; i++) {
        const sx = 128 + (r() - 0.5) * 130, len = 40 + r() * 180, w = 2 + r() * 5;
        x.fillStyle = col(0.85); x.fillRect(sx - w / 2, 40, w, len);
        x.beginPath(); x.arc(sx, 40 + len, w * 0.9, 0, 7); x.fill();
      }
    } else if (kind === 'hand') {
      x.fillStyle = col(0.8);
      x.beginPath(); x.ellipse(128, 150, 42, 50, 0, 0, 7); x.fill();
      const fingers = [[-46, -40, -0.5, 34], [-20, -88, -0.12, 50], [6, -96, 0, 54], [30, -86, 0.12, 48], [50, -56, 0.35, 36]];
      for (const [fx, fy, rot, len] of fingers) {
        x.save(); x.translate(128 + fx, 150 + fy + len / 2 + 20); x.rotate(rot);
        x.beginPath(); x.ellipse(0, -len / 2, 10, len / 2 + 6, 0, 0, 7); x.fill(); x.restore();
      }
      // falhas de impressão
      x.globalCompositeOperation = 'destination-out';
      for (let i = 0; i < 160; i++) { x.fillStyle = `rgba(0,0,0,${r() * 0.8})`; x.beginPath(); x.arc(70 + r() * 120, 40 + r() * 180, 1 + r() * 4, 0, 7); x.fill(); }
      x.globalCompositeOperation = 'source-over';
    } else if (kind === 'smear') {
      for (let i = 0; i < 26; i++) {
        x.strokeStyle = col(0.25 + r() * 0.4); x.lineWidth = 4 + r() * 14; x.lineCap = 'round';
        x.beginPath(); const y = 60 + r() * 140; x.moveTo(10 + r() * 30, y); x.bezierCurveTo(90, y + (r() - 0.5) * 30, 160, y + (r() - 0.5) * 30, 246 - r() * 40, y + (r() - 0.5) * 20); x.stroke();
      }
    }
    return toTex(c, { repeat: false });
  });
}

// ---------- Escrita em sangue ----------
export function bloodText(text, w = 1024, h = 256, size = 120) {
  return memo('bt' + text, () => {
    const r = rng(text.length * 131 + 7);
    const [c, x] = canvas(w, h);
    x.font = `bold ${size}px Georgia, serif`; x.textBaseline = 'middle';
    const total = x.measureText(text).width; let px = (w - total) / 2;
    for (const ch of text) {
      x.save(); x.translate(px, h * 0.42 + (r() - 0.5) * 16); x.rotate((r() - 0.5) * 0.18);
      x.fillStyle = `rgba(${70 + r() * 25},0,0,0.92)`; x.fillText(ch, 0, 0); x.restore();
      const cw = x.measureText(ch).width;
      if (ch !== ' ' && r() < 0.6) {
        const dx = px + cw * (0.2 + r() * 0.6), len = 20 + r() * 90, dw = 2 + r() * 4;
        x.fillStyle = 'rgba(80,0,0,0.85)'; x.fillRect(dx, h * 0.5, dw, len);
        x.beginPath(); x.arc(dx + dw / 2, h * 0.5 + len, dw, 0, 7); x.fill();
      }
      px += cw;
    }
    return toTex(c, { repeat: false });
  });
}

// ---------- Retrato de família com rostos riscados ----------
export function familyPhoto(seed = 2, people = 4, scratched = true, sepia = true) {
  return memo('fp' + seed + people + scratched, () => {
    const W = 256, H = 200, r = rng(seed);
    const [c, x] = canvas(W, H);
    const g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, sepia ? '#8c7a5c' : '#6d7480'); g.addColorStop(1, sepia ? '#4a3c2a' : '#30343a');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const heads = [];
    for (let i = 0; i < people; i++) {
      const cx = W * (i + 1) / (people + 1), small = i === people - 1 && people > 2;
      const hy = small ? 95 : 70 + r() * 10, hr = small ? 13 : 17;
      x.fillStyle = sepia ? '#2e2418' : '#20242a';
      x.beginPath(); x.ellipse(cx, hy + hr + 55, hr * 1.9, 60, 0, 0, 7); x.fill();
      x.fillStyle = sepia ? '#c4a983' : '#b9a99a';
      x.beginPath(); x.ellipse(cx, hy, hr * 0.85, hr, 0, 0, 7); x.fill();
      x.fillStyle = '#1a120a'; x.beginPath(); x.ellipse(cx, hy - hr * 0.6, hr * 0.9, hr * 0.5, 0, Math.PI, 0); x.fill();
      x.fillStyle = 'rgba(0,0,0,0.6)';
      x.fillRect(cx - 6, hy - 2, 3, 3); x.fillRect(cx + 3, hy - 2, 3, 3);
      heads.push([cx, hy, hr]);
    }
    if (scratched) {
      for (const [cx, hy, hr] of heads) {
        x.strokeStyle = 'rgba(235,225,205,0.9)'; x.lineWidth = 1.5;
        for (let k = 0; k < 26; k++) {
          x.beginPath(); x.moveTo(cx + (r() - 0.5) * hr * 2.4, hy + (r() - 0.5) * hr * 2.4);
          x.lineTo(cx + (r() - 0.5) * hr * 2.4, hy + (r() - 0.5) * hr * 2.4); x.stroke();
        }
      }
    }
    // borda e desgaste
    pixels(x, W, H, (u, v, R, G, B) => {
      const n = r() * 30 - 15, e = Math.min(u, v, 1 - u, 1 - v) < 0.04 ? 0.6 : 1;
      return [(R + n) * e, (G + n) * e, (B + n) * e];
    });
    return toTex(c, { repeat: false });
  });
}

export function grannyPortrait() {
  return memo('granny', () => {
    const W = 200, H = 260, r = rng(99);
    const [c, x] = canvas(W, H);
    x.fillStyle = '#3a2e20'; x.fillRect(0, 0, W, H);
    const g = x.createRadialGradient(100, 120, 10, 100, 130, 130);
    g.addColorStop(0, '#9a8463'); g.addColorStop(1, '#2a2015');
    x.fillStyle = g; x.beginPath(); x.ellipse(100, 130, 88, 118, 0, 0, 7); x.fill();
    x.fillStyle = '#1c150d'; x.beginPath(); x.ellipse(100, 250, 80, 90, 0, 0, 7); x.fill();
    x.fillStyle = '#b8a07c'; x.beginPath(); x.ellipse(100, 115, 34, 44, 0, 0, 7); x.fill();
    x.fillStyle = '#d8d0c0'; x.beginPath(); x.ellipse(100, 80, 40, 22, 0, Math.PI, 0); x.fill();
    // olhos: buracos queimados
    for (const ex of [86, 114]) {
      const eg = x.createRadialGradient(ex, 110, 1, ex, 110, 10);
      eg.addColorStop(0, '#000'); eg.addColorStop(0.6, '#140800'); eg.addColorStop(1, 'rgba(60,30,0,0)');
      x.fillStyle = eg; x.beginPath(); x.arc(ex, 110, 10, 0, 7); x.fill();
    }
    x.strokeStyle = '#3a2516'; x.lineWidth = 2; x.beginPath(); x.moveTo(88, 138); x.quadraticCurveTo(100, 134, 112, 138); x.stroke();
    pixels(x, W, H, (u, v, R, G, B) => { const n = r() * 24 - 12; return [R + n, G + n, B + n]; });
    return toTex(c, { repeat: false });
  });
}

// ---------- Desenho infantil ----------
export function childDrawing(seed = 4) {
  return memo('cd' + seed, () => {
    const W = 256, H = 200, r = rng(seed);
    const [c, x] = canvas(W, H);
    x.fillStyle = '#efeae0'; x.fillRect(0, 0, W, H);
    x.lineWidth = 3; x.lineCap = 'round';
    const stick = (cx, base, hgt, col) => {
      x.strokeStyle = col; x.beginPath();
      x.arc(cx, base - hgt, hgt * 0.15, 0, 7);
      x.moveTo(cx, base - hgt * 0.85); x.lineTo(cx, base - hgt * 0.4);
      x.moveTo(cx - hgt * 0.2, base - hgt * 0.7); x.lineTo(cx + hgt * 0.2, base - hgt * 0.7);
      x.moveTo(cx, base - hgt * 0.4); x.lineTo(cx - hgt * 0.15, base);
      x.moveTo(cx, base - hgt * 0.4); x.lineTo(cx + hgt * 0.15, base); x.stroke();
    };
    stick(40, 180, 70, '#2a4fb0'); stick(80, 180, 64, '#c03070'); stick(115, 180, 40, '#d08020');
    // figura alta preta
    x.strokeStyle = '#111'; x.lineWidth = 5; stick(200, 185, 170, '#111');
    x.lineWidth = 3; x.beginPath(); x.moveTo(170, 60); x.lineTo(130, 120); x.stroke();
    x.fillStyle = '#b00'; x.beginPath(); x.arc(196, 22, 3, 0, 7); x.arc(205, 22, 3, 0, 7); x.fill();
    // garatuja preta por cima
    x.strokeStyle = 'rgba(10,10,10,0.8)'; x.lineWidth = 2;
    x.beginPath(); for (let i = 0; i < 40; i++) x.lineTo(150 + r() * 100, 10 + r() * 180); x.stroke();
    x.fillStyle = '#222'; x.font = '18px Comic Sans MS, cursive'; x.fillText('o moço', 12, 24);
    return toTex(c, { repeat: false });
  });
}

// ---------- Pele / tecido ----------
export function skin(seed = 21, base = [168, 160, 140]) {
  return memo('skin' + seed + base, () => {
    const S = 256, N = makeNoise(seed);
    const [c, x] = canvas(S);
    pixels(x, S, S, (u, v) => {
      const n = N.fbmP(u, v, 4, 5), bruise = Math.max(0, N.fbmP(u + 0.4, v, 2, 3) - 0.56) * 4;
      const k = 0.8 + n * 0.3;
      return [base[0] * k - bruise * 40, base[1] * k - bruise * 60, base[2] * k - bruise * 20];
    });
    // veias
    x.strokeStyle = 'rgba(60,40,80,0.35)'; x.lineWidth = 1.2;
    for (let i = 0; i < 18; i++) {
      let px = N.r() * S, py = N.r() * S; x.beginPath(); x.moveTo(px, py);
      for (let k = 0; k < 12; k++) { px += (N.r() - 0.5) * 18; py += N.r() * 14; x.lineTo(px, py); }
      x.stroke();
    }
    return toTex(c);
  });
}
export function cloth(seed = 23, base = [200, 195, 180], blood = 0.4) {
  return memo('cl' + seed + base + blood, () => {
    const S = 256, N = makeNoise(seed);
    const [c, x] = canvas(S);
    pixels(x, S, S, (u, v) => {
      const weave = ((Math.floor(u * 128) + Math.floor(v * 128)) % 2) * 0.04;
      const n = N.fbmP(u, v, 4, 5), b = Math.max(0, N.fbmP(u + 0.2, v + 0.6, 2, 4) - (0.62 - blood * 0.15)) * 5;
      const k = 0.6 + n * 0.45 + weave;
      return [base[0] * k * (1 - b * 0.2) + b * 30, base[1] * k * (1 - b * 0.9), base[2] * k * (1 - b * 0.9)];
    });
    return toTex(c);
  });
}

// ---------- Recorte da lanterna (cookie) ----------
export function flashlightCookie() {
  return memo('cookie', () => {
    const S = 256, N = makeNoise(31);
    const [c, x] = canvas(S);
    pixels(x, S, S, (u, v) => {
      const dx = u - 0.5, dy = v - 0.5, r = Math.sqrt(dx * dx + dy * dy) * 2;
      const hot = Math.exp(-r * r * 14) * 0.55;
      const ring = Math.exp(-Math.pow((r - 0.42) * 9, 2)) * 0.22;
      const body = Math.pow(Math.max(0, 1 - r), 0.8) * 0.5;
      const imperf = 0.85 + N.fbmP(u, v, 8, 3) * 0.3;
      const val = Math.min(1, (hot + ring + body) * imperf) * 255;
      return [val, val * 0.97, val * 0.9];
    });
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  });
}

// ---------- Vidro sujo ----------
export function dirtyGlass() {
  return memo('glass', () => {
    const S = 256, N = makeNoise(41);
    const [c, x] = canvas(S);
    pixels(x, S, S, (u, v) => {
      const n = N.fbmP(u, v, 4, 5); const streak = N.fbm(u, v, 2, 3, 6, 0.5);
      const a = 40 + n * 70 + streak * 40;
      return [90, 95, 85, a];
    });
    return toTex(c);
  });
}

// ---------- Estática de TV (dinâmica) ----------
export function tvStatic() {
  const W = 128, H = 96;
  const [c, x] = canvas(W, H);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.NearestFilter; tex.minFilter = THREE.LinearFilter; tex.generateMipmaps = false;
  const img = x.createImageData(W, H);
  tex.userData.update = (t) => {
    const d = img.data, roll = (t * 42) % (H + 24) - 12;
    for (let y = 0; y < H; y++) {
      const band = Math.abs(y - roll) < 7 ? 1.45 : 1;
      const line = (y % 2) ? 0.8 : 1;
      const edge = (y < 3 || y > H - 4) ? 0.3 : 1;
      for (let xx = 0; xx < W; xx++) {
        let v = (Math.random() * 0.8 + Math.random() * 0.2) * 210 * band * line * edge;
        if (xx < 2 || xx > W - 3) v *= 0.35;
        const i = (y * W + xx) * 4;
        d[i] = v; d[i + 1] = v; d[i + 2] = v * 1.06; d[i + 3] = 255;
      }
    }
    x.putImageData(img, 0, 0); tex.needsUpdate = true;
  };
  tex.userData.update(0);
  return tex;
}

// ---------- partícula macia (fogo, fumaça, chama) ----------
export function softDot() {
  return memo('dot', () => {
    const [c, x] = canvas(64);
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(255,255,255,0.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    return toTex(c, { repeat: false });
  });
}

// ---------- mecha de cabelo ----------
export function hairStrands() {
  return memo('hair', () => {
    const W = 128, H = 256, r = rng(77);
    const [c, x] = canvas(W, H);
    for (let i = 0; i < 90; i++) {
      x.strokeStyle = `rgba(${10 + r() * 15},${8 + r() * 10},${6 + r() * 8},${0.6 + r() * 0.4})`; x.lineWidth = 0.5 + r() * 1.1;
      const sx = r() * W; x.beginPath(); x.moveTo(sx, 0);
      x.bezierCurveTo(sx + (r() - 0.5) * 20, H * 0.3, sx + (r() - 0.5) * 30, H * 0.6, sx + (r() - 0.5) * 40, H * (0.6 + r() * 0.4)); x.stroke();
    }
    return toTex(c, { repeat: false });
  });
}
