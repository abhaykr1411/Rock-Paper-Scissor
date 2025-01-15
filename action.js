const choice = ["rock", "paper", "scissor"];
let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choice.length);
  console.log(`computer random choice is: ${choice[randomIndex]}\n`);
  return choice[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt("Rock/paper/scissor: ").toLowerCase();
  while (!(choice.includes(humanChoice))) {
    humanChoice = prompt(
      "Oops! wrong input (rock/paper/scissor): "
    ).toLowerCase();
  }

  console.log(`Human choice is: ${humanChoice}`);
  return humanChoice;
}

function playRound(humanChoice, computerchoice)
{
    if(humanChoice === computerChoice)
    {
        console.log(`Draw b/w ${humanChoice} & ${computerChoice}`);
    }else if((humanChoice == "scissor" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "scissor"))
    {
        if(choice.indexOf(humanChoice) < choice.indexOf(computerChoice))
        {
            console.log(`you won ${humanChoice} beats ${computerChoice}`);
        }
        else {
            console.log(`you lost ${computerChoice} beats ${humanChoice}`);
        }
    }
    else
    {
        if(choice.indexOf(humanChoice) > choice.indexOf(computerChoice))
        {
            console.log(`you won ${humanChoice} beats ${computerChoice}`);
        }
        else
        {
            console.log(`you lost ${computerChoice} beats ${humanChoice}`);
        }
    }
}
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);
