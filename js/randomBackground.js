$(document).ready(function() {
  
var images = ['1.jpg', '2.jpg'];

$('html').css({'background-image': 'url(bgimages/' + images[Math.floor(Math.random() * images.length)] + ')'});
 $('html').css('background-repeat', 'no-repeat');
$('html').css('background-size', 'cover');
  
}); //end of document.ready
