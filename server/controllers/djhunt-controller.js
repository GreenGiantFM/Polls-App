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

const editDj = async(req, res) => {

    console.log("text")
    console.log(req.params.id)
    const {dj_name, actual_name, tagline, facebook, instagram, twitter, youtube_video, spotify_playlist} = req.body
    console.log(req.body)
    console.log(req.files)

    let djnewEdit = {dj_name: dj_name, actual_name: actual_name, tagline: tagline, stinger_path: req.files['stinger_path'][0].filename, spotify_playlist: spotify_playlist, youtube_video: youtube_video, picture_path: req.files['picture_path'][0].filename, facebook: facebook, twitter: twitter, instagram: instagram}

    let djID = req.params.id

    try {
        
        const djHunt = await DjHunt.find({});
        let indexDJ = djHunt[0].radio_talents.findIndex(x => x._id.toString() === djID);
        console.log(indexDJ)
        djHunt[0].radio_talents[indexDJ] = djnewEdit;

        djHunt[0]
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

    }

    catch (error) {

        console.log(error)


    }

}

const addDJ = async (req, res) => {

    const {dj_name, actual_name, tagline, facebook, instagram, twitter, youtube_video, spotify_playlist} = req.body
    console.log(req.files['picture_path'][0].filename, req.files['stinger_path'][0].filename);
    console.log(dj_name, actual_name, tagline, facebook, instagram, twitter, youtube_video, spotify_playlist);

    

    let newDj = {dj_name: dj_name, actual_name: actual_name, tagline: tagline, stinger_path: req.files['stinger_path'][0].filename, spotify_playlist: spotify_playlist, youtube_video: youtube_video, picture_path: req.files['picture_path'][0].filename, facebook: facebook, twitter: twitter, instagram: instagram}

    try {
        const djHunt = await DjHunt.find({});
        djHunt[0].radio_talents.push(newDj);
        djHunt[0]
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

    } catch (error) {

        console.log(error)

    }
    
    console.log(djHunt[0], newDj);

    // console.log("BODY: " + req.body)
    // console.log("FILE: " + req.file)
    // await DjHunt.find({}, (err, djHunts) => {
    //     if (err) {
    //         console.log(err)
    //         return res.status(400).json({ success: false, error: err })
    //     }
    //     if (!djHunts.length) {
    //         console.log('not found')
    //         return res
    //             .status(404)
    //             .json({ success: false, error: `DjHunt not found` })
    //     }

    //     const payload = req.body
    //     payload.picture_path = req.file.path
    //     djHunts[0].radio_talents.push(payload)

    //     djHunts[0]
    //         .save()
    //         .then(() => {
    //             return res.status(200).json({
    //                 success: true,
    //                 id: djHunt._id,
    //                 data: djHunt,
    //                 message: 'DjHunt updated!',
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             return res.status(404).json({
    //                 error,
    //                 message: 'DjHunt not updated!',
    //             })
    //         })

    // }).catch(err => console.log(err))
}

const deleteDjAll = async (req, res) => {

    console.log('testing put request for delete all')

    try {
        const djHunt = await DjHunt.find({});

        djHunt[0].radio_talents = [];

        console.log("radio talents:",djHunt[0].radio_talents)
        console.log("radio talents:",djHunt[0])

        djHunt[0]
            .save()
            .then(() => {
                console.log('update sucess:',djHunt);
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
            

    } catch (error) {

        console.log(error)

    }

}

const deleteDjSelected = async (req, res) => {
    let dataSelected = req.body;

    
    //console.log('testing put request for delete selected', dataSelected.selectedData, dataSelected.selectedData[0]);
    

    try {
        const djHunt = await DjHunt.find({});

        let fullDj = djHunt[0].radio_talents;
        let excludedDjs = fullDj;
        let deletedIds = dataSelected.selectedData;


        excludedDjs = excludedDjs.filter((rt)=>{
            let id = rt._id.toString();
            return !deletedIds.includes(id)
        })
        
        //console.log("radio talents ex:",excludedDjs)
        
        djHunt[0].radio_talents = excludedDjs;
 
        djHunt[0]
            .save()
            .then(() => {
                console.log('update sucess:',djHunt);
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

            
            

    } catch (error) {

        console.log(error)

    }

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
    addDJ,
    deleteDjAll,
    deleteDjSelected,
    editDj
}