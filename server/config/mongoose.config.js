const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://galunggong18:passwordispassword123@cluster0.o4tmo.mongodb.net/productmanager?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Established a connection to the database"))
    .catch(err => console.log("connection error oh no!",
err));