const choices = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    let randIndex = Math.round(Math.random() * (choices.length - 1));
    return choices[randIndex];
}

console.log(getComputerChoice());