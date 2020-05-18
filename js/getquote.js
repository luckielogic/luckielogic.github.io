$(document).ready(function() {

function getQuote() {
  var quotes=[{
  quote: "Feels like 55 degrees F? That's too hot! I must stick my tongue out during the entire walk. "
  }, {
    quote: "I like to stare down cats, because it helps me to imagine what flavor they are."
  }, {
    quote: "Sometimes my owners allow me to jump on their bed. That means that when they are not looking, I can allow myself to jump on the bed."
  }, {
    quote: "My owners tell me not to eat grass. That means that I can eat grass when they're not looking. "
  }, {
    quote: "I don't play with my toys unless my owners have guests over. It makes my owners look like they don't buy me enough toys. "
  }, {
    quote: "I really want the balls that other dogs have, but I don't want them anymore after my owner buys them for me. "
  }, {
    quote: "I sleep with my tongue out, but if you try to take a picture of me, I'll reset to a normal face. "
  }, {
    quote: "My food tastes best when I eat it lying down. "
  }, {
    quote: "I only choose sleeping positions where I have a headrest."
  }, {
    quote: "A day spent moving is a day of energy wasted."
  }, {
    quote: "People often ask how old I am, expecting to confirm that I am an old man. They are surprised to learn that I am only 6."
  }, {
    quote: "Sometimes I reverse-sneeze due to my allergies. It is a thing; look it up."
  }, {
    quote: "I get really excited to go to the dog park, but when I am there, I want everyone to leave me alone."
  }, {
    quote: "I spend lots of time looking for the steepest hill and tallest grass to poop on. This makes it more fun for my owner to pick up."
  }, {
    quote: "If we hike together, I will bark a lot to show you which direction we all need to be going. (I am in charge.)"
  }, {
    quote: "I can frequently be heard sighing deeply from the other side of the room, contemplating my past life and other thoughtful subjects."
  }, {
    quote: "I know many tricks, but I only want to do them if there is food."
  }, {
    quote: "I don't really want to swim out to get the stick. I will let other dogs do that, then steal the stick."
  }, {
    quote: "I like to hang out with my best friend, Cooper, but only at a distance of 4' away."
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
