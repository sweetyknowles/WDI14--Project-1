window.onload = function () {
    var animals = ['bear', 'horse', 'lion'];
    
    var chance = 6;
    console.log(chance)
    var chances = [];

    var stopButton = document.querySelector('#stopButton');
    var showLives = document.getElementById("mylives");

    var word = "bear";
    // for (let i = 0; i < word.length; i++) {
    //     }
    // $(`#animals`).text("The animal is " + word.split(' '));
    //     console.log(word);
    //creates letter buttons 

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    // function for the chosen word  from the animal that is to be guessed by the user. 
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
        let count = 0;
        let correctMatch = false;
        let newWord = word.split('')
        for (let i = 0; i < newWord.length; i++) {
            if (val === newWord[i]) {
                console.log('values match this many times')
                $(`#span${val}`).css('color', 'white')
                console.log('try again')
                correctMatch = true;
                count++
            }
        }
        if(count === 0){
            chance--
            console.log(`you have ${chance} chances left`)
        }
        if (chance < 0){
            console.log("GameOver")
            $('.style').attr('disabled', true)
        }
        
        console.log("The guess was " +correctMatch)

    } 
    


    $('.style').one('click', ((target) => {
        let value = target.target.id
        compareValues(value)

    }))

    //showing how many chances user has

    chances = function () {
        showchances.innerHTML = "you have" + "chances";
        if (chances > 6) {
            showchances.innerHTML = "YOU LOST";
        }
        for (let i = 0; i < guesses.length; i++) {
            if (counter === guesses.length) {
                showchances, innerHtml = "You Win";
            }
        }


    }

    function letnomatch() {
        //if letter not in the list, return eveyrthing to zero 
        if (misses === 6) {
            alert("You Lost!")
            loses++;
            animals.length = 0;
        }
    }


}














