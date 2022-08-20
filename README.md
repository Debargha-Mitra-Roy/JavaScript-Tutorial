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
      name: "JavaScript"
      work: "Web Development",
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