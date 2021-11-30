import { memeFormTemplate } from './common/createEditMemeTemplate.js';
import { createMeme } from '../services/memeService.js';
import { notify } from './notifications.js';


let cntxt = undefined;

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

    createMeme(meme)
    .then(() => {
        cntxt.page.redirect('/all-memes');
    })
}

function viewPage(context) {
    cntxt = context;
    let data = {
        type: 'create',
        submitHandler,
    }
    let templateResult = memeFormTemplate(data)
    context.renderView(templateResult);
}

export default {
    viewPage
}