// Module 2.5

console.log("")
console.log("Objects")

// object is like a container , instead of naming seperate vaiables for a single item again and again object carries 3 in 1. like product name product price and product in stock all of them can be holded in one value 
const product = {
  name : "mouse",
  price: "999",
  inStock: true
}

console.log("")

console.log("Accessing Properties") 
// 1. Dot Notation
console.log(product.name); // Output: "Mouse"

// 2. Bracket Notation
console.log(product["price"]); // Output: 999

// Dynamic access using a variable (Requires Bracket Notation)
const field = "price";
console.log(product[field]); // Output: 999
console.log(product.field);  // Output: undefined (looks literally for a key named "field")

console.log("")

console.log("Adding Updating and Deleting Properties")
// Objects are mutable - ie changable , we dont need to rebuild an object to change the content

// Add - assign , Upate - a new value overwriting , Delete - Remove the key 

product.color = "black"; // Add a new property
product.price= 799; // Updating a key 

delete product.color; // Deleting the key

console.log(product) 

console.log("")

console.log("This Keyword")

// A method is simply a function stored inside an object property. It defines what an object has to do?

// to use this we will use "this" keyword to access the other pproperties belonging to the same object.

const user = {
  name: "Aarav", // user input
  greet() { // function
    // 'this.name' refers to user.name
    return "Hi, I'm " + this.name;
  }
};

console.log(user.greet()); // Output: "Hi, I'm Aarav"

// when a function is stored inside a object property its called a method
console.log("")

console.log("Combining Objects and Arrays")

// most datasets consists of arrays of objects ie a list where every item is a structured object and we can use .map() and .filter() studied earlier.

const products = [
  { name: "Mouse", price: 799, inStock: true },
  { name: "Keyboard", price: 1499, inStock: false },
  { name: "Webcam", price: 2299, inStock: true }
];

// Get names of all products using .map()
const names = products.map(p => p.name);
console.log(names); // Output: ["Mouse", "Keyboard", "Webcam"]

// Get only in-stock product names by chaining .filter() and .map()
const inStockNames = products
  .filter(p => p.inStock)
  .map(p => p.name);

console.log(inStockNames); // Output: ["Mouse", "Webcam"]

console.log("")

console.log(" Array vs Objects")

//Array - its an ordered list of values and we access them using numeric index position starting from 0 

//Object - Collection of named properties which gets access by key names ie strings 

//The big question is array answers how many items , and in what order? while object answers what are the facts/propertie describe that one thing

// Array are ordered , Object are unordered 
// Array finds via index from 0 , object finds via key
// List of items , Object defines a single entity with various details 

{ // [added] block so this second 'user' does not clash with the 'user' in the this-keyword example
// ARRAY 
const colors = ["Red", "Green", "Blue"];

// Access by position (index starts at 0)
console.log(colors[0]); // "Red"

//Object 
const user = {
  name: "Aarav",
  age: 20,
  city: "Delhi"
};

// Access by property name
console.log(user.name); // "Aarav"
console.log(user["city"]); // "Delhi"
console.log(colors[1]); // "Green"

// THEY OFTEN WORK TOGETHER 

const students = [
  { id: 101, name: "Aarav", score: 85 },
  { id: 102, name: "Priya", score: 92 }
];

// Accessing the second student's name:
console.log(students[1].name); // "Priya"
} // [added]
console.log("")
