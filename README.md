# Volter

**Experiência real. Conhecimento aplicado.**

O Volter é uma plataforma de treinamento técnico focada em **diagnóstico de falhas**. Em vez de só apresentar conteúdo, ele coloca o aluno diante de um defeito real e o faz percorrer o caminho de um técnico experiente: observar, levantar hipóteses, escolher testes, interpretar leituras, identificar a causa e decidir a correção com segurança.

## O que já funciona

| Área | O que faz |
|---|---|
| **Bancada Virtual** | Casos de diagnóstico em 7 etapas: investigar, hipóteses, testes, resultados, causa, resolver, aprender. Testes têm resultados definidos; procedimentos inseguros são bloqueados e descontam pontos. |
| **Correção comentada** | Nota de 0 a 100 dividida em raciocínio, investigação, diagnóstico, solução e segurança, com a lógica do diagnóstico e os erros comuns. |
| **Aprender** | Trilha "Diagnóstico elétrico básico" com 5 lições e exercícios. |
| **Desafios** | Ordem de serviço do dia e treino rápido com questões sorteadas das lições. |
| **Histórias de Campo** | Relatos de manutenção do sintoma à causa raiz, com selo para relatos reais. |
| **Notícias Técnicas** | Notícias de IA, programação, automação e manutenção, com prévia da fonte, data, link e análise para o técnico. |
| **Livros** | Lançamentos e referências atuais, com editora, ano, link e o motivo de cada leitura. |
| **Meu Progresso** | Nível, XP, competências, distintivos, histórico e recomendações. |
| **Editor de conteúdo** | Formulários para criar, revisar, publicar e arquivar casos, histórias, notícias e lições, com pré-visualização. Uma história pode virar rascunho de caso. |

Os casos, as lições e a história incluídos são **demonstrativos** e estão identificados como tal. As notícias e os livros são reais, com link para a fonte.

## Instalar no computador (Windows e Mac)

Os instaladores ficam na página **Releases** do repositório, gerados automaticamente pelo GitHub Actions, do mesmo jeito que no Finora e no Helyx.

- **Windows:** baixe `Instalar-Volter-Windows.exe`, dê dois cliques e siga o instalador. Se aparecer o aviso azul "O Windows protegeu o computador", clique em **Mais informações → Executar assim mesmo**.
- **Mac com chip Apple (M1 a M4):** baixe `Volter-Mac-chip-Apple-M1-a-M4.zip`, abra e arraste o **Volter** para **Aplicativos**. Na primeira vez, botão direito → **Abrir** → **Abrir**.
- **Mac Intel:** mesmo procedimento com `Volter-Mac-Intel.zip`.

No programa instalado, o progresso fica num arquivo com cópia automática diária (últimos 30 dias). O menu **Arquivo** abre a pasta dos dados e a das cópias; o menu **Ferramentas → Ativar o editor de conteúdo** libera a edição.

- Windows: `%APPDATA%\Volter\volter.json`
- Mac: `~/Library/Application Support/Volter/volter.json`

### Gerar uma nova versão dos instaladores

1. Altere o número em `"version"` no `package.json` (ex.: `1.0.0` → `1.1.0`).
2. Acrescente as novidades em `.github/notas-da-versao.md`.
3. Envie para a branch `main`. O fluxo **Gerar instaladores** roda sozinho e cria a release `v1.1.0`. Também dá para rodá-lo pela aba **Actions → Gerar instaladores → Run workflow**.

Se o número da versão não mudar, os arquivos da release existente são substituídos.

## Rodar no navegador ou em modo de desenvolvimento

Abra o `index.html` no navegador, ou use um servidor local:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

Para abrir como programa (Electron) e gerar instaladores na sua máquina:

```bash
npm install
npm start          # abre o programa
npm run dist:win   # instalador Windows (rodar no Windows)
npm run dist:mac   # app para Mac (rodar no Mac)
```

## Publicar no GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Salve. O site fica em `https://almircs.github.io/volter/`.

> Em repositório **privado**, o GitHub Pages exige um plano pago (GitHub Pro ou superior). No plano gratuito, torne o repositório público antes de ativar o Pages.

## Editar o conteúdo

Nesta versão o conteúdo fica no arquivo `data/conteudo.js`. Para editar pelo próprio app:

