// Carregamento de texturas fotográficas (Poly Haven / CC0), modelos glTF e céu HDR.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const BASE = './assets/';
// em telas de toque as texturas entram em 1K (memória de vídeo limitada); no desktop ficam em 2K
const Q = new URLSearchParams(location.search).get('q') || (matchMedia('(pointer: coarse)').matches ? 'baixa' : 'alta');
const TEXMAX = Q === 'baixa' ? 1024 : Q === 'media' ? 1536 : 2048;
export const TEXTURES = [
  'decrepit_wallpaper', 'peeling_painted_wall', 'worn_plaster_wall', 'plastered_wall_03', 'long_white_tiles', 'interior_tiles',
  'worn_tile_floor', 'terracotta_floor_tiles', 'old_wood_floor', 'wood_floor_worn', 'concrete_floor_worn_001', 'concrete_wall_003',
  'brown_mud_leaves_01', 'weathered_planks', 'rough_pine_door', 'wood_cabinet_worn_long', 'dirty_carpet', 'damaged_plaster',
  'corrugated_iron', 'rusty_metal_02', 'bark_bluegum',
];
export const MODELS = [
  'Sofa_01', 'Television_01', 'dining_table', 'dining_chair_02', 'old_bed_frame', 'ClassicNightstand_01', 'vintage_cabinet_01', 'power_box_01',
  'lightbulb_01', 'wooden_bookshelf_worn', 'wooden_crate_01', 'Barrel_01', 'trashbag', 'ammo_box', 'hanging_picture_frame_01', 'dead_tree_trunk',
  'dead_tree_trunk_02', 'plastic_monobloc_chair_01', 'rubber_boots', 'mantel_clock_01', 'drawer_cabinet', 'painted_wooden_cabinet', 'wooden_bowl_01', 'pot_enamel_01',
];

const R = (base, n) => Array.from({ length: n }, (_, i) => `${base}_0${i + 1}`);
export const SFX = {
  rainIn: ['RAINInt_ForestCabinRain_L01'], rainOut: ['RAINVege_ForestRain_L01'], room: ['AMBHome_RoomTone_L01'], drone: ['DSGNDron_DroneCreepy_02'],
  stepWood: R('FEETHmn_ShoeWoodWalk', 5), runWood: R('FEETHmn_ShoeWoodRun', 5), stepDirt: R('FEETHmn_ShoeDirtWalk', 5), stepConc: R('FEETHmn_ShoeConcreteWalk', 5),
  doorOpen: ['DOORWood_FrontDoorOpen_01'], doorClose: ['DOORWood_FrontDoorClose_01', 'DOORWood_OfficeDoorClose_01'], knob: ['DOORHdwr_FrontDoorKnob_01'], lock: ['DOORHdwr_FrontDoorLock_01'],
  knock: ['DOORKnck_OfficeDoorKnock_01'], unlock: ['MECHLock_DoorUnlockKey_01'], drawer: ['DRWRWood_DrawerOpen_01'],
  switch: ['MECHSwtch_SwitchSmallOn_01', 'MECHSwtch_SwitchSmallOn_02', 'MECHSwtch_SwitchSmallOff_01', 'MECHSwtch_SwitchSmallOff_02'], box: ['METLHndl_ElectricBoxOpen_01'],
  keyDrop: R('OBJKey_KeyDrop', 2), pages: ['PAPRHndl_BookPageTurns_01'], shells: R('BLLTShel_ShellCasingConcrete', 3),
  scream: ['VOXScrm_FemaleScream_01', 'VOXFem_Female01DeathScream_01'], screamShort: ['VOXFem_Female02DeathScream_01'],
  groanF: ['VOXFem_GroanCreepy_01'], groanM: ['VOXMale_GroanCreepy_01'], whisper: ['VOXWhsp_WhispersCreepy_01'], whisperVerb: ['VOXWhsp_WhispersCreepyReverb_01'],
  creak: R('WOODFric_CreaksCreepy', 2), creakVerb: R('WOODFric_CreaksCreepyReverb', 2), bones: R('GOREBone_BonesBreaking', 3), skull: R('GOREBone_SkullCracking', 2),
  squish: R('GORESqsh_BloodSquishSlimy', 2), impact: R('DSGNImpt_ImpactCreepyReverb', 3), strings: R('MUSCStr_StringsCreepy', 2),
  creature: R('CREAMnstr_CreatureCreepy', 3), creatureVerb: R('CREAMnstr_CreatureCreepyReverb', 3), chains: R('CHAINMvmt_ChainsCreepy', 2), clock: ['CLOCKTick_ClockCreepy_01'],
  organ: ['MUSCKeyd_PipeOrganCreepy_01'], scratch: R('METLFric_ScratchCreepy', 2), punch: ['FGHTImpt_PunchHardest_01'], woodDrop: ['WOODImpt_LargeWoodDrop_01'],
  glass: ['GLASBrk_WindowPaneSmallBreak_01'], breathF: ['HMNBrth_FemaleBreathing_01'], breathM: ['HMNBrth_MaleBreathing_OS_01'],
  windTrees: ['WINDVege_LightWindTreesBirds_LOOP_01'], chimes: ['MUSCChim_WindChimes_LOOP_01', 'MUSCChim_WindChimes_LOOP_02'],
  train: ['TRNElec_TrainPassby_OS_01'], drag: ['WOODFric_LargeWoodMetalDrag_OS_01'],
};

