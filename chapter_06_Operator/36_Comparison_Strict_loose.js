// number == string
console.log(42  == "42"); // == -> loose comparison
console.log(42  === "42"); // === -> strict comparison data type aand converted value
console.log(42 == "45"); // value different

console.log(5 === 5);

console.log(5 === "5");

console.log(5 == 5);
console.log(5 == "5");

console.log( 0 == "");  // ? "" = converted to 0 - checked by the loose
console.log( 0 === "");

console.log( true == 1);
console.log( false == 0);
console.log( true == "1");
console.log( true == 2);

console.log(5 != "5") // false , 5 = int, "5" string, both of them are not equal?
console.log(5 !== "5") // true ( value, dataType)

// === Strict check we will check for both the datatype and value
// == Loose check we will check either value or data type.
