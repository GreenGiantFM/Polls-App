const express = require('express')
const HitlistCntrl = require('../controllers/hitlist-controller')

const router = express.Router()

router.post('/Hitlist', HitlistCntrl.createHitlist)
router.put('/Hitlist/:id', HitlistCntrl.updateHitlist)
router.delete('/Hitlist/:id', HitlistCntrl.deleteHitlist)
router.get('/Hitlist/:id', HitlistCntrl.getHitlistById)
router.get('/All-Hitlist', HitlistCntrl.getAllHitlist)

module.exports = router