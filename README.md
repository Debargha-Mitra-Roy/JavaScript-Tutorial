# JavaScript Tutorial

* ### Introduction to Programming

  Programming is the act of constructing a program, a set of precise instructions telling a computer what to do.

* ### What is <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a>
  
  <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a> is a standard on which JavaScript is based. It was created to ensure that different documents on JavaScript are actually talking about the same language.

  JavaScript & <a href="https://en.wikipedia.org/wiki/ECMAScript">ECMAScript</a> can almost always be used interchangeably JavaScript is very liberal in what it allows.

* ### How to execute JavaScript

  JavaScript can be executed right inside one's browser. You can open the JavaScript console and Start Writing Java Script there.

  Another way to execute JavaScript is a runtime like <a href="https://nodejs.org/">Node.js</a> which can be installed and used to run JavaScript code.

  Yet another way to execute JavaScript is by inserting it inside `<script>` tag of a <a href="https://en.wikipedia.org/wiki/HTML">HTML</a> document.

  ```bash
  node file.js
  ```

## Variables & DataTypes
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

* ### Expressions & Conditions

  A fragment of code that produces a value is called an expression. Every value written literally is an expression.

* ### Operators in JavaScript

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


* ### Comments on JavaScript
  
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

* ### Conditional Statement

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
  } else if {
    // block of code if condition false
  } else {
    // block of code both if & else if condition are false
  }
  ```

* ### Ternary Operator
  
  Evaluates a condition and executes a block of code base on the condition.

  ```js
  condition ? expression1 : expression2
  ```

  e.g:-
  ```js
  (marks > 10) ? "Yes" : "No"; // If marks are greater than 10
  ```