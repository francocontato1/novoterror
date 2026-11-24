import * as THREE from 'three';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { createPost } from './post.js';
import { Audio } from './audio.js';
import { buildLevel } from './level.js';
import { Player } from './player.js';
import { Crawler, Stalker, Credor, makeMats, buildHumanoid, setCreatureAssets } from './creatures.js';
import { loadAssets } from './assets.js';
import { Story } from './story.js';
import * as T from './textures.js';

const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search);
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

// ---------------------------------------------------------------- renderer
const canvas = $('#c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: params.has('shot') });
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1;
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020306);
scene.fog = new THREE.FogExp2(0x030406, 0.05);
const camera = new THREE.PerspectiveCamera(80, innerWidth / innerHeight, 0.05, 140);
camera.userData.fwd = V(0, 0, -1); camera.userData.up = V(0, 1, 0);
scene.add(camera);
const gunScene = new THREE.Scene(); const gunHolder = new THREE.Group(); gunScene.add(gunHolder);
const hemi = new THREE.HemisphereLight(0x22283a, 0x0b0906, 0.3); scene.add(hemi);

const G = window.G = {
  scene, camera, renderer, gunScene, gunHolder, time: 0, dt: 0,
  lightsOn: false, flashT: 0, flicker: 0, flickerT: 0, sens: Number(params.get('sens') || 1),
  tensionBase: 0, noteOpen: false, paused: true, started: false, godMode: params.has('god'),
  exposure: 1.4, shakeV: 0,
};
G.audio = new Audio();
G.brightness = 1; G.volume = 1;
G.post = createPost(renderer, scene, camera);
{ // a arma é desenhada por cima, com o buffer de profundidade limpo
  const gp = new RenderPass(gunScene, camera); gp.clear = false; gp.clearDepth = true;
  G.post.composer.insertPass(gp, 1);
}
G.ready = (async () => {
  G.assets = await loadAssets(renderer, (k) => { const e = document.querySelector('#loading em'); if (e) e.style.width = (k * 100).toFixed(0) + '%'; });
  setCreatureAssets(G.assets);
  if (G.assets.env) { scene.environment = G.assets.env; scene.environmentIntensity = 0.25; }
  G.cmats = makeMats();
  G.level = buildLevel(G);
  G.player = new Player(G);
  G.mother = new Crawler(G, G.cmats);
  G.father = new Stalker(G, G.cmats);
  G.credor = new Credor(G, G.cmats);
  G.creatures = [G.mother, G.father, G.credor];
  G.story = new Story(G);
  G.player.setInput(keys);
  // compila os shaders antes de começar (evita travadas no primeiro susto)
  renderer.compile(scene, camera);
  document.querySelector('#loading').classList.add('hidden');
  const b = document.querySelector('#start'); b.disabled = false; b.focus();
})();

const RS = Math.min(devicePixelRatio, 1.5) * Number(params.get('scale') || 1);
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setPixelRatio(RS); renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.fov = w / h < 1 ? 95 : 80; camera.updateProjectionMatrix();
  G.post.setSize(w, h, RS);
}
addEventListener('resize', resize); resize();

// ---------------------------------------------------------------- poeira no feixe da lanterna
const DUST = 700;
const dustGeo = new THREE.BufferGeometry();
const dustPos = new Float32Array(DUST * 3);
for (let i = 0; i < DUST; i++) { dustPos[i * 3] = (Math.random() - 0.5) * 10; dustPos[i * 3 + 1] = Math.random() * 3; dustPos[i * 3 + 2] = (Math.random() - 0.5) * 10; }
dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
const dustMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  uniforms: { lp: { value: V() }, ld: { value: V() }, on: { value: 1 }, t: { value: 0 } },
  vertexShader: `uniform vec3 lp, ld; uniform float on, t; varying float a;
    void main(){ vec3 p = position; p.x += sin(t*0.3 + position.y*3.0)*0.08; p.y += sin(t*0.2 + position.x*2.0)*0.05;
      vec3 d = p - lp; float dist = length(d); float c = dot(d/dist, ld);
      a = smoothstep(0.86, 0.97, c) * smoothstep(9.0, 0.6, dist) * on;
      vec4 mv = modelViewMatrix * vec4(p,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(1.6 / -mv.z, 0.8, 2.6); }`,
  fragmentShader: `varying float a; void main(){ vec2 c = gl_PointCoord-0.5; float r = 1.0 - smoothstep(0.2, 0.5, length(c)); gl_FragColor = vec4(vec3(0.9,0.85,0.75), a*r*0.32); }`,
});
const dust = new THREE.Points(dustGeo, dustMat); dust.frustumCulled = false; scene.add(dust);

