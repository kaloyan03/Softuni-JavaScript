// extend the functionality to delete a single item
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
    //create a delete button
    let deleteButton = document.createElement('a');
    //modificate button
    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = '[Delete]'
    //attach event to delete button
    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })

    //append elements to list of elements
    li.appendChild(deleteButton);
    listOfItemsElements.appendChild(li);

    //clear the input value
    inputItemElement.value = '';


}