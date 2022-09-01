/* Write a program to change the URL to google.com (Redirect) if user enters a number greater than 4. */

let num = prompt("Enter the age : ");
num = Number.parseInt(num);

if (num > 4) {
    location.href = "https://google.com";
}