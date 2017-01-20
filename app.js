var http= require("http");
var routes = require("./routes.js")

var port= 3000;

var server = http.createServer(function (request,response){
  console.log(request.method);
    routes.home(request,response);
    
});
server.listen(port);
console.log("server running");


