# GRAPHQL API 
GraphQL API Desenvolvida com Node.Js

Client: https://github.com/tiagolpires/graphql-client
## Inicie o projeto
Instale as dependências
```
npm install
```
Inicialize o Docker
```
docker-compose up
```
Acesse Apollo Server Sandbox
http://localhost:3001/
## Docker
* `docker-compose up` - Inicializa o servidor
* `docker-compose down` - Desliga o servidor
* `docker-compose up --build` - Liga rescrevendo o container
* `docker exec -it graphql-api bash` - Acessa o shell do servidor
* `docker ps` - Lista todos os containers ativos
## Built With
- [GraphQL](https://graphql.org/) - Query Language
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Build GraphQL server
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - Manage MongoDB Data
- [Node.Js](https://nodejs.org/en/) - Build
