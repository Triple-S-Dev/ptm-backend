const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    locationArea: {
      type: String,
      required: true
    },
    participant: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    activities: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Event = mongoose.model('Event', eventSchema)

module.exports = Event