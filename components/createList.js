export {createShowList}
import {editListItem} from "../components/edit.js";
import {createBtnDelete} from "../components/delete.js";


function createShowList(item, arr) {
    let list = document.createElement('li');
    /////////
    list.setAttribute('id', item.id);
    list.textContent = item.text;
    ////////
    document.querySelector('.form__list').append(list);
    document.querySelector('.form-control').value = '';
    createBtnDelete(list, arr)
    editListItem(list, arr)
    return list;
};