// ---------------------------------------------------------------- efeitos de mundo
const decals = [];
const holeTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 1, 32, 32, 30); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.25, 'rgba(10,8,6,0.9)'); g.addColorStop(0.5, 'rgba(40,36,30,0.4)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
function placeDecal(tex, size, point, normal, o = {}) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshStandardMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, roughness: o.rough ?? 0.8, color: o.color ?? 0xffffff }));
  m.position.copy(point).addScaledVector(normal, 0.004);
  m.lookAt(point.clone().add(normal)); m.rotateZ(Math.random() * 6.28);
  scene.add(m); decals.push(m);
  if (decals.length > 60) { const d = decals.shift(); scene.remove(d); d.geometry.dispose(); d.material.dispose(); }
}
G.bulletHole = (hit) => {
  const n = hit.face ? hit.face.normal.clone().transformDirection(hit.object.matrixWorld) : V(0, 1, 0);
  placeDecal(holeTex, 0.06, hit.point, n);
  // poeira do impacto
  sparks(hit.point, n, 0x9a8a70, 10, 1.5);
};
const sparkMat = new THREE.SpriteMaterial({ map: T.softDot(), transparent: true, depthWrite: false });
const particles = [];
function sparks(p, n, color, count, speed) {
  for (let i = 0; i < count; i++) {
    const s = new THREE.Sprite(sparkMat.clone()); s.material.color.set(color); s.scale.setScalar(0.03 + Math.random() * 0.03);
    s.position.copy(p); scene.add(s);
    const v = n.clone().multiplyScalar(speed * (0.3 + Math.random())).add(V((Math.random() - 0.5) * speed, (Math.random() - 0.2) * speed, (Math.random() - 0.5) * speed));
    particles.push({ s, v, life: 0.5 + Math.random() * 0.5 });
  }
}
G.spawnBlood = (point, normal, color = 0x5a0000) => {
  sparks(point, normal || V(0, 1, 0), color, 16, 2.2);
  const fy = G.level.floorY(point.x, point.z);
  placeDecal(T.bloodSplat(Math.floor(Math.random() * 30), 'splat'), 0.5 + Math.random() * 0.4, V(point.x + (Math.random() - 0.5) * 0.4, fy + 0.008, point.z + (Math.random() - 0.5) * 0.4), V(0, 1, 0), { rough: 0.2, color: color === 0x5a0000 ? 0xffffff : 0x222222 });
};
// pó caindo do forro
G.ceilingDust = (x, z, n = 40) => {
  for (let i = 0; i < n; i++) {
    const sp = new THREE.Sprite(sparkMat.clone()); sp.material.color.set(0x8a8070); sp.material.opacity = 0.6; sp.scale.setScalar(0.012 + Math.random() * 0.02);
    sp.position.set(x + (Math.random() - 0.5) * 0.6, 2.66, z + (Math.random() - 0.5) * 0.6); scene.add(sp);
    particles.push({ s: sp, v: V((Math.random() - 0.5) * 0.1, -0.2 - Math.random() * 0.6, (Math.random() - 0.5) * 0.1), life: 2.5 + Math.random() * 2, g: 0.08 });
  }
  G.audio.noiseBurst(G.audio.dest(V(x, 2.6, z)), { dur: 0.6, type: 'highpass', f: 3000, peak: 0.12, buf: G.audio.pink });
};
// uma gota de sangue cai do teto ao seu lado
G.bloodDrip = (x, z) => {
  const sp = new THREE.Sprite(sparkMat.clone()); sp.material.color.set(0x5a0000); sp.scale.set(0.02, 0.035, 1); sp.position.set(x, 2.65, z); scene.add(sp);
  particles.push({ s: sp, v: V(0, 0, 0), life: 0.72, g: 1 });
  setTimeout(() => { placeDecal(T.bloodSplat(77, 'splat'), 0.18, V(x, G.level.floorY(x, z) + 0.008, z), V(0, 1, 0), { rough: 0.15 }); const d = G.audio.dest(V(x, 0.1, z)); G.audio.tone(d, { f: 700, fEnd: 1400, dur: 0.06, peak: 0.5 }); G.audio.noiseBurst(d, { dur: 0.05, f: 2500, q: 2, peak: 0.25 }); }, 720);
};
G.scareFx = 0;
G.shake = (a) => { G.player.shakeAmt = Math.min(1.5, G.player.shakeAmt + a); };
G.alertAll = () => {};
G.flickerBulbs = (dur) => G.level.bulbs.forEach(b => (b.flicker = dur * (0.6 + Math.random() * 0.6)));

