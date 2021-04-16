const express = require('express');
const userController = require('../controllers/user/getUser');
const authenticate = require("../middleware/validate-auth");

const router = express.Router();

const getUser = router.get(`/api/v1/deployment`, authenticate, userController.getUser);

module.exports = { getUser };