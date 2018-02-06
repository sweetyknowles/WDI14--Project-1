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



var stopButton = document.querySelector('#stopButton');
}







let alphabet = "abcdefghijklmnopqrstuvwxyz"

let alphabetFunction = function(letters){
    const newArray = []
    for (i = 0; i < letters.length; i++){
        newArray.push(letters[i])
        let toButtonForm = letters[i]
        let pushClassOut = $('main').append(`<button class='style'>${letters[i]}</button>`)
        console.log(letters[i])
    }
}

alphabetFunction(alphabet)














