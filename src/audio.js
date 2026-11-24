// Áudio 100% sintetizado em tempo real com Web Audio + HRTF (som 3D binaural).
export class Audio {
  constructor() { this.ctx = null; this.loops = new Set(); }

  init() {
    if (this.ctx) return;
    const ctx = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.out = ctx.createDynamicsCompressor();
    this.out.threshold.value = -14; this.out.ratio.value = 4; this.out.attack.value = 0.003; this.out.release.value = 0.25;
    this.out.connect(ctx.destination);
    this.master = ctx.createGain(); this.master.gain.value = 0.9;
    // filtro global (ouvido zunindo após tiro / desmaio)
    this.deaf = ctx.createBiquadFilter(); this.deaf.type = 'lowpass'; this.deaf.frequency.value = 20000;
    this.master.connect(this.deaf); this.deaf.connect(this.out);
    this.sfx = ctx.createGain(); this.sfx.connect(this.master);
    this.amb = ctx.createGain(); this.amb.connect(this.master);
    // reverb de cômodo gerado
    this.verb = ctx.createConvolver(); this.verb.buffer = this.impulse(2.2, 2.6);
    this.verbIn = ctx.createGain(); this.verbIn.gain.value = 0.35;
    this.verbIn.connect(this.verb); this.verb.connect(this.master);
    this.white = this.noise('white'); this.pink = this.noise('pink'); this.brown = this.noise('brown');
    this.curveSoft = this.shaper(3); this.curveHard = this.shaper(30);
    this.startAmbience();
  }

