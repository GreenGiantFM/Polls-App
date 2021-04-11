const DjHunt = require('../models/DjHunt')

const createDjHunt = (req, res) => {
    const body = req.body

    if (!body) {
        console.log('no body')
        return res.status(400).json({
            success: false,
            error: 'You must provide a DjHunt',
        })
    }

    const djHunt = new DjHunt(body)

    if (!djHunt) {
        console.log('something went wrong')
        return res.status(400).json({ success: false, error: `Something went wrong` })
    }

    djHunt
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: djHunt._id,
                message: 'DjHunt created!',
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error,
                message: 'DjHunt not created!',
            })
        })
}

const updateDjHunt = async (req, res) => {
    const body = req.body

    if (!body) {
        console.log('no body')
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    DjHunt.findOne({ _id: req.params.id }, (err, djHunt) => {
        if (err) {            
            return res.status(404).json({
                err,
                message: 'DjHunt not found!',
            })
        }

        const { start_date, end_date, radio_talents } = req.body;

        if (start_date && end_date) {
            djHunt.start_date = start_date;
            djHunt.end_date = end_date;
        }
        
        djHunt.radio_talents = radio_talents

        djHunt
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: djHunt._id,
                    data: djHunt,
                    message: 'DjHunt updated!',
                })
            })
            .catch(error => {
                console.log(error)
                return res.status(404).json({
                    error,
                    message: 'DjHunt not updated!',
                })
            })
    })
}

const deleteDjHunt = async (req, res) => {
    await DjHunt.findOneAndDelete({ _id: req.params.id }, (err, djHunt) => {
        if (err) {
            console.log(`error 400: ${err}`)
            return res.status(400).json({ success: false, error: err })
        }

        if (!djHunt) {            
            console.log(`error 404: ${djHunt}`)
            return res
                .status(404)
                .json({ success: false, error: `djHunt not found` })
        }

        return res.status(200).json({ success: true, data: djHunt })
    }).catch(err => console.log(err))
}

const getDjHuntById = async (req, res) => {
    await DjHunt.findOne({ _id: req.params.id }, (err, djHunt) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }

        if (!djHunt) {
            console.log('not found')
            return res
                .status(404)
                .json({ success: false, error: `DjHunt not found` })
        }
        return res.status(200).json({ success: true, data: djHunt })
    }).catch(err => console.log(err))
}

const getAllDjHunt = async (req, res) => {
    await DjHunt.find({}, (err, djHunts) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ success: false, error: err })
        }
        if (!djHunts.length) {
            console.log('not found')
            return res
                .status(404)
                .json({ success: false, error: `DjHunt not found` })
        }
        return res.status(200).json({ success: true, data: djHunts })
    }).catch(err => console.log(err))
}

module.exports = {
    createDjHunt,
    updateDjHunt,
    deleteDjHunt,
    getAllDjHunt,
    getDjHuntById,
}