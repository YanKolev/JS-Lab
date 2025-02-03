//JavaScript does not alter your HTML, but the DOM - your HTML file will look the same,
// but the JavaScript changes what the browser renders.

// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// // container.appendChild(content);

// const paragraph = document.createElement('p');
// paragraph.classList.add('paragraph');
// paragraph.style.color = 'red';
// paragraph.textContent = 'Hey I"m red!';

// // container.appendChild(paragraph);

// const smallheading = document.createElement('h3');
// smallheading.classList.add('h3');
// smallheading.style.color = 'blue';
// smallheading.textContent = 'I"m a blue h3!';

// // container.appendChild(smallheading);

// const secondDiv = document.createElement('div');
// secondDiv.classList.add('div');
// secondDiv.style.backgroundColor = 'pink';
// secondDiv.style.border = '1px solid black';
// // secondDiv.setAttribute('style', 'background: pink; border: 1px solid black ');
// // secondDiv.style.color = 'blue';

// const h12 = document.createElement('h1');
// h12.classList.add('h1');
// h12.textContent = 'I"m in a div';

// // secondDiv.appendChild(h12);

// const secondpara = document.createElement('p');
// secondpara.classList.add('paragraph');
// secondpara.textContent = 'ME TOO!';

// secondDiv.appendChild(secondpara);

// container.appendChild(secondDiv);

// Adding a buton
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World');

// // 3rd variation of a button:
// const btn = document.querySelector('#btn2');
// btn.addEventListener('click', () => {
//   alert('Hello World');
// });

//variations of buttons
// METHOD 1
// function alertFunction() {
//   alert('YAY! YOU DID IT!');
// }

// // Method 2
// function alertFunction() {
//   alert('Yay you did it Var 2');
// }
// const btn = document.querySelector('#btn');

// //METHOD 2
// btn.onclick = alertFunction;

// // Method 3
// btn.addEventListener('click', alertFunction);

// adding parameter to display on the console
// btn.addEventListener('click', function (e) {
//   // console.log(e.target);
//   e.target.style.background = 'blue';
// });

// // Buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach(button => {
//   // and for each one we add a 'click' listener
//   button.addEventListener('click', () => {
//     alert(button.id);
//   });
// });

//To manipulate an element inside the DOM, you first need to select it and store a reference to it inside a variable.

const link = document.querySelector('a');

link.href = 'https://developer.mozilla.org';

const sect = document.querySelector('section');

const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride';

sect.appendChild(para);

//add a text node to the paragraph the link sits inside

const text = document.createTextNode(
  ' - the premier source for web development knowledge.'
);

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

//This moves the paragraph down to the bottom of the section.
sect.appendChild(linkPara);

// You might have thought it would make a second copy of it,
// but this is not the case — linkPara is a reference to the one and only copy of that paragraph.
// If you wanted to make a copy and add that as well, you'd need to use Node.cloneNode() instead.

//removing a node- whenyou have a refrence to the node to be removed and its parent
sect.removeChild(linkPara);

//Variation is if you want to remove a node based only on a refrence to itself- you can use Element.remove()
//linkPara.remove();

//styling- inline styling information
// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

//javascript property version of CSS are written in lower camel case ->backgroundColor
//CSS versions are hyphenated(kebab-case) ->background-color

//Element.setAttribute()- takes two arguments, the attribuet you want to set on the element, and the value you want to set to it
para.setAttribute('class', 'highlight');
//this method is more used for larger and involed apps, + more purist.
