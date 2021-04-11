const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const app = express();

const db = require('./db').connection
const userRouter = require('./routes/user-router')
const hitlistRouter = require('./routes/hitlist-router')

// Init middleware
app.use(express.json({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())

// Define routers
app.use('/api', hitlistRouter)
app.use('/user', userRouter)

app.listen(PORT, () => console.log(`Live at port ${PORT}`))