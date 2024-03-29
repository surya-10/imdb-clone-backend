import { client } from "../mongo-connection/connection.js";

export async function updateProducer(data){
    let findProducer = await isAdded(data.Name);
    if(!findProducer){
    return client.db("imdb").collection("producers").insertOne(data);
    }
    else{
        return "already added";
    }
}
function isAdded(name){
    return client.db("imdb").collection("producers").findOne({Name:name});
}

export function getAllProducers(){
    return client.db("imdb").collection("producers").find().toArray();
}