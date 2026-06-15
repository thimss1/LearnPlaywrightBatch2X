function cafe(item, callWhenTableisReady) {
    console.log("Finding....1"); // looking for a table
    console.log("Finding....2");  // still looking
    console.log("Finding....3");  // still looking
    console.log((item));  // print what food you ordered

    callWhenTableisReady(); // table is ready! do the callback!

}
function callWhenTableisReady() {
    console.log("calling 6754543210");
}
cafe("Burger", callWhenTableisReady);


cafe("Pizza", function () {
    console.log("calling 987654540");
});


cafe("Momos", () => {
    console.log("calling 3543543");
});

//Each cafe() call passes in a different food item AND a different callback function
// the cafe function runs the same "finding a table" steps every time, then calls
// whichever callback YOU gave it! 