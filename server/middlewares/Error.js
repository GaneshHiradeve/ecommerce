import logger from "../utils/logger.js";

export const ErrorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error.";
  
    
  
    logger.error(`${err.statusCode} | ${err.message}`);
  
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  };