window.onload = function() {
    
// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// var categories;         // Array of topics
// var chosenCategory;     // Selected catagory

// var word ;              // Selected word
// var guess ;             // Geuss
// var geusses = [ ];      // Stored geusses
// var chances ;             // Lives

// var space;              // Number of spaces in word '-'

var actors = ['brad','jennifer', 'darren'];
var stopButton = document.querySelector('#stopButton');
}

function actors(){
    rand = Math.floor(Math.random ()*actors.length);
    word = actors[rand];
    document.getElementById()
}

var word = "kangaroo";



let alphabet = "abcdefghijklmnopqrstuvwxyz"

let alphabetFunction = function(letters){
    const newArray = []
    for (i = 0; i < letters.length; i++){
        newArray.push(letters[i])
        let toButtonForm = letters[i]
        let pushClassOut = $('main').append(`<button id=${letters[i]} class='style'>${letters[i]}</button>`)
        console.log(letters[i])
    }
}

alphabetFunction(alphabet)
function compareValues(val){
    let newWord = word.split('')
for(let i = 0; i < newWord.length; i++ ){
    if(val === newWord[i]){
        console.log('values match this many times')
    } else {
        console.log('try again')
    }
}
}
$('.style').click((target)=> {
    let value = target.target.id
    compareValues(value)
})













