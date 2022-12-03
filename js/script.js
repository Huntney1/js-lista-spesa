const list = [
    '-Cioccolata-',
    'Guanciale',
    'Pecorino',
    'Pasta',
    'Uova',
    'Passata di pomodoro',
    'Piatti',
    'Acqua',
]

const list_container = document.querySelector('.shopping-list');

let element = '';
let item = 0;

while( item < list.length){

   let list_item = document.createElement('li')

    list_item.innerText = list[item];

    list_item.classList.add('list');

    list_container.append(list_item)
    item++
}