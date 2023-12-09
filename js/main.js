var quote = [
    {'author': 'Oscar Wilde', 
        'quote': '“Be yourself; everyone else is already taken.”.'
    },
    {'author': 'Frank Zappa', 
        'quote': '“So many books, so little time.”'
    },
    {'author': 'Marcus Tullius Cicero', 
        'quote': '“A room without books is like a body without a soul.”'
    },
    {'author': 'Mae West', 
        'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {'author': 'Mark Twain', 
        'quote': "“If you tell the truth, you don't have to remember anything.”"
    },
    {'author': 'Elbert Hubbard', 
        'quote': '“A friend is someone who knows all about you and still loves you.”'
    },
    {'author': 'Mahatma Gandhi', 
        'quote': '“Live as if you were to die tomorrow. Learn as if you were to live forever.”'
    },
    {'author': 'Friedrich Nietzsche', 
        'quote': '“Without music, life would be a mistake.”'
    },
];


function randomQuote(){
    var randNum = Math.floor(Math.random()*quote.length +1);
    document.getElementById("quote").innerHTML=quote[randNum].quote
    document.getElementById("author").innerHTML=quote[randNum].author

}