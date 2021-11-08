function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    
    let loadButtonElement = document.getElementById('btnLoad');
    let createButtonElement = document.getElementById('btnCreate');

    loadButtonElement.addEventListener('click', loadButtonHandler);
    createButtonElement.addEventListener('click', createButtonHandler);


    function loadButtonHandler() {
        let phonebooksListElement = document.getElementById('phonebook');
       
        fetch(baseUrl)
        .then(body => body.json())
        .then(phonebookData => {
            phonebooksListElement.innerHTML = '';
            for (const [key, value] of Object.entries(phonebookData)) {
                let person = value['person'];
                let phone = value['phone'];
                
                let liElement = document.createElement('li');
                liElement.setAttribute('person-id', key);
                liElement.textContent = `${person}: ${phone}`;
                
                let deleteButtonElement = document.createElement('button');
                deleteButtonElement.textContent = 'Delete';
                deleteButtonElement.addEventListener('click', deleteButtonHandler);
                liElement.appendChild(deleteButtonElement);

                phonebooksListElement.appendChild(liElement);
            }
        })
    }

    function deleteButtonHandler(e) {
        let liElement = e.target.parentElement;
        let personId = liElement.getAttribute('person-id');
        liElement.remove();

        fetch(`${baseUrl}/${personId}`, {
            method: 'DELETE',
        })
    }

    function createButtonHandler() {
        let personInputElement = document.getElementById('person');
        let phoneInputElement = document.getElementById('phone');
        
        fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'person': personInputElement.value,
                'phone': phoneInputElement.value,
            })
        })

    }
}

attachEvents();