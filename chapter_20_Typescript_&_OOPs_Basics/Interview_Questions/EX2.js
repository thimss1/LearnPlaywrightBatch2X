class Environment {
    constructor(name = "staging", port = 3000) {
        this.name = name;
        this.port = port;
    
    }

    getURL()  {
        return "https://" + this.name + ":" + this.port;
    }
}

let env1 = new Environment();
let env2 = new Environment("production", 8080);

console.log(env1.getURL());  // uses defaults
console.log(env2.getURL());  // uses your values