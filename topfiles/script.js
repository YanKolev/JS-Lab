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

// Buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach(button => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
