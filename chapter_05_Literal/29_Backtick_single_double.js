// Difference between Backtick (`), Single quote ('), and Double quote (") strings in JavaScript

// 1. Single Quotes ('')
// Used for defining string literals. Special characters like new lines must be escaped.
const singleQuoteString = 'This is a string in single quotes. It\'s useful for simple text.';

// 2. Double Quotes ("")
// Functionally the same as single quotes. Also requires escapes for some special characters.
const doubleQuoteString = "This is a string in double quotes. It can contain apostrophes like 'this'.";

// 3. Backticks (Template Literals) (``)
// Introduced in ES6, backticks allow for:
//   - Multiline strings (without needing escapes)
//   - String interpolation using ${...}
const name = 'Alice';
const backtickString = `This is a string in backticks.\nYou can write multiline text easily.
Hello, ${name}!`;

// Examples:
console.log(singleQuoteString);
// Output: This is a string in single quotes. It's useful for simple text.

console.log(doubleQuoteString);
// Output: This is a string in double quotes. It can contain apostrophes like 'this'.

console.log(backtickString);
/* Output:
This is a string in backticks.\nYou can write multiline text easily.
Hello, Alice!
*/

// ------------------
// Advanced Uses: Template Literals (Backticks)
// ------------------

// 1. Variable Interpolation (Inserting variable values)
const age = 30;
const interpolationExample = `My name is ${name} and I am ${age} years old.`;
console.log(interpolationExample);
// Output: My name is Alice and I am 30 years old.

// 2. Multi-line String
const multiLineExample = `This is a multi-line string using backticks.
You don't need to use special characters for new lines.
This makes formatting easier!`;
console.log(multiLineExample);
/* Output:
This is a multi-line string using backticks.
You don't need to use special characters for new lines.
This makes formatting easier!
*/

// 3. Expression inside ${}
const a = 5;
const b = 10;
const expressionExample = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(expressionExample);
// Output: The sum of 5 and 10 is 15.

// ------------------
// Quick Comparison
// ------------------
/*
| Feature              | Single/Double Quotes | Backticks (Template Literals) |
|----------------------|---------------------|-------------------------------|
| Basic strings        | Yes                 | Yes                           |
| Variable Interp.     | No                  | Yes                           |
| Multi-line strings   | No (must use \n)   | Yes                           |
| Expressions in text  | No                  | Yes (${...})                  |
*/
