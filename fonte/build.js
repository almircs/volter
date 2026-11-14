// Gera as duas versões do Volter a partir de src/volter.html:
//  - dist/artifact.html  → versão publicada no claude.ai (banco de dados e IA da plataforma)
//  - repo/index.html     → versão do GitHub (modo local, conteúdo em data/conteudo.js)
const fs = require("fs");
const path = require("path");
const src = fs.readFileSync(path.join(__dirname, "src/volter.html"), "utf8");

fs.mkdirSync(path.join(__dirname, "dist"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "dist/artifact.html"), src.replace("<!--SEED-->\n", ""));

const cut = src.indexOf('<header class="mbar"');
if (cut < 0) throw new Error("marcador do cabeçalho não encontrado");
const headPart = src.slice(0, cut).replace('<meta name="claude:viewport-fit-sides" content="cover">\n', "");
const bodyPart = src.slice(cut).replace("<!--SEED-->", '<script src="data/conteudo.js"></script>');
const page = '<!doctype html>\n<html lang="pt-BR">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n' +
  '<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; script-src \'self\' \'unsafe-inline\'; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com; font-src \'self\' data: https://fonts.gstatic.com; img-src \'self\' data: blob:; connect-src \'none\'">\n' +
  '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22%3E%3Crect x=%221%22 y=%221%22 width=%2230%22 height=%2230%22 rx=%228%22 fill=%22%23181818%22/%3E%3Cpath d=%22M8.5 9 L16 24 L23.5 9%22 fill=%22none%22 stroke=%22%23e8202a%22 stroke-width=%223.2%22 stroke-linejoin=%22round%22 stroke-linecap=%22round%22/%3E%3Ccircle cx=%228.5%22 cy=%229%22 r=%222.4%22 fill=%22%23b69cff%22/%3E%3Ccircle cx=%2223.5%22 cy=%229%22 r=%222.4%22 fill=%22%235cc8ff%22/%3E%3Ccircle cx=%2216%22 cy=%2224%22 r=%222.4%22 fill=%22%234fe3a6%22/%3E%3Ccircle cx=%2216%22 cy=%229%22 r=%222.4%22 fill=%22%23ffcb5c%22/%3E%3C/svg%3E">\n' +
  headPart + "</head>\n<body>\n" + bodyPart + "\n</body>\n</html>\n";
const repo = path.join(__dirname, "..");
fs.mkdirSync(path.join(repo, "data"), { recursive: true });
fs.writeFileSync(path.join(repo, "index.html"), page);

// data/conteudo.js não é gerado aqui: ele vem da sincronização semanal com o claude.ai (ferramentas/sincronizar-conteudo.js).
console.log("ok", page.length, "bytes");
