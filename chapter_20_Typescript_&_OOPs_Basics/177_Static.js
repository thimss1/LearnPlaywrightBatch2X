class student {
    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;

    }

    static name = "Playwright2X"; // belongs to the whole class, one copy shared by everyone,
    static mentor_name = "PramodDutta"; // belongs to the whole class

    static display() {
        console.log("Hi, I'm a common function");
        
    }

}
const s1 = new student("Brian", 35, "9728758712");  // Brian — personal data on s1
const s2 = new student("Rachel", 28, "3058746512");

console.log(s1.name_student);
console.log(s2.name_student);

console.log(student.name); // Playwright2X — accessed from the CLASS

console.log(s1.name);



