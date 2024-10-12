let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1;

    console.log(randomNumber)

    if (randomNumber === 1) {
        return "rock"
    }
    else if (randomNumber === 2) {
        return "paper"
    }
    else if (randomNumber === 3) {
        return "scissors"
    }
}

function getUserChoice() {
    let user_choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (user_choice === "rock") {
        return "rock";
    }
    else if (user_choice === "paper") {
        return "paper";
    }
    else if (user_choice ===  "scissors") {
        return "scissors";
    }
} 

//Create function playround
function playRound(humanChoice, computerChoice) {
    if(humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors')
        humanScore ++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats Rock')
        humanScore ++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beats Paper')
        humanScore ++;
    }

    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beats Paper')
        computerScore ++;
    }

    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock')
        computerScore ++;
    }

    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors')
        computerScore ++;
    }
    else if(humanChoice === computerChoice) {
        console.log("It's a draw!");
    }
}

const comp_choice = computerChoice();
const human_choice = humanChoice();