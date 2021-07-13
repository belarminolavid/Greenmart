# Greenmart
## Projeto de Desenvolvimento WEB 2020.2
Pojeto parte 1:
Focado no desenvolvimento de um servidor com API REST, capaz de implemetar funções CRUD para o cliente. Esta versão já esta com armazenamento dos dados com Banco de Dados (utilizando o SGBD PostgreSQL)

O Greenmart tem o objetivo de ser um sistema web de e-commerce de varejo de frutas e vegetais, com o back-end implementado com Node-Express e com front-end (Projeto 2) em uma aplicação React.js.

## Comando para iniciar Servidor
```bash
yarn local up
```

## Comando para popular a Base de Dados

```bash
yarn local:seed
```

## API

Nesta primeira etapa do projeto as seguintes rotas foram implementadas na API do servidor:

### Usuários

1 - Listar Usuários
```bash
GET - http://localhost/api/usuarios/
```
2 - Busca por id
```bash
GET - http://localhost/api/usuarios/:id_user
```
3 - Login
```bash
GET - http://localhost/api/usuarios/:username/:password
```
4 - Cadastrar
```bash
POST - http://localhost/api/usuarios/

    body: {
        "first_name": "Gabriel",
        "last_name": "Belarmino",
        "email": "belarmino@me.com",
        "username": "belarmino",
        "password": "123456"
        }
```
5 - Atualizar Usuário
```bash
PUT - http://localhost/api/usuarios/:id_user

    body: {
        "email": "belarmino@me.com.br",
        "username": "belarmino_1",
        "password": "654321"
        }
```

6 - Excluir usuário por id

```bash
DELETE - http://localhost/api/usuarios/:id_user

```

### Produtos


1 - Listar Produtos
```bash
GET - http://localhost/api/produtos/
```
2 - Busca por id
```bash
GET - http://localhost/api/produtos/:id_product
```
3 - Buscar Produto por Nome
```bash
GET - http://localhost/api/produtos/:product_name/:product_name_2
```

4 - Atualizar produto
```bash
PUT - http://localhost/api/produtos/:id_product

    body: {
        "id_category": 2
        }
```
5 - Remover produto por id
```bash
DELETE - http://localhost/api/produtos/:id_product
```
### Categoria


1 - Listar Categorias
```bash
GET - http://localhost/api/categorias/
```
2 - Listar produtos de uma categoria.
```bash
GET - http://localhost/api/categorias/:id_category
``` 