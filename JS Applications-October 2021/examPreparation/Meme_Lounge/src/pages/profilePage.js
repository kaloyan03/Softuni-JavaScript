import { html } from '../../node_modules/lit-html/lit-html.js';


import { getUserEmail, getUsername, getUserId, getUserGender } from '../services/authService.js';
import { getUserMemes } from '../services/memesService.js';

const memeTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme['title']}</p>
    <img class="userProfileImage" alt="meme-img" src="${meme['imageUrl']}">
    <a class="button" href="/details/${meme['_id']}">Details</a>
</div>
`


const profilePageTemplate = (model) => html`
<!-- Profile Page ( Only for logged users ) -->
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="${model['userInfo']['gender'] === 'female' ? '/images/female.png' : '/images/male.png'}">
        <div class="user-content">
            <p>Username: ${model['userInfo']['username']}</p>
            <p>Email: ${model['userInfo']['email']}</p>
            <p>My memes count: ${model['userInfo']['memesCount']}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${model['userInfo']['memesCount'] !== 0 
    ? html`
    ${model['memes'].map(m => memeTemplate(m))}
    `
    : html`
    <p class="no-memes">No memes in database.</p>
    `}
        
    </div>
</section>
`

let router = undefined;
let renderHandler = undefined;

function initialize(givenRouter, givenRenderer) {
    router = givenRouter;
    renderHandler = givenRenderer;
}

function profilePageView() {
    let userId = getUserId();
    getUserMemes(userId)
    .then(result => {
        let viewModel = {
            userInfo: {
                username: getUsername(),
                email: getUserEmail(),
                gender: getUserGender(),
                memesCount: result.length,
            },
            memes: result
        }
    
        let templateResult = profilePageTemplate(viewModel);
        renderHandler(templateResult);
    })
}

export default {
    initialize,
    profilePageView,
}

