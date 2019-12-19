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
app.get("/api/tables", function(req, res){
    return res.json(available)
})
app.get("/api/waiting", function(req, res){
    return res.json(waiting)
})
app.post("/api/tables", function(req, res){
    var newTable = req.body
    console.log(available.length)
    if(available.length <= 4){
        available.push(newTable)
        console.log(available)
    }
    else{
        waiting.push(newTable)
        console.log(waiting)
    }
    res.json(newTable)

})

app.listen(PORT, function(){
    console.log('Bro, I totes am listening to port ' + PORT)
})