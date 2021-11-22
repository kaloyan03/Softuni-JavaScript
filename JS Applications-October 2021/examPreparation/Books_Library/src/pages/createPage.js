import { html } from '../../node_modules/lit-html/lit-html.js';


import helper from '../helper.js';
import { createBook } from '../services/booksService.js';

const createPageTemplate = (model) => html`
<!-- Create Page ( Only for logged-in users ) -->
<section id="create-page" class="create">
    <form id="create-form" action="" method="" @submit='${model['submitHandler']}'>
        <fieldset>
            <legend>Add new Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" placeholder="Title">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type">
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Book">
        </fieldset>
    </form>
</section>
`

let _router = undefined;
let _renderHandler = undefined;


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

    createBook(book)
    .then(() => {
        _router.redirect('/dashboards');
    })

}

function viewPage() {
    let viewModel = {
        submitHandler,

    }
    let templateResult = createPageTemplate(viewModel);
    _renderHandler(templateResult);
}

export default {
    initialize,
    viewPage,
}