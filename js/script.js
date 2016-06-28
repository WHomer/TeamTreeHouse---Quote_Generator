// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", loadQuote, false);


//Array quotes with various quotes
var quotes = [
    {
        fullName: "Albert Einstein",
        year: "Born: 1879",
        citation: "",
        type: "Physicist",
        quote: "Insanity: doing the same thing over and over again and expecting different results."
    },
    {
        fullName: "Muhammad Ali",
        year: "Born: 1942",
        citation: "speech",
        type: "Athlete",
        quote: "Don't count the days. Make the days count."
    },
    {
        fullName: "David Foster",
        year: "Born: 1949",
        citation: "speech",
        type: "Producer",
        quote: "The enemy of great is good."
    },
    {
        fullName: "H. Jackson Brown, Jr.",
        year: "Born: 1940",
        citation: "",
        type: "Author",
        quote: "The best preparation for tomorrow is doing your best today."
    },
    {
        fullName: "Milton Berle",
        year: "Born: 1908",
        citation: "",
        type: "Comedian",
        quote: "If opportunity doesn't knock, build a door."
    },
    {
        fullName: "J.K. Rowling",
        year: "2005",
        citation: "Harry Potter and the Goblet of Fire",
        type: "Author",
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
    },
    {
        fullName: "Winston S. Churchill",
        year: "Born: 1874",
        citation: "",
        type: "Politician",
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
    },
    {
        fullName: "Nicholas Sparks",
        year: "2005",
        citation: "At First Sight",
        type: "Author",
        quote: "Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can."
    },
    {
        fullName: "Harper Lee",
        year: "1960",
        citation: "To Kill a Mockingbird",
        type: "Author",
        quote: "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it."
    },
    {
        fullName: "Nikola Tesla",
        year: "Born: 1856",
        citation: "",
        type: "Inventor",
        quote: "I don't care that they stole my idea . . I care that they don't have any of their own"
    }
];
//Random Color generator
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//Set AvailableQuotes Array
//Array availableQuotes to add index of quotes array
var availableQuotes = [];
function getQuotes(item, index){
    availableQuotes.push(index);
}
//Load each index from each quote, from quotes array.
quotes.forEach(getQuotes);

function loadQuote() {
    //load a random color and set it to body and #loadQuote
    var bgColor = getRandomColor();
    $("body, #loadQuote").css("background-color", bgColor);
    //If availableQuotes array is empty rerun getQuotes array.
    if (availableQuotes.length < 1){
        //Reload each index from each quote, from quotes array.
        quotes.forEach(getQuotes);
    }
    //Selects a random from length of availableQuotes array
    var randomNumber = Math.floor(Math.random() * availableQuotes.length);
    //stores the index number of the quotes array
    var quoteNumber = availableQuotes[randomNumber];
    //Remove that quote from the array
    availableQuotes.splice(randomNumber, 1);

    //displays currently selected quote to class "quote"
    var quote = document.getElementsByClassName("quote");
    quote[0].innerHTML = quotes[quoteNumber].quote;
    var html = "";
    //displays currently selected quote to class "fullName"
    if (quotes[quoteNumber].fullName !== "") {
        html = html + '<span class="fullName">' + quotes[quoteNumber].fullName + '</span>';
    }
    //displays currently selected quote to class "citation"
    if (quotes[quoteNumber].citation !== "") {
        html = html + '<span class="citation">' + quotes[quoteNumber].citation + '</span>';
    }
    //displays currently selected quote to class "year"
    if (quotes[quoteNumber].year !== "") {
        html = html + '<span class="year">' + quotes[quoteNumber].year + '</span>';
    }
    //displays currently selected quote to class "type"
    if (quotes[quoteNumber].type !== "") {
        html = html + '<span class="type">' + quotes[quoteNumber].type + '</span>';
    }

    //displays the group HTML line
    var source = document.getElementsByClassName("source");
    source[0].innerHTML = html;
}

//Set interval to run function every 30 seconds.
setInterval(loadQuote, 30000);