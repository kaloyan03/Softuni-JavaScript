import { html } from '../lib.js';


import { isAuthenticated, logout, clearSessionStorage, getUsername } from '../services/authService.js';

const navigationTemplate = (model) => html`
<nav>
    <a class="active" href="/home">Home</a>
    <a href="/all-listings">All Listings</a>
    <a href="/all-listing">By Year</a>
    ${model['isAuthenticated']
    ? html`
     <!-- Logged users -->
     <div id="profile">
        <a>Welcome ${model['username']}</a>
        <a href="/my-listings">My Listings</a>
        <a href="/create">Create Listing</a>
        <a href="javascript:void(0)" @click='${model['logoutHandler']}'>Logout</a>
    </div>`
    : html`
<!-- Guest users -->
<div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`}
</nav>`

let cntxt = undefined;

function logoutHandler() {
    logout()
    .then(() => {
        clearSessionStorage();
        cntxt.page.redirect('/home');
    })
}

function viewNav(context, next) {
    cntxt = context;
    let viewModel = {
        isAuthenticated: isAuthenticated(),
        logoutHandler,
        username: getUsername(),
    }

    let templateResult = navigationTemplate(viewModel);
    context.renderNav(templateResult);
    next();
}


export default {
    viewNav,
}