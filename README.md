1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<!-- Answer to number 01..  -->

getElementById Selects one element by ID
Returns: single element
Fastest method.

getElementsByClassName Selects multiple elements by class name
Returns: HTMLCollection (live)
Updates automatically if DOM changes

querySelector Selects first matching element
Uses CSS selectors
Returns: single element

querySelectorAll Selects all matching elements
Uses CSS selectors
Returns: NodeList (static)



2. How do you create and insert a new element into the DOM?

<!-- Answer to number of 02 -->
const ul = document.getElementById("list");
const li = document.createElement("li");
li.textContent = "New Item";
ul.appendChild(li);


3. What is Event Bubbling? And how does it work?

<!-- Answer to number of 03 -->
When click on a nested element, the event is triggered in this order:
Target element (where you clicked)
Parent element
Higher parent
document
<!-- Example -->
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Button clicked");
});


4. What is Event Delegation in JavaScript? Why is it useful?

<!-- Answer to number 04 -->

Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding listeners to multiple child elements. The parent handles events for its children using event bubbling.


5. What is the difference between preventDefault() and stopPropagation() methods?

<!-- Answer to number 05  -->

preventDefault()
Purpose: Stops the default action of an element from happening.
Does NOT stop event bubbling.

stopPropagation()
Purpose: Stops the event from bubbling up the DOM tree.
Does NOT stop default actions.