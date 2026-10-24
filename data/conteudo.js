// Conteúdo do Volter, sincronizado do claude.ai. Também pode ser gerado pelo editor de conteúdo (botão "Gerar conteudo.js").
window.VOLTER_SEED = {
 "cases": {
  "api-campo-renomeado": {
   "actions": [
    {
     "correct": true,
     "feedback": "Correto. Corrige o sintoma, procura outros pontos afetados e evita a repetição.",
     "id": "a1",
     "text": "Ler dados.name no site, procurar outros campos renomeados (como telefone) e combinar com o back-end que mudanças incompatíveis venham com nova versão ou período de transição",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Esconde o problema e piora a experiência.",
     "id": "a2",
     "text": "Trocar a saudação por \"Olá, aluno\" fixo",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Pode quebrar outros sistemas que já se adaptaram à v2.",
     "id": "a3",
     "text": "Pedir que a API volte a usar \"nome\" sem conversar com os outros sistemas",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Inseguro. Expõe os dados dos usuários.",
     "id": "a4",
     "text": "Deixar a API sem login até tudo estar estável",
     "unsafe": true
    }
   ],
   "author": "",
   "causes": [
    {
     "correct": false,
     "id": "c1",
     "text": "Cache antigo do navegador"
    },
    {
     "correct": true,
     "id": "c2",
     "text": "A API v2 renomeou o campo nome para name, e o site continua lendo dados.nome"
    },
    {
     "correct": false,
     "id": "c3",
     "text": "A API está fora do ar"
    },
    {
     "correct": false,
     "id": "c4",
     "text": "Erro de sintaxe no JavaScript"
    },
    {
     "correct": false,
     "id": "c5",
     "text": "Bloqueio de CORS"
    }
   ],
   "conditions": "Em todos os navegadores e para todos os usuários.",
   "context": "Um site de cursos mostra \"Olá, <nome>\" no topo. O nome vem de uma API interna, chamada com fetch em /api/usuario.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": true,
   "equipment": "Site em JavaScript que consome uma API REST de usuários",
   "hints": [
    "A requisição deu certo? Olhe a resposta completa na aba Rede.",
    "Compare o nome da propriedade que o código lê com o que a API devolve.",
    "O que mudou ontem?"
   ],
   "history": "Ontem a equipe do back-end publicou a versão 2 da API. O código do site não mudou.",
   "hypotheses": [
    {
     "correct": false,
     "id": "h1",
     "text": "O navegador está usando uma versão antiga em cache"
    },
    {
     "correct": false,
     "id": "h2",
     "text": "A API está fora do ar"
    },
    {
     "correct": true,
     "id": "h3",
     "text": "O nome do campo mudou na versão 2 da API"
    },
    {
     "correct": false,
     "id": "h4",
     "text": "Os usuários estão sem nome cadastrado"
    },
    {
     "correct": false,
     "id": "h5",
     "text": "Erro de sintaxe no JavaScript"
    },
    {
     "correct": false,
     "id": "h6",
     "text": "Bloqueio de CORS"
    }
   ],
   "level": 2,
   "objective": "Encontrar a causa e corrigir sem quebrar outros pontos do site.",
   "solution": {
    "explanation": "A versão 2 da API passou a usar nomes de campos em inglês. O site continua lendo dados.nome, que não existe mais. Em JavaScript, acessar uma propriedade inexistente devolve undefined sem gerar erro, por isso nada aparece em vermelho no console.",
    "lessons": [
     "Na dúvida, abra a aba Rede: ela mostra exatamente o que o servidor devolveu.",
     "undefined costuma indicar nome de propriedade errado.",
     "Mudanças que quebram contratos de API precisam de versão e aviso."
    ],
    "logic": [
     "Status 200 com o nome no corpo: a API está no ar e funcionando.",
     "O corpo traz \"name\", não \"nome\".",
     "O changelog confirma a troca.",
     "Cache e CORS não alteram o resultado."
    ],
    "mistakes": [
     "Concluir que \"sem erro no console\" significa \"sem problema no código\".",
     "Mexer no ambiente (Node, cache) antes de olhar a resposta da API.",
     "Desligar a segurança para testar."
    ]
   },
   "status": "published",
   "summary": "Desde a versão 2 da API, o nome do usuário sumiu do site. Não há erro no console.",
   "symptoms": [
    "Desde ontem, todos os usuários veem \"Olá, undefined\".",
    "O resto da página funciona.",
    "Não aparece nenhum erro em vermelho no console."
   ],
   "tags": [
    "javascript",
    "api",
    "fetch",
    "json"
   ],
   "techInfo": [
    "Trecho do site: const dados = await resposta.json(); saudacao.textContent = \"Olá, \" + dados.nome;",
    "A API exige login e responde em JSON."
   ],
   "tests": [
    {
     "how": "Ferramentas do desenvolvedor do navegador (F12)",
     "id": "t1",
     "insight": "A API funciona e manda o nome, mas com outra chave.",
     "name": "Abrir a aba Rede (Network) e ver a resposta de /api/usuario",
     "reading": "200 OK · campo \"name\"",
     "result": "Status 200. Corpo: {\"id\": 512, \"name\": \"Ana Souza\", \"email\": \"ana@exemplo.com\"}",
     "value": "util"
    },
    {
     "how": "Documentação do back-end",
     "id": "t2",
     "insight": "Confirma a mudança que quebrou a compatibilidade.",
     "name": "Ler o changelog da API v2",
     "reading": "nome → name",
     "result": "Mudanças: campos padronizados em inglês (nome → name, telefone → phone).",
     "value": "util"
    },
    {
     "how": "Console do navegador",
     "id": "t3",
     "insight": "Em JavaScript, ler uma propriedade que não existe não dá erro: devolve undefined.",
     "name": "Inspecionar o objeto com console.log(dados)",
     "reading": "dados.nome → undefined",
     "result": "{ id: 512, name: \"Ana Souza\", email: \"ana@exemplo.com\" } — não existe a propriedade \"nome\".",
     "value": "util"
    },
    {
     "how": "Configurações do navegador",
     "id": "t4",
     "insight": "Descarta cache, mas não aponta a causa.",
     "name": "Limpar o cache do navegador",
     "reading": "",
     "result": "Nada muda.",
     "value": "neutro"
    },
    {
     "how": "Console do navegador",
     "id": "t5",
     "insight": "Descarta CORS.",
     "name": "Procurar erros de CORS no console",
     "reading": "",
     "result": "Nenhum erro de CORS. A requisição foi concluída.",
     "value": "neutro"
    },
    {
     "how": "Instalação",
     "id": "t6",
     "insight": "Entenda onde o código roda antes de mexer no ambiente.",
     "name": "Reinstalar o Node.js no computador",
     "reading": "",
     "result": "Nada muda: esse código roda no navegador, não no Node.js.",
     "value": "irrelevante"
    },
    {
     "how": "Configuração do servidor",
     "id": "t7",
     "insight": "Nunca desative segurança em produção para testar.",
     "name": "Desligar a exigência de login da API em produção para testar mais rápido",
     "reading": "",
     "result": "Teste bloqueado. Sem login, os dados de todos os usuários ficam expostos. Use um ambiente de desenvolvimento.",
     "value": "inseguro"
    }
   ],
   "title": "Página mostra “Olá, undefined” depois da atualização da API",
   "track": "prog",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "esp32-wifi-madrugada": {
   "actions": [
    {
     "correct": true,
     "feedback": "Correto. O dispositivo passa a se recuperar sozinho de quedas de rede.",
     "id": "a1",
     "text": "Verificar Wi-Fi e MQTT a cada volta do loop() e reconectar com espera crescente entre tentativas, usar um watchdog como proteção extra e testar desligando o roteador",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Contorna hoje, mas qualquer queda de rede vai travar a estação de novo.",
     "id": "a2",
     "text": "Pedir para tirar o reinício noturno do roteador",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Gambiarra: perde até uma hora de dados a cada queda.",
     "id": "a3",
     "text": "Programar o ESP32 para reiniciar a cada hora",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "O sensor está funcionando.",
     "id": "a4",
     "text": "Trocar o sensor de temperatura",
     "unsafe": false
    }
   ],
   "author": "",
   "causes": [
    {
     "correct": false,
     "id": "c1",
     "text": "Fonte fraca"
    },
    {
     "correct": false,
     "id": "c2",
     "text": "Sensor com defeito"
    },
    {
     "correct": true,
     "id": "c3",
     "text": "O código só conecta o Wi-Fi no setup(); quando o roteador reinicia, o ESP32 perde a conexão e nunca tenta reconectar"
    },
    {
     "correct": false,
     "id": "c4",
     "text": "Broker MQTT instável"
    },
    {
     "correct": false,
     "id": "c5",
     "text": "Memória cheia"
    }
   ],
   "conditions": "Sempre logo depois das 3h.",
   "context": "Um ESP32 lê um sensor de temperatura a cada minuto e publica o valor via MQTT num broker na nuvem. Um painel mostra o gráfico.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": true,
   "equipment": "Estação de temperatura com ESP32, Wi-Fi e MQTT",
   "hints": [
    "A placa está viva? O que o monitor serial mostra às 3h?",
    "O que acontece na rede às 3h?",
    "Onde o código conecta ao Wi-Fi, e quantas vezes?"
   ],
   "history": "Há duas semanas o roteador foi configurado para reiniciar todas as noites às 3h.",
   "hypotheses": [
    {
     "correct": false,
     "id": "h1",
     "text": "A fonte está fraca ou com queda de energia"
    },
    {
     "correct": false,
     "id": "h2",
     "text": "O sensor queimou"
    },
    {
     "correct": true,
     "id": "h3",
     "text": "O ESP32 não reconecta ao Wi-Fi depois que o roteador reinicia"
    },
    {
     "correct": false,
     "id": "h4",
     "text": "O broker MQTT sai do ar de madrugada"
    },
    {
     "correct": false,
     "id": "h5",
     "text": "A memória do ESP32 enche"
    },
    {
     "correct": false,
     "id": "h6",
     "text": "Superaquecimento da placa"
    }
   ],
   "level": 2,
   "objective": "Fazer a estação voltar a enviar dados sozinha, sem depender de alguém reiniciar.",
   "solution": {
    "explanation": "O roteador reinicia às 3h e a rede volta em 2 minutos. O firmware conecta ao Wi-Fi uma única vez, no setup(), e nunca verifica a conexão no loop(). Depois da queda, a placa continua lendo o sensor, mas todo envio falha até alguém reiniciar.",
    "lessons": [
     "Dispositivos IoT precisam se recuperar sozinhos de quedas de rede.",
     "Logs com horário são a ferramenta número um em IoT.",
     "Teste cenários de falha: desligue o roteador de propósito."
    ],
    "logic": [
     "O monitor serial mostra a desconexão às 3h01 e nenhuma tentativa de reconexão.",
     "O roteador reinicia exatamente às 3h.",
     "O loop() não verifica nem reconecta.",
     "Fonte, sensor e broker estão normais."
    ],
    "mistakes": [
     "Trocar hardware sem olhar o log serial.",
     "Esconder o problema com reinícios programados.",
     "Ligar sensores de 5 V direto nos pinos de 3,3 V."
    ]
   },
   "status": "published",
   "summary": "O gráfico para por volta das 3h e só volta quando alguém reinicia a placa.",
   "symptoms": [
    "O gráfico para de receber dados por volta das 3h.",
    "Só volta quando alguém reinicia o ESP32.",
    "O LED de alimentação continua aceso."
   ],
   "tags": [
    "esp32",
    "mqtt",
    "wifi",
    "iot"
   ],
   "techInfo": [
    "O Wi-Fi é conectado só dentro de setup().",
    "O loop() lê o sensor e chama client.publish() sem verificar a conexão.",
    "Alimentação por fonte USB de 5 V."
   ],
   "tests": [
    {
     "how": "Notebook ligado ao USB da placa",
     "id": "t1",
     "insight": "A placa continua viva, mas fica sem rede para sempre.",
     "name": "Deixar o monitor serial gravando durante a madrugada",
     "reading": "03:01 WiFi: desconectado",
     "result": "03:01:12 WiFi desconectado. Depois disso, a cada minuto: \"publish falhou\". Nenhuma tentativa de reconexão.",
     "value": "util"
    },
    {
     "how": "Painel de administração do roteador",
     "id": "t2",
     "insight": "A rede volta em 2 minutos, mas o ESP32 não tenta de novo.",
     "name": "Ver o log do roteador",
     "reading": "reboot 03:00 → 03:02",
     "result": "Reinício programado às 03:00. Rede de volta às 03:02.",
     "value": "util"
    },
    {
     "how": "Código-fonte do firmware",
     "id": "t3",
     "insight": "A conexão só é feita uma vez, no setup().",
     "name": "Ler o código do loop()",
     "reading": "",
     "result": "Não há verificação de WiFi.status() nem reconexão do Wi-Fi ou do MQTT.",
     "value": "util"
    },
    {
     "how": "Multímetro na saída da fonte",
     "id": "t4",
     "insight": "Descarta alimentação.",
     "name": "Medir a tensão da fonte",
     "reading": "5,02 V",
     "result": "5,02 V estável durante toda a noite.",
     "value": "neutro"
    },
    {
     "how": "Monitor serial",
     "id": "t5",
     "insight": "O sensor está bom.",
     "name": "Ler o sensor pelo monitor serial",
     "reading": "24,6 °C",
     "result": "Leituras normais (24,6 °C) mesmo depois das 3h.",
     "value": "neutro"
    },
    {
     "how": "Painel do broker",
     "id": "t6",
     "insight": "Descarta o broker.",
     "name": "Ver o status do broker MQTT",
     "reading": "",
     "result": "Broker online; outros dispositivos publicando normalmente.",
     "value": "neutro"
    },
    {
     "how": "Substituição",
     "id": "t7",
     "insight": "O defeito está no código, não na placa.",
     "name": "Trocar o ESP32 por uma placa nova",
     "reading": "",
     "result": "A placa nova para do mesmo jeito às 3h.",
     "value": "irrelevante"
    },
    {
     "how": "Alteração na fiação",
     "id": "t8",
     "insight": "Confira sempre o nível lógico antes de ligar sensores.",
     "name": "Ligar um sensor de 5 V direto num pino do ESP32, sem conversor de nível",
     "reading": "",
     "result": "Teste bloqueado. Os pinos do ESP32 trabalham em 3,3 V e não toleram 5 V; o pino pode ser danificado.",
     "value": "inseguro"
    }
   ],
   "title": "Sensor com ESP32 para de enviar dados toda madrugada",
   "track": "iot",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "esteira-sem-selo": {
   "actions": [
    {
     "correct": true,
     "feedback": "Correto: restaura o selo e confirma que os dispositivos de parada continuam atuando.",
     "id": "a1",
     "text": "Com o painel bloqueado, ligar o fio do borne 14 de K1 no mesmo borne de saída do S1 (lado da bobina), conferir o borne 13 na entrada do S1, e testar liga, desliga e a atuação do térmico",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Inseguro: depois de uma falta de energia, o motor religaria sozinho quando a energia voltasse.",
     "id": "a2",
     "text": "Trocar o botão de liga por um interruptor com trava, que fica ligado sozinho",
     "unsafe": true
    },
    {
     "correct": false,
     "feedback": "Gasta peça e tempo: o contator e o contato auxiliar estão bons.",
     "id": "a3",
     "text": "Trocar o contator por um novo",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Não resolve o defeito e tira a proteção do motor.",
     "id": "a4",
     "text": "Aumentar o ajuste do relé térmico para 4,5 A",
     "unsafe": true
    }
   ],
   "author": "",
   "causes": [
    {
     "correct": true,
     "id": "c1",
     "text": "O fio do contato de selo (K1 14) ficou desligado na troca da botoeira, então nada mantém a bobina energizada depois que S1 é solto"
    },
    {
     "correct": false,
     "id": "c2",
     "text": "Sobrecarga no motor fazendo o relé térmico abrir"
    },
    {
     "correct": false,
     "id": "c3",
     "text": "Bobina do contator com espiras em curto"
    }
   ],
   "conditions": "Painel 380 V, comando em 220 V. A esteira está parada aguardando o diagnóstico; o supervisor pede para não demorar.",
   "context": "A esteira leva caixas do setor de embalagem até a expedição. Na sexta-feira, um eletricista trocou a botoeira, que estava com o botão de liga emperrando. Na segunda de manhã, o operador abriu um chamado.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": true,
   "equipment": "Esteira transportadora com motor trifásico de 2 cv, partida direta com contator, relé térmico e botoeira liga/desliga",
   "hints": [
    "Pense no que mudou: só a botoeira foi trocada.",
    "O que mantém a bobina energizada depois que você solta o botão de liga?",
    "O térmico atuando pararia o motor mesmo com o botão apertado."
   ],
   "history": "A esteira funcionava sem problemas até a troca da botoeira na sexta-feira. Nenhuma outra peça do painel foi mexida, segundo a ordem de serviço.",
   "hypotheses": [
    {
     "correct": true,
     "id": "h1",
     "text": "O contato de selo K1 13-14 não está ligado em paralelo com o botão de liga (fio solto ou ligado no borne errado na troca da botoeira)"
    },
    {
     "correct": false,
     "id": "h2",
     "text": "O relé térmico está desarmando por sobrecarga"
    },
    {
     "correct": false,
     "id": "h3",
     "text": "A bobina do contator está com defeito"
    },
    {
     "correct": false,
     "id": "h4",
     "text": "O botão de desliga foi ligado como NA em vez de NF"
    },
    {
     "correct": false,
     "id": "h5",
     "text": "Falta de fase na alimentação do motor"
    }
   ],
   "level": 2,
   "objective": "Descobrir por que o motor não se mantém ligado e corrigir de forma que o comando volte a funcionar como antes.",
   "solution": {
    "explanation": "Na partida direta, quem mantém o contator ligado depois que o botão é solto é o contato de selo K1 13-14, em paralelo com S1. Na troca da botoeira, o fio do borne 14 não foi religado e ficou isolado com fita. O contator fechava enquanto S1 estava apertado e abria ao soltar. As correntes normais e o térmico sem atuação descartavam sobrecarga e falta de fase.",
    "lessons": [
     "Depois de qualquer troca de peça no painel, teste liga, desliga, selo e proteções.",
     "Desenhe ou fotografe a ligação antes de desmontar.",
     "Botão de liga é pulsador; o selo é o que mantém o motor ligado."
    ],
    "logic": [
     "O defeito apareceu logo depois da troca da botoeira, então a fiação dela é a primeira suspeita.",
     "O motor gira normal com S1 apertado: força, bobina e térmico funcionam.",
     "Parar ao soltar S1 é o sintoma exato de falta do selo.",
     "A inspeção com o painel bloqueado mostrou o fio do 14 solto."
    ],
    "mistakes": [
     "Trocar o contator sem medir.",
     "Mexer no ajuste do relé térmico.",
     "Fazer jumper com o painel energizado.",
     "Usar botão com trava no lugar do pulsador."
    ]
   },
   "status": "published",
   "summary": "Depois de uma manutenção no painel, o motor da esteira só funciona com o dedo no botão de liga.",
   "symptoms": [
    "Ao apertar o botão verde, o contator fecha e o motor gira normalmente",
    "Ao soltar o botão, o contator abre na hora e o motor para",
    "O botão vermelho de desliga funciona",
    "Nenhum disjuntor desarmou e o relé térmico não está atuado"
   ],
   "tags": [
    "comandos elétricos",
    "contator",
    "selo",
    "partida direta"
   ],
   "techInfo": [
    "Comando: fusível → relé térmico 95-96 → botão S0 (NF) → botão S1 (NA) → bobina K1 → neutro",
    "Contato auxiliar K1 13-14 em paralelo com S1",
    "Corrente nominal do motor: 3,0 A em 380 V; relé térmico ajustado em 3,0 A",
    "Botoeira nova: modelo com dois botões e um bloco de contato NA e outro NF"
   ],
   "tests": [
    {
     "how": "Olhar o indicador de atuação e o botão de rearme do relé térmico",
     "id": "t1",
     "insight": "Se o térmico abrisse, o motor pararia mesmo com S1 apertado, e o indicador mostraria a atuação. Hipótese de sobrecarga enfraquece.",
     "name": "Ver o estado do relé térmico",
     "reading": "",
     "result": "Relé não atuado, indicador na posição normal",
     "value": "util"
    },
    {
     "how": "Com S1 apertado, abraçar uma fase de cada vez na saída do relé térmico",
     "id": "t2",
     "insight": "Não há sobrecarga nem falta de fase: as três fases conduzem e estão equilibradas.",
     "name": "Medir a corrente do motor com alicate amperímetro",
     "reading": "Correntes equilibradas e abaixo do ajuste de 3,0 A",
     "result": "2,6 A, 2,7 A e 2,6 A",
     "value": "util"
    },
    {
     "how": "Com o painel desenergizado e bloqueado, conferir para onde vão os fios dos bornes 13 e 14 do contator",
     "id": "t3",
     "insight": "A botoeira antiga tinha um borne onde o fio do selo era ligado junto com o S1. Na nova, ele ficou sobrando.",
     "name": "Seguir a fiação do contato 13-14 de K1",
     "reading": "",
     "result": "Um fio sai do borne 14 e termina solto, com a ponta isolada com fita, dentro da botoeira nova; o borne 13 está ligado corretamente",
     "value": "util"
    },
    {
     "how": "Painel desenergizado; pressionar o contator pela tampa de teste e medir continuidade entre 13 e 14",
     "id": "t4",
     "insight": "O contato auxiliar está bom: o problema não é o contato, é a ligação.",
     "name": "Testar continuidade do contato 13-14 com o contator acionado manualmente",
     "reading": "0,2 Ω com o contator pressionado; aberto sem pressionar",
     "result": "Contato fecha normalmente",
     "value": "neutro"
    },
    {
     "how": "Com o painel energizado, medir entre A1 e A2",
     "id": "t5",
     "insight": "A bobina recebe tensão e o contator fecha; ela está boa. Isso não explica por que ela perde a alimentação.",
     "name": "Medir a tensão na bobina do contator com S1 apertado",
     "reading": "",
     "result": "220 V",
     "value": "neutro"
    },
    {
     "how": "Encostar um fio entre os bornes do S1 com tudo ligado",
     "id": "t6",
     "insight": "Trabalhar com jumper em painel energizado expõe a choque e a partida inesperada da esteira. Use as medições com o painel bloqueado.",
     "name": "Fazer um jumper no botão de liga com o painel energizado para ver se o motor segura",
     "reading": "",
     "result": "Teste não executado",
     "value": "inseguro"
    }
   ],
   "title": "A esteira que desliga quando o operador solta o botão",
   "track": "comandos",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "faturamento-duplicado": {
   "actions": [
    {
     "correct": true,
     "feedback": "Correto. Remove a multiplicação e cria um alarme para o próximo erro.",
     "id": "a1",
     "text": "Somar o faturamento só pela tabela pedidos (ou agrupar os pagamentos por pedido antes do JOIN), conferir com o financeiro e criar uma verificação mensal que compare os dois totais",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Um ajuste mágico que vai errar todo mês.",
     "id": "a2",
     "text": "Dividir o total de março por 1,3 para chegar perto do financeiro",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Inseguro. Destrói registros financeiros verdadeiros.",
     "id": "a3",
     "text": "Apagar as parcelas extras da tabela pagamentos",
     "unsafe": true
    },
    {
     "correct": false,
     "feedback": "Elimina também pedidos diferentes com o mesmo valor.",
     "id": "a4",
     "text": "Usar SELECT DISTINCT no valor_total",
     "unsafe": false
    }
   ],
   "author": "",
   "causes": [
    {
     "correct": false,
     "id": "c1",
     "text": "Importação duplicada de março"
    },
    {
     "correct": true,
     "id": "c2",
     "text": "O JOIN com pagamentos repete cada pedido parcelado uma vez por parcela, e o SUM soma o valor total várias vezes"
    },
    {
     "correct": false,
     "id": "c3",
     "text": "Fuso horário"
    },
    {
     "correct": false,
     "id": "c4",
     "text": "Erro da ferramenta de BI"
    },
    {
     "correct": false,
     "id": "c5",
     "text": "Pedidos cancelados somados"
    }
   ],
   "conditions": "A diferença aparece só a partir de março.",
   "context": "A gerente comercial acompanha o faturamento mensal num painel. A consulta junta a tabela pedidos com a tabela pagamentos.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": true,
   "equipment": "Painel de vendas com SQL e uma ferramenta de BI",
   "hints": [
    "A quantidade de linhas muda depois do JOIN?",
    "O que mudou em março no jeito de pagar?",
    "Quantas linhas um pedido parcelado tem na tabela pagamentos?"
   ],
   "history": "Em março a loja passou a aceitar pagamento parcelado em até 3 vezes.",
   "hypotheses": [
    {
     "correct": false,
     "id": "h1",
     "text": "Os dados de março foram importados duas vezes"
    },
    {
     "correct": true,
     "id": "h2",
     "text": "O JOIN repete os pedidos parcelados"
    },
    {
     "correct": false,
     "id": "h3",
     "text": "Diferença de fuso horário nas datas"
    },
    {
     "correct": false,
     "id": "h4",
     "text": "Erro na ferramenta de BI"
    },
    {
     "correct": false,
     "id": "h5",
     "text": "Descontos não foram aplicados"
    },
    {
     "correct": false,
     "id": "h6",
     "text": "Pedidos cancelados estão sendo somados"
    }
   ],
   "level": 3,
   "objective": "Encontrar a causa da diferença e corrigir o número do painel.",
   "solution": {
    "explanation": "Com o parcelamento, um pedido passou a ter até 3 linhas em pagamentos. O JOIN repete o pedido para cada parcela, e o SUM(p.valor_total) soma o valor cheio do pedido em cada repetição. É o erro clássico de \"fan-out\" em JOIN de um-para-muitos.",
    "lessons": [
     "Antes de somar depois de um JOIN, verifique se a relação é um-para-muitos.",
     "Compare COUNT(*) antes e depois de cada JOIN.",
     "Crie verificações automáticas contra uma fonte confiável."
    ],
    "logic": [
     "Depois do JOIN surgem 552 linhas a mais.",
     "As linhas extras são pedidos parcelados repetidos.",
     "A soma direta em pedidos bate com o financeiro.",
     "Importação, fuso e ferramenta não explicam a diferença."
    ],
    "mistakes": [
     "Confiar no total sem conferir a quantidade de linhas.",
     "Corrigir com fator mágico.",
     "Expor dados pessoais para pedir ajuda."
    ]
   },
   "status": "published",
   "summary": "O painel diz R$ 412 mil em março; o financeiro fechou R$ 318 mil. A quantidade de pedidos está certa.",
   "symptoms": [
    "O painel mostra R$ 412 mil em março; o financeiro fechou R$ 318 mil.",
    "Janeiro e fevereiro batem com o financeiro.",
    "A quantidade de pedidos no painel está correta."
   ],
   "tags": [
    "sql",
    "join",
    "bi",
    "dados"
   ],
   "techInfo": [
    "Consulta: SELECT SUM(p.valor_total) FROM pedidos p JOIN pagamentos g ON g.pedido_id = p.id WHERE p.data BETWEEN '2026-03-01' AND '2026-03-31';",
    "pedidos: uma linha por pedido. pagamentos: uma linha por pagamento recebido."
   ],
   "tests": [
    {
     "how": "SELECT COUNT(*) nas duas consultas",
     "id": "t1",
     "insight": "O JOIN criou 552 linhas a mais: algo está se multiplicando.",
     "name": "Contar as linhas antes e depois do JOIN",
     "reading": "1.240 → 1.792 linhas",
     "result": "Pedidos de março: 1.240 linhas. Depois do JOIN: 1.792 linhas.",
     "value": "util"
    },
    {
     "how": "GROUP BY pedido_id HAVING COUNT(*) > 1",
     "id": "t2",
     "insight": "Cada parcela gera uma linha, e o valor total do pedido é somado em cada uma.",
     "name": "Procurar pedido_id repetido no resultado do JOIN",
     "reading": "repetidos: 2x e 3x",
     "result": "As linhas extras vêm de pedidos que aparecem 2 ou 3 vezes. Todos são parcelados.",
     "value": "util"
    },
    {
     "how": "SELECT SUM(valor_total) FROM pedidos ...",
     "id": "t3",
     "insight": "Confirma que o problema nasce no JOIN.",
     "name": "Somar valor_total direto da tabela pedidos, sem JOIN",
     "reading": "R$ 318.400",
     "result": "R$ 318.400, igual ao financeiro.",
     "value": "util"
    },
    {
     "how": "Contagem de ids únicos em pedidos",
     "id": "t4",
     "insight": "Descarta importação duplicada.",
     "name": "Verificar se março foi importado duas vezes",
     "reading": "",
     "result": "Cada pedido aparece uma única vez na tabela pedidos.",
     "value": "neutro"
    },
    {
     "how": "Comparar com o sistema de origem",
     "id": "t5",
     "insight": "Não explica R$ 94 mil.",
     "name": "Conferir o fuso horário das datas",
     "reading": "",
     "result": "Datas em horário de Brasília. Diferença afetaria só pedidos perto da meia-noite do último dia.",
     "value": "neutro"
    },
    {
     "how": "Instalação",
     "id": "t6",
     "insight": "Depure a consulta, não a ferramenta de visualização.",
     "name": "Reinstalar a ferramenta de BI",
     "reading": "",
     "result": "O número continua R$ 412 mil: a ferramenta só exibe o que a consulta devolve.",
     "value": "irrelevante"
    },
    {
     "how": "Compartilhamento externo",
     "id": "t7",
     "insight": "Proteja dados pessoais sempre.",
     "name": "Mandar a planilha completa de clientes num grupo público pedindo ajuda",
     "reading": "",
     "result": "Bloqueado. Expõe dados pessoais de clientes, o que viola a LGPD. Compartilhe só dados de exemplo ou anonimizados.",
     "value": "inseguro"
    }
   ],
   "title": "Painel de vendas mostra faturamento maior do que o real",
   "track": "dados",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "ihm-fim-de-ano": {
   "actions": [
    {
     "correct": true,
     "feedback": "Correto: resolve a parada e ataca a causa de fundo, que foi adiar a manutenção.",
     "id": "a1",
     "text": "Buscar um IHM compatível com urgência, extrair e adaptar o projeto para o novo hardware, testar a linha e depois abrir um plano: IHM reserva no estoque, cópia de segurança do projeto atualizada e troca preventiva dos equipamentos no fim da vida útil",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Inseguro: a linha fica sem a interface de alarmes e de confirmação do operador.",
     "id": "a2",
     "text": "Forçar as saídas no CLP e rodar a linha sem IHM até depois das festas",
     "unsafe": true
    },
    {
     "correct": false,
     "feedback": "Gasta muito e não resolve a falha, que está no IHM.",
     "id": "a3",
     "text": "Trocar o CLP inteiro, já que IHM e CLP são da mesma época",
     "unsafe": false
    }
   ],
   "author": "",
   "causes": [
    {
     "correct": true,
     "id": "c1",
     "text": "Falha de hardware do IHM no fim da vida útil, depois de meses de sinais ignorados"
    },
    {
     "correct": false,
     "id": "c2",
     "text": "Falha de CPU do CLP"
    },
    {
     "correct": false,
     "id": "c3",
     "text": "Cabo de comunicação rompido"
    }
   ],
   "conditions": "Noite de confraternização, equipe técnica reduzida. Não há IHM reserva no almoxarifado.",
   "context": "É fim de ano e a equipe está na confraternização da empresa quando a linha para. O operador informa que a tela do IHM congelou e não responde. Sem o IHM, não dá para selecionar receitas, reconhecer alarmes nem dar partida no ciclo automático.",
   "createdAt": "2026-10-24T19:40:00.000Z",
   "demo": true,
   "equipment": "Linha de produção automatizada com CLP Siemens e IHM (interface homem-máquina) de painel",
   "hints": [
    "O CLP está em RUN. Onde mais pode estar o problema?",
    "O que o histórico de meses de travamentos está dizendo?",
    "Além de voltar a produzir, o que precisa mudar para isso não se repetir?"
   ],
   "history": "O equipamento dava sinais de fim de vida útil havia meses. A troca nunca foi programada, com a justificativa de que 'ainda está funcionando'.",
   "hypotheses": [
    {
     "correct": true,
     "id": "h1",
     "text": "O IHM chegou ao fim da vida útil e o hardware falhou"
    },
    {
     "correct": false,
     "id": "h2",
     "text": "O CLP parou e a linha caiu por falha de CPU"
    },
    {
     "correct": false,
     "id": "h3",
     "text": "Falta a alimentação de 24 V do painel"
    },
    {
     "correct": false,
     "id": "h4",
     "text": "O cabo de rede entre IHM e CLP se rompeu"
    },
    {
     "correct": false,
     "id": "h5",
     "text": "Um operador alterou um parâmetro da receita"
    }
   ],
   "level": 3,
   "objective": "Identificar a causa da parada, devolver a linha à produção com segurança e evitar que isso se repita.",
   "solution": {
    "explanation": "Este desafio é baseado num caso vivido pelo autor do Volter. O IHM já dava sinais de fim de vida havia meses: travava, perdia a comunicação, e a equipe contornava com 'jeitinhos'. Na noite da confraternização, ele falhou de vez. A saída foi direto da festa para o aeroporto, buscar um equipamento substituto, e depois extrair, interpretar e adaptar o programa do IHM antigo para o novo hardware, junto com o encarregado da equipe. Somando horas de linha parada, deslocamento emergencial, equipamento comprado fora do planejamento, hora técnica em regime de urgência e produção perdida no pior momento do ano, a conta ficou muito acima do que custaria uma troca planejada.",
    "lessons": [
     "Uma troca planejada custa uma fração de uma troca de emergência.",
     "Sinais repetidos de falha são um pedido de substituição, não algo a contornar.",
     "Manutenção não é a linha que drena o resultado: é a que protege tudo o que gera resultado."
    ],
    "logic": [
     "CLP em RUN e 24 V presentes: o controle e a alimentação estavam bons.",
     "O IHM reiniciava em ciclo antes de carregar o projeto: falha do próprio equipamento.",
     "O histórico mostrava meses de travamentos sem ordem de substituição.",
     "A correção imediata é a troca; a correção de verdade é parar de adiar a manutenção."
    ],
    "mistakes": [
     "Tratar 'ainda está funcionando' como sinônimo de 'está bom'.",
     "Não ter cópia de segurança atualizada do projeto do IHM.",
     "Forçar saídas para produzir sem a interface de operação."
    ]
   },
   "status": "published",
   "summary": "Baseado num caso real: a interface de operação de uma linha de produção travou de vez durante a confraternização da empresa, e a linha parou junto.",
   "symptoms": [
    "Tela do IHM congelada, sem resposta ao toque",
    "Linha parada no meio do turno",
    "Nas semanas anteriores, o IHM travava de vez em quando e a comunicação com o CLP caía em alguns momentos",
    "Os operadores já tinham 'jeitinhos' para contornar: desligar e religar o painel, esperar e tentar de novo"
   ],
   "tags": [
    "IHM",
    "CLP",
    "manutenção preventiva",
    "caso real"
   ],
   "techInfo": [
    "Alimentação do IHM em 24 V CC",
    "Comunicação IHM–CLP por rede industrial",
    "O CLP continua em RUN, sem falha de CPU",
    "O projeto do IHM não tem cópia de segurança atualizada no servidor"
   ],
   "tests": [
    {
     "how": "Olhar os LEDs da CPU e o diagnóstico pelo software de programação",
     "id": "t1",
     "insight": "O CLP está bom: o problema está na interface, não no controle.",
     "name": "Verificar o estado do CLP",
     "reading": "RUN · sem falhas",
     "result": "CPU em RUN, sem erros no buffer de diagnóstico",
     "value": "util"
    },
    {
     "how": "Multímetro nos bornes de 24 V CC do IHM",
     "id": "t2",
     "insight": "A alimentação está correta; descarta falta de energia.",
     "name": "Medir a alimentação do IHM",
     "reading": "24,1 V",
     "result": "24,1 V estáveis",
     "value": "util"
    },
    {
     "how": "Desligar e religar a alimentação do IHM",
     "id": "t3",
     "insight": "Reinício em ciclo, depois de meses de travamentos, aponta para falha de hardware (memória ou placa) no fim da vida útil.",
     "name": "Reiniciar o IHM e observar a inicialização",
     "reading": "",
     "result": "O IHM entra na tela de inicialização, trava no meio da carga do projeto e reinicia sozinho, em ciclo",
     "value": "util"
    },
    {
     "how": "Trocar o cabo por um reserva e conferir os conectores",
     "id": "t4",
     "insight": "O cabo não é a causa, já que o IHM nem chega a carregar o projeto.",
     "name": "Testar o cabo de comunicação",
     "reading": "",
     "result": "Nada muda; o IHM continua reiniciando antes de tentar comunicar",
     "value": "neutro"
    },
    {
     "how": "Livro de turno e ordens de serviço dos últimos meses",
     "id": "t5",
     "insight": "O equipamento avisou por meses; os sinais foram contornados em vez de tratados.",
     "name": "Consultar o histórico de ocorrências da linha",
     "reading": "",
     "result": "Vários registros de 'IHM travou, reiniciado pelo operador', sem ordem de serviço de substituição",
     "value": "util"
    },
    {
     "how": "Forçar as saídas de partida pelo software de programação, com a linha energizada",
     "id": "t6",
     "insight": "Forçar saídas ignora intertravamentos e a confirmação de alarmes que o operador faria pelo IHM. Risco de acidente e de dano à máquina.",
     "name": "Forçar saídas no CLP para rodar a linha sem o IHM",
     "reading": "",
     "result": "Teste não executado",
     "value": "inseguro"
    }
   ],
   "title": "O IHM que já avisava e parou na festa de fim de ano",
   "track": "comandos",
   "updatedAt": "2026-10-24T19:40:00.000Z"
  },
  "luz-noturna-sem-base": {
   "actions": [
    {
     "correct": true,
     "feedback": "Correto: corrige a causa e confirma pela medição.",
     "id": "a1",
     "text": "Reaquecer a emenda com um pouco de solda nova até ficar lisa e brilhante, conferir as outras soldas e medir de novo a base no escuro",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Não resolve: a falha está na emenda, e trocar tudo ainda expõe a placa a mais calor.",
     "id": "a2",
     "text": "Trocar o LDR, o transistor e o LED de uma vez",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Inseguro para o circuito: tensão acima do projeto pode queimar o LED e o transistor, e não corrige o mau contato.",
     "id": "a3",
     "text": "Ligar o circuito numa fonte de 24 V para 'forçar' a corrente",
     "unsafe": true
    }
   ],
   "author": "",
   "causes": [
    {
     "correct": true,
     "id": "c1",
     "text": "Solda fria em um terminal do resistor de base: a tensão do divisor não chega à base, e o transistor fica cortado"
    },
    {
     "correct": false,
     "id": "c2",
     "text": "LDR danificado pelo calor do ferro"
    },
    {
     "correct": false,
     "id": "c3",
     "text": "Bateria sem carga"
    }
   ],
   "conditions": "Bancada, bateria de 9 V. Multímetro disponível.",
   "context": "O circuito foi testado na protoboard e funcionou: no escuro, o LED acendia. Depois, foi transferido para uma placa padrão soldada, para ficar definitivo. Na placa, o LED não acende em nenhuma situação.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": true,
   "equipment": "Luz noturna com LDR, transistor BC547 e LED, montada em placa padrão e alimentada por bateria de 9 V",
   "hints": [
    "A tensão chega ao divisor? E à base?",
    "Se existe tensão num ponto e não existe no ponto seguinte, o defeito está entre eles.",
    "Olhe as emendas de perto: a primeira placa soldada costuma ter alguma."
   ],
   "history": "Mesmo esquema e mesmos componentes da protoboard, agora soldados. Foi a primeira placa soldada pelo aluno.",
   "hypotheses": [
    {
     "correct": true,
     "id": "h1",
     "text": "Uma emenda de solda com mau contato (solda fria) interrompe o caminho até a base"
    },
    {
     "correct": false,
     "id": "h2",
     "text": "O LDR queimou com o calor"
    },
    {
     "correct": false,
     "id": "h3",
     "text": "O LED foi soldado invertido"
    },
    {
     "correct": false,
     "id": "h4",
     "text": "A bateria está fraca"
    },
    {
     "correct": false,
     "id": "h5",
     "text": "Uma ponte de solda liga a base ao 0 V"
    }
   ],
   "level": 2,
   "objective": "Encontrar por que o LED não acende na placa e corrigir sem danificar os componentes.",
   "solution": {
    "explanation": "O divisor de tensão funcionava (6,8 V no escuro), mas a base ficava em 0 V. A interrupção estava no resistor de 1 kΩ: uma emenda com solda fria, opaca e rachada, não fazia contato com o terminal. Sem corrente na base, o transistor ficava cortado e o LED apagado.",
    "lessons": [
     "Siga a tensão ponto a ponto: onde ela some, está o defeito.",
     "Emenda boa é lisa e brilhante.",
     "Meça antes de trocar."
    ],
    "logic": [
     "A alimentação chegava à placa.",
     "O divisor respondia ao escuro, então LDR e resistor de cima estavam bons.",
     "A base em 0 V mostrou que a tensão se perdia entre o divisor e a base.",
     "A lupa revelou a solda fria no resistor de base."
    ],
    "mistakes": [
     "Trocar componentes sem medir.",
     "Aumentar a tensão para 'compensar'.",
     "Confiar que uma emenda está boa só porque o componente não cai."
    ]
   },
   "status": "published",
   "summary": "A luz noturna com LDR e transistor funcionou na protoboard, mas na placa soldada o LED fica apagado mesmo no escuro.",
   "symptoms": [
    "LED apagado no claro e no escuro",
    "Nada esquenta",
    "A bateria é nova"
   ],
   "tags": [
    "solda",
    "transistor",
    "LDR",
    "diagnóstico"
   ],
   "techInfo": [
    "Divisor: resistor de 10 kΩ em cima, LDR embaixo; o meio vai à base por 1 kΩ",
    "Coletor: LED e resistor de 470 Ω até +9 V; emissor no 0 V",
    "Na protoboard, a base ficava em torno de 0,7 V no escuro"
   ],
   "tests": [
    {
     "how": "Multímetro em V⎓, pontas no +9 V e no 0 V da placa",
     "id": "t1",
     "insight": "A alimentação chega à placa: a bateria e os fios dela estão bons.",
     "name": "Medir a tensão da bateria nos pinos de alimentação da placa",
     "reading": "9,2 V",
     "result": "9,2 V nos pinos da placa",
     "value": "util"
    },
    {
     "how": "Tampar o LDR e medir entre o ponto do meio do divisor e o 0 V",
     "id": "t2",
     "insight": "O divisor e o LDR funcionam: no escuro, a tensão sobe como deveria.",
     "name": "Medir a tensão no meio do divisor, no escuro",
     "reading": "6,8 V",
     "result": "6,8 V no meio do divisor",
     "value": "util"
    },
    {
     "how": "Ponta vermelha no terminal da base, preta no 0 V",
     "id": "t3",
     "insight": "A tensão existe no divisor mas não chega à base: a interrupção está no caminho entre os dois, isto é, no resistor de 1 kΩ ou nas soldas dele.",
     "name": "Medir a tensão na base do transistor, no escuro",
     "reading": "0,00 V",
     "result": "0 V na base",
     "value": "util"
    },
    {
     "how": "Olhar as soldas dos dois terminais do resistor de 1 kΩ",
     "id": "t4",
     "insight": "Aspecto típico de solda fria: a solda não molhou o terminal.",
     "name": "Inspecionar as emendas do resistor de base com lupa",
     "reading": "",
     "result": "Uma das emendas está opaca, granulada e com uma fenda em volta do terminal",
     "value": "util"
    },
    {
     "how": "Placa desligada, multímetro no teste de diodo sobre o LED",
     "id": "t5",
     "insight": "O LED está bom e na posição certa.",
     "name": "Testar o LED com o teste de diodo",
     "reading": "1,8 V",
     "result": "Conduz no sentido certo e acende fraquinho; no outro sentido, não conduz",
     "value": "neutro"
    },
    {
     "how": "Dessoldar e soldar outro BC547",
     "id": "t6",
     "insight": "Trocar peças antes de medir gasta tempo e ainda arrisca danificar a placa com calor.",
     "name": "Trocar o transistor por um novo",
     "reading": "",
     "result": "LED continua apagado",
     "value": "irrelevante"
    }
   ],
   "title": "O sensor de luz montado na placa não acende o LED",
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "rag-preco-inventado": {
   "actions": [
    {
     "correct": true,
     "feedback": "Correto. Corrige o dado, a causa (indexação manual) e o comportamento quando falta informação.",
     "id": "a1",
     "text": "Reindexar a base, disparar a indexação automaticamente sempre que um documento mudar, instruir o assistente a dizer \"não encontrei essa informação\" quando não houver trecho e criar um teste com perguntas de preço",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Qualquer modelo erra se o preço não chega até ele.",
     "id": "a2",
     "text": "Trocar o modelo por outro mais avançado",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Resolve hoje e quebra na próxima mudança de preço. O prompt não é lugar de tabela.",
     "id": "a3",
     "text": "Escrever o preço do Premium direto no prompt",
     "unsafe": false
    },
    {
     "correct": false,
     "feedback": "Inseguro. Chaves compartilhadas vazam e geram custos e acessos indevidos.",
     "id": "a4",
     "text": "Publicar a chave da API no grupo da equipe para todos testarem",
     "unsafe": true
    }
   ],
   "author": "",
   "causes": [
    {
     "correct": false,
     "id": "c1",
     "text": "O modelo de IA está com defeito"
    },
    {
     "correct": true,
     "id": "c2",
     "text": "A base de conhecimento está desatualizada: o PDF novo não foi indexado, e o prompt não manda admitir quando a informação não está nos trechos"
    },
    {
     "correct": false,
     "id": "c3",
     "text": "A temperatura 0,7 faz o modelo inventar números"
    },
    {
     "correct": false,
     "id": "c4",
     "text": "A API do provedor está instável"
    },
    {
     "correct": false,
     "id": "c5",
     "text": "Os clientes perguntam de forma errada"
    }
   ],
   "conditions": "Acontece em qualquer pergunta sobre o Plano Premium, a qualquer hora.",
   "context": "Uma loja online usa um assistente que responde dúvidas consultando a tabela de planos e o regulamento (RAG). Os documentos ficam numa pasta; um fluxo no n8n divide cada arquivo em trechos, gera embeddings e grava tudo num banco vetorial.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": true,
   "equipment": "Assistente de atendimento com RAG: n8n, banco vetorial e API de modelo de linguagem",
   "hints": [
    "Antes de culpar o modelo, veja o que foi entregue a ele: quais trechos a busca retornou?",
    "Quando o documento novo entrou no banco vetorial?",
    "Por que o assistente inventou em vez de dizer que não sabia?"
   ],
   "history": "A tabela de preços em PDF foi substituída na pasta há 6 dias. Ninguém alterou o fluxo do n8n nem o prompt.",
   "hypotheses": [
    {
     "correct": false,
     "id": "h1",
     "text": "O modelo de IA está com defeito ou desatualizado"
    },
    {
     "correct": true,
     "id": "h2",
     "text": "A base de conhecimento não foi atualizada depois da troca do PDF"
    },
    {
     "correct": false,
     "id": "h3",
     "text": "A temperatura alta faz o modelo inventar"
    },
    {
     "correct": false,
     "id": "h4",
     "text": "A API do modelo está instável"
    },
    {
     "correct": false,
     "id": "h5",
     "text": "Os clientes estão escrevendo o nome do plano errado"
    },
    {
     "correct": false,
     "id": "h6",
     "text": "O prompt não manda admitir quando a informação não existe"
    }
   ],
   "level": 3,
   "objective": "Descobrir por que o assistente informa um valor errado e corrigir de um jeito que não volte a acontecer.",
   "solution": {
    "explanation": "O PDF com o preço novo foi colocado na pasta, mas o fluxo de indexação só roda à mão e não foi executado. A busca devolveu apenas trechos da tabela antiga, e o prompt não pedia para o assistente admitir quando a informação não está nos documentos. Sem o dado certo, o modelo completou com um valor plausível: é a chamada alucinação.",
    "lessons": [
     "Em RAG, depure primeiro a recuperação: o que entrou no contexto?",
     "Indexação precisa ser automática e disparada pela mudança do documento.",
     "Diga ao modelo o que fazer quando não houver fonte, e teste isso."
    ],
    "logic": [
     "A busca não trouxe nenhum trecho com \"Premium\": o dado não chegou ao modelo.",
     "A última indexação é anterior ao PDF novo: o documento nunca entrou no banco.",
     "O prompt não tem regra para falta de informação: o modelo preencheu a lacuna.",
     "Temperatura e API não mudam o resultado: não são a causa."
    ],
    "mistakes": [
     "Trocar de modelo sem olhar o que a busca retornou.",
     "Achar que temperatura 0 impede invenção.",
     "Testar com a chave da API exposta no navegador."
    ]
   },
   "status": "published",
   "summary": "O assistente com RAG responde um valor errado para o plano novo. A API está no ar e ninguém mexeu no fluxo.",
   "symptoms": [
    "Clientes perguntam o preço do novo Plano Premium e o assistente responde R$ 89,90.",
    "O Plano Premium custa R$ 129,90 e foi lançado na semana passada.",
    "Perguntas sobre os planos antigos são respondidas corretamente."
   ],
   "tags": [
    "rag",
    "n8n",
    "alucinação",
    "embeddings"
   ],
   "techInfo": [
    "O fluxo de indexação no n8n é executado manualmente.",
    "Prompt do sistema: \"Você é um atendente simpático. Responda às dúvidas dos clientes.\"",
    "Temperatura do modelo: 0,7."
   ],
   "tests": [
    {
     "how": "Log do nó de busca no n8n",
     "id": "t1",
     "insight": "O modelo nunca recebeu o preço certo. Ele respondeu com o que tinha à mão.",
     "name": "Ver os trechos recuperados para \"Quanto custa o Plano Premium?\"",
     "reading": "3 trechos · 0 com \"Premium\"",
     "result": "A busca devolveu 3 trechos, todos da tabela antiga. Nenhum menciona \"Premium\". Maior similaridade: 0,61.",
     "value": "util"
    },
    {
     "how": "Histórico de execuções do n8n",
     "id": "t2",
     "insight": "Confirma que o documento novo nunca entrou no banco vetorial.",
     "name": "Ver a data da última execução do fluxo de indexação",
     "reading": "última indexação: 41 dias",
     "result": "Última indexação: há 41 dias. O PDF novo foi colocado na pasta há 6 dias.",
     "value": "util"
    },
    {
     "how": "Configuração do nó do modelo",
     "id": "t3",
     "insight": "Explica por que o erro virou invenção em vez de um \"não sei\".",
     "name": "Ler o prompt do sistema",
     "reading": "",
     "result": "O prompt não diz o que fazer quando a resposta não estiver nos trechos. Nada impede o modelo de completar com um valor provável.",
     "value": "util"
    },
    {
     "how": "Chamada direta à API",
     "id": "t4",
     "insight": "Mostra que o modelo depende dos trechos, mas não aponta o que falhou.",
     "name": "Fazer a mesma pergunta ao modelo sem RAG",
     "reading": "",
     "result": "Sem os documentos, o modelo também responde um valor genérico. Ele não conhece os preços da loja.",
     "value": "neutro"
    },
    {
     "how": "Configuração do nó do modelo",
     "id": "t5",
     "insight": "Temperatura controla variação, não cria conhecimento que não está no contexto.",
     "name": "Baixar a temperatura para 0",
     "reading": "temperatura 0 · R$ 89,90",
     "result": "As respostas ficam mais repetitivas, mas o preço continua errado: R$ 89,90.",
     "value": "neutro"
    },
    {
     "how": "Página de status do provedor",
     "id": "t6",
     "insight": "Descarta instabilidade.",
     "name": "Verificar o status da API do modelo",
     "reading": "200 OK · 1,2 s",
     "result": "API operando normalmente. Tempo médio de resposta: 1,2 s.",
     "value": "neutro"
    },
    {
     "how": "Alteração do modelo",
     "id": "t7",
     "insight": "O problema está no que chega ao modelo, não no tamanho dele.",
     "name": "Trocar para um modelo maior e mais caro",
     "reading": "",
     "result": "O modelo maior responde o mesmo valor errado, com mais confiança.",
     "value": "irrelevante"
    },
    {
     "how": "Alteração no front-end",
     "id": "t8",
     "insight": "Nunca exponha chaves de API.",
     "name": "Colar a chave da API no código da página para testar direto do navegador",
     "reading": "",
     "result": "Teste bloqueado. Uma chave no código do navegador fica visível para qualquer visitante, que pode usá-la, gerar custos e acessar dados. Chaves ficam só no servidor.",
     "value": "inseguro"
    }
   ],
   "title": "Chatbot de atendimento inventa um preço que não existe",
   "track": "agentes",
   "updatedAt": "2026-10-24T00:30:00.000Z"
  }
 },
 "lessons": {
  "carreira-experiencia-vale": {
   "author": "",
   "bancada": "O curso do SENAI não foi o começo da carreira técnica. Foi a validação de uma que já estava andando havia cinco anos, escondida em consertos feitos em casa de madrugada e num TK83 estudado por conta própria.\n\nSe você está começando depois dos 40, olhe para a sua história com esse mesmo olhar: provavelmente boa parte do que a tecnologia pede você já faz há anos, só que com outro nome.",
   "body": "Quem começa em tecnologia depois dos 40 costuma achar que começa do zero. Quase nunca é verdade. Esta lição conta uma trajetória real, a do autor do Volter, e mostra como cada fase dela virou uma habilidade que a tecnologia valoriza. Depois, é a sua vez.\n\n## Uma trajetória em capítulos\n- **1982 a 1992, o balcão:** dez anos vendendo sapatos. Atender uma pessoa de cada vez, entender o que ela precisava mesmo quando ela não sabia dizer, e fechar a venda sem forçar.\n- **1984, a curiosidade:** ainda solteiro, a compra de um TK83, um dos primeiros computadores pessoais vendidos no Brasil. Sem nenhuma razão prática, só vontade de entender.\n- **1988, o motivo:** nasce o primeiro de três filhos. Com inflação alta e faculdade difícil de alcançar, vem a decisão de estudar para uma profissão mais rentável.\n- **1992 a 1997, a virada:** trabalho com eletrônica e consertos em casa para completar a renda. Na ponta dos dedos, a evolução inteira dos componentes: válvula, transistor, circuito integrado, SMD.\n- **1996 e 1997, o diploma:** curso de eletrônica e automação no SENAI, que validou cinco anos de prática.\n- **1997 e 1998, a escolha:** um aviso no quadro da escola, um estágio numa indústria e, aos 34 anos, a contratação. O RH oferecia a operação, que pagava mais; a escolha foi insistir na área técnica, porque era ela que levava aonde se queria chegar.\n- **Anos de indústria:** automação, CLPs, IHMs, depois robótica, com Siemens STEP 7 e SIMATIC, treinamentos em linhas de engarrafamento no Brasil e no México.\n- **Hoje:** manutenção de equipamentos biomédicos, como autoclaves e instrumentos odontológicos, onde do outro lado da máquina existe um paciente.\n- **2018 e 2022, de volta aos estudos:** Big Data, filosofia e, depois, HTML, CSS, JavaScript, Git e Linux.\n- **Agora:** inteligência artificial aplicada à manutenção e à engenharia clínica, e este aplicativo.\n\n## O que cada fase ensinou, na língua da tecnologia\n- **Vender sapatos → levantar requisitos.** Entender o que o cliente precisa, mesmo quando ele não sabe explicar, é exatamente o trabalho de quem desenha um sistema ou um produto.\n- **Consertar aparelhos em casa → depurar.** Achar um defeito com método, medindo antes de trocar, é o mesmo raciocínio de achar um erro num programa.\n- **Atravessar da válvula ao SMD → aprender continuamente.** Tecnologia não se domina de uma vez; ela vem em camadas que se sobrepõem. Quem acompanha cada camada nunca fica realmente para trás.\n- **Indústria e manutenção → pensar em sistemas.** Uma linha de produção é uma rede de máquinas que dependem umas das outras, como os serviços de um sistema na nuvem. E parada não planejada sempre custa mais caro que a troca planejada.\n- **Equipamentos de saúde → responsabilidade e qualidade.** Testar com seriedade porque alguém depende do resultado é o que separa um software confiável de um que só \"funciona na minha máquina\".\n- **Escolher o estágio aos 34 → pensar no longo prazo.** O caminho mais curto no salário nem sempre é o caminho mais curto até onde se quer chegar.\n\n## O padrão que se repete\nCada virada começou do mesmo jeito: alguém disposto a admitir que ainda havia algo a aprender, mesmo com anos de experiência. E quase sempre o diploma veio **depois** da competência, não antes. Isso vale para você: o que você já sabe fazer conta, mesmo sem certificado.\n\n## Agora é a sua vez\nPegue papel ou uma planilha e faça três colunas:\n- **O que eu fiz:** cada emprego, função, bico ou responsabilidade, inclusive em casa e na comunidade.\n- **O que eu aprendi a fazer:** atender, negociar, organizar estoque, ensinar, consertar, coordenar equipe, cuidar de alguém.\n- **Como isso se chama em tecnologia:** levantar requisitos, atendimento ao cliente e suporte, gestão de projetos, testes e qualidade, documentação, treinamento, análise de dados.\n\nSe ficar em dúvida na terceira coluna, peça ajuda a uma IA: descreva o que você fazia, com detalhes, e pergunte quais habilidades de tecnologia aquilo mostra. Depois confira se a resposta faz sentido para você.\n\n## Projeto final\n**Lista das habilidades que você já tem.** Termine com pelo menos dez linhas na tabela e escolha as três habilidades que você mais quer mostrar num currículo ou no LinkedIn. Elas serão o ponto de partida dos próximos temas desta etapa.",
   "createdAt": "2026-10-24T19:40:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T19:40:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Experiência fora da tecnologia vira habilidade de tecnologia.",
    "Atender bem é levantar requisitos; consertar com método é depurar.",
    "O diploma costuma vir depois da competência.",
    "Aprender sempre um passo à frente da necessidade."
   ],
   "minutes": 12,
   "order": 1,
   "questions": [
    {
     "answer": 2,
     "explain": "Entender o que a pessoa precisa, mesmo quando ela não sabe explicar, é a base de qualquer projeto de sistema.",
     "options": [
      "Programação de CLP",
      "Levantamento de requisitos e atendimento ao cliente",
      "Solda de componentes SMD",
      "Nenhuma habilidade útil"
     ],
     "prompt": "Na trajetória contada, a experiência de vender sapatos se traduz em tecnologia como:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Foi uma aposta no longo prazo, que se pagou em décadas na área técnica.",
     "options": [
      "Porque a operação não tinha vaga",
      "Porque o estágio levava à área em que se queria construir carreira",
      "Porque o estágio pagava mais",
      "Por indicação do RH"
     ],
     "prompt": "Por que, aos 34 anos, a escolha foi o estágio técnico e não a operação, que pagava mais?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "O diploma costuma validar uma competência que já existe; a experiência conta.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Segundo a lição, quem não tem diploma em tecnologia não tem nenhuma habilidade para mostrar.",
     "type": "vf"
    },
    {
     "answer": 1,
     "explain": "É o mesmo raciocínio: testar hipóteses e isolar o defeito.",
     "options": [
      "Depurar com método",
      "Escrever documentação",
      "Vender software",
      "Montar servidores"
     ],
     "prompt": "Consertar aparelhos medindo antes de trocar peças corresponde, em programação, a:",
     "type": "mc"
    }
   ],
   "status": "published",
   "summary": "A trajetória de quem saiu do balcão de uma loja, passou pela eletrônica, pela indústria e pelos equipamentos de saúde e, depois dos 50, foi aprender a programar.",
   "title": "Sua experiência vale: traduzindo anos de trabalho para a tecnologia",
   "track": "carreira",
   "updatedAt": "2026-10-24T19:40:00.000Z"
  },
  "cmd-contatores": {
   "author": "",
   "bancada": "## Camada sobre camada\nNa indústria, os painéis com contatores e botoeiras foram o primeiro degrau. Depois vieram os CLPs e as IHMs, e por fim a robótica industrial, programada com Siemens STEP 7 e o ambiente SIMATIC.\n\nCada camada nova nunca substituiu a anterior: somou-se a ela. Quem entende o comando com contatores entende o programa ladder de um CLP com muito mais profundidade, e quem entende o CLP chega à robótica com uma base que poucos têm. Por isso vale a pena aprender bem esta lição, mesmo que o seu objetivo seja a automação moderna.",
   "body": "Um painel de comando separa dois circuitos: o de **força**, que leva a corrente grande até o motor, e o de **comando**, que decide quando o motor liga. O comando usa correntes pequenas e botões leves; a força passa pelos contatos robustos do contator.\n\n## Contator\nÉ uma chave operada por uma **bobina**. Quando a bobina recebe tensão (terminais **A1 e A2**), o eletroímã puxa os contatos.\n- **Contatos principais** (1-2, 3-4, 5-6): ligam as três fases do motor.\n- **Contatos auxiliares** para o comando:\n  - **NA** (normalmente aberto), numerados com final 3-4, como **13-14**: fecham quando a bobina é energizada.\n  - **NF** (normalmente fechado), com final 1-2, como **21-22**: abrem quando a bobina é energizada.\n\nUm detalhe que confunde: \"normalmente\" quer dizer **com a bobina desligada**.\n\n## Relé auxiliar e temporizador\nO **relé auxiliar** é um contator pequeno, só com contatos de comando, usado para multiplicar contatos ou fazer lógica. O **relé temporizador** muda os contatos depois de um tempo ajustado, por exemplo para a troca de estrela para triângulo.\n\n## Relé térmico (de sobrecarga)\nFica no circuito de força, depois do contator. Se o motor puxa corrente acima do valor ajustado por tempo demais, ele **abre o contato 95-96**, que está em série com a bobina do contator, e o motor desliga. O contato **97-98** pode acender uma lâmpada de defeito. Ajuste-o pela **corrente nominal da placa do motor**.\n\n## Botoeiras e sinalização\n- **Botão de liga:** contato **NA**, normalmente verde ou preto.\n- **Botão de desliga:** contato **NF**, vermelho. Fica em série com tudo, para que, se o fio dele romper, o motor desligue em vez de ficar sem como parar.\n- **Botão de emergência:** cogumelo vermelho com trava, contato NF.\n- **Sinaleiros:** lâmpadas que indicam ligado, desligado e defeito.\n\n## Proteção do circuito\nAntes de tudo isso vêm os **fusíveis ou disjuntores motor** da força e um disjuntor ou fusível próprio do comando.\n\n## Projeto final\n**Diagrama de comando liga-desliga.** Desenhe o diagrama de comando de uma partida direta com botão de liga, desliga, relé térmico e sinaleiro de motor ligado.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Força leva a corrente do motor; comando decide quando ligar.",
    "Bobina A1-A2; NA final 3-4; NF final 1-2.",
    "Relé térmico abre o 95-96 na sobrecarga.",
    "Desliga e emergência sempre NF."
   ],
   "minutes": 9,
   "order": 2,
   "questions": [
    {
     "answer": 2,
     "explain": "Final 3-4 indica NA.",
     "options": [
      "Principais",
      "Auxiliares normalmente abertos",
      "Auxiliares normalmente fechados",
      "Da bobina"
     ],
     "prompt": "Os contatos 13-14 de um contator são:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "É uma escolha de segurança: a falha leva ao estado seguro.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "O botão de desliga usa contato NF para que um fio rompido desligue o motor.",
     "type": "vf"
    },
    {
     "answer": 3,
     "explain": "O 95-96 é NF e fica em série com a bobina.",
     "options": [
      "A1-A2",
      "13-14",
      "95-96",
      "1-2"
     ],
     "prompt": "O relé térmico desligou o motor. O contato que abriu foi o:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Acima disso ele não protege; muito abaixo, desarma à toa.",
     "options": [
      "No máximo da escala",
      "Pela corrente nominal da placa do motor",
      "Pela corrente de partida",
      "Pela potência do transformador"
     ],
     "prompt": "O relé térmico deve ser ajustado:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "As peças do painel de comando: quem manda, quem obedece e quem protege.",
   "title": "Contatores, relés e botoeiras",
   "track": "comandos",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "cmd-motor-trifasico": {
   "author": "",
   "body": "## Três fases defasadas\nA rede trifásica tem três tensões alternadas iguais, **defasadas 120°** uma da outra: quando uma está no pico, as outras duas estão a caminho. Em qualquer instante, a soma das três é zero.\n\nEntre uma fase e o neutro mede-se a **tensão de fase**; entre duas fases, a **tensão de linha**, que é √3 (cerca de 1,73) vezes maior. Por isso existem redes 127/220 V e 220/380 V.\n\n## O campo girante\nO estator do motor tem três grupos de bobinas, distribuídos em volta do eixo. Alimentados pelas três fases defasadas, eles criam um **campo magnético que gira** sozinho. O rotor é arrastado por esse campo. Não há escovas nem partida auxiliar: é por isso que o motor de indução trifásico é tão robusto e comum na indústria.\n\nA velocidade do campo é **120 × f ÷ número de polos**. Em 60 Hz, um motor de 4 polos tem campo a 1.800 rpm; o rotor gira um pouco menos, cerca de 1.750 rpm. Essa diferença é o **escorregamento**.\n\n**Para inverter o sentido de giro**, basta trocar **duas fases** quaisquer entre si.\n\n## Seis pontas, duas ligações\nO motor comum tem as seis pontas das bobinas na caixa de ligação, numeradas de 1 a 6. A placa informa as duas tensões, por exemplo **220/380 V**.\n- **Triângulo (Δ):** cada bobina recebe a tensão de linha. Usa-se na **menor** tensão da placa (220 V no exemplo).\n- **Estrela (Y):** as bobinas ficam ligadas num ponto comum, e cada uma recebe a tensão de linha dividida por √3. Usa-se na **maior** tensão (380 V).\n\nLigar em triângulo numa rede de 380 V um motor 220/380 V queima o motor em pouco tempo. **Leia a placa antes.**\n\n## Partida estrela-triângulo\nNa partida, o motor puxa várias vezes a corrente nominal. Uma forma de suavizar é partir em **estrela** e, depois de alguns segundos, passar para **triângulo**. Em estrela, a corrente de partida cai a cerca de um terço. Para isso, o motor precisa ter as seis pontas e a tensão de triângulo igual à da rede.\n\n## Outras ligações\nMotores **Dahlander** têm duas velocidades com um só enrolamento, trocando a ligação das bobinas. Existem também partidas com chave compensadora (autotransformador), soft-starter e, cada vez mais, **inversor de frequência**, que você vai ver adiante nesta etapa.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Três fases defasadas 120° criam um campo que gira.",
    "Trocar duas fases inverte o giro.",
    "Triângulo na menor tensão da placa; estrela na maior.",
    "Estrela-triângulo reduz a corrente de partida a cerca de um terço."
   ],
   "minutes": 10,
   "order": 1,
   "questions": [
    {
     "answer": 2,
     "explain": "Estrela para a maior tensão da placa.",
     "options": [
      "Triângulo",
      "Estrela",
      "Tanto faz",
      "Série-paralelo"
     ],
     "prompt": "Um motor 220/380 V vai ser ligado numa rede de 380 V entre fases. A ligação correta é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Trocar duas fases inverte o sentido do campo girante.",
     "options": [
      "Inverter fase e neutro",
      "Trocar duas fases entre si",
      "Trocar as três fases",
      "Desligar uma fase"
     ],
     "prompt": "Para inverter o sentido de giro de um motor trifásico:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "120 × 60 ÷ 4 = 1.800 rpm.",
     "options": [
      "900 rpm",
      "1.800 rpm",
      "3.600 rpm",
      "1.200 rpm"
     ],
     "prompt": "A velocidade do campo de um motor de 4 polos em 60 Hz é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Falta de fase sobrecarrega as bobinas e queima o motor; para variar a velocidade usa-se inversor.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Desligar uma das fases é um jeito seguro de reduzir a velocidade do motor.",
     "type": "vf"
    }
   ],
   "sim": "tri",
   "status": "published",
   "summary": "Por que três fases fazem o motor girar sozinho e como fechar as bobinas para a tensão da rede.",
   "title": "Motor trifásico: fases, estrela e triângulo",
   "track": "comandos",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "cmd-partida-direta": {
   "author": "",
   "body": "## Partida direta\nÉ a partida mais simples: o contator liga o motor direto na rede. Serve para motores pequenos, porque na partida a corrente chega a várias vezes a nominal.\n\nO comando, seguindo o caminho da corrente:\n- Fase do comando → fusível → **relé térmico 95-96** (NF) → **botão S0** (desliga, NF) → **botão S1** (liga, NA) → **bobina de K1** → neutro.\n- Em paralelo com S1, o contato auxiliar **K1 13-14**: o **contato de selo**.\n\n## O que o selo faz\nAo apertar S1, a bobina energiza e K1 fecha os contatos de força **e também o 13-14**. Quando você solta S1, a corrente continua chegando à bobina pelo 13-14. O contator \"segura a si mesmo\". Para desligar, S0 abre o circuito: a bobina perde energia, o 13-14 abre e o selo se desfaz.\n\nSe o fio do selo se soltar, o motor **só funciona enquanto S1 estiver apertado**. Esse é um defeito clássico de painel.\n\nOutra vantagem: se faltar energia, o selo se desfaz. Quando a energia volta, o motor **não liga sozinho**, o que evita acidentes.\n\n## Reversão\nPara o motor girar nos dois sentidos, usam-se **dois contatores**: K1 liga as fases na ordem normal e K2 liga com **duas fases trocadas**.\n\nO perigo: se K1 e K2 fecharem juntos, as fases trocadas se encontram e há um **curto-circuito entre fases**. Para impedir:\n- **Intertravamento elétrico:** um contato **NF de K1** em série com a bobina de K2, e um NF de K2 em série com a bobina de K1. Enquanto um está ligado, o outro não consegue energizar.\n- **Intertravamento por botões:** botões com contato duplo, em que apertar um sentido abre o circuito do outro.\n- **Intertravamento mecânico:** uma peça física entre os contatores que impede os dois de fecharem.\n\nEm reversões de cargas pesadas, o certo é **parar antes de inverter**: inverter com o motor girando a toda velocidade provoca um tranco e uma corrente muito alta.\n\n## Projeto final\n**Esquema de reversão com intertravamento.** Desenhe a força e o comando de uma reversão com dois contatores, intertravamento elétrico e por botões.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Selo: K1 13-14 em paralelo com o botão de liga.",
    "Sem selo, o motor só gira com o botão apertado.",
    "Reversão: dois contatores, duas fases trocadas.",
    "Intertravamento impede os dois contatores ligados juntos."
   ],
   "minutes": 11,
   "order": 3,
   "questions": [
    {
     "answer": 2,
     "explain": "Sem o selo, nada mantém a bobina energizada.",
     "options": [
      "O relé térmico",
      "O contato de selo K1 13-14",
      "O botão S0",
      "A bobina queimada"
     ],
     "prompt": "O motor liga ao apertar S1, mas para assim que o botão é solto. O suspeito é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "É o intertravamento elétrico.",
     "options": [
      "Dar partida mais rápida",
      "Impedir que K2 ligue enquanto K1 estiver ligado",
      "Medir a corrente",
      "Inverter as fases"
     ],
     "prompt": "Na reversão, o contato NF de K1 em série com a bobina de K2 serve para:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "O selo se desfaz na falta de energia; é preciso apertar S1 de novo.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Com a partida direta com selo, se a energia cai e volta, o motor volta a girar sozinho.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Por isso o intertravamento é obrigatório.",
     "options": [
      "O motor para suavemente",
      "Curto-circuito entre fases",
      "O motor gira mais rápido",
      "Nada"
     ],
     "prompt": "O que acontece se K1 e K2 da reversão fecharem ao mesmo tempo?",
     "type": "mc"
    }
   ],
   "sim": "partida",
   "status": "published",
   "summary": "O selo que mantém o motor ligado e o intertravamento que impede um curto entre fases.",
   "title": "Partida direta e reversão de motores",
   "track": "comandos",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "cmd-sensores": {
   "author": "",
   "body": "Na automação, os sensores de proximidade substituem as chaves de fim de curso mecânicas: detectam a peça **sem encostar**, não gastam e respondem rápido.\n\n## Que sensor usar\n- **Indutivo:** detecta **metal**. Cria um campo magnético de alta frequência na face; um metal perto altera esse campo. Alcance curto, de poucos milímetros. Ótimo para detectar a posição de peças metálicas, engrenagens e cames.\n- **Capacitivo:** detecta **quase qualquer material**: plástico, madeira, papel, líquidos e grãos, inclusive através da parede de um silo ou de um tanque plástico. Tem ajuste de sensibilidade.\n- **Magnético:** detecta um **ímã**. É o sensor preso no corpo do cilindro pneumático, que percebe o ímã no êmbolo e indica se o cilindro está avançado ou recuado.\n- **Fotoelétrico (óptico):** usa luz. Pode ser de **barreira** (emissor e receptor separados), **reflexivo** (com um espelho refletor) ou **difuso** (a própria peça reflete a luz). Alcança distâncias maiores, mas sofre com poeira e objetos transparentes.\n\n## Os três fios\nA maioria dos sensores industriais de 24 V tem três fios, num código de cores bem difundido:\n- **Marrom:** +24 V\n- **Azul:** 0 V\n- **Preto:** sinal\n\n## PNP ou NPN\nOs dois funcionam como uma chave eletrônica no fio de sinal. A diferença está no que essa chave fecha:\n- **PNP:** quando detecta, liga o fio preto ao **+24 V**. A carga (entrada do CLP, relé) fica entre o preto e o 0 V. É o padrão na maioria das máquinas no Brasil e na Europa.\n- **NPN:** quando detecta, liga o fio preto ao **0 V**. A carga fica entre o +24 V e o preto.\n\nInstalar um sensor NPN numa entrada de CLP feita para PNP é um defeito comum: o LED do sensor acende, mas o CLP não enxerga nada. Confira na etiqueta do sensor e no manual do cartão de entradas.\n\n## NA ou NF\nAlém disso, a saída pode ser **NA** (ativa quando detecta) ou **NF** (ativa quando não detecta). Sensores de segurança e de \"falta de peça\" costumam usar NF, para que um fio rompido seja percebido como falha.\n\n## Projeto final\n**Ligação correta de um sensor ao CLP.** Desenhe a ligação de um sensor indutivo PNP e de um NPN a uma entrada de CLP, com as cores dos fios e a fonte de 24 V.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Indutivo: metal. Capacitivo: quase tudo. Magnético: ímã. Óptico: luz.",
    "Marrom +24 V, azul 0 V, preto sinal.",
    "PNP entrega +24 V no sinal; NPN entrega 0 V.",
    "Sensor e entrada do CLP precisam ser do mesmo tipo."
   ],
   "minutes": 10,
   "order": 4,
   "questions": [
    {
     "answer": 2,
     "explain": "O capacitivo detecta materiais não metálicos, inclusive através de plástico.",
     "options": [
      "Indutivo",
      "Capacitivo",
      "Magnético",
      "Fim de curso mecânico"
     ],
     "prompt": "Para detectar o nível de grãos através da parede plástica de um silo, o sensor indicado é o:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "O sensor funciona, mas fecha para o polo errado.",
     "options": [
      "Sensor NPN numa entrada PNP",
      "Peça grande demais",
      "Sensor indutivo detectando metal",
      "Fio marrom no +24 V"
     ],
     "prompt": "O LED do sensor acende quando a peça passa, mas a entrada do CLP não muda. Uma causa provável é:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "No NPN, vai a 0 V.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Num sensor PNP, o fio preto vai a +24 V quando ele detecta.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Ele detecta o ímã montado no êmbolo.",
     "options": [
      "Capacitivo",
      "Magnético",
      "Indutivo de longo alcance",
      "Fotoelétrico de barreira"
     ],
     "prompt": "O sensor preso no corpo do cilindro pneumático, que indica avanço e recuo, normalmente é:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Qual sensor detecta o quê, e como ligar os três fios sem errar.",
   "title": "Sensores indutivos, capacitivos e fotoelétricos (PNP e NPN)",
   "track": "comandos",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "dados-1-tabelas": {
   "author": "",
   "body": "Quase toda análise começa com uma **tabela**: cada **linha** é um registro (um pedido, uma pessoa) e cada **coluna** é um atributo (data, valor, cidade).\n\n## Tipos importam\n- **Texto:** nomes, categorias.\n- **Número:** valores, quantidades.\n- **Data:** quando algo aconteceu.\nSe um número vier como texto, a soma não funciona ou dá resultado errado.\n\n## Cuidado com o formato brasileiro\nNo Brasil usamos vírgula decimal (1.234,50). Muitos programas esperam ponto (1234.50). Ao importar CSV, confira o separador de colunas e o decimal.\n\n## Uma pergunta antes de tudo\nO que é **uma linha** nesta tabela? Um pedido? Um item do pedido? Um pagamento? Responder isso evita a maioria dos erros de soma.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Linha = registro; coluna = atributo.",
    "Confira os tipos antes de somar.",
    "Saiba o que cada linha representa."
   ],
   "minutes": 7,
   "order": 1,
   "questions": [
    {
     "answer": 2,
     "explain": "Por isso um pedido pode ter várias linhas.",
     "options": [
      "Um cliente",
      "Um pagamento recebido",
      "Um mês",
      "Um produto"
     ],
     "prompt": "Numa tabela de pagamentos com parcelas, cada linha representa:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Confira o formato na importação.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "O valor \"1.234,50\" pode ser lido como texto por programas que esperam ponto decimal.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "A granularidade define como somar.",
     "options": [
      "Qual a cor do gráfico?",
      "O que representa uma linha desta tabela?",
      "Qual o nome do arquivo?",
      "Quem fez a planilha?"
     ],
     "prompt": "Antes de calcular um total, a primeira pergunta deve ser:",
     "type": "mc"
    }
   ],
   "status": "published",
   "summary": "A base de toda análise: entender como um dado está organizado.",
   "title": "Dados tabulares: linhas, colunas e tipos",
   "track": "dados",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "dados-2-sql": {
   "author": "",
   "body": "SQL é a linguagem para consultar bancos de dados.\n\n## Selecionar e filtrar\n```sql\nSELECT cliente, valor_total\nFROM pedidos\nWHERE data >= '2026-03-01';\n```\n\n## Agrupar\n```sql\nSELECT cidade, SUM(valor_total) AS faturamento\nFROM pedidos\nGROUP BY cidade;\n```\n\n## Juntar tabelas\n```sql\nSELECT p.id, c.nome\nFROM pedidos p\nJOIN clientes c ON c.id = p.cliente_id;\n```\n\n## A armadilha do JOIN\nSe um pedido tem **várias** linhas na outra tabela (parcelas, itens), o JOIN repete o pedido. Somar depois disso multiplica valores. Antes de somar, compare o **COUNT(*)** antes e depois do JOIN.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "WHERE filtra, GROUP BY agrupa, JOIN junta.",
    "JOIN um-para-muitos repete linhas.",
    "Compare COUNT(*) antes e depois do JOIN."
   ],
   "minutes": 11,
   "order": 2,
   "questions": [
    {
     "answer": 2,
     "explain": "GROUP BY cria um grupo por valor.",
     "options": [
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "LIMIT"
     ],
     "prompt": "Qual comando agrupa as linhas para somar por cidade?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Relações um-para-muitos multiplicam linhas.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Um JOIN nunca muda a quantidade de linhas.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Mostra se houve multiplicação.",
     "options": [
      "Trocar o banco de dados",
      "Comparar o COUNT(*) antes e depois do JOIN",
      "Apagar parcelas",
      "Arredondar o total"
     ],
     "prompt": "O total ficou maior que o real depois de um JOIN com pagamentos parcelados. O primeiro teste é:",
     "type": "mc"
    }
   ],
   "status": "published",
   "summary": "As consultas que respondem 80% das perguntas de negócio.",
   "title": "SQL essencial: SELECT, WHERE, GROUP BY e JOIN",
   "track": "dados",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "dados-3-pandas": {
   "author": "",
   "body": "O **pandas** é a biblioteca de Python mais usada para análise de dados.\n\n## Ler e conhecer\n```python\nimport pandas as pd\n\ngastos = pd.read_csv(\"gastos.csv\", sep=\";\", decimal=\",\")\nprint(gastos.head())\nprint(gastos.dtypes)\n```\nRepare em sep e decimal: são os ajustes para CSV no formato brasileiro.\n\n## Agrupar\n```python\npor_categoria = gastos.groupby(\"categoria\")[\"valor\"].sum()\nprint(por_categoria.sort_values(ascending=False))\n```\n\n## Gráfico\n```python\nimport matplotlib.pyplot as plt\n\npor_categoria.plot(kind=\"bar\")\nplt.tight_layout()\nplt.show()\n```\n\n## Dica\nSempre olhe dtypes: se valor aparecer como object (texto), a soma não vai funcionar como você espera.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "read_csv com sep e decimal para arquivos brasileiros.",
    "groupby + sum responde \"quanto por categoria\".",
    "Confira dtypes antes de calcular."
   ],
   "minutes": 12,
   "order": 3,
   "questions": [
    {
     "answer": 2,
     "explain": "decimal define o separador decimal.",
     "options": [
      "sep=\";\"",
      "decimal=\",\"",
      "header=None",
      "index_col=0"
     ],
     "prompt": "Qual parâmetro faz o pandas entender 12,50 como número?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Agrupa e soma.",
     "options": [
      "gastos.head()",
      "gastos.groupby(\"categoria\")[\"valor\"].sum()",
      "gastos.dtypes",
      "gastos.plot()"
     ],
     "prompt": "Para saber o total gasto por categoria, você usa:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Corrija o formato na leitura.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Se a coluna valor aparecer como object, ela pode estar sendo lida como texto.",
     "type": "vf"
    }
   ],
   "status": "published",
   "summary": "Ler uma planilha, limpar, agrupar e desenhar um gráfico em poucas linhas.",
   "title": "pandas: do CSV ao gráfico",
   "track": "dados",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "ele-lei-de-ohm": {
   "author": "",
   "body": "Tudo é feito de átomos. No centro fica o núcleo, com prótons (carga positiva) e nêutrons; em volta circulam os **elétrons** (carga negativa). Nos metais, alguns elétrons das camadas mais externas ficam fracamente presos e passam de um átomo para outro com facilidade. São os **elétrons livres**, e é por isso que o cobre conduz bem e a borracha não.\n\n## As três grandezas\n- **Tensão (V, em volts):** a diferença de \"pressão\" elétrica entre dois pontos. É o que empurra os elétrons. Uma pilha tem 1,5 V; a tomada, 127 V ou 220 V.\n- **Corrente (I, em ampères):** quantos elétrons passam por segundo num ponto do fio. Só existe corrente quando o caminho está fechado.\n- **Resistência (R, em ohms, Ω):** o quanto o material dificulta a passagem. Fio de cobre tem resistência baixa; um resistor é feito para ter um valor certo.\n\nUma comparação que ajuda: a tensão é a pressão da caixa-d'água, a corrente é a vazão no cano e a resistência é um registro meio fechado.\n\n## A Lei de Ohm\nAs três se relacionam por uma conta simples: **V = R × I**. Dá para escrever de três jeitos:\n- I = V ÷ R (qual corrente vai passar)\n- R = V ÷ I (qual resistor eu preciso)\n- V = R × I (quanta tensão cai sobre o componente)\n\nExemplo: um resistor de 220 Ω ligado em 12 V deixa passar 12 ÷ 220 ≈ 0,055 A, ou 55 mA.\n\n## Potência: o que vira calor ou trabalho\nA **potência** (P, em watts) mostra quanta energia o componente consome por segundo: **P = V × I**. No exemplo acima, 12 × 0,055 ≈ 0,65 W. Um resistor comum de 1/4 W esquentaria até queimar; ali seria preciso um de 1 W.\n\n## Contínua e alternada\nNa **corrente contínua** (pilha, bateria, fonte de celular) os elétrons andam sempre no mesmo sentido. Na **corrente alternada** (tomada) o sentido se inverte 60 vezes por segundo no Brasil. A Lei de Ohm vale para as duas quando a carga é uma resistência, como chuveiro e lâmpada incandescente.\n\n## Do que depende a resistência de um fio\nUm fio resiste mais quando é **mais comprido**, **mais fino** ou feito de um material de **maior resistividade**. É por isso que extensões longas e finas esquentam e que o chuveiro pede fio grosso.\n\n## Projeto final\n**Tabela de medições de um circuito simples.** Monte uma pilha ou fonte com um resistor (ou use o simulador acima), meça tensão e corrente para três resistores diferentes e compare com o que a Lei de Ohm prevê.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "V = R × I: com duas grandezas você descobre a terceira.",
    "P = V × I mostra quanto o componente aquece ou trabalha.",
    "Corrente só existe com o circuito fechado.",
    "Fio comprido e fino tem mais resistência e esquenta mais."
   ],
   "minutes": 10,
   "order": 1,
   "questions": [
    {
     "answer": 1,
     "explain": "I = V ÷ R = 12 ÷ 24 = 0,5 A.",
     "options": [
      "0,5 A",
      "2 A",
      "288 A",
      "12 A"
     ],
     "prompt": "Uma lâmpada de 12 V tem resistência de 24 Ω quando acesa. Qual é a corrente?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Pela Lei de Ohm, corrente e tensão são proporcionais quando R é fixo.",
     "options": [
      "Cai pela metade",
      "Dobra",
      "Fica igual",
      "Quadruplica"
     ],
     "prompt": "Se a tensão sobre um resistor dobrar e a resistência continuar a mesma, a corrente:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "I = 10 ÷ 100 = 0,1 A; P = 10 × 0,1 = 1 W. Um de 1/4 W queimaria.",
     "options": [
      "0,1 W",
      "1 W",
      "10 W",
      "100 W"
     ],
     "prompt": "Um resistor de 100 Ω em 10 V dissipa:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Comprimento maior e seção menor aumentam a resistência, e a energia perdida no fio vira calor.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Uma extensão comprida e de fio fino pode esquentar mais que uma curta e grossa com a mesma carga.",
     "type": "vf"
    }
   ],
   "sim": "ohm",
   "status": "published",
   "summary": "De onde vem a corrente elétrica e a conta que explica quase todo circuito.",
   "title": "Tensão, corrente e resistência: a Lei de Ohm na prática",
   "track": "eletricidade",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "ele-multimetro": {
   "author": "",
   "body": "O multímetro junta vários instrumentos num só: **voltímetro**, **amperímetro**, **ohmímetro** e teste de **continuidade**. O segredo é saber como cada medida se liga ao circuito.\n\n## Tensão: em paralelo, com o circuito ligado\nPara medir tensão, as pontas tocam **os dois pontos** entre os quais se quer saber a diferença: os dois terminais da tomada, os dois lados de um componente. O voltímetro tem resistência interna altíssima, então quase não interfere.\n- Escolha **V~** (alternada) para tomada e **V⎓** (contínua) para pilha, bateria e fonte.\n- Ponta preta no **COM**, vermelha no **VΩ**.\n- Se não souber a ordem de grandeza, comece pela escala mais alta (ou use o modo automático).\n\n## Corrente: em série, abrindo o circuito\nPara medir corrente, o circuito precisa passar **por dentro** do aparelho: você abre o caminho e coloca o multímetro no meio, em série. A ponta vermelha muda para o borne **A** ou **mA**.\n\n**O erro clássico:** deixar a ponta no borne de corrente e depois encostar na tomada para medir tensão. Isso é um curto-circuito através do aparelho: no melhor caso queima o fusível interno; no pior, o multímetro estoura na sua mão.\n\n## Alicate amperímetro: corrente sem abrir nada\nO alicate abraça **um único condutor** e mede a corrente pelo campo magnético em volta dele. Se abraçar o cabo inteiro (fase e neutro juntos), os campos se cancelam e a leitura dá perto de zero.\n\n## Resistência e continuidade: sempre desligado\nOhmímetro e teste de continuidade injetam uma pequena corrente própria. Por isso, **o circuito tem que estar desenergizado**. A continuidade apita quando há caminho de baixa resistência: serve para achar fio rompido, fusível queimado e contato que não fecha.\n\n## Categoria e estado do aparelho\nMultímetros trazem a marcação **CAT II, CAT III ou CAT IV**, que indica em que tipo de instalação podem ser usados com segurança. Para quadro de distribuição, use CAT III ou superior. Antes de medir, confira pontas sem rachaduras e isolação inteira.\n\n## Projeto final\n**Roteiro de medição com o seu multímetro.** Escreva, para o seu aparelho, onde ficam as pontas e qual a escala em cada medida: tensão de tomada, tensão de pilha, corrente de um circuito pequeno e continuidade de um fio.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Tensão: em paralelo, circuito ligado.",
    "Corrente: em série, circuito aberto, ponta no borne A.",
    "Resistência e continuidade: só com o circuito desligado.",
    "Alicate amperímetro abraça um condutor só."
   ],
   "minutes": 9,
   "order": 2,
   "questions": [
    {
     "answer": 2,
     "explain": "O amperímetro precisa que toda a corrente passe por ele, por isso vai em série.",
     "options": [
      "Encostar as pontas nos dois terminais da lâmpada",
      "Abrir o circuito e ligar o multímetro em série",
      "Medir com o circuito desligado",
      "Usar a escala de continuidade"
     ],
     "prompt": "Para medir a corrente que passa por uma lâmpada com o multímetro comum, você deve:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Continuidade e resistência só com o circuito desligado; a tensão externa falseia a leitura e pode danificar o aparelho.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Dá para testar a continuidade de um fio com o circuito energizado.",
     "type": "vf"
    },
    {
     "answer": 1,
     "explain": "Com ida e volta dentro do alicate, os campos magnéticos se anulam.",
     "options": [
      "A máquina está desligada ou o alicate abraçou fase e neutro juntos",
      "O alicate só mede tensão",
      "A corrente é contínua",
      "A máquina está em curto"
     ],
     "prompt": "O alicate amperímetro mostrou quase zero ao abraçar o cabo de uma máquina. O mais provável é que:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "No borne de corrente o multímetro tem resistência quase zero: na tomada vira um curto.",
     "options": [
      "Ponta no borne VΩ medindo tensão",
      "Ponta no borne A encostada na tomada",
      "Escala de 750 V medindo 220 V",
      "Continuidade num fio desligado"
     ],
     "prompt": "Qual é a combinação mais perigosa?",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Como ligar o multímetro em cada tipo de medida sem queimar o aparelho nem tomar choque.",
   "title": "Multímetro: medir tensão, corrente e continuidade com segurança",
   "track": "eletricidade",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "ele-paquimetro": {
   "author": "",
   "body": "Na bancada aparecem medidas que o multímetro não faz: o diâmetro de um eixo de motor, a espessura de uma chapa, o furo de um rolamento. Para isso existe o **paquímetro**.\n\n## As partes\n- **Escala fixa:** a régua principal, graduada em milímetros.\n- **Cursor com nônio:** a parte que desliza. O nônio é uma pequena escala extra que permite ler frações do milímetro.\n- **Bicos de medição externa:** para eixos e espessuras.\n- **Orelhas de medição interna:** para furos.\n- **Haste de profundidade:** sai pela ponta da régua e mede rebaixos e furos cegos.\n\n## Como funciona o nônio\nNo paquímetro de **0,05 mm**, o nônio tem 20 divisões que ocupam 19 mm. Cada divisão do nônio é 0,05 mm menor que um milímetro da escala fixa. Ao abrir o paquímetro, só um traço do nônio fica exatamente alinhado com um traço da escala, e o número desse traço indica os centésimos.\n\n## Leitura em dois passos\n- **Milímetros inteiros:** veja qual traço da escala fixa está logo antes do **zero do nônio**.\n- **Fração:** procure o traço do nônio que **coincide** com algum traço da escala fixa e multiplique pela resolução.\n\nExemplo: o zero passou do traço 12 e o 7º traço do nônio coincide. Leitura: 12 + 7 × 0,05 = **12,35 mm**.\n\nExistem paquímetros com resolução de 0,1 mm, 0,05 mm e 0,02 mm; os digitais mostram o valor direto, mas o princípio de uso é o mesmo. Para precisão de 0,01 mm usa-se o **micrômetro**.\n\n## Cuidados que mudam a medida\n- **Confira o zero** com os bicos fechados e limpos.\n- Meça com a peça **bem encostada na parte interna dos bicos** e o instrumento perpendicular à peça.\n- **Não force** o cursor: pressão demais deforma a medida e o instrumento.\n- Leia de frente para a escala, evitando o **erro de paralaxe**.\n- Peça quente mede maior: espere esfriar.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Milímetros antes do zero do nônio + traço coincidente × resolução.",
    "Bicos para medidas externas, orelhas para internas, haste para profundidade.",
    "Confira o zero antes de medir.",
    "Sem forçar e sem paralaxe."
   ],
   "minutes": 9,
   "order": 6,
   "questions": [
    {
     "answer": 2,
     "explain": "8 + 4 × 0,05 = 8,20 mm.",
     "options": [
      "8,04 mm",
      "8,20 mm",
      "8,40 mm",
      "12 mm"
     ],
     "prompt": "Num paquímetro de 0,05 mm, o zero do nônio passou do traço 8 e o traço 4 do nônio coincide. A leitura é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "As orelhas ficam na parte de cima e abrem para dentro do furo.",
     "options": [
      "Os bicos externos",
      "As orelhas de medição interna",
      "A haste de profundidade",
      "A escala do nônio"
     ],
     "prompt": "Para medir o diâmetro de um furo, use:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Força demais deforma a medida e o instrumento. O contato deve ser leve e firme.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Apertar bem o cursor contra a peça deixa a medida mais precisa.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Se o zero não bate, todas as medidas saem erradas.",
     "options": [
      "Esquentar a peça",
      "Conferir o zero com os bicos fechados e limpos",
      "Lubrificar a escala",
      "Medir com a peça inclinada"
     ],
     "prompt": "Antes de começar a medir, o primeiro cuidado é:",
     "type": "mc"
    }
   ],
   "sim": "paq",
   "status": "published",
   "summary": "Nem toda medida da manutenção é elétrica: como ler o nônio e medir eixos, furos e profundidades.",
   "title": "Paquímetro: medidas de precisão na bancada",
   "track": "eletricidade",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "ele-potencia-consumo": {
   "author": "",
   "body": "## Potência não é consumo\nA **potência** (watts) diz o quanto o aparelho puxa **enquanto está ligado**. O **consumo** (energia) depende também de **por quanto tempo** ele fica ligado. A distribuidora cobra a energia, medida em **quilowatt-hora (kWh)**.\n\n**Energia (kWh) = potência (W) × horas de uso ÷ 1000**\n\n## Exemplo: o chuveiro\nUm chuveiro de 5.500 W usado 15 minutos por dia:\n- 5.500 × 0,25 h ÷ 1000 = 1,375 kWh por dia\n- × 30 dias = **41,25 kWh por mês**\n\nCom uma tarifa de, por exemplo, R$ 0,90 por kWh (confira o valor na sua conta, com impostos e bandeira), isso dá cerca de R$ 37 por mês.\n\n## Exemplo: a geladeira\nA geladeira não fica ligada o tempo todo: o compressor liga e desliga. Por isso o melhor dado é a **etiqueta do Procel/Inmetro**, que já informa o consumo em kWh por mês.\n\n## Onde achar a potência\nNa etiqueta do aparelho, no manual ou no carregador. Se a etiqueta só trouxer tensão e corrente, multiplique: 127 V × 2 A ≈ 254 W. Em motores e aparelhos com fonte eletrônica essa conta é aproximada, porque entra o fator de potência.\n\n## Lendo a conta\n- **Consumo do mês** em kWh, a diferença entre duas leituras do medidor.\n- **Tarifa** por kWh, mais tributos.\n- **Bandeira tarifária** (verde, amarela, vermelha), que acrescenta um valor por kWh quando gerar energia está mais caro.\n\n## Onde economizar de verdade\nAparelhos que **esquentam** (chuveiro, forno elétrico, aquecedor, ferro) e os que ficam **ligados muitas horas** (geladeira velha, ar-condicionado) dominam a conta. Trocar lâmpadas por LED ajuda, mas o chuveiro costuma pesar mais que todas as lâmpadas da casa juntas.\n\n## Projeto final\n**Cálculo do consumo dos aparelhos da casa.** Liste os aparelhos da sua casa com potência e horas de uso, calcule os kWh do mês e compare com a sua conta.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Conta de luz cobra energia em kWh, não potência.",
    "kWh = W × horas ÷ 1000.",
    "Aparelhos que esquentam e os que ficam muito tempo ligados pesam mais.",
    "Para geladeira, use o consumo mensal da etiqueta."
   ],
   "minutes": 8,
   "order": 5,
   "questions": [
    {
     "answer": 1,
     "explain": "10 × 6 × 30 = 1.800 Wh = 1,8 kWh.",
     "options": [
      "1,8 kWh",
      "18 kWh",
      "180 kWh",
      "0,18 kWh"
     ],
     "prompt": "Uma lâmpada LED de 10 W acesa 6 horas por dia durante 30 dias consome:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "O medidor registra energia ao longo do tempo.",
     "options": [
      "A potência dos aparelhos",
      "A energia consumida em kWh",
      "A corrente do disjuntor geral",
      "A tensão da rede"
     ],
     "prompt": "O que a distribuidora cobra na conta?",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Os dois consomem 1 kWh.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Um aparelho de 2.000 W ligado 30 minutos consome o mesmo que um de 1.000 W ligado 1 hora.",
     "type": "vf"
    },
    {
     "answer": 3,
     "explain": "P = V × I = 220 × 10 = 2.200 W.",
     "options": [
      "22 W",
      "230 W",
      "2.200 W",
      "22.000 W"
     ],
     "prompt": "A etiqueta diz 220 V e 10 A. A potência aproximada é:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Watts, quilowatts-hora e como calcular quanto cada aparelho pesa na conta.",
   "title": "Potência, consumo e conta de luz",
   "track": "eletricidade",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "ele-seguranca": {
   "author": "",
   "body": "Choque elétrico é a corrente passando **pelo corpo**. O que machuca é a corrente, e ela depende da tensão e da resistência do caminho: pele molhada, suor e pés descalços derrubam essa resistência.\n\n## O que a corrente faz no corpo\n- Poucos miliampères já são sentidos como formigamento.\n- Acima de uns 10 mA, os músculos podem travar e a pessoa não consegue soltar o fio.\n- Na faixa de dezenas de miliampères atravessando o peito, há risco de **fibrilação**: o coração perde o ritmo.\n- Correntes maiores causam queimaduras internas, que nem sempre aparecem na pele.\n\nO caminho importa: de uma mão para a outra ou da mão para o pé, a corrente passa pelo coração.\n\n## NR-10 em poucas palavras\nA **NR-10** é a norma regulamentadora do Ministério do Trabalho para serviços em eletricidade. Entre outras coisas, ela exige que quem trabalha em instalações elétricas seja **qualificado, treinado e autorizado**, com o curso básico de segurança, e que o serviço siga procedimentos escritos. Esta lição é uma introdução; ela não substitui o treinamento.\n\n## Desenergizar não é só desligar o disjuntor\nA NR-10 descreve uma sequência para considerar um circuito desenergizado:\n- **Seccionamento:** abrir o disjuntor ou a chave do circuito.\n- **Impedimento de reenergização:** travar e etiquetar (cadeado e etiqueta), para ninguém religar.\n- **Constatação da ausência de tensão:** medir com instrumento adequado, testado antes e depois.\n- **Aterramento temporário** dos condutores, quando aplicável.\n- **Proteção** dos elementos energizados que ficarem por perto.\n- **Sinalização** de impedimento de reenergização.\n\n## EPI e EPC\n- **EPI** (individual): luvas isolantes da classe certa, calçado sem partes metálicas, óculos, vestimenta antichama quando há risco de arco.\n- **EPC** (coletivo): tapetes isolantes, barreiras, sinalização, bloqueios.\n\n## Hábitos que salvam\nNunca confie em \"acho que é esse disjuntor\": meça. Trabalhe com uma mão só sempre que possível. Tire anéis, relógios e correntes. E se alguém estiver preso a um fio, **não toque na pessoa**: desligue a energia primeiro ou afaste o fio com um material isolante e seco.\n\n## Projeto final\n**Checklist de segurança antes de qualquer serviço.** Monte uma lista de verificação de uma página, na ordem em que você vai seguir, para usar antes de qualquer serviço elétrico.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "O que machuca é a corrente que atravessa o corpo.",
    "Desenergizar: seccionar, travar, medir, aterrar, proteger e sinalizar.",
    "Trabalho em eletricidade exige pessoa qualificada e treinada conforme a NR-10.",
    "Vítima presa ao fio: corte a energia antes de tocar nela."
   ],
   "minutes": 9,
   "order": 3,
   "questions": [
    {
     "answer": 2,
     "explain": "O impedimento de reenergização (bloqueio com cadeado e etiqueta) é o passo que evita o religamento.",
     "options": [
      "Medir a tensão",
      "Travar e etiquetar o disjuntor",
      "Usar luvas",
      "Avisar por telefone"
     ],
     "prompt": "Depois de abrir o disjuntor, qual passo garante que ninguém religue o circuito enquanto você trabalha?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "O disjuntor pode ser o errado, estar com defeito ou existir outra fonte. A medição é obrigatória.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Se o disjuntor está desligado, não é preciso medir a ausência de tensão.",
     "type": "vf"
    },
    {
     "answer": 3,
     "explain": "Tocar na pessoa faz a corrente passar por você também.",
     "options": [
      "Puxá-la pelo braço",
      "Jogar água",
      "Desligar a energia ou afastar o fio com material isolante seco",
      "Esperar ela se soltar"
     ],
     "prompt": "Uma pessoa está presa a um fio energizado. O que fazer primeiro?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Com a mesma tensão e menos resistência, a corrente aumenta (Lei de Ohm).",
     "options": [
      "Aumenta a tensão da rede",
      "Diminui a resistência do corpo e a corrente sobe",
      "Atrai o campo magnético",
      "Muda a frequência"
     ],
     "prompt": "Pele molhada aumenta o risco de choque porque:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Por que a corrente machuca, o que a NR-10 pede e a sequência para desligar um circuito de verdade.",
   "title": "Segurança em eletricidade: choque, EPI e noções de NR-10",
   "track": "eletricidade",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "ele-serie-paralelo": {
   "author": "",
   "body": "## Em série: um caminho só\nOs componentes ficam um atrás do outro.\n- A **corrente é a mesma** em todos.\n- As **tensões se somam**: a da fonte se reparte entre os componentes.\n- A resistência total é a soma: **R = R1 + R2 + ...**\n- Se um componente abre, todos param. Era o defeito clássico do pisca-pisca de Natal antigo.\n\n## Em paralelo: vários caminhos\nOs componentes ficam lado a lado, ligados aos mesmos dois pontos.\n- A **tensão é a mesma** em todos. É assim que as tomadas e lâmpadas de casa são ligadas.\n- As **correntes se somam**: cada aparelho ligado acrescenta corrente no disjuntor.\n- A resistência total fica **menor que a menor delas**. Para dois resistores: R = (R1 × R2) ÷ (R1 + R2).\n- Se um componente abre, os outros continuam funcionando.\n\n## O divisor de tensão\nDois resistores em série formam um **divisor de tensão**: no ponto do meio aparece uma fração da entrada.\n\n**Vout = Vin × R2 ÷ (R1 + R2)**\n\nCom R1 = R2, a saída é metade da entrada. É o circuito mais usado para adaptar sinais: por exemplo, baixar 5 V para algo seguro na entrada de 3,3 V de um ESP32.\n\n## Sensores que são resistores\nVários sensores simplesmente mudam de resistência. Colocados num divisor, transformam uma grandeza física em tensão, que o microcontrolador consegue ler:\n- **Potenciômetro:** resistência ajustável girando um eixo. É um divisor pronto.\n- **LDR:** a resistência cai quando recebe luz.\n- **Termistor NTC:** a resistência cai quando esquenta. O **PTC** faz o contrário e é usado como proteção.\n- **VDR (varistor):** quase não conduz em tensão normal e passa a conduzir muito acima dela; protege contra surtos.\n\n## Ponte de Wheatstone\nSão dois divisores lado a lado. Quando as proporções são iguais, a tensão entre os dois pontos do meio é zero. Uma variação mínima num dos resistores desequilibra a ponte, e isso é usado em balanças e sensores de força.\n\n## Projeto final\n**Circuito montado e medido na protoboard.** Monte dois resistores em série e depois em paralelo, meça tensões e correntes e confira as regras desta lição.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Série: mesma corrente, tensões se somam.",
    "Paralelo: mesma tensão, correntes se somam.",
    "Divisor: Vout = Vin × R2 ÷ (R1 + R2).",
    "LDR, NTC e potenciômetro viram sinal de tensão dentro de um divisor."
   ],
   "minutes": 10,
   "order": 4,
   "questions": [
    {
     "answer": 2,
     "explain": "A corrente é a mesma e os resistores são iguais, então a tensão se divide ao meio.",
     "options": [
      "10 V",
      "5 V",
      "20 V",
      "2,5 V"
     ],
     "prompt": "Dois resistores de 1 kΩ em série ligados em 10 V. Qual a tensão em cada um?",
     "type": "mc"
    },
    {
     "answer": 3,
     "explain": "9 × 20 ÷ 30 = 6 V.",
     "options": [
      "3 V",
      "4,5 V",
      "6 V",
      "9 V"
     ],
     "prompt": "Num divisor com R1 = 10 kΩ em cima e R2 = 20 kΩ embaixo, ligado em 9 V, a saída vale:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Assim todas recebem a mesma tensão e uma não depende da outra.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Em casa, as tomadas são ligadas em paralelo.",
     "type": "vf"
    },
    {
     "answer": 1,
     "explain": "No escuro a resistência do LDR aumenta, e a fração da tensão sobre ele também.",
     "options": [
      "Sobe",
      "Desce",
      "Não muda",
      "Fica negativa"
     ],
     "prompt": "Com um LDR na parte de baixo do divisor, quando escurece a tensão de saída:",
     "type": "mc"
    }
   ],
   "sim": "div",
   "status": "published",
   "summary": "Como a corrente e a tensão se dividem, o divisor de tensão e os sensores que mudam de resistência.",
   "title": "Circuitos em série e em paralelo",
   "track": "eletricidade",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "eln-amplificadores": {
   "author": "",
   "body": "Um **amplificador** recebe um sinal pequeno e entrega uma cópia maior. Tudo que produz som tem um: rádio, celular, caixa de som, microfone de lapela.\n\n## Sinal analógico\nO microfone tem um diafragma preso a uma bobina perto de um ímã (ou, nos de eletreto, um capacitor). Quando a voz faz o diafragma vibrar, sai uma **tensão que sobe e desce** no mesmo ritmo do som. Esse é um **sinal analógico**: varia de forma contínua. Ele é fraquinho, de alguns milivolts, e precisa ser ampliado.\n\n## O caminho dentro de um amplificador simples\n- **Capacitor de entrada:** deixa passar o sinal que varia, mas bloqueia a tensão contínua. Assim, o microfone não atrapalha a polarização do transistor, e a polarização não atrapalha o microfone.\n- **Resistores de polarização:** colocam a base do transistor num ponto de trabalho fixo, já conduzindo um pouco.\n- **Transistor:** amplifica as variações em volta desse ponto.\n- **Capacitor de saída:** passa o sinal amplificado para o alto-falante e bloqueia a corrente contínua da bateria.\n- **Alto-falante:** faz o caminho inverso do microfone. A corrente variável na bobina, perto do ímã, faz o cone vibrar e empurrar o ar.\n\nMicrofone e alto-falante são **transdutores**: convertem um tipo de energia em outro (som em eletricidade e vice-versa).\n\n## Polarização: trabalhar no meio\nUm transistor só amplifica na região ativa. Se ficar cortado, a parte negativa do sinal some; se ficar saturado, some a parte positiva. Por isso ajustamos a saída para ficar em repouso perto do **meio da alimentação**. Assim sobra espaço para o sinal subir e descer. Esse ajuste se chama **polarizar** o transistor.\n\n## Corte e distorção\nSe o sinal de entrada for grande demais, ou o ganho alto demais, a saída tenta ir acima da alimentação ou abaixo de zero. Como não consegue, **os picos ficam achatados**. No som, isso aparece como **distorção**: o áudio fica \"rasgado\". Um efeito parecido acontece com a **realimentação** entre microfone e alto-falante: o som da saída volta para a entrada, é amplificado de novo e vira aquele apito agudo.\n\n## Mais de um estágio\nUm transistor sozinho dá ganho de algumas dezenas. Para mover um alto-falante com o sinal de um microfone, ligamos **estágios em série**: a saída de um alimenta a entrada do outro, e os ganhos se **multiplicam**. Dois estágios de ganho 30 dão 900 vezes. Hoje, amplificadores completos vêm prontos em pequenos chips.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T16:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Amplificador entrega uma cópia maior do sinal.",
    "Capacitores deixam passar o sinal e bloqueiam a tensão contínua.",
    "Polarizar é pôr o transistor em repouso perto do meio da alimentação.",
    "Sinal grande demais corta os picos e distorce o som."
   ],
   "minutes": 11,
   "order": 9,
   "questions": [
    {
     "answer": 2,
     "explain": "Ele separa o sinal variável da polarização do transistor.",
     "options": [
      "Aumentar o ganho",
      "Passar o sinal e bloquear a tensão contínua",
      "Guardar a energia da bateria",
      "Retificar o sinal"
     ],
     "prompt": "Para que serve o capacitor entre o microfone e a base do transistor?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "A saída não cabe entre 0 V e a alimentação e corta.",
     "options": [
      "Sinal de entrada pequeno demais",
      "Sinal de entrada ou ganho grande demais",
      "Polarização no meio da alimentação",
      "Alto-falante desligado"
     ],
     "prompt": "A saída de um amplificador está com os picos achatados. Uma causa provável é:",
     "type": "mc"
    },
    {
     "answer": 3,
     "explain": "Os ganhos se multiplicam: 20 × 20 = 400.",
     "options": [
      "20",
      "40",
      "400",
      "2.000"
     ],
     "prompt": "Dois estágios com ganho 20 cada, em série, dão ganho total de:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Os dois convertem som em eletricidade ou eletricidade em som.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Microfone e alto-falante são transdutores.",
     "type": "vf"
    }
   ],
   "sim": "amp",
   "status": "published",
   "summary": "Como um sinal fraco vira um som forte, por que o transistor precisa ser polarizado e de onde vem a distorção.",
   "title": "Amplificadores: do microfone ao alto-falante",
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "eln-chips": {
   "author": "",
   "body": "Um **chip** ou **circuito integrado** é um circuito eletrônico inteiro construído sobre uma lasquinha de **silício**. Transistores, resistores e as ligações entre eles são fabricados todos juntos, em camadas microscópicas. Depois, o silício vai para um encapsulamento de plástico ou cerâmica com terminais, e é isso que você vê na placa.\n\n## Por que silício\nO silício é um **semicondutor**: puro, conduz mal; com pequenas quantidades de outras substâncias adicionadas de propósito (a **dopagem**), passa a conduzir de forma controlada. Combinando regiões de dois tipos, chamadas **tipo N** e **tipo P**, fazem-se diodos e transistores. A areia comum é rica em silício, mas o usado em chips é purificado a um nível altíssimo.\n\n## Como se fabrica, em linhas gerais\n- O desenho do circuito é projetado no computador.\n- Ele é transferido para o silício por um processo parecido com fotografia, a **fotolitografia**, camada por camada.\n- Substâncias químicas criam as regiões N e P, e trilhas metálicas finíssimas ligam tudo.\n- Num mesmo disco de silício (o **wafer**) saem centenas de chips iguais, que depois são cortados e testados.\n\nComo os caminhos são curtíssimos, os chips são **rápidos**, gastam **pouca energia** e cabem em qualquer lugar. Sem eles, um celular precisaria de um prédio inteiro de componentes soltos.\n\n## Analógicos e digitais\n- **Chips analógicos** trabalham com sinais que variam continuamente: amplificadores de áudio, reguladores de tensão como o 7805, sensores. Têm de dezenas a milhares de transistores.\n- **Chips digitais** trabalham com zeros e uns: portas lógicas, contadores, memórias, processadores. Os maiores têm **bilhões** de transistores.\n- Alguns misturam os dois, como o 555 e os conversores analógico-digital.\n\n## O time dentro de um computador\n- **Microprocessador (CPU):** faz os cálculos e toma as decisões, seguindo as instruções do programa.\n- **Memória:** guarda o programa e os dados. A RAM é rápida e se apaga ao desligar; a memória flash (SSD, pendrive) guarda mesmo sem energia.\n- **Chips de interface:** convertem os sinais do processador para teclado, tela, rede, USB.\n- **Relógio (clock):** um oscilador a cristal que dá o ritmo, bilhões de pulsos por segundo, para tudo andar sincronizado.\n\n## E o microcontrolador?\nNum **microcontrolador**, como o do Arduino ou o ESP32, processador, memória e interfaces vêm **num único chip**. É um computador pequeno inteiro, feito para controlar aparelhos: máquina de lavar, micro-ondas, controle remoto, sensores conectados. Você usa um deles na etapa de Microcontroladores e IoT.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T16:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Chip: circuito inteiro fabricado sobre silício.",
    "Silício é semicondutor; regiões N e P formam diodos e transistores.",
    "CPU calcula, memória guarda, interface conversa, clock dá o ritmo.",
    "Microcontrolador: um computador pequeno num só chip."
   ],
   "minutes": 9,
   "order": 12,
   "questions": [
    {
     "answer": 2,
     "explain": "Com regiões N e P controladas se constroem diodos e transistores.",
     "options": [
      "É um ótimo isolante",
      "É um semicondutor cuja condução pode ser controlada pela dopagem",
      "É mais barato que o plástico",
      "Conduz melhor que o cobre"
     ],
     "prompt": "Por que o silício é usado nos chips?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "É o 'cérebro' do computador.",
     "options": [
      "Memória RAM",
      "Microprocessador",
      "Chip de interface",
      "Regulador de tensão"
     ],
     "prompt": "Qual chip faz os cálculos e segue as instruções do programa?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "A RAM é volátil; quem guarda sem energia é a memória flash ou o disco.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "A memória RAM mantém os dados depois que o computador é desligado.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Microcontroladores são feitos para controlar aparelhos.",
     "options": [
      "Amplificador",
      "Microcontrolador",
      "Relé",
      "Regulador"
     ],
     "prompt": "O ESP32 junta processador, memória e interfaces num só chip. Ele é um:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "O que é um circuito integrado, por que o silício e quais chips trabalham juntos dentro de um computador.",
   "title": "Chips: do transistor ao microprocessador",
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "eln-componentes": {
   "author": "",
   "body": "## Resistor\nLimita a corrente e divide tensões. O valor vem em **faixas coloridas**: as duas ou três primeiras são os dígitos, a seguinte é o multiplicador e a última é a tolerância. Exemplo: marrom (1), preto (0), vermelho (×100) = 1.000 Ω, ou 1 kΩ. Na dúvida, meça com o ohmímetro fora do circuito.\n\n## Capacitor\nGuarda energia num campo elétrico entre duas placas. Carrega quando recebe tensão e devolve depois. A capacidade é medida em **farads** (na prática, µF, nF e pF).\n- **Eletrolíticos** têm polaridade: a faixa na lateral marca o negativo. Ligados ao contrário, estufam ou estouram.\n- A **tensão máxima** vem escrita no corpo; use um com folga.\n\nLigado a um resistor, o capacitor não enche de uma vez: segue uma curva. A **constante de tempo** τ = R × C diz o ritmo. Em 1τ ele chega a 63% da tensão da fonte; depois de 5τ está praticamente cheio. É assim que se fazem temporizadores e filtros.\n\nCuidado: capacitores grandes de fontes e inversores podem **guardar carga perigosa** mesmo com o aparelho desligado.\n\n## Diodo\nDeixa a corrente passar num sentido só, do **ânodo** para o **cátodo** (a faixa no corpo marca o cátodo). Quando conduz, \"come\" cerca de **0,7 V** (diodos de silício). Ao contrário, bloqueia até um limite de tensão. Serve para retificar, proteger contra ligação invertida e absorver o pico da bobina de um relé.\n\n## LED\nÉ um diodo que emite luz. A perna mais comprida é o **ânodo** (positivo). Precisa **sempre de um resistor em série** para limitar a corrente; ligado direto numa bateria, queima. A conta: R = (V da fonte − V do LED) ÷ corrente. Para um LED vermelho (cerca de 2 V) em 5 V com 15 mA: (5 − 2) ÷ 0,015 = 200 Ω; use 220 Ω.\n\n## Projeto final\n**Kit de componentes identificado e testado.** Separe resistores, capacitores, diodos e LEDs, identifique os valores pelas marcações e confira com o multímetro.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Faixas de cor: dígitos, multiplicador e tolerância.",
    "Capacitor eletrolítico tem polaridade; τ = R × C.",
    "Diodo conduz num sentido e perde cerca de 0,7 V.",
    "LED sempre com resistor em série."
   ],
   "minutes": 10,
   "order": 2,
   "questions": [
    {
     "answer": 2,
     "explain": "47 × 10 = 470 Ω.",
     "options": [
      "47 Ω",
      "470 Ω",
      "4,7 kΩ",
      "47 kΩ"
     ],
     "prompt": "Um resistor tem as faixas amarelo (4), violeta (7), marrom (×10). Qual é o valor?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "τ = 10.000 × 0,0001 = 1 s.",
     "options": [
      "0,1 s",
      "1 s",
      "10 s",
      "100 s"
     ],
     "prompt": "Com R = 10 kΩ e C = 100 µF, a constante de tempo é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Sem resistor a corrente não tem limite e o LED queima.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Um LED pode ser ligado direto numa fonte de 5 V, sem resistor.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "A faixa marca o cátodo, o lado para onde a corrente sai.",
     "options": [
      "O ânodo",
      "O cátodo",
      "A tensão máxima",
      "A potência"
     ],
     "prompt": "Num diodo, a faixa pintada no corpo indica:",
     "type": "mc"
    }
   ],
   "sim": "rc",
   "status": "published",
   "summary": "Os quatro componentes que aparecem em quase toda placa, como identificar e para que servem.",
   "title": "Componentes: resistor, capacitor, diodo e LED",
   "track": "eletronica",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "eln-comutacao": {
   "author": "",
   "body": "Na eletrônica digital, os transistores trabalham como chaves: ou estão ligados, ou desligados. Dois transistores ligados um ao outro, cada um comandando a base do outro, formam os **circuitos de comutação** (ou **multivibradores**). Existem três tipos.\n\n## Biestável: lembra o último comando\nTem **dois estados estáveis**. Um pulso o coloca \"ligado\"; ele fica assim até receber outro pulso que o coloca \"desligado\". É como um interruptor de parede: você aperta e ele fica.\n\nO biestável é o **flip-flop**, a memória de 1 bit. Ligado vale 1, desligado vale 0. É assim que nasce a memória de um computador.\n\n## Monoestável: um tempo e volta\nTem **um estado estável**. Quando recebe um disparo, muda de estado por **um tempo fixo** e depois volta sozinho, como a campainha temporizada da escada ou o botão do semáforo de pedestre. O tempo depende de um capacitor carregando por um resistor:\n\n**Tempo (segundos) ≈ resistência (ohms) × capacitância (farads)**, multiplicado por um fator que depende do circuito.\n\nExemplo: 100 kΩ e 100 µF dão R × C = 100.000 × 0,0001 = 10 segundos de ordem de grandeza. Com um resistor variável, o tempo fica ajustável.\n\nNa prática, o tempo real difere um pouco da conta porque os componentes têm **tolerância**: um resistor com faixa dourada pode variar 5% para mais ou para menos, e capacitores eletrolíticos variam ainda mais. Por isso temporizadores precisos são ajustados medindo com um relógio.\n\n## Astável: liga e desliga sem parar\n**Nenhum estado é estável**: o circuito fica alternando, sozinho, como um pêndulo. Gera uma sequência de pulsos, usada para piscar LEDs, gerar sons e dar o ritmo (o **clock**) de circuitos digitais. O CI 555 que você já usou no pisca-pisca é um astável pronto.\n\n## Frequência\nO número de vezes que o astável liga e desliga por segundo é a **frequência**, medida em **hertz (Hz)**. Um pisca-pisca tem cerca de 1 Hz; um tom de áudio, centenas ou milhares de hertz; o clock de um processador, bilhões de hertz (gigahertz). O tempo ligado e o tempo desligado podem ser diferentes, conforme os componentes.\n\n## De onde vem o digital\nPulsos para transmitir informação são mais antigos que a eletrônica: o **código Morse**, do século 19, já mandava pontos e traços por um fio. Hoje, os pulsos representam **bits**; grupos de 8 bits formam um **byte**, que pode guardar uma letra ou um número de 0 a 255.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T16:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Biestável: dois estados estáveis, é o flip-flop, memória de 1 bit.",
    "Monoestável: dispara, fica um tempo e volta; tempo depende de R × C.",
    "Astável: oscila sozinho e gera pulsos.",
    "Frequência em hertz; 8 bits formam 1 byte."
   ],
   "minutes": 9,
   "order": 11,
   "questions": [
    {
     "answer": 3,
     "explain": "O biestável tem dois estados estáveis: é um flip-flop.",
     "options": [
      "Astável",
      "Monoestável",
      "Biestável",
      "Amplificador"
     ],
     "prompt": "Qual circuito fica ligado depois do pulso até receber outro pulso para desligar?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Um disparo, um intervalo fixo, e volta ao repouso.",
     "options": [
      "Biestável",
      "Monoestável",
      "Astável",
      "Retificador"
     ],
     "prompt": "A minuteria da escada, que acende e apaga sozinha depois de um tempo, é um:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Ele não tem estado estável e oscila sozinho.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Um circuito astável gera pulsos sem precisar de disparo.",
     "type": "vf"
    },
    {
     "answer": 3,
     "explain": "8 bits: 2⁸ = 256 combinações (0 a 255).",
     "options": [
      "8",
      "16",
      "256",
      "1.024"
     ],
     "prompt": "Quantos valores diferentes um byte pode representar?",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Os três jeitos de um circuito ligar e desligar sozinho, e como eles viram memória, temporizador e relógio.",
   "title": "Circuitos de comutação: biestável, monoestável e astável",
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "eln-falhas": {
   "author": "",
   "bancada": "## Quando do outro lado existe um paciente\nHoje eu cuido de equipamentos biomédicos: autoclaves e instrumentos odontológicos de alta e baixa rotação. Tecnicamente, é a mesma linguagem de sempre: motores, sensores, circuitos. Mas uma autoclave que não esteriliza direito, ou uma peça de mão com falha, é um risco para quem vai sentar na cadeira em seguida.\n\nIsso não tornou o diagnóstico mais difícil; tornou cada verificação mais séria. Seguir o roteiro inteiro, registrar o que foi medido e testar de novo depois do conserto deixa de ser capricho e vira obrigação.",
   "body": "Quase todo circuito montado pela primeira vez tem algum errinho, e quase sempre é um detalhe pequeno. O segredo é **procurar com método**, do mais simples para o mais complicado, e **medir antes de trocar**.\n\n## 1. Antes de energizar\n- **Compare a montagem com o esquema**, componente por componente, marcando cada um que conferiu.\n- **Conte as peças:** sobrou alguma na bancada? Faltou alguma na placa?\n- **Polaridade:** LEDs, diodos, capacitores eletrolíticos, transistores e chips têm lado certo. Um transistor com terminais trocados pode até queimar.\n- **Valores:** confira as faixas dos resistores. Um 10 kΩ no lugar de um 100 Ω faz o LED nem acender.\n\n## 2. Inspeção da placa\n- **Solda fria:** emendas opacas, granuladas ou rachadas. Reaqueça.\n- **Pontes de solda:** gotas ligando duas trilhas ou dois terminais. Remova.\n- **Trilhas que deveriam estar cortadas** e não foram, ou cortadas no furo errado.\n- **Terminais encostando** uns nos outros por baixo da placa.\n- **Componente frouxo:** puxe de leve cada um.\n\n## 3. Medindo com o circuito ligado\n- **Alimentação primeiro:** a bateria ou fonte está com a tensão certa? E ela chega aos pontos onde deveria chegar? Muitas vezes o problema é um fio da bateria.\n- **Siga o caminho da corrente** com o voltímetro, do positivo para o negativo, medindo a tensão em cada ponto. Onde a tensão \"some\" de repente, ali está a interrupção.\n- **Transistor:** com o circuito ligado, a base deveria estar uns 0,6 V acima do emissor quando ele conduz. Se a base está a 0 V, o problema está antes dela; se está certa e o coletor não muda, desconfie do transistor ou da carga.\n\n## 4. Medindo com o circuito desligado\n- **Continuidade** em fios e trilhas suspeitos.\n- **Resistência** de resistores (com pelo menos um terminal solto da placa, para o resto do circuito não interferir).\n- **Teste de diodo** do multímetro em LEDs e diodos: num sentido conduz, no outro não.\n\n## 5. Calor também é suspeito\nComponentes podem ser danificados pelo calor do ferro durante a montagem, especialmente transistores e LEDs. Se tudo está certo e mesmo assim não funciona, troque o componente suspeito **um por vez**.\n\n## Hábitos que evitam falhas\n- Use fio próprio para eletrônica, fino e flexível. Fio grosso de instalação elétrica não prende bem na placa e pode encostar em outras partes.\n- Anote o que mediu. Depois de uma pausa, os números ajudam a retomar.\n- Peça para outra pessoa conferir. Olhos novos acham erros que os seus já se acostumaram a não ver.\n\n## E uma regra\nEste roteiro é para circuitos de **baixa tensão**, com pilhas, baterias e fontes de bancada. Nunca faça esses testes em circuitos ligados na tomada sem formação e equipamentos adequados.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T16:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Do mais simples ao mais complicado: esquema, peças, polaridade, valores.",
    "Inspecione soldas frias, pontes e trilhas.",
    "Siga a tensão do positivo ao negativo; onde ela some está o defeito.",
    "Meça antes de trocar e troque um componente por vez."
   ],
   "minutes": 9,
   "order": 14,
   "questions": [
    {
     "answer": 2,
     "explain": "Medir mostra onde está a interrupção antes de gastar peças.",
     "options": [
      "Trocar o LED de imediato",
      "Seguir a tensão pelos pontos do circuito até ver onde ela some",
      "Trocar todos os resistores",
      "Aumentar a bateria para 12 V"
     ],
     "prompt": "O LED não acende e a bateria marca 9 V. Qual é o próximo passo mais útil?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Reaqueça até ficar lisa e brilhante.",
     "options": [
      "Normal",
      "Solda fria, suspeita de mau contato",
      "Sinal de excesso de corrente",
      "Um curto-circuito"
     ],
     "prompt": "Uma emenda opaca e rachada é:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Assim os outros componentes ligados a ele não alteram a leitura.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Para medir a resistência de um resistor na placa com precisão, convém soltar pelo menos um terminal.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "A base não está recebendo tensão; procure no caminho até ela.",
     "options": [
      "No coletor",
      "Antes da base: resistor, divisor ou ligação",
      "No alto-falante",
      "Na tolerância do capacitor"
     ],
     "prompt": "Num transistor que deveria conduzir, a base está em 0 V. O problema provavelmente está:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Uma sequência para achar o defeito de uma montagem sem trocar peças no escuro.",
   "title": "Quando o circuito não funciona: roteiro de falhas",
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "eln-fontes": {
   "author": "",
   "body": "Quase todo eletrônico funciona com tensão contínua baixa: 3,3 V, 5 V, 12 V. A tomada entrega 127 V ou 220 V alternados. A fonte faz essa conversão em etapas.\n\n## 1. Transformador: baixar a tensão\nDuas bobinas enroladas num núcleo de ferro. A tensão de saída depende da proporção de espiras. Um transformador de 127 V para 12 V entrega 12 V **alternados**, isolados da rede.\n\n## 2. Retificador: deixar a corrente num sentido só\n- **Meia onda:** um diodo só. Passa o semiciclo positivo e corta o negativo. Metade do tempo a carga fica sem nada.\n- **Onda completa em ponte:** quatro diodos. O semiciclo negativo é invertido e aproveitado. A saída pulsa duas vezes por ciclo.\n\nA saída já é contínua, mas **pulsante**: sobe e desce o tempo todo. Repare também que os diodos \"comem\" um pouco da tensão: cerca de 0,7 V cada um que estiver conduzindo.\n\n## 3. Filtro: alisar a tensão\nUm **capacitor eletrolítico** grande em paralelo com a saída carrega nos picos e alimenta a carga nos vales. O que sobra de variação se chama **ondulação** (ripple). Capacitor maior, ou carga menor, dá ondulação menor.\n\nUm detalhe: com capacitor, a saída fica perto do **pico** da tensão, não do valor eficaz. 12 V eficazes têm pico de cerca de 17 V; descontados os diodos, sobram uns 15,6 V.\n\n## 4. Regulador: tensão fixa\nUm regulador como o **7805** recebe a tensão filtrada (que ainda varia) e entrega 5 V estáveis. Ele precisa de alguns volts a mais na entrada e transforma a diferença em calor: com 12 V na entrada e 1 A de saída, ele aquece com 7 W e precisa de dissipador.\n\n## Fontes chaveadas\nO carregador de celular não tem um transformador pesado. Ele retifica a rede direto, liga e desliga essa tensão dezenas de milhares de vezes por segundo com um transistor e usa um **transformador pequenino** de alta frequência. Resultado: fonte leve, que aceita de 100 V a 240 V e esquenta pouco. Por dentro, porém, há tensões altas e capacitores carregados: **não abra uma fonte chaveada ligada**.\n\n## Projeto final\n**Fonte regulada de 5 V montada.** Monte retificador, filtro e regulador 7805 a partir de um transformador de baixa tensão já isolado, e meça a saída com e sem carga.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Transformador baixa, retificador direciona, capacitor alisa, regulador fixa.",
    "Ponte de diodos aproveita os dois semiciclos.",
    "Com filtro, a saída fica perto do pico, menos a queda dos diodos.",
    "Fonte chaveada: leve e eficiente, mas perigosa por dentro."
   ],
   "minutes": 10,
   "order": 8,
   "questions": [
    {
     "answer": 2,
     "explain": "A ponte inverte o semiciclo negativo.",
     "options": [
      "Meia onda com um diodo",
      "Ponte de quatro diodos",
      "Um capacitor sozinho",
      "Um regulador 7805"
     ],
     "prompt": "Qual retificador aproveita os dois semiciclos da corrente alternada?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Mais capacitância segura melhor a tensão nos vales.",
     "options": [
      "Tirar o capacitor",
      "Aumentar o capacitor de filtro",
      "Trocar a ponte por um diodo só",
      "Diminuir o transformador"
     ],
     "prompt": "A saída retificada está com muita ondulação. Uma solução é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "(12 − 5) × 1 = 7 W viram calor no regulador.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Um regulador 7805 com 12 V na entrada e 1 A na saída não precisa de dissipador.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Em alta frequência, o transformador pode ser muito menor.",
     "options": [
      "Não tem transformador nenhum",
      "É uma fonte chaveada com transformador pequeno de alta frequência",
      "Usa pilhas internas",
      "Funciona só em 5 V"
     ],
     "prompt": "Por que o carregador de celular é tão leve?",
     "type": "mc"
    }
   ],
   "sim": "ret",
   "status": "published",
   "summary": "Transformador, retificador, filtro e regulador, e por que as fontes de hoje são chaveadas.",
   "title": "Fontes de alimentação: da tomada aos 5 V",
   "track": "eletronica",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "eln-historia": {
   "author": "",
   "bancada": "## Da válvula ao SMD, com as mãos\nEntre 1992 e 1997, consertando aparelhos na oficina e em casa, eu atravessei essa história inteira na bancada: comecei nos equipamentos a **válvula**, passei pelos **transistores**, depois pelos **circuitos integrados** e terminei nos componentes **SMD**, montados na superfície da placa, muito menores e mais delicados.\n\nE antes disso, em 1984, ainda solteiro e vendendo sapatos, comprei um **TK83**, um dos primeiros computadores pessoais vendidos no Brasil. Não havia razão prática nenhuma; era só curiosidade.\n\nA lição que ficou: tecnologia não é uma coisa fixa para dominar de uma vez. É uma sequência de camadas que se sobrepõem, e quem acompanha cada uma com atenção nunca fica para trás.",
   "body": "A eletrônica é uma ciência jovem, com pouco mais de cem anos. Mas ela se apoia em descobertas mais antigas sobre a eletricidade.\n\n## Antes da eletrônica\n- **1800:** Alessandro Volta empilha discos de dois metais diferentes separados por papelão com solução ácida e cria a **pilha**, a primeira fonte de corrente contínua. A unidade **volt** homenageia seu nome.\n- **Década de 1820 em diante:** Charles Babbage projeta máquinas de calcular **mecânicas**, cheias de engrenagens. Eram tão complexas que não foram concluídas na época, mas trazem ideias que os computadores usariam um século depois.\n- **Década de 1830 e 1840:** o **telégrafo** e o **código Morse** mandam mensagens por fio em pulsos curtos e longos, uma forma antiga de comunicação codificada.\n\n## A era das válvulas\n- **1904:** John Ambrose Fleming cria a **válvula diodo**: um tubo de vidro com vácuo, um filamento aquecido que solta elétrons e uma placa de metal. A corrente só passa num sentido, como num diodo de hoje.\n- **1906:** Lee de Forest acrescenta uma **grade** entre o filamento e a placa: nasce o **tríodo**, que consegue **amplificar** sinais e funcionar como chave.\n- **Anos 1920 e 1930:** as válvulas tornam possíveis o **rádio** e, depois, a **televisão**.\n- **Anos 1940:** os primeiros computadores eletrônicos usam válvulas como chaves. O ENIAC, nos Estados Unidos, tinha cerca de 18 mil válvulas, ocupava uma sala inteira e esquentava muito, porque cada válvula precisava de um filamento aquecido.\n\n## O transistor\n- **1947:** nos Laboratórios Bell, John Bardeen, Walter Brattain e William Shockley demonstram o **transistor**. Ele faz o que a válvula faz, mas é pequeno, frio, resistente e gasta muito menos energia.\n- **Anos 1950 e 1960:** surgem os **rádios portáteis** a pilha, conhecidos no Brasil simplesmente como \"transistor\", e os computadores ficam menores.\n\n## O circuito integrado\n- **1958 e 1959:** Jack Kilby, na Texas Instruments, e Robert Noyce, na Fairchild, criam os primeiros **circuitos integrados**: vários componentes num único pedaço de semicondutor.\n- **1971:** a Intel lança o **4004**, um dos primeiros microprocessadores, com cerca de 2.300 transistores.\n- **Hoje:** chips de celular e computador têm **bilhões** de transistores, com detalhes medidos em nanômetros.\n\n## O que isso ensina\nCada salto veio de fazer a mesma função, **controlar a corrente**, com algo menor, mais barato e mais confiável. A ideia do transistor como chave e amplificador, que você está aprendendo nesta etapa, é a mesma que roda dentro do seu celular, só que repetida bilhões de vezes.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T16:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "1800: pilha de Volta. 1904: válvula diodo. 1906: tríodo.",
    "1947: transistor, nos Laboratórios Bell.",
    "1958 e 1959: primeiros circuitos integrados.",
    "Cada salto fez a mesma função com algo menor e mais confiável."
   ],
   "minutes": 8,
   "order": 13,
   "questions": [
    {
     "answer": 2,
     "explain": "O transistor faz o mesmo trabalho, menor e sem aquecimento.",
     "options": [
      "O relé",
      "O transistor",
      "O capacitor",
      "O resistor"
     ],
     "prompt": "Qual componente substituiu as válvulas a partir dos anos 1950?",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "A grade controla o fluxo de elétrons entre filamento e placa.",
     "options": [
      "Capacidade de amplificar e funcionar como chave",
      "Luz",
      "Proteção contra choque",
      "Corrente alternada"
     ],
     "prompt": "O que a grade do tríodo acrescentou à válvula diodo?",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "O ENIAC tinha cerca de 18 mil.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Os primeiros computadores eletrônicos usavam milhares de válvulas.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Volta criou a primeira pilha em 1800.",
     "options": [
      "Thomas Edison",
      "Alessandro Volta",
      "Jack Kilby",
      "Samuel Morse"
     ],
     "prompt": "A unidade volt homenageia:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Da pilha de Volta ao chip com bilhões de transistores: as invenções que trouxeram a eletrônica até aqui.",
   "title": "Uma breve história da eletrônica",
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "eln-logica-digital": {
   "author": "",
   "body": "Em eletrônica digital, a tensão só interessa em dois estados: **nível alto (1)** e **nível baixo (0)**. Num circuito de 5 V, algo perto de 5 V é 1 e perto de 0 V é 0. Com esses dois valores se constroem calculadoras, CLPs e processadores.\n\n## As portas lógicas\n- **NOT (inversor):** a saída é o contrário da entrada.\n- **AND (E):** a saída é 1 só se **todas** as entradas forem 1. Como duas chaves em série.\n- **OR (OU):** a saída é 1 se **pelo menos uma** entrada for 1. Como duas chaves em paralelo.\n- **NAND e NOR:** um AND e um OR com a saída invertida. Só com portas NAND dá para montar qualquer outra porta.\n- **XOR (OU exclusivo):** a saída é 1 quando as entradas são **diferentes**. É o comportamento do interruptor paralelo da escada.\n\nCada porta é descrita por uma **tabela-verdade**: todas as combinações de entrada e a saída de cada uma.\n\n## Lógica no dia a dia\nUma prensa que só desce quando o operador aperta **os dois botões ao mesmo tempo** é um AND: as duas mãos ficam longe da ferramenta. Um alarme que dispara se **qualquer** porta abrir é um OR. Essa é a mesma lógica que você vai encontrar na programação de CLP em ladder.\n\n## Flip-flop: o circuito que lembra\nCom duas portas NAND ou NOR, uma realimentando a outra, se monta um **latch SR**: um pulso em **S** (set) põe a saída em 1, e ela **fica em 1** mesmo depois que o pulso acaba. Um pulso em **R** (reset) volta para 0. É uma memória de 1 bit.\n\nJuntando milhões de flip-flops e circuitos semelhantes, temos registradores, contadores e memória. O selo de um contator, que você vai ver em comandos elétricos, faz a mesma coisa com relés: lembra que o botão de liga foi apertado.\n\n## Contadores e o 555 de novo\nUm flip-flop que muda de estado a cada pulso de clock divide a frequência por dois. Vários em cadeia formam um **contador**. Ligue o 555 astável a um contador e você tem um relógio, um sequenciador de luzes ou um temporizador digital.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Digital: só 0 e 1.",
    "AND = série; OR = paralelo; XOR = entradas diferentes.",
    "Tabela-verdade descreve a porta por completo.",
    "Flip-flop guarda 1 bit, como o selo de um contator."
   ],
   "minutes": 10,
   "order": 10,
   "questions": [
    {
     "answer": 2,
     "explain": "AND só dá 1 com todas as entradas em 1.",
     "options": [
      "OR",
      "AND",
      "NOT",
      "XOR"
     ],
     "prompt": "Uma prensa só desce quando os dois botões estão apertados. Que porta descreve isso?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "NOR é o OR invertido: OR daria 0, invertido vira 1.",
     "options": [
      "0",
      "1",
      "Indefinida",
      "Depende da tensão"
     ],
     "prompt": "Numa porta NOR com A = 0 e B = 0, a saída é:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "É isso que faz dele uma memória.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Um flip-flop continua com a saída em 1 depois que o pulso de set termina.",
     "type": "vf"
    },
    {
     "answer": 3,
     "explain": "A saída muda sempre que uma das entradas muda.",
     "options": [
      "AND",
      "OR",
      "XOR invertido (XNOR)",
      "NOT"
     ],
     "prompt": "O interruptor paralelo da escada se comporta como qual porta (considerando a luz acesa quando os interruptores estão iguais)?",
     "type": "mc"
    }
   ],
   "sim": "log",
   "status": "published",
   "summary": "Como zeros e uns viram decisões, e como um circuito consegue lembrar.",
   "title": "Lógica digital: portas, flip-flops e memória",
   "track": "eletronica",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "eln-primeiros-circuitos": {
   "author": "",
   "body": "Eletrônica é a arte de **controlar pequenas correntes elétricas** para que façam algo útil: acender um LED, tocar um som, guardar um número, mover um robô. As peças que fazem esse controle se chamam **componentes**: resistores, capacitores, diodos, LEDs, transistores, chips.\n\n## Circuito é um caminho fechado\nA bateria tem dois polos, positivo e negativo. A corrente só aparece quando existe um **caminho completo** de um polo ao outro, passando pelos componentes. Uma lâmpada ligada só a um polo não acende; ligada aos dois, acende. Se um fio solta em qualquer ponto, o circuito **abre** e tudo para.\n\nIsso explica dois termos que você vai ouvir sempre:\n- **Circuito aberto:** o caminho está interrompido. Não passa corrente.\n- **Curto-circuito:** a corrente achou um atalho sem resistência, pulando a carga. A corrente sobe muito, o fio esquenta e a bateria se descarrega ou algo queima.\n\nE uma regra de ouro: a carga (lâmpada, LED com resistor, motor) sempre deve estar no caminho. Ligar os dois polos da bateria direto com um fio é um curto.\n\n## Condutores e isolantes\nMonte uma pilha, uma lâmpada pequena e dois fios com as pontas soltas. Encoste as duas pontas em objetos diferentes: moeda, chave, borracha, lápis, papel. Onde a lâmpada acende, o material é **condutor**; onde não acende, é **isolante**.\n- Metais (cobre, alumínio, ferro) conduzem bem.\n- Plástico, borracha, vidro, madeira seca e papel isolam.\n- O grafite da ponta do lápis conduz um pouco: é carbono, o mesmo material de muitos resistores.\n\nO fio elétrico junta os dois: um núcleo de cobre (condutor) coberto por plástico (isolante).\n\n## Onde os componentes moram\n- **Placa de circuito impresso:** uma placa de fibra de vidro, que é isolante, com **trilhas de cobre** desenhadas. Cada trilha liga um terminal de componente a outro. É o que você encontra dentro de qualquer aparelho.\n- **Placa perfurada com trilhas (veroboard ou placa padrão):** furos em fileiras e trilhas de cobre contínuas por baixo. Boa para protótipos soldados.\n- **Protoboard:** encaixa os componentes sem solda, ótima para testar ideias.\n\n## E o chip?\nUm **chip** (circuito integrado) é um pedaço minúsculo de silício com milhares a bilhões de componentes microscópicos já ligados entre si. Por fora você vê só uma caixinha preta com pernas; por dentro está um circuito inteiro. Você vai conhecer melhor os chips mais adiante nesta etapa.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T16:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Corrente só existe com caminho fechado.",
    "Circuito aberto: nada passa. Curto: a corrente pula a carga.",
    "Metais conduzem; plástico, borracha e vidro isolam.",
    "Placa de circuito: base isolante com trilhas de cobre."
   ],
   "minutes": 8,
   "order": 1,
   "questions": [
    {
     "answer": 2,
     "explain": "Sem caminho até o polo negativo não há corrente.",
     "options": [
      "A lâmpada está queimada",
      "O circuito está aberto",
      "Há um curto-circuito",
      "A bateria é de corrente alternada"
     ],
     "prompt": "A lâmpada não acende com um fio ligado ao positivo e o outro solto. O motivo é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Metais são bons condutores.",
     "options": [
      "Borracha",
      "Chave de metal",
      "Papel",
      "Régua de plástico"
     ],
     "prompt": "Qual destes materiais acende a lâmpada no teste de condutores?",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "A corrente não passa por nenhuma carga e fica limitada só pela resistência do fio e da bateria.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Ligar os dois polos de uma bateria diretamente com um fio é um curto-circuito.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "A base é isolante; o caminho são as trilhas.",
     "options": [
      "A fibra de vidro",
      "As trilhas de cobre",
      "O verniz verde",
      "Os furos"
     ],
     "prompt": "Numa placa de circuito impresso, o que conduz a corrente entre os componentes?",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "O que é um circuito, por que a corrente precisa de um caminho fechado e como os componentes se ligam numa placa.",
   "title": "Primeiros circuitos: condutores, isolantes e placas",
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "eln-protoboard-555": {
   "author": "",
   "body": "## Como a protoboard é ligada por dentro\nA protoboard permite montar circuitos sem solda. Por dentro, há tiras de metal:\n- No meio, cada **coluna de 5 furos** é ligada entre si (no sentido curto). As duas metades são separadas pelo canal central, onde se encaixam os circuitos integrados.\n- Nas bordas, as **linhas de alimentação** (marcadas com + e −) correm no sentido comprido. Em algumas placas, elas são cortadas no meio: confira com o teste de continuidade.\n\nErros comuns: colocar as duas pernas de um componente na mesma coluna (ele fica em curto consigo mesmo) e esquecer de ligar as linhas de alimentação de um lado ao outro.\n\n## O CI 555\nÉ um dos circuitos integrados mais usados da história, ótimo para começar. Tem 8 pinos; a contagem começa no pino marcado com um ponto ou chanfro e segue no sentido anti-horário. Funciona de 4,5 V a 15 V.\n\n## Modo astável: o oscilador\nNo modo **astável**, o 555 liga e desliga a saída sozinho, sem parar. Por dentro, ele compara a tensão de um capacitor externo com 1/3 e 2/3 da alimentação:\n- O capacitor carrega por **R1 e R2** até 2/3 da tensão. Enquanto isso, a saída fica **ligada**.\n- Ao chegar em 2/3, o 555 descarrega o capacitor só por **R2** até 1/3. Nesse tempo, a saída fica **desligada**.\n- E recomeça.\n\nAs contas:\n- Tempo ligado ≈ 0,693 × (R1 + R2) × C\n- Tempo desligado ≈ 0,693 × R2 × C\n- Frequência ≈ 1,44 ÷ ((R1 + 2 × R2) × C)\n\nCom R1 = 10 kΩ, R2 = 47 kΩ e C = 10 µF, o LED pisca pouco mais de uma vez por segundo.\n\n## Monoestável: o temporizador\nNo modo **monoestável**, um pulso no pino de disparo liga a saída por um tempo fixo (≈ 1,1 × R × C) e depois ela desliga sozinha. É o temporizador de minuteria, de campainha e de alarme.\n\n## Montagem do pisca-pisca\nPinos 4 e 8 no positivo, pino 1 no negativo, R1 entre o 8 e o 7, R2 entre o 7 e o 6, pinos 6 e 2 unidos, capacitor do 2 para o negativo, e o LED com resistor de 330 Ω na saída (pino 3). Um capacitor de 10 nF do pino 5 para o negativo deixa o circuito mais estável.\n\n## Projeto final\n**Pisca-pisca com LED montado na protoboard.** Siga o projeto guiado desta etapa: o pisca-pisca com 555, e depois a versão que só funciona no escuro.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Na protoboard, cada coluna de 5 furos é um nó.",
    "555 astável: liga por R1 + R2, desliga só por R2.",
    "Frequência ≈ 1,44 ÷ ((R1 + 2R2) × C).",
    "Monoestável: um pulso, um tempo fixo."
   ],
   "minutes": 11,
   "order": 3,
   "questions": [
    {
     "answer": 2,
     "explain": "Os dois terminais ficam no mesmo nó elétrico.",
     "options": [
      "Nada, funciona normal",
      "O resistor fica em curto e não faz efeito",
      "O resistor queima na hora",
      "A protoboard derrete"
     ],
     "prompt": "Duas pernas de um resistor foram colocadas na mesma coluna de 5 furos. O que acontece?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Os tempos são proporcionais a C (e aos resistores).",
     "options": [
      "Diminuir o capacitor",
      "Aumentar o capacitor",
      "Tirar o R2",
      "Aumentar a tensão"
     ],
     "prompt": "No 555 astável, para o LED piscar mais devagar, você pode:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Ele carrega por R1 + R2 e descarrega só por R2.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "No modo astável comum, o tempo aceso é sempre maior que o apagado.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Um disparo, um intervalo fixo.",
     "options": [
      "Astável",
      "Monoestável",
      "Biestável invertido",
      "Retificador"
     ],
     "prompt": "Para fazer uma minuteria de escada, que acende e apaga sozinha depois de um tempo, o 555 vai em modo:",
     "type": "mc"
    }
   ],
   "sim": "ne555",
   "status": "published",
   "summary": "Como a protoboard é ligada por dentro e como o CI 555 faz um LED piscar no ritmo que você escolher.",
   "title": "Protoboard e primeiros circuitos: o pisca-pisca com 555",
   "track": "eletronica",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "eln-reles-alarme": {
   "author": "",
   "body": "Um transistor pequeno liga LEDs, buzzers e pequenos motores. Para cargas maiores, ou para ligar algo que nem tem a mesma tensão do circuito, usamos o **relé**.\n\n## Como é um relé por dentro\n- Uma **bobina** de fio enrolada num núcleo de ferro: quando recebe corrente, vira um ímã (eletroímã).\n- Uma lâmina móvel, a **armadura**, que é puxada pelo ímã e volta com uma mola quando a bobina desliga.\n- **Contatos** presos à armadura: o **comum**, o **normalmente aberto (NA)** e o **normalmente fechado (NF)**. \"Normalmente\" quer dizer: com a bobina desligada.\n\nCom a bobina desligada, o comum toca o NF. Energizada, o comum passa para o NA. Você ouve um \"clique\".\n\nA grande vantagem é o **isolamento**: o lado da bobina (o circuito eletrônico) e o lado dos contatos (a carga) não se tocam eletricamente. Um sinal de 5 V pode comandar uma bomba, um motor ou uma lâmpada grande, **desde que** os contatos sejam especificados para aquela tensão e corrente.\n\n## Transistor + relé\nO transistor liga a bobina do relé, e o relé liga a carga. Duas regras:\n- A corrente da bobina precisa caber no transistor. Uma bobina de 9 V costuma puxar dezenas de miliampères.\n- **Diodo em paralelo com a bobina**, invertido. Quando a bobina desliga, ela gera um pico de tensão alto que queimaria o transistor; o diodo absorve esse pico.\n\n## Dois transistores, mais controle\nUm transistor pode comandar outro. No primeiro estágio, um sensor e um divisor ligam ou desligam T1. O coletor de T1 alimenta a base de T2, que liga o relé. Assim:\n- Quando T1 conduz, ele \"rouba\" a corrente que iria para a base de T2, e T2 desliga.\n- Quando T1 desliga, a corrente vai para a base de T2, que liga o relé.\n\nCom isso o circuito **inverte** a lógica do sensor e ganha mais amplificação: um sinal bem fraco no sensor consegue mover um relé.\n\n## O alarme que fica disparado\nNum alarme, não basta tocar enquanto a porta está aberta: ele deve **continuar tocando** depois. O truque é usar um **contato extra do próprio relé** para mantê-lo ligado, ligado em paralelo com o transistor que o acionou. Quando o relé fecha uma vez, esse contato passa a alimentar a bobina sozinho. Para desligar, um botão **NF** em série corta a alimentação da bobina e o circuito volta a vigiar.\n\nÉ exatamente a ideia do **selo** dos contatores, que você vai ver em Comandos elétricos: um contato que lembra que algo aconteceu. Em eletrônica digital, a mesma função se chama **memória de 1 bit**.\n\n## Relés hoje\nAs centrais telefônicas antigas tinham salas cheias de relés. Hoje boa parte desse trabalho é feita por transistores e chips, mas o relé continua muito usado onde é preciso isolar o comando da carga, como em módulos de relé para Arduino e ESP32.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T16:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Relé: bobina vira ímã e move os contatos comum, NA e NF.",
    "Isola o circuito de comando da carga.",
    "Bobina pede diodo em paralelo, invertido.",
    "Um contato do próprio relé pode mantê-lo ligado: o alarme 'lembra'."
   ],
   "minutes": 10,
   "order": 7,
   "questions": [
    {
     "answer": 2,
     "explain": "NF quer dizer normalmente fechado, isto é, fechado com a bobina sem energia.",
     "options": [
      "NA",
      "NF",
      "Nenhum",
      "Terminal da bobina"
     ],
     "prompt": "Com a bobina do relé desligada, o contato comum está ligado ao:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "É a autorretenção, o mesmo princípio do selo de um contator.",
     "options": [
      "Um resistor maior na base",
      "Um contato do relé que mantém a própria bobina ligada",
      "Um LED em série",
      "Uma bateria maior"
     ],
     "prompt": "Para que o alarme continue tocando depois que a porta fecha, usa-se:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "A tensão e a corrente dos contatos vêm especificadas no relé e precisam ser respeitadas.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Os contatos de um relé de 5 V sempre aguentam ligar qualquer aparelho de tomada.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "O coletor de T1 puxa para 0 V o ponto que alimentaria a base de T2.",
     "options": [
      "Também conduz",
      "Desliga, porque T1 desvia a corrente da base dele",
      "Queima",
      "Fica em curto"
     ],
     "prompt": "No circuito com dois transistores, quando T1 conduz, T2:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Quando o transistor não aguenta a carga, o relé assume; e um contato extra faz o circuito lembrar que foi disparado.",
   "title": "Relés e o alarme que dispara e fica disparado",
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "eln-solda": {
   "author": "",
   "bancada": "## Cada geração pede uma mão diferente\nSoldar um aparelho a válvula, com terminais grossos e fios presos em barras, é uma coisa. Soldar um componente SMD, do tamanho de um grão de arroz, sem levantar a trilha, é outra. Na prática dos consertos, a técnica foi mudando junto com os componentes: ponta mais fina, menos calor, mais paciência e boa iluminação.\n\nO que nunca mudou: emenda boa é lisa e brilhante, e componente que esquentou demais pode falhar dias depois. Na dúvida, refaça a emenda.",
   "body": "Soldar é unir dois metais com um terceiro metal que derrete a uma temperatura mais baixa: a **solda**. Ela escorre entre o terminal do componente e a trilha de cobre e, ao endurecer, prende e conduz ao mesmo tempo.\n\n## O que você precisa\n- **Ferro de solda** de 25 a 40 W, com ponta fina. Estações com controle de temperatura facilitam muito; algo em torno de 330 a 360 °C serve para a maioria dos trabalhos.\n- **Solda para eletrônica** em fio fino, com **fluxo** no miolo. O fluxo limpa o metal na hora e ajuda a solda a escorrer. Existe a solda com chumbo (estanho-chumbo), mais fácil de usar, e a **sem chumbo**, que pede um pouco mais de temperatura.\n- **Esponja úmida** ou palha de latão para limpar a ponta.\n- **Alicate de corte**, **alicate de bico**, **desencapador** e um **sugador de solda** ou malha dessoldadora para corrigir erros.\n- **Placa padrão** (perfurada, com trilhas) ou placa ilhada para montar o circuito.\n\n## Segurança\nA ponta passa de 300 °C: use sempre o suporte e nunca segure perto da ponta. Trabalhe com ventilação, porque a fumaça do fluxo irrita. Use óculos ao cortar terminais, que podem voar. Se a solda tiver chumbo, lave as mãos depois e não coma na bancada.\n\n## A técnica, passo a passo\n- **Estanhe a ponta:** com o ferro quente, encoste um pouco de solda na ponta e limpe na esponja. Ponta brilhante transfere calor; ponta escura e oxidada não.\n- **Encaixe o componente** pela frente da placa e dobre levemente os terminais por trás para ele não cair.\n- **Aqueça os dois ao mesmo tempo:** encoste a ponta no terminal **e** na trilha juntos, por um ou dois segundos.\n- **Leve a solda à junção, não à ponta:** encoste o fio de solda do outro lado do terminal. Ela derrete e escorre em volta. Use pouca.\n- **Retire a solda, depois o ferro**, e não mexa no componente enquanto esfria.\n- **Corte o excesso** do terminal rente à solda.\n\n## Como reconhecer uma boa emenda\nUma emenda boa é **lisa, brilhante e em forma de cone**, abraçando o terminal. Uma emenda **opaca, granulada ou em forma de bolinha** é **solda fria**: parece presa, mas o contato é ruim e o circuito falha de vez em quando. A correção é reaquecer, com um pouco de fluxo ou solda nova.\n\n## Placa padrão: interromper e unir trilhas\nNa placa com trilhas contínuas, às vezes o circuito pede que uma trilha seja **cortada**: gire uma broca de 4 a 6 mm com a mão sobre o furo, pelo lado do cobre, até o cobre sair em volta. Quando duas trilhas precisam ser ligadas, use um pedaço de fio (um **jumper**). Antes de energizar, confira com o teste de continuidade que nenhuma gota de solda ligou duas trilhas vizinhas.\n\n## Componentes sensíveis ao calor\nTransistores, LEDs e chips não gostam de calor demorado. Solde rápido, deixe esfriar entre um terminal e outro e, para chips, prefira usar um **soquete** e encaixar o chip no final.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T16:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Aqueça terminal e trilha juntos; a solda vai na junção.",
    "Emenda boa é lisa, brilhante e em cone; opaca é solda fria.",
    "Corte trilhas da placa padrão com uma broca girada à mão.",
    "Ferro sempre no suporte, ventilação e óculos."
   ],
   "minutes": 10,
   "order": 4,
   "questions": [
    {
     "answer": 2,
     "explain": "A solda tem que derreter pelo calor das peças, para molhar o terminal e a trilha.",
     "options": [
      "Na ponta do ferro, longe da placa",
      "Na junção entre o terminal e a trilha já aquecidos",
      "Só no terminal frio",
      "Na esponja"
     ],
     "prompt": "Onde você deve encostar o fio de solda?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Reaqueça a emenda até ela ficar lisa e brilhante.",
     "options": [
      "Solda perfeita",
      "Solda fria, com contato ruim",
      "Excesso de fluxo, que é bom",
      "Componente invertido"
     ],
     "prompt": "Uma emenda opaca e granulada indica:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Assim o chip não recebe calor e pode ser trocado.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Para soldar um chip, o ideal é soldar um soquete e encaixar o chip depois.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Remova o excesso com o sugador ou com a ponta limpa passando pelo vão.",
     "options": [
      "Um circuito aberto",
      "Um curto entre dois pontos do circuito",
      "Mais brilho no LED",
      "Nada"
     ],
     "prompt": "Duas trilhas vizinhas ficaram ligadas por uma gota de solda. Isso causa:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Ferro, solda, placa padrão e a técnica para uma emenda firme e brilhante, sem solda fria.",
   "title": "Solda e montagem de placas",
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "eln-transistor": {
   "author": "",
   "body": "Um pino de Arduino ou ESP32 fornece poucos miliampères. Um relé, um motorzinho ou uma fita de LED pedem bem mais. O **transistor** resolve: uma corrente pequena controla uma corrente grande.\n\n## O transistor bipolar NPN\nTem três terminais: **base**, **coletor** e **emissor**. Quando entra corrente na base, o caminho entre coletor e emissor se abre para uma corrente muito maior (dezenas a centenas de vezes maior).\n\nUsado como chave, ele trabalha em dois estados:\n- **Corte:** base sem corrente, transistor desligado, carga desligada.\n- **Saturação:** base com corrente suficiente, transistor totalmente ligado, carga ligada.\n\n## A montagem básica\n- Emissor no negativo (GND).\n- Carga entre o positivo da fonte e o coletor.\n- Um **resistor na base**, entre o pino do microcontrolador e a base. Sem ele, a corrente da base não tem limite e queima o transistor ou o pino.\n\nPara um transistor pequeno como o BC547 (até cerca de 100 mA no coletor), um resistor de base entre 1 kΩ e 4,7 kΩ costuma funcionar com sinais de 3,3 V ou 5 V. Para correntes maiores, usa-se um transistor de potência ou um **MOSFET**.\n\n## O diodo do relé\nA bobina do relé guarda energia no campo magnético. Quando o transistor desliga, essa energia aparece como um **pico de tensão** que pode passar de cem volts e destruir o transistor. A solução é um **diodo em paralelo com a bobina**, ao contrário (cátodo no positivo). Ele dá um caminho para essa energia se dissipar. Esquecer esse diodo é uma das causas mais comuns de transistor queimado.\n\n## Terra comum\nSe a carga usa uma fonte diferente da do microcontrolador, os **negativos das duas fontes precisam estar ligados**. Sem terra comum, a corrente da base não tem por onde voltar e o transistor não liga.\n\n## O mesmo princípio em outros lugares\nFontes chaveadas, inversores de frequência e controladores de motor são, no fundo, transistores ligando e desligando muito rápido.\n\n## Projeto final\n**Circuito que liga uma carga com transistor.** Use um BC547 para acender um LED ou ligar um relé a partir de um botão ou de um pino do ESP32, com o diodo de proteção no relé.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Corrente pequena na base controla corrente grande no coletor.",
    "Resistor na base sempre.",
    "Bobina de relé pede diodo em paralelo, invertido.",
    "Fontes diferentes: negativos ligados."
   ],
   "minutes": 9,
   "order": 5,
   "questions": [
    {
     "answer": 2,
     "explain": "Sem ele, a corrente da base seria limitada só pelo pino, que queima.",
     "options": [
      "Aumentar a tensão",
      "Limitar a corrente da base",
      "Proteger contra raios",
      "Inverter o sinal"
     ],
     "prompt": "Para que serve o resistor entre o pino do microcontrolador e a base?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "O pico de tensão da bobina destrói o transistor.",
     "options": [
      "Um capacitor de 1 F",
      "O diodo em paralelo com a bobina do relé",
      "Um LED",
      "Um fusível de 20 A"
     ],
     "prompt": "O transistor que liga um relé queimou de novo. O que provavelmente falta?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Sem terra comum, a corrente de base não fecha o circuito.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Se a carga usa outra fonte, não é preciso ligar o negativo dela ao negativo do microcontrolador.",
     "type": "vf"
    },
    {
     "answer": 1,
     "explain": "Totalmente desligado ou totalmente ligado.",
     "options": [
      "Corte e saturação",
      "Ligado e meio ligado",
      "Série e paralelo",
      "AC e DC"
     ],
     "prompt": "Usado como chave, o transistor trabalha entre:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Como uma corrente pequena liga uma carga maior, e por que o relé precisa de um diodo.",
   "title": "Transistor como chave",
   "track": "eletronica",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "eln-transistor-sensores": {
   "author": "",
   "body": "Na lição anterior você viu o transistor como chave. Agora vamos ver o que acontece **entre** desligado e totalmente ligado, e como fazer um sensor comandar a chave.\n\n## Ganho: a corrente da base vezes um número\nEnquanto o transistor não está totalmente ligado, a corrente do coletor é a corrente da base multiplicada por um número fixo, o **ganho** (chamado de **hFE** ou β).\n\n**Ganho = corrente do coletor ÷ corrente da base**\n\nExemplo: com 0,1 mA na base e ganho 200, passam 20 mA no coletor. Transistores pequenos têm ganhos de algumas dezenas a algumas centenas, e o valor varia bastante até entre peças do mesmo modelo. Por isso os projetos não dependem de um ganho exato: eles dão corrente de base com folga.\n\n## Os três estados\n- **Corte:** a tensão entre base e emissor está abaixo de uns **0,6 V** (transistor de silício). Não passa corrente na base nem no coletor.\n- **Região ativa:** a base conduz e o coletor segue o ganho. O brilho de um LED muda aos poucos conforme a base.\n- **Saturação:** a corrente da base é tanta que o transistor já está \"todo aberto\", como uma torneira escancarada. Daqui para cima, quem limita a corrente é a carga e o resistor do coletor, não o transistor.\n\nPara usar como chave, queremos corte ou saturação. Para amplificar som, queremos a região ativa.\n\n## O divisor de tensão comanda a base\nLigue um resistor fixo e um **resistor variável** em série entre +9 V e 0 V. O ponto do meio alimenta a base através de um resistor. Girando o potenciômetro, a tensão do meio muda; quando passa de uns 0,6 V, o transistor começa a conduzir e o LED acende.\n\nAgora troque o potenciômetro por um sensor:\n- **LDR (resistor dependente de luz):** no escuro tem resistência alta; no claro, baixa. Embaixo do divisor, ele faz o LED **acender no escuro**. É a luz de jardim que liga sozinha ao anoitecer.\n- **Termistor NTC:** a resistência cai quando esquenta. Dependendo da posição no divisor, o circuito liga com o frio ou com o calor: dá um alarme de temperatura ou um aviso de geladeira aberta.\n\nTrocar o sensor de posição com o resistor fixo **inverte** o comportamento. Esse é o truque mais útil da eletrônica de sensores.\n\n## No lugar do LED\nO coletor pode ligar um **buzzer piezoelétrico** (que apita), um relé ou um motor pequeno. Para cargas maiores que a corrente máxima do transistor, use um relé, assunto da próxima lição.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T16:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Ganho = corrente do coletor ÷ corrente da base.",
    "Corte abaixo de ~0,6 V na base; saturação é a chave totalmente fechada.",
    "Divisor com sensor na base transforma luz ou calor em liga/desliga.",
    "Trocar o sensor de posição inverte o comportamento."
   ],
   "minutes": 10,
   "order": 6,
   "questions": [
    {
     "answer": 3,
     "explain": "0,2 mA × 150 = 30 mA.",
     "options": [
      "0,2 mA",
      "3 mA",
      "30 mA",
      "150 mA"
     ],
     "prompt": "Um transistor com ganho 150 recebe 0,2 mA na base, sem saturar. A corrente no coletor é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "No escuro a resistência do LDR sobe e a tensão na base também.",
     "options": [
      "Está claro",
      "Está escuro",
      "A bateria descarrega",
      "Nunca"
     ],
     "prompt": "Com o LDR na parte de baixo do divisor que alimenta a base, o LED acende quando:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Saturado, ele já está totalmente ligado; quem limita é a carga.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Quando o transistor está saturado, aumentar a corrente da base aumenta muito a corrente no LED.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "É a tensão de condução da junção base-emissor.",
     "options": [
      "0,06 V",
      "Cerca de 0,6 V",
      "6 V",
      "60 V"
     ],
     "prompt": "Abaixo de que tensão entre base e emissor um transistor de silício fica cortado?",
     "type": "mc"
    }
   ],
   "sim": "trans",
   "status": "published",
   "summary": "Como uma corrente minúscula na base controla uma maior, e como um LDR ou termistor faz o transistor ligar sozinho.",
   "title": "Ganho do transistor e sensores que ligam cargas",
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "ia-1-modelos": {
   "author": "",
   "body": "Um modelo de linguagem (LLM) foi treinado com uma quantidade enorme de texto para fazer uma coisa: prever qual pedaço de texto vem a seguir. Repetindo isso muito rápido, ele escreve respostas inteiras.\n\n## O que isso significa na prática\n- **Ele não consulta um banco de dados** por padrão. Responde com base no que aprendeu no treino e no que você coloca na conversa.\n- **Ele pode inventar com confiança.** Quando falta informação, o modelo completa com algo plausível. Isso se chama **alucinação**.\n- **O contexto é a memória de trabalho.** Tudo o que está na conversa (sua pergunta, documentos colados, instruções) influencia a resposta.\n\n## Tokens\nO modelo lê e escreve em **tokens**, pedaços de palavras. Os limites de tamanho e o custo das APIs são medidos em tokens.\n\n## Como usar bem\nDê contexto, peça fontes quando possível e confira fatos importantes. Para responder sobre os documentos da sua empresa, use RAG: o sistema busca os trechos certos e entrega ao modelo junto com a pergunta.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "O modelo prevê texto; não sabe o que não está no treino ou no contexto.",
    "Alucinação é inventar com confiança.",
    "Para dados da empresa, use RAG."
   ],
   "minutes": 7,
   "order": 1,
   "questions": [
    {
     "answer": 2,
     "explain": "O modelo completou a lacuna com algo plausível.",
     "options": [
      "Bug de sintaxe",
      "Alucinação",
      "Overfitting",
      "Timeout"
     ],
     "prompt": "Um assistente responde um prazo de entrega que não existe na política da loja. O nome disso é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Só quando o sistema dá a ele uma ferramenta de busca.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Por padrão, um modelo de linguagem consulta a internet a cada pergunta.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "RAG traz o conteúdo certo para o contexto.",
     "options": [
      "Treinar um modelo do zero",
      "Usar RAG para buscar os trechos e entregar ao modelo",
      "Aumentar a temperatura",
      "Usar um modelo maior"
     ],
     "prompt": "Qual é a melhor forma de fazer um assistente responder sobre os manuais da sua empresa?",
     "type": "mc"
    }
   ],
   "status": "published",
   "summary": "Como ChatGPT, Claude e Gemini funcionam por dentro, sem matemática.",
   "title": "O que é um modelo de linguagem (e o que ele não é)",
   "track": "ia",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "ia-2-prompts": {
   "author": "",
   "body": "Um bom prompt é como um bom pedido de trabalho: diz quem faz, o quê, para quem, com quais informações e em que formato.\n\n## A estrutura\n- **Papel:** \"Você é um professor de Python para iniciantes.\"\n- **Contexto:** quem é o público e qual é a situação.\n- **Tarefa:** o que deve ser feito, com um verbo claro.\n- **Formato:** lista, tabela, JSON, até 100 palavras.\n- **Exemplos:** mostre um exemplo do resultado esperado.\n- **Limites:** \"Se não souber, diga que não sabe.\"\n\n## Exemplo\n```\nVocê é um tutor de programação para iniciantes.\nExplique o que faz o código abaixo em até 5 linhas,\nsem jargão. Se houver erro, aponte a linha.\n\nfor i in range(3):\n    print(i)\n```\n\n## Itere\nRaramente o primeiro prompt é o melhor. Leia a resposta, ajuste uma coisa por vez e compare.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Papel, contexto, tarefa, formato, exemplos e limites.",
    "Peça para o modelo admitir quando não souber.",
    "Ajuste uma coisa por vez."
   ],
   "minutes": 8,
   "order": 2,
   "questions": [
    {
     "answer": 2,
     "explain": "Tem público, tarefa, formato e tamanho.",
     "options": [
      "Fale sobre Python",
      "Explique listas em Python para um iniciante, com 2 exemplos curtos e em até 120 palavras",
      "Python listas",
      "Me ensine tudo de Python"
     ],
     "prompt": "Qual destes prompts tende a dar o melhor resultado?",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Dá uma saída honesta para a falta de dados.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Dizer ao modelo o que fazer quando ele não tiver a informação reduz invenções.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Exemplos de formato são muito eficazes.",
     "options": [
      "Trocar de IA",
      "Especificar o formato e mostrar um exemplo",
      "Escrever tudo em maiúsculas",
      "Repetir a mesma pergunta"
     ],
     "prompt": "O resultado veio no formato errado. O melhor próximo passo é:",
     "type": "mc"
    }
   ],
   "status": "published",
   "summary": "Uma estrutura simples para pedir exatamente o que você precisa.",
   "title": "Prompts que funcionam",
   "track": "ia",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "ia-3-agentes": {
   "author": "",
   "body": "Um chatbot responde. Um **agente** recebe um objetivo e decide quais passos dar, usando **ferramentas** autorizadas: buscar dados, chamar uma API, criar uma tarefa, enviar uma mensagem.\n\n## As peças de um agente\n- **Modelo:** o \"cérebro\" que decide o próximo passo.\n- **Instruções:** objetivo, regras e limites.\n- **Ferramentas:** funções que ele pode chamar.\n- **Memória:** o que ele lembra entre os passos e as conversas.\n\n## Automação com n8n\nO n8n monta fluxos ligando apps (planilhas, e-mail, Slack, APIs) em blocos visuais. Com nós de IA, um fluxo pode, por exemplo, ler um formulário, classificar o pedido com IA e criar a tarefa certa.\n\n## Segurança primeiro\n- Dê ao agente só as permissões necessárias.\n- Peça **aprovação humana** antes de ações importantes (enviar, pagar, apagar).\n- **Nunca** coloque chaves de API no navegador ou em código público.\n- Registre o que o agente fez, para poder conferir.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Agente = modelo + instruções + ferramentas + memória.",
    "Aprovação humana para ações sensíveis.",
    "Chaves de API só no servidor."
   ],
   "minutes": 9,
   "order": 1,
   "questions": [
    {
     "answer": 2,
     "explain": "Ele age usando ferramentas.",
     "options": [
      "Um site que responde perguntas sobre a loja",
      "Um sistema que lê e-mails, classifica e cria tarefas no Trello sozinho",
      "Um FAQ estático",
      "Um corretor ortográfico"
     ],
     "prompt": "Qual destes é um agente, e não apenas um chatbot?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Qualquer visitante consegue ver e usar a chave.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "É seguro colocar a chave da API do modelo no código JavaScript do site.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Comece com supervisão.",
     "options": [
      "Liberar tudo de uma vez",
      "Exigir aprovação humana e registrar as ações",
      "Usar um modelo maior",
      "Desligar os logs"
     ],
     "prompt": "Antes de deixar um agente enviar e-mails aos clientes, o mais prudente é:",
     "type": "mc"
    }
   ],
   "status": "published",
   "summary": "O que muda quando a IA passa a usar ferramentas e executar tarefas.",
   "title": "Agentes e automação: do chat à ação",
   "track": "agentes",
   "updatedAt": "2026-10-24T00:30:00.000Z"
  },
  "ins-diagramas": {
   "author": "",
   "body": "Antes de mexer numa instalação, é preciso saber **ler o desenho** dela. O mesmo circuito pode aparecer de três formas, cada uma boa para uma finalidade.\n\n## Diagrama funcional\nMostra **como o circuito funciona**, sem se preocupar com onde as coisas ficam. A fonte fica em cima, a carga embaixo, e você segue o caminho da corrente. É o melhor para entender e para procurar defeito.\n\n## Diagrama multifilar\nDesenha **cada fio** separadamente: fase, neutro, retorno e terra. Mostra exatamente quantos condutores passam em cada trecho. É o que se usa na hora de montar.\n\n## Diagrama unifilar\nDesenha a instalação sobre a **planta da casa**, com um traço só por eletroduto. Os condutores que passam por ele aparecem como pequenos traços cortando a linha. É o desenho do projeto elétrico: mostra onde ficam tomadas, pontos de luz, interruptores e o quadro.\n\n## Símbolos que aparecem em quase todo projeto\n- **Ponto de luz no teto:** um círculo, com a potência e o circuito anotados.\n- **Interruptor:** um pequeno círculo com a letra que indica qual lâmpada ele comanda.\n- **Tomada:** triângulo; a altura (baixa, média, alta) e a potência vêm indicadas.\n- **Quadro de distribuição:** retângulo com o número de cada circuito.\n- **Condutores no eletroduto:** traços que indicam fase, neutro, retorno e terra.\n\nOs símbolos variam um pouco entre projetistas. Todo projeto bem-feito traz uma **legenda**: leia primeiro.\n\n## Cores dos fios\nPela norma de instalações de baixa tensão, o **neutro é azul-claro** e o **terra é verde ou verde e amarelo**. Fase e retorno costumam usar outras cores (preto, vermelho, branco, cinza), conforme o padrão do projeto. Nunca confie só na cor: em instalação antiga pode estar tudo trocado. **Meça.**\n\n## Projeto final\n**Diagrama unifilar de um cômodo.** Desenhe a planta de um cômodo da sua casa com tomadas, pontos de luz, interruptores e o circuito de cada um.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Funcional explica, multifilar monta, unifilar localiza na planta.",
    "Leia a legenda do projeto antes dos símbolos.",
    "Neutro azul-claro, terra verde ou verde-amarelo.",
    "Cor não substitui medição."
   ],
   "minutes": 8,
   "order": 1,
   "questions": [
    {
     "answer": 2,
     "explain": "O multifilar desenha fio por fio.",
     "options": [
      "Unifilar",
      "Multifilar",
      "Funcional",
      "Planta baixa"
     ],
     "prompt": "Qual diagrama mostra cada condutor separado, ideal para montar o circuito?",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "O unifilar representa um eletroduto por traço sobre a planta.",
     "options": [
      "Unifilar",
      "Multifilar",
      "Funcional",
      "Ladder"
     ],
     "prompt": "O projeto elétrico da casa desenhado sobre a planta usa normalmente o diagrama:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Essa é a regra da norma, mas instalações antigas ou mal-feitas podem ter cores trocadas. Meça antes.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Em qualquer casa, o fio azul-claro é sempre o neutro.",
     "type": "vf"
    },
    {
     "answer": 1,
     "explain": "O funcional mostra o caminho da corrente, que é o que se investiga num defeito.",
     "options": [
      "Funcional",
      "Unifilar",
      "Arquitetônico",
      "Nenhum"
     ],
     "prompt": "Para entender por que uma lâmpada não acende, o desenho mais útil é o:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Unifilar, multifilar e funcional: três jeitos de desenhar o mesmo circuito.",
   "title": "Leitura de diagramas e simbologia",
   "track": "instalacoes",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "ins-protecao": {
   "author": "",
   "body": "Cada dispositivo do quadro protege contra um problema diferente. Confundir os papéis é a origem de muita gambiarra perigosa.\n\n## Fusível\nO jeito mais antigo: um fio calibrado que **derrete** quando a corrente passa do limite. Protege, mas depois de atuar precisa ser trocado. Hoje aparece mais dentro de aparelhos e em painéis industriais.\n\n## Disjuntor termomagnético: protege o fio\nDesarma em duas situações:\n- **Sobrecarga** (parte térmica): corrente um pouco acima do normal por muito tempo, como muitos aparelhos na mesma tomada. Uma lâmina bimetálica esquenta, entorta e desarma.\n- **Curto-circuito** (parte magnética): corrente enorme e repentina. Uma bobina puxa o mecanismo em milissegundos.\n\nO disjuntor é escolhido pela **bitola do fio**, não pelo aparelho. Trocar um disjuntor que \"vive desarmando\" por um maior, sem trocar o fio, tira a proteção: o fio passa a esquentar sem que nada desarme.\n\n## DR (dispositivo diferencial residual): protege as pessoas\nO DR compara a corrente que **vai pela fase** com a que **volta pelo neutro**. Se uma parte está escapando por outro caminho (pela carcaça, pela água, por uma pessoa), a diferença aparece e ele desliga. Os de **30 mA** são os usados para proteção de pessoas. A norma de instalações exige DR em áreas molhadas, como banheiros, cozinhas, lavanderias e áreas externas.\n\nSe o DR desarma, **há fuga de corrente**. Desligar o DR para \"resolver\" é deixar a armadilha armada.\n\n## Aterramento\nO fio terra liga a carcaça metálica dos aparelhos a uma **haste cravada no solo**. Se um fio encostar na carcaça, a corrente tem um caminho fácil para a terra, o DR percebe a fuga e desarma. Sem terra, a carcaça fica energizada esperando alguém encostar.\n\n## DPS: protege contra surtos\nO **dispositivo de proteção contra surtos** desvia para a terra os picos de tensão causados por raios e manobras da rede. Ele não substitui disjuntor nem DR: cuida só dos picos rápidos que queimam eletrônicos.\n\n## Resumo\n- Disjuntor: o **fio** não pode esquentar demais.\n- DR: a **pessoa** não pode virar caminho da corrente.\n- DPS: o **aparelho** não pode receber um pico de tensão.\n\n## Projeto final\n**Quadro de distribuição explicado.** Fotografe o quadro da sua casa (sem abrir a tampa interna) e identifique cada disjuntor, o DR e o DPS, se existirem, e o que cada circuito alimenta.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Disjuntor protege o fio e é escolhido pela bitola.",
    "DR de 30 mA protege pessoas contra fuga de corrente.",
    "Sem aterramento, o DR não tem como perceber uma carcaça energizada antes de alguém tocar.",
    "DPS cuida de surtos, não de sobrecarga."
   ],
   "minutes": 10,
   "order": 3,
   "questions": [
    {
     "answer": 2,
     "explain": "O disjuntor maior sem fio adequado deixa o fio superaquecer.",
     "options": [
      "Trocar por um disjuntor maior",
      "Verificar se a bitola do fio e o disjuntor estão certos para a potência do chuveiro",
      "Ligar o chuveiro direto, sem disjuntor",
      "Desligar o DR"
     ],
     "prompt": "O disjuntor do chuveiro desarma toda hora. A atitude correta é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Ele mede a diferença entre ida e volta.",
     "options": [
      "A corrente total passa de 30 A",
      "Parte da corrente escapa por outro caminho e não volta pelo neutro",
      "Cai um raio longe",
      "A tensão está baixa"
     ],
     "prompt": "O DR desliga quando:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Cada um tem sua função: o DPS só desvia surtos de tensão.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "O DPS substitui o disjuntor no quadro.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Com terra, a fuga vai para a haste e o DR desarma.",
     "options": [
      "Aumentar a potência",
      "Dar um caminho para a corrente de fuga e permitir que a proteção atue",
      "Diminuir a conta de luz",
      "Substituir o neutro"
     ],
     "prompt": "Para que serve o fio terra ligado à carcaça da máquina de lavar?",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Fusível, disjuntor, dispositivo diferencial residual, aterramento e protetor contra surtos: quem protege o quê.",
   "title": "Disjuntores, DR e DPS: protegendo o circuito",
   "track": "instalacoes",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "ins-tomadas-interruptores": {
   "author": "",
   "body": "## O interruptor sempre interrompe a fase\nA regra de ouro: o interruptor fica no caminho da **fase**. O neutro vai direto para a lâmpada. Assim, com o interruptor desligado, o soquete fica sem tensão perigosa e a troca de lâmpada é mais segura. O fio que sai do interruptor e vai até a lâmpada se chama **retorno**.\n\n## Interruptor paralelo (three-way)\nComanda a mesma lâmpada de **dois lugares**, como no pé e no alto da escada. Cada interruptor tem três terminais: um comum e dois de saída. Entre os dois interruptores passam **dois retornos**. A lâmpada acende quando os dois estão \"do mesmo lado\" e apaga quando estão em lados diferentes. Em lógica digital, esse comportamento é uma porta **XOR** invertida.\n\n## Interruptor intermediário (four-way)\nPara comandar de **três ou mais lugares**, coloca-se um ou mais intermediários entre os dois paralelos. O intermediário cruza ou descruza os dois retornos a cada toque.\n\n## Tomadas no padrão brasileiro\nO padrão atual tem **três pinos redondos**: fase, neutro e **terra** no meio. Há dois tamanhos:\n- **10 A**, pinos mais finos, para a maioria dos aparelhos.\n- **20 A**, pinos mais grossos, para aparelhos de maior potência, como micro-ondas e air fryer grandes.\n\nUma tomada de 20 A aceita plugue de 10 A, mas o contrário não. Trocar o plugue de 20 A por um de 10 A para \"caber\" é perigoso: o circuito e a tomada não foram feitos para aquela corrente.\n\n## Iluminação: da fluorescente ao LED\n- A **lâmpada fluorescente tubular** precisa de um **reator** para dar a partida e limitar a corrente; nas antigas havia também o **starter**. Quando pisca e não acende, o problema costuma estar no starter, no reator ou no próprio tubo gasto.\n- A **lâmpada LED** tem um **driver** eletrônico que converte a tensão da rede em corrente contínua controlada. Consome bem menos para a mesma luz.\n- Ao trocar uma luminária fluorescente por tubo LED, muitos modelos exigem **retirar ou desviar o reator**. Siga o esquema do fabricante.\n\n## Projeto final\n**Esquema de ligação de um interruptor paralelo.** Desenhe o diagrama multifilar de uma lâmpada comandada por dois interruptores paralelos, indicando fase, neutro e os dois retornos.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Interruptor sempre na fase; o fio até a lâmpada é o retorno.",
    "Paralelo: dois pontos de comando; intermediário: três ou mais.",
    "Tomada de 20 A só para circuito e aparelho de 20 A.",
    "Fluorescente usa reator; LED usa driver."
   ],
   "minutes": 10,
   "order": 2,
   "questions": [
    {
     "answer": 2,
     "explain": "Dois paralelos (three-way) ligados por dois retornos.",
     "options": [
      "Dois interruptores simples",
      "Dois interruptores paralelos",
      "Um interruptor intermediário",
      "Um disjuntor"
     ],
     "prompt": "Para comandar a luz da escada de dois lugares, usam-se:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "É o contrário: o interruptor interrompe a fase.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "O interruptor deve ser ligado no neutro, para a lâmpada ficar sem fase quando desligada.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "O intermediário fica entre os dois paralelos e cruza os retornos.",
     "options": [
      "Três interruptores simples em série",
      "Dois paralelos com um intermediário no meio",
      "Três paralelos",
      "Dois simples e um paralelo"
     ],
     "prompt": "Para comandar a mesma lâmpada de três pontos, a ligação é:",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "São os componentes de partida da fluorescente.",
     "options": [
      "O neutro do quadro",
      "O starter ou o reator",
      "O interruptor paralelo",
      "A tomada de 20 A"
     ],
     "prompt": "Uma luminária fluorescente pisca e não acende, com tubo novo. O suspeito mais provável é:",
     "type": "mc"
    }
   ],
   "sim": "",
   "status": "published",
   "summary": "Interruptor simples, paralelo e intermediário, o padrão de tomadas e o que mudou da fluorescente para o LED.",
   "title": "Tomadas, interruptores e iluminação",
   "track": "instalacoes",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "iot-1-intro": {
   "author": "",
   "body": "Internet das Coisas (IoT) é ligar objetos físicos à internet para medir, avisar e controlar.\n\n## As quatro peças\n- **Sensor:** mede algo do mundo real (temperatura, umidade, movimento, luz).\n- **Microcontrolador:** uma pequena placa programável que lê o sensor. O **ESP32** é popular por ser barato e já ter Wi-Fi e Bluetooth.\n- **Rede:** Wi-Fi, Bluetooth, celular ou LoRa levam os dados adiante.\n- **Nuvem ou servidor:** recebe, guarda e mostra os dados num painel, e pode disparar alertas.\n\n## Exemplos\nUma horta que avisa quando a terra está seca. Um freezer que manda mensagem se esquentar. Um contador de pessoas numa loja.\n\n## O desafio de verdade\nO difícil em IoT não é ler o sensor: é fazer o dispositivo funcionar **sozinho por meses**, se recuperando de quedas de energia e de rede.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Sensor, microcontrolador, rede e nuvem.",
    "ESP32: barato, com Wi-Fi e Bluetooth.",
    "Robustez é o desafio principal."
   ],
   "minutes": 7,
   "order": 1,
   "questions": [
    {
     "answer": 2,
     "explain": "O sensor faz a medição.",
     "options": [
      "Broker",
      "Sensor",
      "Painel",
      "Roteador"
     ],
     "prompt": "Qual peça transforma uma grandeza física em sinal elétrico?",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "Por isso é tão usado em IoT.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "O ESP32 tem Wi-Fi integrado.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Recuperação automática é essencial.",
     "options": [
      "Parar até alguém reiniciar",
      "Tentar reconectar sozinho",
      "Apagar os dados",
      "Desligar o sensor"
     ],
     "prompt": "Um dispositivo IoT bem feito, quando a rede cai, deve:",
     "type": "mc"
    }
   ],
   "status": "published",
   "summary": "As quatro peças de qualquer projeto de Internet das Coisas.",
   "title": "O que é IoT: sensor, placa, rede e nuvem",
   "track": "iot",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "iot-2-esp32": {
   "author": "",
   "body": "O ESP32 pode ser programado na Arduino IDE ou no PlatformIO, em C++.\n\n## Estrutura de um programa\n```cpp\nvoid setup() {\n  Serial.begin(115200);   // roda uma vez\n}\n\nvoid loop() {\n  int leitura = analogRead(34);   // roda para sempre\n  Serial.println(leitura);\n  delay(1000);\n}\n```\n- **setup()** roda uma vez quando a placa liga.\n- **loop()** repete sem parar.\n- O **monitor serial** mostra o que a placa imprime: é o seu principal instrumento de depuração.\n\n## Cuidado com a tensão\nOs pinos do ESP32 trabalham em **3,3 V** e não toleram 5 V. Prefira sensores de 3,3 V ou use um conversor de nível lógico.\n\n## Boas práticas\nImprima mensagens com horário e estado (\"Wi-Fi conectado\", \"leitura ok\"). Quando algo falhar às 3h da manhã, esse log vai contar a história.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "setup() uma vez, loop() para sempre.",
    "Monitor serial é seu instrumento de depuração.",
    "Pinos de 3,3 V: nada de 5 V direto."
   ],
   "minutes": 11,
   "order": 2,
   "questions": [
    {
     "answer": 2,
     "explain": "loop() repete para sempre.",
     "options": [
      "setup()",
      "loop()",
      "main()",
      "Serial.begin()"
     ],
     "prompt": "Onde fica o código que deve rodar continuamente?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Os pinos são de 3,3 V.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Posso ligar um sinal de 5 V direto em qualquer pino do ESP32.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Ele mostra as mensagens do programa.",
     "options": [
      "O LED de energia",
      "O monitor serial",
      "Um multímetro no Wi-Fi",
      "Reiniciar a placa"
     ],
     "prompt": "A melhor ferramenta para ver o que a placa está fazendo é:",
     "type": "mc"
    }
   ],
   "status": "published",
   "summary": "Programar a placa, ler um valor e cuidar da tensão dos pinos.",
   "title": "ESP32 na prática: lendo um sensor",
   "track": "iot",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "iot-3-mqtt": {
   "author": "",
   "body": "MQTT funciona como um quadro de avisos: dispositivos **publicam** mensagens em **tópicos**, e quem tiver interesse **assina** esses tópicos. No meio fica o **broker**, que entrega as mensagens.\n\n## Exemplo de tópicos\n```\ncasa/sala/temperatura\ncasa/sala/umidade\nhorta/canteiro1/solo\n```\n\n## Publicando com ESP32 (biblioteca PubSubClient)\n```cpp\nif (!client.connected()) {\n  reconectarMqtt();\n}\nclient.loop();\nclient.publish(\"casa/sala/temperatura\", \"24.6\");\n```\n\n## Por que MQTT\n- Mensagens pequenas, ótimo para redes fracas.\n- Vários painéis e sistemas podem ouvir o mesmo tópico.\n- Níveis de QoS controlam a garantia de entrega.\n\n## A regra de ouro\nVerifique a conexão com o Wi-Fi e com o broker **antes de publicar**, e reconecte se tiver caído, esperando um pouco mais a cada tentativa.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Publicar, assinar, tópico e broker.",
    "MQTT é leve e ideal para IoT.",
    "Reconecte antes de publicar."
   ],
   "minutes": 10,
   "order": 3,
   "questions": [
    {
     "answer": 2,
     "explain": "O broker distribui as mensagens.",
     "options": [
      "O sensor",
      "O broker",
      "O roteador",
      "O painel"
     ],
     "prompt": "No MQTT, quem entrega as mensagens aos assinantes?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Hierarquia clara facilita assinar grupos de dados.",
     "options": [
      "dados",
      "casa/cozinha/temperatura",
      "123",
      "tópico novo"
     ],
     "prompt": "Qual destes é um bom nome de tópico?",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "E reconectar se não estiver.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Antes de publicar, o dispositivo deve verificar se ainda está conectado ao broker.",
     "type": "vf"
    }
   ],
   "status": "published",
   "summary": "O protocolo leve que conecta milhões de dispositivos IoT.",
   "title": "MQTT: enviando dados para a nuvem",
   "track": "iot",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "prog-1-logica": {
   "author": "",
   "body": "Todo programa é feito de três ideias: **guardar dados**, **decidir** e **repetir**.\n\n## Variáveis\n```python\nnome = \"Ana\"\nidade = 19\naltura = 1.68\n```\n\n## Decisões\n```python\nif idade >= 18:\n    print(nome, \"é maior de idade\")\nelse:\n    print(nome, \"é menor de idade\")\n```\nO Python usa a **indentação** (o recuo) para saber o que está dentro do if.\n\n## Repetições\n```python\nfor numero in range(1, 4):\n    print(\"Volta\", numero)\n```\nIsso imprime Volta 1, Volta 2 e Volta 3: o range vai do primeiro número até antes do último.\n\n## Onde rodar\nInstale o Python em python.org e use o VS Code, ou teste no navegador em sites como o Google Colab.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Variáveis guardam dados.",
    "if/else decide; for repete.",
    "Indentação faz parte da sintaxe do Python."
   ],
   "minutes": 10,
   "order": 1,
   "questions": [
    {
     "answer": 2,
     "explain": "range(5) gera 0, 1, 2, 3 e 4.",
     "options": [
      "4",
      "5",
      "6",
      "Infinitas"
     ],
     "prompt": "Quantas vezes o laço for i in range(5) executa?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "O recuo define os blocos do código.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Em Python, o recuo (indentação) é só estética e pode ser ignorado.",
     "type": "vf"
    },
    {
     "answer": 2,
     "explain": "Um sinal de igual atribui; dois comparam.",
     "options": [
      "nome == \"Maria\"",
      "nome = \"Maria\"",
      "\"Maria\" = nome",
      "print(nome)"
     ],
     "prompt": "Qual linha guarda o texto Maria numa variável?",
     "type": "mc"
    }
   ],
   "status": "published",
   "summary": "Os três blocos de qualquer programa, com exemplos que você roda hoje.",
   "title": "Lógica com Python: variáveis, decisões e repetições",
   "track": "prog",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "prog-2-erros": {
   "author": "",
   "body": "## Funções\nUma função dá nome a um pedaço de código e evita repetição.\n```python\ndef media(notas):\n    return sum(notas) / len(notas)\n\nprint(media([7, 8, 10]))\n```\n\n## Lendo um erro\n```\nTraceback (most recent call last):\n  File \"app.py\", line 4, in <module>\n    print(media([]))\n  File \"app.py\", line 2, in media\n    return sum(notas) / len(notas)\nZeroDivisionError: division by zero\n```\n- Leia **de baixo para cima**: a última linha diz o tipo do erro.\n- As linhas acima mostram **onde** aconteceu (arquivo e número da linha).\n- Aqui, a lista estava vazia e houve divisão por zero.\n\n## Tratando o erro\n```python\ndef media(notas):\n    if not notas:\n        return 0\n    return sum(notas) / len(notas)\n```",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "Funções nomeiam e reaproveitam código.",
    "Leia o traceback de baixo para cima.",
    "Trate os casos extremos, como listas vazias."
   ],
   "minutes": 9,
   "order": 2,
   "questions": [
    {
     "answer": 2,
     "explain": "A última linha mostra o tipo e a mensagem.",
     "options": [
      "Na primeira linha",
      "Na última linha",
      "No meio",
      "Não aparece"
     ],
     "prompt": "Num traceback, onde está o tipo do erro?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Lista vazia tem tamanho 0.",
     "options": [
      "A função não existe",
      "len([]) é 0 e houve divisão por zero",
      "Faltou o print",
      "Erro de indentação"
     ],
     "prompt": "O que causa ZeroDivisionError em media([])?",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "return entrega o resultado para quem chamou.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "Uma função pode devolver um valor com return.",
     "type": "vf"
    }
   ],
   "status": "published",
   "summary": "Organize o código em funções e aprenda a ler a mensagem de erro em vez de temer.",
   "title": "Funções e erros: lendo um traceback",
   "track": "prog",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "prog-3-web": {
   "author": "",
   "body": "## As três camadas\n- **HTML:** a estrutura (títulos, textos, botões).\n- **CSS:** a aparência (cores, tamanhos, posição).\n- **JavaScript:** o comportamento (cliques, dados, atualizações).\n\n## Uma página mínima\n```html\n<h1 id=\"titulo\">Olá!</h1>\n<button id=\"botao\">Buscar piada</button>\n<script>\n  document.getElementById(\"botao\").onclick = async () => {\n    const resposta = await fetch(\"https://api.exemplo.com/piada\");\n    const dados = await resposta.json();\n    document.getElementById(\"titulo\").textContent = dados.texto;\n  };\n</script>\n```\n\n## API e JSON\nUma **API** é um endereço que devolve dados, normalmente em **JSON**: chaves e valores, como {\"texto\": \"...\"}. O fetch busca, o json() transforma em objeto.\n\n## Ferramenta essencial\nAperte **F12** no navegador. A aba **Console** mostra erros e a aba **Rede (Network)** mostra cada requisição e o que o servidor respondeu.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "diagram": "",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "keypoints": [
    "HTML estrutura, CSS estiliza, JavaScript dá comportamento.",
    "APIs devolvem JSON.",
    "F12: Console e Rede resolvem a maioria dos mistérios."
   ],
   "minutes": 12,
   "order": 3,
   "questions": [
    {
     "answer": 2,
     "explain": "CSS cuida da aparência.",
     "options": [
      "HTML",
      "CSS",
      "JSON",
      "SQL"
     ],
     "prompt": "Qual camada define a cor de um botão?",
     "type": "mc"
    },
    {
     "answer": 2,
     "explain": "Acessar uma propriedade inexistente não dá erro: devolve undefined.",
     "options": [
      "A internet caiu",
      "O objeto não tem a propriedade nome",
      "O CSS está errado",
      "Sempre"
     ],
     "prompt": "Em JavaScript, dados.nome devolve undefined quando:",
     "type": "mc"
    },
    {
     "answer": 1,
     "explain": "É a primeira parada para depurar integrações.",
     "options": [
      "Verdadeiro",
      "Falso"
     ],
     "prompt": "A aba Rede (Network) do navegador mostra a resposta exata de cada API.",
     "type": "vf"
    }
   ],
   "status": "published",
   "summary": "Como uma página é montada e como ela busca dados de uma API.",
   "title": "Web em 15 minutos: HTML, CSS e JavaScript",
   "track": "prog",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  }
 },
 "projects": {
  "alarme-laco-rele": {
   "author": "",
   "challenge": "Troque o laço de fio por um LDR para o alarme disparar quando alguém acender a luz de um cômodo escuro. Pense em qual posição do divisor o LDR precisa ficar.",
   "createdAt": "2026-10-24T16:30:00.000Z",
   "demo": false,
   "duration": "3 a 4 horas",
   "goal": "Montar e soldar um alarme simples que usa transistor, relé com autorretenção e buzzer, entendendo cada parte e testando com o multímetro.",
   "history": [
    {
     "at": "2026-10-24T16:30:00.000Z",
     "status": "published"
    }
   ],
   "level": "Intermediário",
   "result": "Um alarme funcionando, soldado em placa, com o esquema desenhado e as medições anotadas.",
   "skills": [
    "Leitura e desenho de esquema",
    "Transistor como chave",
    "Relé e autorretenção",
    "Solda em placa padrão",
    "Diagnóstico com multímetro"
   ],
   "status": "published",
   "steps": [
    "Desenhe o esquema antes: um resistor de 10 kΩ do +9 V à base passando pelo de 1 kΩ, e o laço de fio ligando a base ao 0 V. Enquanto o laço está inteiro, a base fica em 0 V e o transistor, cortado.",
    "Coloque a bobina do relé entre o +9 V e o coletor, com o diodo em paralelo e o cátodo (faixa) voltado para o +9 V. O emissor vai ao 0 V.",
    "Use o primeiro contato NA do relé em paralelo com o transistor (do coletor ao 0 V). Esse é o contato de autorretenção: depois que o relé fecha, ele mantém a bobina ligada sozinho.",
    "Coloque o botão NF em série com a alimentação da bobina, entre o +9 V e o relé. Apertar o botão corta a bobina e rearma o alarme.",
    "Use o segundo contato NA do relé para ligar o buzzer ao +9 V.",
    "Monte primeiro na protoboard e teste: com o laço ligado, nada toca; ao desligar uma ponta do laço, o relé estala e o buzzer toca; ao religar o laço, o buzzer continua; ao apertar o botão, ele para.",
    "Meça a tensão na base com o laço inteiro e com o laço aberto, e anote. Confira que fica perto de 0 V e perto de 0,7 V.",
    "Transfira para a placa padrão, cortando as trilhas onde o desenho pedir, e solde o transistor por último.",
    "Inspecione todas as emendas, teste a continuidade das trilhas cortadas e só então ligue a fonte.",
    "Passe o laço de fio fino pelo batente de uma porta ou pela tampa de uma caixa e teste o alarme de verdade."
   ],
   "summary": "Um alarme que dispara quando um fio fino é rompido e continua tocando até alguém apertar o botão de rearme.",
   "title": "Alarme de porta com laço de fio e relé",
   "tools": [
    "Placa padrão e ferro de solda",
    "Transistor BC547",
    "Relé com bobina de 9 V e dois contatos reversíveis",
    "Diodo 1N4148 ou 1N4007",
    "Resistores de 10 kΩ e 1 kΩ",
    "Buzzer ativo de 9 V",
    "Botão pulsador normalmente fechado (NF)",
    "Fio fino esmaltado ou de telefone para o laço",
    "Fonte de 9 V (uma bateria de 9 V dura pouco com o relé ligado)",
    "Multímetro",
    "Alternativa sem peças: simulador de circuitos online, como o Tinkercad Circuits"
   ],
   "track": "eletronica",
   "updatedAt": "2026-10-24T16:30:00.000Z"
  },
  "assistente-documentos": {
   "author": "",
   "challenge": "Mostre, junto da resposta, o nome do documento de onde o trecho veio.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "duration": "3 a 4 horas",
   "goal": "Criar um assistente de perguntas e respostas sobre um conjunto de documentos (por exemplo, o regulamento de um curso), que responde só com base neles e diz quando não encontrou.",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "level": "Intermediário",
   "result": "Um chat que responde certo as perguntas cobertas pelos documentos e admite quando não sabe.",
   "skills": [
    "RAG",
    "Prompts",
    "Automação",
    "Segurança de chaves"
   ],
   "status": "published",
   "steps": [
    "Crie uma conta no n8n Cloud ou rode o n8n no seu computador.",
    "Junte de 3 a 5 PDFs curtos sobre um mesmo assunto.",
    "Monte um fluxo de indexação: ler arquivos, dividir em trechos, gerar embeddings e gravar no banco vetorial.",
    "Faça o fluxo de indexação rodar sozinho quando um arquivo novo entrar na pasta.",
    "Monte o fluxo de chat: receber a pergunta, buscar os trechos mais parecidos e enviar ao modelo junto com a pergunta.",
    "Escreva o prompt do sistema exigindo resposta só com base nos trechos e um \"não encontrei\" quando faltar informação.",
    "Teste com 10 perguntas: 7 com resposta nos documentos e 3 sem resposta.",
    "Guarde as chaves da API só nas credenciais do n8n, nunca em texto aberto."
   ],
   "summary": "Monte no n8n um assistente que lê seus PDFs e responde citando de onde tirou a informação.",
   "title": "Assistente que responde com base nos seus documentos",
   "tools": [
    "n8n",
    "API de um modelo de linguagem",
    "Banco vetorial (o armazenamento vetorial do n8n serve para começar)"
   ],
   "track": "agentes",
   "updatedAt": "2026-10-24T00:30:00.000Z"
  },
  "estacao-esp32": {
   "author": "",
   "challenge": "Envie um alerta quando a temperatura passar de um limite.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "duration": "4 a 6 horas",
   "goal": "Construir um dispositivo que mede temperatura e umidade e envia os dados pela internet a cada minuto, se recuperando sozinho de quedas de rede.",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "level": "Intermediário",
   "result": "Um gráfico ao vivo da temperatura, que continua funcionando depois de quedas de rede.",
   "skills": [
    "ESP32",
    "Sensores",
    "Wi-Fi",
    "MQTT",
    "Robustez"
   ],
   "status": "published",
   "steps": [
    "Instale a Arduino IDE e o suporte às placas ESP32.",
    "Ligue o sensor conferindo a tensão: alimentação e sinal em 3,3 V.",
    "Leia o sensor e mostre os valores no monitor serial.",
    "Conecte ao Wi-Fi e mostre o endereço IP no monitor serial.",
    "Conecte ao broker MQTT e publique no tópico casa/sala/temperatura.",
    "No loop(), verifique Wi-Fi e MQTT antes de publicar e reconecte se caírem.",
    "Monte um painel que assina o tópico e mostra o gráfico.",
    "Desligue o roteador por 2 minutos e confirme que a estação volta sozinha."
   ],
   "summary": "Leia a temperatura, envie para a nuvem e veja o gráfico no celular.",
   "title": "Estação de temperatura com ESP32 e MQTT",
   "tools": [
    "ESP32",
    "Sensor de temperatura e umidade de 3,3 V (ex.: DHT22 ou BME280)",
    "Arduino IDE ou PlatformIO",
    "Broker MQTT",
    "Painel (ex.: Node-RED)"
   ],
   "track": "iot",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "painel-gastos": {
   "author": "",
   "challenge": "Destaque automaticamente a categoria que mais cresceu de um mês para o outro.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "duration": "2 a 3 horas",
   "goal": "Ler uma planilha de gastos, organizar por categoria e mês e gerar gráficos claros.",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "level": "Iniciante",
   "result": "Dois gráficos e um pequeno relatório sobre seus gastos.",
   "skills": [
    "pandas",
    "Limpeza de dados",
    "Agrupamento",
    "Visualização"
   ],
   "status": "published",
   "steps": [
    "Exporte seu extrato em CSV (ou use uma planilha de exemplo, sem dados reais de outras pessoas).",
    "Leia o arquivo com pd.read_csv usando sep e decimal corretos.",
    "Confira os tipos com dtypes e converta a coluna de data com pd.to_datetime.",
    "Crie uma coluna de categoria (mercado, transporte, lazer...).",
    "Some os gastos por categoria com groupby.",
    "Some os gastos por mês e compare os meses.",
    "Desenhe um gráfico de barras por categoria e uma linha por mês.",
    "Escreva três conclusões em texto sobre o que os gráficos mostram."
   ],
   "summary": "Transforme o extrato do banco num gráfico que mostra para onde vai o seu dinheiro.",
   "title": "Painel de gastos com Python e pandas",
   "tools": [
    "Python",
    "pandas",
    "matplotlib",
    "VS Code ou Google Colab"
   ],
   "track": "dados",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  },
  "pisca-pisca-protoboard": {
   "author": "",
   "challenge": "Troque o LED por um relé (com o transistor e o diodo de proteção da lição) para acender uma lâmpada de 12 V. Não ligue nada na tomada nesta fase.",
   "createdAt": "2026-10-24T12:00:00.000Z",
   "demo": false,
   "duration": "2 a 3 horas",
   "goal": "Montar e medir seu primeiro circuito eletrônico de verdade, entendendo cada componente, e terminar com um pisca-pisca que liga sozinho quando escurece.",
   "history": [
    {
     "at": "2026-10-24T12:00:00.000Z",
     "status": "published"
    }
   ],
   "level": "Iniciante",
   "result": "Um pisca-pisca que funciona sozinho no escuro, com o esquema desenhado e uma tabela de medições.",
   "skills": [
    "Leitura de esquema",
    "Montagem em protoboard",
    "Medição com multímetro",
    "CI 555",
    "Divisor de tensão com LDR",
    "Transistor como chave"
   ],
   "status": "published",
   "steps": [
    "Antes de montar, use o teste de continuidade do multímetro para descobrir como as tiras da sua protoboard são ligadas, inclusive se as linhas de alimentação são cortadas no meio.",
    "Ligue as linhas + e − da protoboard à bateria de 9 V e meça a tensão nelas.",
    "Encaixe o 555 sobre o canal central. Ligue os pinos 4 e 8 ao +, o pino 1 ao −, e o capacitor de 10 nF do pino 5 ao −.",
    "Coloque R1 (10 kΩ) entre os pinos 8 e 7, R2 (47 kΩ) entre os pinos 7 e 6, una os pinos 6 e 2 e ligue o capacitor de 10 µF do pino 2 ao − (faixa do negativo para o −).",
    "Ligue o LED com o resistor de 330 Ω em série entre o pino 3 e o −. Energize: o LED deve piscar pouco mais de uma vez por segundo.",
    "Calcule os tempos aceso e apagado com as fórmulas da lição e compare cronometrando 10 piscadas.",
    "Troque o capacitor ou o R2 e veja a frequência mudar. Anote os valores numa tabela.",
    "Agora o sensor: monte um divisor com o LDR e o resistor de 10 kΩ e meça a tensão no meio com luz e no escuro.",
    "Use essa tensão, através do resistor de 1 kΩ, na base do BC547, com o coletor no pino 4 do 555 (com um resistor de 10 kΩ do pino 4 ao +) e o emissor no −. Ajuste a posição do LDR e do resistor até o pisca-pisca parar no claro e funcionar no escuro.",
    "Fotografe o circuito, desenhe o esquema e escreva o que cada componente faz."
   ],
   "summary": "Monte um pisca-pisca com o CI 555 e depois faça ele funcionar só no escuro, com um LDR.",
   "title": "Pisca-pisca e sensor de luz na protoboard",
   "tools": [
    "Protoboard e fios de ligação",
    "CI 555",
    "Resistores de 10 kΩ, 47 kΩ, 330 Ω e 1 kΩ",
    "Capacitores de 10 µF e 10 nF",
    "LED de 5 mm",
    "LDR",
    "Transistor BC547",
    "Fonte ou bateria de 9 V com conector",
    "Multímetro",
    "Alternativa sem peças: simulador de circuitos online, como o Tinkercad Circuits"
   ],
   "track": "eletronica",
   "updatedAt": "2026-10-24T12:00:00.000Z"
  },
  "primeiro-site": {
   "author": "",
   "challenge": "Faça a página se adaptar bem à tela do celular.",
   "createdAt": "2026-10-19T01:30:00.000Z",
   "demo": false,
   "duration": "2 a 3 horas",
   "goal": "Publicar na internet uma página de apresentação sua, com um botão que busca dados de uma API pública.",
   "history": [
    {
     "at": "2026-10-19T01:30:00.000Z",
     "status": "published"
    }
   ],
   "level": "Iniciante",
   "result": "Seu site publicado, com endereço próprio para colocar no currículo.",
   "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "fetch e JSON",
    "Git"
   ],
   "status": "published",
   "steps": [
    "Crie uma conta no GitHub.",
    "Crie um repositório chamado seu-usuario.github.io.",
    "Escreva um index.html com seu nome, uma foto e uma lista de interesses.",
    "Crie um style.css com cores e fontes e ligue no HTML.",
    "Adicione um botão que usa fetch para buscar dados de uma API pública e mostra o resultado na página.",
    "Teste com F12: confira o Console e a aba Rede.",
    "Envie os arquivos para o repositório e ative o GitHub Pages nas configurações.",
    "Abra o endereço seu-usuario.github.io no celular e no computador."
   ],
   "summary": "Crie uma página pessoal com HTML, CSS e JavaScript e publique de graça.",
   "title": "Seu primeiro site no ar com GitHub Pages",
   "tools": [
    "HTML",
    "CSS",
    "JavaScript",
    "Git e GitHub",
    "GitHub Pages"
   ],
   "track": "prog",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  }
 },
 "news": {
  "abes-ia-prioridade": {
   "category": "Carreira e mercado",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "further": "Estudo Mercado Brasileiro de Software, da ABES.",
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "impact": "As empresas querem investir em IA e agentes, mas faltam profissionais. Saber montar automações com IA já diferencia um currículo de iniciante.",
   "keywords": [
    "brasil",
    "mercado",
    "agentes",
    "carreira"
   ],
   "practice": "Publique no GitHub 2 ou 3 projetos guiados do Volter e use-os como portfólio.",
   "publishedAt": "2026-06-15",
   "sourceName": "Convergência Digital",
   "sourceUpdatedAt": "",
   "status": "published",
   "summary": "Estudo da ABES mostra que 53% dos executivos colocam IA generativa e agentes como prioridade número um de investimento para 2026. 40% das empresas já investem em agentes e 33% planejam começar em até 12 meses. A falta de profissionais especializados está entre os principais obstáculos.",
   "title": "IA generativa e agentes viram a principal prioridade de investimento das empresas de software no Brasil",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://convergenciadigital.com.br/mercado/inteligencia-artificial-ultrapassa-seguranca-e-nuvem-e-assume-1o-lugar-na-agenda-estrategica-de-empresas-nacionais/"
  },
  "coreia-humanoides-fabricas": {
   "category": "IoT e robótica",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "further": "Normas internacionais de segurança para robôs industriais e colaborativos (família ISO 10218).",
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "impact": "Robôs que trabalham ao lado de pessoas dependem de software de visão, controle e segurança, áreas que vão precisar de muita gente.",
   "keywords": [
    "robôs",
    "humanoides",
    "segurança",
    "coreia"
   ],
   "practice": "Para entrar em robótica, comece por microcontroladores como o ESP32 e por Python.",
   "publishedAt": "2026-10-14",
   "sourceName": "Seoul Economic Daily",
   "sourceUpdatedAt": "",
   "status": "published",
   "summary": "Um comitê do Ministério do Comércio e Indústria concedeu à fabricante Robros uma isenção para demonstração, flexibilizando regras feitas para robôs fixos, que exigem cercas de segurança. Os 20 humanoides vão atuar em quatro empresas dos setores de semicondutores, autopeças, construção naval e logística.",
   "title": "Coreia do Sul libera 20 robôs humanoides para trabalhar ao lado de pessoas em fábricas",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://en.sedaily.com/finance/2026/10/14/korea-clears-safety-rules-to-put-20-humanoid-robots-on"
  },
  "gemini-4-argon-app": {
   "author": "",
   "category": "IA e agentes",
   "createdAt": "2026-10-19T10:06:01.000Z",
   "demo": false,
   "further": "Notas de versão oficiais do app Gemini (gemini.google/release-notes).",
   "history": [
    {
     "at": "2026-10-19T10:06:01.000Z",
     "status": "review"
    }
   ],
   "impact": "Mostra para onde os assistentes estão indo: menos conversa e mais agentes que executam tarefas longas sozinhos. Entender esse modelo de trabalho ajuda a planejar automações e projetos com IA.",
   "keywords": [
    "gemini",
    "google",
    "agentes",
    "assistente de ia"
   ],
   "practice": "Mesmo na versão gratuita do Gemini, peça uma tarefa em etapas (por exemplo, montar um plano de estudos de 4 semanas) e observe como o assistente divide e acompanha o trabalho; compare com outro assistente que você já usa.",
   "publishedAt": "2026-10-13",
   "sourceName": "Google (blog oficial)",
   "sourceUpdatedAt": "",
   "status": "review",
   "summary": "Em 13 de outubro, o Google liberou o modelo Gemini 4 Argon no app Gemini para quem assina os planos Google AI Pro e Ultra. Segundo a empresa, as respostas ficaram mais diretas, o assistente informa melhor o andamento de tarefas longas e ganhou um modo de tarefas que continua trabalhando quando você se afasta do computador. O app também passou a se conectar a mais de 40 serviços e recebeu a interface de programação com agentes Antigravity na versão para macOS.",
   "title": "Gemini 4 Argon chega ao app Gemini para assinantes AI Pro e Ultra",
   "updatedAt": "2026-10-19T10:06:01.000Z",
   "url": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/"
  },
  "modelos-ia-outubro-2026": {
   "category": "IA e agentes",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "further": "O rastreador da Digital Applied é atualizado ao longo do mês com a data de cada lançamento.",
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "impact": "Modelos menores e abertos já rodam no próprio computador, sem pagar API e sem enviar dados para fora.",
   "keywords": [
    "ia",
    "modelos",
    "código aberto",
    "local"
   ],
   "practice": "Experimente rodar um modelo aberto pequeno no seu computador com ferramentas como Ollama ou LM Studio.",
   "publishedAt": "2026-10-01",
   "sourceName": "Digital Applied",
   "sourceUpdatedAt": "2026-10-16",
   "status": "published",
   "summary": "Entre os lançamentos do mês estão os pesos abertos do Muse Spark, da Meta, e o LFM2.5, da Liquid AI, voltado a agentes que rodam no dispositivo. Também apareceram modelos de decisão, da Cloudflare e da Amazon, que devolvem respostas com probabilidade.",
   "title": "Outubro traz modelos de IA abertos e menores, feitos para rodar no próprio equipamento",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://www.digitalapplied.com/blog/ai-model-releases-october-2026-tracker"
  },
  "muse-gadgets-sdk-esp32": {
   "author": "",
   "category": "IoT e robótica",
   "createdAt": "2026-10-19T10:06:01.000Z",
   "demo": false,
   "further": "Site oficial do projeto, gadgets.muse.ai, e o repositório muse-gadget-sdk da organização facebookincubator no GitHub.",
   "history": [
    {
     "at": "2026-10-19T10:06:01.000Z",
     "status": "review"
    }
   ],
   "impact": "Une duas trilhas que costumam ser estudadas separadas, IoT e agentes de IA: uma placa barata passa a funcionar como olhos, ouvidos e mãos de um assistente.",
   "keywords": [
    "esp32",
    "raspberry pi",
    "meta",
    "agentes de ia",
    "open source"
   ],
   "practice": "Abra o repositório do SDK e leia os exemplos para ESP32; mesmo sem a conta Muse, dá para estudar como o código lê sensores e envia dados, e reproduzir a ideia com uma ESP32 e outra IA.",
   "publishedAt": "2026-10-12",
   "sourceName": "CNX Software",
   "sourceUpdatedAt": "",
   "status": "review",
   "summary": "A Meta publicou no GitHub o Muse Gadgets SDK, de código aberto (em sua maior parte sob licença Apache 2.0), para conectar placas ESP32 e computadores Linux como o Raspberry Pi ao agente de IA Muse. O kit para ESP32 cuida de tela, áudio, sensores, atuadores e botões, e o de Linux pode ser usado em tarefas como administração do sistema ou integração com o Home Assistant. Para usar é preciso um token do SDK e o app Muse em modo de desenvolvedor.",
   "title": "Meta libera SDK aberto para ligar ESP32 e Raspberry Pi ao seu agente de IA Muse",
   "updatedAt": "2026-10-19T10:06:01.000Z",
   "url": "https://www.cnx-software.com/2026/10/12/facebook-releases-muse-gadgets-sdk-for-esp32-and-raspberry-pi-linux-based-devices/"
  },
  "n8n-agents": {
   "category": "IA e agentes",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "further": "Changelog oficial do n8n (docs.n8n.io/changelog).",
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "impact": "Dá para criar um agente útil sem escrever código, ligando planilhas, e-mail e mensagens. Ótima porta de entrada para automação com IA.",
   "keywords": [
    "n8n",
    "agentes",
    "automação",
    "ia"
   ],
   "practice": "Faça o projeto guiado \"Assistente que responde com base nos seus documentos\" no Volter.",
   "publishedAt": "2026-08-05",
   "sourceName": "Comunidade n8n",
   "sourceUpdatedAt": "",
   "status": "published",
   "summary": "Novo recurso em prévia: o agente é definido uma vez, com instruções, ferramentas e modelo, guarda memória própria e pode ser usado no chat, como etapa de um fluxo, no Slack ou por agendamento. Está em prévia no n8n Cloud a partir da versão 2.32.3 e em beta na versão auto-hospedada.",
   "title": "n8n lança Agents: agentes de IA reutilizáveis em fluxos, chat e Slack",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://community.n8n.io/t/introducing-n8n-agents-a-new-way-to-build-agents-you-set-up-once-and-use-anywhere/306323"
  },
  "nvidia-nemotron-3-5": {
   "author": "",
   "category": "Ferramentas e lançamentos",
   "createdAt": "2026-10-19T10:06:01.000Z",
   "demo": false,
   "further": "Página da NVIDIA no Hugging Face, onde ficam os modelos Nemotron e suas fichas técnicas.",
   "history": [
    {
     "at": "2026-10-19T10:06:01.000Z",
     "status": "review"
    }
   ],
   "impact": "Modelos com pesos abertos e versões menores permitem testar IA sem pagar por API e sem enviar dados para fora da máquina, algo útil para estudar e prototipar agentes.",
   "keywords": [
    "nvidia",
    "nemotron",
    "modelos abertos",
    "ia local",
    "hugging face"
   ],
   "practice": "Instale o Ollama ou o LM Studio e experimente um modelo aberto pequeno no seu computador; quando o Bolt E4B sair, compare as respostas com as de um assistente online.",
   "publishedAt": "2026-10-15",
   "sourceName": "Interesting Engineering",
   "sourceUpdatedAt": "",
   "status": "review",
   "summary": "Em 15 de outubro, a NVIDIA apresentou novos modelos abertos da família Nemotron 3.5. O Super VL tem 120 bilhões de parâmetros (12 bilhões ativos) e entende texto, documentos, imagens e vídeo. O Bolt 74B-A9B foi comprimido para caber em 24 GB de memória e já está no Hugging Face, e o Bolt E4B, de 4 GB e pensado para agentes de conversa, tem chegada prevista para 23 de outubro.",
   "title": "NVIDIA lança modelos abertos Nemotron 3.5, incluindo versões que rodam no próprio computador",
   "updatedAt": "2026-10-19T10:06:01.000Z",
   "url": "https://interestingengineering.com/ai-robotics/nvidia-nemotron-35-super-vl-5x-faster"
  },
  "python-3-15": {
   "category": "Programação e web",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "further": "Resumo mensal de outubro de 2026 da Real Python, com o ciclo de lançamento e outras novidades do ecossistema (realpython.com).",
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "impact": "Para quem está começando, vale aprender direto na versão nova: as mensagens de erro estão mais claras e o UTF-8 padrão evita problemas com acentos.",
   "keywords": [
    "python",
    "jit",
    "lançamento",
    "programação"
   ],
   "practice": "Instale o Python 3.15 pelo site python.org e rode os exemplos da trilha de Programação do Volter.",
   "publishedAt": "2026-10-09",
   "sourceName": "Phoronix",
   "sourceUpdatedAt": "",
   "status": "published",
   "summary": "A versão anual do Python saiu em 9 de outubro. O compilador JIT, ainda experimental, ficou cerca de 7 a 8% mais rápido no Linux x86-64. A versão traz importações preguiçosas (lazy imports), o tipo frozendict embutido e UTF-8 como codificação padrão.",
   "title": "Python 3.15 é lançado com compilador JIT mais rápido e UTF-8 como padrão",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://phoronix.com/news/Python-3.15-Released"
  },
  "samsung-ocean-outubro-2026": {
   "author": "",
   "category": "Carreira e mercado",
   "createdAt": "2026-10-19T10:06:01.000Z",
   "demo": false,
   "further": "Agenda completa no portal oficial do Samsung Ocean (oceanbrasil.com).",
   "history": [
    {
     "at": "2026-10-19T10:06:01.000Z",
     "status": "review"
    }
   ],
   "impact": "São aulas curtas, gratuitas e com certificado, nos mesmos temas das trilhas do Volter, o que ajuda a praticar com instrutores e a montar currículo.",
   "keywords": [
    "cursos gratuitos",
    "samsung ocean",
    "python",
    "iot",
    "certificado"
   ],
   "practice": "Acesse oceanbrasil.com ou o app do Samsung Ocean, escolha uma aula online desta semana (como o chatbot em Python) e inscreva-se enquanto houver vagas.",
   "publishedAt": "2026-10-14",
   "sourceName": "Samsung Newsroom Brasil",
   "sourceUpdatedAt": "",
   "status": "review",
   "summary": "O Samsung Ocean divulgou em 14 de outubro a agenda gratuita da segunda metade do mês, com aulas online e presenciais em Brasília e Manaus. Entre os destaques estão um chatbot em Python (20 e 21/10), introdução à IoT (16/10), consultas SQL com Python (29 e 30/10 em Manaus) e IA para saúde digital (30/10). É preciso ter 18 anos ou mais, e quem conclui recebe certificado.",
   "title": "Samsung Ocean abre cursos gratuitos de IA, Python, IoT e Android na segunda quinzena de outubro",
   "updatedAt": "2026-10-19T10:06:01.000Z",
   "url": "https://news.samsung.com/br/samsung-ocean-oferece-cursos-gratuitos-de-tecnologia-na-segunda-quinzena-de-outubro"
  },
  "siemens-eigen-tia-portal": {
   "category": "IA e agentes",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "further": "Página do Eigen Engineering Agent no portfólio Siemens Xcelerator.",
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "impact": "Agentes que montam projetos inteiros a partir de uma descrição mostram para onde a programação está indo: descrever bem o que se quer e revisar o resultado com cuidado.",
   "keywords": [
    "siemens",
    "tia portal",
    "clp",
    "agente",
    "ia"
   ],
   "practice": "Treine escrever especificações claras e completas. Elas viram o prompt dos agentes de código.",
   "publishedAt": "2026-06-17",
   "sourceName": "Siemens (comunicado à imprensa)",
   "sourceUpdatedAt": "",
   "status": "published",
   "summary": "O Eigen Engineering Agent, lançado na Hannover Messe 2026, ganhou duas funções: ler projetos elétricos em XML/AML e gerar tags de CLP a partir da topologia de hardware, e criar um projeto completo no padrão Siemens Automation Framework a partir de uma descrição em linguagem natural. A Siemens diz que mais de 100 empresas em 19 países usam o agente.",
   "title": "Siemens amplia agente de IA que monta projetos no TIA Portal a partir de texto",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://press.siemens.com/global/en/pressrelease/siemens-takes-ai-physical-world-next-level-two-new-eigen-engineering-agent"
  },
  "tiobe-outubro-2026": {
   "category": "Programação e web",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "further": "O índice completo é publicado mensalmente no site da TIOBE (tiobe.com).",
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "impact": "Python segue no topo, o que o torna a escolha mais segura para a primeira linguagem. C e Rust continuam fortes em dispositivos e sistemas.",
   "keywords": [
    "tiobe",
    "linguagens",
    "python",
    "c",
    "rust"
   ],
   "practice": "Comece por Python. Depois, escolha JavaScript se quiser web ou C se quiser IoT e eletrônica.",
   "publishedAt": "2026-10-12",
   "sourceName": "TechRepublic",
   "sourceUpdatedAt": "",
   "status": "published",
   "summary": "Python aparece com 19,23%, seguido de C (11,33%), C++ (8,87%) e Java (8,41%). Rust está em 10º lugar pelo quarto mês seguido. O TIOBE passou a contar buscas em mandarim, o que pode explicar parte das variações.",
   "title": "Índice TIOBE de outubro: Python lidera, C cresce e Rust segue no top 10",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://www.techrepublic.com/article/news-tiobe-october-2026-java-closes-cpp-gap/"
  }
 },
 "books": {
  "agentes-de-ia-albada": {
   "area": "IA e agentes",
   "authors": "Michael Albada",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "isbn": "978-85-7522-990-3",
   "language": "Português",
   "level": "Intermediário",
   "pages": 360,
   "publisher": "Novatec",
   "status": "published",
   "subtitle": "Projeto e implementação de sistemas multiagentes",
   "summary": "Guia prático sobre como projetar agentes de IA: ferramentas, memória, RAG, orquestração, passagem de um agente para vários, avaliação, monitoramento em produção, segurança e colaboração entre pessoas e agentes.",
   "title": "Construindo Aplicações com Agentes de IA",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://novatec.com.br/livros/construindo-aplicacoes-com-agentes-IA/",
   "urlLabel": "Ver na Novatec",
   "why": "Aprofunda a parte de agentes: ferramentas, memória, avaliação e como manter uma pessoa no controle das ações importantes.",
   "year": 2026
  },
  "engenharia-de-ia": {
   "area": "IA e agentes",
   "authors": "Chip Huyen",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "isbn": "978-85-7522-996-5",
   "language": "Português",
   "level": "Intermediário",
   "pages": 488,
   "publisher": "Novatec",
   "status": "published",
   "subtitle": "Construindo aplicações com modelos de fundação",
   "summary": "Explica como criar aplicações em cima de modelos de IA já prontos: engenharia de prompt, RAG, ajuste fino, agentes, avaliação dos resultados e custo e tempo de resposta. Edição brasileira do livro mais citado sobre o tema.",
   "title": "Engenharia de IA",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://novatec.com.br/livros/engenharia-de-ia/",
   "urlLabel": "Ver na Novatec",
   "why": "O guia mais completo para quem quer construir aplicações com IA, e não só usar o chat. Boa leitura depois da trilha de IA.",
   "year": 2026
  },
  "hands-on-llms": {
   "area": "IA e agentes",
   "authors": "Jay Alammar e Maarten Grootendorst",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "isbn": "",
   "language": "Inglês",
   "level": "Iniciante",
   "pages": "",
   "publisher": "O'Reilly",
   "status": "published",
   "subtitle": "Language understanding and generation",
   "summary": "Introdução muito visual ao funcionamento dos modelos de linguagem: embeddings, busca semântica, classificação e geração de texto, com muitos diagramas.",
   "title": "Hands-On Large Language Models",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://www.kdnuggets.com/5-best-books-for-building-agentic-ai-systems-in-2026",
   "urlLabel": "Ver indicação (KDnuggets)",
   "why": "Cheio de diagramas, é uma ótima segunda leitura depois da lição sobre modelos de linguagem.",
   "year": 2024
  },
  "llm-engineers-handbook": {
   "area": "IA e agentes",
   "authors": "Paul Iusztin e Maxime Labonne",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "isbn": "",
   "language": "Inglês",
   "level": "Avançado",
   "pages": "",
   "publisher": "Packt",
   "status": "published",
   "subtitle": "",
   "summary": "Cobre o caminho completo para colocar uma aplicação de IA em produção: ajuste fino, RAG, pipelines, monitoramento e confiabilidade.",
   "title": "LLM Engineer's Handbook",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://www.kdnuggets.com/5-best-books-for-building-agentic-ai-systems-in-2026",
   "urlLabel": "Ver indicação (KDnuggets)",
   "why": "Para quando um projeto de IA precisa funcionar todos os dias, com testes, monitoramento e confiabilidade.",
   "year": 2024
  },
  "llm-from-scratch-raschka": {
   "area": "IA e agentes",
   "authors": "Sebastian Raschka",
   "createdAt": "2026-10-19T00:30:00.000Z",
   "demo": false,
   "history": [
    {
     "at": "2026-10-19T00:30:00.000Z",
     "status": "published"
    }
   ],
   "isbn": "",
   "language": "Inglês",
   "level": "Avançado",
   "pages": 368,
   "publisher": "Manning",
   "status": "published",
   "subtitle": "",
   "summary": "Constrói passo a passo um modelo de linguagem no estilo GPT em Python: atenção, arquitetura transformer, pré-treino e ajuste fino para classificação e para seguir instruções.",
   "title": "Build a Large Language Model (From Scratch)",
   "updatedAt": "2026-10-19T01:30:00.000Z",
   "url": "https://oreilly.com/library/view/build-a-large/9781633437166",
   "urlLabel": "Ver na O'Reilly",
   "why": "Para entender o que acontece dentro de um modelo de linguagem, escrevendo cada parte em Python. Exige Python intermediário.",
   "year": 2024
  }
 }
};
