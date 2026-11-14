## Versão 3.2.1: licenças
- O Volter agora tem licença: **MIT** para o código e **Creative Commons BY-NC 4.0** para o conteúdo (artigos, fichas e lições)
- Saíram os documentos antigos de planejamento da época em que o Volter seria uma plataforma de cursos

## Versão 3.2.0: da válvula ao SMD
- **Tema novo em Eletrônica: "Da válvula ao SMD"**, com seis artigos sobre a história da eletrônica de consumo contada pelos aparelhos e pela bancada:
  - panorama e linha do tempo, com o relato "Uma bancada que atravessou tudo"
  - a era das válvulas: rádio super-heteródino, TV preto e branco, flyback e cinescópio, amplificador valvulado
  - o transistor: germânio e silício, rádio a pilha, TV híbrida, amplificador sem transformador e a placa de circuito impresso
  - circuitos integrados: TV em cores PAL-M, varicap e controle remoto, fonte chaveada, 3 em 1 e videocassete
  - a era digital: CD, DVD, microcontrolador, barramento I²C e EEPROM na TV
  - SMD e telas planas: tamanhos e encapsulamentos, solda sem chumbo, LCD, LED, OLED e TV digital

## Versão 3.1.0: inspetor de garrafas vazias
- **Ficha nova em Linha de produção → Sopro, envase e rotulagem:** inspetor de garrafas vazias (EBI) Krones Linatronic, com as estações de inspeção (fundo, boca, rosca, parede lateral, líquido residual), as garrafas de teste e o Linatronic AI com rede neural

## Como instalar

**Windows** — baixe `Instalar-Volter-Windows.exe`, dê dois cliques e siga o instalador.
Se aparecer o aviso azul "O Windows protegeu o computador", clique em **Mais informações → Executar assim mesmo**.

**Mac com chip Apple (M1 a M4)** — baixe `Volter-Mac-chip-Apple-M1-a-M4.zip`, abra o arquivo e arraste o **Volter** para a pasta **Aplicativos**.
Na primeira vez, o Mac avisa que não consegue verificar o Volter, porque ele não tem assinatura paga da Apple. Para liberar:
- **macOS 15 Sequoia ou mais novo:** tente abrir o Volter uma vez e feche o aviso. Depois vá em **Ajustes do Sistema → Privacidade e Segurança**, role até o fim e clique em **Abrir Mesmo Assim** ao lado do aviso do Volter. Confirme com a senha do Mac.
- **macOS 14 Sonoma ou mais antigo:** clique no Volter com o botão direito → **Abrir** → **Abrir**.
- **Se nada disso aparecer** (ou o Mac disser que o app está danificado): abra o **Terminal** e rode `xattr -dr com.apple.quarantine /Applications/Volter.app`, depois abra o Volter de novo.

Isso só é preciso na primeira vez.

**Mac com processador Intel** — mesmo procedimento com `Volter-Mac-Intel.zip`.

Não sabe qual é o seu Mac? Menu  → **Sobre este Mac**: se aparecer "Chip Apple M…", use o primeiro; se aparecer "Processador Intel", use o segundo.

## Versão 3.0.0: o Volter vira um arquivo de conhecimento
- **Sem trilhas:** o menu agora é organizado por **assunto**, e cada assunto abre os seus temas, com artigos e fichas
- **Sete assuntos:** Eletrônica; Elétrica industrial e comandos; Linha de produção; Equipamentos odontológicos; Informática; Programação; Inteligência artificial
- **38 fichas novas**, num formato padronizado (para que serve, como funciona, partes principais, dados típicos e segurança):
  - **Elétrica industrial:** CLP Siemens S7, Profibus e Profinet, inversor de frequência e soft-starter
  - **Linha de produção:** tratamento de água, xaroparia, mixer e carbonatador, limpeza CIP, enchedora KHS por contrapressão, linha asséptica Krones, rotuladora, transportadores e acúmulo, paletizadora convencional, paletização por robô, caldeira a vapor, ar comprimido e refrigeração industrial
  - **Equipamentos odontológicos:** cadeira e equipo, ultrassom, fotopolimerizador, autoclave, cuba ultrassônica, destiladora, compressor odontológico e bomba de vácuo
  - **Informática:** placa-mãe e processador, memória e armazenamento, fonte, vídeo e portas; Windows (estrutura, ferramentas e Registro, PowerShell); Linux (distribuições, terminal e permissões, pacotes e serviços); Apple (Intel e Apple Silicon, macOS, Terminal, Homebrew e Time Machine)
