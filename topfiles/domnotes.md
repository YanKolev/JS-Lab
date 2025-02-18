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

- Prevention of cross-site scripting attack.
- Safer approach will be to use textContent over innerHTML to avoid aforementioned JS injections.

### Where should you include your JavaScript tag in your HTML file when working with DOM nodes?

- Old way it will be to put it at the end of the html file, but it can be placed at the top alongside defer attribute,
  which will allow the html to load first and then JS file, without blocking content.

### How do “events” and “listeners” work?

- Events are actions that occur on your webpage, such a mouse-clicks or key-persses.

### What are three ways to use events in your code?

1. Specify a function attributes directly ontho your html elements.

2. Set properties in the for of `on<eventType>` , such as `onclick` or `onmousedown`, on the
   DOM nodes in your JavaScript.

3.Attaching event listenersto the DOM nodes in your JS file.
**Last method is the preffered**

### Why are event listeners the preferred way to handle events?

Becauswe we maintain sepration of convers, and allow multiple event listeners if the need arises.

### What are the benefits of using named functions in your listeners?

- Cleans up the code if you are going to use it in multiple places.
- we can also create so-called `callback functions` - we pass in `alertFunction` or `function (e) {...}` as an argument to addEventListener
  A callback is simply a function that is passed into another function as an argument.

### How do you attach listeners to groups of nodes?

- When have to attach lost of similar events to many elements, we can get a NodeList of all the items matching a specific
  selector with `querySelectorAll('selector')`

```html
<div id="container">
  <button id="one">Click Me</button>
  <button id="two">Click Me</button>
  <button id="three">Click Me</button>
</div>
```

```js
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach(button => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
```

### What is the difference between the return values of querySelector and querySelectorAll?

`element.querySelector(selector)` - returns a a refrence to the first match of the selector
`element.querySelectorAll(selectors)` - returns a NodeList containing reference to all the matches of the selectors

### What does a “NodeList” contain?

- Its a collection of document nodes(element nodes, attribute nodes and text nodes).
  HTML collection items can be accessed by their name, id or index number. NodeList items can only be accessed by their index number.

### Explain the difference between “capture” and “bubbling”.

Event flow explains the order in which events are received on the page from the element where the event occurs and propagated through the DOM tree.

There are two main event models:

1.Event bubbling - an event starts at the most specific element and then flows upward toward the least specific element (the document or even window).
When you click the button, the click event occurs in the following order:

    1.button
    2.div with the id container
    3.body
    4.html
    5.document

The `click` event first occurs on the button which is the element that was clicked.

Then the `click` event goes up the DOM tree, firing on each node along its way until it reaches the `document` object.

2.Event capturing - In the event-capturing model, an event starts at the least specific element and flows downward toward the most specific element.

When you click the button, the click event occurs in the following order:

    1.document
    2.html
    3.body
    4.div with the id container
    5.button

#### DOM Level 2 Event flow

DOM level 2 events specify that event flow has three phases:

- First, event capturing occurs, which provides the opportunity to intercept the event.

- Then, the actual target receives the event.

- Finally, event bubbling occurs, which allows a final response to the event.

More info can be obtained [JS tutorial](https://www.javascripttutorial.net/javascript-dom/javascript-events/)
