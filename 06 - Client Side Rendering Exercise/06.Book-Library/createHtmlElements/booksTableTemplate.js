import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { formTemplate } from './formsTemplate.js';
import bookService from '../services/bookService.js';

let bookTemplate = (book) => html`
<tr data-id=${book['id']}>
    <td>${book['title']}</td>
    <td>${book['author']}</td>
    <td>
        <button @click=${editButtonHandler}>Edit</button>
        <button @click=${deleteButtonHandler}>Delete</button>
    </td>
</tr>
`

let booksTemplate = (books) => html`
${books.map(b => bookTemplate(b))}
`

const addBookFormHandler = {
    handleEvent(e) {
        e.preventDefault();
        let formElement = e.target;
        let formData = new FormData(formElement);
        let newBook = {
            author: formData.get('author'),
            title: formData.get('title'),
        }
        formElement.reset();
        loadBooks();
        bookService.createBook(newBook)
    }
}

let addForm = {
    handler : addBookFormHandler,
    id: 'add-form',
    isEdit: false,
    message: 'Add book',
    submitMessage: 'Submit',
}

let editForm = {
    handler : editFormHandler,
    id: 'edit-form',
    isEdit: true,
    message: 'Edit book',
    submitMessage: 'Save',
}

let tableTemplate = () => html`
<button @click=${loadBooksHandler} id='loadBooks'>LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    
    </tbody>
</table>

${formTemplate(addForm)}
${formTemplate(editForm)}
`

const loadBooksHandler = {
    handleEvent() {
        loadBooks();
    }
}

function loadBooks() {
    bookService.getBooksData().then(books => {
        let tbodyElement = document.querySelector('tbody');
        let booksArray = [];
        for (const [key, value] of Object.entries(books)) {
            booksArray.push({
                author: value['author'],
                title: value['title'],
                id: key,
            })
        }
        let bookElements = booksTemplate(booksArray);
        render(bookElements, tbodyElement);
    })
}

const editButtonHandler = {
    handleEvent(e) {
        let currentBookTr = e.target.parentElement.parentElement;
        let currentBookId = currentBookTr.dataset.id;
        let formElement = document.querySelector('form#edit-form');
        let titleToEdit = currentBookTr.children[0].textContent;
        let authorToEdit = currentBookTr.children[1].textContent;
        formElement.querySelector('input[name="title"]').value = titleToEdit;
        formElement.querySelector('input[name="author"]').value = authorToEdit;
        formElement.querySelectorAll('input')[0].setAttribute('name', currentBookId);
        formElement.addEventListener('submit', editFormHandler);
        // bookService.editBook(currentBookId).then(books => {
        //     let tbodyElement = document.querySelector('tbody');
        //     let bookElements = booksTemplate(Object.values(books));
        //     render(bookElements, tbodyElement);
        // })
    }
}

function editFormHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let bookId = formElement.querySelectorAll('input')[0].getAttribute('name');
    let formData = new FormData(formElement);
    
    let editedBook = {
        author: formData.get('author'),
        title: formData.get('title'),
    }

    bookService.editBook(editedBook, bookId).then(() => {
        formElement.reset();
    })

}

const deleteButtonHandler = {
    handleEvent(e) {
        let currentBookTr = e.target.parentElement.parentElement;
        let currentBookId = currentBookTr.dataset.id;
        bookService.deleteBook(currentBookId).then(() => {
            currentBookTr.remove();
        })
    }
}


export { tableTemplate, booksTemplate }