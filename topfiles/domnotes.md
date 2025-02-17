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

- It can be done in couple of ways. Most usefull will be adding, removing or altering attributes, changing classes or adding inline style information.

```js
// adds the indicated style rule to the element in the div variable
div.style.color = 'blue';

// adds several style rules
div.style.cssText = 'color: blue; background: white;';

// adds several style rules
div.setAttribute('style', 'color: blue; background: white;');

// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
div.style.background - color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style['background-color'];

// bracket notation with camelCase: also works
div.style['backgroundColor'];

// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute('id', 'theDiv');

// returns value of specified attribute, in this case "theDiv"
div.getAttribute('id');

// removes specified attribute
div.removeAttribute('id');

// adds class "new" to your new div
div.classList.add('new');

// removes "new" class from div
div.classList.remove('new');

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle('active');

// creates a text node containing "Hello World!" and inserts it in div
div.textContent = 'Hello World!';

// renders the HTML inside div
div.innerHTML = '<span>Hello World!</span>';
```

**NB! Note that using textContent is preferred over innerHTML for adding text, as innerHTML should be used sparingly to avoid potential security risks**

---

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
