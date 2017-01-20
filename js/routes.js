
var renderer = require("./renderer");
var queryString = require ("querystring");

function home(request,response){
  console.log(request.url+"  "+request.method);
  if(request.url=="/"){
    if(request.method.toLowerCase()=="get"){
       response.writeHead(200,{"Content-Type":"text/html"})
       renderer.view("index.html",{},response);
       response.end();
    }
    if(request.method.toLowerCase()=="post"){
       request.on("data",function(post){
       var query = queryString.parse(post.toString());
       impsum(request,response,query);
       
       });
       
    }
  }

}
function impsum(request,response,options){

    response.writeHead(200,{"Content-Type":"text/html"})
    renderer.view("impsum.html",options,response);
    response.end();
  
}

module.exports.home= home;
