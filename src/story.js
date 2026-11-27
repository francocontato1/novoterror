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
      update: (dt) => {
        const p = P().pos;
        if (!this.flags.calledOut && p.z > -3) { this.flags.calledOut = true; G.say('VOCÊ', 'Polícia Militar! Dona Lúcia? Seu Antônio?', 2.8, 'self'); this.after(3.2, () => A().creak(V(4, 2.6, 3), 1.2, 0.6, 0.7)); }
        // susto 1: uma silhueta atravessa o corredor, atrás da porta entreaberta
        if (!this.flags.passer && p.z < -5.4 && p.z > -8.5) {
          this.flags.passer = true;
          this.after(2 + Math.random() * 2, () => {
            if (this.cur !== 'arrive') return;
            const F = this.passFig || (this.passFig = buildHumanoid(G.cmats, { h: 1.8, thin: 0.9, skin: G.cmats.ghost, top: G.cmats.ghost, bottom: G.cmats.ghost }));
            G.scene.add(F.root); F.root.visible = true;
            F.root.position.set(4.4, 0, 1.9); F.root.rotation.y = -Math.PI / 2; F.spine.rotation.x = 0.1;
            F.legL.rotation.x = 0; F.legR.rotation.x = 0;
            A().footstep('wood', V(4.4, 0.05, 1.9), 0.5);
            let k = 0;
            const walk = () => {
              k += 0.016; F.root.position.x = 4.4 + k * 1.9; F.root.rotation.z = Math.sin(k * 22) * 0.03;
              if (k < 1.1) requestAnimationFrame(walk);
              else { F.root.visible = false; A().sting && A().sting(false); A().doorClose && A().play('doorClose', V(7, 1.4, 1.9), { vol: 0.7, verb: 0.8 }); }
            };
            walk();
            this.after(1.2, () => G.say('VOCÊ', '...Tem alguém andando aí dentro.', 2.4, 'self'));
          });
        }
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
        // susto 2: a TV estoura num estalo e morre... e volta sozinha, chiando mais alto
        this.after(9, () => {
          if (this.cur !== 'sala') return;
          const tv = L().props.tv;
          tv.on = false; tv.tvLight.intensity = 0;
          A().noiseBurst(A().dest(V(3.1, 0.8, 2.2)), { dur: 0.25, f: 2600, q: 3, peak: 0.9 });
          A().tone(A().dest(V(3.1, 0.8, 2.2)), { f: 90, fEnd: 40, dur: 0.3, peak: 0.8 });
          G.flickerT = 0.4;
          this.after(2.4, () => {
            if (this.cur !== 'sala') return;
            tv.on = true; A().whisper(V(3.1, 1.6, 2.2), 1.6, 0.8); A().sting(false);
          });
        });
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
        G.objective('Atender o telefone (sala)');
        if (this.ring) this.ring.stop();
        this.ring = A().loop('phone', L().props.phone.pos, 1.3);
        this.flags.phoneAnswered = false;
      },
      update: () => {
        // o telefone treme na base enquanto toca
        const ph = L().props.phone;
        if (this.ring && ph.handset) { const on = (G.time % 3.6) < 1.1; ph.handset.position.y = 0.145 + (on ? Math.random() * 0.004 : 0); ph.handset.rotation.z = on ? (Math.random() - 0.5) * 0.04 : 0; }
      },
    };

    // ------------------------------------------------------------ SUSPENSE: "ela está em cima de você"
    S.fuse = {
      cp: { pos: V(1.6, 0, 3.4), yaw: -Math.PI / 2 },
      enter: (respawn) => {
        G.lightsOn = false; this.hasFuse = false;
        G.mother.show(false); G.mother.setState('hidden'); G.mother.hp = 3;
        this.placeFather();
        L().props.fuseItem.visible = true; L().props.fuseI.enabled = true;
        G.tensionBase = 0.32;
        this.flags.ghostReady = true;
        const cam = G.camera.position;
        A().duck(0.25, 1.5);
        // 1. silêncio... e o forro range exatamente em cima
        this.after(respawn ? 0.5 : 2.2, () => { const p = P().pos; A().creak(V(p.x, 2.75, p.z), 1.6, 0.9, 0.6); G.ceilingDust(p.x + 0.3, p.z - 0.2, 60); });
        this.after(respawn ? 2 : 4.2, () => { const p = P().pos; G.bloodDrip(p.x + 0.45, p.z + 0.25); });
        this.after(7, () => { A().duck(1, 4); G.say('VOCÊ', 'Tem alguém no forro...', 2.4, 'self'); });
        this.after(10, () => G.say('VOCÊ', 'O fusível. O Seu Antônio deve ter guardado no quarto.', 3.4, 'self'));
        this.after(10.5, () => G.objective('Procurar um fusível no quarto do casal'));
        // 2. algo se arrasta dentro do forro, da sala para o corredor
        this.after(14, () => { for (let i = 0; i < 10; i++) setTimeout(() => A().skitter(V(4 - i * 0.2, 2.85, 3 + i * 0.45), 0.3, 0.55), i * 220); G.ceilingDust(3.5, 4.5, 30); });
      },
      update: (dt) => {
        const p = P().pos, room = L().room(p.x, p.z), f = G.camera.userData.fwd;
        // 3. passos que imitam os seus, atrás de você, no corredor
        if (room === 'hall' && !this.flags.mimic) {
          this.flags.mimic = true; let n = 0;
          const step = () => {
            if (this.cur !== 'fuse' || n++ > 5) return;
            const pp = P().pos, moving = Math.hypot(P().vel.x, P().vel.z) > 0.4;
            if (moving) { const ff = G.camera.userData.fwd; A().footstep('wood', V(pp.x - ff.x * 2.6, 0.05, pp.z - ff.z * 2.6), 0.6); }
            setTimeout(step, 560);
          };
          setTimeout(step, 900);
        }
        // 4. vislumbre: atravessa o teto no fim do corredor e some
        if (room === 'hall' && !this.flags.glimpse && this.flags.mimic && p.x > 7 && f.x < -0.85 && Math.abs(f.y) < 0.4) {
          this.flags.glimpse = true; this.glimpse = { t: 0 };
          G.mother.toCeiling(1.0, 6.5, 'ceiling'); G.mother.yaw = 0;
          A().skitter(V(1.2, 2.6, 7), 0.8, 0.9);
        }
        if (this.glimpse) {
          this.glimpse.t += dt; const g = this.glimpse.t;
          G.mother.pos.set(1.0 + g * 0.5, 2.68, 6.4 + g * 3.2); G.mother.yaw = 0.2; G.mother.pose(G.time, 1); G.mother.sync();
          if (g > 0.6) { G.mother.show(false); G.mother.setState('hidden'); this.glimpse = null; this.after(1.2, () => G.say('VOCÊ', 'Que porra foi essa...', 2, 'self')); }
        }
        // 5. o pai no canto do quarto: bate a testa na parede, devagar, sem parar
        const F = G.father, FP = F.P, fhead = F.pos.clone().setY(1.7);
        if (F.active && F.state === 'idle' && !this.flags.fatherTurned) {
          this.knockT = (this.knockT ?? 1) - dt;
          if (this.knockT <= 0) {
            this.knockT = 1.9 + Math.random() * 0.3; this.knockAnim = 0;
            const d = A().dest(V(5.75, 1.75, 11.75), { verb: 0.7, gain: 1.1 }); A().tone(d, { f: 95, fEnd: 55, dur: 0.18, peak: 1 }); A().noiseBurst(d, { dur: 0.06, type: 'lowpass', f: 900, peak: 0.7, buf: A().brown });
          }
          if (this.knockAnim !== undefined) { this.knockAnim += dt; const k = this.knockAnim; FP.spine.rotation.x = 0.12 + (k < 0.12 ? k / 0.12 : Math.max(0, 1 - (k - 0.12) / 0.6)) * 0.22; FP.neck.rotation.x = 0.35 + (k < 0.12 ? k / 0.12 : Math.max(0, 1 - (k - 0.12) / 0.6)) * 0.35; }
        }
        if (!this.flags.sawFather && room === 'casal' && F.isSeen()) {
          this.flags.sawFather = true; G.tensionBase = 0.45;
          this.after(0.6, () => G.say('VOCÊ', 'Seu Antônio? ...O senhor tá ferido?', 3, 'self'));
        }
        // chegou perto: as batidas param e a cabeça gira para trás, olhando para você
        if (this.flags.sawFather && !this.flags.fatherTurned && Math.hypot(p.x - F.pos.x, p.z - F.pos.z) < 3.1) {
          this.flags.fatherTurned = true; this.headTurn = 0;
          FP.spine.rotation.x = 0.12; FP.neck.rotation.x = 0.35;
          this.after(1.4, () => { A().boneCrack(fhead, 3); A().play('groanM', fhead, { vol: 1.2, verb: 0.5 }); });
        }
        if (this.headTurn !== undefined && this.headTurn < 1) {
          if (this.headTurn > 0 || this.stepT > 0) this.headTurn = Math.min(1, this.headTurn + dt / 3.2);
          const k = Math.max(0, (this.headTurn - 0.35) / 0.65);
          FP.head.rotation.y = Math.PI * (k < 1 ? k * k * (3 - 2 * k) : 1) * 0.98;
          if (k > 0.45 && !this.flags.turnCrack) { this.flags.turnCrack = true; A().boneCrack(fhead, 2); }
          if (this.headTurn >= 1) { A().whisper(fhead, 2.5, 0.8); }
        }
        // 6. pegou o fusível, virou as costas para sair... ela cai na sua frente
        if (this.hasFuse && !this.flags.scared) {
          this.fuseT = (this.fuseT || 0) + dt;
          const ns = V(4.35, 1.2, 11.65), cam = G.camera.position;
          const toNs = ns.clone().sub(cam).normalize();
          if (this.fuseT > 0.9 && f.dot(toNs) < -0.1) {
            this.flags.scared = true;
            G.father.show(false); G.father.setState('idle');
            this.faceScare(() => this.go('fight1'));
          }
        }
      },
    };

    // ------------------------------------------------------------ LUTA 1: ela caça pelo teto
    S.fight1 = {
      cp: { pos: V(3, 0, 9.3), yaw: 0 },
      enter: (respawn) => {
        G.lightsOn = false; this.hasFuse = true;
        L().props.fuseItem.visible = false; L().props.fuseI.enabled = false;
        G.father.show(false); G.father.setState('idle');
        G.objective('SOBREVIVA. Leve o fusível até o quadro de luz', true);
        G.tensionBase = 0.55;
        G.mother.fleeTo = V(15.3, 0, 7.0);
        if (respawn) G.mother.hunt(14.5, 7);
        else { const p = P().pos; G.mother.hunt(p.x, p.z); G.mother.retreatTo = V(13, 0, 7); G.mother.setState('ceilRetreat'); G.mother.atkCD = 3; }
        G.mother.onFlee = () => {
          G.tensionBase = 0.25;
          this.after(1.5, () => G.say('SD SILVA', 'Duarte! Ouvi disparos! Duarte, responde!', 3.2, 'radio'));
          this.after(5, () => G.say('VOCÊ', 'Uma mulher... andando no teto, Silva. No teto.', 3.6, 'self'));
          this.after(9, () => G.say('SD SILVA', 'Sai daí. Eu tô chamando o reforço de novo.', 3, 'radio'));
          this.after(10, () => { if (this.cur === 'fight1') G.objective('Recolocar o fusível no quadro de luz (cozinha)'); });
        };
      },
      update: () => {},
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
      update: (dt) => {
        const p = P().pos;
        // susto 3: as lâmpadas vão queimando, uma a uma, com estalo de vidro
        if (this.flags.doorSlammed) {
          this.popT = (this.popT ?? 10) - dt;
          if (this.popT <= 0) {
            this.popT = 7 + Math.random() * 8;
            const alive = L().bulbs.filter((b) => !b.dead);
            if (alive.length > 2) {
              const b = alive[Math.floor(Math.random() * alive.length)];
              b.dead = true; G.flickerBulbs(0.7);
              A().noiseBurst(A().dest(b.pos), { dur: 0.12, f: 3400, q: 4, peak: 0.7 });
              A().tone(A().dest(b.pos), { f: 300, fEnd: 90, dur: 0.15, peak: 0.4 });
            }
          }
        }
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
    this.updateScare(dt);
    this.ambTick(dt);
    // Clara sendo puxada
    if (this.clara && this.clara.yank) {
      this.clara.yank += dt;
      const r = this.clara.root; r.position.y += dt * (2 + this.clara.yank * 14);
      this.clara.armL.rotation.x = -2.9; this.clara.armR.rotation.x = -2.9;
      if (r.position.y > 3) { r.visible = false; this.clara.yank = 0; this.G.audio.bodyFall(V(15, 2.7, 10.8)); }
    }
  }

  // sustos ambientes: entre um evento e outro, a casa nunca fica confortável
  ambTick(dt) {
    if (!['sala', 'phone', 'power', 'blackout', 'basement'].includes(this.cur)) return;
    const G = this.G;
    if (G.level.insideAt(G.player.pos.x, G.player.pos.z) < 0.5) return;
    this.ambT = (this.ambT ?? 8) - dt;
    if (this.ambT > 0) return;
    this.ambT = 10 + Math.random() * 12;
    const A = G.audio, p = G.player.pos, f = G.camera.userData.fwd;
    const behind = V(p.x - f.x * 2.6, 1.5, p.z - f.z * 2.6);
    const around = (r) => V(p.x + (Math.random() - 0.5) * r, 1.3, p.z + (Math.random() - 0.5) * r);
    switch (Math.floor(Math.random() * 6)) {
      case 0: A.whisper(behind, 2.2, 0.7); break;
      case 1: A.knock(around(4), 2 + Math.floor(Math.random() * 2)); break;
      case 2: A.skitter(V(p.x + (Math.random() - 0.5) * 3, 2.6, p.z + (Math.random() - 0.5) * 3), 0.9, 0.8); G.ceilingDust(p.x + (Math.random() - 0.5) * 2, p.z + (Math.random() - 0.5) * 2, 22); break;
      case 3: A.creak(around(5), 1.4, 0.6, 0.8); break;
      case 4: A.scream(V(p.x - f.x * 9, 1.2, p.z - f.z * 9), { pitch: 1.6, dur: 0.5, vol: 0.3 }); break;
      case 5: A.boneCrack(behind, 2); break;
    }
  }
  placeFather() {
    const F = this.G.father;
    this.headTurn = undefined; this.knockAnim = undefined; this.flags.fatherTurned = false; this.flags.turnCrack = false;
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
    G.mother.hunt(s.x, s.z);
    G.audio.skitter(V(s.x, 2.6, s.z), 1.2, 0.9);
  }
  // o susto: ela despenca de cabeça para baixo a um palmo do seu rosto
  faceScare(done) {
    const G = this.G, A = G.audio, cam = G.camera;
    const B = this.scareBody || (this.scareBody = buildHumanoid(G.cmats, { h: 1.62, thin: 0.72, armK: 1.45, fingerK: 2.0, skin: G.cmats.greySkin, dress: G.cmats.gown, dressLen: 0.72, hair: true, hairLen: 0.8, face: 'scare', barelegs: true }));
    B.root.rotation.set(0, 0, Math.PI); cam.add(B.root);
    B.root.traverse((o) => { if (o.isMesh) o.frustumCulled = false; });
    B.armL.rotation.set(-0.5, 0, -1.1); B.armR.rotation.set(-0.5, 0, 1.1); B.foreL.rotation.set(-1.2, 0, 0); B.foreR.rotation.set(-1.2, 0, 0);
    B.legL.rotation.set(0.2, 0, -0.3); B.legR.rotation.set(-0.1, 0, 0.3);
    if (B.hair) B.hair.visible = false;
    G.player.frozen = true;
    A.duck(0.0, 0.05);
    this.scare = { t: 0, B, done, hit: false };
    A.scream(cam.position.clone(), { pitch: 1.55, dur: 1.4, vol: 1.8, rough: 1 }); A.sting(true); A.boneCrack(cam.position.clone(), 4);
    G.shake(1.3); G.scareFx = 1;
  }
  updateScare(dt) {
    const S = this.scare; if (!S) return;
    const G = this.G, A = G.audio; S.t += dt; const t = S.t, B = S.B;
    let off = t < 0.08 ? (1 - t / 0.08) * 1.2 : -0.06 * Math.sin((t - 0.08) * 22) * Math.exp(-(t - 0.08) * 5);
    if (t > 1.05) off = (t - 1.05) * (t - 1.05) * 40;
    B.root.position.set(0.015, 1.56 + off, -0.31);
    B.neck.rotation.set(Math.sin(t * 47) * 0.12, Math.sin(t * 31) * 0.2, Math.sin(t * 59) * 0.22);
    B.head.rotation.set(0, Math.sin(t * 23) * 0.15, Math.sin(t * 71) * 0.1);
    B.armL.rotation.x = -0.5 + Math.sin(t * 40) * 0.15; B.armR.rotation.x = -0.5 - Math.sin(t * 37) * 0.15;
    G.scareFx = t < 0.1 ? 1 : t > 1.0 ? 0.7 : 0.12;
    G.scareExposure = 0.42;
    if (!S.hit && t > 0.3) { S.hit = true; G.player.damage(14, G.camera.position.clone().add(G.camera.userData.fwd)); }
    if (t > 1.3) {
      G.camera.remove(B.root); this.scare = null; G.player.frozen = false; G.flickerT = 1.8; G.scareFx = 0; G.scareExposure = 0;
      A.duck(1, 2); A.skitter(G.camera.position.clone().setY(2.7), 1.0, 1);
      S.done && S.done();
    }
  }
  tubScare() {
    const G = this.G, A = G.audio;
    const t = this.tiago || (this.tiago = buildHumanoid(G.cmats, { h: 1.75, skin: G.cmats.greySkin, top: G.cmats.greySkin, face: 'tiago' }));
    G.scene.add(t.root);
    t.root.position.set(7.05, -0.2, 11.5); t.root.rotation.y = 0; t.root.visible = true;
    t.hips.position.y = 0.3; t.legL.rotation.x = -1.57; t.legR.rotation.x = -1.57; t.spine.rotation.x = -1.2;
    t.armL.rotation.set(-0.3, 0, -0.5); t.armR.rotation.set(-0.3, 0, 0.5); t.neck.rotation.x = 0.4;
    const bloodMat = new THREE.MeshStandardMaterial({ color: 0x3a0000, roughness: 0.15 });
    t.root.traverse(m => { if (m.isMesh && !m.userData.bloodied) { m.material = (m.material === G.cmats.hole || m.material.vertexColors) ? m.material : bloodMat; m.userData.bloodied = true; } });
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
    const f = this.mirrorFig || (this.mirrorFig = buildHumanoid(G.cmats, { h: 1.92, thin: 0.9, armK: 1.35, skin: G.cmats.paleSkin, top: G.cmats.shirt, bottom: G.cmats.pants, face: 'father' }));
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
        if (this.hasFuse && ['fuse', 'fight1'].includes(this.cur)) {
          A.switchClick(V(13.5, 1.5, 0.2)); if (G.mother.active && G.mother.state !== 'hidden') { G.mother.onFlee = null; G.mother.flee(); } this.go('power'); break;
        }
        if (G.lightsOn) { G.say('VOCÊ', 'Funcionando.', 1.4, 'self'); break; }
        if (this.cur === 'sala' || this.cur === 'arrive') {
          A.latch(V(13.5, 1.5, 0.2));
          G.say('VOCÊ', 'Tiraram o fusível principal. Alguém queria essa casa no escuro.', 3.6, 'self');
          if (!this.flags.phoneQueued) { this.flags.phoneQueued = true; this.after(4.5, () => { if (this.cur === 'sala' || this.cur === 'arrive') this.go('phone'); }); }
        } else G.say('VOCÊ', 'Falta o fusível.', 1.6, 'self');
        break;
      case 'phone': {
        if (this.cur !== 'phone' || this.flags.phoneAnswered) { G.say('VOCÊ', 'Linha muda.', 1.4, 'self'); break; }
        this.flags.phoneAnswered = true; if (this.ring) this.ring.stop(); this.ring = null;
        const ph = L.props.phone; A.latch(ph.pos);
        if (ph.handset) { ph.handset.position.y = 0.145; ph.handset.visible = false; }
        G.objective('');
        this.after(0.8, () => G.say('VOCÊ', 'Alô? Polícia Militar.', 2, 'self'));
        this.after(3.2, () => G.say('CLARA (telefone)', 'Tia... é a polícia? Você veio buscar a gente?', 3.8, 'phone'));
        this.after(7.4, () => G.say('VOCÊ', 'Clara? Clara, onde você tá?', 2.4, 'self'));
        this.after(10.2, () => G.say('CLARA (telefone)', 'Escondida. A mamãe não gosta quando tem visita.', 3.6, 'phone'));
        this.after(14.2, () => G.say('CLARA (telefone)', 'Ela tá bem em cima de você agora, tia.', 3.2, 'phone'));
        this.after(17.6, () => G.say('CLARA (telefone)', 'Não olha.', 1.6, 'phone'));
        this.after(19.6, () => { A.latch(ph.pos); A.noiseBurst(A.dest(null), { dur: 2.5, f: 425, q: 30, peak: 0.12 }); if (ph.handset) ph.handset.visible = true; this.go('fuse'); });
        break;
      }
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
