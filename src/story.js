// Roteiro, eventos e checkpoints.
import * as THREE from 'three';
import { buildHumanoid } from './creatures.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const BY = -3;

const DIARY = `
<p class="date">12 de agosto de 1961</p>
<p>O doutor de Curvelo disse que o menino não passa desta semana. O Antônio tem seis anos e já não abre os olhos. Fui na encruzilhada do jeito que a minha mãe ensinou.</p>
<p class="date">13 de agosto de 1961</p>
<p>Ele veio. É alto e não tem rosto. Disse que cura o menino se eu der outro em troca. Eu prometi o primeiro neto, que nem existia ainda. Deus me perdoe, eu escolhi.</p>
<p class="date">1978</p>
<p>O Tiago nasceu e não chorou. Nunca chorou. O moço disse que vem buscar quando ele fizer vinte e cinco anos. Disse que dívida não morre. Passa.</p>
<p class="date">1998 (letra tremida)</p>
<p>Estou indo e ele ainda vem toda noite. Diz que paguei pouco. Que agora quer os juros, a família inteira. Se alguém achar isto: queima o altar. O fogo fecha a porta. Mas ele vai querer quem acender.</p>
<p class="blood">QUEM ACENDE, PAGA.</p>`;

export class Story {
  constructor(G) {
    this.G = G; this.flags = {}; this.timers = []; this.gen = 0; this.cur = null; this.t = 0;
    this.hasFuse = false; this.hasKey = false;
    const S = this.steps = {};
    const G_ = G;
    const L = () => G_.level, P = () => G_.player, A = () => G_.audio;

    // ------------------------------------------------------------ CHEGADA
    S.arrive = {
      cp: { pos: V(7.2, 0, -9.0), yaw: Math.PI },
      enter: (respawn) => {
        G.lightsOn = false; L().props.car.sirenOn = true; L().props.doors.front.target = 0.12; L().props.doors.front.locked = false;
        G.mother.show(false); G.mother.setState('hidden');
        this.placeFather();
        G.tensionBase = 0.05;
        this.after(1.5, () => G.objective('Verificar a residência dos Vasconcelos'));
        this.after(3, () => G.say('SD SILVA', 'Duarte, a central confirmou. Ninguém atende nesse endereço desde sábado.', 4.2, 'radio'));
        this.after(8, () => G.say('SD SILVA', 'O vizinho disse que ouviu gritaria... e uma menina cantando a noite inteira.', 4.5, 'radio'));
        this.after(13.5, () => G.say('SD SILVA', 'Vou ficar aqui na viatura esperando o reforço. Qualquer coisa, chama.', 4, 'radio'));
        this.after(26, () => { if (this.cur === 'arrive') { A().thunder(0.7); G.lightning(); } });
      },
      update: () => {
        const p = P().pos;
        if (!this.flags.calledOut && p.z > -3) { this.flags.calledOut = true; G.say('VOCÊ', 'Polícia Militar! Dona Lúcia? Seu Antônio?', 2.8, 'self'); this.after(3.2, () => A().creak(V(4, 2.6, 3), 1.2, 0.6, 0.7)); }
        if (L().room(p.x, p.z) === 'sala') this.go('sala');
      },
    };

    // ------------------------------------------------------------ SALA
    S.sala = {
      enter: () => {
        G.objective('Procurar os moradores');
        G.tensionBase = 0.12;
        this.after(2.5, () => G.say('VOCÊ', 'Meu Deus... que cheiro é esse.', 2.6, 'self'));
        this.after(25, () => { if (!this.flags.needPower) { G.objective('Encontrar o quadro de luz'); this.flags.needPower = true; } });
      },
      update: () => {},
    };

    // ------------------------------------------------------------ TELEFONE
    S.phone = {
      cp: { pos: V(12.5, 0, 1.6), yaw: Math.PI / 2 },
      enter: (respawn) => {
        G.lightsOn = false; this.hasFuse = false;
        G.mother.show(false); G.mother.hp = 3; G.mother.setState('hidden');
        this.placeFather();
        G.tensionBase = 0.2;
        G.objective('Atender o telefone');
        this.ring = A().loop('phone', L().props.phone.pos, 1.2);
        this.flags.phoneAnswered = false;
      },
      update: () => {
        if (this.flags.waitLook) {
          this.waitT = (this.waitT || 0) + G.dt;
          const look = P().pitch > 0.45 && G.mother.isSeen(G.mother.pos.clone().setY(2.4));
          if (look || this.waitT > 7) { this.flags.waitLook = false; this.dropMother(); }
        }
      },
    };

    // ------------------------------------------------------------ LUTA 1
    S.fight1 = {
      enter: () => {
        G.objective('SOBREVIVA', true);
        G.tensionBase = 0.6;
        G.mother.fleeTo = V(15.3, 0, 7.0);
        G.mother.onFlee = () => {
          G.tensionBase = 0.25;
          this.after(1.5, () => G.say('SD SILVA', 'Duarte! Ouvi disparos! Duarte, responde!', 3.2, 'radio'));
          this.after(5, () => G.say('VOCÊ', 'Tinha alguém no teto... uma mulher. Ela andava de costas, Silva.', 3.8, 'self'));
          this.after(9.3, () => G.say('SD SILVA', 'Sai daí. Eu tô chamando o reforço de novo.', 3, 'radio'));
          this.after(12.5, () => G.say('VOCÊ', 'Ainda tem gente aqui dentro. Preciso de luz.', 3, 'self'));
          this.after(13, () => this.go('fuse'));
        };
      },
      update: () => {},
    };

    // ------------------------------------------------------------ FUSÍVEL
    S.fuse = {
      cp: { pos: V(10.5, 0, 7), yaw: Math.PI / 2 },
      enter: (respawn) => {
        G.lightsOn = false; this.hasFuse = false;
        G.mother.show(false); G.mother.setState('hidden');
        this.placeFather();
        L().props.fuseItem.visible = true; L().props.fuseI.enabled = true;
        G.objective('Encontrar um fusível');
        G.tensionBase = 0.25;
        this.flags.ghostReady = true;
      },
      update: () => {
        const p = P().pos, room = L().room(p.x, p.z);
        if (!this.flags.sawFather && room === 'casal' && G.father.isSeen()) {
          this.flags.sawFather = true; G.tensionBase = 0.45;
          this.after(0.6, () => G.say('VOCÊ', 'Seu Antônio? ...O senhor tá ferido?', 3, 'self'));
          this.after(4, () => A().whisper(G.father.chest().clone(), 2.5, 0.7));
        }
        if (this.hasFuse && G.father.state === 'idle' && !G.father.isSeen()) {
          // vira as costas e ele some
          G.father.headTurned = true; G.father.vanish(); G.father.setState('hunt');
          A().boneCrack(p.clone().setY(1.6), 4); A().sting(false);
          G.objective('Recolocar o fusível no quadro de luz (cozinha)');
        }
      },
    };

    // ------------------------------------------------------------ LUZ
    S.power = {
      cp: { pos: V(13, 0, 1.4), yaw: Math.PI },
      enter: (respawn) => {
        G.lightsOn = true; this.hasFuse = false;
        L().props.fuse.led.material.emissiveIntensity = 3;
        G.father.show(false); G.father.setState('idle'); G.mother.show(false); G.mother.setState('hidden');
        L().props.doors.front.locked = false; L().props.doors.front.target = 0.12;
        G.tensionBase = 0.1;
        if (!respawn) A().powerOn(V(13.5, 1.5, 0.2));
        G.objective('Sair da casa');
        this.after(2.5, () => G.say('SD SILVA', 'Duarte, a ponte do Ribeirão caiu. O reforço só chega de manhã.', 3.8, 'radio'));
        this.after(6.8, () => G.say('SD SILVA', 'Sai dessa casa. Agora.', 2.2, 'radio'));
        this.flags.doorSlammed = false;
      },
      update: () => {
        const p = P().pos;
        if (!this.flags.doorSlammed && p.z < 2.2 && p.z > 0 && p.x > 4.3 && p.x < 7.6) {
          this.flags.doorSlammed = true;
          const D = L().props.doors.front; D.slam(); D.locked = true; D.lockLabel = 'Não abre';
          D.onLocked = () => G.say('VOCÊ', 'Tem alguma coisa segurando do outro lado.', 2.6, 'self');
          A().sting(); G.flickerBulbs(1.5);
          this.after(1.8, () => G.say('VOCÊ', 'Não... não, não, não.', 2.2, 'self'));
          this.after(5, () => A().knock(V(5.9, 1.3, -0.5), 3));
          this.after(7.5, () => G.say('SD SILVA', 'Duarte... eu tô vendo você pela janela da cozinha. Por que você tá parada aí, olhando pra mim?', 5.5, 'radio'));
          this.after(13.5, () => {
            G.objective('Encontrar outra saída');
            L().props.underDoor.visible = true;
            this.drip = A().loop('drip', V(8, 0.5, 10.5), 1);
            this.hum = A().loop('hum', V(15, 1, 10.8), 0.9);
            this.showClara(true);
          });
          this.after(14, () => { G.tensionBase = 0.3; });
        }
        // banheira
        if (this.flags.doorSlammed && !this.flags.tub && Math.hypot(p.x - 7.05, p.z - 11.2) < 1.7) {
          this.flags.tub = true; this.tubScare();
        }
        // espelho
        if (this.flags.doorSlammed && !this.flags.mirror && L().room(p.x, p.z) === 'banheiro' && p.x > 8.6) {
          const f = G.camera.userData.fwd;
          if (f.x > 0.75) { this.flags.mirror = true; this.mirrorScare(); }
        }
        // Clara
        if (this.clara && this.clara.root.visible && !this.flags.claraTalk && Math.hypot(p.x - 15.2, p.z - 10.6) < 2.6 && L().room(p.x, p.z) === 'kid') {
          this.flags.claraTalk = true;
          if (this.hum) { this.hum.stop(); this.hum = null; }
          const cp = V(15.1, 0.9, 10.8);
          G.tensionBase = 0.4;
          this.after(1.2, () => G.say('CLARA', 'Você demorou, tia.', 2.2, 'girl', cp));
          this.after(3.8, () => G.say('CLARA', 'A vó prometeu o tio Tiago pro moço. Pra curar o papai, quando ele era pequeno.', 5, 'girl', cp));
          this.after(9.2, () => G.say('CLARA', 'Mas o moço cobra juros. Agora ele quer todo mundo.', 3.6, 'girl', cp));
          this.after(13.2, () => G.say('CLARA', 'A chave do porão tá no chão. Queima as coisas da vó.', 3.6, 'girl', cp));
          this.after(14.5, () => { L().props.key.visible = true; L().props.keyI.enabled = true; G.objective('Pegar a chave do porão'); A().pickup(); });
        }
      },
    };

    // ------------------------------------------------------------ APAGÃO
    S.blackout = {
      cp: { pos: V(13, 0, 7.2), yaw: 0 },
      enter: (respawn) => {
        this.hasKey = true; L().props.key.visible = false; L().props.keyI.enabled = false;
        G.lightsOn = false; L().props.ceilingHands.visible = true; L().props.underDoor.visible = true;
        L().props.doors.front.locked = true;
        const DB = L().props.doors.dBase; DB.lockLabel = 'Destrancar com a chave';
        DB.onLocked = () => { DB.locked = false; DB.set(1); A().pickup(); G.objective('Descer ao porão'); };
        G.objective('Abrir o porão (fim do corredor)');
        G.tensionBase = 0.45;
        if (!respawn) {
          A().powerOff(); G.flickerBulbs(0.4);
          // Clara é puxada para o teto
          const c = this.clara; if (c) { c.yank = 0.001; A().scream(V(15.2, 1.2, 10.8), { pitch: 1.9, dur: 1.6, vol: 1 }); }
          A().sting();
        } else this.showClara(false);
        // a mãe volta pelo teto do corredor
        G.mother.hp = 3; G.mother.fleeTo = V(1, 0, 7);
        G.mother.onFlee = () => this.after(14, () => { if (this.cur === 'blackout') this.motherReturn(); });
        this.after(respawn ? 3 : 4.5, () => { if (this.cur === 'blackout') { this.motherReturn(); } });
        // o pai também caça
        G.father.show(true); G.father.headTurned = true; G.father.idlePose(); G.father.place(1.2, 0, 7, Math.PI / 2); G.father.setState('hunt');
      },
      update: () => {
        const p = P().pos;
        if (p.x > 16.4) this.go('basement');
      },
    };

    // ------------------------------------------------------------ PORÃO
    S.basement = {
      cp: { pos: V(20.6, BY, 7), yaw: -Math.PI / 2 },
      enter: (respawn) => {
        G.mother.show(false); G.mother.setState('hidden'); G.father.show(false); G.father.setState('idle');
        G.lightsOn = false;
        const DB = L().props.doors.dBase; DB.locked = false;
        if (!respawn) this.after(0.6, () => { DB.slam(); DB.locked = true; DB.lockLabel = 'Emperrada'; DB.onLocked = null; A().sting(false); });
        else { DB.target = 0; DB.open = 0; DB.locked = true; DB.lockLabel = 'Emperrada'; DB.onLocked = null; }
        G.objective('Investigar o porão');
        G.tensionBase = 0.35;
        L().props.diaryI.enabled = true; L().props.burnI.enabled = false;
        this.flags.diaryRead = false;
        this.basementLoops();
      },
      update: () => {
        const p = P().pos;
        if (!L().props.altar.lit && p.x > 21.2) {
          L().props.altar.lit = true; A().noiseBurst(A().dest(V(27, BY + 1, 6)), { dur: 0.6, type: 'lowpass', f: 800, peak: 0.6, buf: A().pink });
          this.after(0.8, () => G.say('VOCÊ', 'Quem acendeu essas velas...?', 2.6, 'self'));
          this.after(4, () => { if (!this.flags.diaryRead) G.objective('Examinar o altar'); });
        }
      },
    };

    // ------------------------------------------------------------ RITUAL
    S.ritual = {
      enter: () => {
        const F = L().props.fire; F.g.visible = true; F.level = 0;
        L().props.altar.lit = false;
        this.fire = A().loop('fire', V(27.3, BY + 1, 6), 1.3);
        G.objective('SOBREVIVA ATÉ O ALTAR QUEIMAR', true);
        G.tensionBase = 0.7;
        A().riser(2.5);
        this.after(2.6, () => { G.credor.emerge(21.6, 11.2); G.shake(0.8); A().sting(); G.flickerT = 3; });
        L().props.wrapped.forEach(w => (w.userData.spin = 0));
      },
      update: (dt) => {
        const F = L().props.fire;
        F.level = Math.min(1, F.level + dt / 38);
        G.credor.speed = 1.4 + F.level * 1.1;
        L().props.wrapped.forEach((w, i) => { w.userData.spin += dt * (0.4 + F.level * 2) * (i % 2 ? 1 : -1); });
        if (F.level >= 1 && G.credor.state !== 'die') {
          G.credor.die(); G.shake(1.2); A().sting();
          this.after(4.2, () => this.go('escape'));
        }
      },
    };

    // ------------------------------------------------------------ FUGA
    S.escape = {
      cp: { pos: V(24.5, BY, 6.5), yaw: -Math.PI / 2 + Math.PI },
      enter: (respawn) => {
        G.credor.show(false);
        const F = L().props.fire; F.g.visible = true; F.level = 0.6;
        if (respawn) this.fire = A().loop('fire', V(27.3, BY + 1, 6), 1.1);
        const DB = L().props.doors.dBase; DB.locked = false; DB.set(1, false); A().doorSlam(DB.pos);
        const FD = L().props.doors.front; FD.locked = false; FD.set(1, false);
        G.objective('SAIA DA CASA', true);
        G.tensionBase = 0.55;
        this.quakeT = 2;
        // tudo o que restou da família vem atrás
        G.mother.hp = 99; G.mother.show(true); G.mother.place(2, 0, 7, Math.PI / 2); G.mother.setState('chase'); G.mother.onFlee = null;
        G.father.show(true); G.father.place(10.5, 0, 3, 0); G.father.setState('hunt');
        this.after(1, () => G.say('VOCÊ', 'Silva! Silva, liga a viatura!', 2.4, 'self'));
      },
      update: (dt) => {
        this.quakeT -= dt;
        if (this.quakeT <= 0) { this.quakeT = 3 + Math.random() * 3; G.shake(0.5); A().growl(P().pos.clone().setY(-1), 2.5, 0.8); G.flickerT = 0.8; const D = L().doors[Math.floor(Math.random() * L().doors.length)]; if (!D.locked && D !== L().props.doors.front && D !== L().props.doors.dBase) { D.target > 0.5 ? D.slam() : D.set(1); } }
        if (G.mother.hp < 96) { G.mother.hp = 99; G.mother.stun = 1.6; }
        const p = P().pos;
        if (p.z < -4.5) this.go('ending');
      },
    };

    // ------------------------------------------------------------ FINAL
    S.ending = {
      enter: () => {
        G.objective(''); G.mother.show(false); G.father.show(false); G.mother.setState('hidden'); G.father.setState('idle');
        P().frozen = true; G.tensionBase = 0.2; L().props.car.sirenOn = false;
        L().props.doors.front.slam();
        A().radioBeep();
        this.after(1.5, () => G.say('SD SILVA', 'Duarte? Duarte, se você tiver ouvindo, responde.', 3.6, 'radio'));
        this.after(5.5, () => G.say('SD SILVA', 'Você entrou nessa casa na sexta-feira. Hoje é segunda.', 4, 'radio'));
        this.after(10, () => G.say('SD SILVA', 'A gente achou a viatura. Não tem ninguém aqui fora, Duarte.', 4, 'radio'));
        this.after(10.5, () => { this.turnBack = true; });
        this.after(13.5, () => { G.endingFigures(); G.lightning(); A().thunder(0.4); A().sting(); });
        this.after(17.5, () => { G.lightning(); A().thunder(0.6); });
        this.after(19.5, () => G.finish());
      },
      update: (dt) => {
        if (this.turnBack) { const p = P(); let d = Math.PI - p.yaw; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; p.yaw += d * dt * 1.2; p.pitch += (0.05 - p.pitch) * dt; }
      },
    };
  }

