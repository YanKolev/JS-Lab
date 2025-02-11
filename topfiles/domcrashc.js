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

const titles = document.querySelectorAll('.title');
console.log(titles); // give us a node list its a similar to a collection BUT WE CAN RUN FUNCTIONS ON ARRAY LISTS
titles[0].textContent = 'Hello!';

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'grey';
  even[i].style.backgroundColor = 'darkgrey';
}
