## Getting Started

Projeto integrador I da univesp

Necessário as ferramentas: docker/docker-compose, npm e nodejs

Para rodar a aplicação localmente em modo desenvolvedor:
```bash
docker compose up -d

npx drizzle-kit migrate

npm run dev
```

Abrirá um servidor na porta [http://localhost:3000](http://localhost:3000), abra no browser.