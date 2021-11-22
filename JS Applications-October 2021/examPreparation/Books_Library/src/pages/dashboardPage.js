import { html } from '../../node_modules/lit-html/lit-html.js';


import { getBooks } from '../services/booksService.js';

const bookTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book['title']}</h3>
    <p>Type: ${book['type']}</p>
    <p class="img"><img src="${book['imageUrl']}"></p>
    <a class="button" href="/details/${book['_id']}">Details</a>
</li>
`


const dashboardPageTemplate = (books) => html`
<!-- Dashboard Page ( for Guests and Users ) -->
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    ${books.length !== 0 
    ? html`
    <ul class="other-books-list">
        ${books.map(b => bookTemplate(b))}
    </ul>
    `
    : html`
    <!-- Display paragraph: If there are no books in the database -->
    <p class="no-books">No books in database!</p>
    `}
</section>
`

let _router = undefined;
let _renderHandler = undefined;


function initialize(givenRouter, givenRenderer) {
    _router = givenRouter;
    _renderHandler = givenRenderer;
}

function viewPage() {
    getBooks()
        .then(result => {
            let templateResult = dashboardPageTemplate(result);
            _renderHandler(templateResult);
        })
}

export default {
    initialize,
    viewPage,
}