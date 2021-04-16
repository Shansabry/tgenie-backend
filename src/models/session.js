const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  userId: { type: String },
  active: { type: Boolean }
}, {
  timestamps: true
});

const Session = mongoose.model('session', sessionSchema);

module.exports = { Session };