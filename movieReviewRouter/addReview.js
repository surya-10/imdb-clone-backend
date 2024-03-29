import express from "express";
import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
import { addReview, deleteReview, editReview, getAllReviews, getReviewById } from "./reviewController.js";

let reviewRouter = express.Router();

          
cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.apiKey, 
  api_secret: process.env.apiSecretKey 
});

reviewRouter.get("/all", async(req, res)=>{
    try {
        let findAll = await getAllReviews();
        return res.status(200).json({data:findAll});
    } catch (error) {
        return res.status(500).json({error:error});
    }
})

reviewRouter.get("/find/:id", async(req, res)=>{
    try {
        let {id} = req.params;
        let findAll = await getReviewById(id);
        return res.status(200).json({data:[findAll]});
    } catch (error) {
        return res.status(500).json({error:error});
    }
})

reviewRouter.post("/add-review", async(req, res)=>{
    try {
        let data = req.body;
        let photoUrl = await cloudinary.uploader.upload(data.imageData);
        data.imageData = photoUrl.url;
        let review = await addReview(data);
        return res.status(200).json({result:review});
        // let addNew = await addReview(data);
    } catch (error) {
        return res.status(500).json({error:error});
    }
});

reviewRouter.put("/edit/:id", async(req, res)=>{
    try {
        let {id} = req.params;
        let data = req.body;
        let updateReview = await editReview(id, data);
        return res.status(200).json({result:updateReview});
    } catch (error) {
        return res.status(500).json({error:error});
    }
})
reviewRouter.put("/edit/new-image/:id", async(req, res)=>{
    try {
        let {id} = req.params;
        let data = req.body;
        let photoUrl = await cloudinary.uploader.upload(data.imageData);
        let updateReview = await editReview(id, data);
        return res.status(200).json({result:updateReview});
    } catch (error) {
        return res.status(500).json({error:error});
    }
})
reviewRouter.delete("/delete/:id", async(req, res)=>{
    try {
        let {id} = req.params;
        let deleteData = await deleteReview(id);
        return res.status(200).json({data:deleteData});
    } catch (error) {
        return res.status(500).json({error:error});
    }
})

export default reviewRouter;