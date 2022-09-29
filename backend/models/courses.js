




















const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({
  creatorId: {
    required: true,
    type: String,
  },
  creatorName: {
    required: true,
    type: String,
  },
  courseName: {
    required: true,
    type: String,
  },
  courseDuration: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
})

const Courses = mongoose.model('Data', coursesSchema)

module.exports = { Courses }
