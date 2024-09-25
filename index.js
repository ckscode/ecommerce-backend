import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/Config.js";
import dataRouter from "./Routes/DataRoute.js";
import cors from 'cors'
import bodyParser from "body-parser";
const app = express();
dotenv.config();
connectDB()
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
      origin:['http://localhost:5173','https://cks-ecommerce.vercel.app']
}))

app.use('/api',dataRouter)

app.listen(process.env.PORT,(req,res)=>{
      console.log(`app is listening`)
})