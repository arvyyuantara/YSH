'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/server');

test('greet uses provided name', () => {
  assert.strictEqual(greet('Arvy'), 'Hello, Arvy! This is the AI Software House pilot API.');
});

test('greet defaults to world when no name given', () => {
  assert.strictEqual(greet(), 'Hello, world! This is the AI Software House pilot API.');
});
