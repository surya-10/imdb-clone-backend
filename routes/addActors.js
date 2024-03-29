import express from "express";
import { getAllActors, updateActor } from "./updateActor.js";

let actorRouter = express.Router();

actorRouter.get("/all", async(req, res)=>{
    try {
        let data = await getAllActors();
        return res.status(200).json({data:data});
    } catch (error) {
        return res.status(500).json({message:error});
    }
})
actorRouter.post("/add", async(req, res)=>{
    try {
        let actorDetails = req.body;
        let updateToActorcollection = await updateActor(actorDetails);
        return res.status(200).json({msg:updateToActorcollection});
    } catch (error) {
        return res.status(500).json({message:error});
    }
})

export default actorRouter;