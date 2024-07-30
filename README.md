# Lista de Filmes

O componente `Lista_Filmes` é uma aplicação React simples para gerenciar uma lista de filmes, onde é possível adicionar, editar e remover filmes, bem como atribuir uma nota a cada um deles. 

## Descrição

Este componente permite ao usuário:
- Adicionar novos filmes com uma nota.
- Editar filmes existentes.
- Remover filmes da lista.

Os filmes e suas notas são armazenados no estado do componente e exibidos em uma lista.

## Estrutura do Projeto

- **Componente `Lista_Filmes`**: O componente principal que gerencia a lista de filmes e fornece a interface do usuário para adicionar, editar e remover filmes.
- **Estilos**: O componente utiliza um arquivo CSS externo para estilizar o layout.

## Funcionalidades

1. **Adicionar Filme**
   - O usuário pode inserir o nome e a nota do filme nos campos de entrada e clicar em "Adicionar Filme" para adicionar o filme à lista.
   
2. **Editar Filme**
   - Ao clicar em "Editar" ao lado de um filme na lista, os campos de entrada são preenchidos com os dados do filme selecionado e o botão muda para "Atualizar Filme". Isso permite a atualização dos detalhes do filme.

3. **Remover Filme**
   - O botão "Remover" ao lado de cada filme permite que o usuário exclua o filme da lista.

## Instalações
   - `npx create-react-app {nome do repositório}`: Criar o repositório utilizando a biblioteca React
   - `npm install --global surge`: Instala o surge para públicação do site
