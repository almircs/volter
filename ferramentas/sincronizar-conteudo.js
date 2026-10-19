// Sincroniza o conteúdo do Volter do claude.ai com data/conteudo.js.
//
// Uso:  node ferramentas/sincronizar-conteudo.js <pasta-exportada>
//
// A pasta exportada tem uma subpasta por coleção (cases, lessons, projects, news, books)
// com um arquivo JSON por item, no formato <coleção>/<id>.json — é o que a ferramenta
// ArtifactData gera com "list" + out_dir. Itens de qualquer status são mantidos: o app
// mostra aos alunos só os publicados, e rascunhos/revisões ficam visíveis no editor.
// O arquivo só é regravado quando o conteúdo realmente muda.
const fs = require("fs");
const path = require("path");

const COLLS = ["cases", "lessons", "projects", "news", "books"];
// Ordena os campos sempre do mesmo jeito, para o arquivo só mudar quando o conteúdo mudar.
const sortKeys = v => Array.isArray(v) ? v.map(sortKeys) : v && typeof v === "object" ? Object.fromEntries(Object.keys(v).sort().map(k => [k, sortKeys(v[k])])) : v;
const dir = process.argv[2];
if (!dir || !fs.existsSync(dir)) { console.error("Informe a pasta exportada."); process.exit(1); }

const out = {};
let total = 0;
for (const c of COLLS) {
  out[c] = {};
  const cdir = path.join(dir, c);
  if (!fs.existsSync(cdir)) continue;
  for (const f of fs.readdirSync(cdir).filter(f => f.endsWith(".json")).sort()) {
    const raw = JSON.parse(fs.readFileSync(path.join(cdir, f), "utf8"));
    const doc = raw && typeof raw === "object" && raw.data && typeof raw.data === "object" && !raw.title ? raw.data : raw;
    for (const k of Object.keys(doc)) if (k.startsWith("__") || k === "version" || k === "id") delete doc[k];
    out[c][path.basename(f, ".json")] = sortKeys(doc);
    total++;
  }
}
if (!out.cases || !Object.keys(out.cases).length) { console.error("Nenhum caso encontrado: exportação incompleta, nada foi alterado."); process.exit(1); }

const target = path.join(__dirname, "..", "data", "conteudo.js");
const body = "window.VOLTER_SEED = " + JSON.stringify(out, null, 1) + ";\n";
const old = fs.existsSync(target) ? fs.readFileSync(target, "utf8") : "";
if (old.endsWith(body)) { console.log("Sem mudanças (" + total + " itens)."); process.exit(0); }
fs.writeFileSync(target, "// Conteúdo do Volter, sincronizado do claude.ai. Também pode ser gerado pelo editor de conteúdo (botão \"Gerar conteudo.js\").\n" + body);
const count = c => Object.keys(out[c]).length;
console.log("Atualizado: " + COLLS.map(c => c + " " + count(c)).join(", ") + ".");
