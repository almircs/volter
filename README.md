# Volter

**Arquivo de conhecimento técnico.**

O Volter reúne, organizado por assunto, o conhecimento de mais de 30 anos em eletrônica, elétrica industrial, automação de linhas de produção e equipamentos odontológicos, junto com informática, programação e IA. Cada assunto tem temas; cada tema tem artigos e **fichas de equipamento**.

## Assuntos

| Assunto | Temas |
|---|---|
| **Eletrônica** | Fundamentos de eletricidade · Eletrônica analógica e digital · Microcontroladores e IoT |
| **Elétrica industrial e comandos** | Motores e comandos elétricos · CLP, inversores e redes industriais · Instalações elétricas residenciais |
| **Linha de produção** | Água, xarope e carbonatação · Sopro, envase e rotulagem · Paletização · Robôs KUKA e programação KRL · Utilidades industriais |
| **Equipamentos odontológicos** | Consultório odontológico · Esterilização e biossegurança · Ar comprimido e sucção |
| **Informática** | Hardware de computadores · Windows · Linux · Apple: Mac e macOS · Primeiros passos no digital · Ferramentas do trabalho moderno |
| **Programação** | Programação com IA · Dados e Decisão · Recomeço em tecnologia |
| **Inteligência artificial** | IA no Trabalho · IA no dia a dia · Agentes e Automação · Projetos com IA · Segurança e Uso Responsável |

Os assuntos ficam em `AREAS` e os temas em `TRACKS`, no `fonte/src/volter.html` (o campo `area` diz a qual assunto o tema pertence; `plan` lista os temas ainda a escrever).

## Fichas de equipamento

As fichas seguem sempre as mesmas seções: **para que serve**, **como funciona**, **partes principais**, **dados técnicos típicos** e **segurança e normas**. No editor de conteúdo, o campo **Tipo** marca um artigo como ficha.

## O que tem no app

| Área | O que faz |
|---|---|
| **Início** | Um cartão por assunto, com os temas e a quantidade de artigos |
| **Assuntos** | Página de cada assunto com os temas e a lista de artigos e fichas |
| **Simuladores** | Todos os simuladores interativos num só lugar, separados por família |
| **Projeto da linha de envase** | Mapa da planta, blocos de cada máquina com o seu escopo, interligações e exportação |
| **Buscar e Salvos** | Busca em todo o arquivo e itens salvos |
| **Editor de conteúdo** | Formulários para criar, revisar e publicar artigos e fichas; cada artigo pode ganhar um simulador |

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
data/conteudo.js                    artigos, fichas e demais conteúdos
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
