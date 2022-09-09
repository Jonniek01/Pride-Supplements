const {db} = require('../config/config')
module.exports = {
    getProducts: async(req, res)=>{
        db().then(()=>{
            res.send('reading products')

        })

    },
    createProduct: async(req, res)=>{
        db().then(()=>{
            res.send('Posting product')

        })

    },
}