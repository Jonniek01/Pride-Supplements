const {connectDB} = require('../config/config')
const Product = require ('../models/Product')

connectDB()
module.exports = {
    getProducts: async(req, res)=>{
        connectDB().then(async ()=>{
            res.send('reading products')

        })

    },
    createProduct: async(req, res)=>{
        const {identifier,
             name, 
             price,
              description, 
              category}=req.body;
              console.log(identifier)
              try {
                //create and store user
                const result =  await Product.create({
                    identifier:identifier,
                    name:name,
                    price:price,
                    description:description,
                    category:category
                });
                console.log("result",result);
                res.json(result);
            }
            catch(err){
                res.status(500).json({'message':err.message})
            }
    

    },
}