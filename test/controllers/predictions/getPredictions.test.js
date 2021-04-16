const request = require('supertest');
const { app } = require('../../../app');
const { Session } = require('../../../src/models/session');

it('should get predictions', async () => {
  const session = await Session.create({ userId: 'jason-d', active: true });

  const response = await request(app)
    .post(`/api/v1/agent/session/${session._id}/completions`)
    .set('Authorization', `bearer ${global.signin()}`)
    .send({ query: "Hel" })
    .expect(200);

  expect(response.body[0].result.completions.length).toEqual(2);
});

it('should return error if session is invalid', async () => {

  await request(app)
    .post(`/api/v1/agent/session/6078b89cd1cc6d005b407657/completions`)
    .set('Authorization', `bearer ${global.signin()}`)
    .send({ query: "Hello" })
    .expect(404);
});
