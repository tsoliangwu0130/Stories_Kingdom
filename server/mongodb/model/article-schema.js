const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  outline: {
    type: String
  },
  draftContent: {
    type: String
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  updateTime: {
    type: Date,
    default: Date.now
  },
  close: {
    type: Boolean,
    default: false
  }
})

const postUpdateTime = require('./middleware/postUpdateTime.js')
articleSchema.post('findOneAndUpdate', postUpdateTime);

const Article = mongoose.model('Article', articleSchema)

module.exports = Article;