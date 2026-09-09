# Squad · ALLTORAL

Um squad de 6 agentes de IA para criar conteúdo de marketing, rodando no [Claude Code](https://claude.com/claude-code). Cada agente cobre uma etapa do fluxo de produção, do briefing à publicação.

---

## O que é

Em vez de escrever um prompt novo pra cada peça de conteúdo, você instala esse squad e cada agente já sabe qual é a sua função dentro do processo. Você personaliza a voz da marca uma vez e o sistema se repete de forma consistente.

Criado e usado na operação da [ALL TORAL](https://alltoral.netlify.app/).

## Pré-requisitos

- [Claude Code](https://claude.com/claude-code) instalado
- Uma conta com acesso ao Claude Code
- Node.js (verifique a versão exigida pela instalação atual do Claude Code)

## Instalação

1. Abra uma conversa com o **Claude Code**
2. Escreva um pedido nesse sentido:

   > "Eu quero criar agentes de marketing para me ajudar na produção de conteúdo. Tenho o link de um repositório com os agentes prontos — pode instalar pra mim?"

3. Envie o link do repositório na sequência
4. O Claude Code vai apresentar algumas confirmações ao longo do processo (leitura de arquivos, criação de agentes, permissões de acesso). Basta ir aprovando cada uma
5. Ao final, os 6 agentes estarão instalados e prontos para uso na sua conta do Claude Code

## Terminal ou extensão de IDE

O squad roda no Claude Code tanto pelo terminal quanto pela extensão nativa para editores como VS Code (e forks como Cursor, Windsurf e VSCodium) ou JetBrains.

- **Terminal**: por padrão, o Claude Code pede sua confirmação antes de ações potencialmente sensíveis (criar arquivos, rodar comandos, etc.)
- **Extensão no editor**: além da interface visual com painel lateral e diffs em tempo real, ela tem um modo de **auto-aceitar edições**, que aplica as mudanças automaticamente conforme são feitas, reduzindo as interrupções pra confirmar cada passo

Na prática, isso significa que rodar pela extensão tende a agilizar a produção de conteúdo, já que o squad para menos vezes esperando aprovação. Mesmo assim, vale revisar o que está sendo aplicado automaticamente, principalmente enquanto você ainda está ajustando os agentes.

## Integração com o Notion

A **Nina Notion** depende de uma conexão ativa entre o Claude e a sua conta do Notion. Esse passo é essencial antes de usar esse agente.

1. Nas configurações do Claude, ative a integração (conector) com o Notion
2. Entre no Notion com a conta da sua empresa e crie o quadro que vai servir de referência (calendário de conteúdo, banco de posts, etc.)
3. Compartilhe o link desse quadro com o squad
4. Ajuste o agente para que ele use exatamente esse quadro como referência ao organizar, aprovar e movimentar o conteúdo

> O caminho exato dentro das configurações pode variar conforme a versão do produto — confira a documentação oficial do Claude se as opções estiverem em um lugar diferente do descrito aqui.

## A escalação

| # | Agente | Função |
|---|--------|--------|
| 01 | **Rita Referência** | Pesquisa e briefing. Levanta tendências, referências e direciona o tema de cada peça. |
| 02 | **Carlos Carrossel** | Transforma o conteúdo em carrosséis prontos para publicar. |
| 03 | **Lara Linkedin** | Escreve o texto principal para o banco de conteúdo do LinkedIn. |
| 04 | **Diego Design** | Cria as peças visuais que acompanham cada conteúdo, seguindo a identidade da marca. |
| 05 | **Vera Veredicto** | Revisa o tom e dá o veredito final de brand voice antes da publicação. |
| 06 | **Nina Notion** | Organiza tudo no Notion: calendário, banco de conteúdo e status de cada peça. |

> Confira se essas descrições batem com o que cada agente faz de verdade no seu repositório antes de publicar.

## Como usar

O squad tem um pipeline pronto que roda os 6 agentes na ordem certa, com checkpoints pra você
decidir tema, formato, ângulo e aprovação em cada etapa. Cada rodada produz uma peça de Instagram
e uma peça de LinkedIn a partir do mesmo tema:

1. Personalize os dados de marca (veja **Personalização** abaixo) — o pipeline se recusa a rodar
   com os arquivos ainda no template padrão
2. Rode `/marketing-squad:rodar-squad-social` dentro do seu projeto
3. Responda os checkpoints conforme o pipeline avança (foco de pesquisa, formato, ângulo, revisão
   de tom da **Vera Veredicto**, aprovação final)
4. A **Nina Notion** organiza o resultado final no seu calendário de conteúdo, se a integração com
   o Notion já estiver configurada

Também dá pra rodar cada agente separadamente fora do pipeline (ex: só pedir pro **Diego Design**
gerar uma peça avulsa), mas os checkpoints e a leitura dos arquivos do pipeline (`selected-angle.md`,
`formato-escolhido.md` etc.) são o que garante consistência entre Instagram e LinkedIn.

## Personalização

O squad vem **sem nenhum dado de marca embutido** — cada instalação personaliza o próprio antes de
rodar. Isso vive em `marketing-squad-marketplace/plugins/marketing-squad/`:

- `pipeline/data/company.md` — quem é a marca, público, pilares de conteúdo
- `pipeline/data/tone-of-voice.md` — as 6 opções de tom que **Carlos Carrossel** e **Lara Linkedin**
  sempre apresentam antes de escrever qualquer copy
- `pipeline/data/research-brief.md` — contexto estático de mercado que **Rita Referência** usa como
  ponto de partida
- `assets/manual-de-marca/`, `assets/identidade/` — paleta de cores, tipografia, logo e mascote
  reais que **Diego Design** trata como fonte de verdade inegociável
- `assets/posts-finalizados/` — acervo de peças já publicadas, opcional mas recomendado
- `skills/notion/SKILL.md` — schema real dos seus dois bancos do Notion, se for usar a **Nina
  Notion**

Todo arquivo de template vem marcado com `[PREENCHA AQUI]` — o comando
`/marketing-squad:rodar-squad-social` verifica isso no primeiro passo e para a rodada, avisando
exatamente o que falta, se algo ainda estiver com o placeholder.

## Suporte e treinamento

Este squad é vendido em dois planos:

- **Investimento inicial** — acesso ao repositório e documentação de instalação
- **Investimento plus** — repositório + live de instalação (2h) + suporte direto por 30 dias após a compra

## Licença e termos de uso

- Este squad pode ser usado para uso pessoal ou da sua empresa
- A licença é válida para **uma única conta do Claude** — não pode ser usada em múltiplas contas
- O link de acesso ao repositório é gerado automaticamente e é de **uso único**: depois de clonado, não pode ser repassado ou reutilizado em outro lugar
- Replicar o squad em outras contas ou compartilhar o acesso pode resultar em banimento da conta e não há garantia de funcionamento correto fora do uso pretendido

---

## Como o Diego Design resolve imagem (sem gastar crédito à toa)

Diego segue uma ordem de prioridade fixa antes de gerar qualquer imagem via IA, justamente para
evitar custo desnecessário:

1. **Acervo próprio** (`assets/posts-finalizados/`) — suas fotos reais, custo zero.
2. **Banco de imagens gratuito** (Pexels, via skill `stock-images`) — fotos livres de uso
   comercial, custo zero.
3. **Geração via IA** (Nano Banana/Gemini) — **só** quando as duas primeiras não resolvem, e só
   com a sua confirmação explícita, porque essa etapa consome créditos pagos.

### Como ativar o banco de imagens gratuito (recomendado, sem custo)

Passo 1 — Crie sua chave de API gratuita
Acesse [pexels.com/api](https://www.pexels.com/api/), faça login/cadastro e gere sua API key.
Não pede cartão de crédito.

Passo 2 — Configure a chave no seu ambiente

macOS/Linux:

```bash
export PEXELS_API_KEY="sua_chave_aqui"
```

Windows (PowerShell):

```powershell
$env:PEXELS_API_KEY="sua_chave_aqui"
```

Adicione a linha ao seu arquivo de perfil do shell (`.zshrc`, `.bashrc` ou similar) ou configure
como variável de ambiente do sistema no Windows, pra não precisar repetir a cada sessão.

Passo 3 — Reinicie o Claude Code para que ele reconheça a nova variável de ambiente.

Com isso configurado, Diego já busca fotos gratuitas automaticamente sempre que o acervo próprio
não cobrir a necessidade da peça, antes de considerar qualquer geração paga.

### Como ativar a geração de imagens via IA (opcional, tem custo)

Só é necessário se você quiser essa opção como último recurso — o squad funciona perfeitamente
sem ela, usando só acervo próprio + banco de imagens gratuito.

Passo 1 — Crie sua chave de API gratuita
Acesse aistudio.google.com/apikey
Faça login com sua conta Google
Clique em Create API key
Copie a chave gerada (começa com AIza...) e guarde em um lugar seguro

⚠️ Sua chave de API é pessoal, como uma senha. Não compartilhe publicamente nem cole em prints ou grupos.

Passo 2 — Configure a chave no seu ambiente

macOS/Linux:

```bash
export GEMINI_API_KEY="sua_chave_aqui"
```

Windows (PowerShell):

```powershell
$env:GEMINI_API_KEY="sua_chave_aqui"
```

Passo 3 — Reinicie o Claude Code

Feche e abra o Claude Code novamente para que ele reconheça a nova variável de ambiente.

Passo 4 — Teste

Peça ao squad para gerar uma imagem de teste, por exemplo:

Diego, gere uma imagem de teste de um post para Instagram, estilo minimalista, cores azul e branco

Diego só vai gerar via IA depois de confirmar com você que o acervo próprio e o banco de imagens
gratuito não resolveram — se tudo estiver certo, a imagem será gerada nessa etapa.

Dúvidas frequentes

Preciso pagar pela API do Pexels? Não — o plano gratuito é permanente, sem cartão de crédito, com
limite generoso de requisições por hora.

Preciso configurar o Gemini/Nano Banana? Não é obrigatório. Sem essa chave configurada, Diego
simplesmente avisa quando uma peça precisaria de geração via IA e explica que a etapa não está
disponível, sem travar o resto do pipeline.

Preciso pagar pela API do Gemini, se eu ativar? O Google oferece um nível gratuito com um limite de gerações por dia/mês, suficiente para uso moderado. Se seu volume de conteúdo for alto, pode ser necessário migrar para um plano pago do Google AI Studio.

Posso usar outro banco de imagens gratuito (Unsplash, Pixabay) em vez do Pexels? Sim — a lógica é a mesma, só troca o endpoint/chave no script da skill `stock-images`. Se precisar de ajuda com isso, é só chamar no suporte.

Posso usar outro gerador de imagem (ChatGPT/GPT Image) em vez do Nano Banana? Sim, é possível trocar a ferramenta configurada — se precisar de ajuda com isso, é só chamar no suporte.

Minha chave parou de funcionar, o que fazer? Gere uma nova chave no site correspondente (Pexels ou Google AI Studio) e repita o passo de configuração.

Precisa de ajuda? Se você adquiriu o plano com suporte (30 dias), entre em contato pelos canais combinados na compra.

Feito por [Toral](https://alltoral.netlify.app/) · Diretor criativo, 12+ anos em branding e liderança criativa
