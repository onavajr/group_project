const Musicland = require('../models/musicland.model');
module.exports.getAllMusicland = (req, res) => {
    console.log("Get all musics");

    Musicland.find({})
        .then((allMusicland) => {
            console.log(allMusicland);
            res.json(allMusicland);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

module.exports.createMusicland = (req, res) => {
    console.log("New music land");
    console.log(req.body);
    Musicland.create(req.body)
        .then((newMusicland) => {
            console.log(newMusicland);
            res.json(newMusicland);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
};

module.exports.getOneMusicland = (req, res) => {
    console.log("Single Music");
    console.log(req.params.id);
    Musicland.findById(req.params.id)
        .then((OneMusicland) => {
            console.log(OneMusicland);
            res.json(OneMusicland);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
};


module.exports.updateMusicland = (req, res) => {
    console.log("Update music land");
    console.log(req.params.id);
    console.log(req.body);
    Musicland.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

        .then((updateMusicland) => {
            console.log(updateMusicland);
            res.json(updateMusicland);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
};

module.exports.deleteMusicland = (req, res) => {
    console.log("Delete music");
    console.log(req.params.id);

    Musicland.findByIdAndDelete(req.params.id)
        .then((deleteMusicland) => {
            console.log(deleteMusicland);
            res.json(deleteMusicland);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
};

