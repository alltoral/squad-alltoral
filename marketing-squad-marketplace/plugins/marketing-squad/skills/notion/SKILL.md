---
name: notion
description: Cria páginas nos dois bancos de dados do Notion (Instagram e LinkedIn) usados pelo squad Social Content. Use no Passo 11 do pipeline (publicar-notion), via Nina Notion.
---

# Skill: notion

Skill usada só pela **Nina Notion** (Passo 11, `publicar-notion`) para transportar a copy final e a
arte final aprovadas da rodada para os dois calendários de conteúdo que o usuário já mantém no
Notion — um banco para Instagram, um para LinkedIn. Nunca decide conteúdo, só cria a página.

## Configuração (obrigatória antes do Passo 11)

1. Crie uma integração interna no Notion e copie o token.
2. Compartilhe essa integração com os dois bancos de dados (Instagram e LinkedIn).
3. Defina no `.env` do projeto:
   - `NOTION_TOKEN` — token da integração.
   - `NOTION_DB_INSTAGRAM` — id do banco de dados de Instagram.
   - `NOTION_DB_LINKEDIN` — id do banco de dados de LinkedIn.
4. Preencha as duas tabelas de schema abaixo com os nomes exatos das colunas dos seus bancos —
   **nome de propriedade errado falha silenciosamente** (a API cria a página, mas o campo com nome
   errado simplesmente não chega no Notion).

## Schema — banco de Instagram

> [PREENCHA AQUI] — substitua pelos nomes e tipos reais das colunas do seu banco de Instagram.

| Propriedade Notion (nome exato) | Tipo | De onde vem | Obrigatório? |
|---|---|---|---|
| [PREENCHA AQUI] | title | Hook/frase de impacto | sim |
| [PREENCHA AQUI] | rich_text | Legenda completa | sim |
| [PREENCHA AQUI] | select | `formato-escolhido.md` (Carrossel/Post Estático) | sim |
| [PREENCHA AQUI] | select | Classificação subjetiva (ex: Objetivo) | não — deixar em branco sem confiança real |
| [PREENCHA AQUI] | files | Arte final (`visuals/`) | sim |

## Schema — banco de LinkedIn

> [PREENCHA AQUI] — substitua pelos nomes e tipos reais das colunas do seu banco de LinkedIn.

| Propriedade Notion (nome exato) | Tipo | De onde vem | Obrigatório? |
|---|---|---|---|
| [PREENCHA AQUI] | title | Hook | sim |
| [PREENCHA AQUI] | rich_text | Corpo do post | sim |
| [PREENCHA AQUI] | select | Classificação subjetiva (ex: Pilar) | não — deixar em branco sem confiança real |
| [PREENCHA AQUI] | files | Arte final (`visuals/linkedin.png`) | sim |

## Como criar uma página

Uma chamada por página — nunca agrupar Instagram e LinkedIn numa única chamada.

```bash
node "${CLAUDE_PLUGIN_ROOT}/skills/notion/scripts/create-notion-page.js" NOTION_DB_INSTAGRAM config-instagram.json
node "${CLAUDE_PLUGIN_ROOT}/skills/notion/scripts/create-notion-page.js" NOTION_DB_LINKEDIN config-linkedin.json
```

O script vive dentro do plugin (`${CLAUDE_PLUGIN_ROOT}`); os arquivos `config-*.json` de cada
chamada ficam no projeto atual, junto do resto do `output/{run_id}/` da rodada.

`config-*.json` é o corpo da API do Notion (chave `properties`, seguindo o schema documentado
acima), montado a partir da copy e do formato já aprovados — nunca a chave `parent`, que o script
já preenche a partir do primeiro argumento.

Se uma das 2 chamadas falhar, reporte o erro exato retornado pela API (o script já imprime o corpo
da resposta) e siga tentando a outra — uma falha não derruba a outra.
