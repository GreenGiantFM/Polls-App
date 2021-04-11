const express = require('express')
const multer = require('multer')
const path = require('path')
const DjHuntCntrl = require('../controllers/djhunt-controller')

const router = express.Router()

// hasSession
const hasSession = (req, res, next) => {
    if (req.session.username)
        next();
    else
        res.redirect('/DJHunt') // not sure with this yet, have to test
}

// multer, storage.array('name-of-input', maxNumberOfUploads)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads/djhunt')
    }, 
    filename: (req, res, cb) => {
        const { originalname } = file
        const ext = path.extname(originalname)
        cb(null, `${Date.now()}-${originalname}${ext}`)
    }
})

const upload = multer({ storage })

router.post('/DjHunt', hasSession, DjHuntCntrl.createDjHunt)
router.put('/DjHunt/:id', upload.fields([{ name: 'photo' }, { name: 'stinger' }]), DjHuntCntrl.updateDjHunt)
router.delete('/DjHunt/:id', hasSession, DjHuntCntrl.deleteDjHunt)
router.get('/DjHunt/:id', DjHuntCntrl.getDjHuntById)
router.get('/All-DjHunt', DjHuntCntrl.getAllDjHunt)

module.exports = router