class Token {
    #value;
    constructor(val) {
        this.#value = val;  // stores "abcedf12345" in the hidden value
    }
    
    getToken() {
        return this.#value; //returns "abcedf12345" 
    }
    getMasked() {
        return "***" + this.#value.slice(-4);  // returns "***1234"
    
    }  // closes getMasked() 
}  // class closes here

let t =  new Token("abcded12345");  //create the object outside the class

console.log(t.getMasked());  //prints: ***1234
console.log(t.getToken());  //prints: abcedf12345
console.log(t.value);  // prints: undefined - #value is private, cannot access directly


