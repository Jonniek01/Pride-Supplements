const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send("Pride supplements")
})
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));