// Pós-processamento: simula o sensor de uma câmera corporal barata em baixa luz.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

const BodycamShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    res: { value: new THREE.Vector2(1, 1) },
    distort: { value: 0.22 },
    chroma: { value: 0.012 },
    grain: { value: 0.07 },
    flash: { value: 0 },
    damage: { value: 0 },
    interference: { value: 0 },
    exposure: { value: 1 },
    blackout: { value: 0 },
    saturation: { value: 0.75 },
    sharpen: { value: 0.35 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float time, distort, chroma, grain, flash, damage, interference, exposure, blackout, saturation, sharpen;
    uniform vec2 res; varying vec2 vUv;
    float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
    vec2 barrel(vec2 uv, float k){ vec2 c = uv-0.5; float r2 = dot(c,c); float f = 1.0 + k*r2 + k*0.6*r2*r2; return 0.5 + c*f/(1.0+k*0.32); }
    vec3 samp(vec2 uv){ return texture2D(tDiffuse, uv).rgb; }
    void main(){
      vec2 uv = vUv;
      float tf = floor(time*24.0);
      // interferência eletromagnética: linhas deslocadas, típica de sensor CMOS perto de campo forte
      float band = step(1.0 - interference*0.45, hash(vec2(floor(uv.y*40.0), tf)));
      uv.x += (hash(vec2(floor(uv.y*res.y/2.0), tf)) - 0.5) * 0.06 * interference * band;
      uv.y += (hash(vec2(tf, 3.0)) - 0.5) * 0.01 * interference * step(0.92, hash(vec2(tf, 7.0)));
      vec2 d = barrel(uv, distort);
      vec2 c = d - 0.5;
      float ca = chroma * (0.3 + dot(c,c)*4.0) + interference*0.012*band;
      vec3 col;
      col.r = samp(d + c*ca).r;
      col.g = samp(d).g;
      col.b = samp(d - c*ca).b;
      // nitidez artificial da câmera (halo de sharpen digital)
      vec2 px = 1.0/res;
      vec3 blur = (samp(d+vec2(px.x,0.0)) + samp(d-vec2(px.x,0.0)) + samp(d+vec2(0.0,px.y)) + samp(d-vec2(0.0,px.y)))*0.25;
      col += (col - blur) * sharpen;
      if (d.x<0.0||d.x>1.0||d.y<0.0||d.y>1.0) col = vec3(0.0);
      col *= exposure;
      float lum = dot(col, vec3(0.299,0.587,0.114));
      // sensor em baixa luz: cor some nas sombras
      float sat = saturation * mix(0.15, 1.0, smoothstep(0.0, 0.3, lum));
      col = mix(vec3(lum), col, sat);
      col += vec3(-0.006, 0.004, 0.006) * (1.0 - smoothstep(0.0, 0.15, lum));
      // ruído de sensor dependente da luminância
      float g = hash(vUv*res + fract(time*13.17)*311.0) - 0.5;
      float g2 = hash(floor(vUv*res*0.5) + fract(time*7.31)*97.0) - 0.5;
      float gAmt = grain * (0.35 + 1.4*(1.0 - smoothstep(0.0, 0.45, lum)));
      col += vec3(g*0.65 + g2*0.35) * gAmt;
      col += (vec3(hash(vUv*res+time), hash(vUv*res+time*1.37), hash(vUv*res+time*2.11)) - 0.5) * gAmt * 0.35;
      // piso preto levantado (compressão de vídeo)
      col = max(col, vec3(0.008));
      // vinheta da lente grande-angular
      float v = smoothstep(1.05, 0.32, length(c*vec2(1.25, 1.0))*1.25);
      col *= mix(0.25, 1.0, v);
      // dano: borda vermelha pulsante + dessaturação
      float e = smoothstep(0.2, 0.75, length(c*vec2(1.2,1.0)));
      col = mix(col, vec3(lum*0.6, 0.0, 0.0) + vec3(0.16,0.0,0.0)*e, clamp(damage*e*1.3, 0.0, 0.85));
      // barras de interferência
      col += vec3(band * interference * 0.08 * hash(vec2(tf, floor(uv.y*200.0))));
      float roll = fract(vUv.y*1.5 - time*0.7);
      col *= 1.0 - interference * 0.25 * smoothstep(0.0, 0.03, roll) * smoothstep(0.08, 0.03, roll);
      col = mix(col, vec3(1.0, 0.98, 0.95), flash);
      col *= 1.0 - blackout;
      gl_FragColor = vec4(col, 1.0);
    }`,
};

export function createPost(renderer, scene, camera) {
  const size = renderer.getSize(new THREE.Vector2());
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const after = new AfterimagePass(0.38);
  composer.addPass(after);
  const bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), 0.4, 0.55, 0.85);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const cam = new ShaderPass(BodycamShader);
  composer.addPass(cam);
  const u = cam.uniforms;
  const api = {
    composer, u, after, bloom,
    setSize(w, h, pr) { composer.setPixelRatio(pr); composer.setSize(w, h); u.res.value.set(w * pr, h * pr); },
    render(dt, t) { u.time.value = t; composer.render(dt); },
  };
  return api;
}
