window.onload = function () {

    let animals = ['bear', 'horse', 'lion'];

    let chance = 6;
    console.log(chance)
    var word = "bear";

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    // function for the chosen word  from the animal that is to be guessed by the user. 
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


    function compareValues(val) {
        let count = 0;
        let correctMatch = false;
        let newWord = word.split('')
        for (let i = 0; i < newWord.length; i++) {
            if (val === newWord[i]) {
                $('#chance').html("You get only 6 chances");
                console.log('values match this many times')
                $(`#span${val}`).css('color', 'white')
                //console.log('try again')
                correctMatch = true;
                count++
            }
        }
        if (count === 0) {
            chance--

            $('#chance').html("Guess Again");
            //console.log(`you have ${chance} chances left`)
        }
        if (chance < 0) {
            $('#chance').html("You Lost: Game OVER!");
            //console.log("GameOver")
            $('.style').attr('disabled', true)
        }
         console.log("The guess was " + correctMatch)
  }


    $('.style').one('click', ((target) => {
        let value = target.target.id
        compareValues(value)

    }))

    
        
    }















