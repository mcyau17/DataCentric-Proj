const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = 4000

app.get("/", (req, res) => {
    res.send("Local server running...");
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

app.get("/managers", (req, res) => {
    res.sendFile(__dirname + "/proj2023MongoDB.json");
  });

app.get("/managers/:id", (req, res) =>{
    var manager = data.find((manager) =>{
        if(manager.id == req.params.id){
            return student
        }
    })
    if(manager != undefined){
        res.send(manager)
    }else {
        res.send("Error: " + req.params.id + " Not Found")
    }
})

app.get("/stores",(req,res) => {
    res.send("");
})

app.get("/stores",(req,res) => {
    res.send("");
})

app.get("/stores/edit",(req,res) => {
    res.send("");
})

app.get("/products",(req,res) => {
    res.send("");
})
x