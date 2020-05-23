$(document).ready(function() {
  
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

$('html').css('background-color', '#2b2b2b');  
$('html').css({'background-image': 'url(bgimages/' + images[Math.floor(Math.random() * images.length)] + ')'});
$('html').css('background-position', 'center center');
$('html').css('background-repeat', 'no-repeat');
$('html').css('background-size', 'cover');
  
}); //end of document.ready
