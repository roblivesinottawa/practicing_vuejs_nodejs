const express = require('express')
const app = express()
// const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const bucketListItemRoutes = require('./routes/api/bucketListItems')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rob_admin:jMCB8u@hWY5wb@cluster0.cgebv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(
    uri, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false, });
client.connect(err => {

const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});





app.use('/api/bucketListItems', bucketListItemRoutes)
app.get('/', (req, res) => res.send("Hello from Node"))

app.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`))