import express from 'express';

const router=express.Router();

import Data from '../models/data.model.js'

router.get('/',async (req,res)=>{
    try {
        const data=await Data.find().lean().exec(); //lean will convert mongoose object to json object!
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }   
})

router.post('/',async (req,res)=>{
    try {
            const posts=await Data.create(req.body)
            res.send(posts);
    } catch (error) {
        res.send(error)
    }
})

export default router;
