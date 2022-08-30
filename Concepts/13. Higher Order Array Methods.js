// Array Map Method - map()
let arr = [45, 23, 21];

let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return (value + index);
})

console.log(a);

// Array Filter Method - filter()
let num = [45, 23, 21, 0, 3, 5];

let b = num.filter((a) => {
    return (a < 10);
})

console.log(b);

// Array Reduce Method - reduce()
let nums = [1, 2, 3, 5, 2, 1];

let newArr = nums.reduce((h1, h2) => {
    return (h1 + h2);
})

console.log(newArr);

let nums1 = [1, 2, 4, 6, 3, 1, 2, 5];

const reduceFunction = (h1, h2) => {
    return (h1 + h2);
}

let newArr1 = nums1.reduce(reduceFunction);

console.log(newArr1);