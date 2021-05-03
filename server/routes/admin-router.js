const express = require('express')
const multer = require('multer')
const path = require('path')
const HitlistCntrl = require('../controllers/hitlist-controller')
const DjHuntCntrl = require('../controllers/djhunt-controller')

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
const djhuntStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext === 'jpeg' || ext === 'jpg' || ext === 'png')
            cb(null, './uploads/djhunt/images')
        else
            cb(null, './uploads/djhunt/audio')
    }, 
    filename: (req, res, cb) => {
        const { originalname } = file
        const ext = path.extname(originalname)
        cb(null, `${Date.now()}-${originalname}${ext}`)
    }
})

// .single(FORMNAME)
const djhuntUpload = multer({ djhuntStorage })

router.post('/DjHunt', hasSession, DjHuntCntrl.createDjHunt)
router.post('/Hitlist', hasSession, HitlistCntrl.createHitlist)
router.put('/DjHunt/:id', djhuntUpload.fields([{ name: 'photo' }, { name: 'stinger' }]), DjHuntCntrl.updateDjHunt)
router.put('/Hitlist/:id', HitlistCntrl.updateHitlist)
router.delete('/Hitlist/:id', hasSession, HitlistCntrl.deleteHitlist)
router.delete('/DjHunt/:id', hasSession, DjHuntCntrl.deleteDjHunt)
router.get('/DjHunt/:id', DjHuntCntrl.getDjHuntById)
router.get('/Hitlist/:id', HitlistCntrl.getHitlistById)
router.get('/All-DjHunt', DjHuntCntrl.getAllDjHunt)
router.get('/All-Hitlist', HitlistCntrl.getAllHitlist)

module.exports = router