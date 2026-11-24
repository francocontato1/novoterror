// Carregamento de texturas fotográficas (Poly Haven / CC0), modelos glTF e céu HDR.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

const BASE = './assets/';
export const TEXTURES = [
  'decrepit_wallpaper', 'peeling_painted_wall', 'worn_plaster_wall', 'plastered_wall_03', 'long_white_tiles', 'interior_tiles',
  'worn_tile_floor', 'terracotta_floor_tiles', 'old_wood_floor', 'wood_floor_worn', 'concrete_floor_worn_001', 'concrete_wall_003',
  'brown_mud_leaves_01', 'weathered_planks', 'clay_roof_tiles', 'rough_pine_door', 'wood_cabinet_worn_long', 'dirty_carpet', 'damaged_plaster',
];
export const MODELS = [
  'Sofa_01', 'Television_01', 'dining_table', 'dining_chair_02', 'old_bed_frame', 'ClassicNightstand_01', 'vintage_cabinet_01', 'power_box_01',
  'lightbulb_01', 'wooden_bookshelf_worn', 'wooden_crate_01', 'Barrel_01', 'trashbag', 'ammo_box', 'hanging_picture_frame_01', 'dead_tree_trunk',
  'dead_tree_trunk_02', 'plastic_monobloc_chair_01', 'rubber_boots', 'mantel_clock_01', 'drawer_cabinet', 'painted_wooden_cabinet', 'wooden_bowl_01', 'pot_enamel_01',
];

export async function loadAssets(renderer, onProgress) {
  const manager = new THREE.LoadingManager();
  let total = 0, done = 0;
  const tick = () => { done++; onProgress && onProgress(done / Math.max(1, total)); };
  const tl = new THREE.TextureLoader(manager);
  const gl = new GLTFLoader(manager);
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const A = { tex: {}, models: {}, env: null, head: null, headMaps: {} };

  const loadTex = (url, srgb) => { total++; return new Promise((res) => tl.load(url, (t) => { t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = aniso; tick(); res(t); }, undefined, () => { tick(); res(null); })); };
  const jobs = [];
  for (const n of TEXTURES) {
    jobs.push(Promise.all([loadTex(`${BASE}tex/${n}/diff.jpg`, true), loadTex(`${BASE}tex/${n}/nor_gl.jpg`, false), loadTex(`${BASE}tex/${n}/rough.jpg`, false)])
      .then(([map, normalMap, roughnessMap]) => { A.tex[n] = { map, normalMap, roughnessMap }; }));
  }
  for (const n of MODELS) {
    total++;
    jobs.push(new Promise((res) => gl.load(`${BASE}models/${n}/${n}.gltf`, (g) => {
      g.scene.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; if (o.material.map) o.material.map.anisotropy = aniso; } });
      A.models[n] = g.scene; tick(); res();
    }, undefined, (e) => { console.warn('modelo', n, e); tick(); res(); })));
  }
  total++;
  jobs.push(new Promise((res) => gl.load(`${BASE}human/LeePerrySmith.glb`, (g) => { A.head = g.scene.children[0]; tick(); res(); }, undefined, () => { tick(); res(); })));
  jobs.push(loadTex(`${BASE}human/head_col.jpg`, true).then((t) => (A.headMaps.map = t)));
  jobs.push(loadTex(`${BASE}human/head_nor.jpg`, false).then((t) => (A.headMaps.normalMap = t)));
  jobs.push(loadTex(`${BASE}human/head_spec.jpg`, false).then((t) => (A.headMaps.spec = t)));
  total++;
  jobs.push(new Promise((res) => new RGBELoader(manager).load(`${BASE}hdr/night.hdr`, (t) => {
    t.mapping = THREE.EquirectangularReflectionMapping;
    const pm = new THREE.PMREMGenerator(renderer); A.env = pm.fromEquirectangular(t).texture; t.dispose(); pm.dispose(); tick(); res();
  }, undefined, () => { tick(); res(); })));
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
