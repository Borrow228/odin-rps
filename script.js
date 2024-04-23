let randomNumber;
let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
   // console.log (randomNumber);
}

function getComputerChoice() {
    getRandomNumber();

    if (randomNumber <= 33) {
        computerChoice = 'rock'; 
    } else if (randomNumber <= 66 && randomNumber > 33) {
    computerChoice = 'scissors'; }
    else { computerChoice = 'paper'}
    return computerChoice;
}

function getHumanChoice() {
    // first prompt, if wrong, repeat until right
    humanChoice = prompt("Choose one: Rock, Paper, Scissors?");
    humanChoice = humanChoice.toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    humanChoice = prompt("Choose one: Rock, Paper, Scissors? If you see this window twice, you typed wrong!");
    humanChoice = humanChoice.toLowerCase(); }
    }

function playRound() {
    getComputerChoice();
    getHumanChoice();
    if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore ++;
        console.log ("YOU WON");
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore ++;
        console.log ("YOU WON");
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore ++;
        console.log ("YOU WON");
    } else if (computerChoice === humanChoice) {
        console.log ("DRAW");
    } else {
        computerScore ++;
        console.log ("YOU LOST");
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5)
    {playRound()}
}

playGame();

console.log("Computer choice is: " + computerChoice);
console.log("Human choice is: " + humanChoice);
console.log("Computer score is: " + computerScore);
console.log("Human score is: " + humanScore);