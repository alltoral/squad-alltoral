# Task: create-linkedin-post

**Agente**: Lara Linkedin · **Passo**: 7 (`criar-copy-linkedin`) · **Execução**: inline

## Objetivo

Adaptar o ângulo já escolhido (e a copy de Instagram já aprovada) ao formato e tom nativos do
LinkedIn — sem repetir a copy de Instagram literalmente.

## Inputs

- `squads/social-content/output/{run_id}/selected-angle.md`
- `squads/social-content/output/{run_id}/instagram-copy.md` (para consistência de mensagem, não
  para cópia literal)
- `squads/social-content/pipeline/data/tone-of-voice.md`

## Passos

1. Leia o ângulo selecionado e a copy de Instagram aprovada.
2. Apresente as 6 opções de `tone-of-voice.md` (tipicamente "Profissional-mas-Pessoal" é a
   recomendação, mas nunca assumida sem confirmação), recomende uma com justificativa, e espere a
   escolha do usuário.
3. Escreva em primeira pessoa, ancorado em uma história pessoal ou observação genuína — nunca
   conselho genérico institucional.
4. Estruture: hook que funciona sozinho nos primeiros ~210 caracteres (antes do "ver mais"), 3-5
   insights acionáveis numerados, fechamento em pergunta específica e genuína (nunca retórica).
5. Se houver link, nunca colocar no corpo — usar "link nos comentários".
6. Use parágrafos de 1-2 frases com quebras de linha frequentes; humor mais sutil que no Instagram,
   mas presente.

## Output

`squads/social-content/output/{run_id}/linkedin-post-copy.md`, formato Markdown: HOOK, BODY,
INSIGHTS, CTA, HASHTAGS.

## Critérios de qualidade

- [ ] Tom escolhido pelo usuário antes de qualquer copy.
- [ ] Hook autônomo dentro de ~210 caracteres.
- [ ] Primeira pessoa, 3-5 insights numerados.
- [ ] CTA é pergunta genuína e específica, nunca retórica.
- [ ] Nenhum link no corpo do post.
- [ ] 3-5 hashtags na última linha.
