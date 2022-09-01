/* Write a program using prompt function to take input of age as a avalue from the user and use alert to tell him if he can drive! */

let age = prompt("Enter the age : ");
age = Number.parseInt(age);

const canDrive = (age) => {
    return age >= 18 ? true : false;
}

if (canDrive(age)) {
    alert("Yes!!! You can Drive.");
}

else {
    alert("No!!! You can not Drive.");
}