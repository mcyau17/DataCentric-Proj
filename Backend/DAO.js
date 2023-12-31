const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:3000')
    .then((client) => {
        db = client.db('managersDB')
        coll = db.collection('managers')
    })
    .catch((error) =>{
        console.log(error.message)
    })