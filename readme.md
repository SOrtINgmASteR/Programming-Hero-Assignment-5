# 🚀 Programming Hero Assignment 5


## Question Answer:
**Question 1:** What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer:**   
`getElementById("id")`  
- Finds only one element by its unique ID.
- Returns a single element.

`getElementsByClassName("class")`
- Finds all elements that have that class.
- Returns a live HTMLCollection which is like an array, it can be empty.

`querySelector("selector")`
- Finds the first element that matches a CSS selector.
- Returns a single element.

`querySelectorAll("selector")`
- Finds all elements that match a CSS selector.
- Returns a static NodeList (doesn’t auto-update).  

**Question 2:** How to create and insert a new element into the DOM?  
**Answer:**  
`createElement()` -> Creates an element with the tag given in the parameter.  
`appendChild()` -> Adds the newly created element (child) to tha parent tag.  

```js
const newParagraph = document.createElement("p");
newParagraph.textContent = "text inside the <p> </p> tag";

document.body.appendChild(newParagraph);  
```


**Question 3:** What is Event Bubbling and how does it work?  
**Answer:** When any element is clicked, the event first happens on that clicked element. Then it “bubbles up” to it's parent, then the parent's parent, and keeps going on, until it reaches the `<body>` and `<html>` tag.  
    
  
**Question 4:** What is Event Delegation in JavaScript? Why is it useful?  
**Answer:** Event Delegation is when an event listener is being put on a parent element instead of adding many listeners to each child. Because of event bubbling, the parent can "catch" the events from its children.  
It is useful for dynamically added elements.  

**Question 5:** What is the difference between `preventDefault()` and `stopPropagation()` methods?    
**Answer:**   
`preventDefault()`
- Stops the browser’s default reloading behavior.
- Example: Prevent a form from submitting.

`stopPropagation()`
- Stops the event from bubbling up to parent elements.
- Example: Click on a button inside a div won’t trigger the div's click event.