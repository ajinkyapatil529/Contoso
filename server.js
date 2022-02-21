var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("CEO :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Mumbai</li>"+
                    " <li>Pune</li>"+
                    " <li>Chennai</li>"+
                    " <li>NewYork</li>"+
                    " <li>Sydney</li>"+
                    " <li>Singapore</li>"+
                    " <li>Los Angles</li>"+
                    " <li>Seattle</li>"+
                    " <li>Delhi</li>"+
                    " <li>Johansberg</li>"+
                    " <li>Abu Dhabi</li>"+
                    " <li>Berlin</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
