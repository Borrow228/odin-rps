let randomNumber;
let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;
let gameOver = false;

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
    humanChoice = "rock";//prompt("Choose one: Rock, Paper, Scissors?");
    humanChoice = humanChoice.toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    humanChoice = prompt("Choose one: Rock, Paper, Scissors? If you see this window twice, you typed wrong!");
    humanChoice = humanChoice.toLowerCase(); }
    }

function playRound(choiceOfHuman) {
    getComputerChoice();

    

    let final = document.createElement("div");
    let body = document.querySelector(".result");

    //getHumanChoice();
    humanChoice = choiceOfHuman;
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
    console.log("Computer choice is: " + computerChoice);
    console.log("Human choice is: " + humanChoice);
    console.log("Computer score is: " + computerScore);
    console.log("Human score is: " + humanScore);

    let htmlPlayerScore = document.querySelector(".playerscore");
    let htmlComputerScore = document.querySelector(".computerscore");
    htmlPlayerScore.textContent = humanScore;
    htmlComputerScore.textContent = computerScore;


 if (gameOver == false) {
    if (humanScore === 5) {
        final.textContent = "YOU WIN!";
        body.appendChild(final);
        gameOver = true;
    } else if (computerScore === 5) {
        final.textContent = "YOU LOST!";
        body.appendChild(final);
        gameOver = true;
    }
    }
}

/* function playGame() {
    while (humanScore < 5 && computerScore < 5)
    {playRound()}
} 
playGame();
*/

let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let paper = document.querySelector(".papers");

rock.addEventListener("click", function()  {
    playRound("rock");
  });
scissors.addEventListener("click", function()  {
    playRound("scissors");
  });
paper.addEventListener("click", function()  {
    playRound("paper");
  });



