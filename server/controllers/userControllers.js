import Jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import logger from "../utils/logger.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { product } from "../models/product.js";
import { getDataUri } from "../middlewares/fileuri.js";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
import { cart } from "../models/cart.js";
import { order } from "../models/Order.js";


export const userRegister = catchAsyncError(async (req, res) => {
  logger.info(`UserController | User registration in progress for user.`);

  let { name, email, password ,role} = req.body;



  if(!name || !email || !password || !role){
     
    return res.status(200).json({
      message: "Input Required",
      status: true,
    });
  }



  let user = await User.findOne({ email });

  if (user) {
    return res.status(200).json({
      message: "User Already Exits",
      status: true,
    });
  }

  password = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password,
    role
  });

  const token = Jwt.sign({ id: user._id }, process.env.JWT);

  const option = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.status(200).cookie("token", token, option).json({
    success: true,
    message: "Registration successfully",
    user,
  });
  logger.info(`UserController | User registration is successful for user.`);
});

export const userLogin = catchAsyncError(async (req, res, next) => {
  logger.info(`UserController | User Login in progress for user.`);

  const { email, password } = req.body;

  
  if(!email || !password){
     
    return res.status(200).json({
      message: "Input Required",
      status: true,
    });
  }

  let user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler("User Not Exits", 404));
  }

  const check = await bcrypt.compare(password, user.password);

  if (!check) {
    return next(new ErrorHandler("Check password", 404));
  }
  const token = Jwt.sign({ id: user._id }, process.env.JWT);

  const option = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.status(200).cookie("token", token, option).json({
    success: true,
    message: "User login successfully",
    user,
  });
  logger.info(`UserController | User Login is Successful for user.`);
});

export const userProfile = catchAsyncError((req, res) => {
  logger.info(`UserController | User Profile in progress for user.`);

  res.status(200).json({
    success: true,
    user: req.user,
  });

  logger.info(`UserController | get Profile is successful for user.`);
});

export const userProfileupate = catchAsyncError(async (req, res) => {
  logger.info(`UserController | User UpdateProfile in progress for user.`);

  const name = req.body.name;
  try {
    const user = await User.findById(req.user._id);

    user.name = name;

    await user.save();

    res.status(201).json({
      success: true,
      message: "profile updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
  logger.info(`UserController | User UpdateProfile is Successful for user.`);
});

export const userChangepassword = catchAsyncError(async (req, res) => {
  logger.info(`UserController | User Changepassword in progress for user.`);

  const id = req.user._id;
  const newpassword = req.body.newpassword;

  const password = await bcrypt.hash(newpassword, 10);

  const user = await User.findById(id);

  await User.findOneAndUpdate({ _id: id }, { $set: { password: password } });

  user.save();

  res.status(201).json({
    success: true,
    user: user,
    message: "password updated successfully",
  });

  logger.info(`UserController | User Changepassword is Successful for user.`);
});

export const userLogout = catchAsyncError((req, res) => {
  logger.info(`UserController | User Logout in progress for user.`);

  const option = {
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.status(201).cookie("token", null, option).json({
    success: true,
    message: "user logout successfully",
  });
  logger.info(`UserController | User Logout is Successful for user.`);
});





export const AddProduct=catchAsyncError(async (req,res,next)=>{
  
  logger.info(`UserController | Adding Product in progress for user.`);

         const {product_name,price,category} =req.body;


         if(!product_name  || !price || !category){
     
          return res.status(200).json({
            message: "Input Required",
            status: true,
          });
        }

        let product_img=req.file;
        
        if(!product_img){
     
          return res.status(200).json({
            message: "Input Required",
            status: true,
          });
        }

         const fileUri=getDataUri(product_img);

         const cloudSecret = await cloudinary.v2.uploader.upload(fileUri.content, {
           folder: process.env.CLOUDINARY_AVATAR_PATH,
         });
       
         product_img=cloudSecret.secure_url;

         const Create_prduct=await product.create({
          product_name,
          price,
          category,
          product_img
          
       })


         res.status(201).json({
          message:"Product added Successfully",
          status:true
         })
})

export const AllProduct=catchAsyncError(async(req,res,next)=>{
        
       const allproduct=await product.find({});

       res.status(201).json({
          allproduct:allproduct,
          status:true
       })
})

export const ProductByCategory=catchAsyncError(async(req,res,next)=>{

  const category=req.params.category;

  const allproduct=await product.find({category:category});

  res.status(201).json({
     allproduct:allproduct,
     status:true
  })
})

export const AddCartProduct=catchAsyncError(async(req,res,next)=>{

  const { id } = req.body;

  
        const productData = await product.findOne({ _id: id });
        const { product_name, price, category, product_img, _id } = productData;
        const user=req.user._id;

        


  const data = { user: user, product_id: _id};

        const CheckCart=await cart.findOne(data)


        if(CheckCart){
          return res.status(200).json({
            message: "Already Exits",
            status: true,
          });
        }


      let product_id=_id;

        const item = await cart.create({
            user,
            product_id,
            product_name,
            price,
            category,
            product_img
        });

        

  


  res.status(201).json({
     message:"Product Added to Cart",
     status:true
  })
})



export const CartProduct=catchAsyncError(async(req,res,next)=>{

  const uid=req.user._id;

  const cart_product = await cart.find({ user: uid });

  res.status(201).json({
    cart_product:cart_product,
     status:true
  })
  
})


export const DeleteCartProduct=catchAsyncError(async(req,res,next)=>{

  const uid=req.user._id;

  const product_id =req.params.product_id;

  const data = { user: uid, product_id: product_id };


  const filter = await cart.findOne(data);

await filter.deleteOne();

  res.status(201).json({
    message:"Product Removed",
     status:true
  })
  
})

export const PlaceOrder=catchAsyncError(async(req,res,next)=>{

      const {product_id,customerName, mobileNumber,address,payment,city,state, country, pincode}=req.body;
    
      const user=req.user._id;

      const product_data=await product.findById(product_id)

      let product_name=product_data.product_name;
      let price=product_data.price;

      const orderitem=await order.create({
          user,
          product_name,
          customerName,
          mobileNumber,
          address,
          payment,
          city,
          state,
          country,
          pincode,
          price
      })
     
      res.status(201).json({
        message:"Order Placed Successfully",
        status:true
      })
})


export const OrderProduct=catchAsyncError(async(req,res,next)=>{



  const uid=req.user._id;

  const order_product = await order.find({ user: uid });

  res.status(201).json({
    order_product:order_product,
     status:true
  })
  
})