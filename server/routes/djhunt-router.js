const express = require('express')
const DjHuntCntrl = require('../controllers/djhunt-controller')

const router = express.Router()

router.post('/DjHunt', DjHuntCntrl.createDjHunt)
router.put('/DjHunt/:id', DjHuntCntrl.updateDjHunt)
router.delete('/DjHunt/:id', DjHuntCntrl.deleteDjHunt)
router.get('/DjHunt/:id', DjHuntCntrl.getDjHuntById)
router.get('/All-DjHunt', DjHuntCntrl.getAllDjHunt)

module.exports = router