- Todo o conteúdo anterior continua, redistribuído nos assuntos: as lições de eletricidade, eletrônica e IoT em Eletrônica; comandos e instalações em Elétrica industrial; sopradora e robôs KUKA em Linha de produção; programação, dados e carreira em Programação; e as trilhas de IA em Inteligência artificial
- "IA por Profissão" passou a se chamar **Projetos com IA**
- Os temas ainda sem texto aparecem como **A escrever**
- No editor de conteúdo, cada artigo pode ser marcado como **Ficha de equipamento**

## Versão 2.20.0: simuladores de motores, comandos, pneumática e máquinas
- **Tela Simuladores reorganizada:** os grupos ficam em abas (por tema e das lições). Ao abrir um simulador, a lista do grupo fica ao lado, com botões de anterior e próximo, e você continua no mesmo grupo para testar os outros
- **Dezesseis simuladores novos**, montados a partir dos temas das animações didáticas, em três famílias:
  - **Motores e comandos:** motor trifásico (campo girante, número de polos, fechamento das 6 pontas em estrela e triângulo e motor Dahlander); partidas direta, reversão (com e sem intertravamento e chave reversora manual), estrela-triângulo, compensadora e série-paralelo, com o gráfico da corrente; frenagens (livre, contracorrente, injeção de CC e freio eletromagnético), partidas consecutivas e protetor térmico cíclico; bombeamento com chave de boia e golpe de aríete; circuito de comando com intertravamento, temporizador e sequência de esteiras; sensores indutivo, capacitivo, magnético e óptico, com saída PNP e NPN
  - **Pneumática:** propriedades do ar, água no ar comprimido e geração de vácuo com ventosa; válvulas 3/2, 5/2 e 5/3, cilindros de simples e dupla ação e levantamento de carga; aplicações: comando de registro, punção e guilhotina com bimanual, serra e porta com borda sensível
  - **Máquinas e processos:** injetora de plástico, prensa excêntrica com cortina de luz, máquina de lavar com defeitos, vending machine, ignição convencional, cabeçote divisor universal e soldagem oxiacetilênica e de polietileno

## Versão 2.19.0: simuladores de eletricidade e eletrônica
- **Dezesseis simuladores novos na família Eletricidade e eletrônica**, montados a partir dos temas das animações didáticas:
  - estrutura do átomo (camada de valência, condutor, semicondutor e isolante) e resistividade do fio (material, comprimento e bitola)
  - circuitos de iluminação: interruptor simples, pulsador (campainha), paralelo (three-way) e intermediário (four-way), com o caminho energizado
  - lâmpada fluorescente com reator e starter, etapa por etapa, reator eletrônico e os defeitos de starter e lâmpada no fim da vida
  - lei de Ohm no chuveiro: resistência escalonada (verão e inverno), chuveiro na tensão errada e fusível que queima
  - ponte de Wheatstone para medir um resistor e como sensor de balança (extensômetro)
  - tipos de corrente, gerador trifásico, defasagem e fator de potência, ligações estrela e triângulo
  - diodo (curva, polarização, LED e Zener) e retificadores de meia onda, center tap e ponte
  - capacitor: construção, rigidez dielétrica e associação em série e paralelo
  - fonte chaveada com ciclo de trabalho e defeitos (capacitor estufado, realimentação aberta, capacitor de entrada seco)
  - transistor unijunção no oscilador de relaxação
  - sensores LDR, NTC, PTC e varistor (VDR)
  - elemento lógico, flip-flop SR e D, contador binário e memória RAM e Flash
  - bateria: células em série e paralelo, carga e descarga
  - aterramento e DR: quem desarma e quanta corrente passaria por uma pessoa
  - alta tensão do micro-ondas (dobrador, magnétron e o perigo do capacitor carregado)
  - geração de imagem: varredura do tubo, pixels RGB e resolução

