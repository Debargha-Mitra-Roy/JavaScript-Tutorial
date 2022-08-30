# JavaScript Tutorial

* ## Introduction to Programming

  Programming is the act of constructing a program, a set of precise instructions telling a computer what to do.

* ## What is <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a>
  
  <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a> is a standard on which JavaScript is based. It was created to ensure that different documents on JavaScript are actually talking about the same language.

  JavaScript & <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a> can almost always be used interchangeably JavaScript is very liberal in what it allows.

* ## How to execute JavaScript

  JavaScript can be executed right inside one's browser. You can open the JavaScript console and Start Writing Java Script there.

  Another way to execute JavaScript is a runtime like <a href="https://nodejs.org/">Node.js</a> which can be installed and used to run JavaScript code.

  Yet another way to execute JavaScript is by inserting it inside `<script>` tag of a <a href="https://en.wikipedia.org/wiki/HTML">HTML</a> document.

  ```bash
  node file.js
  ```

* ## Variables & DataTypes

  A variable is a container that stores a value. This is very similar to the containers used to store a datatype.

  ```js
  var a = 7; // Literal
  let a = 7; // Declaring Variable
  
  /*
    Here 'a' is identifier &  '=' is assignment operator
  */
  ```

  * ### Rules for choosing variable names
  
    1. letters (`A - Z` & `a - z`), digits (`0 - 9`), underscores  (`_`) & `$` sign allowed.
  
    2. Must begin with a `$`, `_` or a letter.
  
    3. JavaScript reerved words cannot be used as variable name.
  
    4. Variable names are case sensitive.
  
  * ### `var` vs `let` in JavaScript
  
    1. `var` is globally scoped while `let` & `const` are block scoped.
  
    2. `var` can be updated & redeclared its scope.
  
    3. `let` can be updated but not redclared.
  
    4. `const` can neither be updated nor be redeclared.
  
    5. `var` variables are initialized with undefined whereas `let` & `const` variables are not initialized.
  
    6. `const` must be initialized during declaration unlike `let` & `var`.
  
  * ### Primitive DataTypes & Objects
  
  **Primitive datatypes** are a set of basic datatypes in JavaScript.

  **Objects** is a non-primitive datatypes in JavaScript.

  * There are the 7 types of ***Primitive datatypes*** in JavaScript.

    1. Null
    2. Number
    3. Boolean
    4. BigInt
    5. String
    6. Symbol
    7. Undefined
  
  * ***Objects***
  
    An object in JavaScript can be created as follows.

    ```js
    const item = {
      key: value,
      key: value,
      key: value,
    }
    ```

    ```js
    const item = {
      name: "JavaScript",
      company: "Netscape",
      work: "Web ,Development",
      type: "Programming Language",
      file_extension: ".js"
      engine: "ECMAScript",
      popularity: true
    }
    ```

    e.g.:-
    ```js
    const student = {
      name: "Ryzen",
      roll: 10,
      marks: 97,
      phone: 97xxxxxxxx,
      pass_status: true,
    }
    ```

* ## Expressions & Conditions

  A fragment of code that produces a value is called an expression. Every value written literally is an expression.

* ## Operators in JavaScript

  #### 1. Arithmetic Operators :-

  <p align="center">

   | Sign | Name |
   |:---:|:---:|
   | `+` | Addition |
   | `-` | Subtraction |
   | `*` | Multiplication |
   | `/`| Division |
   | `**` | Exponentiation |
   | `%` | Modulus |
   | `++` | Increment |
   | `--` | Decrement |

  </p>

  #### 2. Assignment Operators :-

    <p align="center">

   | Sign | Name |
   |:---:|:---:|
   | `=` | `x = y` |
   | `+=` | `x = x + y` |
   | `-=` | `x = x - y` |
   | `*=`| `x = x * y` |
   | `/=` | `x = x / y` |
   | `%=` | `x = x % y` |
   | `**=` | `x = x ** y` |

  </p>

  #### 3. Comparision Operators :-

    <p align="center">

   | Sign | Name |
   |:---:|:---:|
   | `==` | Equal to |
   | `!=` | Not equal to |
   | `===` | Equal value & type |
   | `!==`| Not equal value or not equal type |
   | `>` | Greater Than |
   | `<` | Less Than |
   | `>=` | Greater than or equal to |
   | `<=` | Less than or equal to |
   | `?` | Ternary operator |

  </p>

  #### 4. Logical Operators :-

    <p align="center">

    | Sign | Name |
    |:---:|:---:|
    | `&&` | Logical and |
    | `\|\|` | Logical or |
    | `!` | Logical not |

  </p>


