import menuService from './menuService.js';
import { optionsTemplate } from './createDropdownTemplates.js';
import { render } from '../node_modules/lit-html/lit-html.js';

function addItem() {
    let addOptionFormElement = document.querySelector('#add-option-form');
    renderOptions();
    addOptionFormElement.addEventListener('submit', addOptionFormHandler);

}

function renderOptions() {
    let dropDownMenuElement = document.querySelector('select#menu');
    menuService.getMenuOptions().then(data => {
        let optionElements = optionsTemplate(Object.values(data));
        render(optionElements, dropDownMenuElement);
    })
}

function addOptionFormHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let inputValue = formData.get('itemText');
    let newOpiton = {
        text: inputValue,
    }
    menuService.createMenuOption(newOpiton).then(
        result => {
            console.log(result);
        }
    )
    renderOptions();
    e.target.reset();
}

addItem();