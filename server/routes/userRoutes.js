import express from "express";
import {
  AddProduct,
  AllProduct,
  ProductByCategory,
  UpdateProfile,
  userChangepassword,
  userLogin,
  userLogout,
  userProfile,
  userProfileupate,
  userRegister,
  userprofileDelete,
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

// router.route("/updateprofile").put(isAuthenticatedUser,UpdateProfile); todo

// router.route("/changepassword/:id").put(isAuthenticatedUser, userChangepassword);




export default router;
