#!/usr/bin/env node
// Cria uma página em um banco de dados do Notion via API REST.
// Uso: node create-notion-page.js <NOME_DA_VAR_DE_AMBIENTE_DO_BANCO|id-literal-do-banco> <config.json>
//
// config.json é o corpo da chamada da API do Notion (sem "parent"), por exemplo:
// {
//   "properties": { "Nome": { "title": [{ "text": { "content": "..." } }] } },
//   "cover": { "type": "external", "external": { "url": "https://..." } }
// }
//
// Requer as variáveis de ambiente NOTION_TOKEN e a variável do banco (ex: NOTION_DB_INSTAGRAM).
// Requer Node.js 18+ (usa fetch nativo).

const fs = require("fs");

const NOTION_VERSION = "2022-06-28";

function fail(message) {
  console.error(`Erro: ${message}`);
  process.exit(1);
}

async function main() {
  const [, , dbArg, configPath] = process.argv;

  if (!dbArg || !configPath) {
    fail(
      "uso: node create-notion-page.js <NOME_DA_VAR_DE_AMBIENTE_DO_BANCO|id-literal> <config.json>"
    );
  }

  const token = process.env.NOTION_TOKEN;
  if (!token) fail("variável de ambiente NOTION_TOKEN não configurada.");

  const databaseId = process.env[dbArg] || dbArg;

  if (!fs.existsSync(configPath)) fail(`config não encontrado: ${configPath}`);

  let config;
  try {
    config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  } catch (err) {
    fail(`config.json inválido: ${err.message}`);
  }

  if (!config.properties) fail('config.json precisa ter a chave "properties".');

  const body = {
    parent: { database_id: databaseId },
    ...config,
  };

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Falha ao criar página no Notion. Resposta da API:");
    console.error(JSON.stringify(data, null, 2));
    process.exit(1);
  }

  console.log("Página criada em:", data.url);
}

main().catch((err) => fail(err.message));
