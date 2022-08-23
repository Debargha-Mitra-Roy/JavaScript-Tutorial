/* Write a program to print the marks of a student in object using for loop. */

let marks = {
    ryzen: 90,
    abc: 12,
    pqr: 16,
    xyz: 83
};

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}