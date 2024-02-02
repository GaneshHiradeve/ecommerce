import express from 'express';
import { config } from 'dotenv';
import router from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import { ErrorMiddleware } from './middlewares/Error.js';
import bodyParser from 'body-parser';
import cors from 'cors';


config({
    path:'./config/.env'
})

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.use(router)
app.use(ErrorMiddleware)


export default app;



