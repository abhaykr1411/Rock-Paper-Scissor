const choice = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choice.length);
  console.log(`computer random choice is: ${choice[randomIndex]}\n`);
}

function getHumanChoice() {
  let humanChoice = prompt("Rock/Paper/Scissors: ");
  console.log(`Human choice is: ${humanChoice}`);
}

getComputerChoice();
getHumanChoice();
