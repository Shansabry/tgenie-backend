const request = require('supertest');
const { app } = require('../../../app');

it('responds with token in successful signin', async () => {
  const response = await request(app)
    .get('/api/v1/deployment/user/jason-d/token')
    .expect(200);
  expect(response.body.result.token).toBeDefined();
});

it('renews a token', async () => {
  const response = await request(app)
    .get('/api/v1/deployment/user/renew')
    .set('Authorization', `bearer ${global.signin()}`)
    .expect(200);
  expect(response.body.result.token).toBeDefined();
});