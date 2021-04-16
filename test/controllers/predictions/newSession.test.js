const request = require('supertest');
const { app } = require('../../../app');

it('should create a new session', async () => {
  const response = await request(app)
    .post('/api/v1/agent/session')
    .set('Authorization', `bearer ${global.signin()}`)
    .expect(200);
  expect(response.body.result).toBeDefined()
});