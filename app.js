

const express = require('express');
const { json } = require('body-parser');
const { signIn, renewToken } = require('./src/routes/auth-router');
const { getUser } = require('./src/routes/user-router');
const { newSession, getPredictions } = require('./src/routes/prediction-router');

const app = express();
app.set('trust proxy', true);

app.use(json());

app.use(signIn);
app.use(renewToken);
app.use(getUser);
app.use(newSession);
app.use(getPredictions);

module.exports = { app };
