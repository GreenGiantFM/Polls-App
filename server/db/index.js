const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/polls', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, autoIndex: true })
    .then(()=>{console.log('connected to db')})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = {connection: mongoose.connection, secretOrKey: "ggfm-web-management"}

module.exports = db