let lightningT = 0, nextLightning = 18;
G.lightning = () => { lightningT = 0.6; G.level.props.lightning.shadow.needsUpdate = true; setTimeout(() => G.audio.thunder(0.6 + Math.random() * 0.8), 300 + Math.random() * 1200); };

G.onFlash = () => {
  G.exposureKick = 0.35;
  const cam = camera, fwd = cam.userData.fwd;
  G.revealedGhost = false;
  for (const o of G.level.reveal) {
    const p = o.getWorldPosition(V()); if (o.isGroup) p.y += 1.2;
    const d = p.distanceTo(cam.position), dir = p.clone().sub(cam.position).normalize();
    if (d < 13 && dir.dot(fwd) > 0.7 && G.level.los(cam.position, p)) {
      o.visible = true; o.userData.revealT = 0.35;
      if (o === G.level.props.ghost) G.revealedGhost = true;
    }
  }
  for (const c of G.creatures) {
    if (!c.active) continue;
    const p = c.chest().clone(), d = p.distanceTo(cam.position), dir = p.sub(cam.position).normalize();
    if (d < 10 && dir.dot(fwd) > 0.6 && G.level.los(cam.position, c.chest().clone())) c.flashed();
  }
  G.story.event('flash');
};

// ---------------------------------------------------------------- UI
const ui = {
  hud: $('#hud'), obj: $('#objective'), objT: $('#objective span'), subs: $('#subs'), prompt: $('#prompt'),
  ammo: $('#ammo b'), reserve: $('#ammo span'), flashBar: $('#flashc em'), stamp: $('#stamp'), hold: $('#hold'), holdBar: $('#hold i'),
  note: $('#note'), noteTxt: $('#note .txt'), pause: $('#pause'), dead: $('#dead'), cards: $('#cards'), cardsP: $('#cards p'), title: $('#title'), black: $('#black'),
};
let objToken = 0;
G.objective = (text, urgent = false) => {
  const tok = ++objToken;
  ui.obj.classList.remove('show');
  if (!text) return;
  setTimeout(() => { if (tok !== objToken) return; ui.objT.textContent = text; ui.obj.classList.toggle('urgent', urgent); ui.obj.classList.add('show'); }, 400);
  G.currentObjective = text;
};
const subQueue = []; let subCur = null;
G.say = (who, text, dur, kind = 'radio', pos = null) => subQueue.push({ who, text, dur, kind, pos, at: G.time });
function updateSubs(dt) {
  if (subCur) { subCur.t -= dt; if (subCur.t <= 0) { subCur.el.remove(); subCur = null; } }
  // descarta falas que ficaram velhas na fila (o momento já passou)
  while (subQueue.length && G.time - subQueue[0].at > 7 && subQueue.length > 1) subQueue.shift();
  if (!subCur && subQueue.length) {
    const s = subQueue.shift();
    const el = document.createElement('div');
    el.className = { radio: 'radio', girl: 'girl', phone: 'girl', self: 'self' }[s.kind] || '';
    el.innerHTML = `<span class="line"><span class="who">${s.who}</span>${s.text}</span>`;
    ui.subs.appendChild(el);
    subCur = { el, t: s.dur };
    const A = G.audio, vd = s.dur * 0.82;
    if (s.kind === 'radio') { A.radioBeep(); A.voice(null, vd, { radio: true, pitch: 105, vol: 0.5 }); }
    else if (s.kind === 'phone') A.voice(G.level.props.phone.pos, vd, { radio: true, child: true, vol: 0.5 });
    else if (s.kind === 'girl') A.voice(s.pos, vd, { child: true, vol: 0.45 });
    else if (s.kind === 'self') A.voice(null, vd, { pitch: 195, vol: 0.16 });
  }
}
let noteCb = null;
G.showNote = (html, cb) => { ui.noteTxt.innerHTML = html; ui.note.classList.remove('hidden'); G.noteOpen = true; noteCb = cb; G.audio.pickup(); };
G.closeNote = () => closeNote();
function closeNote() { ui.note.classList.add('hidden'); G.noteOpen = false; const cb = noteCb; noteCb = null; if (cb) cb(); }