## Versão 2.18.0: simuladores de refrigeração e calor
- **Onze simuladores novos na família Refrigeração e calor**, montados a partir dos temas das animações didáticas:
  - calor sensível em caloria, BTU e joule, zero absoluto (lei de Charles) e a dilatação da água perto de 4 °C
  - circuito de refrigeração animado, com a válvula de 4 vias invertendo o ciclo (bomba de calor e degelo) e o papel de cada componente, inclusive o acumulador de sucção
  - circuito elétrico do refrigerador com relé PTC e relé voltimétrico: partida, religada com o PTC quente, protetor térmico e relé com defeito
  - processo de compressão e os compressores alternativo (com o diagrama pressão × volume), rotativo, scroll, automotivo com embreagem e placa inclinada, e centrífugo de mancais magnéticos
  - diagrama pressão-entalpia do R-134a com efeito refrigerante, trabalho, COP e temperatura de descarga
  - válvula de expansão termostática (bulbo solto, bulbo sem carga) e vazão do tubo capilar
  - ar-condicionado automotivo: condensador, evaporador, filtro secador × tubo de orifício com acumulador, ventilador parado e ciclagem anticongelamento
  - recolhimento de gás, vácuo em microns (por que o compressor não serve de bomba de vácuo) e carga de refrigerante líquido pela balança
  - chiller de água gelada (carga em kW e TR), pastilha Peltier e ferramentas para tubo de cobre (cortador, flangeador, expansor, curvador, alicate selador e união a frio)

## Versão 2.17.0: simuladores de medição
- **Nove simuladores novos na família Medição**, montados a partir dos temas das animações didáticas: leitura de escala em milímetro e em polegada, micrômetro, anel graduado, termômetro e escalas Celsius, Fahrenheit e Kelvin, pressão (manômetro Bourdon, tubo em U, barômetro e vácuo em microns), régua de temperatura × pressão de fluidos refrigerantes com cálculo de superaquecimento, uso correto do multímetro (com os erros que queimam o fusível), alicate amperímetro (um fio, fase e neutro juntos para achar fuga, e voltas) e potenciômetro linear e logarítmico
- A tela inicial não mostra mais o "continue de onde parou"

## Versão 2.16.0: Volter mais enxuto, com a seção Simuladores
- **Nova seção Simuladores:** todos os 15 simuladores num só lugar, separados por etapa, para usar direto ou abrir a lição em que aparecem
- **Saíram:** os exercícios do fim das lições, o Laboratório, os Projetos, o Treino, os Livros, Meu progresso (com o nível de experiência), Próximas etapas e a aba Nova Fase
- As lições abertas ficam marcadas como lidas na lista da etapa
- Os simuladores continuam dentro das lições

## Versão 2.15.0: instalações elétricas residenciais, versão ampliada
- **Doze lições** em vez de seis, bem mais detalhadas, acompanhando uma mesma casa de dois quartos do começo ao fim: potência e fator de potência; previsão de cargas cômodo por cômodo; potência total, fornecimento e padrão de entrada; o quadro e os dispositivos de proteção por dentro; divisão em circuitos; simbologia e esquemas de ligação; eletrodutos e fiação na planta; corrente e demanda do alimentador; dimensionamento de fios, disjuntores e queda de tensão; DR e aterramento; dimensionamento de eletrodutos; levantamento de material e selo do Inmetro
- **Tabelas nas lições**, quadros de dica e subtítulos, para consultar os valores com facilidade
- Projeto guiado da casa de dois quartos ampliado

## Versão 2.14.0: instalações elétricas residenciais completas
- **Seis lições novas na etapa Instalações**, do poste ao quadro, seguindo a NBR 5410: potência e previsão de cargas; fornecimento, padrão de entrada e quadro de distribuição; divisão em circuitos, cores dos fios, simbologia e projeto na planta; corrente, bitola, disjuntor e queda de tensão; DR e fio terra; eletrodutos, lista de material e selo do Inmetro
- **Simulador de previsão de cargas:** escolha o cômodo e as medidas e veja a iluminação mínima e as tomadas, desenhadas na planta
- **Simulador de dimensionamento:** potência, tensão, agrupamento e comprimento dão a corrente, a seção do fio, o disjuntor e a queda de tensão, explicando o porquê
- **Novo desafio no Laboratório:** o disjuntor do chuveiro novo desarma depois de alguns minutos
- **Novo projeto guiado:** projeto elétrico de uma casa de dois quartos, da planta à lista de material

