window.onload = function () {


    var actors = ['brad', 'jennifer', 'darren'];
    var stopButton = document.querySelector('#stopButton');
}





var word = "kangaroo";



let alphabet = "abcdefghijklmnopqrstuvwxyz"

let alphabetFunction = function (letters) {
    const newArray = []
    for (i = 0; i < letters.length; i++) {
        newArray.push(letters[i])
        let toButtonForm = letters[i]
        let pushClassOut = $('main').append(`<button id=${letters[i]} class='style'>${letters[i]}</button>`)
        console.log(letters[i])
    }
}

alphabetFunction(alphabet)
function compareValues(val) {
    let newWord = word.split('')
    for (let i = 0; i < newWord.length; i++) {
        if (val === newWord[i]) {
            console.log('values match this many times')
        } else {
            console.log('try again')
        }
    }
}
$('.style').click((target) => {
    let value = target.target.id
    compareValues(value)
})