* ## Comments on JavaScript
  
  Sometimes we want our programs to contain a text which is not executed by the JavaScript Engine.

  Such a text is called ***comment*** in JavaScript.

  A comment in JavaScript can be written as follows :-

  ```js
  let a = 2; // This is a single line comment

  /*
    This is a multiline comment
  */
  ```

  Sometimes comments are used to prevent the execution of some lines of code.

  ```js
  let a = true;
  // a = false; // Commented line won't executed
  ```

* ## Conditional Statement

  Sometimes we might have to execute a block of code based of some condition.
  
  For example a prompt might ask for the age of the user and if greater than 18, display a special message.

  In JavaScript we have three forms of `if ... else` statement.

  #### 1. `if statement` 
   
  The `if statement` in JavaScript looks like this :-

  ```js
  if(condition) {
    // execute this code
  }
  ```

  The `if statement` evaluates the conditon inside the `()`. If the condition is evaluated to true, the code is not executed.

  #### 2.  `if ... else statement`

  The `if statement` can have an optional else clause. The syntax looks something like this :-

  ```js
  if(condition) {
    // block of code if condition true
  } else {
    //  block of code if condition false
  }
  ```

  IF the condition is true, code inside if is executed else code inside the else block is executed.

  #### 3. `if ... else if ... else statement`

  Sometimes we might want to keep recheacking a set of conditions one by one until one matches we use if ... else if for achieving this.

  Syntax of if ... else if looks like this :-

  ```js
  if(condition) {
    // block of code if condition true
  } else if(condition) {
    // block of code if condition false
  } else {
    // block of code both if & else if condition are false
  }
  ```

* ## Ternary Operator
  
  Evaluates a condition and executes a block of code base on the condition.

  ```js
  condition ? expression1 : expression2
  ```

  e.g:-
  ```js
  (marks > 10) ? "Yes" : "No"; // If marks are greater than 10
  ```

* ## Loops & Functions

  We use loops to perform repeated actions. For example - If you are designed a task of a printing numbers from 1 to 100, it will be very hectic to do it manually. Loops help us automate such tasks.

* ## Types of Loops in JavaScript

  **for loop** :- loop a block of code no. of times.

  **for in loop** :- loops through the reys of an object.

  **for of loop** :- loops through the values of an object.

  **while loop** :- loops a block based on a specific condition.

  **do-while loop** :- while loop varient which runs atleast once.

  * #### The for loop :-
    
    The syntax of a for loop looks something like this -

    ```js
    for(statement1; statement2; statement3) {
        // Code to be executed
    }
    ```
    
    * `Statement1` is executed one time.

    * `Statement2` is the condition based on which the loop runs (loop body is executed).

    * `Statement3` is executed everytime the loop body is executed.

  * #### The for-in loop :-
    
    The syntax of a for-in loop looks like this -

    ```js
    for(key in object) {
        // Code to be executed
    }
    ```
    
    * #### The for-of loop :-
    
    The syntax of a for-of loop looks like this -

    ```js
    for (variable of iterable) {
        // Code to be executed
        // Iterable data-structure like Arrays, Strings etc.
    }
    ```
    * #### The while loop :-
    
    The syntax of a while loop looks like this -

    ```js
    while(condition) {
        // Code to be executed
        // Iterable data-structure like Arrays, Strings etc.
    }
    ```

    * **NOTE** :- If the condition becomes false, the loop will never end and this might crash the runtime.

    * #### The do-while loop :-
    
    The syntax of a while loop looks like this -

    ```js
    do {
        // Code to be executed
        // Executed atleast one time
    } while(condition);
    ```

