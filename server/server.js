const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require("express-session")
const cors = require('cors')
const PORT = process.env.PORT || 8000;
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
app.get('/dj-hunt', (req, res) => res.sendFile( __dirname + '/views/djhunt.html'))
app.get('/hitlist', (req, res) => res.sendFile( __dirname + '/views/hitlist.html'))
app.get('/admin', (req, res) => res.sendFile( __dirname + '/views/admin/admin_login.html'))
app.use('/admin', adminRouter)
app.use('/admin', userRouter)
app.use('/api', hitlistRouter)
app.use('/api', djHuntRouter)
app.use((req, res) => res.redirect('https://www.greengiantfm.com/404'))

if (process.platform === "win32") {
    var rl = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.on("SIGINT", function () {
      process.emit("SIGINT");
    });
  }
  
  process.on("SIGINT", function () {
    //graceful shutdown
    process.exit();
  });

app.listen(PORT, () => console.log(`Live at port ${PORT}`))