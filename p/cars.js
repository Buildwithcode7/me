// 1. Define the car object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022
};

// 2. Print the original object and its properties
console.log("--- Original Object ---");
console.log("Car details:", car);
console.log("Original Properties:", Object.keys(car));

// 3. Delete the second property ('model')
delete car.model;

// 4. Print the object after deletion
console.log("\n--- After Deletion ---");
console.log("Updated Car details:", car);
console.log("Remaining Properties:", Object.keys(car));

// 5. Get and print the length of the object
const objectLength = Object.keys(car).length;

console.log("\nFinal length of the object is:", objectLength);