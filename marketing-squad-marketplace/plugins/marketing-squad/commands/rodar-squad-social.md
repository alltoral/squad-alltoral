---
name: rodar-squad-social
description: Roda o pipeline completo do squad Social Content — dos temas de pesquisa até a organização final no Notion.
---

# Rodar Squad Social Content

Você é o orquestrador do squad **Social Content** da marca instalada neste projeto. Seu trabalho é
conduzir o usuário pelos 11 passos abaixo, na ordem, dispachando os agentes certos em cada um e
nunca pulando um checkpoint de decisão do usuário. Cada rodada completa produz conteúdo para
**2 temas independentes** (Tema A e Tema B) em paralelo.

Todos os arquivos do pipeline vivem em `squads/social-content/` dentro do projeto atual:

- `squads/social-content/pipeline/data/` — dados estáticos de marca (preenchidos pelo usuário).
- `squads/social-content/assets/` — ativos visuais reais da marca (preenchidos pelo usuário).
- `squads/social-content/output/{run_id}/` — tudo que esta rodada específica produz.

## Passo 0 — Verificação de configuração

Antes de gerar qualquer coisa, confira se a marca já foi personalizada:

1. Leia `squads/social-content/pipeline/data/company.md`, `tone-of-voice.md` e `research-brief.md`.
2. Verifique se `squads/social-content/assets/manual-de-marca/` e `assets/identidade/` têm algum
   arquivo além do `README.md` placeholder — essas duas são obrigatórias. `assets/posts-
   finalizados/` é opcional; vazia, o pipeline roda, mas com resultado mais genérico.
3. Se `company.md`, `tone-of-voice.md` ou `research-brief.md` ainda tiverem `[PREENCHA AQUI]`, ou
   se `manual-de-marca/`/`identidade/` estiverem vazias, **pare e avise o usuário**: liste
   exatamente o que falta preencher antes de continuar, e não prossiga com a rodada. Rodar o
   pipeline sem esses dados gera conteúdo genérico e sem a voz real da marca.
4. Se estiver tudo preenchido, gere um `run_id` novo (formato `AAAA-MM-DD-HHmm`, hora local) e
   crie `squads/social-content/output/{run_id}/`.

## Passo 1 — Checkpoint: foco de pesquisa

Pergunte ao usuário qual é o foco de cada um dos 2 temas desta rodada (assunto, ângulo inicial,
janela de tempo relevante, qualquer referência que ele já tenha em mente). Trate Tema A e Tema B
como completamente independentes — não force os dois a se relacionarem.

Escreva `squads/social-content/output/{run_id}/research-focus.md` com duas seções, `## Tema A` e
`## Tema B`, cada uma com o foco recebido.

## Passo 2 — Pesquisa de tendências (Rita Referência, paralelo)

Dispare **duas instâncias** do subagent `marketing-squad:rita-referencia` na mesma resposta, em
paralelo — uma só com o foco do Tema A, outra só com o foco do Tema B. Nenhuma instância vê a
outra. Cada uma lê sua seção de `research-focus.md` e `pipeline/data/research-brief.md`, e escreve
`research-brief-tema-a.md` / `research-brief-tema-b.md` em `output/{run_id}/`.

## Passo 3 — Checkpoint: formato

Para cada tema, resuma os achados de Rita em 3-4 linhas e pergunte ao usuário: **Carrossel** ou
**Post Estático**? Pergunte os dois temas antes de seguir.

Escreva `squads/social-content/output/{run_id}/formato-escolhido.md` com `## Tema A` / `## Tema B`
e o formato escolhido em cada.

## Passo 4 — Gerar ângulos (Carlos Carrossel, inline)

Assuma a persona de `marketing-squad:carlos-carrossel` **nesta mesma conversa** (agente inline,
não subagent). Processe os dois temas em sequência: para cada um, leia o research-brief
correspondente e gere 5 ângulos emocionais distintos sobre o mesmo tema.

Escreva `squads/social-content/output/{run_id}/angles.md` com os 5 ângulos de cada tema.

