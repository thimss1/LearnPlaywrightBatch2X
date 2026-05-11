// Beginner-Friendly Examples of JavaScript Identifiers
// ---------------------------------------------------
// Identifiers are names for variables, functions, etc. They must follow certain rules.

// ===== Valid Identifiers =====
var name = 'Alice';        // starts with a letter
var _score = 99;           // starts with an underscore
var $amount = 100;         // starts with a dollar sign
var user1 = 'Bob';         // can have numbers, just not at the start
var myVariable = 'cat';    // camelCase naming
var total_amount$ = 55;    // underscores/dollars anywhere after the first letter
var café = 'coffee';       // Unicode/accents are allowed
var 数据 = 'data';          // Non-English Unicode characters

// ===== Invalid Identifiers (These will cause errors!) =====
// Uncomment to see the errors in the console
// var 1user = 'error';        // Cannot start with a number
// var var = 5;                // Cannot use reserved words
// var true = 'no';            // Cannot use reserved words
// var my-variable = 9;        // Hyphens are not allowed
// var user name = 'Sam';      // Spaces are not allowed
// var #value = 10;            // Cannot start with symbol other than _ or $

// ===== Identifier Names are Case Sensitive =====
var myValue = 10;
var myvalue = 20;
// myValue and myvalue are two different variables

// ===== Best Practice =====
// Use meaningful names and camelCase for variables
// Example:
var firstName = 'Jane';
var lastName = 'Doe';


// 2. Identifiers with Unicode letters
var café = 'Valid: Unicode letter (é)';
var 变量 = 'Valid: Unicode non-Latin letters (Chinese example)';

// 3. Case Sensitivity
var example = 'lowercase';
var Example = 'capitalized';
// console.log(example); // 'lowercase'
// console.log(Example); // 'capitalized'
// These are two different identifiers!

// 4. Invalid Identifiers (examples shown as comments because they cause errors)
// var 123abc = 'Invalid: Cannot start with a digit';
// var my-variable = 'Invalid: Hyphens are not allowed';
// var my variable = 'Invalid: Spaces are not allowed';
// var function = 'Invalid: Reserved keyword';
// var for = 'Invalid: Reserved keyword';

// 5. Using identifiers
function greetUser(userName) {
  return 'Hello, ' + userName + '!';
}

console.log(greetUser(myVariable));  // Valid usage

// 6. Best Practices
// - Choose descriptive names: productPrice, userProfile, fetchData
// - Avoid single-letter names except for counters (i, j, k, etc.)
// - Use camelCase for variables and functions: orderTotal
// - Constants by convention use ALL_CAPS: const MAX_SIZE = 100;
