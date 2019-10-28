$(document).ready(function(){
  // event.preventDefault()
  var flavors = ["Chocolate " , "Vanilla ", "Strawberry "]
  flavors.forEach(function(flavor){
    $("#result").append( flavor );
  })
});
