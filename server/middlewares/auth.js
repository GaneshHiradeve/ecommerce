import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import logger from "../utils/logger.js";

export const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {

   logger.info('isAuthenticatedUser | running in auth.js',201)

  const { token } = req.cookies;
  if (!token) {
    return next (new ErrorHandler('Login first',404))
  }

  const decoded = jwt.verify(token, process.env.JWT);

  req.user = await User.findById(decoded.id);

  next();

  logger.info('isAuthenticatedUser | running in auth.js completed',201)

});
