window.onload = function () {

    const animals = ['bear', 'horse', 'lion'];
    const actors = ['sean', 'brad', 'sam']
    let chance = 6;
    let word = "bear";
    let winArray = []
    // when winArray.length === word.length .... user wins
    //create buttons for all letters in alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // make buttons clickable to user
    let alphabetFunction = function (letters) {
        const newArray = []
        for (i = 0; i < letters.length; i++) {
            newArray.push(letters[i])
            let toButtonForm = letters[i]
            let pushClassOut = $('#alphabet').append(`<button id=${letters[i]} class='style'>${letters[i]}</button>`)

            console.log(letters[i])

        }


    }
    function win() {
        console.log(winArray)
        if (winArray.length === word.length) {
            console.log("win")
            $('#winArray').html("You Got It!");
            $('.style').attr('disabled', true)
        }
    }
    alphabetFunction(alphabet)

    // comparing the values in the array, split the word in letters.
    function compareValues(val) {
        ////debugger;
        let count = 0;
        let correctMatch = false;
        let newWord = word.split('')
        // run through the loop and comapare= values.
        for (let i = 0; i < newWord.length; i++) {
            if (val === newWord[i]) {
                $('#chance').html("you are getting there");


                // console.log('values match this many times')
                //letters appear on the screen for right guesses
                $(`#span${val}`).css('color', 'green')

                count++

                correctMatch = true;

                winArray.push(newWord[i])

            }

        }

        //checking the counts of the wrong guesses
        if (count === 0) {
            chance--

            $('#chance').html("Guess Again");
            // counts the remaining chances
            $('#val').html("you have " + chance + " chances left")
        }
        // the chances are counted and when used all chances without winning. displays user they lost
        if (chance < 0) {
            $('#chance').html("You Lost: Game OVER!");
            $('.style').attr('disabled', true)

        }


        console.log("The guess was " + correctMatch)


    }



    // targating the buttons as the user clicks buttons
    $('.style').one('click', ((target) => {
        let value = target.target.id
        compareValues(value)
        win()
    }))



}















