const quotes = [
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { text: "It is our choices, that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do not wait; the time will never be 'just right.' Start where you stand.", author: "Napoleon Hill" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Quality is not an act, it is a habit.", author: "Aristotle" },
    { text: "Perfection is not attainable, but if we chase perfection we can catch excellence.", author: "Vince Lombardi" },
    { text: "Courage is resistance to fear, mastery of fear—not absence of fear.", author: "Mark Twain" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" }
];

// not repeating quotes until all have been displayed

let displayed = []
generateQuote();

function generateQuote(){
    let number = getRandomNum(quotes.length);
    getQuote(number, quotes);
};

function getRandomNum(max){

    let randomNumber = Math.floor(Math.random() * max);
    let result = displayed.includes(randomNumber);
     
    if ( displayed.includes(randomNumber) && displayed.length < quotes.length ) {//If the num is repeated but still numbers left
        generateQuote();
    } else if (displayed.includes(randomNumber) && displayed.length == quotes.length){//If its repeated but all quotes are shown
        displayed = [];
        generateQuote();
    } else {
        displayed.push(randomNumber);
    }
    return randomNumber
};

function getQuote(index, quotes){
    document.getElementById("quote").innerHTML = '"' + quotes[index].text + '"';
    document.getElementById("author").innerHTML = quotes[index].author;
};
