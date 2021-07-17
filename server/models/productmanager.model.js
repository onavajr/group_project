const mongoose = require('mongoose');
const ProductmanagerSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: [ true, "Product name is required"],
        minlength: [ 3, "Product name is atlease 3 characters long"]
     },
    producttype: {
        type: String,
        required: [ true, "Product type is required"],
        minlength: [ 3, "Product name is atlease 3 characters long"]

     },
    productdescription: {
        type: String,
        required: [ true, "Description required"],
        minlength: [ 3, "Product name is atlease 3 characters long"]
    },
    firstskill: {
        type: String,
        required: [ true, "Select Items"],
        enum: [
            'Accessories',
            'Product Warranty',
            'Discount',
            'Free Shipping',
            'Customer Support'
        ]
    },
    secondskill: {
        type: String,
        required: [ true, "Select Items"],
        enum: [
            'Accessories',
            'Product Warranty',
            'Discount',
            'Free Shipping',
            'Customer Support'
        ]
    },
    thirdskill: {
        type: String,
        required: [ true, "Select Items"],
        enum: [
            'Accessories',
            'Product Warranty',
            'Discount',
            'Free Shipping',
            'Customer Support'
        ]
    },
    productimage: {
        type: String },

    likes: {
        type: Number,
    }
}, { timestamps: true });

module.exports = mongoose.model('Productmanager', ProductmanagerSchema);