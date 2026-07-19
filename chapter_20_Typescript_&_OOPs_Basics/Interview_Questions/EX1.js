class Bug {    //template
    constructor(title, severity) {  // runs automatically on creation
        this.title = title;
        this.severity = severity;
    }

    display() {  // you have to call it manually
    console.log("[" + this.severity + "] " + this.title);
    
    }
}

let b1 = new Bug("Login crash", "Critical");  // real object
let b2 = new Bug("Typo in footer", "Low");

b1.display();
b2.display();