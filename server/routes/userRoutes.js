import express from "express";
import {
  AddCartProduct,
  AddProduct,
  AllProduct,
  CartProduct,
  DeleteCartProduct,
  OrderProduct,
  PlaceOrder,
  ProductByCategory,
  userChangepassword,
  userLogin,
  userLogout,
  userProfile,
  userProfileupate,
  userRegister,
} from "../controllers/userControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(userRegister);

router.route("/login").post(userLogin);

router.route("/logout").get(isAuthenticatedUser, userLogout);


router.route("/profile")
.get(isAuthenticatedUser, userProfile)
.put(isAuthenticatedUser, userProfileupate)

router.route("/changepassword").put(isAuthenticatedUser,userChangepassword);

router.route("/add_product").post(isAuthenticatedUser,singleUpload,AddProduct)

router.route("/allproduct").get(isAuthenticatedUser,AllProduct)

router.route("/category/:category").get(isAuthenticatedUser,ProductByCategory);

router.route("/addtocart").post(isAuthenticatedUser,AddCartProduct)

router.route("/cartproduct").get(isAuthenticatedUser,CartProduct)

router.route("/deleteproduct/:product_id").delete(isAuthenticatedUser,DeleteCartProduct)


router.route("/placeorder").post(isAuthenticatedUser,PlaceOrder)

router.route("/allorders").get(isAuthenticatedUser,OrderProduct)

// router.route("/changepassword/:id").put(isAuthenticatedUser, userChangepassword);




export default router;