1. Abra o site com `#admin` no fim do endereço (ex.: `https://almircs.github.io/volter/#admin`). O menu **Editor de conteúdo** aparece e fica liberado naquele navegador.
2. Crie ou altere casos, histórias, notícias e lições. As mudanças ficam salvas **somente no seu navegador**.
3. Clique em **Gerar conteudo.js** e substitua o arquivo `data/conteudo.js` do repositório pelo arquivo baixado.
4. Faça o commit. Todos os visitantes passam a ver o conteúdo novo.

O progresso dos alunos (notas, lições concluídas, favoritos) fica no navegador de cada um (`localStorage`).

## Notícias toda semana e sincronização com o claude.ai

Uma tarefa agendada roda toda segunda-feira de manhã. Ela pesquisa as novidades da semana em IA, programação, automação, robótica e manutenção e cadastra de 3 a 6 notícias no Volter do claude.ai com status **Em revisão**. Nenhuma notícia aparece para os alunos sem a sua aprovação: confira em **Administração → Notícias → Em revisão** e clique em **Publicar**.

Depois, a tarefa copia todo o conteúdo do claude.ai (casos, lições, histórias, notícias e livros) para `data/conteudo.js` e envia para este repositório. Com isso, o site e os instaladores recebem o que você publicou. Itens em rascunho ou revisão vão junto, mas o app só mostra aos alunos os publicados.

O sincronizador também pode ser rodado à mão:

```bash
node ferramentas/sincronizar-conteudo.js <pasta-exportada>
```

## Três jeitos de usar o Volter

| | Programa instalado | Navegador (GitHub Pages) | claude.ai |
|---|---|---|---|
| Conteúdo | `data/conteudo.js` | `data/conteudo.js` | Banco de dados compartilhado |
| Edição | Local, exportada para o repositório | Local, exportada para o repositório | Direta, para administradores |
| Progresso do aluno | Arquivo no computador, com cópias diárias | No navegador | Na conta do aluno |
| Volter Assist (IA) | Fase 2 (servidor próprio) | Fase 2 (servidor próprio) | Funciona |
| Upload de imagens | Fase 2 | Fase 2 | Funciona |

O código é o mesmo: o app detecta onde está rodando e escolhe o modo.

## Estrutura

```
index.html                          aplicação completa (HTML, CSS e JavaScript)
data/conteudo.js                    conteúdo: casos, lições, histórias e notícias
ferramentas/sincronizar-conteudo.js copia o conteúdo do claude.ai para data/conteudo.js
main.js, preload.js                 programa desktop (Electron): janela, dados em arquivo, cópias diárias
package.json                        versão e configuração dos instaladores (electron-builder)
build/                              ícones (volter.ico, volter.icns, icon.png)
.github/workflows/instaladores.yml  gera os instaladores e publica em Releases
.github/notas-da-versao.md          texto da página de cada versão
docs/                               especificações do projeto
```

### Formato de um caso

Cada caso em `data/conteudo.js` tem: `title`, `equipment`, `area`, `level` (1 a 5), `context`, `symptoms[]`, `history`, `conditions`, `techInfo[]`, `objective`, `hypotheses[]` (`text`, `correct`), `tests[]` (`name`, `how`, `result`, `reading`, `value`: `util` | `neutro` | `irrelevante` | `inseguro`, `insight`), `causes[]`, `actions[]` (`correct`, `unsafe`, `feedback`), `hints[]` e `solution` (`explanation`, `logic[]`, `mistakes[]`, `lessons[]`), além de `status` (`draft`, `review`, `published`, `archived`).

## Próximas etapas

- **Fase 2:** servidor próprio (banco de dados e IA sem expor chaves), Biblioteca Técnica, novos tipos de desafio, estatísticas para o administrador e a área **Programação & IA** (ver `docs/modulo-programacao-ia.md`).
- **Fase 3:** modo empresa com turmas, simulador de instrumentos, importação de notícias por RSS/API, aplicativo instalável e certificados.

A especificação completa está em `docs/especificacao-volter.md`.

## Aviso de segurança

O Volter é uma ferramenta educacional. Os casos simulam investigações e não substituem procedimentos oficiais, a NR-10, análise de risco nem a habilitação e autorização exigidas para intervir em instalações elétricas.

---

Desenvolvido por **Carlos Almir** ([@almircs](https://github.com/almircs)).
