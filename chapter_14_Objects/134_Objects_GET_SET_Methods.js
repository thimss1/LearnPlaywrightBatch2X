const user = {

    firstName: "Pramod",
    lastName: "Dutta",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");

    }
};

    //Objects - JS {}
    // Class and Object
    // this. it means current value in the Object.

        console.log(user.fullName);
        user.fullName = "Amit Sharma"
        console.log(user.fullName);

       /*  class User {
            firstName
            lastName,
            fullName() {

            }
        } */

            // Getters let you READ a property that gets calculated automatically, and setters let
            // you WRITE a value that automatically gets split and stored — like a smart name
            // badge machine! 
