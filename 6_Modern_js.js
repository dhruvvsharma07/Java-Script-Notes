// Module 2.6

// Modern Java Script 
// the modernized syntax introduced in ES6 (2015) and subsequent ECMAScript updates.
// Rather than introducing entirely new core programming concepts, it focuses on the cleaner,
// more expressive "spelling" or syntax used across modern development, libraries, and frameworks like React or Next.js.

console.log("")
console.log("Modern JavaScript")
console.log("")
console.log("Arrow Functions")
// 1. Arrow Function - 

// It helps us to write the code in shorter and simpler way for expressing a function. 
// It is sone by => operator.
{
// Traditional Function Expression

const add = function (a, b) {

  return a + b;

};

// Modern Arrow Function (Implicit Return)
const add2 = (a, b) => a + b; // you dont need to write return like that just write them directly

// Single Parameter Shorthand (Parentheses Optional)
const double = n => n * 2;

// Zero Parameters
const greet = () => "Hello!";

// Returning an Object Literal (Wrapped in Parentheses)
const makeUser = (name, age) => ({ name, age }); // you need to use curly brackets for making the array , it needs to be wrapped in Parenthesis.

console.log(add(2, 3));             // [added] 5
console.log(add2(2, 3));            // [added] 5
console.log(double(4));             // [added] 8
console.log(greet());               // [added] Hello!
console.log(makeUser("Aarav", 20)); // [added] { name: 'Aarav', age: 20 }
// IMPORTANT NOTE 
// Note: Arrow functions do not bind their own this keyword; instead, they lexically inherit this from the surrounding scope.

}
console.log("")
console.log("Template Literals")
// 2. Template Literals
// BACKTICKS IS THE SYNTAX USED {` `} ( tab k upar vala ~ iska dost )
// It drops variables and inline expressions directly into strings using ${expression} without using + concatenation.
// They natively support multi-line strings.

{
const name = "Aarav";
const price = 799;

// Old Way (Concatenation)
const messageOld = "Hi " + name + ", that costs ₹" + price;

// Modern Template Literal
const messageNew = `Hi ${name}, that costs ₹${price}`;

// Multi-line Strings
const htmlSnippet = `
  <div>
    <h1>${name}</h1>
    <p>Price: ₹${price}</p>
  </div>
`;
console.log(messageOld);  // [added] Hi Aarav, that costs ₹799
console.log(messageNew);  // [added] Hi Aarav, that costs ₹799
console.log(htmlSnippet); // [added] the multi-line HTML string
}

console.log("")
console.log("Destructuring")
// 3. Destructuring 
// Destructuring allows you to unpack values from arrays or properties from objects directly into distinct variables in a single statement.

// Array Destructuring: Unpacks values based on positional index. NOTE Positional , because here position matters a lot.
// Object Destructuring: Unpacks values based on matching property key names


// Array Destructuring
{
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second);
// first => "red"
// second => "green"

// Object Destructuring
const product = { name: "Mouse", price: 799 };
const { name, price } = product;
console.log(name,price)

// name => "Mouse"
// price => 799
}


console.log("")
console.log("Spread & Rest")
// 4.Spread & Rest Operators (...)
// The three-dot syntax (...) performs two opposite actions depending on context:

// Spread Operator: Unpacks elements of an array or properties of an object into individual items
// It is used for copying, merging, or updating state without mutating original data.

// Rest Parameter: Gathers multiple individual arguments or remaining items into a sing
// Spread: Arrays (Merging & Copying)

{

const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; // [1, 2, 3, 4]

// Spread: Objects (Immutable Copy & Override)
const base = { name: "Mouse", price: 799 };
const updated = { ...base, price: 699 }; // Copy all, override price to 699


console.log(combined); // [added] [1, 2, 3, 4]
console.log(updated);  // [added] { name: 'Mouse', price: 699 }
console.log(base);     // [added] { name: 'Mouse', price: 799 } - original untouched
// Rest: Gathering Function Arguments , DIKHNE MAI DONO SAME LAGTE BUT JOB UNKI DIFFER KARTI 
// collect all the values and return it into a single array. 

function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);

}
console.log(sum(1, 2, 3, 4)); // Output: 10
}
console.log("")
