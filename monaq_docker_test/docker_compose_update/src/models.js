const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dummySchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});



const dummyList = mongoose.model('dummy', dummySchema);

module.exports = dummyList;
