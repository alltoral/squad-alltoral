# Task: create-carrossel

**Agente**: Carlos Carrossel · **Passo**: 6 (`criar-copy-instagram`) · **Execução**: inline ·
**Pré-condição**: `formato-escolhido.md` diz "Carrossel"

## Objetivo

Escrever a copy completa de um carrossel de Instagram para o ângulo já escolhido.

## Inputs

- `squads/social-content/output/{run_id}/selected-angle.md`
- `squads/social-content/output/{run_id}/research-brief.md`
- `squads/social-content/pipeline/data/tone-of-voice.md`
- `squads/social-content/pipeline/data/company.md`

## Passos

1. Leia o ângulo escolhido e o research-brief.
2. Calibre o diagnóstico de pré-escrita: nível de consciência do público, sofisticação de mercado,
   Big Idea e driver psicológico dominante para esse ângulo.
3. Apresente as 6 opções de `tone-of-voice.md`, recomende uma com justificativa, e espere a escolha
   do usuário antes de escrever qualquer linha.
4. Apresente 3 opções de hook (abertura do slide 1) e espere o usuário confirmar uma antes de
   escrever o resto dos slides.
5. Escreva a estrutura completa: slides (cada um 40-80 palavras, salvo pedido de slides curtos),
   legenda com gancho autônomo nos primeiros 125 caracteres, CTA específico e acionável, 5-15
   hashtags (mix de nicho e amplas).
6. Rode o teste de estresse (ceticismo, prova, inflação, fricção) e corte 15-25% do texto sem
   perder substância.

## Output

`squads/social-content/output/{run_id}/instagram-copy.md`.

## Critérios de qualidade

- [ ] Tom escolhido pelo usuário antes de qualquer copy.
- [ ] Hook confirmado pelo usuário antes do corpo.
- [ ] Cada slide dentro da faixa de palavras (ou justificativa explícita se fora).
- [ ] CTA específico, nunca "gostou, segue lá".
- [ ] 5-15 hashtags, sem hashtags banidas.
