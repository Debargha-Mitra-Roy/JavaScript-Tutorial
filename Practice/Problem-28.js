/* Use reduce to calculate factorial of a given number from an array of the first 'n' natural numbers ('n' being the number whose factorial need to be calculated). */

let arr = [1, 2, 3, 4, 5];

let n = arr.reduce((x, y) => {
    return (x * y);
})

console.log(n);