/*
    Snake, Water & Gun :-

    Use JavaScript to create a game of 'Snake', 'Water' & Gun.
    The game shouldask you to enter 'S', 'W' or 'G'. The computer
    should able to generate 'S', 'W' or 'G' and declare win or
    loss using alert. Use confirm and prompt whenever required.
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let num = (getRandomInt(3));
console.log(num);

let i = 0, runAgain = true, comp, win = 0, loss = 0, draw = 0;

while (runAgain) {

    let x = prompt("Guess the Snake(S), Water(W) & Gun(G) : ")
    i++;

    if (num == 1) {
        comp = 'S';
    }

    else if (num == 2) {
        comp = 'W';
    }

    else {
        comp = 'G';
    }

    if ((x == 'S' && comp == 'W') || (x == 's' && comp == 'W')) {
        win++;
    }

    else if ((x == 'S' && comp == 'G') || (x == 's' && comp == 'G')) {
        loss++;
    }

    else if ((x == 'S' && comp == 'S') || (x == 's' && comp == 'S')) {
        draw++;
    }

    else if ((x == 'W' && comp == 'W') || (x == 'w' && comp == 'W')) {
        draw++;
    }

    else if ((x == 'W' && comp == 'G') || (x == 'w' && comp == 'G')) {
        win++;
    }

    else if ((x == 'W' && comp == 'S') || (x == 'w' && comp == 'S')) {
        loss++;
    }

    if ((x == 'G' && comp == 'W') || (x == 'g' && comp == 'W')) {
        loss++;
    }

    else if ((x == 'G' && comp == 'G') || (x == 'g' && comp == 'G')) {
        draw++;
    }

    else if ((x == 'G' && comp == 'S') || (x == 'g' && comp == 'S')) {
        win++;
    }

    runAgain = confirm("Do you want to play again?");


    if (runAgain == false) {

        let humanScore = (win * 2) + (draw * 1);
        let compScore = (loss * 2) + (draw * 1);

        if (humanScore > compScore) {
            alert("Congratulations !!!\nYou win !\nTotal Round : " + i + "Your Score : " + humanScore + "\nComputer Score : " + compScore);
        }

        else {
            alert("Sorry !!!\nYou lost ! Never Give Up\nTotal Round : " + i + "\nYour Score : " + humanScore + "\nComputer Score : " + compScore);
        }
    }
}