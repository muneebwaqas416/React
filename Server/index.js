const {MongoClient} = require('mongodb')
var url = 'mongodb://localhost:27017'
const databse = 'blog';
const client = new MongoClient(url);

const express = require('express')
const app = express();

async function getData(){
    let result = await client.connect();
    let db = result.db(databse)
    let collection = db.collection('blogs')
    let response = await collection.find({}).toArray();
    collection.updateMany(
        {},
        { $set: {"Comment": []} },
        
    )
    console.log("response from get data"+response)
}

getData();

app.listen(8000);