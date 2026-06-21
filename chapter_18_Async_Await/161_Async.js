async function testapi() {
    try{
        let result = await Promise.reject("503 reject");
    }
    catch (error) {
        console.log('Error', error);  // prints "Error 503 reject"
        

    }
        finally {
            console.log("Clean up!!"); // ALWAYS runs no matter what!
            
        }
}

testapi();
