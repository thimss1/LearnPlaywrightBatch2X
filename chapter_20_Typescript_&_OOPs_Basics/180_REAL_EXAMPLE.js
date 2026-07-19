class Person {
    // Hide your childs - hidden from the public
    #child1;
    #child2; //  hidden from the public

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1
        this.#child2 = ch2

    }

    getChild1() {
        return this.#child1;
    }

    setChild(changed_name) {
        this.#child1 = changed_name;

    }
}

let p = new Person("Michael", "Brad", "Jenny");
console.log(p.name);
//console.log(p.#child1);  // not allowed — private!
console.log(p.getChild1());



