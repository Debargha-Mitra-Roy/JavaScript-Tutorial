/*
    DataTypes in JavaScripts :-
        1. Primitive DataTypes :-
            i. Null
           ii. Number
          iii. Boolean
           iv. BigInt
            v. String
           vi. Symbol
          vii. Undefined
        
        2. Objects
*/

/* Primitive DataTypes */
let a = null;                          // Null
let b = 345;                           // Number
let c = true;                          // Boolean
let d = BigInt("567") + BigInt("3");   // BigInt
let e = "Ryzen";                       // String
let f = Symbol("This is a Symbol");    // Symbol
let g = undefined;                     // Undefined

console.log(a, b, c, d, e, f, g)
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g)

/* Objects */
const item = {
    "Ryzen": true,
    "Suprio": false,
    "Ayan": 21,
    "Debargha": undefined
}

console.log(item["abc"])
console.log(item["Ryzen"])