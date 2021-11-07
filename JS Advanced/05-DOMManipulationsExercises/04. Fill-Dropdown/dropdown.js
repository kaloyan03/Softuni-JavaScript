function addItem() {
    //get elements
    menuElement = document.getElementById('menu');
    newTextItemElement = document.getElementById('newItemText');
    newValueItemElement = document.getElementById('newItemValue');
    // allInputElements = document.querySelectorAll('body input');
    // buttonElement = allInputElements[allInputElements.length-1];

    //create new option
    newOption = document.createElement('option');
    newOption.textContent = newTextItemElement.value;
    newOption.value = newValueItemElement.value;
    // elementToAppend = new Option(newTextItemElement.value, newValueItemElement.value);
    
    //append the option to the menu
    menuElement.appendChild(newOption);
    
    //clear the fields
    newTextItemElement.value = '';
    newValueItemElement.value = '';
}