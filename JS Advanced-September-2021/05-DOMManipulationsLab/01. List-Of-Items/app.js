function addItem() {
    // get elements
    let listOfItemsElements = document.getElementById('items');
    let inputItemElement = document.getElementById('newItemText');

    // parse elements
    inputItemText = inputItemElement.value;

    //create new DOM element
    let li = document.createElement('li');
    //modificate created DOM element
    li.textContent = inputItemText;
    //append element to list of elements
    listOfItemsElements.appendChild(li);

    //clear the input value
    inputItemElement.value = '';
}