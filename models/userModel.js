import { mongoose } from "mongoose";   

const userSchema = new mongoose.userSchema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://pbs.twimg.com/profile_images/1198838933624250370/uty9EaXd_400x400.png'
    },
},{timestamps: true})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)

export default Dataset;