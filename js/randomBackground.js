$(document).ready(function() {
  
var images = ['1.jpg', '2.jpg'];

$(obj).css('background', 'url(bgimages/' + images[Math.floor(Math.random() * images.length)] + ') no-repeat center center fixed');

  
}); //end of document.ready
