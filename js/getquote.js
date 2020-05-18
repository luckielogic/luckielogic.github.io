$(document).ready(function() {

function getQuote() {
  var quotes=[{
  quote: "It’s easier to fool people...than to convince them they have been fooled."
  }, {
    quote: "There are two ways to be fooled. One is to believe what isn’t true; the other is to refuse to believe what is true."
  }, {
    quote: "It is dangerous to let the public behind the scenes. They are easily disillusioned and then they are angry with you, for it was the illusion they loved."
  }, ];
    
    var sourceLength = quotes.length;
    var randomNumber = Math.floor(Math.random() * sourceLength);

    for (var i=0; i<=sourceLength; i++) {
      var newQuoteText = quotes[randomNumber].quote
    }
    
    var timeAnimation = 500;
    var quoteContainer = $("#quoteContainer");
      quoteContainer.fadeOut(timeAnimation, function() {
        quoteContainer.html('');
        quoteContainer.append('<p>' + newQuoteText + '</p>');
        quoteContainer.fadeIn(timeAnimation);
      }); //end of fadeOut
    } //end of getQuote
getQuote();
  
$("#quoteButton").click(getQuote);

}); //end of document.ready