function cards(lines, done, each = 4.2) {
  ui.cards.classList.remove('hidden');
  let i = 0;
  const next = () => {
    if (i >= lines.length) { ui.cardsP.classList.remove('on'); setTimeout(() => { ui.cards.classList.add('hidden'); done && done(); }, 1400); return; }
    ui.cardsP.classList.remove('on');
    setTimeout(() => { ui.cardsP.textContent = lines[i++]; ui.cardsP.classList.add('on'); setTimeout(next, each * 1000); }, 900);
  };
  next();
}

// ---------------------------------------------------------------- input
const keys = {};
let holdI = null, holdT = 0, focusI = null;
addEventListener('keydown', (e) => {
  if (!G.started) return;
  keys[e.code] = true;
  if (e.repeat) return;
  if (G.noteOpen) { if (e.code === 'KeyE' || e.code === 'Escape' || e.code === 'Space') closeNote(); return; }
  if (G.paused || G.player.dead) return;
  if (e.code === 'KeyE' && focusI) { if (focusI.hold) { holdI = focusI; holdT = 0; } else focusI.use(); }
  if (e.code === 'KeyR') G.player.reload();
  if (e.code === 'KeyF') G.player.toggleFlashlight();
  if (e.code === 'KeyQ') G.player.cameraFlash();
});
addEventListener('keyup', (e) => { keys[e.code] = false; if (e.code === 'KeyE') holdI = null; });
addEventListener('mousemove', (e) => { if ((document.pointerLockElement === canvas || G.lockFailed) && !G.paused) G.player.look(e.movementX, e.movementY); });
canvas.addEventListener('mousedown', (e) => {
  if (!G.started) return;
  if (document.pointerLockElement !== canvas && !G.lockFailed) { lock(); return; }
  if (G.noteOpen) { closeNote(); return; }
  if (e.button === 0) G.player.shoot();
  if (e.button === 2) G.player.cameraFlash();
});
addEventListener('contextmenu', (e) => e.preventDefault());
// se o navegador/iframe bloquear a captura do mouse, o jogo segue com o cursor livre
function lockFail() { if (G.lockFailed) return; G.lockFailed = true; G.paused = false; ui.pause.classList.add('hidden'); canvas.style.cursor = 'crosshair'; G.audio.suspend(false); }
function lock() {
  if (G.lockFailed) return;
  try {
    const r = canvas.requestPointerLock({ unadjustedMovement: true });
    if (r && r.catch) r.catch(() => { try { const r2 = canvas.requestPointerLock(); if (r2 && r2.catch) r2.catch(lockFail); } catch (e) { lockFail(); } });
  } catch (e) { lockFail(); }
}
document.addEventListener('pointerlockerror', lockFail);
document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvas;
  if (!G.started || G.finished || G.lockFailed) return;
  G.paused = !locked && !params.has('nolock');
  ui.pause.classList.toggle('hidden', !G.paused || G.player.dead);
  G.audio.suspend(G.paused);
});
$('#btnResume').addEventListener('click', () => { lock(); });
const toggleFull = () => { if (document.fullscreenElement) document.exitFullscreen(); else { const r = document.documentElement.requestFullscreen && document.documentElement.requestFullscreen({ navigationUI: 'hide' }); if (r && r.then) r.then(() => { if (G.started) lock(); }).catch(() => {}); } };
$('#btnFull2').addEventListener('click', toggleFull);
let wantFull = true;
$('#btnFull').addEventListener('click', () => { wantFull = !wantFull; $('#btnFull b').textContent = wantFull ? 'LIGADA' : 'DESLIGADA'; });
const openControls = () => $('#controls').classList.remove('hidden');
$('#btnControls').addEventListener('click', openControls); $('#btnControls2').addEventListener('click', openControls);
$('#btnCloseControls').addEventListener('click', () => $('#controls').classList.add('hidden'));
const bindOpt = (ids, apply) => { const els = ids.map((i) => $(i)); els.forEach((el) => el.addEventListener('input', () => { els.forEach((o) => (o.value = el.value)); apply(Number(el.value)); })); };
bindOpt(['#optSens', '#optSens2'], (v) => (G.sens = v));
bindOpt(['#optBright', '#optBright2'], (v) => (G.brightness = v));
bindOpt(['#optVol', '#optVol2'], (v) => { G.volume = v; if (G.audio.master) G.audio.master.gain.value = 0.9 * v; });
ui.dead.addEventListener('click', () => { ui.dead.classList.add('hidden'); G.story.restore(); G.post.u.blackout.value = 0; lock(); });

