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
**Answer:**