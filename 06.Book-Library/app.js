import { tableTemplate } from "./createHtmlElements/booksTableTemplate.js";
import { render } from '.././node_modules/lit-html/lit-html.js';

function solve() {
    let bodyElement = document.querySelector('body');
    let tableElement = tableTemplate()
    render(tableElement, bodyElement);
    // let loadBooksButtonElement = document.querySelector('button#loadBooks');
    // loadBooksButtonElement.addEventListener('click', loadBooksButtonHandler);
    // function loadBooksButtonHandler() {
    //     bookService.getBooksData().then(books => {
    //         let tbodyElement = document.querySelector('tbody');
    //         let booksTrElements = booksTemplate(Object.values(books));
    //         render(booksTrElements, tbodyElement);
    //     })
    // }

}

solve();