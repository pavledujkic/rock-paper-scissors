let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.querySelector(".result");
const newGameBtn = document.getElementById("new-game-btn");

rockButton.addEventListener("click", function () {
  playRound("Rock");
});

paperButton.addEventListener("click", function () {
  playRound("Paper");
});

scissorsButton.addEventListener("click", function () {
  playRound("Scissors");
});

newGameBtn.addEventListener("click", function () {
  resetGame();
});

function playRound(userChoice) {
  const computerChoice = getComputerChoice();

  const result = determineWinner(userChoice, computerChoice);

  if (result === "win") {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultText.textContent = `You win! ${userChoice} beats ${computerChoice}`;
    resultText.classList.remove("lose");
    resultText.classList.add("win");
  } else if (result === "lose") {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
    resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
    resultText.classList.remove("win");
    resultText.classList.add("lose");
  } else {
    resultText.textContent = "It's a tie!";
  }

  if (userScore === 5) {
    resultText.textContent = "Congratulations, you won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultText.textContent = "Sorry, you lost the game. Better luck next time!";
    disableButtons();
  }
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  userChoice = userChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (userChoice === computerChoice) {
    return "tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.textContent = 0;
  computerScoreSpan.textContent = 0;
  resultText.textContent = "Choose your move to start the game!";
  resultText.classList.remove("win");
  resultText.classList.remove("lose");
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}
