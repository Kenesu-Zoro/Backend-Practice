import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    
    name : {
        type: String,
        required: true
    },
    
    quantity : {
        type: Number,
        default : 0,
        required : true
    },

    price : {
        type: Number,
        required : true
    },

    image : {
        type : String,
        required : false
    }

    
}, {timestamps: true})

export const Product = mongoose.model("Product",ProductSchema)