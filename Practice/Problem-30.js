/* In previous question use confirm to ask the user if he wants to se the prompt again. */

const canDrive = (age) => {
    return age >= 18 ? true : false;
}

let runAgain = true;

while (runAgain) {

    let age = prompt("Enter the age : ");
    age = Number.parseInt(age);
    
    if (canDrive(age)) {
        alert("Yes!!! You can Drive.");
    }

    else {
        alert("No!!! You can not Drive.");
    }

    runAgain = confirm("Do you want to play again?");
}