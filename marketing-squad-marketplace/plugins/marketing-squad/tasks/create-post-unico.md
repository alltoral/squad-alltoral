# Task: create-post-unico

**Agente**: Carlos Carrossel · **Passo**: 6 (`criar-copy-instagram`) · **Execução**: inline ·
**Pré-condição**: `formato-escolhido.md` do tema diz "Post Estático"

## Objetivo

Escrever a copy completa de um post estático de Instagram para o ângulo já escolhido de um tema —
uma frase de impacto que sobrevive sozinha, fora do post.

## Inputs

- `squads/social-content/output/{run_id}/selected-angle.md` (seção do tema)
- `squads/social-content/output/{run_id}/research-brief-tema-{a|b}.md`
- `squads/social-content/pipeline/data/tone-of-voice.md`
- `squads/social-content/pipeline/data/company.md`

## Passos

1. Leia o ângulo escolhido e o research-brief do tema.
2. Calibre o diagnóstico de pré-escrita (nível de consciência, sofisticação de mercado, Big Idea,
   driver psicológico dominante) para esse ângulo.
3. Apresente as 6 opções de `tone-of-voice.md`, recomende uma com justificativa, e espere a escolha
   do usuário antes de escrever qualquer linha.
4. Apresente 3 opções de frase de impacto (headline única) e espere o usuário confirmar uma antes
   de escrever a legenda. Cada opção precisa passar no teste de republicabilidade: funciona sozinha
   como print isolado ou repost, sem a legenda de apoio — e evita a fórmula de quote card genérico
   (frase vaga + tag preta + fundo chapado).
5. Escreva a legenda com a reflexão que aprofunda a frase escolhida, CTA específico e acionável,
   5-15 hashtags.
6. Rode o teste de estresse (ceticismo, prova, inflação, fricção) e corte 15-25% do texto sem
   perder substância.

## Output

`squads/social-content/output/{run_id}/instagram-copy-tema-{a|b}.md`.

## Critérios de qualidade

- [ ] Tom escolhido pelo usuário antes de qualquer copy.
- [ ] Frase de impacto confirmada pelo usuário antes da legenda.
- [ ] Frase de impacto sobrevive fora do contexto do post, sem fórmula de quote card genérico.
- [ ] CTA específico, nunca "gostou, segue lá".
- [ ] 5-15 hashtags, sem hashtags banidas.
