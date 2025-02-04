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
//   //   list.removeChild(list.firstElementChild);
//   // });

//   newBtn.addEventListener('click', removeList);

//   function removeList() {
//     list.remove(document.querySelector('li'));
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
  listText.textContent = myItem;
  listItem.appendChild(listBnt);
  listBnt.textContent = 'Delete';
  list.appendChild(listItem);

  listBnt.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});
