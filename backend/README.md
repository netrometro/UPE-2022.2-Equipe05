## Como rodar o servidor

Instale as dependências:

```bash
npm install
```

Certifique-se que o docker esteja rodando:

```bash
docker-compose up -d
```

Após isso, se há alterações no schema do prisma, realize uma nova migração:

```bash
npx prisma migrate dev --name nome_da_migracao
```

Finalmente, inicie o server:

```bash
npm start
```
