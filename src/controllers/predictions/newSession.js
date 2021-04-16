const _ = require('lodash');
const { Session } = require('../../models/session');

const newSession = async (req, res) => {
  const userId = req.data.id;
  const session = new Session({
    userId: userId,
    active: true
  });
  const savedData = await session.save();

  return res.status(200).json({ result: savedData._id, error: null });
};

module.exports = { newSession };