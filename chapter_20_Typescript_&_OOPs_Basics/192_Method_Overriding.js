class BaseTest {
    setup() {
        console.log("Base: open brower");  //fathers's way
        
    }
}

class APITest extends BaseTest {  // setup is commented out so it inherits from BaseTest
    // setup() {
    //     console.log("APITest: open browser");
        
    }

let test = new APITest();
test.setup(); // son does not have it, so uses fathers version
