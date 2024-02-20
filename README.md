# TESTE MAGAZORD

O sistema permite o cadastro de pessoas e contatos, sendo que cada pessoa pode ter vários contatos;

## Tecnologias Utilizadas
- PHP 8.1.10
- Next.JS v14
- Postgres
- Doctrine
- Slim Framework

## Como rodar o projeto

Será necessário criar uma base de dados com o nome `magazord`

Para rodar o projeto, é necessário instalar as dependências e executar o servidor.

No diretório `/maga-back`, executar os segunites comandos no terminal,
```
composer install
```
```
php bin/doctrine.php orm:schema-tool:create
```
```
php -S localhost:8000 index.php
```

No diretório `/maga-front`, executar os segunites comandos no terminal,
```
npm install
```
```
npm run dev
```

O PostgresSQL será exposto na porta `5432` e a aplicação será exposta na porta `3000`.

Portanto, para acessar o front-end da aplicação, basta acessar o endereço
`http://localhost:3000`


## API

A api para consulta dos dados está esposta no endereço `http://localhost:8000`

## Front-end

O front-end é composto por um menu lateral o qual terá dois menus, "Pessoas" e "Contatos".

O sistema conta com essas duas página para a listagem de pessoas e contatos.
Conta com o CRUD completo para eles, sendo possivel visualizar, criar, alterar e deletar.