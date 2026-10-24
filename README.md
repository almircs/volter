# Volter

**IA prática para quem trabalha.**

O Volter é uma plataforma para quem quer usar IA e tecnologia no trabalho. Cada curso termina com algo pronto para usar, e no **Laboratório** você pratica investigando problemas que acontecem de verdade: um chatbot que inventa respostas, uma página que mostra `undefined`, um painel com números errados.

## Trilhas

| Trilha | O que você aprende |
|---|---|
| **IA no Trabalho** | ChatGPT, Claude e Gemini no dia a dia: prompts, documentos, planilhas e pesquisa com fontes conferidas |
| **Agentes e Automação** | n8n, WhatsApp, APIs de IA e agentes que executam tarefas |
| **Programação com IA** | Lógica, Python e web com a IA como tutora, até um app instalável |
| **Dados e Decisão** | Planilhas, SQL e dashboards para decidir com números |
| **IA por Profissão** | IA aplicada a pequenos negócios, RH, educação, saúde e profissões técnicas |
| **Segurança e Uso Responsável** | Golpes, deepfakes, LGPD e regras para usar IA com dados da empresa |

Duas abas têm trilhas próprias, feitas em sequência (etapa 1, 2, 3…) e com temas numerados dentro de cada etapa:

| Aba | Etapas |
|---|---|
| **Nova Fase (antes Comece aos 40+)** | 1. Primeiros passos no digital · 2. IA no dia a dia, sem jargão · 3. Ferramentas do trabalho moderno · 4. Recomeço em tecnologia |
| **Elétrica, Eletrônica e Hardware** | 1. Fundamentos de eletricidade · 2. Instalações elétricas residenciais · 3. Eletrônica básica · 4. Hardware de computadores · 5. Microcontroladores e IoT · 6. Comandos elétricos e automação |

Os cursos que ainda não têm lições aparecem no app como **Em breve**. A lista completa está em [`docs/grade-de-temas.md`](docs/grade-de-temas.md) e, no app, no campo `plan` de cada trilha (`TRACKS` no `index.html`); o campo `area` diz em qual aba a trilha fica.

### Planejamento de cursos

A grade de temas em [`docs/grade-de-temas.md`](docs/grade-de-temas.md) define o rumo do Volter: público inicial (profissionais que querem usar IA no trabalho), venda de cursos avulsos e pacotes para empresas (sem assinatura), seis trilhas com 26 cursos e a ordem de lançamento. Ela também mostra como as trilhas atuais se encaixam na nova grade.

## O que tem no app

| Área | O que faz |
|---|---|
| **Início** | Banner com o desafio do dia e fileiras de capas, no estilo das plataformas de streaming; cada capa abre uma janela com detalhes e, nas trilhas, a lista de lições como episódios |
| **Trilhas** | Lições curtas com blocos de código e exercícios |
| **Nova Fase** | Trilhas em etapas para quem começa ou recomeça em tecnologia numa nova fase da vida |
| **Elétrica e Hardware** | Trilhas em etapas de eletricidade, instalações, eletrônica, hardware, IoT e automação, com 27 lições de elétrica e eletrônica e simuladores interativos (lei de Ohm, divisor de tensão, capacitor, 555, portas lógicas, retificador, transistor com sensor, amplificador, sistema trifásico, partida de motor e paquímetro) |
| **Laboratório** | Desafios de investigação em 7 etapas: entender, hipóteses, investigar, evidências, causa, corrigir e aprender, com correção comentada |
| **Projetos** | Projetos guiados com passo a passo, para montar um portfólio (assistente com RAG, site no GitHub Pages, painel de gastos com pandas, estação IoT com ESP32, pisca-pisca com 555 na protoboard, alarme de porta com relé) |
| **Treino** | Perguntas sorteadas de todas as trilhas e o desafio do dia |
| **Livros** | Lançamentos e referências, com o motivo de cada leitura |
| **Meu progresso** | Nível, XP, progresso por trilha, como você investiga e conquistas |
| **Editor de conteúdo** | Formulários para criar, revisar e publicar desafios, lições, projetos e livros; cada lição pode ganhar um dos simuladores |

