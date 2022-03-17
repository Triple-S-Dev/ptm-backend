const mongoose = require('mongoose');

const ActivityPhotoInput = new mongoose.Schema({
  imageUrl: {
    type: String,
    reuired: true,
  },
});

const ActivityPhoto = mongoose.model('ActivityPhoto', ActivityPhotoInput);

module.exports = ActivityPhoto;