export async function loadAssets(renderer, onProgress) {
  const manager = new THREE.LoadingManager();
  let total = 0, done = 0;
  const tick = () => { done++; onProgress && onProgress(done / Math.max(1, total)); };
  const tl = new THREE.TextureLoader(manager);
  const gl = new GLTFLoader(manager);
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const A = { tex: {}, models: {}, env: null, head: null, headMaps: {}, sfxRaw: {} };
  // versão de arquivo único: os recursos vêm embutidos na própria página
  const EMB = window.__EMBED;
  const U = (p) => (EMB && EMB.files[p]) || BASE + p;
  const loadModel = (p, ok, fail) => (EMB && EMB.models[p] ? gl.parse(EMB.models[p], '', ok, fail) : gl.load(BASE + p, ok, undefined, fail));

  const finishTex = (t, srgb, res) => {
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = aniso; tick(); res(t);
  };
  const loadTex = (url, srgb) => { total++; return new Promise((res) => tl.load(url, (t) => {
    const im = t.image;
    if (im && Math.max(im.width, im.height) > TEXMAX && window.createImageBitmap) {
      const k = TEXMAX / Math.max(im.width, im.height);
      createImageBitmap(im, { resizeWidth: Math.round(im.width * k), resizeHeight: Math.round(im.height * k), resizeQuality: 'medium' })
        .then((bm) => { t.image = bm; finishTex(t, srgb, res); })
        .catch(() => finishTex(t, srgb, res));
    } else finishTex(t, srgb, res);
  }, undefined, () => { tick(); res(null); })); };
  const jobs = [];
  for (const n of TEXTURES) {
    jobs.push(Promise.all([loadTex(U(`tex/${n}/diff.jpg`), true), loadTex(U(`tex/${n}/nor_gl.jpg`), false), loadTex(U(`tex/${n}/rough.jpg`), false)])
      .then(([map, normalMap, roughnessMap]) => { A.tex[n] = { map, normalMap, roughnessMap }; }));
  }
  for (const n of MODELS) {
    total++;
    jobs.push(new Promise((res) => loadModel(`models/${n}/${n}.json`, (g) => {
      g.scene.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; if (o.material.map) o.material.map.anisotropy = aniso; } });
      A.models[n] = g.scene; tick(); res();
    }, (e) => { console.warn('modelo', n, e); tick(); res(); })));
  }
  total++;
  jobs.push(new Promise((res) => loadModel('human/LeePerrySmith.json', (g) => { g.scene.traverse((o) => { if (o.isMesh && !A.head) A.head = o; }); tick(); res(); }, () => { tick(); res(); })));
  jobs.push(loadTex(U('human/head_col.jpg'), true).then((t) => (A.headMaps.map = t)));
  jobs.push(loadTex(U('human/head_nor.jpg'), false).then((t) => (A.headMaps.normalMap = t)));
  jobs.push(loadTex(U('human/head_spec.jpg'), false).then((t) => (A.headMaps.spec = t)));
  total++;
  // céu noturno equiretangular (Poly Haven, convertido para JPG) -> mapa de ambiente pré-filtrado
  jobs.push(loadTex(U('hdr/night.jpg'), true).then((t) => {
    if (!t) return;
    t.mapping = THREE.EquirectangularReflectionMapping;
    const pm = new THREE.PMREMGenerator(renderer); A.env = pm.fromEquirectangular(t).texture; t.dispose(); pm.dispose();
  }));
  // corpo humano real da mãe
  total++;
  jobs.push((async () => {
    try {
      const r = await fetch(U('human/female02/body.json')); const data = await r.json();
      const [hair, face, body] = await Promise.all(['hair', 'face', 'body'].map((k) => loadTex(U(`human/female02/${k}.jpg`), true)));
      A.female = { data, imgs: { hair: hair && hair.image, face: face && face.image, body: body && body.image } };
    } catch (e) { console.warn('corpo', e); }
    tick();
  })());
  // sons gravados: baixa agora, decodifica quando o áudio for liberado pelo clique
  for (const [g, list] of Object.entries(SFX)) {
    A.sfxRaw[g] = [];
    for (const n of list) {
      total++;
      jobs.push(fetch(U(`sfx/${n}.mp3`)).then((r) => (r.ok ? r.arrayBuffer() : null)).then((ab) => { if (ab) A.sfxRaw[g].push(ab); tick(); }).catch(() => tick()));
    }
  }
  await Promise.all(jobs);
  return A;
}

// material PBR com escala de mundo (tile em metros) — usa UV já escalado da geometria
export function pbr(A, name, o = {}) {
  const T = A.tex[name] || {};
  const m = new THREE.MeshStandardMaterial({
    map: T.map || null, normalMap: T.normalMap || null, roughnessMap: T.roughnessMap || null,
    roughness: o.rough ?? 1, metalness: o.metal ?? 0, color: o.color ?? 0xffffff, envMapIntensity: o.env ?? 0.35,
  });
  if (m.normalMap) m.normalScale.set(o.nscale ?? 1, o.nscale ?? 1);
  return m;
}

// instancia um modelo: posição no chão, rotação Y, escala opcional; devolve objeto + caixa
export function place(A, name, parent, x, y, z, ry = 0, o = {}) {
  const src = A.models[name];
  if (!src) return null;
  const m = src.clone(true);
  if (o.scale) m.scale.setScalar(o.scale);
  m.rotation.y = ry;
  m.position.set(0, 0, 0);
  m.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(m);
  // assenta a base no y pedido
  m.position.set(x, y - b.min.y, z);
  if (o.tint) m.traverse((q) => { if (q.isMesh) { q.material = q.material.clone(); q.material.color.multiply(new THREE.Color(o.tint)); } });
  if (o.dirty) m.traverse((q) => { if (q.isMesh) { q.material = q.material.clone(); q.material.color.multiplyScalar(o.dirty); } });
  parent.add(m);
  m.updateMatrixWorld(true);
  m.userData.box = new THREE.Box3().setFromObject(m);
  return m;
}
