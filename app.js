var http= require("http");
var routes = require("./js/routes.js")

var port= 3000;

var server = http.createServer(function (request,response){
    routes.home(request,response);
    routes.files(request,response);

    
});
server.listen(port);
console.log("server running");


