let humanScore = 0;
let computerScore = 0;

function userClicked(event) {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            console.log('rock');
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            console.log('paper');
            playRound('paper', getComputerChoice());
            break;
        case 'scissor':
            console.log('scissors');
            playRound('scissors', getComputerChoice());
            break;
    }
}

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
    let result = '';

    let showResults = document.querySelector("#showResults");

    let para = document.createElement("p");

    showResults.appendChild(para);

    let youWin = document.querySelector("#youWin");

    if(para.previousSibling != null)  para.previousSibling.remove();

    console.log("Human Choice " + humanChoice)
    console.log("Computer Choice " + computerChoice)

    if(humanChoice === 'rock' && computerChoice === 'scissors'
        && humanScore < 3 && computerScore < 3) {
        result = 'You win! Rock beats Scissors';

        para.textContent = result;

        humanScore ++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'
        && humanScore < 3 && computerScore < 3) {
        result = 'You win! Paper beats Rock';

        para.textContent = result;

        humanScore ++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper'
        && humanScore < 3 && computerScore < 3) {
        result = 'You win! Scissors beats Paper';

        para.textContent = result;

        humanScore ++;
    }

    else if (humanChoice === 'paper' && computerChoice === 'scissors'
        && humanScore < 3 && computerScore < 3) {
        result = 'You lose! Scissors beats Paper';

        para.textContent = result;

        computerScore ++;
    }

    else if (humanChoice === 'rock' && computerChoice === 'paper'
        && humanScore < 3 && computerScore < 3) {
        result = 'You lose! Paper beats Rock';

        para.textContent = result;

        computerScore ++;
    }

    else if (humanChoice === 'scissors' && computerChoice === 'rock'
        && humanScore < 3 && computerScore < 3) {
        result = 'You lose! Rock beats Scissors';

        para.textContent = result;

        computerScore ++;
    }

    else if (humanChoice === computerChoice && humanScore !== 3 && computerScore !== 3) {
        result = "Draw!";

        para.textContent = result;
    }

    let score = document.querySelector("#score");
    score.textContent = `You: ${humanScore} Computer: ${computerScore}`;

    if(computerScore === 3) {
        console.log(`You lose! Computer Wins!`);
        result = '';
        youWin.textContent = 'You lose! Computer Wins!'
    }
    if(humanScore === 3) {
        console.log(`You win!`);
        result = '';
        youWin.textContent = 'You win!'
    }

    console.log(`Computer Score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);
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

// playGame();