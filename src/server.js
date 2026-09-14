'use strict';
const http = require('http');
const { URL } = require('url');

function greet(name) {
  return `Hello, ${name || 'world'}! This is the AI Software House pilot API.`;
}

function createServer() {
  return http.createServer((req, res) => {
    const { pathname, searchParams } = new URL(req.url, 'http://localhost');
    if (pathname === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok' }));
      return;
    }
    if (pathname === '/api/greet') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: greet(searchParams.get('name')) }));
      return;
    }
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'not_found' }));
  });
}

module.exports = { createServer, greet };

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createServer().listen(port, () => console.log(`pilot app listening on :${port}`));
}
