

const mongoose = require('mongoose')

const url = `mongodb+srv://pride:prideProject@cluster0.gzf3lkz.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    dbName:'prideDB',
    useNewUrlParser: true,
}
const db= async ()=>{
    mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
}
module.exports={db}