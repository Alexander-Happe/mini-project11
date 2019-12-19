var express = require('express');
var path = require('path')

var PORT = 3000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var available = []
var waiting = []
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
})
app.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, "reservations.html"))
})
app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
})
app.get("/api/available", function(req, res){
    return res.json(available)
})
app.post("/api/available", function(req, res){
    var newTable = req.body
    console.log(newTable)
})

app.listen(PORT, function(){
    console.log('Bro, I totes am listening to port ' + PORT)
})