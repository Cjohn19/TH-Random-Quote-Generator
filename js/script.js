// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes = [
  {
     quote: "The answer is: me and dead owls don't give a hoot.",
     source: 'Raylan Givens',
     citation: 'Justified',
     year: '2012'
  },
  {
    quote: "I solemnly swear I am up to no good.",
    source: 'Harry Potter',
    citation: 'Harry Potter and the Prisoner of Azkaban',
    year: 'September, 1999'
  },
  {
    quote: "You come at the king, you best not miss.",
    source: 'Omar Little',
    citation: 'The Wire',
    year: 'June, 2002'
  },
  {
    quote: "Rubbing alcohol is for outside wounds, drinking alcohol is for inside wounds. It's science",
    source: 'Nick Miller',
    citation: 'New Girl',
    year: null
  },
  {
    quote: "You gave me a cookie, I gave you a cookie. You gave me cookie gave you cookie. Gave me cookie got you cookie! You gave me cookie I got you a cookie man! Gave me cookie got you cookie, we're even! We're even, Schmidt!",
    source: 'Nick Miller',
    citation: 'New Girl',
    year: null
  },
  {
    quote: "Either thou or I, or both, must go with him",
    source: 'Romeo',
    citation: 'Rome & Juliet By William Shakespeare',
    year: "1597"
  },
  {
    quote: "Get busy living or get busy dying.",
    source: 'Stephen King',
    citation: null,
    year: null
  }
];

function getRandomQuote(array) {
  var randomIndex = Math.floor( Math.random() * array.length );
  return array[randomIndex];
};

function printQuote() {
  var quote = getRandomQuote(quotes);
  var html = createHTMLForQuote(quote);
  document.getElementById('quote-box').innerHTML = html;
}

function createHTMLForQuote(quoteObj){
  var html = '<p class="quote">' + quoteObj.quote + '</p>';
  html += '<p class="source">' + quoteObj.source + '';

  if (quoteObj.citation != null) {
    html +='<span class="citation">' + quoteObj.citation + '</span>';
  }
  if (quoteObj.year != null) {
    html +='<span class="year">' + quoteObj.year + '</span>';
  }
  html +='</p>';
  return html;
}





// Create the getRandomQuuote function and name it getRandomQuote



// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
