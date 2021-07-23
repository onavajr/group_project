require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true,}))
require('./config/musicland.config');
require('./routes/musicland.routes')(app);
require('./routes/user.routes')(app);
app.listen(process.env.MY_PORT, () => console.log(`Listening on port: ${process.env.MY_PORT}`) );