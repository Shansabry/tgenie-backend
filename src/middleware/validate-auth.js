const jwt = require('jsonwebtoken');

function authKeyVerification(authKey) {
  if (authKey === undefined) {
    return next(new Error('User not authorized to use endpoint'));
  }

  try {
    const decodedToken = jwt.verify(authKey, process.env.JWT_KEY);

    return decodedToken;
  } catch (error) {
    throw error;
  }
}

function getAuthToken(req) {
  try {
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(' ')[1];

    return authToken;
  } catch (error) {
    throw new error;
  }
}

function authenticate(req) {
  try {
    const authToken = getAuthToken(req);
    const decodedToken = authKeyVerification(authToken);

    const payload = {
      id: decodedToken.id,
      name: decodedToken.name,
      email: decodedToken.email,
      department: decodedToken.department,
    };
    return payload;
  } catch (error) {
    throw error;
  }
}

module.exports = function (req, res, next) {
  try {
    const payload = authenticate(req);

    req.data = payload;
  } catch (error) {
    return res.status(401).send({
      status: '401',
      message: 'unauthorised'
    });
  }
  next();
}
