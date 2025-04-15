export {editListItem}
import {funcLocalStorage} from "../services/index.js";

//Создание кнопки "Редактировать"
function editListItem(li, arr) {
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
                funcLocalStorage(arr);
            }
        // Восстанавливаем кнопки
            inputEditItem.remove();
            inputBtn.remove();
            editListItem(li, arr);
        ///
        });
    });
};
