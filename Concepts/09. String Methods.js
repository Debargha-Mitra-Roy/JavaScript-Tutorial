let name = "Ryzen\'s";

/* length */
console.log(name.length) // Prints the length of the string

/* toUpperCase() & toLowerCase() */
console.log(name.toUpperCase()) // Convert all characters to uppercase
console.log(name.toLowerCase()) // Convert all characters to lowercase

/* slice() */
console.log(name.slice(2, 4)) // Returns a section of a string
console.log(name.slice(2))

/* replace() */
console.log(name.replace("Ry", "FwY")); // Replaces text in a string, using a regular expression or search string.

/* concat() */
let friend = "xyz";
console.log(name.concat(" is a friend of ", friend, " OK.")) // Returns a string that contains the concatenation of two or more strings.

/* trim() */
let man = "            Adam            ";
console.log(man);
console.log(man.trim()); // Removes the leading and trailing white space and line terminator characters from a string.