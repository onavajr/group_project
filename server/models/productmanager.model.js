const mongoose = require('mongoose');
const ProductManagerSchema = new mongoose.Schema({
    product: {type: String},
    price: {type: String},
    description: {type: String}
},{timestamp:true});
module.exports = mongoose.model('ProductManager', ProductManagerSchema);