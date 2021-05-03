const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require("express-session")
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const app = express();

const db = require('./db').connection
const userRouter = require('./routes/user-router')
const hitlistRouter = require('./routes/hitlist-router')
const djHuntRouter = require('./routes/djhunt-router')
const adminRouter = require('./routes/admin-router')

// Init middleware
app.use(express.json({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())
app.use(express.static('uploads'))
app.use(express.static('public'))
app.use(express.static('../'))
app.use(express.static('../DJHUNT'))
app.use(session({
    resave: true,
    name: "webadmin",
    saveUninitialized: true,
    secret: require('./db').secretOrKey,
    cookie: {
        maxAge: 60 * 60 * 1000 * 24
    }
}))

// Define routers
app.get('/', (req, res) => res.redirect('/hitlist'))
app.get('/dj-hunt', (req, res) => res.sendFile('C:/Users/Jerick/Desktop/Polls-App/server/views/djhunt.html'))
app.get('/hitlist', (req, res) => res.sendFile('C:/Users/Jerick/Desktop/Polls-App/server/views/main.html'))
app.get('/admin', (req, res) => res.sendFile('C:/Users/Jerick/Desktop/Polls-App/server/views/AdminUserInput.html'))
app.use('/admin', adminRouter)
app.use('/admin', userRouter)
app.use('/api', hitlistRouter)
app.use('/api', djHuntRouter)

app.listen(PORT, () => console.log(`Live at port ${PORT}`))