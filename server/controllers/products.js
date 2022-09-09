const {db} = require('../config/config')
module.exports = {
    getProducts: async(req, res)=>{
        db().then(
            res.send('Welcome to products API')
            
            )

    },
}