import express from "express";
// import { Model } from "mongoose";
import Model from "../models/model.js";

const router = express.Router();

router.post("/post", async(req, res) => {
    console.log(req.body);
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
    });
    console.log(`넘어온 값은 ${JSON.stringify(data)}`)
    try{
        const dataToSave = await data.save(); // 여기서 날아감
        console.log(`저장된 값은 ${JSON.stringify(dataToSave)}`)
        res.status(200).json(dataToSave);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
})
export default router;