import { html } from '../../node_modules/lit-html/lit-html.js';


import helper from '../helper.js'
import { getBook, updateBook } from '../services/booksService.js';

const editPageTemplate = (model) => html`
<!-- Edit Page ( Only for the creator )-->
<section id="edit-page" class="edit">
    <form id="edit-form" action="#" method="" @submit=${model['submitHandler']}>
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value="${model['bookToEdit']['title']}">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description"
                        id="description">${model['bookToEdit']['description']}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value="${model['bookToEdit']['imageUrl']}">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value="${model['bookToEdit']['type']}">
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`

let _router = undefined;
let _renderHandler = undefined;
let bookId = undefined;

function initialize(givenRouter, givenRenderer) {
    _router = givenRouter;
    _renderHandler = givenRenderer;
}

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);
    
    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');
    let type = formData.get('type');

    let book = {
        title,
        description,
        imageUrl,
        type,
    }

    if (!helper.checkIfInputFieldsAreFilled(title, description, image, type)) {
        alert('All fields must be filled!');
        return;
    }

    updateBook(bookId, book)
    .then(() => {
        _router.redirect(`/details/${bookId}`);
    })

}

function viewPage(context) {
    bookId = context.params['id'];
    getBook(bookId)
    .then(book => {
        let viewModel = {
            submitHandler,
            bookToEdit: book, 
        }
        let templateResult = editPageTemplate(viewModel);
        _renderHandler(templateResult);
    })
}

export default {
    initialize,
    viewPage,
}