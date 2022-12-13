
# Exercício de Node.js
<h1 align="center">:file_cabinet: Ignite Lab -Microserviços</h1>

## :memo: Descrição
Projeto criado no evento ignite lab da Rocketseat.

## :books: Funcionalidades


## :books: Regras de negócio


## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para iniciar o projeto:
```
git clone 
```
Instalar o npm
```
npm i
```
Executar o projeto
```
npm run start:dev
```

## :wrench: Histórico de comandos
Iniciando o projeto com Nest.js
```
nest new notifications-services
```
Instalando o prisma como depêndencia de desenvolvimento
```
npm i prisma -D
```
Instalando o prisma/client
```
npm i @prisma/client
```
Configurando o prisma para usar o SQLite
```
npx prisma init --datasource-provider SQLite
```
Criando o modelo do banco de dados atraves do prisma
```
npx prisma migrate dev
```
Comando para vizualizar o banco de dados pelo prisma studio
```
npx prisma studio
```
Instalando class-validator e class-transformer
```
npm i class-validator class-transformer
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

