function solve() {
    let addButtonElement = document.querySelector('#container button');

    addButtonElement.addEventListener('click', addButtonHandler);

    function addButtonHandler(event) {
        event.preventDefault();
        let petsListElement = document.querySelector('#adoption ul');
        let allInputElements = document.querySelectorAll('#container input');
        let nameInputElement = allInputElements[0];
        let ageInputElement = allInputElements[1];
        let kindInputElement = allInputElements[2];
        let currentOwnerInputElement = allInputElements[3];


        // if input fields aren't valid then do nothing
        if (!(validateInputs(nameInputElement.value, ageInputElement.value, kindInputElement.value, currentOwnerInputElement.value))) {
            return;
        }   

        let newPetLiElement = createPetLiElement(nameInputElement.value, ageInputElement.value, kindInputElement.value, currentOwnerInputElement.value);

        clearInputFields(nameInputElement, ageInputElement, kindInputElement, currentOwnerInputElement);

        petsListElement.appendChild(newPetLiElement);

    }

    // validate input fields
    function validateInputs(name, age, kind, owner) {
        if (name.trim() == '' || age.trim() == '' || isNaN(age) || kind.trim() == '' || owner.trim() == '') {
            return false;
        }
        return true;
    }

    //create li element to list pet
    function createPetLiElement(name, age, kind, owner) {
        let liElement = document.createElement('li');
        let paragraphElement = document.createElement('p');
        
        paragraphElement.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;
    
        let ownerSpanElement = document.createElement('span');
        ownerSpanElement.textContent = `Owner: ${owner}`;

        let buttonElement = document.createElement('button');
        buttonElement.textContent = 'Contact with owner';
        
        buttonElement.addEventListener('click', contactButtonHandler);

        liElement.appendChild(paragraphElement);
        liElement.appendChild(ownerSpanElement);
        liElement.appendChild(buttonElement);

        return liElement;
    }
    // contact button handler
    function contactButtonHandler(event) {
        let contactButtonElement = event.target;
        let petLiElement = contactButtonElement.parentElement;
        let newDivElement = document.createElement('div');
        let inputElement = document.createElement('input');
        inputElement.setAttribute('placeholder', 'Enter your names');
        contactButtonElement.remove();

        let takeItButtonElement = document.createElement('button');
        takeItButtonElement.textContent = 'Yes! I take it!';
        takeItButtonElement.addEventListener('click', takeItButtonHandler);

        newDivElement.appendChild(inputElement);
        newDivElement.appendChild(takeItButtonElement);
        petLiElement.appendChild(newDivElement);
    }
    // take it button handler
    function takeItButtonHandler(event) {
        let petLiElement = event.target.parentElement.parentElement;
        let newOwnerInputElement = petLiElement.querySelector('div input');
        let divElement = petLiElement.querySelector('div');
        
        if (newOwnerInputElement.value.trim() == '') {
            return;
        }
        
        divElement.remove();

        let adoptedPetListElement = document.querySelector('#adopted ul');
        let ownerSpanElement = petLiElement.querySelector('span');
        ownerSpanElement.textContent = `New Owner: ${newOwnerInputElement.value}`;

        let checkedButtonElement = document.createElement('button');
        checkedButtonElement.textContent = 'Checked';
        checkedButtonElement.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
        
        let clonedPetLiElement = petLiElement.cloneNode(true);
        petLiElement.remove();
        
        clonedPetLiElement.appendChild(checkedButtonElement);

        adoptedPetListElement.appendChild(clonedPetLiElement);
        
    }

    //clears the input fields
    function clearInputFields(nameField, ageField, kindField, ownerField) {
        nameField.value = '';
        ageField.value = '';
        kindField.value = '';
        ownerField.value = '';
    }
}

