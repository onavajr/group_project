const ProductManager = require('../models/productmanager.model');
module.exports.productmanager = (req, res) => {
    res.json({
        message: "Product Manager"
    })
}

module.exports.createProductManager = (req, res) => {
    const {
        product,
        price,
        description
    } = req.body;
    ProductManager.create({
        product,
        price,
        description
    })
        .then(productmanager => res.json(productmanager))
        .catch(err => res.json(err))
}