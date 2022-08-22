/* Write a JavaScript program to find whether a number is divisible by either 2 and 3. */

let n = prompt("Enter the number : ");

if (n % 2 == 0 && n % 3 == 0)
    console.log("The number is divisible by both 2 and 3.")

else if (n % 2 == 0 && n % 3 != 0)
    console.log("The number is only divisible by 2")

else if (n % 2 != 0 && n % 3 == 0)
    console.log("The number is only divisible by 3")

else
    console.log("The number is divisible by neither 2 nor 3.")