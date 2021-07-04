const mongoose = require('mongoose');
const dbName = "petshelter"
mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the petshelter database"))
    .catch(err => console.log("Something went wrong when connecting to the petshelter database", err));