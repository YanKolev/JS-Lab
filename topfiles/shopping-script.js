// const list = document.querySelector('ul');

// const input = document.querySelector('input');

// const btn = document.querySelector('#btn');

// function responseF() {
//   let currentValue = document.getElementById('item');
//   // currentValue.innerText = console.log(`Input is ${input.value}`);
//   currentValue.innerText = '';

//   const newList = document.createElement('li');
//   const span = document.createElement('span');
//   const newBtn = document.createElement('button');

//   newList.appendChild(span);
//   newList.appendChild(newBtn);

//   span.textContent = currentValue.value;
//   newBtn.textContent = 'Delete';

//   list.appendChild(newList);

//   // newBtn.addEventListener('onclick', function (e) {
//   //   // const newList = document.getElementsByName('li');
//   //   list.removeChild(list.firstElementChild); // try with instead of list.first el child - just to newList
//   // });

//   newBtn.addEventListener('click', removeList);

//   function removeList() {
//     list.remove(document.querySelector('li')); here also newList so it targets the element, Needs rework
//   }
// }

//other variation
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBnt = document.createElement('buton');

  listItem.appendChild(listText);
  listText.textContent = myItem; //missed this
  listItem.appendChild(listBnt);
  listBnt.textContent = 'Delete';
  list.appendChild(listItem); // this also,

  listBnt.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});
