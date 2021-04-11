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
    cover_picture: {
        data: Buffer,
        contentType: String
    },
    vote_count: Number,
    
})

const HitlistSchema = new mongoose.Schema({
    songs: [songSchema],
    start_date: Date,
    end_date: Date
})

const Hitlist = mongoose.model('hitlist', HitlistSchema)

module.exports = Hitlist;