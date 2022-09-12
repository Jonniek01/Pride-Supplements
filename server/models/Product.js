const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    identifier: {
        type:String,
        required:true
    },

    name: {
        type:String,
        required:true
    },
    price : {
        type:Number,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    ingridients: {
        type:String,
        required:true
    },
    category: {
        type: String,
        required:true
    }

});

module.exports=mongoose.model('Product', productSchema);