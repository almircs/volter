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
   "track": "ia",
   "updatedAt": "2026-10-19T01:30:00.000Z"
  }
 },
 "lessons": {
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
   "order": 3,
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
   "track": "ia",
   "updatedAt": "2026-10-19T01:30:00.000Z"
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
   "track": "ia",
   "updatedAt": "2026-10-19T01:30:00.000Z"
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
