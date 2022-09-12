const {connectDB} = require('../config/config')
const User = require ('../models/Product')

connectDB()
module.exports = {
    getProducts: async(req, res)=>{
        connectDB().then(async ()=>{
            res.send('reading products')

        })

    },
    createProduct: async(req, res)=>{
        connectDB().then(()=>{
            res.send('Posting product')

        })

    },
}