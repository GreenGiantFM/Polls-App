const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    spotify_link: {
        type: String,
        required: true
    },
    picture_path: String,
    vote_count: {
        type: Number,
        default: 0
    }
})

const HitlistSchema = new mongoose.Schema({
    songs: [songSchema],
    start_date: Date,
    end_date: Date,
    qr_code: String
})

const Hitlist = mongoose.model('hitlist', HitlistSchema)

module.exports = Hitlist;