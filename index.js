const mongoose = require('mongoose');
const { app } = require('./app');

const start = async () => {

  try {
    process.env.JWT_KEY = 'testjwt';
    await mongoose.connect('mongodb://localhost:27017/typegenie-user-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  } catch (err) {
    console.log(err);
  }

  const port = 8000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}!!!!`);
  });
}

start();
