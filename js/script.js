// Cjohn19 - Random Quote Generator

// This is an array of quotes
var quotes = [
  {
     quote: "The answer is: me and dead owls don't give a hoot.",
     source: 'Raylan Givens',
     citation: 'Justified',
     year: '2012',
     type: 'TV'
  },
  {
    quote: "I solemnly swear I am up to no good.",
    source: 'Harry Potter',
    citation: 'Harry Potter and the Prisoner of Azkaban',
    year: 'September, 1999',
    type: 'Book'
  },
  {
    quote: "You come at the king, you best not miss.",
    source: 'Omar Little',
    citation: 'The Wire',
    year: 'June, 2002',
    type: 'TV'
  },
  {
    quote: "Rubbing alcohol is for outside wounds, drinking alcohol is for inside wounds. It's science",
    source: 'Nick Miller',
    citation: 'New Girl',
    year: null,
    type: 'TV'
  },
  {
    quote: "You gave me a cookie, I gave you a cookie. You gave me cookie gave you cookie. Gave me cookie got you cookie! You gave me cookie I got you a cookie man! Gave me cookie got you cookie, we're even! We're even, Schmidt!",
    source: 'Nick Miller',
    citation: 'New Girl',
    year: null,
    type: 'TV'
  },
  {
    quote: "Either thou or I, or both, must go with him",
    source: 'Romeo',
    citation: 'Rome & Juliet By William Shakespeare',
    year: "1597",
    type: 'Book'
  },
  {
    quote: "Get busy living or get busy dying.",
    source: 'Stephen King',
    citation: null,
    year: null,
    type: 'Movie'
  }
];

// Object for type colors
var types = {
  book: '#12ABB3',
  tv: '#3452AB',
  movie: '#ba1818'
}

// Gets color
function getColorForType(type){
  return types[type];
}


// Returns a rondom quote by generating a random index
function getRandomQuote(array) {
  var randomIndex = Math.floor( Math.random() * array.length );
  return array[randomIndex];
};

// Gets and prints a random quote
function printQuote() {
  var quote = getRandomQuote(quotes);
  var html = createHTMLForQuote(quote);
  var color = getColorForType(quote.type.toLowerCase());
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = color
}

//Creates HTML for a quote, ignoring properties if they dont exist
function createHTMLForQuote(quoteObj){
  var html = '<p class="quote">' + quoteObj.quote + '</p>';
  html += '<p class="source">' + quoteObj.source + '';

  if (quoteObj.citation != null) {
    html +='<span class="citation">' + quoteObj.citation + '</span>';
  }
  if (quoteObj.year != null) {
    html +='<span class="year">' + quoteObj.year + '</span>';
  }
  html +='<span class="year">' + quoteObj.type + '</span>';
  html +='</p>';
  return html;
}

// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// prints a new quote ever 30 seconds
setInterval(printQuote, 30000);
