# Task: create-linkedin-visual

**Agentes**: Diego Design (Tema A) · Vitor Vetor (Tema B) · **Passo**: 9 (`gerar-artes`) ·
**Execução**: subagent, em paralelo — cada designer só no seu tema

## Objetivo

Renderizar a arte de LinkedIn para a copy já aprovada — sempre uma peça própria, pensada para o
registro e o formato da plataforma, nunca a arte de Instagram redimensionada ou cortada.

## Inputs

- `squads/social-content/output/{run_id}/linkedin-post-copy-tema-{a|b}.md` (copy aprovada no
  Passo 8)
- `squads/social-content/assets/manual-de-marca/`
- `squads/social-content/assets/identidade/`
- `squads/social-content/assets/posts-finalizados/`

## Passos

1. Reaproveite o sistema de design documentado no Passo `create-instagram-visuals` desta mesma
   entrega (mesma paleta e tipografia do manual de marca), mas adapte a composição ao registro mais
   institucional/pessoal do LinkedIn.
2. Monte a composição usando texto real da copy de LinkedIn aprovada — nunca placeholder.
3. Garanta contraste mínimo 4,5:1 (WCAG AA) e declare as dimensões exatas usadas.
4. Se o manual de marca definir elementos de identidade fixos (logo, handle, mascote), posicione-os
   na peça.
5. Renderize e verifique visualmente a peça antes de considerar a entrega concluída.

## Output

`squads/social-content/output/{run_id}/visuals-tema-{a|b}/linkedin.png`.

## Critérios de qualidade

- [ ] Peça própria, não reaproveitamento redimensionado da arte de Instagram.
- [ ] Cores e tipografia conferidas contra `assets/manual-de-marca/`.
- [ ] Texto real da copy de LinkedIn aprovada, sem placeholder.
- [ ] Contraste mínimo 4,5:1.
- [ ] Peça verificada visualmente antes de concluir.
