---
name: stock-images
description: Busca fotos gratuitas e livres de uso comercial (Pexels) para usar como material real nas artes do Diego Design, antes de recorrer a geração de imagem via IA (que tem custo).
---

# Skill: stock-images

Skill usada pela **Diego Design** para buscar fotos reais e gratuitas (licença livre de uso
comercial, sem custo) quando o acervo próprio da marca (`assets/posts-finalizados/`) não tem uma
imagem adequada para a peça — **antes** de considerar geração via IA, que consome créditos pagos.

## Configuração

1. Crie uma conta gratuita em [pexels.com/api](https://www.pexels.com/api/) e gere sua API key —
   é grátis, sem cartão de crédito, com limite generoso (200 requisições/hora no plano padrão).
2. Defina no `.env` do projeto:
   - `PEXELS_API_KEY` — sua chave da API do Pexels.

> Prefere outro banco de imagens gratuito (Unsplash, Pixabay)? A lógica é a mesma — troque o
> endpoint e o header de autenticação no script (`scripts/search-stock-photos.js`) pelo da API
> escolhida. Todas têm planos gratuitos com licença de uso comercial.

## Como buscar fotos

```bash
node "${CLAUDE_PLUGIN_ROOT}/skills/stock-images/scripts/search-stock-photos.js" "escritório home office" 5 squads/social-content/output/{run_id}/stock-refs
```

O script baixa até 20 fotos por chamada para o diretório indicado (`photo-01.jpg`,
`photo-02.jpg`...) e salva um `credits.md` com o fotógrafo e o link de origem de cada uma — a
licença do Pexels não exige atribuição, mas é boa prática manter o registro.

## Licenciamento

Todas as fotos retornadas pela API do Pexels são livres para uso comercial, sem necessidade de
atribuição (licença Pexels). Ainda assim, antes de usar uma foto na peça final:

- Confira se a foto não tem uma pessoa, marca ou produto de terceiros identificável de um jeito
  que pareça endosso não autorizado.
- Prefira fotos que combinem com a composição real da marca (mesma sensação de luz, enquadramento,
  paleta) em vez da primeira que aparecer na busca.

## Uso pelo Diego Design

1. Buscar só quando o acervo próprio (`assets/posts-finalizados/`) não cobrir a necessidade da
   peça.
2. Rodar uma busca com termos específicos em inglês (a base de dados do Pexels é majoritariamente
   em inglês, mesmo que a busca aceite outros idiomas) — termos vagos trazem resultado genérico.
3. Baixar 3-5 opções por vez, escolher a mais alinhada à composição, e descartar o resto.
4. Só recorrer à geração via IA se nem o acervo próprio nem o banco de imagens gratuito resolverem
   — e avisar o usuário antes, já que isso tem custo de créditos.
