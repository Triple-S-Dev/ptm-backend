const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema(
  {
    activityPhoto: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ActivityPhoto',
        reuired: true,
      },
    ],
    activityDescription: {
      type: String,
      reuired: true,
    },
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;
