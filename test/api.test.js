'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../src/server');

test('GET /health returns ok', async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;
  try {
    const res = await fetch(`http://127.0.0.1:${port}/health`);
    const body = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(body.status, 'ok');
  } finally {
    server.close();
  }
});

test('GET /api/greet?name=X returns greeting', async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;
  try {
    const res = await fetch(`http://127.0.0.1:${port}/api/greet?name=Arvy`);
    const body = await res.json();
    assert.strictEqual(res.status, 200);
    assert.match(body.message, /Arvy/);
  } finally {
    server.close();
  }
});

test('GET /api/version returns package version', async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;
  try {
    const res = await fetch(`http://127.0.0.1:${port}/api/version`);
    const body = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(body.version, require('../package.json').version);
  } finally {
    server.close();
  }
});
