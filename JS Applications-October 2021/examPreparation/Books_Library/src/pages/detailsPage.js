import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../services/authService.js';


import { getBook, deleteBook } from '../services/booksService.js';
const detailsPageTemplate = (model) => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${model['book']['title']}</h3>
        <p class="type">Type: ${model['book']['type']}</p>
        <p class="img"><img src="${model['book']['imageUrl']}"></p>
        <div class="actions">
            ${model['bookCreator']
            ? html`
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            <a class="button" href="/edit/${model['book']['_id']}">Edit</a>
            <a class="button" @click='${model['deleteHandler']}' href="#">Delete</a>
            `
            : ''}

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            <a class="button" href="#">Like</a>

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${model['book']['description']}</p>
    </div>
</section>
`

let _router = undefined;
let _renderHandler


function initialize(givenRouter, givenRenderer) {
    _router = givenRouter;
    _renderHandler = givenRenderer;
}

let bookId = undefined;

function deleteHandler(e) {
    e.preventDefault();
    deleteBook(bookId)
    .then(() => {
        _router.redirect('/dashboards')
    })
}

function viewPage(context) {
    bookId = context.params['id'];
    getBook(bookId)
    .then(result => {
        let viewModel = {
            book: result,
            bookCreator: getUserId() == result['_ownerId'],
            deleteHandler,
        }
        let templateResult = detailsPageTemplate(viewModel);
        _renderHandler(templateResult);
    })
}

export default {
    initialize,
    viewPage,
}