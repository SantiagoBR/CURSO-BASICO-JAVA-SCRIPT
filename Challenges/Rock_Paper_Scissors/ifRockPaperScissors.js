
function winResult(playerChoose, pcChoose) 
{
    var finalResult;

    if ((playerChoose === "rock" && pcChoose === "scissors") || (playerChoose === "paper" && pcChoose == "rock") || (playerChoose === "scissors" && pcChoose === "paper")) 
    {
        finalResult = "You win!";
        return finalResult;
    } else if(playerChoose === pcChoose) {
        finalResult = "You tie!";
        return finalResult;
    } else {
        finalResult = "PC wins";
        return finalResult;
    }
}

console.log(winResult('rock', 'scissors')) 