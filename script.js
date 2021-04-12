let inputText = document.querySelector('.inputText')
let buttonAdd = document.querySelector('.buttonAdd');
let container = document.querySelector('.container');
let deleteEl = document.querySelector('.deleteButton');
let text = document.querySelector('.text');

// deleteEl.addEventListener('click', deleteDiv);

// function deleteDiv(event) {
//     event.target.parentElement.parentElement.remove();
// }

// buttonAdd.addEventListener('click', slam1);

// function slam1() {
//     let olo = inputText.cloneNode(true);
//     container.insertBefore(olo, buttonAdd);
//     let pop = olo.querySelector('.deleteButton');
//     pop.addEventListener('click', deleteDiv);

// }

// buttonAdd.addEventListener('click', dobavlenie);

// function dobavlenie() {
//     let str = text.value; // получаем введенный текст
//     let newDiv = document.createElement('div'); // создаем новый див
//     let newP = document.createElement('p'); // оздаем новый параграф
//     newP.textContent = str; // добавляем в параграф текс из инпута
//     newDiv.append(newP); // создаем переменную в которой див, в которую добали параграф
//     container.append(newDiv);
//     newDiv.classList.add('lolo')
// }