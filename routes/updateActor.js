import { client } from "../mongo-connection/connection.js";


export function getAllActors(){
    return client.db("imdb").collection("actors").find().toArray();
}
export async function updateActor(data){
    let findActor = await findByName(data.Name);
    if(!findActor){
    return client.db("imdb").collection("actors").insertOne(data);
    }
    else{
        return "aleady added"
    }
}
function findByName(name){
    return client.db("imdb").collection("actors").findOne({Name:name});
}