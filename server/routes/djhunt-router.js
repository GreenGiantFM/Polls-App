const express = require('express')
const DjHuntCntrl = require('../controllers/djhunt-controller')

const router = express.Router()

router.put('/DjHunt/:id', DjHuntCntrl.updateDjHunt)
router.get('/All-DjHunt', DjHuntCntrl.getAllDjHunt)

module.exports = router