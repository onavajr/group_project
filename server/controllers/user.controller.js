const User = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res) => {
        const newUser = new User(req.body);
        console.log(newUser);

        newUser.save()
            .then(()=>{
                console.log("successful registration");
                res.json({
                    message: "Successfully registered",
                    user: newUser,
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    }
}