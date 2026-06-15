// This code is showing you a calculator that takes instructions — you tell it WHAT to do, not just what numbers to use!
function calculate(a, b, operation) {  //operation — a FUNCTION that tells it what math to do!
    return operation(a, b); // run whatever operation you passed in, with a and b

}

let sum = calculate(10, 5, function (x, y) {
    return x + y;

});

console.log(sum);