## Versão 2.13.0: sopradora, moldagem por estiramento e sopro
- **Nova etapa 8 na aba Elétrica, Eletrônica e Hardware: "Processos da linha de envase"**, começando pela lição da sopradora: do PET à garrafa, o processo biorientado, as fases do ciclo, a haste de estiragem, a válvula de três vias, pressão e vazão, a came do pré-sopro, o perfil de aquecimento por zonas e os tipos de fundo
- **Simulador animado:** molde, preforma, haste e válvula de três vias em cada fase (molde fecha, estiragem, pré-sopro, sopro, degasagem, extração), com câmera lenta e avanço fase a fase; mude a came, a pressão, a vazão e o aquecimento das zonas e veja a espessura do ombro, do corpo e do fundo
- **Linha de envase:** o bloco Sopradora vem com o escopo detalhado (função, entradas, saídas, acionamentos, sensores, parâmetros, falhas e anotações) e o simulador dentro do bloco; nada do que já foi escrito é apagado

## Versão 2.12.0: área externa de gases
- **Linha de envase:** novo setor com os tanques de CO₂ e nitrogênio, numa área externa separada da linha, da sala de máquinas, da caldeira e do sopro; o CO₂ já aparece ligado ao mixer e carbonatador
- Projetos já começados recebem os dois tanques sem perder nada do que foi escrito

## Versão 2.11.0: a linha de envase no desenho real da planta
- **Mapa da planta** no topo: o caminho do produto (tratamento de água, xarope simples, xarope composto, filtro polidor, mixer e carbonatador, enchedora, capsuladora, medidor de nível, codificador, empacotadora, paletizadora, stretch e estoque), o caminho das garrafas desde o sopro até a enchedora e quem cada utilidade atende
- **Setores separados:** tratamento de água e xaroparia, linha de envase, sopro (com chiller e unidade de ar próprios, estoque e abastecimento de pré-formas, sopradora, rotuladora e transfer), sala de máquinas (compressores e chiller), caldeira, sala de CIP, e transportes com sensores e CLPs
- Interligações já preenchidas conforme o processo; quem já tinha escrito algo no projeto mantém o que escreveu

## Versão 2.10.0: cores novas e o projeto da linha de envase
- **Visual tecnológico:** azul-marinho escuro com ciano e índigo, botões e destaques em degradê
- **Novo item "Linha de envase"** (grupo Meus projetos): a linha em fluxo com setas, dividida em utilidades, xaroparia, sopro e enchimento, e fim de linha, com 20 blocos prontos para editar
- Cada bloco tem o seu escopo: função, entradas e saídas, interligações, acionamentos, sensores, CLP e tags, parâmetros, segurança (NR-12), falhas e anotações, com a situação (ideia, em escopo, escopo fechado) e o quanto já está preenchido
- Dados do projeto, tabela de interligações e exportação do escopo em .md ou do projeto em .json (com importação)
- Tudo salvo sozinho no arquivo de dados do programa, com cópia diária

## Versão 2.9.0: layout novo, mais fácil de navegar
- **Menu lateral** com as três áreas (Trilhas, Nova Fase e Elétrica e Hardware) e todas as etapas numeradas, com o progresso de cada uma
- **Busca** em todo o conteúdo: lições, desafios, projetos, etapas e livros
- **Início em blocos:** continue de onde parou, um cartão por área com as etapas, e atalhos para Laboratório, Projetos, Treino e Livros
- Páginas das áreas com uma grade de etapas e a lista de temas de cada uma
- No celular, o menu abre pelo botão do topo
- Sai o visual de streaming (banner e fileiras de capas)

