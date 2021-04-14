let buttonAdd = document.querySelector('.buttonAdd');
let deleteEl = document.querySelector('.deleteButton');
let newList = document.querySelector('.newList');
let list = document.querySelector('.list');
let text = document.querySelector('.text');
let sort = document.querySelector('.sort');


deleteEl.addEventListener('click', deleteDiv);

function deleteDiv(event) {
    event.target.parentElement.remove();
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
    let newListarr = list.children;
    let p = Array.from(newListarr);
    if (sort.classList.contains('sort')) {
        p.sort((a, b) => {
            if (a.firstElementChild.value < b.firstElementChild.value) {
                return -1;
            }
            if (a.firstElementChild.value > b.firstElementChild.value) {
                return 1;
            }
            return 0;
        });
        sort.classList.add('sorbut');
        sort.classList.remove('sort');
    } else if (sort.classList.contains('sorbut')) {
        p.sort((a, b) => {
            if (a.firstElementChild.value > b.firstElementChild.value) {
                return -1;
            }
            if (a.firstElementChild.value < b.firstElementChild.value) {
                return 1;
            }
            return 0;
        });
        sort.classList.add('sort');
        sort.classList.remove('sorbut');
    }
    p.forEach(item => {
        list.appendChild(item);
    });
};