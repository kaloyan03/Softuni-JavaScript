import { html } from '../../node_modules/lit-html/lit-html.js';


import helper from '../helper.js';
import { getMeme, updateMeme } from '../services/memesService.js';

const editMemePageTemplate = (model) => html`
<!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
<section id="edit-meme">
    <form id="edit-form" @submit='${model['submitFormHandler']}'>
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" value='${model['meme']['title']}'>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description">
                            ${model['meme']['description']} 
                        </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value='${model['meme']['imageUrl']}'>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>
`

let router = undefined;
let renderHandler = undefined;
let memeId = undefined;

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

    let editedMeme = {
        title,
        description,
        imageUrl,
    }

    if (!helper.checkIfFieldsAreFilled(title, description, imageUrl)) {
        alert('All fields must be filled!');
        return;
    }

    updateMeme(memeId, editedMeme)
    .then(() => {
        router.redirect(`/details/${memeId}`)
    })

}

function editMemeView(context) {
    memeId = context.params['id'];
    getMeme(memeId)
    .then(result => {
        let viewModel = {
            submitFormHandler: submitHandler,
            meme: result,
        }
        let templateResult = editMemePageTemplate(viewModel);
        renderHandler(templateResult);  
    })
}

export default {
    initialize,
    editMemeView,
}


