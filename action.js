const choices = ["rock", "paper", "scissor"];


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

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        let hc = humanChoice();
        let cc = computerChoice();
    
        if(hc === cc)
        {
            console.log(`Draw! computer: ${cc} and your choice: ${hc}`);
        }
        else if((hc === choices[0] || hc === choices[2]) && (cc === choices[0] || cc === choices[2]))
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

    for (let curRound = 1; curRound <= 5; curRound++)
    {
        console.log(`round: ${curRound}`);
        playRound(getHumanChoice, getComputerChoice);
    }

    if (computerScore < humanScore) console.log(`You won! Computer Score: ${computerScore} and your score: ${humanScore}`);
    else if (computerScore > humanScore) console.log(`You lost! Computer Score: ${computerScore} and your score: ${humanScore}`);
    else console.log(`Draw! Computer Score: ${computerScore} and your score: ${humanScore}`)
}

playGame();