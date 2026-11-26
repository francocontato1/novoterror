# PONTO CEGO

Jogo de terror em primeira pessoa no navegador, filmado como a gravação recuperada de uma câmera corporal da Polícia Militar.

> Minas Gerais, 14 de março de 2003, 02:47. A família Vasconcelos não é vista há três dias.
> A Cabo Inês Duarte é enviada para verificar a casa. Esta é a gravação da câmera dela.

## Como jogar

```bash
npm install
```

```bash
npm run dev
```

Abra o endereço que aparecer (normalmente `http://localhost:5173`). Use **fones de ouvido** e jogue no escuro.

Para gerar a versão final (pasta `dist/`, que pode ser hospedada em qualquer servidor estático):

```bash
npm run build
```

### Versão de arquivo único

Para gerar um único `PontoCego.html` que abre direto no navegador (duplo clique, sem servidor):

```bash
npm run build && python3 scripts/standalone.py
```

### Controles

| Tecla | Ação |
|---|---|
| WASD | mover |
| Shift | correr (gasta fôlego) |
| Mouse | olhar |
| Clique esquerdo | atirar (revólver .38, 6 tiros) |
| R | recarregar |
| Q ou botão direito | flash da câmera: atordoa as entidades e revela o que os olhos não veem |
| E | interagir (segure para ações longas) |
| F | ligar/desligar a lanterna |
| T | entrar e sair da tela cheia |
| Esc | pausar e soltar o mouse |

No celular: lado esquerdo da tela anda, lado direito olha, botões à direita. No iPhone, para tela cheia, use Compartilhar → Adicionar à Tela de Início.

## Como foi feito

Som, iluminação, roteiro, criaturas e efeitos de câmera são gerados por código. Todas as superfícies usam material fotográfico escaneado em 2K de bibliotecas livres (parede, pisos, azulejo, papel de parede, telhado de zinco corrugado, ferrugem, casca de árvore, lama, tapete, porta), com mapas de rugosidade e normal — veja **Créditos**.

- **Fotografia**: shader de câmera corporal com lente grande-angular (distorção de barril), aberração cromática, ruído de sensor que cresce no escuro, exposição automática (o ganho cai quando a lanterna bate perto de uma parede), rastro de movimento em baixa luz, e interferência eletromagnética que aumenta quando uma entidade se aproxima.
- **Luz**: toda luz tem uma fonte física. Lanterna com padrão de refletor e sombras reais, luz rebatida que simula a iluminação indireta, faróis da viatura atravessando as janelas, relâmpagos, lâmpadas incandescentes e velas.
- **Som**: 100% sintetizado em tempo real com Web Audio e áudio 3D (HRTF). Chuva no telhado de zinco, passos diferentes em cada piso, rangidos de madeira, respiração e batimento que reagem ao medo, disparo com zumbido no ouvido, gritos por síntese de formantes e vozes de rádio.
- **Entidades**: corpos procedurais com articulações e IA com busca de caminho (A*):
  - **A mãe** rasteja pelo teto e pelo chão como uma aranha.
  - **O pai** só se move quando ninguém está olhando para ele.
  - **O Credor** é a coisa que a avó chamou numa encruzilhada em 1961.

## Estrutura

```
src/main.js       renderização, interface, loop principal
src/post.js       shader da câmera corporal
src/level.js      a casa, o porão, o quintal, colisão e navegação
src/player.js     movimento, revólver, lanterna, flash, dano
src/creatures.js  corpos procedurais e IA das entidades
src/story.js      roteiro, eventos e checkpoints
src/audio.js      síntese de som e áudio 3D
src/textures.js   texturas procedurais
```

### Parâmetros de depuração na URL

`?skip` pula a introdução · `?step=basement` começa num checkpoint (`arrive`, `phone`, `fuse`, `power`, `blackout`, `basement`, `escape`) · `?god` invencível · `?scale=0.7` reduz a resolução interna (para máquinas mais fracas) · `?sens=1.5` sensibilidade do mouse.

## Créditos dos recursos

- **Texturas e modelos 3D**: [Poly Haven](https://polyhaven.com) e [ambientCG](https://ambientcg.com), licença CC0 (domínio público), obtidos pelo espelho [zuujis-cc0](https://github.com/zuujis-cc0).
- **Céu noturno HDR**: "Satara Night (no lamps)", Poly Haven, CC0.
- **Cabeça humana escaneada**: "Lee Perry-Smith head" por [Infinite-Realities](https://www.ir-ltd.net/), licença [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), distribuída com os exemplos do three.js. No jogo ela é deformada para criar os rostos das entidades.
- **Sons gravados**: "Oculus Audio Pack 01" por Oculus VR, LLC (https://developers.meta.com/vr/downloads/package/oculus-audio-pack-1/), licença [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via [Meta-open-sound](https://github.com/facebookincubator/Meta-open-sound). Arquivos convertidos para MP3. Na trilha entram, entre outros: chuva interna e externa em loop, passos em cada tipo de piso, portas, sussurros, grito/rangido de criaturas, **vento nas árvores** (com rumble sintético por baixo), **sino de vento do beiral da varanda** (posicional, balança e ao-abafa com o vento), **trem de carga distante** cruzando o vale de vez em quando (filtrado como quem está a quilômetros), respiração masculina gravada e o **arrasto pesado de madeira e metal** do pai quando ele se move sem ninguém olhando.
- **Corpo da mãe**: modelo "female02" da Reallusion iClone, do Google 3D Warehouse, distribuído nos exemplos do three.js. Esqueleto e texturas alterados por código.
- **Superfícies fotográficas em 2K**: [Poly Haven](https://polyhaven.com), CC0 (domínio público) — 21 conjuntos com difusão, normal e rugosidade.
- Motor: [three.js](https://threejs.org) (MIT).
