/* First the function getComputerChoice is going to select randomly from an array one of the values for the game: Rock, Paper or Scissors.
    For this I'm going to define an array with the default values and use the random method alongside with the floor method, both from the
    math library, to randomly select on of the values; this selection is the decision made by the computer.

    The basic functionality is made by generatin a random value between 0 and 1, and multiplying that value for the length of the array, then
    using the floor method to round down to a whole number, the range will be between 0 and 2, which are the index values of the array.
*/
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    
    let computerOptions = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * computerOptions.length)
    
    return computerOptions[computerChoice];
}

/* Now, I will define the funtion that actually plays the game, for this the function will take the computer's choice and the player's choice as
    parameters, then with the toLowerCase I'll ensure that the value that the function is receiving is going to be consistent when I procede with
    the evaluation, to define the winner I'll basic if/else conditionals having in mind that Paper beats Rock beats Scissors beats Paper.
*/

function playing(computerChoice, playerChoice) {

    // Making the variables computerChoice and playerChoice case insensitive
    
    let computerSelection = computerChoice.toLowerCase();
    let playerSelection = playerChoice.toLowerCase();

    if (computerSelection == playerSelection) {

        return "Tie";

    } else {
        if((computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper")) {

                return "Computer";

        } else if((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

            return "Player";

        } 
    }
    
}

/* The final function will help the program to run multiple times the playing function, this way I can create a full game with 5 rounds
    each time the computer or the player wins, a score variable should be incremented, when one of the score variables reach the 5 value
    the game ends, and the winner is declared */

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();
    let winner = playing(computerSelection, playerSelection);
    let answerDiv = document.getElementById('results');
    let content;
    let result;
    
    switch(winner) {

        case "Tie":
            content = document.createTextNode("It's a tie!");
            break;
        
        case "Computer":
            computerScore += 1;
            content = document.createTextNode(`Computer wins! ${computerSelection} beats ${playerSelection}`);
            break;
        
        case "Player":
            playerScore += 1;
            content = document.createTextNode(`Player Wins! ${playerSelection} beats ${computerSelection}`);
            break;
    }

    if(playerScore == 5) {
        result = document.createTextNode("Player WON");
        answerDiv.appendChild(result);
        let myBtns = document.querySelectorAll('button');
        myBtns.forEach(myBtn => myBtn.setAttribute('disabled', ''));
        answerDiv.appendChild(document.createElement("br"));
        const finishBtn = document.createElement('button');
        finishBtn.textContent = "Play Again?";
        finishBtn.setAttribute('style', 'background-color: transparent; font-size: 25px; color: white; font-family: Caveat; border: none; cursor: pointer');
        answerDiv.appendChild(finishBtn);
        finishBtn.onclick = () => {
            location.reload();
        }
        return;
        
    } else if(computerScore == 5) {
        result = document.createTextNode("Computer WON");
        answerDiv.appendChild(result);
        let myBtns = document.querySelectorAll('button');
        myBtns.forEach(myBtn => myBtn.setAttribute('disabled', ''));
        answerDiv.appendChild(document.createElement("br"));
        const finishBtn = document.createElement('button');
        finishBtn.textContent = "Play Again?";
        finishBtn.setAttribute('style', 'background-color: transparent; font-size: 25px; color: white; font-family: Caveat; border: none; cursor: pointer');
        answerDiv.appendChild(finishBtn);
        finishBtn.onclick = () => {
            location.reload();
        }
        return;
    }

    answerDiv.appendChild(content);
    answerDiv.appendChild(document.createElement("br"));
    answerDiv.appendChild(document.createTextNode(`Player Score: ${playerScore}, Computer Score: ${computerScore}`));

}


const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener('click', (e) => {
    let flushDiv = document.getElementById('results');
    flushDiv.textContent = "";
    playRound(e.target.name);
}));

