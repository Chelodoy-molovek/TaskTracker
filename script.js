// let inputText = document.querySelector('.inputText')
// let container = document.querySelector('.container');
let buttonAdd = document.querySelector('.buttonAdd');
let deleteEl = document.querySelector('.deleteButton');
let newList = document.querySelector('.newList');
let list = document.querySelector('.list');
let text = document.querySelector('.text');
let sort = document.querySelector('.sort');

deleteEl.addEventListener('click', deleteDiv);

function deleteDiv(event) {
    event.target.parentElement.parentElement.remove();
}

buttonAdd.addEventListener('click', addText);

function addText() {
    let olo = newList.cloneNode(true);
    olo.firstElementChild.value = '';
    list.append(olo);
    let pop = olo.querySelector('.deleteButton');
    pop.addEventListener('click', deleteDiv);
}

sort.addEventListener('click', sortDown);

function sortDown() {

}


// buttonAdd.addEventListener('click', addText);

// function addText() {
//     let olo = newList.cloneNode(true);
//     list.style.display = 'block';
//     olo.style.display = 'block';
//     list.append(olo);
//     inputText.remove();
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
//     newDiv.classList.add('lolo');
// }