// ---------------------------------------------------------------- loops de mundo
G.startWorldLoops = () => {
  const A = G.audio;
  A.loop('flies', V(5.5, 0.9, 4.2), 0.9);
  if (G.level.props.tv.on) A.loop('tv', V(3.1, 0.75, 2.2), 0.7);
};

// ---------------------------------------------------------------- morte e final
G.onDeath = () => {
  G.audio.sting(); G.objective('');
  setTimeout(() => { G.audio.bodyFall(G.player.pos); }, 500);
  setTimeout(() => { ui.dead.classList.remove('hidden'); }, 3200);
};
G.endingFigures = () => {
  const red = new THREE.PointLight(0xff2010, 14, 9, 1.5); red.position.set(6, 1.6, 3); scene.add(red);
  G.lightsOn = false;
  const mk = (x, z, o) => { const P = buildHumanoid(G.cmats, { skin: G.cmats.ghost, top: G.cmats.ghost, bottom: G.cmats.ghost, ...o }); P.root.position.set(x, 0, z); P.root.rotation.y = Math.PI; scene.add(P.root); return P; };
  mk(2.4, 0.7, { h: 1.62, dress: G.cmats.ghost, hair: true, hairLen: 0.7 });
  mk(3.0, 0.8, { h: 1.92 }).neck.rotation.z = 0.5;
  mk(10.6, 0.7, { h: 1.1, dress: G.cmats.ghost, hair: true, hairLen: 0.4 });
  mk(11.2, 0.75, { h: 1.75 });
  // e alguém de uniforme na porta
  mk(5.9, 0.4, { h: 1.68, hair: true, hairLen: 0.25 });
  const C = mk(5.9, 1.6, { h: 3.0, thin: 0.6, armK: 1.75, faceless: true, longHead: 1.9, longNeck: 1.9 });
  G.level.props.doors.front.set(1, true);
};
G.finish = () => {
  G.finished = true; ui.black.classList.remove('hidden'); ui.black.style.opacity = 1;
  G.audio.stopAllLoops();
  setTimeout(() => {
    ui.hud.classList.add('hidden');
    cards([
      'Em 17 de março de 2003, a viatura 2207 foi encontrada vazia em frente à residência dos Vasconcelos.',
      'Nenhum membro da família foi localizado.\nO Soldado Silva e a Cabo Inês Duarte também não.',
      'A câmera corporal foi encontrada no porão, sob as cinzas do altar.\n\nAinda estava gravando.',
    ], () => {
      document.exitPointerLock();
      ui.title.classList.remove('hidden');
      ui.title.querySelector('.file').textContent = 'FIM DA GRAVAÇÃO · OBRIGADO POR JOGAR';
      ui.title.querySelector('.warn').textContent = 'Texturas e modelos: Poly Haven e ambientCG (CC0). Cabeça escaneada: Lee Perry-Smith por Infinite-Realities (CC BY 3.0). Motor: three.js.';
      ui.title.querySelector('button').textContent = 'JOGAR NOVAMENTE';
      ui.title.querySelector('button').onclick = () => location.reload();
    }, 5);
  }, 1600);
};

