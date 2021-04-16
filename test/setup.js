
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const dbHost = 'mongodb://localhost:27017/partner-portal-test-db';

beforeAll(async () => {
  process.env.JWT_KEY = 'testjwtkey';
  await mongoose.connect(dbHost, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();
  collections.forEach(async (collection) => {
    await collection.deleteMany({});
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

global.signin = () => {
  const payload = {
    id: 'jason-d',
    email: 'json@abcorp.com',
    department: "refund",
    active: true
  };
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '10000s' });
  return token;
};
