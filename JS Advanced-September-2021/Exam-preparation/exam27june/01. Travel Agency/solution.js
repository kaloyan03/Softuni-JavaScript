window.addEventListener('load', solution);

function solution() {
    let submitButtonElement = document.getElementById('submitBTN');
    let previewInfoUlElement = document.getElementById('infoPreview');
    let personInfo = {};
    submitButtonElement.addEventListener('click', submitButtonHandler)

    function submitButtonHandler(e) {

        let [nameInputElement, emailInputElement, phoneInputElement, addressInputElement, postalCodeInputElement] = getInputElements();

        if (nameInputElement.value == '' || emailInputElement.value == '') {
            return;
        }

        let editButtonElement = document.getElementById('editBTN');
        editButtonElement.addEventListener('click', editButtonHandler);
        let continueButtonElement = document.getElementById('continueBTN');
        continueButtonElement.addEventListener('click', continueButtonHandler);

        let liElementsArray = createLiElements(nameInputElement.value, emailInputElement.value, phoneInputElement.value, addressInputElement.value, postalCodeInputElement.value);
        
        let [nameLiElement, emailLiElement, phoneLiElement, addressLiElement, codeLiElement] = liElementsArray;

        previewInfoUlElement.appendChild(nameLiElement);
        previewInfoUlElement.appendChild(emailLiElement);

        if (phoneLiElement) {
            previewInfoUlElement.appendChild(phoneLiElement);
        }

        if (addressLiElement) {
            previewInfoUlElement.appendChild(addressLiElement);
        }

        if (codeLiElement) {
            previewInfoUlElement.appendChild(codeLiElement);
        }

        clearInputFields(nameInputElement, emailInputElement,phoneInputElement, addressInputElement, postalCodeInputElement);
        
        // disable submit button
        e.target.disabled = true;

        //enable continue and edit buttons
        editButtonElement.disabled = false;
        continueButtonElement.disabled = false;
    }

    function createLiElements(name, email, phone, address, code) {
        let result = [];

        let nameLiElement = document.createElement('li');
        nameLiElement.textContent = `Full Name: ${name}`;
        personInfo['name'] = name;
        result.push(nameLiElement);

        let emailLiElement = document.createElement('li');
        emailLiElement.textContent = `Email: ${email}`;
        personInfo['email'] = email;
        result.push(emailLiElement);

        if (phone) {
            let phoneLiElement = document.createElement('li');
            phoneLiElement.textContent = `Phone Number: ${phone}`;
            personInfo['phone'] = phone;
            result.push(phoneLiElement);
        }

        if (address) {
            let addressLiElement = document.createElement('li');
            personInfo['address'] = address;
            addressLiElement.textContent = `Address: ${address}`;
            result.push(addressLiElement);
        }

        if (code) {
            let codeLiElement = document.createElement('li');
            personInfo['code'] = code;
            codeLiElement.textContent = `Postal Code: ${code}`;
            result.push(codeLiElement);
        }

        return result;
    }

    function clearInputFields(nameEl, emailEl, phoneEl, addressEl, codeEl) {
        nameEl.value = '';
        emailEl.value = '';
        phoneEl.value = '';
        addressEl.value = '';
        codeEl.value = '';
    }

    function editButtonHandler(e) {
        let previewInfoUlElement = document.getElementById('infoPreview');
        let [nameInputElement, emailInputElement, phoneInputElement, addressInputElement, postalCodeInputElement] = getInputElements();
        let givenInformation = Object.keys(personInfo);
        
        nameInputElement.value = personInfo['name'];
        emailInputElement.value = personInfo['email'];

        if (givenInformation.includes('phone')) {
            phoneInputElement.value = personInfo['phone'];
        }

        if (givenInformation.includes('address')) {
            addressInputElement.value = personInfo['address'];
        }

        if (givenInformation.includes('code')) {
            postalCodeInputElement.value = personInfo['code'];
        }

        previewInfoUlElement.innerHTML = '';

        let editButtonElement = e.target;
        editButtonElement.disabled = true;
        
        let continueButtonElement = document.getElementById('continueBTN');
        continueButtonElement.disabled = true;

        let submitButtonElement = document.getElementById('submitBTN');
        submitButtonElement.disabled = false;
    }

    function continueButtonHandler() {
        let divBlockElement = document.getElementById('block');
        divBlockElement.innerHTML = '';

        let h3Element = document.createElement('h3');
        h3Element.textContent = 'Thank you for your reservation!';

        divBlockElement.appendChild(h3Element);
    }

    function getInputElements() {
        result = [];
        let nameInputElement = document.getElementById('fname');
        let emailInputElement = document.getElementById('email');
        let phoneInputElement = document.getElementById('phone');
        let addressInputElement = document.getElementById('address');
        let postalCodeInputElement = document.getElementById('code');
        result.push(nameInputElement);
        result.push(emailInputElement);
        result.push(phoneInputElement);
        result.push(addressInputElement);
        result.push(postalCodeInputElement);

        return result;
    }
}