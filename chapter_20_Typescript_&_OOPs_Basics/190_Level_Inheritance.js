// Grand Father -> Father -> Son
// BasePage -> AuthPage -> AdminPage

class BasePage {   //grandfather
    constructor(name) {
        this.name = name;
    }

open() {
    console.log("[OPEN]" + this.name);
    
}
} 

class AuthPage extends BasePage {    //father
    login(user) {
        console.log("[LOGIN]" + user);

    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel"); // passes "Admin Panel" up to BasePage
    }

        manageUsers() {
            console.log("[ADMIN] Managing users");
        }

    }
    

    let admin = new AdminPage();
    admin.open();  // inherited from Grandfather BaserPage
    admin.login("superadmin");  // inherited from father AuthPage
    admin.manageUsers();  // from AdminPage himself
    
