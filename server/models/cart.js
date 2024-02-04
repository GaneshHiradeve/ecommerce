import mongoose from "mongoose";


const cartschema=mongoose.Schema({

      
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userschema",
        required: true,
      },
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productschema",
        required: true,
      },
      product_name:{
         type:String,
         required:true
      },
  
      price: {
        type: Number,
        required: true,
      },
      category: {
        type:String,
        required: true,
      },
      product_img:{
        type:String,
        required:true
      }
})

export const cart=mongoose.model('cart',cartschema)