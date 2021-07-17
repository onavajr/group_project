require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true,}))
require('./config/productmanager.config');
require('./routes/productmanager.routes')(app);
require('./routes/user.routes')(app);
app.listen(process.env.MY_PORT, () => console.log(`Listening on port: ${process.env.MY_PORT}`) );