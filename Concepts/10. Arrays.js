let a = [1, 2, 3, 4, null, false, "Not Present"];
console.log(a);

console.log(a[0]); // Prints '1'
console.log(a[5]); // Prints 'null'
console.log(a[8]); // Prints 'undefined', because index 8 does not exist

console.log(a.length); // length of the array

a[7] = 5; // Adding a new value to the array
a[0] = 8; // Adding a new value to the array
console.log(a);

console.log(typeof a); // Prints 'object'