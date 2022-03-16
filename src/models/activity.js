const mongoose = require('mongoose');

const activityPhoto = new mongoose.Schema({
  imageUrl: {
    type: String,
    reuired: true,
  },
});

const activitySchema = new mongoose.Schema(
  {
    activityPhoto: {
      type: [activityPhoto],
      reuired: true,
    },
    activityDescription: {
      type: String,
      reuired: true,
    },
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
