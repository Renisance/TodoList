//Создаем массив для сохранения данных. Получаем данные по ключу "a", если данных нет, создаём пустой массив
let arr =  JSON.parse(localStorage.getItem("a")) || []; 

// Просто "сохраняльщик" - каждый раз при изменении массива записывает его в хранилище.
const funcLocalStorage = () => {    
    console.log(arr)
    localStorage.setItem('a', JSON.stringify(arr));
};

// Отображаем сохранённые элементы при загрузке
document.addEventListener("DOMContentLoaded", () => {   
      arr.map(item => createShowList(item)); 
    });

//Создание li
function createShowList(item) {
    let list = document.createElement('li');
    /////////
    list.setAttribute('id', item.id);
    list.textContent = item.text;
    ////////
    document.querySelector('.form__list').append(list);
    document.querySelector('.form-control').value = '';
    createBtnDelete(list)
    editListItem(list)
    return list;
};

//Создание кнопки  "Удалить"
function createBtnDelete(li) {   
    let btnDelete = document.createElement('button');
    btnDelete.innerHTML = 'Удалить';
    btnDelete.classList.add('remove-btn');
    li.append(btnDelete);
    //Удаление Li
    btnDelete.addEventListener('click', () => {
        /////
        arr = arr.filter(item => item.id !== li.id);
        funcLocalStorage();
        /////
        return li.remove()
    });
};

//Создание кнопки "Редактировать"
function editListItem(li) {
    let btnEdit = document.createElement('button');
    btnEdit.innerHTML = 'Редактировать';
    btnEdit.classList.add('edit-btn');
    li.append(btnEdit);

    // Редактирование Li
    btnEdit.addEventListener('click', () => {
        btnEdit.remove()
        let inputEditItem = document.createElement('input')
        inputEditItem.classList.add('edit-input');
        li.append(inputEditItem);

    // Создание кнопки инпута
        let inputBtn = document.createElement('button')
        inputBtn.classList.add('inp-btn');
        inputBtn.innerHTML = 'Готово';
        li.append(inputBtn);

        inputBtn.addEventListener('click', () => {
        ///
            const newText = inputEditItem.value;
            li.textContent = newText;
            const index = arr.findIndex(item => item.id === li.id);
            if(index !== -1) {
                arr[index].text = newText;
                funcLocalStorage();
            }
        // Восстанавливаем кнопки
            inputEditItem.remove();
            inputBtn.remove();
            editListItem(li);
        ///
        });
    });
};
document.querySelector('.btn-primary').addEventListener('click', () => {    
    const newItem = {
        id: Math.random().toString(),
        text: document.querySelector('.form-control').value
    };    
    arr.push(newItem); // Добавляем объект вместо строки
    funcLocalStorage();
    createShowList(newItem); // Передаём объект в функцию
    document.querySelector('.form-control').value = ''; // Очищаем поле ввода
});