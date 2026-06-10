const user = { name1: "John", age: 30, city: "NYC" };

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName); // John
console.log(userAge);  // 30

// Default values
const { country = "USA" } = user;
console.log(country); // USA

// Nested object
const data = {
    user: {
        names: "John",
        address: {
            city: "NYC"
        }
    }
};

const { user: { address: { city } } } = data;
console.log(data.user.address.city); // NYC