/* eslint-disable no-unused-vars */
const {connectDB} = require('../config/config')
const Product = require ('../models/Product')
const ObjectId = require('mongodb').ObjectID
const Code = require ('../models/Code')


connectDB()
module.exports = {
    getProducts: async(req, res)=>{
        const {page, limit}= req.params
            if(page <1) {
                return res.json({"error" : true,"message" : "invalid page number"});
                }
                else{
                    const query={
                        skip:limit*(page-1),
                        limit:limit
                    }
                try{
                    const result = await Product.find({},{},query)
                    res.status(200).json(result)
                    }
                    catch(err){
                        res.status(500).json({
                            "Error":err.message
                        })
                    }
        
          }
    },
    createProduct: async(req, res)=>{
        const {identifier,
             name, 
             price,
             image,
              description, 
              category}=req.body;
              try {
                //create and store user
                const result =  await Product.create({
                    identifier:identifier,
                    name:name,
                    price:price,
                    image:image,
                    description:description,
                    category:category
                });
                res.json(result);
            }
            catch(err){
                res.status(500).json({'message':err.message})
            }
    

    },
    getProduct: async(req, res)=>{
        const {id}= req.params
                try{
                    const result = await Product.find({_id : ObjectId(id)})
                    res.status(200).json(result)
                    }
                    catch(err){
                        res.status(500).json({
                            "Error":err.message
                        })
                    }
        
    },
    getProductByCode: async(req, res)=>{
        const {code}= req.params;
        try{
            Code.find({skincode:code}).then(async (result)=>{
                const items= await Product.find({identifier:result[0].products})
                res.json(items)

            })
            .catch((err)=>{
                res.status(500).json({
                    "Error":err.message
                })
                })
            

        }
        catch(err){
            res.status(500).json({
                "Error":err.message
            })

        }

    },
    search: async (req, res)=>{
        const {query}=req.params;
        console.log("searching", query)

        try{
            const items= await Product.find({ $text: { $search: query } });
            res.json(items)

        }
        catch(err){
            res.status(500).json({
                "Error":err.message
            })

        }


    }

}