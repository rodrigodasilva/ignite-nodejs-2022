## Criando container docker
> docker run -d --name postgresql -e POSTGRESQL_PASSWORD=admin -e POSTGRESQL_USERNAME=admin -e POSTGRESQL_DATABASE=delivery -p 5432:5432 bitnami/postgresql:latest



## Comandos prisma
- Iniciar prisma 
> yarn prisma init

- Rodar migrations
> yarn prisma migrate dev

- Formatar 
> yarn prisma format

- Atualizar sem fazer migração
> yarn prisma generate



## Como Rodar
1. Instale as dependências
> yarn

2. Configure as variáveis em ambiente no arquivo .env
3. Inicie o banco de dados

4. Rode a aplicação
> yarn dev