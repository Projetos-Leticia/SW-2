const express = require("express");
const app = express();

app.get("/", function(res, res){
    res.setEncoding("Seja bem-vindo ao meu app!");
})

app.get("Sobre", function(res, res){
    res.setEncoding("Minha página sobre");
})

app.get("blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
})
app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});

