const choices = ["images/Rock.png", "images/paper.png", "images/scissors.png"];
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

// function playGame()
// {
//     let humanScore = 0;
//     let computerScore = 0;

    

//     for (let curRound = 1; curRound <= 5; curRound++)
//     {
//         console.log(`round: ${curRound}`);
//         playRound(getHumanChoice, getComputerChoice);
//     }

//     if (computerScore < humanScore) console.log(`You won! Computer Score: ${computerScore} and your score: ${humanScore}`);
//     else if (computerScore > humanScore) console.log(`You lost! Computer Score: ${computerScore} and your score: ${humanScore}`);
//     else console.log(`Draw! Computer Score: ${computerScore} and your score: ${humanScore}`)
// }

function playRound(humanChoice, computerChoice)
{
    let hc = humanChoice;
    let cc = computerChoice();
    
    if(hc === cc)
    {
        p_status.textContent = "Draw!";
        c_status.textContent = "Draw!";
        console.log(`Draw! computer: ${cc} and your choice: ${hc}`);
    }
    else if((hc === choices[0] || hc === choices[2]) && (cc === choices[0] || cc === choices[2]))
    {
        if (choices.indexOf(hc) > choices.indexOf(cc))
        {
            p_status.textContent = "Lose!"
            c_status.textContent = "Wins!"; 
            console.log(`You lose! ${cc} beats ${hc}.`);
            computerScore += 1;
        }else
        {
            p_status.textContent = "Wins!"
            c_status.textContent = "Lose!"; 
            console.log(`You win! ${hc} beats ${cc}`);
            humanScore += 1;
        }
    } 
    else
    {
        if (choices.indexOf(hc) < choices.indexOf(cc))
        {
            p_status.textContent = "Lose!"
            c_status.textContent = "Wins!"; 
            console.log(`You lose! ${cc} beats ${hc}.`);
            computerScore += 1;
        }else
        {
            p_status.textContent = "Wins!"
            c_status.textContent = "Lose!";
            console.log(`You win! ${hc} beats ${cc}`);
            humanScore += 1;
        }
    }
    your_score.textContent = humanScore;
    cpu_score.textContent = computerScore;
    
    p_choice.src = hc;
    c_choice.src = cc;
}

let rock_b = document.querySelector("#rock");
let paper_b = document.querySelector("#paper");
let scissor_b = document.querySelector("#scissors");

let your_score = document.querySelector("#p-score");
let cpu_score = document.querySelector("#c-score");

let p_choice = document.querySelector(".player-view .display img");
let c_choice = document.querySelector(".cpu-view .display img");

let p_status = document.querySelector(".player-view .status");
let c_status = document.querySelector(".cpu-view .status");

rock_b.addEventListener("click", () => {
    playRound(choices[0], getComputerChoice);
});

paper_b.addEventListener("click", () => {
    playRound(choices[1], getComputerChoice);
});

scissor_b.addEventListener("click", () => {
    playRound(choices[2], getComputerChoice);
});