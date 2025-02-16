# DOM Notes

## Review Questions and Answers

### What is the DOM?

- The DOM or Document object model is a tree-like representation of the contents of a webpage. So called tree of "nodes" with different relationships depending on how they are arranged in the HTML document.

### How do you target the nodes you want to work with?

- When you are working with the DOM, you use "selectors" to target the nodes you want to work with. CSS- style selectors can be used.

If we have `<div class ='display'></div>` we can target with diferent kind of selectors like:

1.  div.display
2.  .display
3.  #container > .display
4.  div#container > div.display

Also used are the relational selectors: **firstElementChild** or **lastElementChild**

```js
// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector('#container');

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);
// <div class="display"></div>
```

Also there are Query Selectors. 2 types of query selector:

1.  `element.querySelector(selector)` - returns a reference to the first match of _selector_.
2.  `element.querySelectorAll(selectors)` - returns a "NodeList" containing references to all of the matches of the _selectors_. NB! The return value is **NOT** an array. However you can convert a "NodeList" into an array with the spread operator or `Array.from()`.

### How do you create an element in the DOM?

`document.createElement(tagName, [options])` - creates a new element of tag type tagName.

[options] in this case means you can add some optional parameters to the function.

### How do you add an element to the DOM?

1.  `parentNode.appendChild(childNode)` - appends childNode as the last child of parentNode.
2.  `parentNode.insertBefore(newNode, referenceNode)` - inserts newNode into parentNode before referenceNode.

### How do you remove an element from the DOM?

`parentNode.removeChild(child)` - removes child from parentNode on the DOM and returns a reference to child.

### How can you alter an element in the DOM?

### When adding text to a DOM element, should you use textContent or innerHTML? Why?

### Where should you include your JavaScript tag in your HTML file when working with DOM nodes?

### How do “events” and “listeners” work?

### What are three ways to use events in your code?

### Why are event listeners the preferred way to handle events?

### What are the benefits of using named functions in your listeners?

### How do you attach listeners to groups of nodes?

### What is the difference between the return values of querySelector and querySelectorAll?

### What does a “NodeList” contain?

### Explain the difference between “capture” and “bubbling”.
