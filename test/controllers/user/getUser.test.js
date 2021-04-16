const request = require('supertest');
const { app } = require('../../../app');

it('responds with a cookie when supplied valid credentials', async () => {
  const response = await request(app)
    .get('/api/v1/deployment')
    .set('Authorization', `bearer ${global.signin()}`)
    .expect(200);
  expect(response.body.result.id).toEqual('jason-d');
});