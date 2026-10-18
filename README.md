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
| **Notícias Técnicas** | Cadastro manual com fonte, data e análise para o técnico. |
| **Meu Progresso** | Nível, XP, competências, distintivos, histórico e recomendações. |
| **Editor de conteúdo** | Formulários para criar, revisar, publicar e arquivar casos, histórias, notícias e lições, com pré-visualização. Uma história pode virar rascunho de caso. |

O conteúdo incluído é **demonstrativo**: 4 casos didáticos, 5 lições, 1 história de exemplo e 2 notícias-modelo, todos identificados como tal.

## Como rodar

Não há instalação nem dependências. Basta abrir o `index.html` no navegador.

Se preferir um servidor local:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
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

## Duas versões do Volter

| | Versão do GitHub (este repositório) | Versão no claude.ai |
|---|---|---|
| Conteúdo | Arquivo `data/conteudo.js` | Banco de dados compartilhado |
| Edição | Local, publicada por commit | Direta, para administradores |
| Progresso do aluno | No navegador | Na conta do aluno |
| Volter Assist (IA) | Precisa de servidor próprio (fase 2) | Funciona |
| Upload de imagens | Fase 2 | Funciona |

O código é o mesmo: o app detecta onde está rodando e escolhe o modo.

## Estrutura

```
index.html          aplicação completa (HTML, CSS e JavaScript)
data/conteudo.js    conteúdo: casos, lições, histórias e notícias
docs/               especificações do projeto
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
