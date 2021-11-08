function solve() {
    let baseUrl = 'http://localhost:3030/jsonstore/collections/books';

    let booksTbodyElement = document.getElementById('books-tbody');
    
    booksTbodyElement.querySelectorAll('tr').forEach(el => el.remove());
    
    let loadBooksButtonElement = document.getElementById('loadBooks');
    let addBookFormElement = document.getElementById('add-book-form');

    loadBooksButtonElement.addEventListener('click', loadBooksButtonHandler)

    function loadBooksButtonHandler() {
        fetch(baseUrl)
        .then(body => body.json())
        .then(booksData => {
            let booksTbodyElement = document.getElementById('books-tbody');
            booksTbodyElement.innerHTML = '';
            for (const [key, value] of Object.entries(booksData)) {
                let trElement = createBookTrElement(value['author'], value['title']);
                trElement.setAttribute('bookId', key);

                booksTbodyElement.appendChild(trElement);
            }
        })
    }

    function createBookTrElement(author, title) {
        let trElement = document.createElement('tr');
        trElement.setAttribute('class', 'books');

        let titleTdElement = document.createElement('td');
        titleTdElement.setAttribute('class', 'title');
        titleTdElement.textContent = title;

        let authorTdElement = document.createElement('td');
        authorTdElement.setAttribute('class', 'author');
        authorTdElement.textContent = author;

        let actionsTdElement = document.createElement('td');
        let editButtonElement = document.createElement('button');
        editButtonElement.textContent = 'Edit';
        editButtonElement.addEventListener('click', editButtonHandler);

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', deleteButtonHandler);

        actionsTdElement.appendChild(editButtonElement);
        actionsTdElement.appendChild(deleteButtonElement);

        trElement.appendChild(titleTdElement);
        trElement.appendChild(authorTdElement);
        trElement.appendChild(actionsTdElement);

        return trElement;

    }

    function editButtonHandler(e) {
        let bookTrElement = e.target.closest('.books');
        let bookId = bookTrElement.getAttribute('bookid');
        console.log(bookTrElement); 
        let bookTitle = bookTrElement.querySelector('.title').textContent
        let bookAuthor = bookTrElement.querySelector('.author').textContent

        modifyFormToEdit(bookTitle, bookAuthor, bookId);
    }

    function modifyFormToEdit(title, author, id) {
        let form = document.querySelector('#add-book-form');

        form.querySelector('h3').textContent = 'Edit FORM'
        form.querySelector('.title').value = title;
        form.querySelector('.author').value = author;
        form.querySelector('button').textContent = 'Save';
        form.dataset.entryId = id;
        form.dataset.isEdit = true;
    }

    function modifyFormToSubmit() {
        let form = document.querySelector('#add-book-form');

        form.querySelector('h3').textContent = 'FORM'
        form.querySelector('button').textContent = 'Submit';
        form.dataset.entryId = 'none';
        form.dataset.isEdit = false;
    }

    function deleteButtonHandler(e) {
        let currentBookTrElement = e.target.parentElement.parentElement;
        let currentBookId = currentBookTrElement.getAttribute('bookId');

        fetch(`${baseUrl}/${currentBookId}`, {
            method: 'DELETE',
        })
        .then(body => body.json())
        .then(data => {
            currentBookTrElement.remove();
        })
    }

    addBookFormElement.addEventListener('submit', submitButtonHandler)

    function submitButtonHandler(e) {
        e.preventDefault();
        let formElement = e.target;
        let formData = new FormData(formElement);
        if (formElement.dataset.isEdit == 'true') {
            let formId = formElement.dataset.entryId;
            editBook(formData, formId);
        } else {
            addBook(formData);
        }
    }

    function addBook(formData) {
        let titleValue = formData.get('title');
        let authorValue = formData.get('author');
        
        let newBook = {
            title: titleValue,
            author: authorValue,
        }

        if (titleValue == '' || authorValue == '') {
            return;
        }

        let result = fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newBook)
        })
        
        result = loadBooksButtonHandler();
    }

    function editBook(formData, id) {
        let titleValue = formData.get('title');
        let authorValue = formData.get('author');
        
        let editBook = {
            title: titleValue,
            author: authorValue,
        }

        if (titleValue == '' || authorValue == '') {
            return;
        }

        let result = fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(editBook)
        })

        result = loadBooksButtonHandler();

        modifyFormToSubmit();
        
    }

}



solve()