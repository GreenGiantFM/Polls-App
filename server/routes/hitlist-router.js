const express = require('express')
const HitlistCntrl = require('../controllers/hitlist-controller')

const router = express.Router()

router.put('/Hitlist/:id', HitlistCntrl.updateHitlist)
router.get('/All-Hitlist', HitlistCntrl.getAllHitlist)

module.exports = router