const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  updateTime: {
    type: Date,
    default: Date.now
  },
})

StorySchema.pre('save', next => {
  const now = new Date();
  if (!this.updateAt) {
    this.updateTime = now;
  }
  next();
})

const Story = mongoose.model('Story', StorySchema);

module.exports = Story;