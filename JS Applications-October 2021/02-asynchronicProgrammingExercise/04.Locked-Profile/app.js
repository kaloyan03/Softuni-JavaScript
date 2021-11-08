function lockedProfile() {
    async function resolve() {
        let usersInfo = await fetch('http://localhost:3030/jsonstore/advanced/profiles').then(body => body.json());
        let usersMainElement = document.getElementById('main');
        usersMainElement.innerHTML = '';
        let usersArray = Object.values(usersInfo);
        let userCounter = 1;
        usersArray.forEach(user => {
            let username = user['username'];
            let email = user['email'];
            let age = user['age'];

            let userDivElement = createUser(userCounter, username, email, age);
            usersMainElement.appendChild(userDivElement);
            userCounter++;
        })

    }

    resolve();

    function createUser(numberOfUser, username, email, age) {
        let divProfileElement = document.createElement('div');
        divProfileElement.setAttribute('class', 'profile');

        let imgElement = document.createElement('img');
        imgElement.setAttribute('class', 'userIcon');
        imgElement.setAttribute('src', "./iconProfile2.png");
        divProfileElement.appendChild(imgElement);

        let labelLockElement = document.createElement('label');
        labelLockElement.textContent = 'Lock';
        divProfileElement.appendChild(labelLockElement);

        let inputLockElement = document.createElement('input');
        inputLockElement.setAttribute('type', 'radio');
        inputLockElement.setAttribute('name', `user${numberOfUser}Locked`);
        inputLockElement.setAttribute('value', 'lock');
        divProfileElement.appendChild(inputLockElement);

        let labelUnlockElement = document.createElement('label');
        labelUnlockElement.textContent = 'Unlock';
        divProfileElement.appendChild(labelUnlockElement);

        let inputUnlockElement = document.createElement('input');
        inputUnlockElement.setAttribute('type', 'radio');
        inputUnlockElement.setAttribute('name', `user${numberOfUser}Locked`);
        inputUnlockElement.setAttribute('value', 'unlock');
        divProfileElement.appendChild(inputUnlockElement);

        // let hrElement = document.createElement('hr');

        let labelUsernameElement = document.createElement('label');
        labelUsernameElement.textContent = 'Username';
        divProfileElement.appendChild(labelUsernameElement);

        let usernameInputElement = document.createElement('input');
        usernameInputElement.setAttribute('type', 'text');
        usernameInputElement.setAttribute('name', `user${numberOfUser}Username`);
        usernameInputElement.setAttribute('value', username);
        usernameInputElement.setAttribute('disabled', 'disabled');
        usernameInputElement.setAttribute('readonly', 'readonly');
        divProfileElement.appendChild(usernameInputElement);

        let divUserHiddenFieldsElement = document.createElement('div');
        divUserHiddenFieldsElement.setAttribute('id', `user${numberOfUser}HiddenFields`);
        divUserHiddenFieldsElement.style.display = 'none';

        let labelEmailElement = document.createElement('label');
        labelEmailElement.textContent = 'Email:'
        divUserHiddenFieldsElement.appendChild(labelEmailElement);

        let inputEmailElement = document.createElement('input');
        inputEmailElement.setAttribute('type', 'email');
        inputEmailElement.setAttribute('name', `user${numberOfUser}Email`);
        inputEmailElement.setAttribute('value', email);
        inputEmailElement.setAttribute('disabled', 'disabled');
        inputEmailElement.setAttribute('readonly', 'readonly');
        divUserHiddenFieldsElement.appendChild(inputEmailElement);

        let labelAgeElement = document.createElement('label');
        labelAgeElement.textContent = 'Age:'
        divUserHiddenFieldsElement.appendChild(labelAgeElement);

        let inputAgeElement = document.createElement('input');
        inputAgeElement.setAttribute('type', 'email');
        inputAgeElement.setAttribute('name', `user${numberOfUser}Age`);
        inputAgeElement.setAttribute('value', age);
        inputAgeElement.setAttribute('disabled', 'disabled');
        inputAgeElement.setAttribute('readonly', 'readonly');
        divUserHiddenFieldsElement.appendChild(inputAgeElement);

        divProfileElement.appendChild(divUserHiddenFieldsElement);

        let showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'Show more';
        showMoreButton.addEventListener('click', showMoreButtonHandler)
        divProfileElement.appendChild(showMoreButton);

        return divProfileElement;

    }

    function showMoreButtonHandler(e) {
        let showMoreButton = e.currentTarget;
        let profileDivElement = e.currentTarget.parentElement;
        let hiddenFieldsDiv = profileDivElement.querySelector('div');
        let radioButton = profileDivElement.querySelector('input[type="radio"]:checked');

        if (radioButton.value !== 'unlock') {
            return;
        }

        showMoreButton.textContent = 'Show more' ? 'Hide it' : 'Show more';

        hiddenFieldsDiv.style.display = hiddenFieldsDiv.style.display === 'block' ? 'none' : 'block'

    }
}
