window.onload = function () {

    let animals = ['bear', 'horse', 'lion'];
    let actors = ['sean', 'brad', 'sam']
    let chance = 6;
    let word = "bear";

    //create buttons for all letters in alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
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

    alphabetFunction(alphabet)

    // comparing the values in the array, split the word in letters.
    function compareValues(val) {
        let count = 0;
        let correctMatch = false;
        let newWord = word.split('')
        // run through the loop and comapare= values.
        for (let i = 0; i < newWord.length; i++) {
            if (val === newWord[i]) {
                $('#chance').html("you are getting there");
                console.log('values match this many times')
                //letters appear on the screen for right guesses
                $(`#span${val}`).css('color', 'green')


                correctMatch = true;
                count++


            }
            //     if (count = val) {
            //         $('#chance').html("You WON!!!");
            //     $('.style').attr('disabled', true)

            // }
        }
        //checking the counts of the wrong guesses
        if (count === 0) {
            chance--

            $('#chance').html("Guess Again");
            // counts the remaining chances
            console.log(`you have ${chance} chances left`)
        }
        // the chances are counted and when used all chances without winning. displays user they lost
        if (chance <= 0) {
            $('#chance').html("You Lost: Game OVER!");
            $('.style').attr('disabled', true)

        }

        console.log("The guess was " + correctMatch)


    }



    // targating the buttons as the user clicks buttons
    $('.style').one('click', ((target) => {
        let value = target.target.id
        compareValues(value)

    }))



}















