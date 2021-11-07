window.addEventListener('load', solution)

function solution() {
    // get submit button
    let submitButtonElement = document.getElementById('submitBTN');

    // attach event listener to the submit button
    submitButtonElement.addEventListener('click', submitButtonForm)

    function submitButtonForm() {
        let allElementsArray = getInputFieldElements();

        let [nameInputElement, emailInputElement, phoneNumberInputElement, addressInputElement, postalCodeInputElement, informationListElement, editButtonElement, continueButtonElement] = allElementsArray;

        if (nameInputElement.value === '' || emailInputElement.value === '') {
            return;
        }

        submitButtonElement.disabled = true;


        let fullNameLiElement = document.createElement('li');
        fullNameLiElement.textContent = `Full Name: ${nameInputElement.value}`;

        let emailLiElement = document.createElement('li');
        emailLiElement.textContent = `Email: ${emailInputElement.value}`;

        let phoneLiElement = document.createElement('li');
        phoneLiElement.textContent = `Phone: ${phoneNumberInputElement.value}`;

        let addressLiElement = document.createElement('li');
        addressLiElement.textContent = `Address: ${addressInputElement.value}`;

        let postalCodeLiElement = document.createElement('li');
        postalCodeLiElement.textContent = `Postal Code: ${postalCodeInputElement.value}`;

        informationListElement.appendChild(fullNameLiElement);
        informationListElement.appendChild(emailLiElement);
        informationListElement.appendChild(phoneLiElement);
        informationListElement.appendChild(addressLiElement);
        informationListElement.appendChild(postalCodeLiElement);

        editButtonElement.disabled = false;
        continueButtonElement.disabled = false;

        editButtonElement.addEventListener('click', () => {
            let allElementsArray = getInputFieldElements();

            let [nameInputElement, emailInputElement, phoneNumberInputElement, addressInputElement, postalCodeInputElement, informationListElement, editButtonElement, continueButtonElement, submitButtonElement] = allElementsArray;

            let informationList = [...informationListElement.children];

            for (let i = 0; i < informationList.length; i++) {
                let liElement = informationList[i];
                let elementData = liElement.textContent.split(' ');
                if (i == 0) {
                    let fullNameValue = liElement.textContent.slice(11);
                    nameInputElement.te = fullNameValue;
                    liElement.remove();
                } else if (i == 1) {
                    let emailValue = elementData[1];
                    liElement.remove();
                    emailInputElement.value = emailValue;
                } else if (i == 2) {
                    let phoneValue = liElement.textContent.slice(7);
                    liElement.remove();
                    phoneNumberInputElement.value = phoneValue;
                } else if (i == 3) {
                    let addressValue = liElement.textContent.slice(9);
                    liElement.remove();
                    addressInputElement.value = addressValue;
                } else if (i == 4) {
                    let postalCodeValue = elementData[2];
                    liElement.remove();
                    postalCodeInputElement.value = postalCodeValue;

                    editButtonElement.disabled = true;
                    continueButtonElement.disabled = true;

                    submitButtonElement.disabled = false;

                }
            }

        })

        continueButtonElement.addEventListener('click', () => {
            let divElement = document.getElementById('block');
            while (divElement.firstChild) {
                divElement.removeChild(divElement.firstChild);
            }

            let h3Element = document.createElement('h3');
            h3Element.textContent = 'Thank you for your reservation!';
            divElement.appendChild(h3Element);
            pageBodyElement.appendChild(divElement);
        })

        nameInputElement.value = '';
        emailInputElement.value = '';
        phoneNumberInputElement.value = '';
        addressInputElement.value = '';
        postalCodeInputElement.value = '';

    }

    function getInputFieldElements() {
        let result = [];
        let nameInputElement = document.getElementById('fname');
        let emailInputElement = document.getElementById('email');
        let phoneNumberInputElement = document.getElementById('phone');
        let addressInputElement = document.getElementById('address');
        let postalCodeInputElement = document.getElementById('code');
        let informationListElement = document.getElementById('infoPreview');
        let editButtonElement = document.getElementById('editBTN');
        let continueButtonElement = document.getElementById('continueBTN');
        let submitButtonElement = document.getElementById('submitBTN');

        result.push(nameInputElement);
        result.push(emailInputElement);
        result.push(phoneNumberInputElement);
        result.push(addressInputElement);
        result.push(postalCodeInputElement);
        result.push(informationListElement);
        result.push(editButtonElement);
        result.push(continueButtonElement);
        result.push(submitButtonElement);

        return result;
    }
}
