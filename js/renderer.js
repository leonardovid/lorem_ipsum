var fs = require("fs");
var text = require("./text.js");

//
function view(page,options,response){
  var content=  fs.readFileSync("./views/"+page,{"encoding":"utf8"});
  content = generateImpsum(content,options.paragraphs);
  response.write(content);
}

function generateImpsum(content,paragraphs){
  var paragraphs = parseInt(paragraphs);
  var ipsumText = text.array();  

  if(paragraphs>0){
      var body="";
      for(var i=0;i<paragraphs;i++){
        body+="<p>"+ipsumText[i]+"</p>";
      } 
      content=content.replace("{{generate}}",body);      
  }
  return content;
}

function serve (url,response){

 var content = fs.readFileSync('.'+url, {encoding: "utf8"});
  
  response.write(content);
  
}

module.exports.view= view;
module.exports.serve= serve;

