/* Array Methods */

let nums = [1, 2, 3, 4, 5];

// toString()
let a = nums.toString() // Returns a string representation of an array
console.log(a);
console.log(typeof a);

// join(string)
let b = nums.join(" and "); // Adds all the elements of an array into a string, separated by the specified separator string
console.log(b);
console.log(typeof b);

// pop()
let c = nums.pop(); // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
console.log(nums.length);
console.log(c);

// push(element)
let p = nums.push(56) // Appends new elements to the end of an array, and returns the new length of the array
console.log(nums);
console.log(nums.length);

// shift()
let q = nums.shift(); // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
console.log(nums);
console.log(nums.length);
console.log(q);

// unshift(element)
let r = nums.unshift(78) // Inserts new elements at the start of an array, and returns the new length of the array
console.log(nums);
console.log(nums.length);

// delete()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete arr[0]; // Delete the 0-th index
console.log(arr);
console.log(arr.length);

// concat(arrays)
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let newArr = arr1.concat(); // Combines two or more arrays. This method returns a new array without modifying any existing arrays

// sort()
let arr3 = [83, 4, 0, 6, 8, 1, 4, 6, 34, 90, 1, 32];
arr3.sort() // Sorts an array in place. This method mutates the array and returns a reference to the same array
console.log(arr3)

// compare in sort()
let arr4 = [14, 17, 98, 78, 35, 2, 64, 97, 1, 2];

let compare1 = (a, b) => {
    return (a - b);
}

arr3.sort(compare1); // Sorts in ascending order
console.log(arr3);

let arr5 = [50, 23, 67, 89, 34, 12, 76, 54, 35, 69, 10];

let compare2 = (a, b) => {
    return (b - a);
}

arr3.sort(compare2); // Sorts in descending order
console.log(arr3);

// splice() => splice(start_index, delete_count, add_elements)
let arr6 = [41, 29, 54, 69, 8, 3, 5, 91, 29];
let deletedValues = arr6.splice(2, 3, 1021, 1022, 1023, 1024); // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(arr6);
console.log(typeof deletedValues);
console.log(deletedValues);

// slice() => slice(start_index, end_index)
let arr7 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let slice1 = arr7.slice(); // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array
console.log(slice1);

let slice2 = arr7.slice(2);
console.log(slice2);

let slice3 = arr7.slice(1, 4);
console.log(slice3);