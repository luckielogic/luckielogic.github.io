$(document).ready(function() {

var totalCount = 8;
function randomBackground() 
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'bgimages/'+num+'.jpg';
document.body.style.backgroundRepeat = "repeat";// Background repeat
}

});
