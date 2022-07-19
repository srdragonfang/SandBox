let number;
number;     // => undefined

let movie = { name: 'Interstellar' };
movie.year; // => undefined

let movies = ['Interstellar', 'Alexander'];
movies[3];  // => undefined

// let number;
if(number === undefined){
    console.log(true)
}
// Cách này gây tranh cãi rất nhiều vì liên quan đến "undefined can be redefined" hãy xem tại đây! 
// ![need-to-read] https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript

// global scope
var theFu; // theFu has been declared, but its value is undefined
typeof theFu; // "undefined"

// let number;
if(typeof number === 'undefined'){
    console.log(true)
}
