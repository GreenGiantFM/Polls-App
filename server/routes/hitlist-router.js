const express = require('express')
const multer = require('multer')
const path = require('path')
const HitlistCntrl = require('../controllers/hitlist-controller')

const router = express.Router()

// hasSession
const hasSession = (req, res, next) => {
    console.log(req.session)
    if (req.session.token)
        next();
    else
        res.send('not logged in') // not sure with this yet, have to test
}

// multer, storage.array('name-of-input', maxNumberOfUploads)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads/hitlist')
    }, 
    filename: (req, res, cb) => {
        const { originalname } = file
        const ext = path.extname(originalname)
        cb(null, `${Date.now()}-${originalname}${ext}`)
    }
})

const upload = multer({ storage })

router.post('/Hitlist', HitlistCntrl.createHitlist)
router.put('/Hitlist/:id', upload.single('photo'), HitlistCntrl.updateHitlist)
router.delete('/Hitlist/:id', hasSession, HitlistCntrl.deleteHitlist)
router.get('/Hitlist/:id', HitlistCntrl.getHitlistById)
router.get('/All-Hitlist', HitlistCntrl.getAllHitlist)

module.exports = router