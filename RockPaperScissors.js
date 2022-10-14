/* First the function getComputerChoice is going to select randomly from an array one of the values for the game: Rock, Paper or Scissors.
    For this I'm going to define an array with the default values and use the random method alongside with the floor method, both from the
    math library, to randomly select on of the values; this selection is the decision made by the computer.

    The basic functionality is made by generatin a random value between 0 and 1, and multiplying that value for the length of the array, then
    using the floor method to round down to a whole number, the range will be between 0 and 2, which are the index values of the array.
*/

function getComputerChoice() {
    let computerOptions = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * computerOptions.length)
    return computerOptions[computerChoice];
}

/* Now, I will define the funtion that actually plays the game, for this the function will take the computer's choice and the player's choice as
    parameters
*/

getComputerChoice();