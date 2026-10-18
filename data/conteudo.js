// Conteúdo do Volter. Gere uma nova versão pelo Editor de conteúdo (botão "Gerar conteudo.js").
window.VOLTER_SEED = {
 "cases": {
  "contator-bomba": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": "O relé térmico F7 foi substituído há dois dias por um relé retirado do almoxarifado, porque o original estava com contatos danificados. Antes disso a bomba funcionou por anos sem problemas.",
   "title": "Bomba de recalque não volta a ligar",
   "summary": "O contator não fecha ao pressionar o botão liga. Painel energizado, nenhum ruído.",
   "equipment": "Painel de partida direta — bomba centrífuga, motor 5 cv, 380 V",
   "area": "Comandos elétricos",
   "level": 2,
   "source": "didatico",
   "demo": true,
   "diagram": "partida-direta",
   "context": "Prédio administrativo. A bomba de recalque abastece a caixa d'água superior. O painel tem partida direta com contator K1, relé térmico F7 e comando em 220 Vca. O operador informa que a bomba parou sozinha no meio da tarde e não liga mais pelo botão.",
   "symptoms": [
    "Ao pressionar o botão LIGA (S1), o contator K1 não fecha e não faz nenhum ruído.",
    "A sinalização de painel energizado está acesa.",
    "Não há cheiro de queimado no painel.",
    "O nível da caixa superior está baixando."
   ],
   "conditions": "Depois da troca, a bomba parou duas vezes. Nas duas, alguém 'rearmou alguma coisa' no painel e ela voltou. Hoje ninguém rearmou.",
   "techInfo": [
    "Motor: 5 cv (3,7 kW), 380 V, IV polos, corrente nominal de placa 7,9 A.",
    "Comando: 220 Vca, protegido pelo fusível F2 de 2 A.",
    "Cadeia de comando: F2 → F7 (95-96) → emergência S2 (NF) → desliga S0 (NF) → liga S1 (NA) em paralelo com selo K1 (13-14) → bobina K1 (A1-A2)."
   ],
   "objective": "Descobrir por que K1 não aciona e devolver a bomba à operação com segurança.",
   "hypotheses": [
    {
     "id": "h1",
     "text": "Bobina do contator K1 queimada (aberta)",
     "correct": false
    },
    {
     "id": "h2",
     "text": "Fusível de comando F2 aberto",
     "correct": false
    },
    {
     "id": "h3",
     "text": "Relé térmico F7 disparado (contato 95-96 aberto)",
     "correct": true
    },
    {
     "id": "h4",
     "text": "Botão de emergência acionado ou com contato falho",
     "correct": false
    },
    {
     "id": "h5",
     "text": "Falta de fase na alimentação do motor",
     "correct": false
    },
    {
     "id": "h6",
     "text": "Bomba travada mecanicamente",
     "correct": false
    }
   ],
   "tests": [
    {
     "id": "t1",
     "name": "Medir a tensão de comando na saída do fusível F2",
     "how": "Circuito energizado — somente pessoa habilitada, com EPI e procedimento",
     "result": "220 V entre a saída de F2 e o neutro do comando.",
     "reading": "220 Vca",
     "value": "util",
     "insight": "O comando está alimentado e F2 está bom. O problema está depois dele."
    },
    {
     "id": "t2",
     "name": "Medir a tensão na bobina A1-A2 com S1 pressionado",
     "how": "Circuito energizado — somente pessoa habilitada",
     "result": "0 V na bobina enquanto S1 está pressionado.",
     "reading": "0 Vca",
     "value": "util",
     "insight": "A tensão não chega à bobina. Há um ponto aberto entre F2 e A1."
    },
    {
     "id": "t3",
     "name": "Medir a tensão sobre o contato 95-96 de F7 com S1 pressionado",
     "how": "Circuito energizado — somente pessoa habilitada",
     "result": "Cerca de 220 V sobre o contato 95-96. O contato está aberto.",
     "reading": "219 Vca",
     "value": "util",
     "insight": "Tensão sobre um contato com o circuito fechado pelo restante da cadeia significa contato aberto. Esta medição localiza o ponto."
    },
    {
     "id": "t4",
     "name": "Inspecionar o relé térmico F7",
     "how": "Inspeção visual, sem tocar em partes energizadas",
     "result": "Indicador de disparo na posição TRIP. Dial no máximo: 6,3 A. Placa do relé: faixa de ajuste 4,0 – 6,3 A.",
     "reading": "faixa 4,0–6,3 A",
     "value": "util",
     "insight": "A faixa máxima do relé (6,3 A) é menor que a corrente nominal do motor (7,9 A). Esse relé não serve para este motor."
    },
    {
     "id": "t5",
     "name": "Verificar o botão de emergência S2",
     "how": "Inspeção e teste de continuidade com o circuito desenergizado e bloqueado",
     "result": "Botão destravado. Contato NF com continuidade.",
     "reading": "0,2 Ω",
     "value": "neutro",
     "insight": "Elimina S2 como causa, mas a medição de tensão ao longo da cadeia já levaria ao ponto aberto mais rápido."
    },
    {
     "id": "t6",
     "name": "Medir a resistência da bobina de K1",
     "how": "Circuito desenergizado e bloqueado",
     "result": "Bobina com continuidade e resistência compatível com bobina de 220 Vca. Não está aberta.",
     "reading": "continuidade OK",
     "value": "neutro",
     "insight": "Útil para descartar a bobina, mas o teste de tensão na bobina já mostrava que ela nem recebia alimentação."
    },
    {
     "id": "t7",
     "name": "Rearmar F7 e medir a corrente do motor nas três fases",
     "how": "Circuito energizado — alicate amperímetro, pessoa habilitada",
     "result": "A bomba parte. Correntes: L1 7,8 A · L2 7,9 A · L3 7,7 A, equilibradas e dentro da nominal. Cerca de 20 minutos depois, F7 dispara de novo.",
     "reading": "7,8 / 7,9 / 7,7 A",
     "value": "util",
     "insight": "O motor está saudável: corrente equilibrada e na nominal. Quem está errado é a proteção."
    },
    {
     "id": "t8",
     "name": "Medir a resistência de isolamento do motor",
     "how": "Megômetro 500 Vcc, motor desconectado e bloqueado",
     "result": "Acima de 200 MΩ entre fases e carcaça.",
     "reading": "> 200 MΩ",
     "value": "neutro",
     "insight": "Isolamento bom. Teste válido, mas não aponta a causa desta falha."
    },
    {
     "id": "t9",
     "name": "Jumpear o contato 95-96 para ver se o motor liga",
     "how": "Ponte provisória sobre a proteção",
     "result": "Teste não realizado. Jumpear uma proteção deixa o motor sem proteção contra sobrecarga e pode causar dano ou incêndio. Use medições para localizar o ponto aberto.",
     "reading": "",
     "value": "inseguro",
     "insight": "Nunca contorne uma proteção para testar."
    },
    {
     "id": "t10",
     "name": "Trocar o contator K1 por um novo",
     "how": "Substituição de peça",
     "result": "Contator trocado. Nada muda: a bobina nova também não recebe tensão.",
     "reading": "",
     "value": "irrelevante",
     "insight": "Trocar peça antes de medir gasta tempo e material."
    }
   ],
   "causes": [
    {
     "id": "c1",
     "text": "Bobina de K1 queimada",
     "correct": false
    },
    {
     "id": "c2",
     "text": "Relé térmico substituto com faixa de ajuste abaixo da corrente do motor, disparando em operação normal",
     "correct": true
    },
    {
     "id": "c3",
     "text": "Sobrecarga real do motor por problema mecânico na bomba",
     "correct": false
    },
    {
     "id": "c4",
     "text": "Fusível de comando F2 queimado",
     "correct": false
    },
    {
     "id": "c5",
     "text": "Contato de selo K1 13-14 com defeito",
     "correct": false
    }
   ],
   "actions": [
    {
     "id": "a1",
     "text": "Substituir F7 por relé térmico cuja faixa contenha 7,9 A, ajustar na corrente nominal de placa e confirmar o funcionamento",
     "correct": true,
     "unsafe": false,
     "feedback": "Correto. A proteção passa a ser compatível com o motor e continua protegendo."
    },
    {
     "id": "a2",
     "text": "Manter o relé atual e rearmar sempre que desarmar",
     "correct": false,
     "unsafe": false,
     "feedback": "O problema continua e o relé desgasta. A bomba vai parar de novo."
    },
    {
     "id": "a3",
     "text": "Jumpear o contato 95-96 até chegar o relé correto",
     "correct": false,
     "unsafe": true,
     "feedback": "Inseguro. O motor fica sem proteção contra sobrecarga."
    },
    {
     "id": "a4",
     "text": "Substituir o motor por um de maior potência",
     "correct": false,
     "unsafe": false,
     "feedback": "O motor está bom. O defeito está na proteção."
    },
    {
     "id": "a5",
     "text": "Trocar o contator K1",
     "correct": false,
     "unsafe": false,
     "feedback": "O contator não tem defeito: ele não recebia tensão porque 95-96 estava aberto."
    }
   ],
   "hints": [
    "A tensão chega à bobina? Compare a medição em F2 com a medição em A1-A2.",
    "Se há tensão em F2 e não há na bobina, o ponto aberto está no meio da cadeia. Qual contato NF protege o motor?",
    "Compare a faixa de ajuste do relé substituto com a corrente nominal do motor."
   ],
   "solution": {
    "explanation": "O contato 95-96 do relé térmico estava aberto porque o relé disparou. O relé substituto tem faixa máxima de 6,3 A, abaixo da corrente nominal do motor (7,9 A). Em operação normal o motor consome cerca de 7,8 A; o relé entende isso como sobrecarga e dispara depois de alguns minutos. Não havia defeito no motor nem na bomba: a falha foi introduzida pela troca de peça.",
    "logic": [
     "Tensão presente em F2 e ausente na bobina: o ponto aberto está entre os dois.",
     "Cerca de 220 V sobre 95-96 com S1 pressionado: o contato do relé térmico está aberto.",
     "Indicador de disparo ativo: o relé atuou por sobrecarga, não está com defeito interno.",
     "Corrente equilibrada e dentro da nominal: o motor está saudável.",
     "Faixa máxima do relé (6,3 A) menor que a corrente nominal (7,9 A): proteção mal dimensionada."
    ],
    "mistakes": [
     "Trocar o contator sem medir: a bobina não recebia tensão, então uma peça nova não resolveria.",
     "Aumentar o ajuste ou jumpear a proteção: deixa o motor desprotegido.",
     "Rearmar repetidamente: o problema volta e o relé sofre desgaste."
    ],
    "lessons": [
     "Depois de trocar uma peça, confirme que ela é compatível com a aplicação, não só que encaixa.",
     "O relé térmico é ajustado pela corrente nominal de placa do motor.",
     "Uma proteção que dispara está dando uma informação. Entenda o motivo antes de rearmar."
    ]
   },
   "tags": [
    "contator",
    "relé térmico",
    "partida direta",
    "bomba"
   ]
  },
  "sensor-npn": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": "O sensor original foi danificado por impacto ontem à noite. O turno da noite instalou um sensor do estoque com a mesma carcaça M18 e o mesmo conector de 3 fios.",
   "title": "Esteira não detecta peças após troca do sensor",
   "summary": "O LED do sensor acende quando a peça passa, mas a entrada do CLP nunca recebe o sinal.",
   "equipment": "Esteira transportadora com CLP — sensor indutivo de posição, 24 Vcc",
   "area": "Automação e CLP",
   "level": 3,
   "source": "didatico",
   "demo": true,
   "context": "Linha de embalagem. Um sensor indutivo M18 detecta a chegada da peça e informa a entrada I0.3 do CLP, que para a esteira para o próximo processo. O módulo de entradas do CLP espera sinal positivo (+24 V) na entrada, com o comum no 0 V.",
   "symptoms": [
    "As peças passam direto pelo ponto de parada.",
    "O LED do sensor acende quando uma peça passa na frente dele.",
    "O LED da entrada I0.3 no módulo do CLP nunca acende.",
    "O CLP mostra apenas o alarme de tempo de ciclo excedido."
   ],
   "conditions": "A falha é permanente desde a troca. Antes funcionava normalmente.",
   "techInfo": [
    "Entrada I0.3: módulo de entradas digitais 24 Vcc para sensores com saída positiva (PNP).",
    "Cores do cabo do sensor: marrom +24 V, azul 0 V, preto saída.",
    "Distância de detecção nominal do sensor: 8 mm. A peça passa a cerca de 3 mm."
   ],
   "objective": "Descobrir por que o CLP não recebe o sinal e restabelecer a detecção.",
   "hypotheses": [
    {
     "id": "h1",
     "text": "Sensor sem alimentação",
     "correct": false
    },
    {
     "id": "h2",
     "text": "Peça passando longe demais do sensor",
     "correct": false
    },
    {
     "id": "h3",
     "text": "Fio de sinal (preto) interrompido",
     "correct": false
    },
    {
     "id": "h4",
     "text": "Sensor com tipo de saída incompatível com a entrada (NPN no lugar de PNP)",
     "correct": true
    },
    {
     "id": "h5",
     "text": "Entrada I0.3 do CLP danificada",
     "correct": false
    },
    {
     "id": "h6",
     "text": "Erro ou alteração no programa do CLP",
     "correct": false
    }
   ],
   "tests": [
    {
     "id": "t1",
     "name": "Medir a alimentação do sensor (marrom–azul)",
     "how": "Circuito de 24 Vcc energizado, multímetro em tensão CC",
     "result": "24,1 Vcc estável.",
     "reading": "24,1 Vcc",
     "value": "neutro",
     "insight": "Confirma a alimentação, que o LED aceso já sugeria."
    },
    {
     "id": "t2",
     "name": "Medir a tensão entre o fio preto e o 0 V, com e sem peça",
     "how": "Multímetro em tensão CC",
     "result": "Cerca de 0 V com peça e cerca de 0 V sem peça. A saída nunca fica positiva.",
     "reading": "0,0 V / 0,0 V",
     "value": "util",
     "insight": "Uma saída PNP deveria mostrar cerca de 24 V em relação ao 0 V quando detecta."
    },
    {
     "id": "t3",
     "name": "Medir a tensão entre o fio preto e o +24 V, com e sem peça",
     "how": "Multímetro em tensão CC",
     "result": "Cerca de 23,8 V com peça e cerca de 0 V sem peça. A saída comuta para o 0 V quando detecta.",
     "reading": "23,8 V / 0,0 V",
     "value": "util",
     "insight": "Comutar para o negativo é o comportamento de uma saída NPN."
    },
    {
     "id": "t4",
     "name": "Ler a etiqueta do sensor instalado",
     "how": "Inspeção visual",
     "result": "A etiqueta indica saída NPN, contato NA.",
     "reading": "NPN · NA",
     "value": "util",
     "insight": "Confirma a incompatibilidade com a entrada do CLP."
    },
    {
     "id": "t5",
     "name": "Testar a entrada I0.3 com um sensor PNP de bancada",
     "how": "Com a linha parada e em condição segura",
     "result": "Com o sensor PNP de teste conectado, o LED de I0.3 acende ao aproximar metal e o CLP registra a entrada.",
     "reading": "I0.3 = 1",
     "value": "util",
     "insight": "A entrada do CLP está boa."
    },
    {
     "id": "t6",
     "name": "Verificar a continuidade do fio preto até o borne de I0.3",
     "how": "Circuito desenergizado",
     "result": "Continuidade OK.",
     "reading": "0,4 Ω",
     "value": "neutro",
     "insight": "Descarta o cabo, mas não explica a falha."
    },
    {
     "id": "t7",
     "name": "Monitorar I0.3 online no software do CLP",
     "how": "Somente leitura, sem forçar nada",
     "result": "I0.3 permanece em 0 durante a passagem das peças. Não há forçamentos ativos.",
     "reading": "I0.3 = 0",
     "value": "neutro",
     "insight": "Confirma o sintoma, mas não a causa."
    },
    {
     "id": "t8",
     "name": "Aproximar mais o sensor da peça",
     "how": "Ajuste mecânico com a linha parada",
     "result": "O LED do sensor continua acendendo e I0.3 continua sem sinal.",
     "reading": "",
     "value": "irrelevante",
     "insight": "O sensor já detectava. A distância não era o problema."
    },
    {
     "id": "t9",
     "name": "Carregar novamente o programa no CLP",
     "how": "Download do programa",
     "result": "Programa recarregado. Nada muda.",
     "reading": "",
     "value": "irrelevante",
     "insight": "Recarregar programa sem necessidade pode criar outros problemas."
    },
    {
     "id": "t10",
     "name": "Forçar a saída que para a esteira com a linha em movimento",
     "how": "Forçamento online",
     "result": "Teste não realizado. Forçar saídas com a máquina em movimento pode provocar movimento inesperado e acidentes. Forçamentos exigem máquina em condição segura e procedimento autorizado.",
     "reading": "",
     "value": "inseguro",
     "insight": "Forçamento com máquina em operação é risco de acidente."
    }
   ],
   "causes": [
    {
     "id": "c1",
     "text": "Sensor sem alimentação",
     "correct": false
    },
    {
     "id": "c2",
     "text": "Sensor instalado com saída NPN, incompatível com a entrada PNP do CLP",
     "correct": true
    },
    {
     "id": "c3",
     "text": "Entrada I0.3 do CLP queimada",
     "correct": false
    },
    {
     "id": "c4",
     "text": "Fio de sinal rompido",
     "correct": false
    },
    {
     "id": "c5",
     "text": "Programa do CLP alterado",
     "correct": false
    }
   ],
   "actions": [
    {
     "id": "a1",
     "text": "Instalar um sensor indutivo PNP NA com as mesmas características (M18, 3 fios, distância compatível), testar a detecção e corrigir a identificação no estoque",
     "correct": true,
     "unsafe": false,
     "feedback": "Correto. O sensor passa a entregar o sinal que a entrada espera."
    },
    {
     "id": "a2",
     "text": "Trocar o módulo de entradas do CLP",
     "correct": false,
     "unsafe": false,
     "feedback": "A entrada está boa: o sensor PNP de teste funcionou nela."
    },
    {
     "id": "a3",
     "text": "Mover a fiação para outra entrada e alterar o programa",
     "correct": false,
     "unsafe": false,
     "feedback": "Qualquer entrada do mesmo módulo espera sinal positivo. Não resolve e ainda altera o programa."
    },
    {
     "id": "a4",
     "text": "Inverter os fios marrom e azul do sensor",
     "correct": false,
     "unsafe": true,
     "feedback": "Inverter a polaridade não converte NPN em PNP e pode danificar o sensor."
    },
    {
     "id": "a5",
     "text": "Reduzir a velocidade da esteira",
     "correct": false,
     "unsafe": false,
     "feedback": "A entrada nunca recebe sinal, em qualquer velocidade."
    }
   ],
   "hints": [
    "O sensor detecta (o LED acende), mas o CLP não vê. O problema está entre a saída do sensor e a entrada.",
    "Meça a saída do sensor em relação ao 0 V e em relação ao +24 V. Para qual lado ela comuta?",
    "Sensores de 3 fios podem ter saída PNP ou NPN. O que a entrada deste CLP espera?"
   ],
   "solution": {
    "explanation": "O sensor substituto tem saída NPN: quando detecta, ele liga o fio preto ao 0 V. A entrada do CLP espera receber +24 V (sensor PNP). Por isso o LED do sensor acende, mas a entrada nunca recebe sinal. O sensor e o CLP estão bons; os dois são incompatíveis entre si.",
    "logic": [
     "LED do sensor aceso: o sensor está alimentado e detecta a peça.",
     "Preto em relação ao 0 V fica sempre em 0 V: a saída nunca entrega positivo.",
     "Preto em relação ao +24 V vai a cerca de 24 V quando detecta: a saída comuta para o negativo (NPN).",
     "Sensor PNP de bancada funciona em I0.3: a entrada está boa.",
     "Etiqueta confirma NPN."
    ],
    "mistakes": [
     "Trocar o módulo de entradas sem testar a entrada com um sinal conhecido.",
     "Mexer no programa quando o sintoma está no hardware.",
     "Considerar que carcaça e conector iguais significam sensor equivalente."
    ],
    "lessons": [
     "Na troca de sensores, confira tipo de saída (PNP/NPN), função (NA/NF), tensão e distância.",
     "O LED do sensor mostra o que o sensor vê, não o que o CLP recebe.",
     "Medir a saída em relação aos dois polos revela o tipo de saída."
    ]
   },
   "tags": [
    "sensor indutivo",
    "PNP",
    "NPN",
    "CLP",
    "entrada digital"
   ]
  },
  "exaustor-aquecendo": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": "Na sexta-feira, a empresa de limpeza desmontou o duto, retirou os filtros da coifa para lavagem e remontou o sistema. Os filtros ainda não voltaram.",
   "title": "Motor do exaustor aquece além do normal",
   "summary": "Depois de uma limpeza no duto, a carcaça do motor passou a esquentar muito. O relé térmico não desarma.",
   "equipment": "Exaustor centrífugo de cozinha industrial — motor 5 cv, 380 V, acionamento por correia",
   "area": "Motores e acionamentos",
   "level": 4,
   "source": "didatico",
   "demo": true,
   "context": "O exaustor retira o ar da coifa de uma cozinha industrial. Depois de uma limpeza do duto feita por uma empresa terceirizada, a equipe percebeu cheiro de verniz quente perto do motor e a carcaça muito quente.",
   "symptoms": [
    "Carcaça do motor a 95 °C (termômetro infravermelho) após 1 h de operação. Antes ficava em torno de 60 °C.",
    "Ruído de ar mais forte na coifa.",
    "O relé térmico não desarmou.",
    "Sem vibração anormal perceptível."
   ],
   "conditions": "O aquecimento acontece em operação contínua, todos os dias desde a limpeza.",
   "techInfo": [
    "Motor: 5 cv, 380 V, corrente nominal 7,9 A, fator de serviço 1,15, isolamento classe F.",
    "Ventilador centrífugo de pás curvadas para a frente (tipo sirocco).",
    "Relé térmico com faixa de 7 a 10 A.",
    "Há um registro de regulagem (damper) no duto de exaustão."
   ],
   "objective": "Encontrar a causa do aquecimento antes que o motor queime.",
   "hypotheses": [
    {
     "id": "h1",
     "text": "Tensão de alimentação desequilibrada",
     "correct": false
    },
    {
     "id": "h2",
     "text": "Falta de fase",
     "correct": false
    },
    {
     "id": "h3",
     "text": "Correia muito tensionada ou rolamento com defeito",
     "correct": false
    },
    {
     "id": "h4",
     "text": "Ventilação do próprio motor obstruída",
     "correct": false
    },
    {
     "id": "h5",
     "text": "Carga do ventilador acima do projeto (vazão maior que a de projeto)",
     "correct": true
    },
    {
     "id": "h6",
     "text": "Isolamento do enrolamento deteriorado",
     "correct": false
    }
   ],
   "tests": [
    {
     "id": "t1",
     "name": "Medir as tensões de linha no motor",
     "how": "Em operação — pessoa habilitada, com EPI",
     "result": "R-S 381 V · S-T 379 V · T-R 382 V. Desequilíbrio desprezível.",
     "reading": "381 / 379 / 382 V",
     "value": "util",
     "insight": "Alimentação boa. Elimina desequilíbrio e falta de fase."
    },
    {
     "id": "t2",
     "name": "Medir a corrente nas três fases",
     "how": "Em operação — alicate amperímetro",
     "result": "9,6 A · 9,7 A · 9,5 A. Equilibradas, mas cerca de 22% acima da nominal de 7,9 A.",
     "reading": "9,6 / 9,7 / 9,5 A",
     "value": "util",
     "insight": "Sobrecarga equilibrada aponta para a carga mecânica, não para a alimentação."
    },
    {
     "id": "t3",
     "name": "Verificar o ajuste do relé térmico",
     "how": "Inspeção visual",
     "result": "Dial ajustado em 10 A, o máximo da faixa. Não há registro de quem alterou.",
     "reading": "10 A",
     "value": "util",
     "insight": "Com 10 A de ajuste, o relé não protege um motor de 7,9 A. Por isso não desarmou."
    },
    {
     "id": "t4",
     "name": "Inspecionar a ventoinha e as aletas do motor",
     "how": "Desenergizado e bloqueado",
     "result": "Ventoinha íntegra, tampa defletora limpa, aletas sem acúmulo de gordura.",
     "reading": "",
     "value": "neutro",
     "insight": "Refrigeração do motor em ordem."
    },
    {
     "id": "t5",
     "name": "Verificar a tensão da correia e os rolamentos",
     "how": "Desenergizado e bloqueado",
     "result": "Correia com tensão adequada. Giro manual livre, sem ruído nos rolamentos.",
     "reading": "",
     "value": "neutro",
     "insight": "Sem problema mecânico na transmissão."
    },
    {
     "id": "t6",
     "name": "Inspecionar a coifa, os filtros e o registro do duto",
     "how": "Inspeção visual",
     "result": "Filtros da coifa ausentes. Registro de regulagem totalmente aberto; a marca de tinta do comissionamento indica cerca de 60% de abertura.",
     "reading": "registro 100%",
     "value": "util",
     "insight": "Menos resistência no caminho do ar aumenta a vazão. Em ventilador de pás para a frente, mais vazão exige mais potência."
    },
    {
     "id": "t7",
     "name": "Medir a resistência de isolamento",
     "how": "Megômetro 500 Vcc, motor desconectado e bloqueado",
     "result": "Acima de 100 MΩ.",
     "reading": "> 100 MΩ",
     "value": "neutro",
     "insight": "Isolamento ainda bom. Bom momento para agir antes que piore."
    },
    {
     "id": "t8",
     "name": "Voltar o registro à marca de comissionamento e medir a corrente",
     "how": "Teste controlado, com autorização da operação",
     "result": "Com o registro na marca: 7,4 A · 7,5 A · 7,3 A.",
     "reading": "7,4 / 7,5 / 7,3 A",
     "value": "util",
     "insight": "A corrente volta para abaixo da nominal: confirma que a causa é a vazão excessiva."
    },
    {
     "id": "t9",
     "name": "Trocar o capacitor do motor",
     "how": "Substituição de peça",
     "result": "Este motor é trifásico e não tem capacitor.",
     "reading": "",
     "value": "irrelevante",
     "insight": "Conheça o equipamento antes de escolher o teste."
    },
    {
     "id": "t10",
     "name": "Retirar a proteção da correia com o exaustor funcionando",
     "how": "Inspeção com máquina em movimento",
     "result": "Teste não realizado. Remover proteções de partes móveis em funcionamento expõe ao risco de aprisionamento.",
     "reading": "",
     "value": "inseguro",
     "insight": "Partes móveis só são inspecionadas com a máquina parada e bloqueada."
    }
   ],
   "causes": [
    {
     "id": "c1",
     "text": "Desequilíbrio de tensão na alimentação",
     "correct": false
    },
    {
     "id": "c2",
     "text": "Falta de fase",
     "correct": false
    },
    {
     "id": "c3",
     "text": "Problema na correia ou nos rolamentos",
     "correct": false
    },
    {
     "id": "c4",
     "text": "Vazão acima do projeto (filtros ausentes e registro totalmente aberto) sobrecarregando o motor, sem proteção efetiva porque o relé foi ajustado acima da nominal",
     "correct": true
    },
    {
     "id": "c5",
     "text": "Isolamento do motor deteriorado",
     "correct": false
    }
   ],
   "actions": [
    {
     "id": "a1",
     "text": "Voltar o registro à posição de comissionamento, reinstalar os filtros, ajustar o relé térmico em 7,9 A e confirmar corrente e temperatura em operação",
     "correct": true,
     "unsafe": false,
     "feedback": "Correto. Remove a causa e restabelece a proteção."
    },
    {
     "id": "a2",
     "text": "Instalar um ventilador auxiliar para resfriar o motor",
     "correct": false,
     "unsafe": false,
     "feedback": "Trata o sintoma. O motor continua em sobrecarga."
    },
    {
     "id": "a3",
     "text": "Deixar como está: o isolamento classe F aguenta",
     "correct": false,
     "unsafe": false,
     "feedback": "Operar acima da nominal reduz muito a vida do isolamento."
    },
    {
     "id": "a4",
     "text": "Trocar o motor por um de 7,5 cv",
     "correct": false,
     "unsafe": false,
     "feedback": "Caro e desnecessário: com o registro correto a corrente fica abaixo da nominal."
    },
    {
     "id": "a5",
     "text": "Manter o relé em 10 A para não desarmar",
     "correct": false,
     "unsafe": true,
     "feedback": "Inseguro. O motor fica sem proteção contra sobrecarga."
    }
   ],
   "hints": [
    "Compare a corrente medida com a corrente de placa.",
    "Correntes equilibradas e tensões normais apontam para a carga, não para a alimentação.",
    "O que mudou no sistema de ar depois da limpeza? Em ventilador de pás para a frente, mais vazão exige mais potência."
   ],
   "solution": {
    "explanation": "Sem os filtros e com o registro totalmente aberto, a resistência do duto caiu e a vazão aumentou. No ventilador centrífugo de pás curvadas para a frente, a potência absorvida cresce com a vazão, e o motor passou a trabalhar cerca de 22% acima da nominal. O relé não desarmou porque estava ajustado em 10 A. Eram dois problemas: a causa do aquecimento e a falta de proteção.",
    "logic": [
     "Tensões equilibradas: a alimentação não é o problema.",
     "Correntes equilibradas e acima da nominal: sobrecarga vinda da carga.",
     "Motor e transmissão em bom estado: a carga extra vem do ar.",
     "Filtros ausentes e registro aberto: menos resistência, mais vazão.",
     "Com o registro na marca, a corrente volta a 7,4 A: hipótese confirmada."
    ],
    "mistakes": [
     "Tratar só a temperatura com ventilação extra.",
     "Considerar o relé que não desarmou como prova de que a corrente estava normal.",
     "Escolher testes que não se aplicam ao equipamento, como capacitor em motor trifásico."
    ],
    "lessons": [
     "Mudanças no sistema acionado (duto, registro, filtro, produto) mudam a carga do motor.",
     "Uma proteção ajustada errado esconde o problema. Confira o ajuste sempre que investigar aquecimento.",
     "Registre as posições de comissionamento de registros e válvulas."
    ]
   },
   "tags": [
    "motor",
    "sobrecarga",
    "ventilador",
    "relé térmico"
   ]
  },
  "fonte-24v": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": "Há uma semana foram instaladas uma válvula solenoide de 24 Vcc e uma torre de sinalização com sirene, alimentadas pela mesma fonte.",
   "title": "Fonte de 24 Vcc com tensão baixa",
   "summary": "Depois de novas cargas no painel, a fonte cai para 19 V e o CLP reinicia sozinho.",
   "equipment": "Painel de automação de máquina seladora — fonte chaveada 24 Vcc / 5 A",
   "area": "Eletrônica",
   "level": 2,
   "source": "didatico",
   "demo": true,
   "context": "Painel de uma máquina seladora. Depois da instalação de uma válvula solenoide extra e de uma torre de sinalização com sirene, a máquina passou a apresentar falhas aleatórias: o CLP reinicia e os sensores piscam.",
   "symptoms": [
    "Tensão de saída da fonte medida em 19 V com a máquina operando.",
    "O LED de 'DC OK' da fonte apaga de vez em quando.",
    "Os reinícios acontecem quando várias válvulas acionam ao mesmo tempo."
   ],
   "conditions": "Sem as cargas novas a máquina funcionava sem falhas.",
   "techInfo": [
    "Fonte: 24 Vcc, 5 A nominais, entrada 220 Vca.",
    "Consumos do projeto original: CLP e módulos cerca de 1,2 A; sensores cerca de 0,6 A; quatro válvulas de 0,5 A cada."
   ],
   "objective": "Descobrir por que a tensão cai e propor uma correção definitiva.",
   "hypotheses": [
    {
     "id": "h1",
     "text": "Tensão de entrada da fonte baixa",
     "correct": false
    },
    {
     "id": "h2",
     "text": "Defeito interno na fonte",
     "correct": false
    },
    {
     "id": "h3",
     "text": "Consumo acima da capacidade da fonte",
     "correct": true
    },
    {
     "id": "h4",
     "text": "Curto-circuito em uma das válvulas",
     "correct": false
    },
    {
     "id": "h5",
     "text": "Mau contato no borne de saída",
     "correct": false
    },
    {
     "id": "h6",
     "text": "CLP com defeito",
     "correct": false
    }
   ],
   "tests": [
    {
     "id": "t1",
     "name": "Medir a tensão de entrada da fonte",
     "how": "Energizado — pessoa habilitada",
     "result": "219 Vca, estável.",
     "reading": "219 Vca",
     "value": "neutro",
     "insight": "Entrada normal."
    },
    {
     "id": "t2",
     "name": "Medir a tensão de saída sem carga",
     "how": "Cargas desconectadas nos bornes, com a máquina parada",
     "result": "24,1 Vcc estável.",
     "reading": "24,1 Vcc",
     "value": "util",
     "insight": "Sem carga a fonte regula bem: o problema aparece com a carga."
    },
    {
     "id": "t3",
     "name": "Medir a corrente total de saída com a máquina em ciclo",
     "how": "Alicate CC na saída da fonte",
     "result": "Média de 4,7 A, com picos de 6,2 A quando as válvulas acionam juntas.",
     "reading": "4,7 A · pico 6,2 A",
     "value": "util",
     "insight": "Os picos passam de 5 A: a fonte entra em limitação de corrente e a tensão cai."
    },
    {
     "id": "t4",
     "name": "Somar os consumos das cargas pelos dados de placa",
     "how": "Levantamento documental",
     "result": "Válvula nova: 0,5 A. Torre com sirene: 0,9 A. Total com tudo acionado: 1,2 + 0,6 + 2,5 + 0,9 = 5,2 A.",
     "reading": "5,2 A previstos",
     "value": "util",
     "insight": "Mesmo sem picos, o consumo previsto passa da capacidade da fonte."
    },
    {
     "id": "t5",
     "name": "Medir a resistência das bobinas das válvulas",
     "how": "Desenergizado",
     "result": "Todas entre 45 e 50 Ω, parecidas entre si. Nenhuma em curto.",
     "reading": "45–50 Ω",
     "value": "neutro",
     "insight": "Cerca de 48 Ω em 24 V dá 0,5 A, coerente com a placa."
    },
    {
     "id": "t6",
     "name": "Reapertar os bornes de saída da fonte",
     "how": "Desenergizado e bloqueado",
     "result": "Os bornes estavam firmes. Sem alteração.",
     "reading": "",
     "value": "neutro",
     "insight": "Conexões em ordem."
    },
    {
     "id": "t7",
     "name": "Substituir o CLP",
     "how": "Troca de peça",
     "result": "CLP trocado. Os reinícios continuam.",
     "reading": "",
     "value": "irrelevante",
     "insight": "O CLP reiniciava porque a alimentação caía."
    },
    {
     "id": "t8",
     "name": "Ligar uma segunda fonte em paralelo direto nos bornes",
     "how": "Sem consultar o fabricante",
     "result": "Teste não realizado. Paralelo só é permitido em fontes que suportam essa função, do jeito indicado pelo fabricante. Fora disso, as fontes podem ser danificadas.",
     "reading": "",
     "value": "inseguro",
     "insight": "Consulte o manual antes de interligar fontes."
    }
   ],
   "causes": [
    {
     "id": "c1",
     "text": "Tensão de entrada baixa",
     "correct": false
    },
    {
     "id": "c2",
     "text": "Defeito interno da fonte",
     "correct": false
    },
    {
     "id": "c3",
     "text": "Fonte sobrecarregada: com as cargas novas e os picos das válvulas, o consumo passa de 5 A e a fonte limita a corrente",
     "correct": true
    },
    {
     "id": "c4",
     "text": "Válvula em curto",
     "correct": false
    },
    {
     "id": "c5",
     "text": "CLP com defeito",
     "correct": false
    }
   ],
   "actions": [
    {
     "id": "a1",
     "text": "Instalar uma fonte de maior capacidade ou uma segunda fonte dedicada às cargas novas, com margem de 20 a 25% sobre o consumo máximo",
     "correct": true,
     "unsafe": false,
     "feedback": "Correto. A fonte passa a ter folga para os picos."
    },
    {
     "id": "a2",
     "text": "Subir a tensão da fonte para 26 V no potenciômetro de ajuste",
     "correct": false,
     "unsafe": false,
     "feedback": "Não aumenta a capacidade de corrente e expõe as cargas a tensão acima da nominal."
    },
    {
     "id": "a3",
     "text": "Trocar o CLP",
     "correct": false,
     "unsafe": false,
     "feedback": "O CLP não é a causa."
    },
    {
     "id": "a4",
     "text": "Retirar a sirene sem avisar ninguém",
     "correct": false,
     "unsafe": true,
     "feedback": "Remove um sinal de segurança da máquina. Qualquer alteração precisa de análise e aprovação."
    }
   ],
   "hints": [
    "A fonte se comporta bem sem carga?",
    "Compare a corrente medida com a corrente nominal da fonte.",
    "Some o consumo de todas as cargas, incluindo as novas."
   ],
   "solution": {
    "explanation": "A fonte de 5 A ficou pequena depois das cargas novas. O consumo previsto passou para 5,2 A, e as válvulas acionando juntas geram picos de 6,2 A. Nesses momentos a fonte entra em limitação de corrente, a tensão cai para cerca de 19 V e o CLP reinicia.",
    "logic": [
     "Entrada normal e saída boa sem carga: a fonte funciona.",
     "Corrente em ciclo com picos acima de 5 A: limitação de corrente.",
     "Soma dos consumos acima da capacidade: confirma o subdimensionamento.",
     "Bobinas com resistência normal: não há curto."
    ],
    "mistakes": [
     "Trocar o CLP porque ele é quem reinicia.",
     "Ajustar a tensão da fonte para cima para compensar a queda.",
     "Adicionar cargas sem revisar o balanço de consumo."
    ],
    "lessons": [
     "Toda carga nova exige revisar o balanço de consumo da fonte.",
     "Bobinas e lâmpadas têm picos de corrente na energização.",
     "Deixe de 20 a 25% de folga na capacidade da fonte."
    ]
   },
   "tags": [
    "fonte chaveada",
    "24 Vcc",
    "sobrecarga",
    "CLP"
   ]
  }
 },
 "lessons": {
  "l1-metodo": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": [
    {
     "status": "published",
     "at": "2026-10-18T20:30:00.000Z"
    }
   ],
   "title": "O método do diagnóstico",
   "track": "diagnostico-eletrico",
   "order": 1,
   "minutes": 6,
   "diagram": "",
   "summary": "Como um técnico experiente organiza a investigação antes de pegar o multímetro.",
   "body": "Quem diagnostica bem não começa trocando peças. Começa entendendo o que o equipamento deveria fazer, o que ele está fazendo e onde as duas coisas se separam.\n\n## O ciclo do diagnóstico\n- **Observar:** colete sintomas, histórico e condições da falha. Pergunte ao operador o que mudou.\n- **Delimitar:** a falha está no comando ou na potência? Na alimentação, no sinal ou na carga?\n- **Formular hipóteses:** liste causas possíveis, das mais prováveis às menos prováveis.\n- **Testar:** escolha a verificação que elimina mais hipóteses, com menor risco e menor custo.\n- **Interpretar:** cada resultado confirma, enfraquece ou não diz nada sobre cada hipótese.\n- **Corrigir e confirmar:** aplique a ação, teste o funcionamento e registre o que foi feito.\n\n## A pergunta mais útil\n\"O que mudou?\" Troca de peça, ajuste, manutenção recente, carga nova, produto diferente. Muitas falhas aparecem logo depois de uma intervenção.\n\n## Dividir ao meio\nEm um circuito com vários pontos em série, medir no meio do caminho divide o problema em dois. Repetindo isso, você localiza a falha com poucas medições.",
   "keypoints": [
    "Não troque peça antes de medir.",
    "Pergunte sempre o que mudou.",
    "Escolha o teste que mais elimina hipóteses com menos risco."
   ],
   "questions": [
    {
     "type": "mc",
     "prompt": "Um motor parou. Qual é a primeira atitude mais produtiva?",
     "options": [
      "Trocar o contator, que é a peça que mais falha",
      "Coletar sintomas, histórico e o que mudou recentemente",
      "Medir a resistência de isolamento do motor",
      "Aumentar o ajuste do relé térmico"
     ],
     "answer": 2,
     "explain": "Antes de medir ou trocar qualquer coisa, entenda o problema. O histórico costuma apontar a direção."
    },
    {
     "type": "vf",
     "prompt": "Um bom teste é aquele que elimina mais hipóteses com menor risco e menor custo.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "answer": 1,
     "explain": "Esse é o critério para escolher a ordem dos testes."
    },
    {
     "type": "mc",
     "prompt": "Em uma cadeia de comando com seis contatos em série, qual estratégia localiza o contato aberto com menos medições?",
     "options": [
      "Medir contato por contato, do início ao fim",
      "Medir no meio da cadeia e repetir na metade com defeito",
      "Substituir todos os contatos",
      "Medir só a bobina"
     ],
     "answer": 2,
     "explain": "Dividir ao meio reduz o número de medições necessárias."
    }
   ]
  },
  "l2-seguranca": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": [
    {
     "status": "published",
     "at": "2026-10-18T20:30:00.000Z"
    }
   ],
   "title": "Segurança antes da medição",
   "track": "diagnostico-eletrico",
   "order": 2,
   "minutes": 7,
   "diagram": "",
   "summary": "Bloqueio, etiquetagem, verificação de ausência de tensão e escolha do instrumento.",
   "body": "Trate todo circuito como energizado até provar o contrário. No Brasil, os serviços em instalações elétricas seguem a NR-10. Siga sempre os procedimentos da sua empresa e atue apenas dentro da sua habilitação e autorização.\n\n## Bloqueio e etiquetagem\n- Identifique todas as fontes de energia: elétrica, pneumática, hidráulica, mecânica e energia armazenada (capacitores, molas, gravidade).\n- Desligue pelo dispositivo correto e bloqueie com cadeado pessoal e etiqueta.\n- **Verifique a ausência de tensão** com instrumento adequado. Teste o instrumento em uma fonte conhecida antes e depois da verificação.\n- Aterre temporariamente quando o procedimento exigir.\n\n## Instrumento certo\n- Multímetro com categoria de medição (CAT) e tensão compatíveis com o ponto medido.\n- Pontas de prova em bom estado, com proteção.\n- Para corrente de motores, prefira o alicate amperímetro.\n\n## Medições energizadas\nAlgumas medições, como tensão e corrente de operação, só existem com o circuito energizado. Elas exigem pessoa habilitada e autorizada, procedimento, EPI adequado e análise de risco. Na Bancada Virtual, testes desse tipo vêm indicados.\n\n## O que nunca fazer\n- Jumpear proteções (relé térmico, emergência, intertravamentos) para testar.\n- Aumentar o ajuste de uma proteção para o equipamento parar de desarmar.\n- Remover proteções de partes móveis com a máquina funcionando.",
   "keypoints": [
    "Todo circuito está energizado até prova em contrário.",
    "Teste o detector antes e depois.",
    "Proteção não se jumpeia."
   ],
   "questions": [
    {
     "type": "mc",
     "prompt": "Qual é a sequência correta antes de trabalhar em um painel?",
     "options": [
      "Abrir o painel, medir e depois desligar",
      "Desligar, bloquear e etiquetar, verificar a ausência de tensão e então trabalhar",
      "Desligar e começar a trabalhar",
      "Verificar a ausência de tensão e depois desligar"
     ],
     "answer": 2,
     "explain": "Desligar, bloquear, etiquetar e só então confirmar que não há tensão."
    },
    {
     "type": "vf",
     "prompt": "Jumpear o contato do relé térmico é aceitável se for só por alguns segundos.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "answer": 2,
     "explain": "Nunca. Mesmo por pouco tempo, o motor fica sem proteção."
    },
    {
     "type": "mc",
     "prompt": "Por que testar o detector de tensão em uma fonte conhecida antes e depois da verificação?",
     "options": [
      "Para calibrar o instrumento",
      "Para garantir que ele estava funcionando quando indicou ausência de tensão",
      "É exigência apenas para multímetros antigos",
      "Para medir a resistência das pontas"
     ],
     "answer": 2,
     "explain": "Um instrumento com defeito pode indicar zero em um circuito energizado."
    }
   ]
  },
  "l3-medicoes": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": [
    {
     "status": "published",
     "at": "2026-10-18T20:30:00.000Z"
    }
   ],
   "title": "Tensão, corrente e continuidade",
   "track": "diagnostico-eletrico",
   "order": 3,
   "minutes": 8,
   "diagram": "",
   "summary": "O que cada medição revela e como interpretá-la no diagnóstico.",
   "body": "## Tensão\nA tensão é medida em paralelo, entre dois pontos. Com o circuito alimentado e o caminho completo pela carga:\n- Sobre um contato **fechado**, você mede cerca de 0 V.\n- Sobre um contato **aberto**, você mede praticamente a tensão da fonte.\nEsse é o princípio para encontrar o ponto aberto em uma cadeia de comando.\n\n## Corrente\nA corrente é medida em série ou, de forma mais segura, com alicate amperímetro em volta de **um único condutor**. Compare com a corrente nominal da placa e compare as fases entre si: desequilíbrio também é informação.\n\n## Continuidade e resistência\nSó com o circuito desenergizado e verificado. Uma bobina aberta aparece como OL (fora de escala). Um curto aparece próximo de 0 Ω.\n\n## Isolamento\nO megômetro aplica tensão contínua elevada para avaliar o isolamento. Desconecte equipamentos eletrônicos, como inversores e fontes, antes de usar.",
   "keypoints": [
    "Contato aberto em circuito alimentado mostra a tensão da fonte.",
    "Alicate em um condutor só.",
    "Resistência e continuidade apenas desenergizado."
   ],
   "questions": [
    {
     "type": "mc",
     "prompt": "Com o comando energizado, o botão LIGA solto (aberto) e o restante da cadeia fechado até a bobina, quanto você espera medir sobre os terminais do botão?",
     "options": [
      "0 V",
      "Aproximadamente a tensão de comando",
      "A corrente da bobina",
      "Não é possível medir"
     ],
     "answer": 2,
     "explain": "O caminho pela bobina leva o outro polo até o botão, então a tensão aparece sobre o contato aberto."
    },
    {
     "type": "vf",
     "prompt": "Para medir a corrente de um motor trifásico com alicate, envolva os três condutores juntos.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "answer": 2,
     "explain": "Com os três condutores juntos, as correntes se anulam e o alicate mostra perto de zero."
    },
    {
     "type": "mc",
     "prompt": "O multímetro mostra OL ao medir a resistência de uma bobina desenergizada. Isso indica:",
     "options": [
      "Bobina em curto",
      "Bobina aberta (interrompida)",
      "Bobina em bom estado",
      "Tensão presente na bobina"
     ],
     "answer": 2,
     "explain": "OL significa resistência acima da escala: o enrolamento está interrompido."
    }
   ]
  },
  "l4-diagrama": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": [
    {
     "status": "published",
     "at": "2026-10-18T20:30:00.000Z"
    }
   ],
   "title": "Lendo um diagrama de comando",
   "track": "diagnostico-eletrico",
   "order": 4,
   "minutes": 8,
   "diagram": "partida-direta",
   "summary": "Partida direta: contatos de permissão, selo e bobina.",
   "body": "O diagrama de comando de uma partida direta é uma cadeia: a bobina do contator só recebe tensão quando todas as condições em série estão satisfeitas.\n\n## Como ler\n- **Contatos NF em série** são condições de permissão: relé térmico (95-96), emergência e botão desliga. Qualquer um aberto impede o acionamento.\n- **O botão liga (NA)** fecha o caminho por um instante.\n- **O contato de selo (13-14)**, em paralelo com o botão liga, mantém a bobina energizada depois que o botão é solto.\n- **A bobina (A1-A2)** fecha os contatos de potência e o próprio selo.\n\n## Numeração dos terminais\n- 1-2, 3-4, 5-6: contatos de potência do contator.\n- 13-14: contato auxiliar NA (selo).\n- 95-96: contato NF do relé térmico.\n- 97-98: contato NA do relé térmico, usado para sinalizar o disparo.\n\n## Usando o diagrama para medir\nSiga a cadeia a partir do fusível de comando. O ponto em que a tensão deixa de aparecer em relação ao outro polo mostra onde o caminho está aberto.",
   "keypoints": [
    "NF em série são permissões.",
    "O selo mantém a bobina após soltar o liga.",
    "95-96 é o contato de proteção do relé térmico."
   ],
   "questions": [
    {
     "type": "mc",
     "prompt": "Qual contato do relé térmico fica em série com a bobina do contator?",
     "options": [
      "13-14",
      "95-96",
      "97-98",
      "A1-A2"
     ],
     "answer": 2,
     "explain": "O 95-96 é NF e abre quando o relé dispara."
    },
    {
     "type": "mc",
     "prompt": "O motor liga enquanto o botão é pressionado, mas desliga ao soltar. Causa mais provável:",
     "options": [
      "Relé térmico disparado",
      "Selo 13-14 não fecha ou a ligação do selo está interrompida",
      "Fusível de comando aberto",
      "Bobina aberta"
     ],
     "answer": 2,
     "explain": "Sem o selo, a bobina só fica energizada enquanto o botão está pressionado."
    },
    {
     "type": "vf",
     "prompt": "Os contatos NF de proteção são ligados em paralelo entre si.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "answer": 2,
     "explain": "Em série, para que qualquer um deles possa interromper o comando."
    }
   ]
  },
  "l5-defeitos": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": [
    {
     "status": "published",
     "at": "2026-10-18T20:30:00.000Z"
    }
   ],
   "title": "Defeitos clássicos em comandos",
   "track": "diagnostico-eletrico",
   "order": 5,
   "minutes": 7,
   "diagram": "",
   "summary": "Sintomas comuns, causas prováveis e o primeiro teste a fazer.",
   "body": "Estes padrões aparecem todos os dias na manutenção. Use-os como ponto de partida, nunca como conclusão.\n\n## Não liga, nada acontece\nCausas comuns: falta de tensão de comando, fusível de comando aberto, relé térmico disparado, emergência acionada, bobina aberta.\n**Primeiro teste:** medir a tensão de comando na entrada da cadeia e na bobina.\n\n## Liga e desliga ao soltar o botão\nCausa comum: contato de selo que não fecha ou fio do selo solto.\n**Primeiro teste:** verificar a ligação do 13-14 conforme o diagrama.\n\n## Contator vibra ou faz ruído\nCausas comuns: tensão de bobina baixa, núcleo sujo ou desalinhado, anel de curto quebrado em contatores de corrente alternada.\n**Primeiro teste:** medir a tensão na bobina com o contator acionado.\n\n## Desarma por sobrecarga\nCausas comuns: carga mecânica acima do normal, tensão desequilibrada, falta de fase, rolamento, relé mal ajustado ou mal dimensionado.\n**Primeiro teste:** medir a corrente nas três fases e comparar com a placa.\n\n## Gira ao contrário\nCausa comum: sequência de fases invertida depois de uma troca de cabo ou de alimentação.\n**Primeiro teste:** verificar a sequência de fases e o histórico de intervenções.",
   "keypoints": [
    "Sintoma aponta caminhos, não conclusões.",
    "Primeiro teste: o que separa mais as hipóteses.",
    "Sobrecarga: compare corrente medida com a placa."
   ],
   "questions": [
    {
     "type": "mc",
     "prompt": "Um contator faz ruído forte (zumbido) quando acionado. Qual é o primeiro teste mais útil?",
     "options": [
      "Trocar o motor",
      "Medir a tensão na bobina com o contator acionado",
      "Medir a isolação do motor",
      "Reapertar os bornes de potência"
     ],
     "answer": 2,
     "explain": "Tensão de bobina baixa é uma das causas mais comuns de ruído."
    },
    {
     "type": "vf",
     "prompt": "Se o motor gira ao contrário logo após a troca do cabo de alimentação, a primeira suspeita é a sequência de fases.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "answer": 1,
     "explain": "Inverter duas fases inverte o sentido de giro."
    },
    {
     "type": "mc",
     "prompt": "O relé térmico desarma. As três correntes estão iguais e 20% acima da nominal. Isso aponta mais para:",
     "options": [
      "Falta de fase",
      "Carga mecânica acima do normal",
      "Desequilíbrio de tensão",
      "Bobina do contator aberta"
     ],
     "answer": 2,
     "explain": "Corrente alta e equilibrada indica que a carga pede mais potência."
    }
   ]
  }
 },
 "stories": {
  "exemplo-formato": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": [
    {
     "status": "published",
     "at": "2026-10-18T20:30:00.000Z"
    }
   ],
   "title": "Exemplo de formato: a proteção que não era do tamanho certo",
   "category": "Comandos elétricos",
   "kind": "demonstrativo",
   "demo": true,
   "caseId": "contator-bomba",
   "summary": "Texto criado para mostrar como uma história de campo é organizada. Substitua por um relato real.",
   "context": "Uma bomba de recalque passou a parar de tempos em tempos depois da troca de um relé térmico.",
   "symptoms": "O contator não fechava ao pressionar o botão liga. O painel estava energizado e não havia cheiro de queimado.",
   "firstHypotheses": "Bobina do contator queimada, fusível de comando aberto, botão de emergência com defeito.",
   "tests": "Tensão na saída do fusível de comando, tensão na bobina com o botão pressionado, tensão sobre o contato 95-96 do relé térmico.",
   "difficulties": "A primeira tentação foi trocar o contator, que parecia ser o suspeito óbvio. As medições mostraram que a bobina nem recebia tensão.",
   "rootCause": "O relé térmico substituto tinha faixa máxima de 6,3 A, abaixo da corrente nominal do motor de 7,9 A.",
   "solution": "Instalação de um relé térmico com faixa adequada, ajustado na corrente nominal de placa.",
   "lessons": "Peça que encaixa não é peça certa. Uma proteção que dispara está contando alguma coisa.",
   "checklist": [
    "Conferir a faixa de ajuste do relé contra a corrente nominal do motor",
    "Medir a tensão ao longo da cadeia de comando antes de trocar peças",
    "Registrar a troca de peça e o ajuste aplicado"
   ],
   "question": "Na sua última troca de componente, você conferiu os dados de placa do substituto contra a aplicação?",
   "tags": [
    "relé térmico",
    "exemplo"
   ]
  }
 },
 "news": {
  "exemplo-noticia-1": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": [
    {
     "status": "published",
     "at": "2026-10-18T20:30:00.000Z"
    }
   ],
   "title": "Exemplo: como uma notícia técnica aparece no Volter",
   "category": "Manutenção preditiva e análise de falhas",
   "demo": true,
   "summary": "Este é um modelo de cadastro, não uma notícia real. Cadastre notícias verdadeiras pelo painel administrativo, sempre com fonte e link.",
   "sourceName": "",
   "url": "",
   "publishedAt": "",
   "sourceUpdatedAt": "",
   "impact": "Aqui vai a explicação do que a novidade muda para quem trabalha com manutenção.",
   "practice": "Aqui vai uma sugestão concreta de aplicação no dia a dia.",
   "further": "Aqui vai uma indicação de leitura complementar.",
   "keywords": [
    "exemplo",
    "modelo"
   ]
  },
  "exemplo-noticia-2": {
   "status": "published",
   "createdAt": "2026-10-18T20:30:00.000Z",
   "updatedAt": "2026-10-18T20:30:00.000Z",
   "history": [
    {
     "status": "published",
     "at": "2026-10-18T20:30:00.000Z"
    }
   ],
   "title": "Exemplo: notícia de segurança elétrica e normas",
   "category": "Segurança elétrica e normas técnicas",
   "demo": true,
   "summary": "Modelo para notícias sobre revisões de normas. Ao cadastrar uma real, informe a edição da norma e a data de publicação na fonte.",
   "sourceName": "",
   "url": "",
   "publishedAt": "",
   "sourceUpdatedAt": "",
   "impact": "Explique quais requisitos mudaram e para quem.",
   "practice": "Indique o que revisar em procedimentos, treinamentos ou documentos.",
   "further": "Aponte o texto oficial da norma ou do órgão responsável.",
   "keywords": [
    "exemplo",
    "normas"
   ]
  }
 }
};