## Versão 2.8.0: curso de programação de robôs com o Korum
- **Nova etapa 7 na aba Elétrica, Eletrônica e Hardware:** "Programação de robôs com o Korum", com 10 lições de KRL praticadas no laboratório virtual Korum: o robô de seis eixos, arquivos SRC e DAT, PTP, LIN e CIRC, velocidade e aproximação, variáveis e repetições, garra e entradas/saídas, subprogramas, paletização, comunicação com o CLP e diagnóstico
- Cada lição indica o exemplo e o exercício do Korum para praticar; os programas das lições foram testados no próprio Korum
- **Novo desafio no Laboratório:** depois da troca da garra, o robô passou a bater na peça
- **Novo projeto guiado:** célula de paletização completa no Korum

## Versão 2.7.0: fundamentos de IA e a aba Nova Fase
- **Cinco lições novas na trilha IA no Trabalho:** a história da IA em duas partes, em ordem cronológica (de 1943 a hoje), como a IA funciona, como a máquina aprende e um glossário com os nomes mais usados
- **Simulador novo:** um neurônio artificial aprendendo a separar medições de máquinas boas das que falharam
- **A aba Comece aos 40+ agora se chama Nova Fase**, para quem começa ou recomeça em tecnologia em qualquer fase da vida
- Os casos reais aparecem em nome da marca, no quadro "Da bancada"
- As lições agora aceitam listas numeradas

## Versão 2.6.0: a experiência do autor dentro do Volter
- **Quadros "Da bancada"** em quatro lições, com casos reais: da válvula ao SMD (história da eletrônica), cada geração de componente pede uma solda diferente, camada sobre camada até a robótica (contatores) e o cuidado com equipamentos de saúde (roteiro de falhas)
- **Nova lição na aba Comece aos 40+ (hoje Nova Fase):** "Sua experiência vale: traduzindo anos de trabalho para a tecnologia", contada a partir de uma trajetória real, do balcão de uma loja à programação e à IA
- **Novo desafio no Laboratório, baseado num caso real:** o IHM que já avisava e parou na festa de fim de ano
- No editor de conteúdo, cada lição pode ganhar um quadro "Da bancada"

## Versão 2.5.0: Eletrônica básica completa
- **9 lições novas** na etapa Eletrônica básica, que agora tem 14: primeiros circuitos (condutores, isolantes e placas), solda e montagem de placas, ganho do transistor e sensores, relés e alarme com autorretenção, amplificadores, circuitos biestável, monoestável e astável, chips e microprocessadores, a história da eletrônica e um roteiro de falhas
- **Dois simuladores novos:** transistor ligado por potenciômetro, LDR ou termistor, e amplificador com ganho, polarização e corte
- **Novo desafio no Laboratório:** o sensor de luz montado na placa não acende o LED
- **Novo projeto guiado:** alarme de porta com laço de fio e relé

## Versão 2.4.0: lições de Elétrica e Hardware com simuladores
- **18 lições novas** na aba Elétrica, Eletrônica e Hardware: fundamentos de eletricidade completos (Lei de Ohm, multímetro, segurança e NR-10, série e paralelo, consumo e conta de luz, paquímetro), instalações residenciais (diagramas, tomadas e interruptores, disjuntor, DR e DPS), eletrônica básica (componentes, protoboard e 555, transistor, fontes, lógica digital) e comandos elétricos (motor trifásico, contatores, partida direta e reversão, sensores PNP e NPN)
- **Nove simuladores interativos** dentro das lições: lei de Ohm, divisor de tensão com LDR e NTC, carga e descarga do capacitor, pisca-pisca com 555, portas lógicas, retificador com filtro, as três fases, partida direta com selo e leitura do paquímetro
- **Novo desafio no Laboratório:** a esteira que desliga quando o operador solta o botão
- **Novo projeto guiado:** pisca-pisca e sensor de luz na protoboard
- No editor de conteúdo, cada lição pode receber um simulador

