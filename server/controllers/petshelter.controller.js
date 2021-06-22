const Petshelter = require('../models/petshelter.model');
module.exports.getAllPetshelter = (req, res) => {
    console.log("Get all pets");

    Petshelter.find({})
        .then((allPetshelter) => {
            console.log(allPetshelter);
            res.json(allPetshelter);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

module.exports.createPetshelter = (req, res) => {
    console.log("New pet shelter");
    console.log(req.body);
    Petshelter.create(req.body)
        .then((newPetshelter) => {
            console.log(newPetshelter);
            res.json(newPetshelter);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};

module.exports.getOnePetshelter = (req, res) => {
    console.log("Single Pet");
    console.log(req.params.id);
    Petshelter.findById(req.params.id)
        .then((OnePetshelter) => {
            console.log(OnePetshelter);
            res.json(OnePetshelter);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};


module.exports.updatePetshelter = (req, res) => {
    console.log("Update pet shelter");
    console.log(req.params.id);
    console.log(req.body);
    Petshelter.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

        .then((updatePetshelter) => {
            console.log(updatePetshelter);
            res.json(updatePetshelter);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};

module.exports.deletePetshelter = (req, res) => {
    console.log("Delete pet");
    console.log(req.params.id);

    Petshelter.findByIdAndDelete(req.params.id)
        .then((deletePetshelter) => {
            console.log(deletePetshelter);
            res.json(deletePetshelter);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};


