# Volter

**Aprenda tecnologia consertando o que quebrou.**

O Volter é uma plataforma para quem está começando em tecnologia. Você aprende os conceitos em trilhas curtas e pratica no **Laboratório**, investigando problemas que acontecem de verdade: um chatbot que inventa respostas, uma página que mostra `undefined`, um painel com números errados, um sensor que para de enviar dados.

## Trilhas

| Trilha | O que você aprende |
|---|---|
| **IA, agentes e automação** | Como funcionam os modelos de linguagem, prompts que funcionam, agentes, RAG e automações com n8n |
| **Programação: Python e web** | Lógica, Python, leitura de erros, HTML, CSS, JavaScript e APIs |
| **Dados e análise** | Tabelas, SQL, JOIN sem armadilhas, pandas e gráficos |
| **IoT e robótica** | ESP32, sensores, Wi-Fi, MQTT e dispositivos que se recuperam sozinhos |

## O que tem no app

| Área | O que faz |
|---|---|
| **Trilhas** | Lições curtas com blocos de código e exercícios |
| **Laboratório** | Desafios de investigação em 7 etapas: entender, hipóteses, investigar, evidências, causa, corrigir e aprender, com correção comentada |
| **Projetos** | Projetos guiados com passo a passo, para montar um portfólio (assistente com RAG, site no GitHub Pages, painel de gastos com pandas, estação IoT com ESP32) |
| **Treino** | Perguntas sorteadas de todas as trilhas e o desafio do dia |
| **Notícias** | IA, programação, dados e IoT, com prévia, link da fonte e o que muda para quem está aprendendo |
| **Livros** | Lançamentos e referências, com o motivo de cada leitura |
| **Meu progresso** | Nível, XP, progresso por trilha, como você investiga e conquistas |
| **Editor de conteúdo** | Formulários para criar, revisar e publicar desafios, lições, projetos, notícias e livros |

Os desafios do Laboratório são exemplos didáticos, marcados como tal. As notícias e os livros são reais, com link para a fonte.

## Instalar no computador (Windows e Mac)

Os instaladores ficam na página **Releases** deste repositório e são gerados automaticamente pelo GitHub Actions.

- **Windows:** baixe `Instalar-Volter-Windows.exe`, dê dois cliques e siga o instalador. Se aparecer o aviso azul "O Windows protegeu o computador", clique em **Mais informações → Executar assim mesmo**.
- **Mac com chip Apple (M1 a M4):** baixe `Volter-Mac-chip-Apple-M1-a-M4.zip`, abra e arraste o **Volter** para **Aplicativos**. Na primeira vez, botão direito → **Abrir** → **Abrir**.
- **Mac Intel:** mesmo procedimento com `Volter-Mac-Intel.zip`.

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

## Notícias toda semana

Uma tarefa agendada roda toda segunda-feira de manhã. Ela pesquisa as novidades da semana em IA, programação, dados e IoT e cadastra de 3 a 6 notícias no Volter do claude.ai com status **Em revisão**. Nada aparece para os alunos sem aprovação. Depois, copia todo o conteúdo do claude.ai para `data/conteudo.js` com `ferramentas/sincronizar-conteudo.js` e envia para este repositório, o que gera instaladores atualizados.

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
docs/                               especificações do projeto
```

---

Desenvolvido por **Carlos Almir** ([@almircs](https://github.com/almircs)).