## Versão 2.3.0: abas 40+ e Elétrica e Hardware
- **Comece aos 40+:** quatro etapas em sequência para quem começa em tecnologia depois dos 40: primeiros passos no digital, IA sem jargão, ferramentas do trabalho e recomeço de carreira
- **Elétrica, Eletrônica e Hardware:** seis etapas, de fundamentos de eletricidade e instalações residenciais até eletrônica, hardware, IoT e comandos elétricos com CLP
- Em cada aba, as trilhas são etapas numeradas, com os temas em ordem e o projeto final de cada um
- As lições, o projeto e o desafio de IoT voltaram, agora como a etapa 5 de Elétrica e Hardware

## Versão 2.2.0: nova grade de trilhas
- **Seis trilhas e um bônus**, seguindo a nova grade de temas: IA no Trabalho, Agentes e Automação, Programação com IA, Dados e Decisão, IA por Profissão, Segurança e Uso Responsável, e Carreira em Tecnologia
- Os cursos planejados de cada trilha aparecem como **Em breve**, com o projeto final de cada um
- A lição de agentes, o projeto do assistente com documentos e o desafio do RAG passaram para a trilha Agentes e Automação
- A seção **Notícias** foi suspensa e saiu do app
- A trilha de IoT e robótica saiu da grade; as lições, o projeto e o desafio dela ficam guardados, mas não aparecem para os alunos

## Versão 2.1.0: visual de streaming
- **Início novo:** um banner grande com o desafio do dia e fileiras de capas que deslizam para o lado: Continue de onde parou, trilhas, desafios do Laboratório, lições de cada trilha, projetos, notícias e livros
- **Janela de detalhes:** ao clicar numa capa, abre um resumo com o botão para começar e o de salvar; nas trilhas e lições, as lições aparecem como uma lista de episódios, com barra de progresso
- **Cabeçalho no topo**, transparente sobre o banner, com seu nível e XP
- Fundo preto, destaques em vermelho e uma cor por trilha nas capas; ícone novo
- A página Trilhas também ganhou fileiras de capas

## Versão 2.0.0 — um Volter novo
O Volter agora é uma plataforma de tecnologia para quem está começando.
- **Quatro trilhas:** IA, agentes e automação; Programação (Python e web); Dados e análise; IoT e robótica, com 12 lições e exercícios
- **Laboratório:** investigue problemas reais em 7 etapas, como um chatbot com RAG que inventa preços, uma página que mostra "undefined", um painel de vendas com números errados e um ESP32 que para de enviar dados
- **Projetos guiados** para o portfólio: assistente com seus documentos, primeiro site no GitHub Pages, painel de gastos com pandas e estação de temperatura com ESP32
- **Visual novo**, escuro, com uma cor para cada trilha
- Lições com blocos de código e botão de copiar
- Notícias e livros reescritos para quem está aprendendo
- O conteúdo de manutenção da versão 1 foi retirado

## Novidades da versão 1.1.0
- **Nova identidade visual:** amarelo de sinalização de segurança sobre grafite, com ícone novo
- **Notícias Técnicas reais**, com prévia da fonte, data e link: Python 3.15, índice TIOBE, robôs humanoides em fábricas, novos modelos de IA, n8n Agents, agente de IA da Siemens para o TIA Portal, mercado brasileiro de IA e IA aplicada à manutenção
- **Nova seção Livros:** lançamentos e referências de IA, programação e Indústria 4.0, com o motivo de cada leitura
- Livros também podem ser cadastrados pelo editor de conteúdo

## Versão 1.0.0 — primeira versão
- **Bancada Virtual** com 7 etapas de diagnóstico, dicas, comparador de hipóteses e correção comentada
- 4 casos demonstrativos: contator que não aciona, sensor NPN no lugar de PNP, motor de exaustor em sobrecarga e fonte de 24 V subdimensionada
- Trilha **Diagnóstico elétrico básico** com 5 lições e exercícios
- Desafios: ordem de serviço do dia e treino rápido
- Histórias de Campo, Notícias Técnicas, Meu Progresso e Favoritos
- Editor de conteúdo (menu **Ferramentas → Ativar o editor de conteúdo**) com geração do arquivo `conteudo.js`

## Onde ficam os dados
O progresso fica neste computador, com uma cópia automática por dia (últimos 30 dias).
Menu **Arquivo → Abrir pasta dos dados** mostra onde.
