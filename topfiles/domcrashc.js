// Examine the document object

// console.dir(document);

// console.log(document.domain); //loopback address/ local host in our case
// console.log(document.URL); // reads the URL
// console.log(document.title); // reads the title of the webside we put in the html

// //document.title = 123; //changes the title tothe given value

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// // console.log(document.all); //not preffered ways to select
// // console.log(document.all[10]); not preffered ways to select

// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);

// Different selecting methods that we can use to query the DOM

//GETELEMENTBYID
//console.log(document.getElementById('header-title')); //gets the element that matches

//we can put in into a variable
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// console.log(headerTitle);

//to change the text
//headerTitle.textContent = 'Hello'; // does not pay attention to the stying
//headerTitle.innerText = 'Goodbye'; //pays attention to the styling- if we add a span with style and style is set to none- it will not display it

//inner html
// headerTitle.innerHTML = '<h3>Hello</h3>';
//h3 is inside the h1, it doesnt change the h1 to h3, it puts the html inside that inner element.

//stylechanges

// headerTitle.style.borderBottom = 'solid 3px black';
// header.style.borderBottom = 'solid 3px black';

// //GETELEMENTSBYCLASSNAME = plural, more than one

// const items = document.getElementsByClassName('list-group-item');
// console.log(items); // it wil give us HTML collection
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

//if we want to give style to all of the elements

//giveserror
// items.style.backgroudColor = 'lightgrey'; // IT WILL NOT WORK BECAUSE ->its an HTML collection/ array
//in order to do it, you have to loop through it.best way it will be with a for loop

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'lightgrey';
// }

//GETELEMENTS BY TAGNAME
//works same like class, but instead of getting it by class you get it by tag
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello Tag 2';
// li.style.fontWeight = 'bold';
// li.style.backgroundColor = 'yellow';

// //works the same way like previous so we have to loop through
// for (let i = 0; i < li.length; i++) {
//   li[1].style.backgroundColor = 'lightgrey';
//}
//Only targets the li

//QUERYSELECTOR //

//Works like jquery, you use it for only 1 item. grabs only the first one
//if you wnat to use more than 1 item you need to use QUERYSELECTORALL
//USES ANY CSS SELECTOR, #-id

// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px grey';

// const input = document.querySelector('input');
// input.value = 'Hello world';
// //because we have 2 inputs in the html - the text and the button- it grabs only the text

// const submit = document.querySelector('input[type="submit"]');
// //with the css selector type and submit we can target the button

// submit.value = 'SEND';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red'; // IT WILL GET ONLY THE FIRST ONE IN THE PAGE

// //if we want to target the last item we can use the selector - last child

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'; //colors last one blue

// //we can also use to add the nthchild
// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'; // targets 2nd by using the nth-child selector

// QUERYSELECTORALL

//grabs more than one thin

// const titles = document.querySelectorAll('.title');
// console.log(titles); // give us a node list its a similar to a collection BUT WE CAN RUN FUNCTIONS ON ARRAY LISTS
// titles[0].textContent = 'Hello!';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = 'grey';
//   even[i].style.backgroundColor = 'darkgrey';
// }

//TRAVERSING THE DOM

// const itemList = document.querySelector('#items');
//parentNode propery
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = 'lightgrey';
// console.log(itemList.parentNode.parentNode); // its possible to chain them and display the parent of the parentNode

//using parentelement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'pink';
// console.log(itemList.parentElement.parentElement.parentElement);

//most of the time parentNode and ParentElement can be interchangable

//childnodes

// console.log(itemList.childNodes); //returns a nodelist basically an array
// // at position 0 its text node- it represents whitespace/ linebreak

// //children
// console.log(itemList.children); //it will return just the notes, it disregards the linebreaks a bit more cleaner array
// //it returns HTML collection- NOT A NODE LIST

// console.log(itemList.children[1]); // we can acess the children like that / same array index starting from 0

// //firstchild
// console.log(itemList.firstChild); // will return text node- it will return the whitespace/linebreak
//not so used

//more used
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// //LAST CHILD = SAME AS FIRST CHILD

// //LASTELEMENTCHILD = SAME AS FIRSTELEMENTCHILD

// //nextSibling
// console.log(itemList.nextSibling); // returns text node

// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling); //returns text node

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

////////////////////////////////////////////////////////////////////
//CREATING ELEMENTS AND INSERTING THEM

// //create a div

// const newDiv = document.createElement('div');
// // console.log(newDiv);

// //Add Class
// newDiv.className = 'hello';

// //Add id
// newDiv.id = 'hello1';

// //add attribute
// newDiv.setAttribute('title', 'Hello div');

// // to insert information we need to create a text node
// const newDivText = document.createTextNode('Hello World');
// //then we need to add the txt to div with appendchild
// newDiv.appendChild(newDivText);

// //to insert information in the html
// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px'; // it can be treated like any other DOM element

// //needs 2 parameters- the one element that we want to put in and the element BEFORE we want to put
// container.insertBefore(newDiv, h1);

//////////////////////////////////////////////////////////////////////////////////

//DOM EVENTS//

//how to add eventlistener

