# Task: find-and-rank-trends

**Agente**: Rita Referência · **Passo**: 2 (`pesquisa-tendencias`) · **Execução**: subagent

## Objetivo

A partir do foco de pesquisa da rodada, mapear o terreno de mercado e o terreno cultural (memes,
atualidades) relevantes, e entregar um brief estruturado que sirva de matéria-prima para a geração
de ângulos — sem decidir ângulo nenhum.

## Inputs

- `squads/social-content/output/{run_id}/research-focus.md`
- `squads/social-content/pipeline/data/research-brief.md` — contexto estático de marca (segmento,
  concorrentes, posicionamento) preenchido pelo usuário.
- `squads/social-content/pipeline/data/company.md` — quem é a marca, para saber o que é relevante
  pesquisar.

## Passos

1. Leia o foco da rodada e o contexto estático de marca antes de pesquisar qualquer coisa.
2. Rode uma varredura de 5-10 fontes candidatas (`web_search`/`web_fetch`) sobre o tema: dados de
   mercado, comportamento de consumidor, publicações do setor. Aprofunde só nas 3-5 melhores.
3. Verifique cada achado contra pelo menos uma fonte independente adicional antes de incluí-lo;
   achado de fonte única entra marcado como confiança baixa.
4. Identifique 1-2 referências de cultura pop, meme ou atualidade genuinamente vivas no momento da
   pesquisa e conectadas ao tema — nunca forçadas.
5. Classifique cada ângulo/tendência emergente encontrado por estágio de ciclo de vida
   (emergente/crescimento/maduro/declinando).
6. Documente o que não foi encontrado (lacunas), mesmo que pequeno.

## Output

`squads/social-content/output/{run_id}/research-brief.md`, formato Markdown:

```
## Achados-Chave
## Ângulos em Alta
## Referências Culturais
## Fontes
## Recomendações
## Lacunas
```

## Critérios de qualidade

- [ ] Todo achado tem fonte com URL/referência e data de acesso.
- [ ] Nível de confiança (alta/média/baixa) em cada achado.
- [ ] Pelo menos 1 ângulo em alta com estágio de ciclo de vida.
- [ ] Pelo menos 1 referência cultural viva no momento da pesquisa, só se genuinamente relevante.
- [ ] Seção de Lacunas presente.
