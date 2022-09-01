/* In the previous question, use console.error to log the error if the age entered is negetive. */

const canDrive = (age) => {
    return age >= 18 ? true : false;
}

let runAgain = true;

while (runAgain) {

    let age = prompt("Enter the age : ");
    age = Number.parseInt(age);

    if (age < 0) {
        console.error("Please enter a valid age!!!");
        break;
    }

    if (canDrive(age)) {
        alert("Yes!!! You can Drive.");
    }

    else {
        alert("No!!! You can not Drive.");
    }

    runAgain = confirm("Do you want to play again?");
}