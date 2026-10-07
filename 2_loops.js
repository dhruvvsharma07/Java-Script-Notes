// Module 2.2 

console.log("")
console.log("Conditionals (if / else if / else)")
// Conditionals - It runs only when a block of code is true and only when a condition is true.

const score = 82;

if (score>=90){
  console.log("Grade: A")
}
else if (score <= 75){
  console.log("Grade:B")
}
else{
  console.log("fail")
}
//The moment a condition is true, its block runs and every later else if / else is skipped — even if a later one would also be true.
// Order your conditions from most specific to most general.

console.log("")
console.log("Switch Case")
// SWITCH CASE

const day = "Sat"; // [added] "day" was never declared - change it to "Fri" or "Mon" to try other cases
switch (day) {
  case "Sat":
  case "Sun":
    console.log("Weekend!");
    break;
  case "Fri":
    console.log("Almost there");
    break;
  default:
    console.log("Weekday");
}


console.log("")
console.log("Loops")
// LOOPS 
// A loop repeats a block of code. Instead of copy-pasting 
// ypu do console.log five times, you tell JavaScript "do this while a condition holds"

console.log("For Loop")
// FOR LOOP

for (let i = 1; i <= 5; i++) { 
  console.log(i);   // prints 1, 2, 3, 4, 5
}

console.log("While Loop")
// WHILE LOOP 

let lives = 3;
while (lives > 0) {
  console.log("Playing... lives left: " + lives);
  lives = lives - 1;   // MUST change, or the loop never ends
}

// Use while when you don't know how many times up front — you just loop while a condition stays true
// when you dont know when will the condition becomes true use while 

// A while loop keeps going forever if its condition never becomes false. 
// Always make sure something inside the loop moves it toward stopping (here, lives counts down). 
// Forget that and your page freezes and time complexity becomes inasane.

// Two keywords steer a loop mid-flight:

//break — exit the whole loop immediately.
//continue — skip the rest of this turn and jump to the next one.

console.log("Break")
// BREAK 

for (let i = 1; i <= 8; i++) {
  if (i === 4) break;
  console.log(i); // Output - 1, 2, 3 then stops.
}

console.log("Continue")
// CONTINUE

for (let i = 1; i <= 8; i++) {
  if (i === 4) continue;
  console.log(i);       // Output -  1, 2, 3, 5, 6, 7, 8 (no 4).
}

console.log("FizzBuzz")
// NESTED LOOPS

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
console.log("")
