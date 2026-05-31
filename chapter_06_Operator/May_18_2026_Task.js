//  Ternary Operators

// Who is the taller basketball player - maximum between two numbers?
let player1 = 10; // 1st player height
let player2 = 20; //2nd player height

// is player 1 taller than player 2 ? Yes - pick player 1 : No - pick player 2
let tallest = player1 > player2 ? player1 : player2;

console.log(`The tallest basketball player is: ${tallest} feet`);


// Maximum between three numbers
// Who wins the 🍨 ice cream eating contest? 
let icecreameater1 = 8 // No of gallons ice cream eater number one ate
let icescreameater2 = 17 // No of gallons ice cream eater number two ate
let icescreameater3 = 12 // No of gallons ice cream eater number three ate

// is icecreameater1 bigger than both others?
// No -> is icecreameater2 bigger than icecreameater3?
// Yes -> icecreameater2 wins!

let winner = icecreameater1 > icescreameater2 && icecreameater1 > icescreameater3 ? icecreameater1
    : icescreameater2 > icescreameater3 ? icescreameater2
    : icescreameater3

console.log(`The biggest number of gallons of ice cream eaten is: ${winner}`);