// ---------------------------------------------------------------- início
$('#start').addEventListener('click', start);
async function start() {
  await G.ready;
  G.audio.init(); if (G.audio.master) G.audio.master.gain.value = 0.9 * G.volume;
  ui.title.classList.add('hidden');
  if (wantFull && !params.has('nolock') && document.documentElement.requestFullscreen) {
    try { await document.documentElement.requestFullscreen({ navigationUI: 'hide' }); } catch (e) { /* iframe pode bloquear */ }
  }
  lock();
  const jump = params.get('step');
  const go = () => {
    G.started = true; G.paused = !(document.pointerLockElement === canvas) && !params.has('nolock') && !G.lockFailed;
    ui.hud.classList.remove('hidden');
    G.startWorldLoops();
    if (jump && G.story.steps[jump]) {
      G.story.checkpoint = jump; G.story.restore();
    } else G.story.go('arrive');
    if (G.paused) ui.pause.classList.remove('hidden');
  };
  if (jump || params.has('skip')) go();
  else cards([
    'Zona rural de Santa Luzia do Paraopeba, Minas Gerais.\n14 de março de 2003 — 02:47',
    'A família Vasconcelos — Antônio, Lúcia, o filho Tiago e a pequena Clara — não é vista há três dias.',
    'A Cabo Inês Duarte, da Polícia Militar, foi enviada para verificar a residência.\n\nEsta é a gravação da câmera corporal dela.',
  ], go);
}
if (params.has('auto')) start();

