function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "Rock";
  } else if (computerChoice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("'Rock', 'Paper' or 'Scissors'?");
  return (
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
  );
}

function rps(computer, player) {
  for (let i = 1; i <= 5; i++) {
    let result;
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerChoice === "Rock" && computerChoice === "Rock") {
      result = "It's a draw!";
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
      result = "You Lose";
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
      result = "Congrats you won!";
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      result = "You win";
    } else if (playerChoice === "Paper" && computerChoice === "Paper") {
      result = "Draw";
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
      result = "You lose";
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
      result = "You lose";
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      result = "You win";
    } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
      result = "Draw";
    } else {
      result = "Invalid input";
    }
    console.log(result);
  }
  console.log(" ");
  console.log("Game over! ");
}

function game() {
  rps();
}

/*
The function is run 
There are 3 possible options it can take (1) rock (2) Paper (3) Scissors
the computer needs to randomly generate a number from 1 to 3 
and each number needs to === one of the options 
if (computerchoice === 1){ return rock }
then the code needs to return computerchoice

Round of RPS

the function runs takes two parameters 
it asks the player for their move 
it takes the computers move
if the human's choice is rock an

*/
