const mongoose = require('mongoose')

const feedSchema = new mongoose.Schema()

const Feed = mongoose.model('Feed', feedSchema)

module.exports = Feed