* ## Functions in JavaScript
  
  A JavaScript function is a block of code designed to perform a particular task.

  The syntax of a while loop looks like this -

  ```js
  fuction myFunction() {

    // Code
  }
  ```
  or

  ```js
  fuction myFunction(parameter1, parameter2, ..., parameterN) {

    // Code
  }
  ```

  Fuction invocation is a way to use the code inside the function.

  A function can also return a value. The value is **returned** back to the caller.

  ```js
  const myFuntion = (parameter1, parameter2, ..., parameterN) => {

    // Code

    return <datatype>;
  }
  ```

* ## Strings

  Strings are used to store and manipulate text. String can be created using the following syntax.

  ```js
  let name = "Ryzen"; // Creates a string
  print(name.length); // This property prints length of the string
  ```

  Strings can also be created using single quotes.

  ```js
  let name = 'Ryzen';
  ```
 
  * ### Template Literals

    With template literals use backlits instead of quotes to define a string.
  
    ```js
    let name = "Ryzen";
    ```

    With template literals, it is possible to use both single as well as double quotes inside a string.
  
    ```js
    let sentence = `The name "is" Ryzen's`;
    ```

    We can insert variables directly in template literal. This is called string interpolation.
  
    ```js
    let a = `This is ${name}`;
    ```

  * ### Escape Sequance Characters

    If you try to print the following string, JavaScript will misunderstand it.

    ```js
    let name = 'Adam D'Angelo';
    ```

    We can use single quote escape sequence to solve the problem.

    ```js
    let name = 'Adam D\'Angelo';
    ```

    Similarly we can use `\` inside a string with double quotes.

    Other escape sequance characters are as follows :-
    <p align="center">

      | Symbol | Meaning |
      |:---:|:---:|
      | `\n` | Newline |
      | `\t` | Tab |
      | `\r` | Carriage Return |
    </p>

  * ### String Properties & Methods :-

    a. 
    ```js
    let name = "Ryzen";
    print(name.length); // Prints '5'
    ```

    b.
    ```js
    let name = "Ryzen";
    print(name.toUpperCase()); // Prints "RYZEN"
    ```

    c.
    ```js
    let name = "Ryzen";
    print(name.toLowerCase()); // Prints "ryzen"
    ```

    d.
    ```js
    let name = "Ryzen";
    print(name.slice(2, 4)); // Prints "ze" (from 2 to 4, 4 not included)
    ```

    e.
    ```js
    let name = "Ryzen";
    print(name.slice(2)); // Prints "zen" (from 2 to end)
    ```

    f.
    ```js
    let name = "Ryzen is a coder";
    print(name.replace("coder", "student")); // Prints "Ryzen is a student"
    ```

    g.
    ```js
    let name1 = "Ryzen";
    let name2 = "Debargha"
    let name = name1.concat(name2, "Yes"); // We can even use '+' operator
    print(name); // Prints "RyzenDebarghaYes"
    ```

    h.
    ```js
    let name = "  Ryzen  ";
    let newName = name.trim(); // removes whitespaces
    print(newName); // Prints "Ryzen"
    ```

    i. Strings are immutable. Inorder to access the character at an index we use the following syntax.

    ```js
    let name = "Ryzen";
    print(name[0]); // Prints 'R'
    print(name[1]); // Prints 'y'
    ```

* ## Arrays

  Arrays are variables which can hold more than one value.

  ```js
  const fruits = ["banana", "apple", "grapes"];
  const a = [7, "Ryzen", false];
  ```

  * ### Accessing values

    ```js
    let numbers = [1, 2, 7, 9];
    console.log(numbers[0]); // Prints 1
    console.log(numbers[2]); // Prints 7
    ```

  * ### Finding the length
   
    ```js
    let numbers = [7, 2, 40, 9];
    console.log(numbers.length); // Prints 4, lenght of the array
    ```

  * ### Changing the values

    ```js
    let numbers = [7, 2, 40, 9];
    /* Arrays are mutable. Arrays can be changed. */
    numbers[2] = 6;
    console.log(numbers); // Prints [7, 2, 6, 9]
    ```

  * ### Type of Array

    ```js
    const n = [1, 2, 3, 4];

    console.log(typeof n); // Prints 'Object'
    ```

  * ### Notes

    Array can hold many values under a single name.

  * ### Array Methods

    There are some important array methods in JavaScript. Some of them are as follows :

    1. #### `toString()`
       
       Converts an array to a string of comma separated values.

       ```js
       let n = [1, 7, 9];
       n.toString(); // 1, 7, 9
       ```

    2. #### `join()`

       Joins all the array elements using a separator.

       ```js
       let n = [1, 7, 9];
       n.join("-"); // 1-7-9
       ```

    3. #### `pop()`
      
       Removes last element from the array.

       ```js
       let n = [1, 7, 9];
       n.pop() // Update the original array returns the popped value
       ```

    4. #### `push()`

       Adds a new element at the end of the array.

       ```js
       let n = [1, 7, 9];
       /* Modules of the original array, returns the new array length */
       n.push(8); // [1, 7, 9, 8]
       ```

    5. #### `shift()`

       Removes first element & returns it.
       
    6. #### `unshift()`

       Adds element to the beginning. Returns new array length.

    7. #### `delete`

       Array elements can be deleted using the delete operator.
       ```js
       let n = [1, 7, 9];
       /* delete is an operator */
       n.delete[1]; // [7, 9]
       ```

    8. #### `concat()`

       Used to join arrays to the given array.

       ```js
       let a1 = [1, 2, 3];
       let a2 = [4, 5, 6];
       let a3 = [7, 8, 9];

       /* Returns a new array. does not change existing arrays */
       a1.concat(a2, a3); // Returns [1, 2, 3, 4, 5, 6, 7, 8, 9]

    9. #### `sort()`
       
       `sort()` method is used to sort an array alphabetically.

       ```js
       let a = [7, 9, 8];
       /* Modify the original array */
       a.sort(); // [7, 8, 9]
       ```

       `sort()` takes an optional campare function. If this function is provided as the first argument, the `sort()` function will consider these values (the value returned from the compare function) as the basis of sorting.

    10. #### `splice()`

        `splice()` can be used to add new items t an array.

        ```js
        const numbers = [1, 2, 3, 4, 5];
        // Returns deleted items modifies the Array
        numbers.splice(2, 1, 23, 24); // splice(position, no.of elements to remove, elements to be added)
        ```

    11. #### `slice()`

        Slices out a piece from an array. It creates a new array.

        ```js
        const num = [1, 2, 3, 4];
        num.slice(2); // [3, 4]
        num.slice(1, 3); // [2, 3]
        ```

    12. #### `reverse()`

        Reverses the elements in the sources array.
        
        ```js
        let a = [7, 9, 8];
        /* Modify the original array */
        a.reverse(); // [8, 9, 7]
        ```

  * ### Looping through Arrays

    Arrays can be looped through using the classical JavaScript for loop or through some other methods.

    * #### `forEach loop`

      Calls a function, once each array element.
      ```js
      const a = [1, 2, 3];
      a.forEach((value, index, array) => {
        // Function Logic
      });
      ```

    * #### `map()`

      Creates a new array by performing some operation on each array element.

      ```js
      const a = [1, 2, 3];
      a.map((value, index, array) => {
        return (value * value);
      });
      ```

    * #### `filter()`

      Filters an array with values that passses a test. Creates a new array.

      ```js
      const a = [1, 6, 3, 7, 5];
      a.filter(greater_than_ 5);
      ```
      
    * #### `reduce method`

      Reduces an array to a single value.

      ```js
      const n = [1, 2, 3, 4, 5];
      let sum = numbers.reduce(add) // add -> function // sum = (1 + 2 + 3 + 4 + 5) 
      ```
    
    * #### `Array from()`
      
      Used to create an array from any other object.

      ```js
      Array.from("Harry");
      ```

    * #### `for...of`

      for...of loop can be used to get the values from the array.

    * #### `for...in`

      for...in loop can be used to get the keys from an array.