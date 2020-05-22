$(document).ready(function() {

var totalCount = 2;
function randomBackground() 
{
var num = Math.ceil( Math.random() * totalCount );
document.body.style.backgroundImage = "url('bgimages/'+num+'.jpg')";
document.body.style.backgroundRepeat = "no-repeat";// Background repeat
document.body.style.backgroundSize = "cover";
}

randomBackground();
  
}); //end of document.ready
