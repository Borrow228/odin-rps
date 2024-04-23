let randomNumber;
let computerChoice;

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

getComputerChoice();
console.log (computerChoice)
