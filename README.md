# TESTE MAGAZORD

O sistema permite o cadastro de pessoas e contatos, sendo que cada pessoa pode ter vários contatos;

## Tecnologias Utilizadas
- PHP 8.1.10
- Next.JS v14
- Postgres
- Doctrine
- Slima Framework
- Docker

## Como rodas o projeto

Será necessário criar uma base de dados com o nome `magazord`

Para rodar o projeto, é necessário executar o comando abaixo, que irá instalar todas as dependências do sistema.
```
docker-compose up
```

Para caso der erro, será necessário executar a api manualmente.
Estando no diretório maga-back, e certificando-se que a base está criada, executar os seuingtes comandos.
```
composer install
```
php bin/doctrine.php orm:schema-tool:create

O PostgresSQL será exposto na porta `5432` e a aplicação será exposta na porta `3000`.

Portanto, para acessar o front-end da aplicação, basta acessar o endereço
`http://localhost:3000`


## API

A api para consulta dos dados está esposta no endereço `http://localhost:8000`

## Front-end

O front-end é composto por um menu lateral o qual terá dois menus, "Pessoas" e "Contatos".

O sistema conta com essas duas página para a listagem de pessoas e contatos.
Conta com o CRUD completo para eles, sendo possivel visualizar, criar, alterar e deletar.