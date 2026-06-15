if ("hello") console.log("String is truthy!"); // "hello = truthy" because in js any non-empty string is truthy
if (42) console.log("Number is truthy!");
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");

if ("") console.log("Won't print!"); //falsy  — completely empty!

if (null) console.log("Won't print!"); //falsy  — null!


if (undefined) console.log("Won't print!"); //falsy  — undefined!

if (NAN) console.log("Won't print!"); //falsy  — NaN!































