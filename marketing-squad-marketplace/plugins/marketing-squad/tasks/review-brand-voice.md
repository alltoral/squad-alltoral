# Task: review-brand-voice

**Agente**: Vera Veredicto · **Passo**: 8 (`revisao-tom`) · **Execução**: inline

## Objetivo

Revisar a copy de Instagram e a copy de LinkedIn da rodada, juntas, contra a voz de marca
documentada, e dar um veredito explícito antes de qualquer arte ser gerada.

## Inputs

- `squads/social-content/output/{run_id}/instagram-copy.md`
- `squads/social-content/output/{run_id}/linkedin-post-copy.md`
- `squads/social-content/pipeline/data/company.md`
- `squads/social-content/pipeline/data/tone-of-voice.md`

## Passos

1. Leia as duas copies e o tom escolhido pelo usuário em cada uma.
2. Compare frase por frase contra as regras de vocabulário ("sempre usar"/"nunca usar") e as
   restrições de `company.md` (seção "Nunca fazer / restrições").
3. Avalie se as duas peças, juntas, soam como a mesma marca — sem exigir repetição, mas sem
   contradição de tom entre plataformas.
4. Separe os apontamentos em **bloqueantes** (quebra explícita de uma regra documentada) e
   **sugestões opcionais** (polimento, não impede seguir).
5. Dê o veredito final: **Aprovado** (sem bloqueantes) ou **Reprovado** (com a lista de
   bloqueantes, cada um citando a frase exata e a regra quebrada).
6. Se reprovado, indique para qual agente cada ponto bloqueante volta (Carlos Carrossel para
   Instagram, Lara Linkedin para LinkedIn).

## Output

`squads/social-content/output/{run_id}/brand-voice-review.md`:

```
## Veredito
## Apontamentos Bloqueantes
## Sugestões Opcionais
## Consistência Instagram x LinkedIn
```

## Critérios de qualidade

- [ ] Veredito final explícito ("Aprovado" ou "Reprovado").
- [ ] Todo apontamento bloqueante cita a frase exata e a regra de `company.md`/`tone-of-voice.md`
      que ela quebra.
- [ ] Bloqueantes e sugestões opcionais claramente separados.
- [ ] Consistência entre as duas plataformas avaliada explicitamente.