// const button = document
//   .getElementById('button')
//   .addEventListener('click', buttonClick);

// function buttonClick(e) {
// console.log('Button Clicked'); duuh
// document.getElementById('header-title').textContent = 'Changed'; changes text
// document.querySelector('#main').style.backgroundColor = 'pink'; changes color
//we can also pass in a parameter e inside the funcion, E stands for event
//console.log(e);
// console.log(e.target); // give us the whatever element the event is fired from
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList); // gives an array of the classes
// const output = document.getElementById('output'); // hits the empty div that we made under the UL, and puts the target as h3
// output.innerHTML = '<h3>' + e.target.id + '</h3>'; //h3 concatinated with the target event
// //using type of event that it is
// console.log(e.type);
// //position of the mouse with X and Y axis - PRINTS THE POSITON OF THE WINDOW
// console.log(e.clientX);
// console.log(e.clientY);
// //if you want to get the position from the actual element that you are inside
// console.log(e.offsetX);
// console.log(e.offsetY);
//we can also see if you are holding alt key or shift key or control key

//   console.log(e.altKey); // prints true or false
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
//   //this allows for different functionality fir yiur script

// }

//////// MOUSE EVENTS /////

// const button = document.getElementById('button');
// const box = document.getElementById('box');

//button.addEventListener('click', runEvent);

//button.addEventListener('dblclick', runEvent); // it will activate only when double click

//button.addEventListener('mousedown', runEvent); //activate only on mouse down

//button.addEventListener('mouseup', runEvent); // event fires when mouse is released

//box.addEventListener('mouseenter', runEvent); //its for the  parent element itself
//box.addEventListener('mouseleave', runEvent); // its for the parent element

//box.addEventListener('mouseover', runEvent); //for any inner elements
//box.addEventListener('mouseout', runEvent); for inner element

// box.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//   console.log('Event Type:' + e.type);

//   //shows where the mouse coordinates are
//   // output.innerHTML =
//   //   '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY;
//   // ('</h3>');

//   //it wil color the box with the rgb values of offset of the mousse and 3rd valiue for blue is a static number
//   //box.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ',40)';

//   //whole body of the document changes according to mouse movements

//   //document.body.style.backgroundColor ='rgb(' + e.offsetX + ',' + e.offsetY + ',40)';
// }

///// KEYBOARD EVENTS //////////

// const itemInput = document.querySelector('input[type=text]');
// const form = document.querySelector('form');
// const select = document.querySelector('select');

//itemInput.addEventListener('keydown', runEvent); //everytime that we type it will fireoff

//keyupeven it will fire when we release the key
// itemInput.addEventListener('keyup', runEvent);

//keypress
// itemInput.addEventListener('keypress', runEvent);

//focus event on click in
// itemInput.addEventListener('focus', runEvent);

//blur event when we click out
// itemInput.addEventListener('blur', runEvent);

//cut event- self explanatory
// itemInput.addEventListener('cut', runEvent);

// //paste event- self explanatory
// itemInput.addEventListener('paste', runEvent);

//input will do with anything that is related to an input
// itemInput.addEventListener('input', runEvent);

//added a select option in the HTML and if we want something to fire off, we will need the change event

//change event on the sudmit dropdown
//select.addEventListener('change', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//   e.preventDefault(); // we need this function to prevent the default functionality of the form so we can use the submit event in JS
//   console.log('Event Type:' + e.type);

//   // console.log(e.target.value);// WILL ASO WORK FOR CHANGE EVEN  THE SELECT DROPDOWN
//   // // logs what we are typing and injects it as a innerhtml
//   // document.getElementById('output').innerHTML =
//   //   '<h3>' + e.target.value + '</h3>';
// }

//part 4

//can also be used with queryselector
const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');
//form submit event

form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e) {
  e.preventDefault(); //for normal submission to NOT HAPPEN

  //get input value
  const newItem = document.getElementById('item').value;

  //create new li element
  const li = document.createElement('li');

  //add class
  li.className = 'list-group-item';

  //append the text, add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create de button element
  const deleteBtn = document.createElement('button');

  //add classes to delete btn

  deleteBtn.classList = 'btn btn-danger,btn-sm-float-right delete';

  //append text note
  deleteBtn.appendChild(docustomElements.createTextNode('X'));

  //append button to li
  li.appendChild(deleteBtn);

  //append li to list
  itemList.appendChild(li);
}

//removeItem

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = e.target.parentElemnt; // we want the parent element, we are clickin on the button and we want to remove the child
      itemList.removeChild(li);
      //li is the child of the itemList which is a UL
    }
  }
}

//filterItems
function filterItems(e) {
  // convert to lowercase
  const text = e.target.value.toLowerCase();
  // console.log(text);

  //get list
  const items = itemList.getElementsByTagName('li');
  // we need to convert the html collection into an array
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    // console.log(itemName);

    //we need to compare the item name to the searchbox text
    //we use if its NOT a -1(egative one). means its a match
    if (itemName.toLowerCase.indexof(text) != -1) {
      item.style.display = 'block'; // we want to show the item
    } else {
      item.style.display = 'none'; // we want to hide it
    }
  });
}
