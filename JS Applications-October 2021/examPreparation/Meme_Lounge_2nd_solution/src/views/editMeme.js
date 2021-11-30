import { html } from '../lib.js';

import { getMeme, updateMeme, createMeme } from '../services/memeService.js';
import { memeFormTemplate } from './common/createEditMemeTemplate.js';
import { notify } from './notifications.js';
const editMemeTemplate = (model) => html`
<!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
<section id="edit-meme">
            <form id="edit-form" @submit='${model['submitHandler']}'>
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" value='${model['meme']['title']}'>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" value='${model['meme']['description']}'>
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value='${model['meme']['imageUrl']}'>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`

let cntxt = undefined;
let memeId = undefined;

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');

    if (title == '' || description == '' || imageUrl == '') {
        notify('There is empty fields');
        return;
    }

    let meme = {
        title,
        description,
        imageUrl,
    }
    
    updateMeme(meme, memeId)
    .then(() => {
        cntxt.page.redirect(`/details/${memeId}`);
    })
}




function viewPage(context) {
    cntxt = context;
    memeId = context.params['id'];

    
    getMeme(memeId)
    .then(memeInfo => {
        let data = {
            type: 'edit',
            meme: memeInfo,
            submitHandler,
        }

        let templateResult1 = memeFormTemplate(data);
        // let templateResult2 = editMemeTemplate(data);
        
        context.renderView(templateResult1);
    })
}

export default {
    viewPage
}