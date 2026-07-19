class BasePage {
    verify() {
        console.log("Verifying base page"); //basic version

    }
}

class LoginPage extends BasePage {   // three child pages 
    verify() {
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");

    }
}
class DashboardPage extends BasePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");

    }
}
class CartPage extends BasePage {
    verify() {
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()];  // list the pages to check

pages.forEach(function (page) {
    page.verify();
    console.log("---")  //prints a divider between pages
});