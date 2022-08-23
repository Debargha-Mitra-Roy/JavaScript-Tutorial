/* Using for loop in an object */

let obj = {
    ryzen: 90,
    debargha: 85,
    xyz: 6
};

// for-in loop
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a]);
}

// for-of loop
for (let b of "ryzen") {
    console.log(b);
}