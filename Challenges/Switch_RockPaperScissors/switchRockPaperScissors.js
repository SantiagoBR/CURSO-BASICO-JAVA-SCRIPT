function result(playerChoose, pcChoose) {
    var finalResut;
    switch (playerChoose + pcChoose) {
        case ('rockrock'):
        case ('paperpaper'):
        case ('scissorsscissors'):
            finalResut = "You tie!";
            break;
        case ('rockscissors'):
        case ('scissorspaper'):
        case ('paperrock'):
            finalResut = "You win!";
            break;
        case ('rockpaper'):
        case ('scissorsrock'):
        case ('paperscissors'):
            finalResut = "PC wins!";
            break;
    }

    console.log(finalResut);
}