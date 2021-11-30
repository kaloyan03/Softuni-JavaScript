import { html } from '../lib.js';

import { logout } from '../services/authService.js';
import { clearSessionStorage } from '../util.js';
import { isAuthenticated } from '../util.js';
import { getUserEmail } from '../util.js';
const navigationTemplate = (model) => html`
 <a href="/all-memes">All Memes</a>
            ${model['isAuthenticated']
            ? html`
            <!-- Logged users -->
            <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${model['email']}</span>
                    <a href="/my-profile">My Profile</a>
                    <a href="javascript:void(0)" @click='${model['logoutHandler']}'>Logout</a>
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
            </div>
            `}
`

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
        logoutHandler,
        isAuthenticated: isAuthenticated(),
        email: getUserEmail(),
    }

    let templateResult = navigationTemplate(viewModel);
    context.renderNav(templateResult);
    next();
}

export default {
    viewNav
}