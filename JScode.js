let playerSelection;
let computerSelection;

const array = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return array[~~(Math.random() * array.length)];
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
  return playRound(playerSelection, computerSelection);
}

function getPlayerChoice() {
  let playerSelection = prompt("'Rock', 'Paper' or 'Scissors' ?").toLowerCase();
  return playerSelection;
}
