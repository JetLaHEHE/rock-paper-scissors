let humanScore = 0;
let computerScore = 0;

const selection = document.querySelector("#selection");

selection?.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            console.log('rock');
            break;
        case 'paper':
            console.log('paper');
            break;
        case 'scissor':
            console.log('scissor');
            break;
    }
});

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
    console.log("Human Choice " + humanChoice)
    console.log("Computer Choice " + computerChoice)
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

    else if (humanChoice === computerChoice) {
        console.log("Draw!");
    }
}

//create a function named playGame
function playGame() {
    let playing = true;
        while(playing) {
            const comp_choice = getComputerChoice();
            const human_choice = getUserChoice();

            console.log(comp_choice);
            console.log(human_choice);

            playRound(human_choice, comp_choice);

            if (humanScore === 3) {
                console.log("You win!")
                playing = false;
            } else if(computerScore === 3) {
                console.log("You lose!")
                playing = false;
            }
        }
    }

playGame();