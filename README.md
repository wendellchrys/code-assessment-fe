# code-assessment-fe (TODO List)

![TODO List](https://i.ibb.co/cSTcyhgP/todo-list.png)

Este projeto é uma aplicação de lista de tarefas construída com React, Vite, Tailwind e Zustand. A aplicação permite que o usuário cadastre itens na lista de "Para fazer" e os mova facilmente para a lista de "Concluído" com um simples clique no checkbox. Além disso, há a funcionalidade de arrastar e soltar, permitindo que o usuário reorganize os itens em ambas as listas de forma intuitiva.

## **Destaques**

- **Arrastar e Soltar**: A funcionalidade de arrastar e soltar (drag-and-drop) permite que os itens sejam reorganizados dentro de suas listas ou movidos entre as listas de "Para fazer" e "Concluído".
- **Testes Unitários**: Cobertura completa de todos os componentes, páginas e utils.
- **Tailwind**: A interface é totalmente responsiva, projetada com Tailwind CSS para garantir uma experiência fluida em dispositivos móveis e desktop.
- **Zustand**: O Zustand é usado para gerenciar o estado de forma simples e eficiente, sem a complexidade de outros gerenciadores de estado.

## **Página:**

### Home
Página inicial onde o usuário pode encontrar a aplicação com todos os componentes renderizados.

## **Componentes**

### AddTask
Componente responsável por adicionar um novo ítem (tarefa) na lista "Para fazer".

### CompletedTasks
Componente responsável por exibir a lista de ítens (tarefas) que já estão em "Concluído".

### DraggableTask
Componente responsável por controlar a área e as funcionalidades de arrastar e soltar.

### CheckLogo
Componente responsável por exibir o ícone de logo.

### Navbar
Componente Header da aplicação, com um ícone simulando a logo e um texto "TODO List"

### ToDoList
Componente responsável por exibir a lista de ítens (tarefas) que estão em "Para fazer".

### Checkbox
Componente responsável por renderizar o checkbox personalizado.


## **store**

### useToDoStore
Hook responsável por gerenciar todo o contexto da aplicação com o Zustand, adicionar, alterar e remover os estados.


## **Utils**

### storage
Funções `loadFromStorage` e `saveToStorage` responsáveis por carregar e salvar dados no localStorage do navegador.


## **Inicialização do Projeto**

Para inicializar o projeto, siga os passos abaixo:

1. **Clone o repositório:**
```bash
git clone https://github.com/wendellchrys/code-assessment-fe.git
```

2. **Navegue até o diretório do projeto:**
```bash
cd code-assessment-fe
```

3. **Instale as dependências:**
```bash
pnpm install
```

4. **Inicie o servidor de desenvolvimento:**
```bash
pnpm dev
```
