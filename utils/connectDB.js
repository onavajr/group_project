import mongoose from 'mongoose'

const connectDB = () => {
    if(mongoose.connection[0].readyState){
        console.log('Connection Success!!')
        return;
    }
    mongoose.connect(process.env.MONGODB_URL, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        UseUnifiedTopology: true
    }, err => {
        if(err) throw err;
        console.log('Connected to database')
    })
}

export default connectDB;