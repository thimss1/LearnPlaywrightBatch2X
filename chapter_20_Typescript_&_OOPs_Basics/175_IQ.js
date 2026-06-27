class Browser { // method — lives inside the class
// Param constructor (arguments)
constructor(name) { // name is the parameter — it's temporary
    this.name = name; // this.name is the property — it stays on the object
    this.isOpen = true;  // this means "this specific object I just created." It's how the object refers to itself.
    console.log((name + " launched"));
}

startBrowser() {
    console.log("starting the browser")
    
}
closeBrowser() {
    console.log("starting the browser")
}
}

let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");

console.log(chrome.isOpen);
