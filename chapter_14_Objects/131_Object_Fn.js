const user = {
    name: "Pramod",
    age: 43
};

const calculator = {
    value: 0,
    add(n) {
        this.value +=n; // add n to the current value - this value means the value that belongs to this calculator

    },
    subtract(n) {
        this.value -=n; // subtract n to the current value
    }
};

// test it!
calculator.add(10); //piggy ban = 10
calculator.add(5); //piggy ban = 15
calculator.subtract(3); //piggy ban = 12
console.log(calculator.value);  //12


/* the follow up questions they might ask in an interview:

"What does this refer to inside an object method?"
"What happens if you call add without a number?"
"How would you reset the calculator back to zero?"
"Can you add a multiply method to this object?" 
The one sentence answer they want to hear:
"this refers to the object itself — so this.value means the value property that belongs to THIS specific calculator object!"

 */