import { ObjectId } from "mongodb";
import { client } from "../mongo-connection/connection.js";

export function getAllReviews(){
    return client.db("imdb").collection("reviews").find().toArray();
}

export function addReview(data){
    return client.db("imdb").collection("reviews").insertOne(data);
}

export function editReview(id, data){
    return client.db("imdb").collection("reviews").updateOne({_id: new ObjectId(id)}, {$set:{movieName:data.movieName, date:data.date, userAddedActor:data.userAddedActor, userAddedProd:data.userAddedProd, moviePlot:data.moviePlot, imageData:data.imageData, rating:rating}});
}

export function deleteReview(id){
    return client.db("imdb").collection("reviews").deleteOne({_id: new ObjectId(id)})
}

export function getReviewById(id){
    return client.db("imdb").collection("reviews").findOne({_id: new ObjectId(id)})
}