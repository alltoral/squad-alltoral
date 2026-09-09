# Task: generate-angles

**Agente**: Carlos Carrossel · **Passo**: 4 (`gerar-angulos`) · **Execução**: inline

## Objetivo

A partir do research-brief da rodada, gerar 5 perspectivas emocionais distintas sobre o **mesmo**
tema — nunca 5 temas diferentes — e apresentá-las ao usuário para escolha no checkpoint seguinte.

## Inputs

- `squads/social-content/output/{run_id}/research-brief.md`
- `squads/social-content/pipeline/data/company.md` e `tone-of-voice.md` — para calibrar quais
  ângulos fazem sentido para a marca, mesmo antes do tom específico ser escolhido.

## Passos

1. Leia o research-brief, achados de mercado e referências culturais incluídas.
2. Gere 5 ângulos, cada um explorando um driver psicológico diferente sobre o mesmo tema: medo,
   oportunidade, educacional, contrário, inspiracional.
3. Para cada ângulo, escreva 1-2 frases explicando o raciocínio (por que esse driver funciona para
   esse tema) — nunca entregue o ângulo sem justificativa.

## Output

`squads/social-content/output/{run_id}/angles.md`, com 5 ângulos numerados, cada um com nome curto
+ driver psicológico + justificativa de 1-2 frases.

## Critérios de qualidade

- [ ] Exatamente 5 ângulos, sobre o mesmo tema (não 5 temas).
- [ ] Cada ângulo tem um driver psicológico claro e distinto dos outros 4.
- [ ] Justificativa objetiva, não descrição vaga do que o ângulo "vai ser".
