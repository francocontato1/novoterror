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

## Como foi feito

Tudo é gerado por código, sem nenhum arquivo de imagem ou som externo.

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
