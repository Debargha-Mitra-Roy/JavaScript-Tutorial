let name = "ryzen";
let friend = 'pqr';

console.log(name.length);
console.log(name[0]); // Prints 'r'
console.log(friend);


/* Template literals */
let boy1 = "abc";
let boy2 = "xyz";

let sentence = `${boy1} is a friend of ${boy2}`; // Template literals
console.log(sentence);

/* Escape Sequence Characters */
let cannot = 'can\'t'; // '\' -> Continues a string
console.log(cannot);
console.log(cannot.length);

let speak = 'I am\na boy'; // '\n' -> New Line
console.log(speak);

let fruit = 'pine\rapple'; // '\r' -> Carriage return
console.log(fruit);

let man = "Suprio\tKundu"; // '\t' -> Tab
console.log(man);