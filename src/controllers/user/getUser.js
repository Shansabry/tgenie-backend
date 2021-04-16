const _ = require('lodash');

const users = require("../../utils/testdata/user");

const getUser = async (req, res) => {
  const userId = req.data.id;
  const user = _.find(users, (user) => {
    return user.id === userId;
  });

  if (!user) {
    return res.status(404).send([{ status: 404, message: 'Data not found' }]);
  }

  return res.status(200).json({ result: { ...user }, error: null });
};

module.exports = { getUser };