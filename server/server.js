const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended:true,}))
require('./config/petshelter.config');
require('./routes/petshelter.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );