const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
// const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xrjhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
      await client.connect();
      const database = client.db("ema-jhon");
      const haiku = database.collection("haiku");
     
    //   console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);

app.get('/', (req,res)=>{
    res.send("in ema-jhon backend server")
});
app.listen(port, ()=>{
    console.log('running my ema-jhon server with port', port);
});