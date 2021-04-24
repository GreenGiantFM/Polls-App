const mongoose = require('mongoose')

const rtSchema = new mongoose.Schema({
    dj_name: {
        type: String,
        required: true
    },
    actual_name: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    stinger_path: String,
    spotify_link: {
        type: String,
        required: true
    },
    picture_path: String,
    vote_count: {
        type: Number,
        default: 0
    },
    facebook: String,
    twitter: String,
    spotify: String
    
})

const DjHuntSchema = new mongoose.Schema({
    radio_talents: [rtSchema],
    start_date: Date,
    end_date: Date
})

const DjHunt = mongoose.model('djhunt', DjHuntSchema)

module.exports = DjHunt;