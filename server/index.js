const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { products } = require('./routes/products');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT

app.get('/',products)
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));