/* Write a program to print the marks of a student in object using for-in loop. */

let marks = {
    ryzen: 90,
    abc: 12,
    pqr: 16,
    xyz: 83
};

for (let key in marks) {
    console.log("the marks of " + key + " are " + marks[key]);
}