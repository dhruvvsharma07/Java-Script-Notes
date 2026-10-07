
console.log("")

console.log("DOM")

// Module 2.7

// When a browser loads HTML, it parses the document and constructs a live, in-memory tree of nodes called the Document Object Model (DOM).

// Every HTML tag becomes a node (parent, child, or sibling).

// JavaScript uses the global document object as an entry point to interact with this tree.


// SELECTING/TARGETTING A ELEMENT

// Targeting (or selecting) means telling JavaScript which specific element on the webpage

// you want to grab so that you can change its text, color, or behavior.


// General Syntax of Selector Methods

// Here is how the general syntax looks across the three standard selection methods:


// 1. By ID: document.getElementById()

// Used when you want to target one unique element using its HTML id.

// document.getElementById("id_name_without_hash");

// OR

// const heading = document.getElementById("main-heading");


// 2. By CSS Selector (First Match): document.querySelector()

// Used to target the very first element that matches any standard CSS selector (tag name, class name, or ID).

// document.querySelector("CSS_SELECTOR");


// By Class (uses dot .)

// const firstCard = document.querySelector(".card");


// By ID (uses hash #)

// const title = document.querySelector("#main-heading");


// By Tag Name

// const firstBtn = document.querySelector("button");


// 3. By CSS Selector (All Matches): document.querySelectorAll()

// Used when you want to grab every matching element on the page.

// It returns a list of elements called a NodeList.


console.log("OUTPUT")

{
    // 1. Target a single element by its unique ID

    const heading = document.getElementById("title");

    // 2. Target the FIRST element matching a CSS selector

    const firstItem = document.querySelector(".items li");

    const button = document.querySelector("button");

    // 3. Target ALL elements matching a CSS selector (returns a NodeList)

    const allItems = document.querySelectorAll(".items li");

    // Iterating over a NodeList to act on each element:

    allItems.forEach((item) => {

        console.log(item.textContent);

    });

    console.log(
        heading.textContent,
        "|",
        firstItem.textContent,
        "|",
        button.textContent
    );
}


console.log("")

console.log("Changing Content & Attributes")


// 3. Changing Content & Attributes

// Once an element is selected, you can modify its content or HTML attributes

const title = document.querySelector("#title");

// Change plain text safely (does not parse HTML)

title.textContent = "Updated Shop Title";

// Change HTML structure (parses HTML tags)

// Note: Use textContent for user inputs to prevent XSS vulnerabilities

title.innerHTML = "Shop <span>Deals</span>";

// Set or update element attributes

title.setAttribute("title", "Hover tooltip text");

console.log(title.textContent);          // Shop Deals

console.log(title.innerHTML);            // Shop <span>Deals</span>

console.log(title.getAttribute("title")); // Hover tooltip text


console.log("")

console.log("Changing Styles & CSS Classes")


// 4. Changing Styles & CSS Classes

// Modifying element appearance can be done via inline styles or by toggling CSS classes via javascript

{
    const button = document.querySelector("button");

    const list = document.querySelector("ul");


    // 1. Direct inline styling via the style property

    button.style.backgroundColor = "grey";

    button.style.color = "white";


    // 2. Class manipulation via classList (Preferred for clean separation)

  //list.classList.add("done");       // Adds a CSS class

    list.classList.remove("active");  // Removes a CSS class

    list.classList.toggle("highlight"); // Toggles class on/off


    console.log(
        button.style.backgroundColor,
        button.style.color
    );

    console.log(list.className);


    // 3. Changing button color when clicked

    // addEventListener() listens for an event.

    // Here, the event is "click".

    // Whenever the button is clicked, the code inside the function runs.

    button.addEventListener("click", () => {

        button.style.backgroundColor = "crimson";

    });

}


console.log("")


// ASSIGNMENT CODE


// TODO 1: Change the heading (#pageTitle) text to Today's Deals

// const pageTitle = document.getElementById("pageTitle");

// pageTitle.textContent = "Today's Deals";


// TODO 2: Give the heading a data-role="heading" attribute

// pageTitle.setAttribute("data-role", "heading");


// TODO 3: Add the class active to the list (#dealList)

// const dealList = document.getElementById("dealList");

// dealList.classList.add("active");


// TODO 4: Change the button (#cta) text to Buy now

// const cta = document.getElementById("cta");

// cta.textContent = "Buy now";


// TODO 5: Add the class primary to the button

// cta.classList.add("primary");


// TODO 6: Set the button's inline background to #17b8a6

// cta.style.background = "#17b8a6";


// TODO 7: Change the first .deal text to Gaming Mouse

// const firstDeal = document.querySelector(".deal");

// firstDeal.textContent = "Gaming Mouse";


// TODO 8: Change the status line (#statusLine) text to ready

// const statusEl = document.getElementById("statusLine");

// statusEl.textContent = "ready";


// TODO 9: Set the status line's inline color to green

// statusEl.style.color = "green";


// TODO 10: Add the class listed to every .deal

// const allDeals = document.querySelectorAll(".deal");

// allDeals.forEach(deal => {

//     deal.classList.add("listed");

// });


// CLICK EVENT

// When the Buy button is clicked, its background color changes to crimson.

// const buyButton = document.querySelector("button");

// buyButton.addEventListener("click", () => {

//     buyButton.style.backgroundColor = "crimson";

// });

console.log("JavaScript is working!");
const button = document.querySelector("button");
const section = document.querySelector(".highlight");

section.style.backgroundColor = "black";
button.addEventListener("click", () => {
    section.style.backgroundColor = "green"
});