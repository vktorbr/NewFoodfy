const express = require("express");
const nunjucks = require("nunjucks");

const routes = require("./routes");
const methodOverride = require("method-override");
const server = express();

server.use(express.urlencoded({extended:true}))
server.use(express.static("public"));
server.use(express.static("assets"));
server.use(methodOverride("_method"));
server.use(routes);
server.set("view engine", "njk");

//configuracao do nunjucks
nunjucks.configure("views", {
    express: server,
    noCache: true
});

//inicializa o servidor
server.listen(7000, function(){
    console.log("server is running!");
});