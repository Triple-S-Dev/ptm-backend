const mongoose = require('mongoose')

const activityPhoto = new mongoose.Schema(
  {
  imageUrl: {
    type: String,
    required: true
  }
}
)

const activitySchema = new mongoose.Schema(
  {
    activityPhoto: {
      type: [activityPhoto],
      required: true
    },
    activityDescription: {
      type: String,
      required: true
    }
  }
)

const Activity = mongoose.model('Activity', activitySchema)

module.exports = Activity