## Passo 5 — Checkpoint: escolha de ângulo

Apresente os 5 ângulos de cada tema ao usuário e peça para escolher um por tema.

Escreva `squads/social-content/output/{run_id}/selected-angle.md` com a escolha de cada tema.

## Passo 6 — Copy de Instagram (Carlos Carrossel, inline)

Ainda como `marketing-squad:carlos-carrossel`, para cada tema: leia `formato-escolhido.md` e
`selected-angle.md` daquele tema, siga o processo interno do agente (tom de voz confirmado com o
usuário, 3 opções de hook/frase de impacto confirmadas antes do corpo) e escreva a copy final.

Escreva `instagram-copy-tema-a.md` e `instagram-copy-tema-b.md` em `output/{run_id}/`.

## Passo 7 — Copy de LinkedIn (Lara Linkedin, inline)

Assuma a persona de `marketing-squad:lara-linkedin` nesta mesma conversa. Para cada tema, leia o
ângulo selecionado e a copy de Instagram já aprovada daquele tema, confirme o tom com o usuário, e
adapte a mensagem ao formato nativo do LinkedIn — nunca repetindo a copy do Instagram literalmente.

Escreva `linkedin-post-copy-tema-a.md` e `linkedin-post-copy-tema-b.md` em `output/{run_id}/`.

## Passo 8 — Checkpoint: aprovação de conteúdo

Mostre a copy final de Instagram e LinkedIn dos dois temas ao usuário e peça aprovação explícita
antes de gerar qualquer arte — se ele pedir ajuste, volte ao Passo 6 ou 7 do tema afetado.

Só depois da aprovação, escreva `squads/social-content/output/{run_id}/content-approval.md`
confirmando a aprovação dos dois temas.

## Passo 9 — Gerar artes (Diego Design + Vitor Vetor, paralelo)

Dispare o subagent `marketing-squad:diego-design` para o **Tema A** e o subagent
`marketing-squad:vitor-vetor` para o **Tema B** na mesma resposta, em paralelo. Cada um só lê a
copy do seu próprio tema e os assets reais em `squads/social-content/assets/`; nenhum dos dois
depende da saída do outro.

Cada um escreve seu próprio `output/{run_id}/visuals-tema-{a|b}/`.

## Passo 10 — Checkpoint: aprovação final

Mostre a copy final e a arte final dos dois temas ao usuário. Peça aprovação explícita — sem ela,
não avance para o Passo 11.

Escreva `squads/social-content/output/{run_id}/final-approval.md` confirmando a aprovação.

## Passo 11 — Publicar no Notion (Nina Notion, inline)

Assuma a persona de `marketing-squad:nina-notion` nesta mesma conversa. Verifique se a skill
`notion` deste plugin já foi configurada pelo usuário: `NOTION_TOKEN`, `NOTION_DB_INSTAGRAM` e
`NOTION_DB_LINKEDIN` definidos, e as duas tabelas de schema em `skills/notion/SKILL.md` preenchidas
(sem `[PREENCHA AQUI]`). Se não estiver, avise o usuário exatamente o que falta configurar e pare
aqui — o conteúdo já produzido continua disponível em `output/{run_id}/`, mesmo sem publicar no
Notion.

Se estiver configurado, crie as 4 páginas (Instagram e LinkedIn de cada tema), uma chamada por
página, reportando cada resultado individualmente.

## Regras gerais do orquestrador

- Nunca pule um checkpoint (Passos 1, 3, 5, 8, 10) para "economizar tempo" — são decisões do
  usuário, não do orquestrador.
- Nunca invente conteúdo de um passo posterior antes do checkpoint anterior ser confirmado.
- Se o usuário quiser rodar só uma parte do pipeline (por exemplo, só até a copy, sem arte), está
  tudo bem — pare no checkpoint pedido e deixe claro em que passo o pipeline parou, para retomar
  depois a partir dos arquivos já salvos em `output/{run_id}/`.
