const express = require('express')

const app = express()

app.get('/', function(req,res){
    res.send("Welcome to my homepage")
})

app.use('/about', function(req,res){
    res.send("Hey there!!! What's up?")
});

app.use('/contact', function(req,res){
    res.send("You can contact us on linkedin")
})

app.listen(7777, function(){
    console.log("Server is successfully started...")
});