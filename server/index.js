const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { products } = require('./routes/products');
const { users } = require('./routes/users');
const { images } = require('./routes/images');


const mongoose = require('mongoose')



const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;

app.use('/',products);
app.use('/users',users);
app.use('/images',images);


mongoose.connection.once('open', ()=>{
    console.log('connected to mongoDB')
})
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));