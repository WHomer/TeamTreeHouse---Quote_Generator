// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", loadQuote, false);

//Array quotes with various quotes
var quotes = [
    {
        fullName: "Albert Einstein",
        year: "1879",
        citation: "",
        type: "Physicist",
        quote: "Insanity: doing the same thing over and over again and expecting different results."
    },
    {
        fullName: "Muhammad Ali",
        year: "1942",
        citation: "speech",
        type: "Athlete",
        quote: "Don't count the days. Make the days count."
    },
    {
        fullName: "David Foster",
        year: "1949",
        citation: "speech",
        type: "Producer",
        quote: "The enemy of great is good."
    }
];
//Array used for all background colors
var colors = [
    "purple",
    "green",
    "blue"
];
//Set AvailableQuotes Array
//Array availableQuotes to add index of quotes array
var availableQuotes = new Array();
function getQuotes(item, index){
    availableQuotes.push(index);
}
//Load each index from each quote, from quotes array.
quotes.forEach(getQuotes);

function loadQuote() {
    //Select a random color for the background
    var colorNumber = Math.floor(Math.random()* colors.length);
    //load a random color and set it to body and #loadQuote
    $("body, #loadQuote").css("background-color", colors[colorNumber]);
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
    source[0].innerHTML = html
}



