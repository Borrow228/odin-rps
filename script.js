let randomNumber;
let computerChoice;
let humanChoice;

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

getComputerChoice();
getHumanChoice();
