/*
    Guess Number Game :-

    Write a JavaScript program to generate a random number and store it in a variable.
    The program then takes an input from the user to tell them whether the guess was
    correct greater or lesser than the original number. 
    (100 - no. of guesses) is the score of the user. The program is expected to terminate
    once the number is guessed. Number should be between 1 - 100.
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let num = (getRandomInt(100));
// console.log(num);

let i = 0, x = -1;

while (x != num) {
    x = prompt("Guess the number : ")
    i++;

    if (x < num) {
        alert("Number is Bigger !!!");
    }

    else if (x > num) {
        alert("Number is Smaller !!!");
    }

    else {
        alert("Congratulations !!! You guessed it right.\nScore : " + (100 - i) + "\nAttempt(s) : " + i);
        break;
    }
}