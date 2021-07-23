const mongoose = require('mongoose');
const MusiclandSchema = new mongoose.Schema({
    concertname: {
        type: String,
        required: [ true, "Music name is required"],
        minlength: [ 3, "Music name is atlease 3 characters long"]
     },
    concertdate: {
        type: String,
        required: [ true, "Music type is required"],
        minlength: [ 3, "Music name is atlease 3 characters long"]

     },
    concertlocation: {
        type: String,
        required: [ true, "Description required"],
        minlength: [ 3, "Music name is atlease 3 characters long"]
    },
    
    concertimage: {
        type: String },

}, { timestamps: true });

module.exports = mongoose.model('Musicland', MusiclandSchema);