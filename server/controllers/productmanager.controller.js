const Productmanager = require('../models/productmanager.model');
module.exports.getAllProductmanager = (req, res) => {
    console.log("Get all products");

    Productmanager.find({})
        .then((allProductmanager) => {
            console.log(allProductmanager);
            res.json(allProductmanager);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
};

module.exports.createProductmanager = (req, res) => {
    console.log("New product manager");
    console.log(req.body);
    Productmanager.create(req.body)
        .then((newProductmanager) => {
            console.log(newProductmanager);
            res.json(newProductmanager);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
};

module.exports.getOneProductmanager = (req, res) => {
    console.log("Single Product");
    console.log(req.params.id);
    Productmanager.findById(req.params.id)
        .then((OneProductmanager) => {
            console.log(OneProductmanager);
            res.json(OneProductmanager);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
};


module.exports.updateProductmanager = (req, res) => {
    console.log("Update product manager");
    console.log(req.params.id);
    console.log(req.body);
    Productmanager.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

        .then((updateProductmanager) => {
            console.log(updateProductmanager);
            res.json(updateProductmanager);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
};

module.exports.deleteProductmanager = (req, res) => {
    console.log("Delete product");
    console.log(req.params.id);

    Productmanager.findByIdAndDelete(req.params.id)
        .then((deleteProductmanager) => {
            console.log(deleteProductmanager);
            res.json(deleteProductmanager);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
};

