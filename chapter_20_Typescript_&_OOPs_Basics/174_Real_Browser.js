class TestCase {

    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() { // Method - because this is a function inside the class
        console.log(this.name + "->" + this.status + "->" + this.priority);

    }
}

// Function - this is outside the class
function f1() {

}

let loginTC = new TestCase("Login Test", " Pass", " P0");
let signUpTC = new TestCase("Signup TC ", " Fail", " P1");

loginTC.display();
signUpTC.display();

//function vs Method
// method is a a function but inside the class :)