  impulse(dur, decay) {
    const ctx = this.ctx, len = ctx.sampleRate * dur, b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = b.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay) * (i < 60 ? i / 60 : 1);
    }
    return b;
  }
  noise(kind) {
    const ctx = this.ctx, len = ctx.sampleRate * 3, b = ctx.createBuffer(1, len, ctx.sampleRate), d = b.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (kind === 'white') d[i] = w;
      else if (kind === 'pink') {
        b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759; b2 = 0.969 * b2 + w * 0.153852;
        b3 = 0.8665 * b3 + w * 0.3104856; b4 = 0.55 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.016898;
        d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11; b6 = w * 0.115926;
      } else { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    }
    return b;
  }
  shaper(k) {
    const n = 2048, c = new Float32Array(n);
    for (let i = 0; i < n; i++) { const x = i * 2 / n - 1; c[i] = (1 + k) * x / (1 + k * Math.abs(x)); }
    return c;
  }
  get t() { return this.ctx.currentTime; }

  // ---------- roteamento ----------
  dest(pos, opts = {}) {
    const ctx = this.ctx;
    const g = ctx.createGain(); g.gain.value = opts.gain ?? 1;
    if (pos) {
      const p = ctx.createPanner();
      p.panningModel = 'HRTF'; p.distanceModel = 'inverse';
      p.refDistance = opts.ref ?? 1.2; p.rolloffFactor = opts.rolloff ?? 1.3; p.maxDistance = 60;
      p.positionX.value = pos.x; p.positionY.value = pos.y; p.positionZ.value = pos.z;
      g.connect(p); p.connect(opts.bus || this.sfx);
      g.panner = p;
    } else g.connect(opts.bus || this.sfx);
    const send = ctx.createGain(); send.gain.value = opts.verb ?? 0.5; g.connect(send); send.connect(this.verbIn);
    return g;
  }
  src(buf, loop = false, rate = 1) {
    const s = this.ctx.createBufferSource(); s.buffer = buf; s.loop = loop; s.playbackRate.value = rate;
    if (!loop) s.loopStart = 0;
    return s;
  }
  filt(type, f, q = 1) { const b = this.ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; return b; }
  gainEnv(node, t, a, peak, d, sustain = 0) {
    const g = node.gain; g.cancelScheduledValues(t); g.setValueAtTime(0.0001, t);
    g.linearRampToValueAtTime(peak, t + a); g.exponentialRampToValueAtTime(Math.max(0.0001, sustain || 0.0001), t + a + d);
  }
  noiseBurst(out, { t = this.t, dur = 0.1, a = 0.002, peak = 1, type = 'bandpass', f = 1000, q = 1, buf = this.white, rate = 1, fEnd } = {}) {
    const s = this.src(buf, false, rate), fl = this.filt(type, f, q), g = this.ctx.createGain();
    if (fEnd) fl.frequency.exponentialRampToValueAtTime(fEnd, t + dur);
    s.connect(fl); fl.connect(g); g.connect(out);
    this.gainEnv(g, t, a, peak, dur);
    s.start(t, Math.random() * 2); s.stop(t + a + dur + 0.05);
    return g;
  }
  tone(out, { t = this.t, type = 'sine', f = 100, fEnd, dur = 0.2, a = 0.005, peak = 0.5 } = {}) {
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (fEnd) o.frequency.exponentialRampToValueAtTime(fEnd, t + dur);
    o.connect(g); g.connect(out); this.gainEnv(g, t, a, peak, dur);
    o.start(t); o.stop(t + a + dur + 0.05);
    return o;
  }

  setListener(cam) {
    if (!this.ctx) return;
    const L = this.ctx.listener, p = cam.position, t = this.t;
    const f = cam.userData.fwd, u = cam.userData.up;
    if (L.positionX) {
      L.positionX.setTargetAtTime(p.x, t, 0.02); L.positionY.setTargetAtTime(p.y, t, 0.02); L.positionZ.setTargetAtTime(p.z, t, 0.02);
      L.forwardX.setTargetAtTime(f.x, t, 0.02); L.forwardY.setTargetAtTime(f.y, t, 0.02); L.forwardZ.setTargetAtTime(f.z, t, 0.02);
      L.upX.setTargetAtTime(u.x, t, 0.02); L.upY.setTargetAtTime(u.y, t, 0.02); L.upZ.setTargetAtTime(u.z, t, 0.02);
    } else { L.setPosition(p.x, p.y, p.z); L.setOrientation(f.x, f.y, f.z, u.x, u.y, u.z); }
  }

  // ---------- ambiente contínuo ----------
  startAmbience() {
    const ctx = this.ctx;
    // chuva: ruído rosa filtrado + gotas
    const rain = this.src(this.pink, true);
    this.rainLP = this.filt('lowpass', 9000, 0.3);
    const rainHP = this.filt('highpass', 400, 0.5);
    this.rainGain = ctx.createGain(); this.rainGain.gain.value = 0.35;
    rain.connect(rainHP); rainHP.connect(this.rainLP); this.rainLP.connect(this.rainGain); this.rainGain.connect(this.amb);
    rain.start();
    // telhado de zinco (só dentro)
    const roof = this.src(this.white, true, 0.7);
    const roofBP = this.filt('bandpass', 2600, 0.9);
    this.roofGain = ctx.createGain(); this.roofGain.gain.value = 0;
    roof.connect(roofBP); roofBP.connect(this.roofGain); this.roofGain.connect(this.amb); roof.start();
    // vento
    const wind = this.src(this.brown, true);
    const wf = this.filt('bandpass', 300, 0.6); this.windGain = ctx.createGain(); this.windGain.gain.value = 0.25;
    const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 0.07; lg.gain.value = 180;
    lfo.connect(lg); lg.connect(wf.frequency); lfo.start();
    wind.connect(wf); wf.connect(this.windGain); this.windGain.connect(this.amb); wind.start();
    // drone de tensão
    this.drone = ctx.createGain(); this.drone.gain.value = 0.0;
    const dl = this.filt('lowpass', 220, 0.7); this.drone.connect(dl); dl.connect(this.amb);
    for (const f of [41.2, 43.65, 61.7, 82.4]) {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = (Math.random() - 0.5) * 14;
      const g = ctx.createGain(); g.gain.value = 0.12; o.connect(g); g.connect(this.drone); o.start();
    }
    // apito agudo de tensão alta
    this.whine = ctx.createGain(); this.whine.gain.value = 0;
    const wn = this.src(this.white, true), wbp = this.filt('bandpass', 3100, 30);
    const wo = ctx.createOscillator(); wo.frequency.value = 2960; const wog = ctx.createGain(); wog.gain.value = 0.02;
    wo.connect(wog); wog.connect(this.whine); wo.start();
    wn.connect(wbp); wbp.connect(this.whine); this.whine.connect(this.amb); wn.start();
    // zumbido elétrico (lâmpadas ligadas)
    this.hum = ctx.createGain(); this.hum.gain.value = 0;
    for (const f of [60, 120, 180]) { const o = ctx.createOscillator(); o.frequency.value = f; const g = ctx.createGain(); g.gain.value = 0.05 / (f / 60); o.connect(g); g.connect(this.hum); o.start(); }
    this.hum.connect(this.amb);
    // respiração
    const br = this.src(this.white, true);
    this.breathF = this.filt('bandpass', 1100, 0.8);
    this.breathG = ctx.createGain(); this.breathG.gain.value = 0;
    br.connect(this.breathF); this.breathF.connect(this.breathG); this.breathG.connect(this.sfx); br.start();
    this.breathPhase = 0; this.heartT = 0;
  }

  // inside: 0..1 (abafa chuva), tension: 0..1, lights: bool
  update(dt, { inside = 0, tension = 0, fear = 0, exertion = 0, lights = false, basement = false }) {
    if (!this.ctx) return;
    const t = this.t;
    const rainOut = basement ? 0.04 : (1 - inside) * 0.42 + inside * 0.08;
    this.rainGain.gain.setTargetAtTime(rainOut, t, 0.4);
    this.rainLP.frequency.setTargetAtTime(basement ? 300 : 9000 - inside * 7800, t, 0.4);
    this.roofGain.gain.setTargetAtTime(basement ? 0.004 : inside * 0.03, t, 0.4);
    this.windGain.gain.setTargetAtTime(basement ? 0.05 : 0.22 - inside * 0.12, t, 0.5);
    this.drone.gain.setTargetAtTime(0.05 + tension * 0.55, t, 0.8);
    this.whine.gain.setTargetAtTime(Math.max(0, tension - 0.55) * 0.18, t, 0.5);
    this.hum.gain.setTargetAtTime(lights ? 0.35 : 0, t, 0.1);
    // respiração: ritmo segue medo e esforço
    const rate = 0.25 + exertion * 0.55 + fear * 0.45;
    this.breathPhase += dt * rate;
    const ph = this.breathPhase % 1;
    const inh = ph < 0.38, amp = (0.015 + exertion * 0.09 + fear * 0.06);
    const env = inh ? Math.sin(ph / 0.38 * Math.PI) : Math.sin((ph - 0.38) / 0.62 * Math.PI) * 0.8;
    this.breathG.gain.setTargetAtTime(Math.max(0, env) * amp, t, 0.05);
    this.breathF.frequency.setTargetAtTime(inh ? 1500 : 900, t, 0.1);
    // coração
    const bpm = 62 + fear * 90 + exertion * 40;
    this.heartT -= dt;
    if (this.heartT <= 0) {
      this.heartT = 60 / bpm;
      const vol = Math.max(0, fear - 0.25) * 0.9 + exertion * 0.15;
      if (vol > 0.03) { const d = this.dest(null, { verb: 0 }); this.tone(d, { f: 52, fEnd: 38, dur: 0.12, peak: vol }); this.tone(d, { t: t + 0.18, f: 48, fEnd: 36, dur: 0.1, peak: vol * 0.6 }); }
    }
  }

  // ---------- efeitos ----------
  footstep(surface, pos, vol = 1, run = false) {
    if (!this.ctx) return;
    const d = this.dest(pos, { verb: surface === 'concrete' ? 0.7 : 0.35, gain: vol });
    const t = this.t;
    const map = {
      wood: { f: 500, q: 1.2, thump: 110, dur: 0.09 },
      tile: { f: 2400, q: 0.8, thump: 160, dur: 0.05 },
      concrete: { f: 1500, q: 0.6, thump: 90, dur: 0.07 },
      mud: { f: 350, q: 0.7, thump: 70, dur: 0.16 },
      porch: { f: 420, q: 1.5, thump: 95, dur: 0.11 },
    }[surface] || { f: 800, q: 1, thump: 100, dur: 0.07 };
    const k = run ? 1.5 : 1;
    this.noiseBurst(d, { t, dur: map.dur, f: map.f * (0.85 + Math.random() * 0.3), q: map.q, peak: 0.35 * k });
    this.noiseBurst(d, { t: t + 0.03, dur: map.dur * 0.7, f: map.f * 1.6, q: 1, peak: 0.12 * k });
    this.tone(d, { t, f: map.thump, fEnd: map.thump * 0.5, dur: 0.08, peak: 0.35 * k });
    if (surface === 'mud') this.noiseBurst(d, { t: t + 0.06, dur: 0.12, type: 'lowpass', f: 900, peak: 0.25 });
    if ((surface === 'wood' || surface === 'porch') && Math.random() < 0.18) this.creak(pos, 0.25 + Math.random() * 0.3, 0.25);
  }

  creak(pos, dur = 0.6, vol = 0.5, pitch = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = this.t, d = this.dest(pos, { verb: 0.6, gain: vol });
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    const base = (90 + Math.random() * 90) * pitch;
    o.frequency.setValueAtTime(base, t);
    for (let i = 1; i < 8; i++) o.frequency.linearRampToValueAtTime(base * (0.7 + Math.random() * 0.8), t + dur * i / 8);
    const am = ctx.createOscillator(); am.type = 'square'; am.frequency.value = 18 + Math.random() * 30;
    const amg = ctx.createGain(); amg.gain.value = 0.5;
    const g = ctx.createGain(); g.gain.value = 0.5; am.connect(amg); amg.connect(g.gain);
    const bp = this.filt('bandpass', 900 * pitch, 3), bp2 = this.filt('bandpass', 2200 * pitch, 5);
    const env = ctx.createGain();
    o.connect(g); g.connect(bp); g.connect(bp2); bp.connect(env); bp2.connect(env); env.connect(d);
    env.gain.setValueAtTime(0.0001, t); env.gain.linearRampToValueAtTime(0.5, t + 0.05);
    env.gain.setValueAtTime(0.5, t + dur * 0.8); env.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); am.start(t); o.stop(t + dur + 0.1); am.stop(t + dur + 0.1);
  }
  doorOpen(pos) { this.latch(pos); this.creak(pos, 1.1, 0.55, 0.8); }
  latch(pos) {
    const d = this.dest(pos, { verb: 0.4 }), t = this.t;
    this.noiseBurst(d, { t, dur: 0.03, f: 3500, q: 2, peak: 0.6 });
    this.noiseBurst(d, { t: t + 0.06, dur: 0.04, f: 2500, q: 3, peak: 0.4 });
  }
  doorSlam(pos, vol = 1) {
    const d = this.dest(pos, { verb: 1, gain: vol }), t = this.t;
    this.noiseBurst(d, { t, dur: 0.35, type: 'lowpass', f: 1800, fEnd: 200, peak: 1.2, buf: this.brown });
    this.tone(d, { t, f: 70, fEnd: 35, dur: 0.4, peak: 0.9 });
    this.noiseBurst(d, { t, dur: 0.05, f: 3000, q: 1, peak: 0.6 });
  }
  knock(pos, n = 3) {
    for (let i = 0; i < n; i++) {
      const t = this.t + i * 0.28 + Math.random() * 0.05, d = this.dest(pos, { verb: 0.8 });
      this.tone(d, { t, f: 140, fEnd: 70, dur: 0.12, peak: 0.9 });
      this.noiseBurst(d, { t, dur: 0.05, f: 700, q: 2, peak: 0.6 });
    }
  }

  gunshot(pos) {
    const t = this.t, d = this.dest(pos, { verb: 1.4, gain: 1.4 });
    this.noiseBurst(d, { t, dur: 0.012, a: 0.0005, type: 'highpass', f: 1000, peak: 2.5 });
    this.noiseBurst(d, { t, dur: 0.25, a: 0.001, type: 'lowpass', f: 6000, fEnd: 300, peak: 2, buf: this.white });
    this.tone(d, { t, f: 90, fEnd: 30, dur: 0.3, a: 0.001, peak: 1.6 });
    const s = this.src(this.white); const sh = this.ctx.createWaveShaper(); sh.curve = this.curveHard;
    const g = this.ctx.createGain(); s.connect(sh); sh.connect(g); g.connect(d); this.gainEnv(g, t, 0.0005, 0.6, 0.08); s.start(t); s.stop(t + 0.15);
    // zumbido no ouvido + surdez momentânea (som real de disparo em ambiente fechado)
    this.deaf.frequency.cancelScheduledValues(t);
    this.deaf.frequency.setValueAtTime(900, t + 0.05); this.deaf.frequency.exponentialRampToValueAtTime(20000, t + 2.2);
    const tin = this.dest(null, { verb: 0 }); this.tone(tin, { t: t + 0.05, f: 4100 + Math.random() * 400, dur: 2.4, a: 0.05, peak: 0.05 });
  }
  dryFire() { const d = this.dest(null, { verb: 0.2 }); this.noiseBurst(d, { dur: 0.03, f: 4000, q: 3, peak: 0.5 }); }
  reloadClick(i) {
    const d = this.dest(null, { verb: 0.2 }), t = this.t;
    if (i === 0) { this.noiseBurst(d, { t, dur: 0.05, f: 2000, q: 2, peak: 0.6 }); this.tone(d, { t, f: 900, dur: 0.05, peak: 0.1 }); }
    else if (i === 1) for (let k = 0; k < 6; k++) this.noiseBurst(d, { t: t + k * 0.04, dur: 0.02, f: 5000, q: 4, peak: 0.25 });
    else { this.noiseBurst(d, { t, dur: 0.04, f: 1800, q: 2, peak: 0.7 }); this.noiseBurst(d, { t: t + 0.12, dur: 0.03, f: 3500, q: 3, peak: 0.4 }); }
  }
  cameraFlash() {
    const d = this.dest(null, { verb: 0.1 }), t = this.t;
    this.noiseBurst(d, { t, dur: 0.02, f: 6000, q: 2, peak: 0.6 });
    this.tone(d, { t, f: 1200, dur: 0.06, peak: 0.08, type: 'square' });
  }
  flashCharge(dur) {
    const d = this.dest(null, { verb: 0 }), t = this.t;
    this.tone(d, { t: t + 0.1, f: 1800, fEnd: 9500, dur, a: 0.2, peak: 0.018 });
  }
  pickup() { const d = this.dest(null, { verb: 0.2 }); this.noiseBurst(d, { dur: 0.12, f: 1800, q: 0.7, peak: 0.3 }); }
  switchClick(pos) { const d = this.dest(pos, { verb: 0.3 }); this.noiseBurst(d, { dur: 0.02, f: 3000, q: 3, peak: 0.6 }); }
  flashlightClick() { const d = this.dest(null, { verb: 0.1 }); this.noiseBurst(d, { dur: 0.015, f: 4500, q: 4, peak: 0.35 }); }

  powerOn(pos) {
    const d = this.dest(pos, { verb: 1 }), t = this.t;
    this.noiseBurst(d, { t, dur: 0.2, type: 'lowpass', f: 600, peak: 1, buf: this.brown });
    this.tone(d, { t, f: 60, dur: 1.5, peak: 0.25, type: 'sawtooth' });
    for (let i = 0; i < 5; i++) this.noiseBurst(d, { t: t + 0.1 + i * 0.09, dur: 0.02, f: 5000, q: 2, peak: 0.3 });
  }
  powerOff() {
    const d = this.dest(null, { verb: 1 }), t = this.t;
    this.tone(d, { t, f: 120, fEnd: 20, dur: 1.2, peak: 0.4, type: 'sawtooth' });
    this.noiseBurst(d, { t, dur: 0.3, f: 3000, q: 1, peak: 0.5 });
  }
  bulbPop(pos) { const d = this.dest(pos, { verb: 0.7 }); this.noiseBurst(d, { dur: 0.08, f: 5000, q: 0.5, peak: 1 }); this.noiseBurst(d, { t: this.t + 0.05, dur: 0.4, f: 7000, q: 1, peak: 0.2 }); }
  glass(pos) {
    const d = this.dest(pos, { verb: 1 }), t = this.t;
    this.noiseBurst(d, { t, dur: 0.15, type: 'highpass', f: 3000, peak: 1 });
    for (let i = 0; i < 14; i++) this.tone(d, { t: t + Math.random() * 0.6, f: 3000 + Math.random() * 5000, dur: 0.05 + Math.random() * 0.1, peak: 0.08 });
  }

  // grito humano distorcido (síntese de formantes)
  scream(pos, { pitch = 1, dur = 1.4, vol = 1, rough = 1 } = {}) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = this.t, d = this.dest(pos, { verb: 1.1, gain: vol, ref: 2 });
    const mix = ctx.createGain(); mix.gain.value = 0.5;
    const sh = ctx.createWaveShaper(); sh.curve = rough > 0.5 ? this.curveHard : this.curveSoft;
    const vib = ctx.createOscillator(), vg = ctx.createGain(); vib.frequency.value = 7 + Math.random() * 5; vg.gain.value = 25 * pitch;
    vib.connect(vg);
    for (let i = 0; i < 3; i++) {
      const o = ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.setValueAtTime(300 * pitch, t);
      o.frequency.exponentialRampToValueAtTime((700 + i * 13) * pitch, t + 0.12);
      o.frequency.exponentialRampToValueAtTime(520 * pitch, t + dur);
      o.detune.value = (i - 1) * 25; vg.connect(o.frequency);
      o.connect(mix); o.start(t); o.stop(t + dur + 0.1);
    }
    const n = this.src(this.white); const ng = ctx.createGain(); ng.gain.value = 0.35; n.connect(ng); ng.connect(mix); n.start(t, Math.random()); n.stop(t + dur + 0.1);
    const env = ctx.createGain();
    mix.connect(sh);
    for (const [f, q, g] of [[850, 6, 1], [1250, 8, 0.7], [2700, 10, 0.4], [3500, 10, 0.25]]) {
      const bp = this.filt('bandpass', f * (0.9 + pitch * 0.1), q), bg = ctx.createGain(); bg.gain.value = g;
      sh.connect(bp); bp.connect(bg); bg.connect(env);
    }
    env.connect(d);
    env.gain.setValueAtTime(0.0001, t); env.gain.exponentialRampToValueAtTime(1.6, t + 0.06);
    env.gain.setValueAtTime(1.6, t + dur * 0.6); env.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    vib.start(t); vib.stop(t + dur + 0.1);
  }
  growl(pos, dur = 2, vol = 1) {
    const ctx = this.ctx, t = this.t, d = this.dest(pos, { verb: 1.2, gain: vol, ref: 2.5, rolloff: 0.9 });
    const sh = ctx.createWaveShaper(); sh.curve = this.curveHard;
    const lp = this.filt('lowpass', 700, 2), env = ctx.createGain();
    for (const f of [38, 55.5, 77]) {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f, t);
      o.frequency.linearRampToValueAtTime(f * 0.8, t + dur);
      const am = ctx.createOscillator(); am.frequency.value = 9 + Math.random() * 6; const amg = ctx.createGain(); amg.gain.value = 0.6;
      const g = ctx.createGain(); g.gain.value = 0.4; am.connect(amg); amg.connect(g.gain);
      o.connect(g); g.connect(sh); o.start(t); am.start(t); o.stop(t + dur + 0.1); am.stop(t + dur + 0.1);
    }
    const n = this.src(this.brown); n.connect(sh); n.start(t); n.stop(t + dur + 0.1);
    sh.connect(lp); lp.connect(env); env.connect(d);
    env.gain.setValueAtTime(0.0001, t); env.gain.exponentialRampToValueAtTime(0.9, t + 0.3); env.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  }
  boneCrack(pos, n = 3) {
    for (let i = 0; i < n; i++) {
      const d = this.dest(pos, { verb: 0.4, gain: 1.2 }), t = this.t + i * (0.06 + Math.random() * 0.12);
      this.noiseBurst(d, { t, dur: 0.025, a: 0.0005, f: 1600 + Math.random() * 1500, q: 1.5, peak: 1.2 });
      this.tone(d, { t, f: 220, fEnd: 90, dur: 0.04, peak: 0.4 });
    }
  }
  skitter(pos, dur = 0.8, vol = 0.8) {
    const t0 = this.t, d = this.dest(pos, { verb: 0.5, gain: vol });
    let tt = 0;
    while (tt < dur) {
      this.noiseBurst(d, { t: t0 + tt, dur: 0.02, f: 900 + Math.random() * 2500, q: 2, peak: 0.5 + Math.random() * 0.5 });
      if (Math.random() < 0.3) this.tone(d, { t: t0 + tt, f: 120, fEnd: 60, dur: 0.05, peak: 0.4 });
      tt += 0.04 + Math.random() * 0.09;
    }
  }
  heavyStep(pos, vol = 1) {
    const d = this.dest(pos, { verb: 1, gain: vol, ref: 2 }), t = this.t;
    this.tone(d, { t, f: 55, fEnd: 28, dur: 0.35, peak: 1.2 });
    this.noiseBurst(d, { t, dur: 0.18, type: 'lowpass', f: 500, peak: 0.8, buf: this.brown });
    this.noiseBurst(d, { t: t + 0.02, dur: 0.08, f: 1200, q: 1, peak: 0.2 });
  }
  bodyFall(pos) {
    const d = this.dest(pos, { verb: 0.9 }), t = this.t;
    this.tone(d, { t, f: 80, fEnd: 30, dur: 0.4, peak: 1.2 });
    this.noiseBurst(d, { t, dur: 0.3, type: 'lowpass', f: 900, peak: 1, buf: this.brown });
    this.boneCrack(pos, 2);
  }
  splash(pos, big = false) {
    const d = this.dest(pos, { verb: 0.7, gain: big ? 1.4 : 0.6 }), t = this.t;
    this.noiseBurst(d, { t, dur: big ? 0.8 : 0.25, type: 'lowpass', f: 2500, fEnd: 400, peak: 1, buf: this.pink });
    for (let i = 0; i < (big ? 12 : 4); i++) this.tone(d, { t: t + Math.random() * 0.6, f: 600 + Math.random() * 900, fEnd: 1400, dur: 0.04, peak: 0.12 });
  }
  whisper(pos, dur = 2.5, vol = 0.6) {
    const ctx = this.ctx, t = this.t, d = this.dest(pos, { verb: 0.9, gain: vol, ref: 0.6 });
    const n = this.src(this.white); const env = ctx.createGain(); env.gain.value = 0;
    const f1 = this.filt('bandpass', 1500, 6), f2 = this.filt('bandpass', 3000, 8);
    n.connect(f1); n.connect(f2); f1.connect(env); f2.connect(env); env.connect(d);
    let tt = 0;
    while (tt < dur) {
      const syl = 0.08 + Math.random() * 0.16;
      f1.frequency.setValueAtTime(700 + Math.random() * 1800, t + tt); f2.frequency.setValueAtTime(2200 + Math.random() * 2400, t + tt);
      env.gain.setValueAtTime(0, t + tt); env.gain.linearRampToValueAtTime(0.6 + Math.random() * 0.4, t + tt + syl * 0.3);
      env.gain.linearRampToValueAtTime(0, t + tt + syl);
      tt += syl + (Math.random() < 0.2 ? 0.25 : 0.02);
    }
    n.start(t, Math.random()); n.stop(t + dur + 0.2);
  }
  // voz "humana" ininteligível por baixo das legendas (rádio, telefone, criança)
  voice(pos, dur, { pitch = 120, radio = false, child = false, demonic = false, vol = 0.6 } = {}) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = this.t, d = this.dest(pos, { verb: radio ? 0.1 : 0.6, gain: vol, ref: 1 });
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    const n = this.src(this.white); const ng = ctx.createGain(); ng.gain.value = 0.08;
    const src = ctx.createGain(); o.connect(src); n.connect(ng); ng.connect(src);
    const f1 = this.filt('bandpass', 600, 5), f2 = this.filt('bandpass', 1400, 7), f3 = this.filt('bandpass', 2600, 9);
    const env = ctx.createGain(); env.gain.value = 0;
    src.connect(f1); src.connect(f2); src.connect(f3);
    const g3 = ctx.createGain(); g3.gain.value = 0.4; f3.connect(g3);
    f1.connect(env); f2.connect(env); g3.connect(env);
    let chain = env;
    if (radio) {
      const hp = this.filt('highpass', 400, 0.7), lp = this.filt('lowpass', 2800, 0.7), sh = ctx.createWaveShaper(); sh.curve = this.curveSoft;
      env.connect(hp); hp.connect(lp); lp.connect(sh); chain = sh;
      const st = this.src(this.white); const sbp = this.filt('bandpass', 2000, 0.5); const sg = ctx.createGain(); sg.gain.value = 0.05;
      st.connect(sbp); sbp.connect(sg); sg.connect(d); st.start(t, Math.random()); st.stop(t + dur + 0.3);
      this.noiseBurst(d, { t, dur: 0.12, f: 2000, q: 0.5, peak: 0.4 });
      this.noiseBurst(d, { t: t + dur, dur: 0.15, f: 2000, q: 0.5, peak: 0.4 });
    }
    if (demonic) { const sh = ctx.createWaveShaper(); sh.curve = this.curveHard; chain.connect(sh); chain = sh; }
    chain.connect(d);
    const p0 = child ? 290 : pitch;
    let tt = 0.05;
    while (tt < dur) {
      const syl = 0.09 + Math.random() * 0.13;
      const vow = [[700, 1200], [400, 2200], [300, 900], [650, 1700], [500, 1000]][Math.floor(Math.random() * 5)];
      const k = child ? 1.35 : 1;
      f1.frequency.setTargetAtTime(vow[0] * k, t + tt, 0.02); f2.frequency.setTargetAtTime(vow[1] * k, t + tt, 0.02);
      o.frequency.setTargetAtTime(p0 * (0.88 + Math.random() * 0.25) * (demonic ? 0.5 : 1), t + tt, 0.03);
      env.gain.setTargetAtTime(0.7 + Math.random() * 0.3, t + tt, 0.015);
      env.gain.setTargetAtTime(0.05, t + tt + syl * 0.75, 0.02);
      tt += syl + (Math.random() < 0.12 ? 0.22 : 0.01);
    }
    env.gain.setTargetAtTime(0, t + dur, 0.03);
    o.start(t); o.stop(t + dur + 0.3); n.start(t, Math.random()); n.stop(t + dur + 0.3);
  }
  radioBeep() {
    const d = this.dest(null, { verb: 0 }), t = this.t;
    this.noiseBurst(d, { t, dur: 0.18, f: 1800, q: 0.4, peak: 0.25 });
    this.tone(d, { t, f: 1750, dur: 0.07, peak: 0.08, type: 'square' });
  }
  thunder(dist = 1) {
    if (!this.ctx) return;
    const t = this.t + dist * 0.8, d = this.dest(null, { verb: 0.8, bus: this.amb, gain: 1.4 });
    this.noiseBurst(d, { t, dur: 0.25, type: 'lowpass', f: 3000, peak: 0.8 / dist, buf: this.brown });
    for (let i = 0; i < 5; i++) this.noiseBurst(d, { t: t + 0.2 + i * (0.3 + Math.random() * 0.5), a: 0.15, dur: 1.6 + Math.random(), type: 'lowpass', f: 160 + Math.random() * 200, peak: 1.5 / dist, buf: this.brown });
  }
  // susto: crescendo invertido + impacto dissonante
  sting(big = true) {
    const ctx = this.ctx, t = this.t, d = this.dest(null, { verb: 1, gain: big ? 1 : 0.55 });
    const sh = ctx.createWaveShaper(); sh.curve = this.curveSoft; sh.connect(d);
    for (const f of [92.5, 98, 138.6, 185, 196, 277, 554, 587, 1108]) {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f * (1 + (Math.random() - 0.5) * 0.01);
      const g = ctx.createGain(); o.connect(g); g.connect(sh);
      this.gainEnv(g, t, 0.01, 0.07, 1.8); o.start(t); o.stop(t + 2);
    }
    this.noiseBurst(d, { t, dur: 1.2, type: 'highpass', f: 2000, peak: 0.6 });
    this.tone(d, { t, f: 60, fEnd: 25, dur: 1.2, peak: 1.5 });
  }
  riser(dur = 2) {
    const d = this.dest(null, { verb: 0.8 }), t = this.t;
    const s = this.src(this.white), bp = this.filt('bandpass', 300, 3), g = this.ctx.createGain();
    bp.frequency.exponentialRampToValueAtTime(6000, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + dur); g.gain.setValueAtTime(0, t + dur + 0.01);
    s.connect(bp); bp.connect(g); g.connect(d); s.start(t); s.stop(t + dur + 0.05);
  }
  hit() {
    const d = this.dest(null, { verb: 0.3 }), t = this.t;
    this.tone(d, { t, f: 120, fEnd: 40, dur: 0.25, peak: 1.4 });
    this.noiseBurst(d, { t, dur: 0.2, type: 'lowpass', f: 1500, peak: 1, buf: this.brown });
    this.deaf.frequency.cancelScheduledValues(t); this.deaf.frequency.setValueAtTime(500, t); this.deaf.frequency.exponentialRampToValueAtTime(20000, t + 1.2);
  }
  fleshHit(pos) { const d = this.dest(pos, { verb: 0.3 }); this.noiseBurst(d, { dur: 0.08, type: 'lowpass', f: 900, peak: 1, buf: this.pink }); this.tone(d, { f: 100, fEnd: 50, dur: 0.1, peak: 0.6 }); }

  // ---------- loops posicionais ----------
  loop(kind, pos, vol = 1) {
    if (!this.ctx) return { stop() {}, set() {} };
    const ctx = this.ctx, d = this.dest(pos, { verb: 0.5, gain: vol, ref: kind === 'flies' ? 0.6 : 1.2 });
    const nodes = []; let timer = null, alive = true;
    const t = this.t;
    if (kind === 'flies') {
      for (let i = 0; i < 4; i++) {
        const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 170 + i * 23;
        const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = 0.3 + Math.random(); lg.gain.value = 25;
        lfo.connect(lg); lg.connect(o.frequency);
        const am = ctx.createOscillator(), ag = ctx.createGain(), g = ctx.createGain(); am.frequency.value = 0.5 + Math.random() * 2; ag.gain.value = 0.04; g.gain.value = 0.04;
        am.connect(ag); ag.connect(g.gain);
        const bp = this.filt('bandpass', 400, 1); o.connect(bp); bp.connect(g); g.connect(d);
        o.start(); lfo.start(); am.start(); nodes.push(o, lfo, am);
      }
    } else if (kind === 'tv') {
      const s = this.src(this.white, true); const bp = this.filt('bandpass', 3500, 0.4); const g = ctx.createGain(); g.gain.value = 0.12;
      s.connect(bp); bp.connect(g); g.connect(d); s.start(); nodes.push(s);
      const o = ctx.createOscillator(); o.frequency.value = 15734; const og = ctx.createGain(); og.gain.value = 0.004; o.connect(og); og.connect(d); o.start(); nodes.push(o);
    } else if (kind === 'phone') {
      // campainha mecânica de telefone antigo
      const bell = () => {
        if (!alive) return;
        const t0 = this.t;
        for (const f of [1320, 1660]) {
          const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
          const am = ctx.createOscillator(); am.type = 'square'; am.frequency.value = 22; const ag = ctx.createGain(); ag.gain.value = 0.25;
          const g = ctx.createGain(); g.gain.value = 0.25; am.connect(ag); ag.connect(g.gain);
          o.connect(g); g.connect(d); o.start(t0); am.start(t0); o.stop(t0 + 1.1); am.stop(t0 + 1.1);
        }
        timer = setTimeout(bell, 3600);
      };
      bell();
    } else if (kind === 'hum') {
      // canção de ninar cantarolada (melodia original)
      const notes = [64, 67, 69, 67, 64, 62, 64, 0, 64, 67, 71, 69, 67, 64, 62, 0];
      let i = 0;
      const step = () => {
        if (!alive) return;
        const n = notes[i++ % notes.length], t0 = this.t;
        if (n) {
          const f = 440 * Math.pow(2, (n - 69) / 12);
          const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
          const vib = ctx.createOscillator(), vg = ctx.createGain(); vib.frequency.value = 5.5; vg.gain.value = f * 0.012; vib.connect(vg); vg.connect(o.frequency);
          const lp = this.filt('lowpass', 1400, 0.5), f1 = this.filt('bandpass', 500, 3), g = ctx.createGain();
          o.connect(lp); lp.connect(g); o.connect(f1); f1.connect(g); g.connect(d);
          g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(0.25, t0 + 0.08); g.gain.setTargetAtTime(0, t0 + 0.5, 0.1);
          o.start(t0); vib.start(t0); o.stop(t0 + 0.9); vib.stop(t0 + 0.9);
        }
        timer = setTimeout(step, 520 + Math.random() * 40);
      };
      step();
    } else if (kind === 'fire') {
      const s = this.src(this.brown, true), lp = this.filt('lowpass', 900, 0.5), g = ctx.createGain(); g.gain.value = 0.5;
      s.connect(lp); lp.connect(g); g.connect(d); s.start(); nodes.push(s);
      const crack = () => { if (!alive) return; this.noiseBurst(d, { dur: 0.02, f: 2000 + Math.random() * 3000, q: 2, peak: 0.3 + Math.random() * 0.5 }); timer = setTimeout(crack, 40 + Math.random() * 200); };
      crack();
    } else if (kind === 'drip') {
      const drip = () => { if (!alive) return; this.tone(d, { f: 900 + Math.random() * 600, fEnd: 1800, dur: 0.05, peak: 0.25 }); timer = setTimeout(drip, 300 + Math.random() * 900); };
      drip();
    } else if (kind === 'fridge') {
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 50; const lp = this.filt('lowpass', 200, 1), g = ctx.createGain(); g.gain.value = 0.06;
      o.connect(lp); lp.connect(g); g.connect(d); o.start(); nodes.push(o);
    } else if (kind === 'breathing') {
      // respiração de criatura no escuro
      const b = () => {
        if (!alive) return; const t0 = this.t;
        this.noiseBurst(d, { t: t0, a: 0.5, dur: 0.6, f: 700, q: 2, peak: 0.5, buf: this.pink });
        this.noiseBurst(d, { t: t0 + 1.2, a: 0.2, dur: 1.0, f: 450, q: 2, peak: 0.6, buf: this.pink });
        timer = setTimeout(b, 2600);
      };
      b();
    } else if (kind === 'swing') {
      const sw = () => { if (!alive) return; this.creak(pos, 1.4, 0.18, 0.6); timer = setTimeout(sw, 2400 + Math.random() * 600); };
      sw();
    }
    const h = {
      stop: () => {
        alive = false; clearTimeout(timer);
        d.gain.setTargetAtTime(0, this.t, 0.05);
        setTimeout(() => { nodes.forEach(n => { try { n.stop(); } catch (e) {} }); d.disconnect(); }, 400);
        this.loops.delete(h);
      },
      set: (v) => d.gain.setTargetAtTime(v, this.t, 0.1),
      move: (p) => { if (d.panner) { d.panner.positionX.value = p.x; d.panner.positionY.value = p.y; d.panner.positionZ.value = p.z; } },
    };
    this.loops.add(h);
    return h;
  }
  duck(v, tau = 0.5) { if (this.ctx) this.amb.gain.setTargetAtTime(v, this.t, tau); }
  stopAllLoops() { [...this.loops].forEach(l => l.stop()); }
  suspend(on) { if (this.ctx) on ? this.ctx.suspend() : this.ctx.resume(); }
}
