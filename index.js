const express = require('express')
const app = express()

app.get('/hello', function(req,res){
    res.send("Chegou a resposta")
})

app.get('/nome', function(req,res){
    res.send("Kaio")
})


app.listen('3000', function(){

})