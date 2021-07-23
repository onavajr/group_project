const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
},{timestamps: true});

UserSchema.virtual("Confirm Password")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);

UserSchema.pre("validate", function(next){
    console.log(this.password);
    console.log(this.confirmPassword)
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Password did not match");
    }
    next();
})

UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
    .then((hashedPassword) =>{
        console.log("password: " + this.password);
        console.log("hashed: " + hashedPassword);
        this.password = hashedPassword;
        next();
    })
})

const User = mongoose.model("User", UserSchema);

module.exports = User;