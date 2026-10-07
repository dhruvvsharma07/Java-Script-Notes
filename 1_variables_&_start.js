// 2.1 Module 
console.log("")
console.log("Variables")

// A Variable is like a labeled storage box that holds information , we will create a box , label it with a name and then put a value inside it.
// use that name to access the value stored inside the box whenever we need it.

// How to declare a variable in JS ?
// 1. var - function scoped , can be redeclared and updated , avoid it and its the older way.
// 2. let - block scoped , can be updated but not redeclared , used for values that will change over time 
// 3. const - block scoped , cannot be updated or redeclared , use for values that never change.

// RULES FOR VARIABLE NAMES
// 1. Use Camel case for variable names (first word lowercase, subsequent words capitalized)
// 2. Names must start with a letter, underscore (_), or dollar sign ($). They cannot start with a number.
// 3. Case-sensitive: "myVariable" and "myvariable" are different variables.

{ // [added] block so this 'let score' does not clash with the 'var score' examples below
// 1. Using const (Cannot be changed)
const playerName = "Aarav";
// playerName = "Priya"; //  Error: Assignment to constant variable

// 2. Using let (Can be updated without repeating the keyword 'let')
let score = 10;
score = 20; // ✅ Works! Box now holds 20
score = score + 5; // ✅ Works! Box now holds 25

console.log(playerName); // "Aarav"
console.log(score);      // 25
} // [added]

console.log("")
console.log("var (the older way)")
// More Information on var ;

var score = 10;
score = 20; // Reassigning works fine
console.log(score); // 20

// why var is avoided in modern js?

console.log("Why var is avoided")
// The main reason is var silently lets you overwrite variables, which can lead to bugs. For example:
var score = 10;
var score = 20; // This is allowed with var, but can cause confusion
console.log(score); // 20

// In contrast, let and const will throw an error if you try to redeclare a variable, which helps prevent accidental overwrites.
// Avoid in modern code due to block-leakage and silent redeclaration hazards

console.log("")
console.log("Data Types")

// 1. Primitive Data Types - These are the most basic data types in JavaScript. They include:
// - String: Represents textual data, e.g., "Hello, World!"
// - Number: Represents numeric values, e.g., 42 or 3.14
// - Boolean: Represents true or false values
// - Null: Represents the intentional absence of any object value
// - Undefined: Represents a variable that has been declared but not assigned a value
// - Symbol: Represents a unique and immutable identifier (introduced in ES6)

// Falsy vs Truthy Values
// Falsy values are values that evaluate to false in a boolean context. In JavaScript, the following values are considered falsy:
// - false
// - 0
// - "" (empty string)
// - null
// - undefined
// - NaN (Not-a-Number)

// All other values are considered truthy, meaning they evaluate to true in a boolean context.

{ // [added] block so name/age here do not clash with name/age in 'Working with Strings'
let name = "Aarav";
let age = 20;
let isActive = true;
let emptyBox;
let emptyOnPurpose = null;

console.log(typeof name);           // "string"
console.log(typeof age);            // "number"
console.log(typeof isActive);       // "boolean"
console.log(typeof emptyBox);       // "undefined"
console.log(typeof emptyOnPurpose); // "object" (Famous 1995 JavaScript quirk/bug)
} // [added]

// 2. Non-Primitive Data Types - These are more complex data types that can hold multiple values or properties. They include:
// - Object: A collection of key-value pairs, e.g., { name: "Aarav", age: 20 }
// - Array: An ordered list of values, e.g., [1, 2, 3, 4]
// - Function: A block of code designed to perform a particular task

console.log("")

console.log("Operators")

console.log("Arithmetic Operators")

console.log(10 + 3);  // 13  (Addition)
console.log(10 - 3);  // 7   (Subtraction)
console.log(10 * 3);  // 30  (Multiplication)
console.log(10 / 2);  // 5   (Division)
console.log(10 % 3);  // 1   (Modulo / Remainder after division)
console.log(2 ** 3);  // 8   (Exponent: 2 to the power of 3)

console.log("Assignment Operators")

let x = 20;
x += 5;  // x = x + 5
console.log(x); // 25

console.log("Comparison Operators")
// It is used to compare two vaoluesa and returns a boolean value (true or false) based on the comparison.
// "==": Checks for equality of value (type coercion may occur)
console.log(5 == "5"); // true
// "===": Checks for equality of value and type (strict equality)
console.log(5 === "5"); // false
// "!=": Checks for inequality of value (type coercion may occur)
console.log(5 != "5"); // false
// "!==": Checks for inequality of value or type (strict inequality)
console.log(5 !== "5"); // true

console.log("Logical Operators")
// Logical AND (&&): Returns true if both operands are true
console.log(true && false); // false
// Logical OR (||): Returns true if at least one operand is true
console.log(true || false); // true
// Logical NOT (!): Inverts the boolean value of the operand
console.log(!true); // false

const isLoggedIn = true;
const hasTicket = false;

console.log(isLoggedIn && hasTicket); // false (AND needs both to be true)
console.log(isLoggedIn || hasTicket); // true  (OR needs at least one to be true)
console.log(!isLoggedIn);             // false (Flips true to false)

console.log("")

console.log("Working with Strings")
{ // [added] block (see note above)
// Working with Strings
const name = "Aarav";
const items = 3;

// 1. Concatenation (Clunky)
const msg1 = "Hi " + name + ", you have " + items + " items.";

// 2. Template Literals (Clean & Recommended)
const msg2 = `Hi ${name}, you have${items} items.`;
console.log(msg2); // "Hi Aarav, you have 3 items."

console.log("Ternary Operator")
// 3. Ternary Operator
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
} // [added]

console.log("")

console.log("Type Conversion")
// 4. Type Conversion
// Converting a string to a number
const strNum = "42";
const num = Number(strNum); // Converts to number 42
console.log(num); // 42

// Converting a number to a string
const numToStr = String(42); // Converts to string "42"
console.log(numToStr); // "42"

// Implicit type conversion (coercion)
const result = "5" - 2; // JavaScript converts "5" to number 5
console.log(result); // 3 

// Note: "5" + 2 would result in "52" due to string concatenation

console.log("")