  // ---------------------------------------------------------------- utilidades
  after(s, fn) { this.timers.push({ t: s, fn, gen: this.gen }); }
  go(name, respawn = false) {
    this.cur = name; this.stepT = 0;
    const S = this.steps[name];
    if (S.cp) this.checkpoint = name;
    S.enter(respawn);
  }
  restore() {
    this.gen++; this.timers = []; this.flags.waitLook = false;
    const G = this.G;
    G.audio.stopAllLoops(); G.startWorldLoops();
    this.ring = null; this.fire = null; this.drip = null; this.hum = null;
    const cp = this.steps[this.checkpoint].cp;
    G.player.respawn(cp.pos, cp.yaw);
    G.player.ammo = 6; G.player.reserve = Math.max(G.player.reserve, 12);
    G.credor.show(false); G.credor.setState('idle');
    if (this.checkpoint !== 'escape' && this.checkpoint !== 'ritual') { const F = G.level.props.fire; F.g.visible = false; }
    if (this.checkpoint === 'power') { this.flags.doorSlammed = false; this.flags.claraTalk = false; this.flags.tub = false; this.flags.mirror = false; if (this.clara) this.clara.root.visible = false; G.level.props.key.visible = false; G.level.props.keyI.enabled = false; }
    this.go(this.checkpoint, true);
  }
  update(dt) {
    this.stepT += dt;
    for (const t of [...this.timers]) {
      if (t.gen !== this.gen) { this.timers.splice(this.timers.indexOf(t), 1); continue; }
      t.t -= dt; if (t.t <= 0) { this.timers.splice(this.timers.indexOf(t), 1); t.fn(); }
    }
    const S = this.steps[this.cur]; if (S && S.update) S.update(dt);
    // Clara sendo puxada
    if (this.clara && this.clara.yank) {
      this.clara.yank += dt;
      const r = this.clara.root; r.position.y += dt * (2 + this.clara.yank * 14);
      this.clara.armL.rotation.x = -2.9; this.clara.armR.rotation.x = -2.9;
      if (r.position.y > 3) { r.visible = false; this.clara.yank = 0; this.G.audio.bodyFall(V(15, 2.7, 10.8)); }
    }
  }

