const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      reuired: true,
    },
    description: {
      type: String,
      reuired: true,
    },
    date: {
      type: String,
      reuired: true,
    },
    locationArea: {
      type: String,
      reuired: true,
    },
    participant: {
      type: Number,
      reuired: true,
      default: 0,
    },
    image: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventImage',
        reuired: true,
      },
    ],
    activities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity',
        reuired: true,
        default: null,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
