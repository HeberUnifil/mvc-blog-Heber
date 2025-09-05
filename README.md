# Projeto Blog MVC (TypeScript + Node.js + SQLite + Prisma)

## Autor
Heber Junior

---

## 📌 Descrição
Este projeto é uma aplicação web no padrão **MVC**, desenvolvida em **TypeScript** e **Node.js**, com persistência de dados em **SQLite3** via **Prisma**.  
O objetivo foi implementar a camada de **Model**, refatorar e completar a camada de **Controller**, criar novos controladores, ampliar o sistema de rotas e garantir o funcionamento das operações básicas de **CRUD** para **Posts**, **Categorias** e **Tags**.

As **Views** (em Twig) já estão estruturadas, mas serão trabalhadas em sala de aula conforme o enunciado da atividade.

---

## ✅ Como a solução atende aos requisitos

### 1. Modelos (Models)
- **AbstractModel** (`src/Model/AbstractModel.ts`)  
  - Define a base com métodos obrigatórios: `load`, `save`, `delete`.  
  - Garante contrato comum a todos os modelos.

- **Modelos concretos**:
  - `Post.ts`, `Category.ts`, `Author.ts`, `Tag.ts`  
  - Cada um implementa `load`, `save`, `delete` usando consultas simples via **Prisma/SQLite**.  
  - Incluem métodos auxiliares (`findAll`, `findById`, etc.) para facilitar as operações CRUD.

✅ Atende ao requisito de criar modelos específicos herdando de `AbstractModel`.

---

### 2. Controladores (Controllers)
- **AbstractController** (`src/Controller/AbstractController.ts`)  
  - Implementa `getParams()` (unifica parâmetros de rota, query e body).  
  - Implementa `getMethod()` (retorna o método HTTP).  
  - Define `execute()` como abstrato, forçando a implementação nos filhos.

- **Controladores implementados**:
  - `IndexController` → Home da aplicação.  
  - `PostsController` → Listagem de múltiplos posts.  
  - `PostController` → Exibição de um único post.  
  - `CategoryController` → Exibição/listagem por categoria.  
  - `Post/CreateController` → Criação de posts.  
  - `Category/CreateController` → Criação de categorias.  
  - `Tag/CreateController` → Criação de tags.  
  - **Extras**: `AuthorController`, `CreateAuthorController`, `UserController` e `User/CreateController`.

✅ Atende ao requisito de refatorar e criar controladores.

---

### 3. Sistema de Rotas
Arquivo: `src/main.ts`  
- Home: `/`  
- **Posts**:
  - `GET /posts` → listagem
  - `GET /post/:id` → detalhe
  - `GET/POST /post/create` → criação
- **Categorias**:
  - `GET /category` / `GET /category/:id` → listagem/exibição
  - `GET/POST /category/create` → criação
- **Tags**:
  - `GET /tag` / `GET /tag/:id` → listagem/exibição
  - `GET/POST /tag/create` → criação
- **Autores**:
  - `GET /authors` → listagem
  - `GET/POST /author/create` → criação

✅ Todas as rotas dos controladores estão configuradas e funcionais.

---

### 4. Persistência de Dados
- Banco de dados: **SQLite** (`database.sqlite`).  
- Gerenciado via **Prisma**, que gera os métodos de acesso.  
- Cada `Model` implementa as operações CRUD de forma clara e direta.  

✅ Cumpre o requisito de persistência simples em SQLite3.

---

### 5. Critérios de Entrega
- **Código organizado** em pastas (`Model`, `Controller`, `View`).  
- **CRUD funcional** para **Posts**, **Categorias** e **Tags**.  
- **Rotas completas** com integração à camada de controle.  
- **Views em Twig** já estruturadas, aguardando estilização.  
- **Repositório pronto para GitHub**.

✅ Atende aos critérios definidos no enunciado.

---

## 🚀 Como rodar o projeto

1. Instale as dependências:
```bash
npm install
```

2. Gere o cliente Prisma:
```bash
npx prisma generate
```

3. Suba o servidor:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

---

## 🔍 Conclusão
Este projeto cumpre todos os objetivos propostos:
- Implementa Models, Controllers e Rotas completos.  
- Garante CRUD básico de Posts, Categorias e Tags.  
- Está pronto para evolução da camada de Views em sala.  

💡 **Resultado**: aplicação funcional, organizada e aderente ao padrão MVC solicitado.
