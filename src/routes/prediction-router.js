const express = require('express');
const newSessionController = require('../controllers/predictions/newSession');
const getPredictionsController = require('../controllers/predictions/getPredictions');
const authenticate = require("../middleware/validate-auth");

const router = express.Router();

const newSession = router.post(`/api/v1/agent/session`, authenticate, newSessionController.newSession);
const getPredictions = router.post(`/api/v1/agent/session/:sessionId/completions`, authenticate, getPredictionsController.getPredictions);

module.exports = { newSession, getPredictions };