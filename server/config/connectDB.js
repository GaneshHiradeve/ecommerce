import mongoose from "mongoose"
import logger from "../utils/logger.js"

export const ConnectDB=()=>{
    mongoose.connect(process.env.MONGODB_URI)
.then(logger.info(`ConnectDB | server is running on port ${process.env.PORT}.`)
)
.catch((err)=>console.log(err))
}