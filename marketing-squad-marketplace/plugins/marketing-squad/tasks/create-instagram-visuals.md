# Task: create-instagram-visuals

**Agente**: Diego Design · **Passo**: 9 (`gerar-artes`) · **Execução**: subagent

## Objetivo

Renderizar a arte de Instagram (Carrossel ou Post Estático, conforme `formato-escolhido.md`) para a
copy já aprovada e revisada por Vera Veredicto, seguindo a identidade visual real documentada pelo
usuário — nunca uma paleta ou estilo genérico.

## Inputs

- `squads/social-content/output/{run_id}/formato-escolhido.md`
- `squads/social-content/output/{run_id}/instagram-copy.md` (copy aprovada)
- `squads/social-content/assets/manual-de-marca/` — cores, tipografia, regras de identidade
- `squads/social-content/assets/identidade/` — logo, mascote/ícones da marca
- `squads/social-content/assets/posts-finalizados/` — acervo de peças anteriores, para consistência
- `squads/social-content/output/{run_id}/visual-references.md` (se existir)

## Passos

1. Antes de desenhar qualquer peça, abra o manual de marca real em `assets/manual-de-marca/` e
   documente cores, tipografia, espaçamento e elementos gráficos que vão ser usados nesta entrega.
   Nunca inventar paleta ou tipografia sem essa fonte.
2. Confirme o formato (Carrossel ou Post Estático) antes de desenhar.
3. **Resolva a necessidade de imagem nesta ordem, sem pular etapa:**
   1. Acervo próprio (`assets/posts-finalizados/`) — custo zero.
   2. Banco de imagens gratuito (skill `stock-images`, salva em `output/{run_id}/stock-refs/`) —
      custo zero, só quando o acervo próprio não cobrir a necessidade.
   3. Geração via IA — **só** se as duas anteriores não resolverem, e só depois de avisar o
      usuário que vai consumir créditos e receber confirmação explícita.
4. Monte a composição usando texto real da copy aprovada — nunca placeholder ou lorem ipsum.
5. Garanta contraste mínimo 4,5:1 (WCAG AA) em todo texto sobre fundo, e tamanhos de fonte legíveis
   no formato final (declare as dimensões exatas usadas, nunca "tamanho aproximado").
6. Se o manual de marca definir elementos de identidade fixos (logo, handle, mascote), posicione-os
   nas extremidades da composição em toda peça — nunca no centro, nunca ausentes.
7. Renderize e verifique visualmente a primeira peça (slide 1 do carrossel, ou o post único) antes
   de considerar o lote inteiro concluído.
8. Nenhum contador de slide na imagem final — o Instagram já mostra navegação nativa.

## Output

`squads/social-content/output/{run_id}/visuals/` — `slide-01.png`, `slide-02.png`... se Carrossel,
ou `post.png` se Post Estático, mais a documentação do sistema de design usado nesta entrega.

## Critérios de qualidade

- [ ] Cores e tipografia conferidas contra `assets/manual-de-marca/`, nunca inventadas.
- [ ] Formato seguido conforme `formato-escolhido.md`.
- [ ] Texto real da copy aprovada, sem placeholder.
- [ ] Contraste mínimo 4,5:1 em todo texto sobre fundo.
- [ ] Elementos fixos de identidade presentes, quando definidos no manual de marca.
- [ ] Primeira peça verificada visualmente antes do lote.
- [ ] Nenhum contador de slide presente.
- [ ] Imagem resolvida na ordem acervo próprio → banco gratuito → IA; geração via IA só com
      confirmação explícita do usuário.
