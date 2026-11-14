# Como continuar o Volter numa conversa nova

## Onde está cada coisa
- `fonte/src/volter.html`: o código-fonte do app (uma página só).
- `fonte/build.js`: gera `index.html` (programa instalado e web) e `fonte/dist/artifact.html` (versão do claude.ai). Rode `node fonte/build.js`.
- `data/conteudo.js`: as lições e os dados.
- Versão do claude.ai: https://claude.ai/artifact/StWbbbU4fAAufhz4XJxuwn (publicar `fonte/dist/artifact.html` nesse endereço).
- Instaladores: subir a versão em `package.json`, escrever as notas em `.github/notas-da-versao.md` e enviar para `main`; o GitHub Actions gera os três instaladores.
- Commits no nome de Carlos Almir (não reescrever o histórico).

## Simuladores
Ficam no objeto `SIMS` de `fonte/src/volter.html`. Cada um tem `fam` (família), `title`, `hint`, `init`, `html()` e `draw(r, st)`, usando os auxiliares `sRange`, `sSeg`, `sBtn`, `sMeters`, `SVG`, `so`, `sg` e `sread`. Os simuladores com `fam` aparecem sozinhos na tela Simuladores, agrupados pela família. Os simuladores são construídos do zero, a partir dos temas das animações didáticas; os arquivos Flash não são usados nem distribuídos.

## Lotes de simuladores (animações didáticas)
- [x] **Lote 1 · Medição** (v2.17.0): régua mm/polegada, micrômetro, anel graduado, termômetro, pressão (Bourdon, tubo em U, barômetro, vácuo), régua T×P, multímetro, alicate amperímetro, potenciômetro.
- [x] **Lote 2 · Refrigeração e calor** (v2.18.0, 11 simuladores): unidade de calor (caloria e BTU), zero absoluto, dilatação da água, circuito de refrigeração, circuito elétrico do refrigerador, relé PTC, relé voltimétrico, processo de compressão, compressores (alternativo, rotativo, scroll, automotivo, magnético), diagrama pressão-entalpia, válvula de expansão, vazão do capilar, condensador e evaporador automotivos, acumulador de sucção, recolhimento de gás, carga de refrigerante líquido, ciclo reverso (bomba de calor), chiller, Peltier, bomba de vácuo × compressor, ferramentas de tubo (cortador, expansão, curvador, alicate selador, união a frio).
- [x] **Lote 3 · Eletricidade e eletrônica** (v2.19.0, 16 simuladores): estrutura do átomo, circuitos básicos, interruptor momentâneo, paralelo e intermediário, fluorescente, resistividade, lei de Ohm, fusível, ponte de Wheatstone, resistência escalonada, tipos de corrente, geração trifásica, defasagem, sistema trifásico, retificadores, diodo (curva e sentido da corrente), capacitor, fonte chaveada, transistor unijunção, LDR, VDR, termistor, flip-flop, circuito de memória, elemento lógico, bateria, aterramento, dispositivo DR, alta tensão do micro-ondas, geração de imagem e monitor.
- [ ] **Lote 4 · Motores, comandos, pneumática e máquinas**: bobinado e fechamento do motor trifásico, 4 polos, chave reversora manual, disjuntor cíclico, partida direta, chave com boia, reversão, estrela-triângulo, partidas consecutivas, compensadora, Dahlander, frenagens, chave série-paralelo, automação sequencial, circuito de controle, sensores (capacitivo, magnético, indutivo, reflexivo), propriedades do ar, geração de vácuo, distribuidores, cilindro de simples ação, levantamento de carga, comando de registro, punção, serra, guilhotina e porta pneumáticas, injetora de plástico, prensa excêntrica, máquina de lavar, vending machine, golpe de aríete, ignição convencional, divisor universal, soldagem (oxiacetilênica e polietileno).

## Mensagem para começar cada lote numa conversa nova
> Continue os simuladores do Volter. Siga o arquivo docs/CONTINUAR.md do repositório almircs/volter: faça o próximo lote que estiver sem [x], teste, publique no claude.ai, gere os instaladores e marque o lote como feito.
