class Car {
    // CAB - Constructor, Attribute, Behavior


    // Constructor
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;  // store the value in this.name

    }

    // Attribute


    // Behavior
    drive() {
        console.log("I drive a", this.name);
        
    }

}

const tesla = new Car("Model S");

tesla.drive();

const i10 = new Car("2026 BMW 330i");
i10.drive();