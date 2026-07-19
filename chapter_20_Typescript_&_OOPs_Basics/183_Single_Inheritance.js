class BasePage{
    constructor(pageName) {
        this.pageName = pageName; // every page has a name
    }
    open() {
        console.log("Opening the Page " + this.pageName);
        
    }
    close() {
        console.log("Closing the Page " + this.pageName);
        
    }
}
class Login extends BasePage {  // extend inherits the rules - Login is a child of BasePage it get all the methods from BasePage without having to rewrite them
    constructor() {
        super("Login"); // sends "Login" up to BasePage tells BasePage the name is "Login" - super calls the parent


    }

}
const page = new Login(); //create a Login page
page.open(); // Opening the Page Login
page.close(); // Closing the Page Login