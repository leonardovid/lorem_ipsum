var fs = require("fs");
var impsunText=[
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis elit at justo ullamcorper finibus. Phasellus eget tempus arcu. Praesent eu urna accumsan, molestie ex sit amet, bibendum metus. Suspendisse neque nibh, tincidunt sed feugiat quis, vestibulum eget mauris. Vivamus lorem enim, dapibus non enim vel, tincidunt sollicitudin justo. Proin vehicula, sapien eget eleifend sollicitudin, nunc orci condimentum sem, at egestas leo nibh eget eros. Suspendisse tortor tellus, vestibulum non risus eu, molestie elementum sem. Nulla ullamcorper justo metus, ac imperdiet enim venenatis non. Nulla facilisi. Sed maximus pellentesque urna, quis tempor mauris auctor in. Pellentesque nec dolor commodo, blandit ipsum vitae, placerat sem. Donec et felis ac nulla pulvinar auctor. Pellentesque mollis lacus a enim dignissim ultrices. Morbi luctus aliquam nisi, sed lacinia eros aliquet euismod. Curabitur dignissim, libero et scelerisque ultricies, ligula magna convallis odio, et vulputate sapien erat vel nisl. Quisque sollicitudin mi et diam mollis, sit amet maximus tortor feugiat.",
"Cras tristique auctor hendrerit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id urna tortor. In convallis, eros id vestibulum finibus, erat dolor pharetra leo, quis aliquam risus massa quis massa. Fusce ut felis sed lectus dictum tincidunt non id est. Mauris et metus id sapien efficitur vulputate. Mauris sit amet magna et ipsum ornare vulputate. In quis tortor ac nibh hendrerit lacinia",

"Maecenas metus ligula, aliquam id feugiat vel, tincidunt non ligula. Aliquam erat volutpat. Maecenas hendrerit urna eu justo malesuada, ac maximus quam lobortis. Donec vel sodales nisi, eu sodales arcu. Mauris id ligula in lacus aliquam hendrerit. Donec sodales mattis erat, ac consequat metus laoreet quis. Sed viverra tristique efficitur. In aliquam neque mauris. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc augue nibh, dignissim non nulla ut, elementum varius metus.",

"Praesent leo tellus, fermentum finibus sollicitudin a, maximus convallis eros. Phasellus mollis eros lacus, nec vestibulum erat sollicitudin et. Vestibulum sed lectus vitae nisl efficitur auctor. Nunc ipsum tortor, mollis sit amet lectus dictum, tempus congue augue. Nunc consectetur mauris vitae egestas facilisis. Cras id massa ut erat dictum accumsan. Etiam a varius libero. Fusce suscipit eleifend ex, ac commodo ipsum convallis eu. Vivamus bibendum lobortis augue, ut volutpat sapien tempus sed.",

"Nullam non lectus sed ante tristique auctor. Maecenas at urna lorem. Vivamus sed ipsum malesuada, rutrum arcu nec, sodales nulla. Vivamus eu imperdiet libero, quis pellentesque ipsum. Curabitur vel vestibulum enim, at faucibus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a lectus nulla. Vestibulum quis malesuada nisi.",

"Mauris volutpat metus fringilla feugiat cursus. Quisque consequat bibendum efficitur. Curabitur pharetra eget nulla sit amet commodo. Aenean sollicitudin, ligula vitae faucibus bibendum, erat risus consectetur tellus, a placerat purus mauris eu ex. Cras placerat velit id cursus ullamcorper. Ut malesuada massa sed dolor feugiat, nec tincidunt nisi finibus. Etiam at ornare ante. Mauris ligula tortor, interdum vel velit quis, commodo faucibus ex. Curabitur ut rutrum nunc. Aliquam molestie nunc vitae nisl elementum, scelerisque posuere lacus vehicula.",

"Aenean dignissim turpis at purus scelerisque euismod. Donec non mi in justo euismod ultricies. Aenean iaculis risus neque, sagittis facilisis mauris aliquet a. Morbi mattis tincidunt elit. Vivamus dignissim, ex a sollicitudin posuere, metus metus lacinia mauris, quis interdum eros nulla at sapien. Praesent risus justo, elementum et varius eget, rutrum eu ex. Cras hendrerit, massa eget vestibulum laoreet, massa sem bibendum nunc, vel dictum mi lectus a quam. Maecenas iaculis volutpat arcu vitae scelerisque.",


"In ex mi, tristique vel sodales sit amet, faucibus non sem. Donec a nibh varius ligula pulvinar elementum nec ut elit. Curabitur molestie vel dui lacinia porttitor. Cras ac tristique odio, eu condimentum est. Aenean hendrerit sollicitudin dolor ac posuere. Integer eget vehicula diam. Etiam commodo, neque id porttitor eleifend, eros ex vehicula sapien, commodo tristique arcu erat et ante.",

"Morbi at libero ligula. Mauris eu tempus lectus. In hac habitasse platea dictumst. Proin fringilla a nulla at accumsan. Aenean porttitor dolor eu fringilla laoreet. Praesent euismod, libero sit amet condimentum laoreet, dui tellus consectetur sapien, hendrerit tempus dolor orci vel est. Nulla facilisi. Nulla ornare volutpat diam non pulvinar. Donec a lobortis velit. Vestibulum vulputate augue ac sapien efficitur, sed rhoncus erat elementum.",

"Nam vel consectetur purus. Integer vitae mi luctus, rutrum nibh at, mattis augue. Etiam semper pellentesque risus, eu tristique erat ullamcorper quis. Cras mattis molestie tempor. Aenean eu augue libero. Nullam eget malesuada libero. Duis sit amet efficitur massa. Pellentesque tincidunt et augue nec vulputate.",

"Nulla vitae ligula vitae arcu interdum sodales et quis libero. Morbi quis nisl accumsan, condimentum sem ut, feugiat risus. Sed vel tortor eget metus ultricies dictum. Fusce at semper mi. Morbi auctor varius molestie. In laoreet purus vel mollis vulputate. Praesent pharetra, arcu eu cursus accumsan, purus enim pellentesque magna, et gravida tortor nulla vitae risus. Morbi vel luctus augue, eu malesuada dui.",

"Donec sed interdum sapien. Nulla ex odio, sagittis ut nisl non, fringilla placerat leo. Maecenas placerat dolor metus, quis rhoncus erat fermentum et. Aenean pellentesque dolor et dui posuere scelerisque. Nunc nisi libero, aliquam ut diam at, vestibulum lacinia magna. Integer tempus molestie massa, semper egestas odio blandit ac. Cras vehicula, leo eu consectetur auctor, lacus tortor consectetur erat, in porta purus nunc a augue.",

"Sed at massa libero. Mauris aliquet ac diam a ullamcorper. Quisque ultrices urna eget ipsum venenatis laoreet nec mattis ante. In aliquet urna mauris, a eleifend lectus tincidunt laoreet. Sed congue elementum volutpat. Praesent et lacinia libero. Etiam congue fringilla condimentum. Cras gravida scelerisque justo. Suspendisse quis sem diam. Sed pulvinar, nisl eu porta congue, diam leo condimentum tortor, sed pellentesque nunc ligula pellentesque nibh. Vivamus congue tempor odio nec volutpat. Donec dignissim tortor eget lacinia dapibus. Duis at mauris orci. Duis dapibus varius sagittis.",

"Suspendisse ornare feugiat tempor. Nunc lacinia interdum sapien non tempus. Donec vel erat at ex pellentesque tempor. Fusce lacinia sodales enim ut sollicitudin. Mauris ultricies ac odio ac feugiat. Donec ac lectus rhoncus, sollicitudin metus eu, venenatis orci. Suspendisse in odio molestie, fringilla enim a, accumsan augue. Pellentesque consequat pellentesque leo, efficitur laoreet ipsum volutpat ut. Pellentesque ut magna arcu. Aliquam consectetur, massa ut mattis gravida, arcu turpis interdum nulla, in dignissim lacus risus a metus. Praesent sit amet sollicitudin elit. Donec venenatis massa vel ligula pellentesque eleifend. Suspendisse faucibus justo eget dui ornare, a cursus ex pulvinar. Praesent egestas, felis ac blandit condimentum, quam ex interdum nisl, at scelerisque massa magna eu nibh.",

"Suspendisse tempor ac neque et efficitur. Sed non dictum dolor. Praesent in metus dui. Praesent sodales auctor vehicula. Cras auctor varius neque sit amet auctor. Mauris quam quam, ultricies in ullamcorper in, pretium a ex. Etiam pulvinar, mauris ut laoreet ornare, magna metus ornare ante, quis accumsan mi lorem vel magna. Phasellus a lobortis erat, vitae imperdiet turpis. Cras facilisis nibh at massa feugiat pulvinar.",

"In ac elementum leo. Suspendisse aliquam ornare nibh in suscipit. Maecenas id fringilla risus. Aenean et libero purus. Cras pellentesque porta sapien, in vehicula enim fermentum ac. Phasellus gravida id justo id tempus. Vestibulum aliquet magna turpis, eget dictum enim pellentesque sed.",

"Proin eu turpis ut lectus porta iaculis. Sed ac quam suscipit, tristique ante et, mollis enim. Duis tristique nibh in ex semper elementum. Donec eleifend posuere est, vel pharetra augue sagittis vel. Nulla quis lacus vitae diam mollis hendrerit vulputate nec libero. Integer placerat facilisis ligula ac tempor. Ut interdum felis dui, fermentum efficitur nisi convallis ut.",

"Aenean finibus lacus nec scelerisque maximus. Vivamus ultricies luctus sapien, eget blandit quam cursus sagittis. Quisque sed eros dolor. Sed semper vulputate turpis, at pellentesque lacus. Sed commodo elit sed felis condimentum, sed feugiat quam congue. Nunc et ligula venenatis, porttitor neque id, laoreet nibh. Maecenas tempus gravida neque, vulputate gravida dolor imperdiet non. Aenean dolor felis, hendrerit nec ultrices sed, sollicitudin vitae erat. Integer euismod dui sit amet massa tincidunt, vel rhoncus ex ultricies.",

"Donec bibendum nisi et magna sodales pellentesque. Aenean dapibus ultrices nisl, quis sollicitudin felis lacinia vitae. Praesent sapien purus, imperdiet id neque eu, aliquam iaculis erat. Sed sodales lobortis sem quis pellentesque. Cras ut malesuada leo. Nullam laoreet mi eget nibh semper, sed sollicitudin leo vulputate. Donec id leo ac dolor convallis semper. Proin vitae felis turpis. Aliquam fermentum ultricies augue, nec cursus orci faucibus vitae. In hac habitasse platea dictumst.",

"Mauris accumsan malesuada quam, eu tempor eros luctus et. Nam faucibus sollicitudin turpis, ut efficitur massa lacinia ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis erat vel nisl egestas pulvinar. Proin semper, purus rutrum dictum feugiat, nulla dolor sollicitudin massa, auctor tempus arcu odio vel tellus. Nullam tellus odio, elementum quis lectus quis, iaculis rutrum turpis. Suspendisse potenti. Donec interdum vulputate scelerisque."
];

function view(page,options,response){
  var content=  fs.readFileSync("./"+page,{"encoding":"utf8"});
  content = generateImpsum(content,options.paragraphs);
  response.write(content);
}

function generateImpsum(content,paragraphs){
  paragraphs = parseInt(paragraphs);
 
  if(paragraphs>0){
      var text="";
      for(var i=0;i<paragraphs;i++){
        text+="<p>"+impsunText[i]+"</p>";
      } 
      content=content.replace("{{generate}}",text);      
  }
  return content;
}

module.exports.view= view;
