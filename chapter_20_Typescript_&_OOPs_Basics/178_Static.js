class Person {
    name;  //   each individual person
    static nationality = "India";  // the whole class static = shared by everyone
    constructor(name) {
        this.name = name;
    }
    static common_fn() { // called on the class, not on a person object

    }
}