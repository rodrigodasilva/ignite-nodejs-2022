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