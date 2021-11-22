import { html } from "../../node_modules/lit-html/lit-html.js";

import { getUserId } from "../services/authService.js";
import { getUserBooks } from "../services/booksService.js";

const bookTemplate = (book) => html`
  <li class="otherBooks">
    <h3>${book['title']}</h3>
    <p>Type: ${book['type']}</p>
    <p class="img"><img src="${book['imageUrl']}" /></p>
    <a class="button" href="/details/${book['_id']}">Details</a>
  </li>
`;

const myBooksPageTemplate = (books) => html`
  <!-- My Books Page ( Only for logged-in users ) -->
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    ${books.length !== 0
      ? html`<ul class="my-books-list">
            ${books.map(b => bookTemplate(b))}
        </ul>`
      : html`<!-- Display paragraph: If the user doesn't have his own books  -->
          <p class="no-books">No books in database!</p>`}
  </section>
`;

let _router = undefined;
let _renderHandler = undefined;

function initialize(givenRouter, givenRenderer) {
  _router = givenRouter;
  _renderHandler = givenRenderer;
}

function viewPage(context) {
  getUserBooks(getUserId()).then((books) => {
    console.log(books);
    let templateResult = myBooksPageTemplate(books);
    _renderHandler(templateResult);
  });
}

export default {
  initialize,
  viewPage,
};
