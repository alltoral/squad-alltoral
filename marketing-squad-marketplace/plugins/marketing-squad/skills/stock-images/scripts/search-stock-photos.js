#!/usr/bin/env node
// Busca fotos gratuitas e livres de uso comercial na API do Pexels e baixa as escolhidas.
// Uso: node search-stock-photos.js "<busca>" <quantidade> <diretório-de-saída>
//
// Requer a variável de ambiente PEXELS_API_KEY (cadastro gratuito em pexels.com/api).
// Requer Node.js 18+ (usa fetch nativo).
//
// Salva no diretório de saída: photo-01.jpg, photo-02.jpg... e credits.md com o nome do
// fotógrafo e o link da página de origem de cada imagem (a licença Pexels não exige atribuição,
// mas é boa prática registrar a fonte).

const fs = require("fs");
const path = require("path");

function fail(message) {
  console.error(`Erro: ${message}`);
  process.exit(1);
}

async function main() {
  const [, , query, countArg, outDir] = process.argv;

  if (!query || !countArg || !outDir) {
    fail('uso: node search-stock-photos.js "<busca>" <quantidade> <diretório-de-saída>');
  }

  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) fail("variável de ambiente PEXELS_API_KEY não configurada.");

  const count = parseInt(countArg, 10);
  if (!Number.isInteger(count) || count < 1 || count > 20) {
    fail("quantidade precisa ser um número inteiro entre 1 e 20.");
  }

  fs.mkdirSync(outDir, { recursive: true });

  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${count}`;
  const res = await fetch(url, { headers: { Authorization: apiKey } });
  const data = await res.json();

  if (!res.ok) {
    console.error("Falha ao buscar no Pexels. Resposta da API:");
    console.error(JSON.stringify(data, null, 2));
    process.exit(1);
  }

  const photos = data.photos || [];
  if (photos.length === 0) {
    console.log(`Nenhum resultado para "${query}". Tente outros termos de busca.`);
    return;
  }

  const credits = ["# Créditos das fotos\n"];

  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const num = String(i + 1).padStart(2, "0");
    const filePath = path.join(outDir, `photo-${num}.jpg`);

    const imgRes = await fetch(photo.src.large2x || photo.src.large);
    if (!imgRes.ok) {
      console.error(`Falha ao baixar photo-${num} (${photo.id}): HTTP ${imgRes.status}`);
      continue;
    }
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    credits.push(
      `- photo-${num}.jpg — foto de [${photo.photographer}](${photo.photographer_url}) via [Pexels](${photo.url})`
    );
    console.log(`Salvo: ${filePath}`);
  }

  fs.writeFileSync(path.join(outDir, "credits.md"), credits.join("\n") + "\n");
  console.log(`Créditos salvos em: ${path.join(outDir, "credits.md")}`);
}

main().catch((err) => fail(err.message));
