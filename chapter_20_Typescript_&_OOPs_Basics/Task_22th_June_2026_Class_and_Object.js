class Calculator {

    //Attibutes

    constructor(num1, num2) {
        this.num1 = num1;  // just two numbes
        this.num2 = num2;


    }



    // Behavior
    subtract() {
        console.log((this.num1 - this.num2));
    }

    add() {
        console.log((this.num1 + this.num2));
    }

    multiply() {
        console.log((this.num1 * this.num2));
    }

    divide() {
        console.log((this.num1 / this.num2));
    }


    display() {
        console.log("Subtract: " + (this.num1 - this.num2));
        console.log("Add: " + (this.num1 + this.num2));
        console.log("Multiply: " + (this.num1 * this.num2));
        console.log("Divide: " + (this.num1 / this.num2));

    }
}

let calcTC = new Calculator(3, 5);

calcTC.display();



class student {
    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;

    }

    static name = "Playwright2X"; // belongs to the whole class, one copy shared by everyone,
    static mentor_name = "Rob Ulrich"; // belongs to the whole class

    static display() {
        console.log("Hi, I'm a common function");

    }
    //  print belongs INSIDE class  here, before the closing }
    print() {
        console.log(this.name_student + " -> " + this.age + " -> " + this.phoneNo)

    }

}  // class closes here

const s1 = new student("Brian", 35, "972-875-8712");
const s2 = new student("Rachel", 28, "305-874-6512");
const s3 = new student("Craig", 46, "818-875-8712");
const s4 = new student("Grethchen", 42, "202-811-2512");
const s5 = new student("Nisha", 49, "408-755-1475");
const s6 = new student("Hassan", 28, "305-872-2212");
const s7 = new student("Min-Jie", 35, "212-875-8714");
const s8 = new student("Radika", 52, "305-874-6512");
const s9 = new student("Matt", 58, "313-424-2712");
const s10 = new student("Avery", 48, "949-571-2512");

s1.print();
s2.print();
s3.print();
s4.print();
s5.print();
s6.print();
s7.print();
s8.print();
s9.print();
s10.print();


console.log(student.name); // Playwright2X — accessed from the CLASS

console.log(s1.name);