Os desafios do Laboratório são exemplos didáticos, marcados como tal. Os livros são reais, com link para a fonte.

## Instalar no computador (Windows e Mac)

Os instaladores ficam na página **Releases** deste repositório e são gerados automaticamente pelo GitHub Actions.

- **Windows:** baixe `Instalar-Volter-Windows.exe`, dê dois cliques e siga o instalador. Se aparecer o aviso azul "O Windows protegeu o computador", clique em **Mais informações → Executar assim mesmo**.
- **Mac com chip Apple (M1 a M4):** baixe `Volter-Mac-chip-Apple-M1-a-M4.zip`, abra e arraste o **Volter** para **Aplicativos**.
- **Mac Intel:** mesmo procedimento com `Volter-Mac-Intel.zip`.
- **Primeira abertura no Mac:** no macOS 15 Sequoia ou mais novo, tente abrir uma vez e depois vá em **Ajustes do Sistema → Privacidade e Segurança → Abrir Mesmo Assim**. No macOS 14 Sonoma ou mais antigo, botão direito → **Abrir** → **Abrir**. Se o Mac disser que o app está danificado, rode no Terminal `xattr -dr com.apple.quarantine /Applications/Volter.app`.

No programa instalado, o progresso fica num arquivo com cópia automática diária (últimos 30 dias). O menu **Arquivo** abre a pasta dos dados; **Ferramentas → Ativar o editor de conteúdo** libera a edição.

### Gerar uma nova versão

1. Altere `"version"` no `package.json`.
2. Escreva as novidades em `.github/notas-da-versao.md`.
3. Envie para a branch `main`. O fluxo **Gerar instaladores** cria a release sozinho.

## Rodar no navegador

Abra o `index.html` ou use um servidor local:

```bash
python3 -m http.server 8000
```

Para abrir como programa e gerar instaladores na sua máquina:

```bash
npm install
npm start
npm run dist:win   # no Windows
npm run dist:mac   # no Mac
```

Para publicar como site, ative **Settings → Pages** com a branch `main`. Em repositório privado, o GitHub Pages exige plano pago.

## Editar o conteúdo

O conteúdo fica em `data/conteudo.js`. Para editar pelo app, abra com `#admin` no fim do endereço (no programa instalado, use **Ferramentas → Ativar o editor de conteúdo**). As mudanças ficam no seu computador; clique em **Gerar conteudo.js** e substitua o arquivo do repositório para publicar.

## Notícias (suspensas)

A seção Notícias está suspensa desde a versão 2.2.0: ela não aparece no app e a tarefa semanal que pesquisava e cadastrava notícias está pausada. As notícias já cadastradas continuam no banco, sem aparecer para os alunos. Para reativar, troque `NEWS_ON` para `true` no `index.html` e retome a tarefa agendada.

Para levar ao repositório o que for editado no Volter do claude.ai, exporte as coleções e rode `node ferramentas/sincronizar-conteudo.js <pasta-exportada>`.

## Três jeitos de usar

| | Programa instalado | Navegador | claude.ai |
|---|---|---|---|
| Conteúdo | `data/conteudo.js` | `data/conteudo.js` | Banco de dados compartilhado |
| Progresso | Arquivo no computador, com cópias diárias | No navegador | Na conta do aluno |
| Volter Assist (IA) | Próxima versão | Próxima versão | Funciona |

## Estrutura

```
index.html                          aplicação completa (HTML, CSS e JavaScript)
data/conteudo.js                    desafios, lições, projetos, notícias e livros
main.js, preload.js                 programa desktop (Electron)
package.json                        versão e configuração dos instaladores
build/                              ícones (volter.ico, volter.icns, icon.png)
ferramentas/sincronizar-conteudo.js copia o conteúdo do claude.ai para data/conteudo.js
.github/workflows/instaladores.yml  gera os instaladores e publica em Releases
.github/notas-da-versao.md          texto da página de cada versão
docs/                               especificações do projeto e grade de temas
```

---

Desenvolvido por **Carlos Almir** ([@almircs](https://github.com/almircs)).
