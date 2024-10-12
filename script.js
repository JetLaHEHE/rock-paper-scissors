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


console.log(getComputerChoice());

console.log(getUserChoice());