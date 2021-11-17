import { html } from '../../node_modules/lit-html/lit-html.js';


import helper from '../helper.js';
import { createMeme } from '../services/memesService.js';

const createMemePageTemplate = (submitFormHandler) => html`
<!-- Create Meme Page ( Only for logged users ) -->
<section id="create-meme">
    <form id="create-form" @submit=${submitFormHandler}>
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`

let router = undefined;
let renderHandler = undefined;

function initialize(givenRouter, givenRenderer) {
    router = givenRouter;
    renderHandler = givenRenderer;
}

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');

    let newMeme = {
        title,
        description,
        imageUrl,
    }

    if (!helper.checkIfFieldsAreFilled(title, description, imageUrl)) {
        alert('All fields must be filled!');
        return;
    }

    createMeme(newMeme)
    .then(() => {
        router.redirect(`/memes`)
    })

}

function createMemeView() {
    let templateResult = createMemePageTemplate(submitHandler);
    renderHandler(templateResult);  
}

export default {
    initialize,
    createMemeView,
}