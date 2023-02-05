function init() {

    // Choose Category based on button clicked

    function chooseCategory(event) {
        if (event.currentTarget.id === "fruits") {

            player.chosenCategory = categories.fruits
            categoryText.textContent = "Fruits"
            console.log(player.chosenCategory)
            console.log(generateWord())
        }
        else if (event.currentTarget.id === "vegetables") {

            player.chosenCategory = categories.vegetables
            categoryText.textContent = "Vegetables"
            console.log(player.chosenCategory)
            console.log(generateWord())
            
        }
        
    }

    // Storing different categories of words that can be guessed

    const categories = {
        fruits: ['apple', 'banana', 'pineapple'],
        vegetables: ['cabbage', 'carrot', 'potato', 'brocolli']
    }

    // Storing player/Computer choices
    
    const player = {
        chosenCategory: null,
        numberOfGuesses: 10,
        // guessedLetters: null
        guessedLetters: []
    }

    const cpu = {
        randomWord: null
    }

    // Computer generates a random word for user to guess

    function generateWord() {
        randomInt = Math.floor(Math.random() * player.chosenCategory.length)
        cpu.randomWord = player.chosenCategory[randomInt]
        return cpu.randomWord
    }

    // Comparing  

    function compare(event) {
        if (event.currentTarget.id === "check") {
            // console.log(inputText.value)
            // player.guessedLetters = inputText.value.split('')
            player.guessedLetters = inputText.value.toLowerCase()
            // inputText.value = ""
            console.log(player.guessedLetters)
            console.log(cpu.randomWord)
            splitWord = cpu.randomWord.split('')
            console.log(splitWord)



            if (inputText.value.length > 1) {
                console.log('Test')
            }
            // if (splitWord.includes(player.guessedLetters) === true) {
            //     console.log('You guessed a letter')
            // }
            

            // for (let i = 0; i <= player.guessedLetters; i++) {
            //     for (let j = 0; j <= splitWord; j++) {
                    
            //     }

            // }


        }

    }

    // Grabbing elements
    
    fruitsButton = document.getElementById('fruits')
    vegetablesButton = document.getElementById('vegetables')
    categoryText = document.getElementById('category')
    inputText = document.getElementById('text')
    checkGuessButton = document.getElementById('check')

    // Buttons

    fruitsButton.addEventListener('click', chooseCategory)
    vegetablesButton.addEventListener('click', chooseCategory)
    checkGuessButton.addEventListener('click', compare)







}

// console.log(init())

window.addEventListener('DOMContentLoaded', init)