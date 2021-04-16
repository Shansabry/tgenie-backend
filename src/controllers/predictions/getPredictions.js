const _ = require('lodash');
const mongoose = require('mongoose');
const { Session } = require('../../models/session');

const predictions = require("../../utils/testdata/predictions");

const getPredictions = async (req, res) => {
  const session = req.params.sessionId;
  const query = req.body.query;
  if (!mongoose.isValidObjectId(session)) {
    return res.status(400).send([{ status: 400, message: 'Please enter proper session id' }]);
  }

  const savedSession = await Session.findById(mongoose.Types.ObjectId(session));

  if (!savedSession) {
    return res.status(404).send([{ status: 404, message: 'Session not found' }]);
  }

  let completions = [];
  predictions.filter((prediction) => {
    return prediction.message.startsWith(query);
  }).forEach(prediction => {
    completions.push(prediction.message.slice(query.length));
  });
  return res.status(200).send([{ status: 200, result: { completions }, error: null }]);
};

module.exports = { getPredictions };