import { html } from '../lib.js';


import { getUserMemes } from '../services/memeService.js';
import { getUserEmail, getUserId, getUsername } from '../util.js';

const memeTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme['title']}</p>
    <img class="userProfileImage" alt="meme-img" src="${meme['imageUrl']}">
    <a class="button" href="/details/${meme['_id']}">Details</a>
</div>
`


const profileTemplate = (model) => html`
 <!-- Profile Page ( Only for logged users ) -->
 <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: ${model['username']}</p>
                    <p>Email: ${model['email']}</p>
                    <p>My memes count: ${model['memes'].length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                <!-- Display : All created memes by this user (If any) --> 
                ${model['memes'].length !== 0
                ? html`
                ${model['memes'].map(m => memeTemplate(m))}}
                `
                : html`
                <!-- Display : If user doesn't have own memes  --> 
                <p class="no-memes">No memes in database.</p>
                `}
            </div>
        </section>
`

function viewPage(context) {
    let userId = getUserId();
    
    getUserMemes(userId)
    .then(memes => {
        let viewModel = {
            memes,
            username: getUsername(),
            email: getUserEmail(),
        }
    
        let templateResult = profileTemplate(viewModel);
        context.renderView(templateResult);
    })
}

export default {
    viewPage
}