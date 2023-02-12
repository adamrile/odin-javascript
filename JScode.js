let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const array = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return array[~~(Math.random() * array.length)];
  console.log();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice().toLowerCase();
  if (playerSelection === computerSelection) {
    return "draw";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You win! Rock beats scissors.";
    } else {
      return "You lose! Paper beats Rock";
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win! paper beats rock.";
    } else {
      return "You lose! scissors beats paper";
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You win! scissors beats paper.";
    } else {
      return "You lose! rock beats scissors";
    }
  } else {
    return "Invalid input";
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let result = playRound();
    if (
      result === "You win! Rock beats scissors." ||
      result === "You win! paper beats rock." ||
      result === "You win! scissors beats paper."
    ) {
      console.log("You beat the machine!");
      playerScore += 1;
    } else if (
      result === "You lose! Paper beats Rock" ||
      result === "You lose! scissors beats paper" ||
      result === "You lose! rock beats scissors"
    ) {
      console.log("Computer won that round...Good luck on the next try!");
      computerScore += 1;
    } else if (result === "Invalid input") {
      console.log("Invalid input. Please try again.");
      i--;
    } else if (result === "draw") {
      console.log("its a draw!");
    } else {
      return "An error has occured. Please try again.";
    }
  }
  if (computerScore > playerScore) {
    return `Computer wins by ${computerScore - playerScore} points`;
  } else if (computerScore < playerScore) {
    return `Computer wins by ${playerScore - computerScore} points`;
  }
}

function getPlayerChoice() {
  let playerSelection = prompt("'Rock', 'Paper' or 'Scissors' ?").toLowerCase();
  return playerSelection;
}
