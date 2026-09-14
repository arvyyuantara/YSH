# AI Software House — Pilot App

Minimal Node.js API used as the "pilot project" for milestone M4 of the AI
Software House blueprint: it exists to prove real GitHub PR/CI/staging
integration works end to end, not to be a real product.

- `GET /health` — liveness check, used by the staging health check.
- `GET /api/greet?name=X` — trivial demo endpoint.

```bash
npm install
npm start        # http://localhost:3000
npm run test:unit
npm run test:api
```

CI runs on every push/PR to `develop`, `main`, `release/**` (see
`.github/workflows/ci.yml`).
