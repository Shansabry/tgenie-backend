const express = require('express');
const authController = require('../controllers/auth/auth');
const authenticate = require("../middleware/validate-auth");

const router = express.Router();

const signIn = router.get(`/api/v1/deployment/user/:userId/token`, authController.signIn);
const renewToken = router.get(`/api/v1/deployment/user/renew`, authenticate, authController.renewToken);

module.exports = { signIn, renewToken };