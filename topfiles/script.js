//JavaScript does not alter your HTML, but the DOM - your HTML file will look the same,
// but the JavaScript changes what the browser renders.

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.style.color = 'red';
paragraph.textContent = 'Hey I"m red!';

container.appendChild(paragraph);

const smallheading = document.createElement('h3');
smallheading.classList.add('h3');
smallheading.style.color = 'blue';
smallheading.textContent = 'I"m a blue h3!';

container.appendChild(smallheading);

const secondDiv = document.createElement('div');
secondDiv.body.style.backgoundColor = 'pink';
secondDiv.style.border = '1px solid black';

const h12 = document.createElement('h1');
h12.classList.add('h1');
h12.textContent = 'I"m in a div';

secondDiv.appendChild(h12);

const secondpara = createElement('p');
secondpara.classList.add(paragraph);
secondpara.textContent = 'ME TOO!';

secondDiv.appendChild(secondpara);

container.appendChild(secondDiv);