  placeFather() {
    const F = this.G.father;
    F.show(true); F.headTurned = false; F.idlePose(); F.setState('idle');
    F.place(5.5, 0, 11.5, Math.PI / 4);
  }
  showClara(on) {
    const G = this.G;
    if (!this.clara) {
      this.clara = buildHumanoid(G.cmats, { h: 1.1, skin: G.cmats.childSkin, dress: G.cmats.childDress, hair: true, hairLen: 0.45, mouthOpen: 0.3 });
      G.scene.add(this.clara.root);
      const c = this.clara;
      // sentada na beira da cama, de frente para a parede
      c.root.position.set(15.15, 0.0, 10.8); c.root.rotation.y = Math.PI / 2;
      c.hips.position.y = 0.48; c.legL.rotation.x = -1.5; c.legR.rotation.x = -1.5; c.shinL.rotation.x = 1.5; c.shinR.rotation.x = 1.5;
      c.armL.rotation.set(-0.4, 0, 0.1); c.armR.rotation.set(-0.4, 0, -0.1); c.foreL.rotation.x = -0.6; c.foreR.rotation.x = -0.6;
      c.neck.rotation.x = 0.35;
    }
    this.clara.root.visible = on; this.clara.root.position.y = 0; this.clara.yank = 0;
  }
  dropMother() {
    const G = this.G;
    G.mother.drop(); G.audio.scream(G.mother.pos.clone(), { pitch: 1.2, dur: 1.4, vol: 1.3 }); G.audio.sting(); G.shake(0.4);
    this.go('fight1');
  }
  motherReturn() {
    const G = this.G, p = G.player.pos;
    // cai do teto num ponto do corredor longe do jogador
    const spots = [V(2, 0, 7), V(8, 0, 7), V(14, 0, 7), V(4, 0, 3), V(12, 0, 3)];
    const s = spots.filter(q => Math.hypot(q.x - p.x, q.z - p.z) > 5)[0] || spots[0];
    G.mother.hp = 3; G.mother.toCeiling(s.x, s.z);
    G.audio.skitter(V(s.x, 2.6, s.z), 1.2, 0.9);
    this.after(1.4, () => { if (G.mother.state === 'ceiling') { G.mother.drop(); G.audio.scream(G.mother.pos.clone(), { pitch: 1.25, dur: 1.2 }); } });
  }
  tubScare() {
    const G = this.G, A = G.audio;
    const t = this.tiago || (this.tiago = buildHumanoid(G.cmats, { h: 1.75, skin: G.cmats.greySkin, top: G.cmats.greySkin, mouthOpen: 2.6 }));
    G.scene.add(t.root);
    t.root.position.set(7.05, -0.2, 11.5); t.root.rotation.y = 0; t.root.visible = true;
    t.hips.position.y = 0.3; t.legL.rotation.x = -1.57; t.legR.rotation.x = -1.57; t.spine.rotation.x = -1.2;
    t.armL.rotation.set(-0.3, 0, -0.5); t.armR.rotation.set(-0.3, 0, 0.5); t.neck.rotation.x = 0.4;
    const bloodMat = new THREE.MeshStandardMaterial({ color: 0x3a0000, roughness: 0.15 });
    t.root.traverse(m => { if (m.isMesh && !m.userData.bloodied) { m.material = m.material === G.cmats.hole ? m.material : bloodMat; m.userData.bloodied = true; } });
    let k = 0;
    A.splash(V(7.05, 0.5, 11.5), true); A.sting(); G.shake(0.3);
    const step = () => {
      k += 0.016;
      t.spine.rotation.x = -1.2 + Math.min(1, k * 4) * 1.25;
      t.armR.rotation.x = -0.3 - Math.min(1, k * 3) * 1.5;
      t.head.rotation.z = Math.sin(k * 40) * 0.2;
      if (k < 1.4) requestAnimationFrame(step);
      else { A.splash(V(7.05, 0.5, 11.5)); const sink = () => { t.root.position.y -= 0.03; t.spine.rotation.x -= 0.04; if (t.root.position.y > -1.2) requestAnimationFrame(sink); else t.root.visible = false; }; sink(); }
    };
    step();
  }
  mirrorScare() {
    const G = this.G, A = G.audio;
    const f = this.mirrorFig || (this.mirrorFig = buildHumanoid(G.cmats, { h: 1.92, thin: 0.9, armK: 1.35, skin: G.cmats.paleSkin, top: G.cmats.shirt, bottom: G.cmats.pants, mouthOpen: 2.2 }));
    G.scene.add(f.root);
    f.root.traverse(o => o.layers.set(2));
    const p = G.player.pos;
    f.root.position.set(p.x - 0.75, 0, p.z + 0.1); f.root.rotation.y = Math.PI / 2; f.neck.rotation.z = 0.5; f.root.visible = true;
    A.whisper(V(p.x - 0.6, 1.6, p.z), 1.5, 0.9);
    setTimeout(() => { f.root.visible = false; }, 1400);
    setTimeout(() => A.boneCrack(V(p.x - 0.5, 1.7, p.z), 2), 300);
  }
  basementLoops() {
    const A = this.G.audio;
    this.breath = A.loop('breathing', V(22.3, BY + 1, 2.4), 0.6);
    A.loop('swing', V(24.6, BY + 1.5, 10.6), 0.8);
  }

