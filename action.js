const choice = ["rock", "paper", "scissor"];
const rock_B = document.querySelector("#rock-btn");
const paper_B = document.querySelector("#paper-btn");
const scissor_B = document.querySelector("#scissor-btn");

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choice.length);
  console.log(`computer random choice is: ${choice[randomIndex]}\n`);
  return choice[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt("Rock/paper/scissor: ").toLowerCase();
  while (!choice.includes(humanChoice)) {
    humanChoice = prompt(
      "Oops! wrong input (rock/paper/scissor): "
    ).toLowerCase();
  }
  console.log(`Human choice is: ${humanChoice}`);
  return humanChoice;
}

function playGame() {
  let humanScore = 0,
    computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Draw b/w ${humanChoice} & ${computerChoice}`);
    } else if (
      (humanChoice == "scissor" && computerChoice == "rock") ||
      (humanChoice == "rock" && computerChoice == "scissor")
    ) {
      if (choice.indexOf(humanChoice) < choice.indexOf(computerChoice)) {
        console.log(`you won ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
      } else {
        console.log(`you lost ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
      }
    } else {
      if (choice.indexOf(humanChoice) > choice.indexOf(computerChoice)) {
        console.log(`you won ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
      } else {
        console.log(`you lost ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
      }
    }
    console.log(
      `Current score: human = ${humanScore}, computer = ${computerScore}`
    );

    console.log("---------------------------------");
    if (humanScore >= 5 || computerScore >= 5) {
      if (humanScore > computerScore) {
        console.log(
          `The End: You won!!, your Score ${humanScore} computer Score: ${computerScore}`
        );
      } else {
        console.log(
          `The End: you lost!!, your Score ${humanScore} computer Score: ${computerScore}`
        );
      }
    }
  }

  rock_B.addEventListener("click", (e) => {
    playRound(choice[0], getComputerChoice());
  });

  paper_B.addEventListener("click", (e) => {
    playRound(choice[1], getComputerChoice());
  });

  scissor_B.addEventListener("click", (e) => {
    playRound(choice[2], getComputerChoice());
  });
}

playGame();
