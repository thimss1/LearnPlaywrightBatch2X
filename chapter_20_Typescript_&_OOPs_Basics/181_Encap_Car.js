class Car {
    #engine // hidden — just like a real engine you can't see
    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(nameEngine) {
        this.#engine = nameEngine
    }
}

let tesla = new Car("Tesla", "V8"); // Tesla is public — anyone can see the name on the outside V8 is private — hidden under the hood
console.log(tesla.getEngine()); // prints V8
tesla.setEngine("V9")
console.log(tesla.getEngine()); //prints V9

