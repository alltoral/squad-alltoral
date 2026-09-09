# Task: create-linkedin-visual

**Agente**: Diego Design · **Passo**: 9 (`gerar-artes`) · **Execução**: subagent

## Objetivo

Renderizar a arte de LinkedIn para a copy já aprovada — sempre uma peça própria, pensada para o
registro e o formato da plataforma, nunca a arte de Instagram redimensionada ou cortada.

## Inputs

- `squads/social-content/output/{run_id}/linkedin-post-copy.md` (copy aprovada)
- `squads/social-content/assets/manual-de-marca/`
- `squads/social-content/assets/identidade/`
- `squads/social-content/assets/posts-finalizados/`

## Passos

1. Reaproveite o sistema de design documentado no Passo `create-instagram-visuals` desta mesma
   entrega (mesma paleta e tipografia do manual de marca), mas adapte a composição ao registro mais
   institucional/pessoal do LinkedIn.
2. Se a peça precisar de uma foto nova (diferente da já resolvida para o Instagram), siga a mesma
   ordem: acervo próprio → banco de imagens gratuito (skill `stock-images`) → IA como último
   recurso, só com confirmação explícita do usuário.
3. Monte a composição usando texto real da copy de LinkedIn aprovada — nunca placeholder.
4. Garanta contraste mínimo 4,5:1 (WCAG AA) e declare as dimensões exatas usadas.
5. Se o manual de marca definir elementos de identidade fixos (logo, handle, mascote), posicione-os
   na peça.
6. Renderize e verifique visualmente a peça antes de considerar a entrega concluída.

## Output

`squads/social-content/output/{run_id}/visuals/linkedin.png`.

## Critérios de qualidade

- [ ] Peça própria, não reaproveitamento redimensionado da arte de Instagram.
- [ ] Cores e tipografia conferidas contra `assets/manual-de-marca/`.
- [ ] Texto real da copy de LinkedIn aprovada, sem placeholder.
- [ ] Contraste mínimo 4,5:1.
- [ ] Peça verificada visualmente antes de concluir.
- [ ] Se precisou de foto nova, resolvida na ordem acervo próprio → banco gratuito → IA; IA só com
      confirmação explícita do usuário.
