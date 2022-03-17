const mongoose = require('mongoose');

const EventImageInput = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
});

const EventImage = mongoose.model('EventImage', EventImageInput);

module.exports = EventImage;
