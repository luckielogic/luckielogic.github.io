$(document).ready(function() {
  
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'];

$('html').css('background-color', '#2b2b2b');  
$('html').css({'background-image': 'url(bgimages/' + images[Math.floor(Math.random() * images.length)] + ')'});
$('html').css('background-position', 'center center');
$('html').css('background-repeat', 'no-repeat');
$('html').css('background-size', 'cover');
  
}); //end of document.ready
