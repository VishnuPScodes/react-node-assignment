import express from 'express'
import dotenv from 'dotenv'
import connect from "./configs/db.js";
import dataController  from './controllers/data.controller.js'
import cors from 'cors'
const app=express();
app.use(cors());
app.use(express.json())
dotenv.config()
app.use('/data',dataController)
const port=process.env.PORT || 5005
app.listen(port,async (req,res)=>{
    try {
        await connect()
        console.log(`listening to the port ${port}`)
    } catch (error) {
        console.log(error)
    }
})