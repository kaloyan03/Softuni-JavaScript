function attachEvents() {
    let baseUrl = 'http://localhost:3030/jsonstore/messenger';

    let submitButtonElement = document.getElementById('submit');
    let refreshButtonElement = document.getElementById('refresh');

    submitButtonElement.addEventListener('click', submitButtonHandler)
    refreshButtonElement.addEventListener('click', refreshButtonHandler)

    function submitButtonHandler() {
        let authorInputElement = document.getElementById('author');
        let contentInputElement = document.getElementById('content');
        fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                author: authorInputElement.value,
                content: contentInputElement.value,
            })
        })
        .then(body => body.json())
    }

    function refreshButtonHandler() {
        let messagesTextAreaElement = document.getElementById('messages');
        messagesTextAreaElement.value = '';

        fetch(baseUrl)
        .then(body => body.json())
        .then(messagesData => {
            for (const value of Object.values(messagesData)) {
                let messagesTextContent = messagesTextAreaElement.value;
                messagesTextContent += `${value['author']}: ${value['content']}\n`;
                messagesTextAreaElement.value = messagesTextContent;
            }
        })
    }
}

attachEvents();