const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0
  },
  full: {
    type: String,
    required: true
    
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
   
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)