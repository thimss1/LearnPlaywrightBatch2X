class BaseTest {  // this is the parent class
    setup() {
        console.log("Base: open browser");

    }
    teardown() {
        console.log("Base: close browser");

    }
}
class UITest extends BaseTest {  //this is the child
    setup() {
        super.setup()   // runs Base: open browser first // first do the standard step - open browser 
        console.log("UI: maximize window"); // then add the VIP step — maximize window
    }


    teardown() {
        console.log("UI: take screenshot"); // VIP step first — take screenshot
        super.teardown();  // // then do the standard step — close browser - super means call my parents version of this method
    }

}

let test = new UITest(); // create a VIP room 
test.setup(); // run the setup checklist