// MODULE 2.4

console.log("")
console.log("Arrays")
// An array is an ordered container used to store multiple values under a single variable name.

// KEY RULES 

// Array Literal: Created using square brackets [...] with comma-separated items.
// Zero-Indexing: The first element is always at index 0. The last element is at length - 1.
//Out-of-Bounds: Accessing an index that doesn't exist returns undefined (not an error).
//.length Property: Returns the total number of items in the array.

// Creating an array literal
const fruits = ["apple", "banana", "cherry", "kiwi"];

// Accessing items by zero-based index
console.log(fruits[0]); // Output: "apple" (first item)
console.log(fruits[3]); // Output: "kiwi" (last item)

// Reading array length
console.log(fruits.length); // Output: 4

// Accessing the last item dynamically
console.log(fruits[fruits.length - 1]); // Output: "kiwi"

// Accessing out-of-bounds index
console.log(fruits[4]); // Output: undefined

const stack = ["a", "b", "c"];

console.log("")
console.log("Adding / Removing Items (push, pop, unshift, shift)")
// ARRAY ADD-SUBTRACT

//Method	        Operation	       Location	        Returns

//push(item )	    Adds item	       End	            New arraylength
//pop()	            Removes item	   End	            The removed item
//unshift(item)	    Adds item	       Start	        New array length
//shift()	        Removes item       Start            Removes Item

// Add to END
stack.push("d"); 
console.log(stack); // Output: ["a", "b", "c", "d"]

// Remove from END
const removedEnd = stack.pop(); 
console.log(removedEnd); // Output: "d"
console.log(stack);      // Output: ["a", "b", "c"]

// Add to START
stack.unshift("z"); 
console.log(stack); // Output: ["z", "a", "b", "c"]

// Remove from START
const removedStart = stack.shift(); 
console.log(removedStart); // Output: "z"
console.log(stack);        // Output: ["a", "b", "c"]

console.log("")
console.log("Iterating over Arrays")
// ITERATING OVER ARRAYS 

const tasks = ["Wake up", "Study JS", "Sleep"];

// 1. Using for...of (Values only)
for (const t of tasks) {
  console.log(t);
}
// Output:
// Wake up
// Study JS
// Sleep

// 2. Using forEach (Values + Indexes)
tasks.forEach((t, i) => {
  console.log(i + ": " + t);
});
// Output:
// 0: Wake up
// 1: Study JS
// 2: Sleep

console.log("")
console.log("Transforming Arrays (map & filter)")
// TRANSFORMING ARRAYS ( map and filter )

const nums = [1, 2, 3, 4, 5, 6];

// MAP: Reshape every item (Double all values)
const doubled = nums.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10, 12] (6 items in, 6 items out)

// FILTER: Keep only items that pass a test (Even numbers only)
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);   // Output: [2, 4, 6]

// Original remains unchanged
console.log(nums);    // Output: [1, 2, 3, 4, 5, 6]

console.log("")
console.log("Practice: filter + map chain")
// Another practice example 

const cart = [260,768,456,567]
const finalPrices = cart 
.filter( price => price => 400 )
.map ( price => price * 2)

console.log(finalPrices)
console.log("")
