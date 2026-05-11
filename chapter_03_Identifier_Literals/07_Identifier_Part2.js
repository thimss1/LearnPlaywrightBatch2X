// JavaScript Identifier Naming Conventions & Examples
// ---------------------------------------------------
// Demonstrates major naming conventions for identifiers, with comments and examples.

// ==================================
// camelCase
// First word starts lowercase, new words start with Capital. Used for variables, functions, object properties.
var firstName = "Pramod";
var accountBalance = 2500;
var numApplesInBag = 5;
console.log('camelCase:', firstName, accountBalance, numApplesInBag);
// Invalid:
// var first-Name = "Wrong"; // ❌ Hyphens not allowed

// ==================================
// PascalCase (a.k.a. UpperCamelCase)
// Each word starts with a CAPITAL. Often used for class names and constructors.
var UserProfile = "Basic User";
function ShoppingCart() {}
class PersonInfo {}
console.log('PascalCase:', UserProfile, ShoppingCart.name, PersonInfo.name);
// Invalid:
// var Person Info = "No spaces"; // ❌ Spaces not allowed

// ==================================
// snake_case
// All lowercase, words separated by underscores. Sometimes used for variable_names or function_names.
var first_name = "Amit";
var last_name = "Gupta";
console.log('snake_case:', first_name, last_name);
// Invalid:
// var first name = "invalid"; // ❌ Spaces are not allowed

// ==================================
// SCREAMING_SNAKE_CASE (a.k.a. UPPER_SNAKE_CASE)
// All letters UPPERCASE, words separated by underscores. Common for constants.
const MAX_USERS = 100;
const API_KEY = "key-example";
console.log('SCREAMING_SNAKE_CASE:', MAX_USERS, API_KEY);
// Invalid:
// const 2MAX_USERS = 50; // ❌ Cannot start with a number

// ==================================
// Hungarian Notation
// Prefix variable name with a lowercase tag that denotes type or purpose. (Not standard, but sometimes seen)
var strUserName = "Arun"; // 'str' prefix for string
var iCounter = 10;         // 'i' prefix for integer
console.log('Hungarian Notation:', strUserName, iCounter);
// Invalid:
// var int counter = 5; // ❌ Spaces not allowed; tag must be part of identifier

// ==================================
// Case sensitivity
// Identifiers with different cases are distinct
var loginuser = "lowercase only";
var loginUser = "camelCase version";
console.log('Case sensitivity:', loginuser, loginUser); // Different variables

// ==================================
// kebab-case (for reference only)
// Not valid in JS! Used in CSS or JSON only.
// var my-variable = "demo"; // ❌ Invalid: hyphens are not allowed

// ==================================
// Train-Case (for reference only)
// Not valid in JS! Used in some documentation, URLs, titles. Like Kebab-Case but Each-Word-Capitalized.
// Example: Train-Case, My-Variable-Name
// var My-Variable-Name = "demo"; // ❌ Invalid: hyphens are not allowed


// ==================================
// QUICK REFERENCE SUMMARY TABLE
// ---------------------------------------------------
// | Convention              | Example              | Common Usage                |
// |-------------------------|----------------------|----------------------------|
// | camelCase               | myVariableName       | variables, functions       |
// | PascalCase              | MyClassName          | classes, constructors      |
// | snake_case              | my_variable_name     | variables, some functions  |
// | SCREAMING_SNAKE_CASE    | MAX_LIMIT            | constants                  |
// | Hungarian Notation      | strUserName, iCount  | legacy/style preference    |
// | kebab-case (INVALID)    | my-variable-name     | ✗ NOT VALID in JS          |
// | Train-Case (INVALID)    | My-Variable-Name     | ✗ NOT VALID in JS          |


// ✅ Use: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, and (optionally) Hungarian notation
// ❌ DO NOT use spaces, hyphens, start with numbers, or reserved keywords
// Identifiers are case-sensitive
// Choose a convention that matches the project's style and be consistent!

// ==================================
// Console Output Summary
// ----------------------------------
// camelCase: Pramod 2500 5
// PascalCase: Basic User ShoppingCart PersonInfo
// snake_case: Amit Gupta
// SCREAMING_SNAKE_CASE: 100 key-example
// Hungarian Notation: Arun 10
// Case sensitivity: lowercase only camelCase version
// kebab-case: NOT VALID in JS
// Train-Case: NOT VALID in JS