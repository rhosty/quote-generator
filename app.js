let apiQuotes = [];
let quoteIndex = 0;
let quoteButton = document.getElementById('quoteButton');
let quoteText = document.getElementById('quoteText');
let quoteAuthor = document.getElementById('quoteAuther');
loader.hidden = true;
let randomLoadTime = 0;


// get quotes from api.!
async function getQuotes(){
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
    } catch  (error){
    }
    
}
getQuotes()
 
// gets a new quote from apiQuots and diesplays it in the quoutesContainer

function updateQuote(){
    quoteButton.addEventListener('click', function(){
        loading()
       quoteText.innerText = apiQuotes[quoteIndex].text;
       quoteAuthor.innerText = apiQuotes[quoteIndex].author;
       setTimeout(undoLoading, randomLoadTime)
  
    })
}
updateQuote()


//creates a random number, the quoteIndex. this index is used to pick a random quoute from the api
function getRandomNumber(){
    quoteButton.addEventListener('click', function(){
        quoteIndex = Math.floor(Math.random() * 8000)  
    })
}
getRandomNumber()
// reveals loader
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
//hides loader again
function undoLoading(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}
//determins a random load time between 0 and 1000ms
function getRandomLoadTime(){
   quoteButton.addEventListener('click', function(){
    randomLoadTime = Math.floor(Math.random() * 1000);
        console.log(randomLoadTime)
   })
}
getRandomLoadTime()











