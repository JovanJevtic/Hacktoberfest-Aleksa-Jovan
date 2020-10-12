const mongoose = require('mongoose');

// Data scheme
const posts_scheme = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  img_src: {
    data: Buffer,
    contentType: String,
  }     
});

module.exports = mongoose.model('Post', posts_scheme);