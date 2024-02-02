import mongoose from "mongoose";


const productschema=mongoose.Schema({

      product_name:{
         type:String,
         required:true
      },
      description: {
        type: String,
        required: true,
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
        // required:true
      }
})

export const product=mongoose.model('product',productschema)