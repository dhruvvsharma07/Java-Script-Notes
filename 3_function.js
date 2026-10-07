// Module 2.3

console.log("")
console.log("Functions")
//A function is a reusable block of code designed to perform a specific task. 
// Defining a function allows you to write the logic once and call it multiple times across your program with different inputs.

//Key Concepts
//Parameters: Placeholders defined in the function declaration that accept incoming values.
//Arguments: The actual values passed into the function when it is called.

// 'name' and 'age' are PARAMETERS (placeholders)
function greetUser(name, age) {
  return "Hello, my name is " + name + " and I am " + age + " years old.";
}

// "Aarav" and 21 are ARGUMENTS (the actual values supplied)
console.log(greetUser("Aarav", 21)); 
// Output: "Hello, my name is Aarav and I am 21 years old."

// "Diya" and 25 are different ARGUMENTS passed to the same parameters
console.log(greetUser("Diya", 25)); 
// Output: "Hello, my name is Diya and I am 25 years old."

//function greet(name): Declares a function named greet with one parameter named name.
//return ...: Constructs and returns a string combining "Hello, ", the parameter name, and "!".
//greet("Aarav"): Calls the function, passing "Aarav" as the argument. Inside the function body, name holds "Aarav

console.log("")
console.log("Return vs console.log")
//Functions return a value back to the caller using the return statement. 
//If a function does not contain an explicit return statement, it returns undefined by default.

// Function WITH return
function doubleWithReturn(n) {
  return n * 2;
}

// Function WITHOUT return
function doubleWithoutReturn(n) {
  console.log(n * 2);
}

let result1 = doubleWithReturn(5);   // result1 receives 10
let result2 = doubleWithoutReturn(5); // Prints 10 to console, but result2 receives undefined

console.log(result1 + 1); // Output: 11
console.log(result2);     // Output: undefined

//Printing a value with console.log() outputs text to the developer console, 
//but does not return a value to the code calling the function.
//thus when we added a new condition it went into problem 

console.log("")
console.log("Multiple Parameters")
//Functions can accept multiple parameters separated by commas.
// Argument values map to parameters strictly by position.
// jo phele aayega vo phele execute hoga 

{ // [added] block so this calculateTotal is not overwritten by the one in SCOPE (hoisting)
function calculateTotal(price, qty, taxRate) {
  const subtotal = price * qty;
  return subtotal + subtotal * taxRate;
}

const total = calculateTotal(200, 3, 0.05);
console.log(total); // Output: 630
} // [added]

console.log("")
console.log("Scope")
// SCOPE 

//Scope (Local, Global, and Block Scope)
//Scope determines where variables are accessible within your code.

//Global Scope: Variables declared outside any function or block are globally accessible.
//Local / Function Scope: Variables declared inside a function are local to that function.
//Block Scope: Variables declared with let or const inside { ... } blocks (like if statements or loops) are accessible only within that block.

{ // [added] block for the second calculateTotal
const taxRate = 0.05; // Global scope

function calculateTotal(price) {
  const subtotal = price * 2; // Local function scope
  
  if (price > 100) {
    let discount = 10; // Block scope (only inside this if statement)
    console.log(subtotal - discount);
  }
  
  // console.log(discount); // ReferenceError: discount is not defined
  return subtotal + (subtotal * taxRate); // Reads global 'taxRate'
}

calculateTotal(150);
// console.log(subtotal); // ReferenceError: subtotal is not defined
} // [added]

// Scope Hierarchy: Code inside a function can access variables in its own scope and outer/global scopes. 

// Code outside a function or block cannot reach inside to access local variables.
// Best Practice: Keep variables as local as possible to avoid name collisions and hard-to-debug code dependencies.

console.log("")
console.log("Function Declaration vs Function Expression")
// In JavaScript, functions are first-class values and can be assigned to variables.
//  This is called a function expression.

// Calling before definition works due to hoisting:
console.log(declaredSquare(4)); // Output: 16

function declaredSquare(n) {
  return n * n;
}

// Function Expression (anonymous function assigned to a const)
const expressedSquare = function(n) {
  return n * n;
};

// Calling before definition throws an error:
// expressedSquare(4); // ❌ ReferenceError / Cannot access before initialization

console.log(expressedSquare(4)); // Output: 16
console.log("")
