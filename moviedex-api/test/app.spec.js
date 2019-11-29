'use strict';

const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('App', () => {
  it('GET / responds with 200 "Hello, world!"', () => {
    request(app)
      .get('/')
      .auth('API_TOKEN', 'def62b54-1153-11ea-9a9f-362b9e155667')
      .expect(200, 'Hello, world!');
  });
});
