import express from "express";
import { getAllProducers, updateProducer } from "./updateProducer.js";

let producerRouter = express.Router();

producerRouter.get("/all", async(req, res)=>{
    try {
        let producers = await getAllProducers();
        return res.status(200).json({data:producers});
    } catch (error) {
        return res.status(500).json({message:error});
    }
})

producerRouter.post("/add", async(req, res)=>{
    try {
        let producerDetails = req.body;
        let updateToProducercollection = await updateProducer(producerDetails);
        return res.status(200).json({msg:updateToProducercollection});
    } catch (error) {
        return res.status(500).json({message:error});
    }
})
export default producerRouter;