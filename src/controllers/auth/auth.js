const _ = require('lodash');
const jwt = require('jsonwebtoken');

const users = require("../../utils/testdata/user")

const signIn = async (req, res) => {
  return _tokengenerator(req.params.userId, res);
};

const renewToken = async (req, res) => {
  return _tokengenerator(req.data.id, res);
};

const _tokengenerator = async (userId, res) => {
  if (!userId) {
    return res.status(400).send([{ status: 400, message: 'Please provide user-id' }]);
  }
  const authorisedUser = _authorisedUser(userId);

  if (!authorisedUser) {
    return res.status(401).send([{ status: 401, message: 'Invalid credential' }]);
  }

  const token = _generateToken(authorisedUser);

  return res.status(200).json({ result: _formResult(token), error: null });
}

const _authorisedUser = (userId) => {
  return _.find(users, (user) => {
    return user.id === userId && user.metadata.active;
  });
};

const _generateToken = (userData) => {
  return jwt.sign(
    {
      id: userData.id,
      name: userData.metadata.name,
      email: userData.metadata.email,
      department: userData.metadata.department,
    },
    process.env.JWT_KEY,
    { expiresIn: '10000s' }
  );
}

const _formResult = (token) => {
  const decodedToken = jwt.verify(
    token,
    process.env.JWT_KEY
  )
  return { token, expiresAt: new Date(decodedToken.exp * 1000) };
}

module.exports = { signIn, renewToken };