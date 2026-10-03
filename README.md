# Fantasy Medieval Idle RPG

Um protótipo melhorado de RPG 2D idle com temática medieval-fantástica, pensado para servir como base de um jogo completo em navegador.

## O que foi melhorado

- classes base: Mago, Arqueiro, Guardião e Espadachim
- ramificações de evolução por linha de classe
- time de até 5 heróis
- combate automático infinito
- progresso por andares e inimigos escalados
- drops aleatórios de itens com raridades e atributos
- árvore de habilidades permanentes por ouro/cristais
- pet com raridade e evolução
- velocidade de marcha: 1x, 5x e 10x
- persistência em localStorage
- interface mais polida e organizada
- renderização em canvas com visual de pixel art

## Como executar

1. Abra a pasta do projeto em um navegador.
2. Acesse `index.html` diretamente.
3. O jogo carrega automaticamente o estado salvo na sessão do navegador.

Opcionalmente, você pode rodar em um servidor local:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Estrutura

- `index.html` — layout principal
- `style.css` — visual do jogo
- `game.js` — lógica do sistema, combate, classes, drops, pets, salvamento

## Próximos passos recomendados

- adicionar menu de início
- criar mais monstros por tipo e bioma
- melhorar arte com sprites maiores e animações
- adicionar loja, crafting, reforço de equipamentos, item sets
- implementar múltiplos mapas e bosses por andar
- separar classes por especializações e build de time
- criar sistema de quests e ranking

## Observação

Este projeto é um protótipo jogável, com foco em reproducão da mecânica principal e base visual. Ele já é funcional para testar a ideia e evoluir rapidamente.
