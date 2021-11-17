import { html } from '../node_modules/lit-html/lit-html.js';


import { isAuthenticated, getUserEmail } from './services/authService.js';

const navTemplate = (model) => html`
<a href="/memes">All Memes</a>
${model.isAuthenticated 
? html`
<!-- Logged users -->
<div class="user">
    <a href="/create-meme">Create Meme</a>
    <div class="profile">
        <span>Welcome, ${model.userEmail}</span>
        <a href="/my-profile">My Profile</a>
        <a href="/logout">Logout</a>
    </div>
</div>
`
: html`
<!-- Guest users -->
<div class="guest">
    <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    <a class="active" href="/home">Home Page</a>
</div>`}
`

let router = undefined;
let renderHandler = undefined;

function initialize(givenRouter, givenRenderer) {
    router = givenRouter;
    renderHandler = givenRenderer;
}

function navigationView(context, next) {
    let viewModel = {
        isAuthenticated: isAuthenticated(),
        userEmail: getUserEmail(),
    }
    
    let templateResult = navTemplate(viewModel);
    renderHandler(templateResult);
    next();
}

export default {
    initialize,
    navigationView,
}
