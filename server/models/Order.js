import mongoose from "mongoose";


const orderschema=mongoose.Schema({

      
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userschema",
        required: true,
      },
      product_name: {
        type:String,
        required: true,
      },
      customerName:{
        type:String,
        required:true
     },
     mobileNumber: {
       type: String,
       required: true,
     },
     address: {
       type: String,
       required: true,
     },
     payment: {
       type:String,
       required: true,
     },
    city:{
       type:String,
       required:true
     },
     state:{
       type:String,
       required:true
     },
     country:{
       type:String,
       required:true
     },
     pincode:{
       type:String,
       required:true
     },
     price:{
      type:String,
      required:true
     }
})

export const order=mongoose.model('order',orderschema)

