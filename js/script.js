// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", loadQuote, false);

//Array with Various Quotes Stored.

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

function loadQuote() {
    //Testing the load of a random color
    $("body").css("background-color", "purple");
    //Selects a random from length of quotes array
    var randomNumber = Math.floor(Math.random() * quotes.length);
    //Logs to console to display TESTING ONLY
    console.log(randomNumber);
    console.log(quotes[randomNumber].fullName + ", " + quotes[randomNumber].year + ", " + quotes[randomNumber].quote);
    console.log(quotes[randomNumber].type);

    //displays currently selected quote to class "quote"
    var quote = document.getElementsByClassName("quote");
    quote[0].innerHTML = quotes[randomNumber].quote;
    var html = "";
    //displays currently selected quote to class "fullName"
    if (quotes[randomNumber].fullName !== "") {
        console.log('true');
        html = html + '<span class="fullName">' + quotes[randomNumber].fullName + '</span>';
    }
    //displays currently selected quote to class "citation"
    if (quotes[randomNumber].citation !== "") {
        html = html + '<span class="citation">' + quotes[randomNumber].citation + '</span>';
    }
    //displays currently selected quote to class "year"
    if (quotes[randomNumber].year !== "") {
        html = html + '<span class="year">' + quotes[randomNumber].year + '</span>';
    }
    //displays currently selected quote to class "type"
    if (quotes[randomNumber].type !== "") {
        html = html + '<span class="type">' + quotes[randomNumber].type + '</span>';
    }

    //displays the group HTML line
    var source = document.getElementsByClassName("source");
    source[0].innerHTML = html
}



