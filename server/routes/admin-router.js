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
    else {
        console.log(req.session.token)
        res.redirect('/admin')
    }
}

// multer, storage.array('name-of-input', maxNumberOfUploads)


const djhuntStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext === 'jpeg' || ext === 'jpg' || ext === 'png')
            cb(null, "./public/uploads/djhunt/images")
        else
            cb(null, "./public/uploads/djhunt/audio")
            
    }, 
    filename: (req, file, cb) => {
        const { originalname } = file
        const ext = path.extname(originalname)
        cb(null, `${originalname}-${Date.now()}${ext}`)
    }
})

// .single(FORMNAME)
const djhuntUpload = multer({storage: djhuntStorage })

router.get('/home', hasSession, (req, res) => res.redirect('/admin/home/hitlist'))
router.get('/home/hitlist', hasSession, (req, res) => res.sendFile( path.resolve(__dirname + '/../views/admin/admin_hitlist.html') ))
router.get('/home/dj-hunt', hasSession, (req, res) => {

    console.log('testing get');
    res.sendFile( path.resolve(__dirname + '/../views/admin/admin_djhunt.html') )
})

router.post('/home/dj-hunt', hasSession,  djhuntUpload.fields([{ name: 'picture_path', maxCount: 1 }, { name: 'stinger_path', maxCount: 1 }]), (req, res) => {
    /*
    const fileName = req.file != null ? req.file.picture_path : null;
    console.log(fileName);
    */
   
    console.log('testing post');
    console.log(req.files);
    console.log(req.body);
    
})

router.post('/DjHunt', hasSession, DjHuntCntrl.createDjHunt)
router.post('/Hitlist', hasSession, HitlistCntrl.createHitlist)
router.put('/DjHunt', djhuntUpload.fields([{ name: 'picture_path' }, { name: 'stinger_path' }]), DjHuntCntrl.addDJ)
router.put('/Hitlist/:id', HitlistCntrl.updateHitlist)
router.delete('/Hitlist/:id', hasSession, HitlistCntrl.deleteHitlist)
router.delete('/DjHunt/:id', hasSession, DjHuntCntrl.deleteDjHunt)
router.get('/DjHunt/:id', DjHuntCntrl.getDjHuntById)
router.get('/Hitlist/:id', HitlistCntrl.getHitlistById)
router.get('/All-DjHunt', DjHuntCntrl.getAllDjHunt)
router.get('/All-Hitlist', HitlistCntrl.getAllHitlist)

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/admin')
})
module.exports = router