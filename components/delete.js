export {createBtnDelete}
import {funcLocalStorage} from "../services/index.js";

//Создание кнопки  "Удалить"
 function createBtnDelete(li, arr) {   
    let btnDelete = document.createElement('button');
    btnDelete.innerHTML = 'Удалить';
    btnDelete.classList.add('remove-btn');
    li.append(btnDelete);
    //Удаление Li
    btnDelete.addEventListener('click', () => {
        /////
        arr = arr.filter(item => item.id !== li.id);
        funcLocalStorage(arr);
        /////
        return li.remove()
    });
};