// ---------------------------------------------------------------- loop
const clock = new THREE.Clock();
const stamp0 = new Date(2003, 2, 14, 2, 47, 13).getTime();
let fpsAcc = 0, fpsN = 0;
function frame() {
  requestAnimationFrame(frame);
  let dt = Math.min(clock.getDelta(), 0.05);
  if (params.has('fixeddt')) dt = 1 / 30;
  dt *= Number(params.get('speed') || 1);
  const running = G.started && !G.paused && !G.noteOpen;
  if (running) step(dt); else if (!G.started) idleRender(dt);
  if (G.started) renderFrame(dt);
}
function idleRender(dt) { G.time += dt; }
function step(dt) {
  G.time += dt; G.dt = dt;
  const P = G.player, L = G.level, A = G.audio, u = G.post.u;
  P.update(dt);
  G.story.update(dt);
  for (const c of G.creatures) c.update(dt);
  L.update(dt, G.time);

  // flash
  if (G.flashT > 0) G.flashT -= dt;
  for (const o of L.reveal) {
    if (o.userData.revealT > 0) { o.userData.revealT -= dt; o.visible = o.userData.revealT > 0; } else o.visible = false;
  }

  // proximidade das entidades => interferência, tensão, lanterna falhando
  let near = 99;
  for (const c of G.creatures) if (c.active && c.state !== 'idle' && c.state !== 'hidden' && c.state !== 'die') near = Math.min(near, c.pos.distanceTo(P.pos));
  const prox = THREE.MathUtils.clamp(1 - near / 8, 0, 1);
  G.combat = G.creatures.some(c => c.active && ['chase', 'hunt', 'drop', 'emerge', 'flee'].includes(c.state) && c.pos.distanceTo(P.pos) < 14) || (G.mother.state === 'ceiling' && G.mother.active);
  G.flickerT = Math.max(0, G.flickerT - dt);
  G.flicker = (prox > 0.35 && Math.random() < prox * dt * 3) ? 0.25 : Math.max(0, G.flicker - dt);
  if (G.flickerT > 0) G.flicker = 0.2;
  if (G.scareFx > 0.5) G.flicker = 0.3;
  const PL = G.player; if (G.scareExposure) PL.flashlight.intensity *= 0.5;
  const tension = Math.min(1, G.tensionBase + prox * 0.6);
  P.fear += ((Math.max(tension, (100 - P.health) / 100) * 0.9) - P.fear) * Math.min(1, dt * 1.5);
  const room = L.room(P.pos.x, P.pos.z);
  A.update(dt, { inside: L.insideAt(P.pos.x, P.pos.z), tension, fear: P.fear, exertion: 1 - P.stamina, lights: G.lightsOn, basement: room === 'porao' || room === 'escada' });
  A.setListener(camera);

  // relâmpagos
  nextLightning -= dt;
  if (nextLightning <= 0 && !['porao', 'escada'].includes(room)) { nextLightning = 25 + Math.random() * 30; G.lightning(); }
  const lt = L.props.lightning;
  if (lightningT > 0) { lightningT -= dt; const k = lightningT; lt.intensity = (k > 0.45 || (k > 0.2 && k < 0.3) ? 6 : 0) * (Math.random() * 0.5 + 0.5); } else lt.intensity = 0;

  // exposição automática da câmera (ganho alto no escuro = mais ruído)
  const inside = L.insideAt(P.pos.x, P.pos.z);
  let target = G.lightsOn && inside > 0.5 ? 0.95 : (P.flashlightOn ? 1.3 : 2.1);
  // medição: lanterna muito perto de uma superfície estouraria a imagem -> ganho cai
  const bd = P.bounce.intensity > 0 ? P.bounce.position.distanceTo(camera.position) : 9;
  if (P.flashlightOn) target *= THREE.MathUtils.lerp(G.lightsOn && inside > 0.5 ? 0.6 : 0.45, 1, THREE.MathUtils.clamp((bd - 0.5) / 2.5, 0, 1));
  G.exposure += (target - G.exposure) * Math.min(1, dt * (G.exposure > target ? 4 : 1.1));
  if (G.flashT > 0) G.exposure = 0.45;
  if (G.scareExposure) G.exposure = G.scareExposure;
  u.exposure.value = G.exposure * G.brightness;
  u.grain.value = 0.045 + (G.exposure - 0.9) * 0.05;
  u.flash.value = Math.max(0, G.flashT / 0.18) * 0.85;
  u.damage.value = P.damageFx;
  u.interference.value = G.scareExposure ? G.scareFx : Math.max(prox * prox * 0.6, P.dead ? 0.8 : 0, G.flickerT > 0 ? 0.4 : 0, G.scareFx * 0.9);
  G.post.after.uniforms.damp.value = 0.38 + G.scareFx * 0.5;
  scene.environmentIntensity = inside > 0.5 ? (G.lightsOn ? 0.35 : 0.12) : 0.5;
  u.saturation.value = G.lightsOn ? 0.8 : 0.6;
  hemi.intensity = inside > 0.5 ? 0.12 : 0.3;
  scene.fog.density = room === 'porao' ? 0.07 : inside > 0.5 ? 0.045 : 0.035;

  // poeira
  dustMat.uniforms.t.value = G.time;
  dustMat.uniforms.on.value = P.flashlightOn && !G.lightsOn ? 1 : 0.25;
  dustMat.uniforms.lp.value.copy(P.flashlight.position);
  dustMat.uniforms.ld.value.copy(P.lightDir);
  const c = camera.position;
  for (let i = 0; i < DUST; i++) {
    const o = i * 3;
    if (dustPos[o] - c.x > 5) dustPos[o] -= 10; else if (dustPos[o] - c.x < -5) dustPos[o] += 10;
    if (dustPos[o + 2] - c.z > 5) dustPos[o + 2] -= 10; else if (dustPos[o + 2] - c.z < -5) dustPos[o + 2] += 10;
    if (dustPos[o + 1] - c.y > 2) dustPos[o + 1] -= 3.5; else if (dustPos[o + 1] - c.y < -1.5) dustPos[o + 1] += 3.5;
    dustPos[o + 1] -= dt * 0.02;
  }
  dustGeo.attributes.position.needsUpdate = true;

  // partículas
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]; p.life -= dt; p.v.y -= 9.8 * (p.g ?? 1) * dt; p.s.position.addScaledVector(p.v, dt);
    p.s.material.opacity = Math.min(p.s.material.opacity, Math.max(0, p.life * 2));
    if (p.life <= 0) { scene.remove(p.s); p.s.material.dispose(); particles.splice(i, 1); }
  }

  // espelho só renderiza quando está perto (desempenho)
  L.props.mirror.visible = room === 'banheiro' || (room === 'casal' && false);

  // interação
  focusI = null;
  if (!P.dead && !P.frozen) {
    let best = 0;
    for (const I of L.interact) {
      if (I.enabled === false) continue;
      const d = I.pos.distanceTo(camera.position); if (d > (I.range || 1.9)) continue;
      const dir = I.pos.clone().sub(camera.position).normalize(); const dot = dir.dot(camera.userData.fwd);
      if (dot < 0.86 || dot < best) continue;
      if (!L.los(camera.position, I.pos)) continue;
      best = dot; focusI = I;
    }
  }
  if (holdI) {
    if (holdI !== focusI) holdI = null;
    else { holdT += dt; if (holdT >= holdI.hold) { const h = holdI; holdI = null; h.use(); } }
  }
  ui.prompt.textContent = focusI ? `[E] ${focusI.label}` : '';
  ui.hold.style.display = holdI ? 'block' : 'none';
  if (holdI) ui.holdBar.style.width = (holdT / holdI.hold * 100) + '%';

  // HUD
  ui.ammo.textContent = P.reloading > 0 ? '—' : P.ammo;
  ui.reserve.textContent = '/ ' + P.reserve;
  ui.flashBar.style.width = (P.flashCharge * 100) + '%';
  const d = new Date(stamp0 + G.time * 1000);
  const pad = (n) => String(n).padStart(2, '0');
  ui.stamp.textContent = `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  updateSubs(dt);
}
function renderFrame(dt) {
  if (G.player.dead) G.post.u.blackout.value = Math.min(1, Math.max(0, (G.player.deathT - 1.8) / 1.2));
  G.post.render(dt, G.time);
  if (params.has('fps')) { fpsAcc += dt; fpsN++; if (fpsAcc > 1) { console.log('fps', (fpsN / fpsAcc).toFixed(1), renderer.info.render.calls); fpsAcc = 0; fpsN = 0; } }
}
frame();

// utilitário de depuração: apontar a câmera para um ponto
G.lookAt = (x, y, z) => {
  const p = G.player.pos, cy = p.y + G.player.height;
  G.player.yaw = Math.atan2(-(x - p.x), -(z - p.z));
  G.player.pitch = Math.atan2(y - cy, Math.hypot(x - p.x, z - p.z));
};