  event(name) {
    const G = this.G, A = G.audio, L = G.level, P = G.player;
    switch (name) {
      case 'teeth': G.say('VOCÊ', '...São dentes. Dentes de gente.', 2.8, 'self'); if (!this.flags.teeth) { this.flags.teeth = true; A.sting(false); } break;
      case 'granny': G.say('VOCÊ', 'Dona Benedita, a avó. Falecida em 98, segundo o vizinho. Quem queimou os olhos da foto?', 4.4, 'self'); break;
      case 'drawings': G.say('VOCÊ', '"O moço." Tem um homem alto em todos os desenhos.', 3.4, 'self'); break;
      case 'switch':
        A.switchClick(V(4.8, 1.2, 0.1));
        if (G.lightsOn) { G.say('VOCÊ', 'Melhor deixar acesa.', 1.8, 'self'); break; }
        G.say('VOCÊ', 'Sem energia.', 1.6, 'self');
        if (!this.flags.needPower) { this.flags.needPower = true; G.objective('Encontrar o quadro de luz'); }
        break;
      case 'fridge': {
        const F = L.props.fridge;
        if (F.target > 0.5) { F.target = 0; A.latch(V(8.7, 1, 0.9)); break; }
        F.target = 1; A.latch(V(8.7, 1, 0.9)); A.creak(V(8.7, 1, 0.9), 0.4, 0.3, 1.3);
        if (!this.flags.fridge) { this.flags.fridge = true; setTimeout(() => { A.sting(false); G.say('VOCÊ', 'Ai, meu Deus...', 1.8, 'self'); }, 600); }
        break;
      }
      case 'drawer':
        if (this.flags.drawer) { G.say('VOCÊ', 'Vazia.', 1.2, 'self'); break; }
        this.flags.drawer = true; P.reserve += 12; A.pickup(); G.say('VOCÊ', 'Munição .38... o Seu Antônio tinha um revólver.', 3, 'self');
        break;
      case 'ammoBox':
        if (this.flags.ammoBox) { G.say('VOCÊ', 'Vazia.', 1.2, 'self'); break; }
        this.flags.ammoBox = true; P.reserve += 18; A.pickup(); G.say('VOCÊ', 'Mais munição.', 1.6, 'self');
        break;
      case 'fusebox':
        if (this.cur === 'fuse' && this.hasFuse) {
          A.switchClick(V(13.5, 1.5, 0.2)); this.go('power'); break;
        }
        if (G.lightsOn) { G.say('VOCÊ', 'Funcionando.', 1.4, 'self'); break; }
        if (this.cur === 'sala' || this.cur === 'arrive') {
          A.latch(V(13.5, 1.5, 0.2));
          G.say('VOCÊ', 'Tiraram o fusível principal. Alguém queria essa casa no escuro.', 3.6, 'self');
          this.after(4.5, () => this.go('phone'));
        } else G.say('VOCÊ', 'Falta o fusível.', 1.6, 'self');
        break;
      case 'phone':
        if (this.cur !== 'phone' || this.flags.phoneAnswered) { A.noiseBurst(A.dest(V(7.8, 1.4, 1.3)), { dur: 0.6, f: 425, q: 20, peak: 0.2 }); G.say('VOCÊ', 'Linha muda.', 1.4, 'self'); break; }
        this.flags.phoneAnswered = true; if (this.ring) this.ring.stop(); this.ring = null;
        A.latch(V(7.8, 1.4, 1.3)); L.props.phone.handset.visible = false;
        P.frozen = false;
        G.objective('');
        this.after(0.8, () => G.say('VOCÊ', 'Alô? Polícia Militar.', 2, 'self'));
        this.after(3, () => G.say('CLARA (telefone)', 'Tia... é a polícia? Você veio buscar a gente?', 3.8, 'phone'));
        this.after(7.2, () => G.say('VOCÊ', 'Clara? Clara, onde você tá?', 2.4, 'self'));
        this.after(10, () => G.say('CLARA (telefone)', 'A mamãe tá brava. Ela não gosta quando tem gente na casa.', 3.8, 'phone'));
        this.after(12.5, () => { G.mother.toCeiling(5.5, 3.6); A.skitter(V(6, 2.6, 2.5), 1.4, 0.7); });
        this.after(14.2, () => G.say('CLARA (telefone)', 'Ela tá bem em cima de você, tia. Não olha pra cima.', 3.6, 'phone'));
        this.after(18, () => { A.noiseBurst(A.dest(null), { dur: 0.4, f: 425, q: 30, peak: 0.25 }); this.flags.waitLook = true; this.waitT = 0; A.boneCrack(V(5.5, 2.6, 3.6), 3); });
        break;
      case 'takeFuse':
        this.hasFuse = true; L.props.fuseItem.visible = false; L.props.fuseI.enabled = false; A.pickup();
        G.say('VOCÊ', 'Um fusível de 30 amperes. Tá ótimo.', 2.4, 'self');
        break;
      case 'takeKey':
        L.props.keyI.enabled = false; A.pickup(); this.go('blackout');
        break;
      case 'diary':
        G.showNote(DIARY, () => {
          if (!this.flags.diaryRead && this.cur === 'basement') {
            this.flags.diaryRead = true; L.props.burnI.enabled = true; L.props.diaryI.enabled = false;
            G.objective('Queimar o altar (segure E)');
            this.after(1, () => G.say('VOCÊ', 'Eu tenho um isqueiro. Que Deus me perdoe também.', 3.2, 'self'));
          }
        });
        break;
      case 'burn':
        L.props.burnI.enabled = false; this.go('ritual'); break;
      case 'carRadio': {
        A.radioBeep();
        if (['arrive', 'sala'].includes(this.cur)) G.say('SD SILVA', 'Fala, Duarte. Tô aqui. Vai lá dar uma olhada.', 2.8, 'radio');
        else G.say('RÁDIO', '(estática)', 1.5, 'radio');
        break;
      }
      case 'flash':
        if (this.flags.ghostReady && !this.flags.ghostSeen && G.revealedGhost) { this.flags.ghostSeen = true; A.sting(false); A.whisper(V(15.3, 1.5, 7), 2, 1); }
        break;
    }
  }
}
