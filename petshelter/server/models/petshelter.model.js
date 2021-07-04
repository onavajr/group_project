const mongoose = require('mongoose');
const PetshelterSchema = new mongoose.Schema({
    petname: {
        type: String,
        required: [ true, "Pet name is required"],
        minlength: [ 3, "Pet name is atlease 3 characters long"]
     },
    pettype: {
        type: String,
        required: [ true, "Pet type is required"],
        minlength: [ 3, "Pet name is atlease 3 characters long"]

     },
    petdescription: {
        type: String,
        required: [ true, "Description required"],
        minlength: [ 3, "Pet name is atlease 3 characters long"]
    },
    firstskill: {
        type: String,
        required: [ true, "Select Skills"],
        enum: [
            'Sleeping',
            'Eating',
            'Jumping',
            'Flying',
            'Talking',
            'Running',
            'Hunting',
            'Swimming',
            'Running'
        ]
    },
    secondskill: {
        type: String,
        required: [ true, "Select Skills"],
        enum: [
            'Sleeping',
            'Eating',
            'Jumping',
            'Flying',
            'Talking',
            'Running',
            'Hunting',
            'Swimming',
            'Running'
        ]
    },
    thirdskill: {
        type: String,
        required: [ true, "Select Skills"],
        enum: [
            'Sleeping',
            'Eating',
            'Jumping',
            'Flying',
            'Talking',
            'Running',
            'Hunting',
            'Swimming',
            'Running'
        ]
    },
    petimage: {
        type: String },

    likes: {
        type: Number,
    }
}, { timestamps: true });

module.exports = mongoose.model('Petshelter', PetshelterSchema);