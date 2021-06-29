const Hitlist = require('../models/Hitlist')

const createHitlist = (req, res) => {
    const { body } = req

    if (!body) {
        console.log('no body')
        return res.status(400).json({
            success: false,
            error: 'You must provide a body',
        })
    }

    const hitlist = new Hitlist(body);

    if (!hitlist) {
        console.log('something went wrong')
        return res.status(400).json({ success: false, error: `Something went wrong` })
    }

    hitlist
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: hitlist._id,
                data: hitlist,
                message: 'Hitlist created!',
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error,
                message: 'Hitlist not created!',
            })
        })
}

const deleteHitlist = async (req, res) => {
    await Hitlist.findOneAndDelete({ _id: req.params.id }, (err, hitlist) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }

        if (!hitlist) {
            console.log('no Hitlist')
            return res
                .status(404)
                .json({ success: false, error: `Hitlist not found` })
        }

        return res.status(200).json({ success: true, data: hitlist })
    }).catch(err => console.log(err))
}

const getAllHitlist = async (req, res) => {
    await Hitlist.find({}, (err, hitlists) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }
        if (!hitlists.length) {
            return res
                .status(204)
                .json({ success: false, error: `Hitlist not found` })
        }
        return res.status(200).json({ success: true, data: hitlists })
    }).catch(err => console.log(err))
}

const getHitlistById = async (req, res) => {
    try {
        const hitlist = await Hitlist.findById({ _id: req.params.id })
        
        return res.status(200).json({ success: true, data: hitlist })
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({ msg: "Hitlist not found" })
    }
}

const updateHitlist = async (req, res) => {

    if (!req.body) {
        console.log(`no body`)
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Hitlist.findOne({ _id: req.params.id }, (err, hitlist) => {
        if (err) {
            console.log(err)
            return res.status(404).json({
                err,
                message: 'Hitlist not found!',
            })
        }

        const { start_date, end_date, songs } = req.body;

        if (start_date && end_date) {
            hitlist.start_date = start_date;
            hitlist.end_date = end_date;
        }

        hitlist.songs = songs;
        hitlist
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: hitlist._id,
                message: 'Hitlist updated!',
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(404).json({
            error,
            message: 'Hitlist not updated!',
            })
        })
    });    
}

const deleteSongsAll = async (req, res) => {

    console.log('testing put request for delete all')

    try {
        const hitList = await Hitlist.find({});

        hitList[0].songs = [];

        //console.log("radio talents:",djHunt[0].radio_talents)
        //console.log("radio talents:",djHunt[0])

        hitList[0]
            .save()
            .then(() => {
                console.log('update sucess:',hitList);
                return res.status(200).json({
                    success: true,
                    id: hitList._id,
                    data: hitList,
                    message: 'Hitlist updated!',
                })
            })
            .catch(error => {
                console.log(error)
                return res.status(404).json({
                    error,
                    message: 'Hitlist updated!',
                })
            })
            

    } catch (error) {

        console.log(error)

    }

}

module.exports = {
    createHitlist,
    deleteHitlist,    
    getAllHitlist,
    getHitlistById,
    updateHitlist,
    deleteSongsAll
}