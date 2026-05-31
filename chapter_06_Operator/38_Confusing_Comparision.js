// 38_Confusing_Comparision.js
// Examples of confusing == and === comparisons in JavaScript

// == (Loose Equality) confusions
console.log(false == 0);               // true
console.log(false == '');              // true
console.log('' == 0);                  // true
console.log(null == undefined);        // true
console.log(null == false);            // false
console.log(null == 0);                // false
console.log(undefined == false);       // false
console.log(undefined == 0);           // false
console.log(' \t\r\n ' == 0);         // true
console.log([] == 0);                  // true
console.log('' == []);                 // true
console.log([] == false);              // true
console.log([1] == true);              // true
console.log([1] == '1');               // true
console.log([null] == '');             // true
console.log([undefined] == '');        // true
console.log([0] == false);             // true
console.log(['0'] == false);           // true
console.log([null] == false);          // true
console.log([[[]]] == false);          // true
console.log({} == '[object Object]');  // true

// == with objects/arrays reference
const arr1 = [];
const arr2 = [];
console.log(arr1 == arr2);             // false! (reference)
console.log(arr1 === arr2);            // false
console.log(arr1 == arr1);             // true

// Booleans and null/undefined coercion confusion
console.log(true == 1);                // true
console.log(false == 0);               // true
console.log(true === 1);               // false
console.log(false === 0);              // false
console.log(true + 1 == 2);            // true
console.log(false + 1 == 1);           // true
console.log(true + true == 2);         // true
console.log(false + false == 0);       // true
console.log(Boolean('false') == false);  // false ('false' is truthy)
console.log(Boolean('') == false);       // true
console.log(Boolean([]) == true);        // true (empty array is truthy)
console.log(Boolean({}) == true);        // true (empty object is truthy)
console.log(Boolean(undefined) == false);// true
console.log(Boolean(null) == false);     // true
console.log(Number(true) === 1);         // true
console.log(Number(false) === 0);        // true
console.log(Number(null) === 0);         // true
console.log(Number(undefined) === NaN);  // true
console.log(Number('') === 0);           // true

// === (Strict Equality) differences
console.log(false === 0);              // false
console.log('' === 0);                 // false
console.log(null === undefined);       // false
console.log([] === false);             // false
console.log([] === '');                // false
console.log([1] === true);             // false
console.log([1] === '1');              // false

// Number wrappers vs. primitive
console.log(0 == new Number(0));       // true
console.log(0 === new Number(0));      // false

// Special cases
console.log(NaN == NaN);               // false
console.log(NaN === NaN);              // false
console.log([] == ![]);                // true
console.log([] === ![]);               // false

// Object vs Primitive Confusions
console.log(new String('abc') == 'abc');       // true (object to primitive conversion)
console.log(new String('abc') === 'abc');      // false
console.log(new Number(1) == 1);               // true
console.log(new Number(1) === 1);              // false
console.log(new Boolean(false) == false);      // true
console.log(new Boolean(false) === false);     // false
console.log({}.toString() == '[object Object]');// true
console.log({} == '[object Object]');          // true
const o1 = {}; const o2 = {}; console.log(o1 == o2); // false (different object references)

// String to Number Traps
console.log('123abc' == 123);          // false
console.log('' == 0);                  // true
console.log('0xF' == 15);              // true (hex string)
console.log('01' == 1);                // true
console.log('  0012 ' == 12);          // true
console.log('42' == 42);               // true
console.log('42.0' == 42);             // true
console.log('042' == 42);              // true
console.log('foo' == NaN);             // false
console.log('foo' == false);           // false
console.log('' == false);              // true (empty string is falsy)
console.log(' ' == 0);                 // true (whitespace is treated as 0)
console.log('  ' == false);            // true (whitespace string is falsy)
console.log('\n' == false);           // true (newline string is falsy)
console.log('0' == false);             // true
console.log('0' === false);            // false
// Bonus edge case
debugger; // Use debugger to set a breakpoint if running this file interactively

// Not recommended: always prefer === except when you fully understand JavaScript coercion rules.