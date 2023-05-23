const express = require("express");
const app = express();

app.get("/", function(res, res){
    res.setEncoding("Hello");
})

app.get("Sobre", function(res, res){
    res.setEncoding("Minha página sobre");
})

app.get("blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
})

app.get('/ola/:cargo/nome/ :cor, function(req, res'){
    res.send(<h1>"Ola"+req.params.nome</h1>);
    res.send("<h2> Seu cargo e: "+req.params.cor+"</h2>");
    res.send("<h3> Sua cor favorita e: "+req.params.cor+"</h2>");
}

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});