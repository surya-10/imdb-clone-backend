import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

async function connectToDb(){
    let client = new MongoClient(process.env.connection_str);
    await client.connect();
    console.log("DB connected");
    return client;
}
export let client = await connectToDb();