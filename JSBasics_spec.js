// Keyword example: var, let, const

// identifier: variable name

// literal: value assigned to variable

// operator: symbol that performs an operation on operands

// what is a variable? A container for storing data values

// ; is used to terminate a statement in JavaScript and it is not mandatory but it is a good practice to use it to avoid errors and improve readability of code

var a = 10;

console.log(a); // Output: 10

a = 20;
console.log(a); // Output: 20

// different identifiers

// 1. camelCase identifier (most common in JS)
var myName = "John";
let firstName = "Alice";
let lastName = "Johnson";

// 2. PascalCase identifier (used for classes/constructors)
var MYName = "Doe";
function PersonName(name) {
    this.name = name;
}

// 3. snake_case identifier
var my_name = "Smith";
var user_age = 25;

// 4. UPPER_CASE identifier (constants)
const PI = 3.14;
const MAX_SIZE = 100;
const BASE_URL = "https://example.com";

// 5. $ prefix identifier (valid in JS)
var $price = 9.99;
let $element = "button";

// 6. _ prefix identifier (often used for private-like variables)
var _privateVar = "secret";
let _counter = 0;

// 7. Single character identifiers
let x = 10;
let y = 20;
let z = x + y;

// 8. Descriptive multi-word identifiers
let totalNumberOfStudents = 50;
let isLoggedIn = true;
let hasPermission = false;

// 9. Number suffix identifiers
let item1 = "Apple";
let item2 = "Banana";
let item3 = "Cherry";

console.log("camelCase:", myName, firstName, lastName);
console.log("PascalCase:", MYName);
console.log("snake_case:", my_name, user_age);
console.log("UPPER_CASE:", PI, MAX_SIZE, BASE_URL);
console.log("$ prefix:", $price, $element);
console.log("_ prefix:", _privateVar, _counter);
console.log("Single char:", x, y, z);
console.log("Descriptive:", totalNumberOfStudents, isLoggedIn, hasPermission);
console.log("Number suffix:", item1, item2, item3);

// multiline comment example

/*
This is a multiline comment in JavaScript.
It can span multiple lines and is useful for providing detailed explanations or commenting out blocks of code.
*/

var firstName = "Alice";
var lastName = "Johnson";
var fullName = firstName + " " + lastName;
console.log(fullName); // Output: Alice Johnson

console.log("The value of PI is: " + PI); // Output: The value of PI is: 3.14

















