const choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let randIndex = Math.round(Math.random() * (choices.length - 1));
    return choices[randIndex];
}

function getHumanChoice()
{
    let humanChoice = prompt("rock / paper / scissor? : ").toLowerCase();
    for(;!choices.includes(humanChoice);)
    {
        humanChoice = prompt("Invalid input, rock / paper / scissor? : ").toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{
    const hc = humanChoice();
    const cc = computerChoice();
    
    if(hc === cc)
    {
        console.log(`Draw! computer: ${cc} and your choice: ${hc}`);
    }
    else if((hc === choices[0] || hc === choices[2]) && (cc === "rock" || cc === "scissors"))
    {
        if (choices.indexOf(hc) > choices.indexOf(cc))
        {
            console.log(`You lose! ${cc} beats ${hc}.`);
            computerScore += 1;
        }else
        {
            console.log(`You win! ${hc} beats ${cc}`);
            humanScore += 1;
        }
    } 
    else
    {
        if (choices.indexOf(hc) < choices.indexOf(cc))
        {
            console.log(`You lose! ${cc} beats ${hc}.`);
            computerScore += 1;
        }else
        {
            console.log(`You win! ${hc} beats ${cc}`);
            humanScore += 1;
        }
    }
}

// console.log(`Computer Choice: ${getComputerChoice()}`);
// console.log(getHumanChoice());
playRound(getHumanChoice, getComputerChoice);