var a = 10;

//  var is functioned scoped


console.log(a);  // Global scope

function printHello() {
console.log("Hello The Testing Academy!");
var a = 20; // Local Scope
console.log(a);
if (true) {
    var a = 30
    console.log(a); //30
}


}

printHello();
printHello();

var a = 50;



// var == trump, flipper, dual two faced, not trust worthy
