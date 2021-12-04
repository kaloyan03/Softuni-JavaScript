import { html } from '../lib.js';


import { logout } from '../services/authService.js';
import { clearSessionStorage, isAuthenticated } from '../util.js';

const navigationViewTemplate = (model) => html`
<nav>
    <img src="./images/headphones.png">
    <a href="/home">Home</a>
    <ul>
        <!--All user-->
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        ${model['isAuthenticated']
        ? html`
        <!--Only user-->
        <li><a href="/create">Create Album</a></li>
        <li><a href="javascript:void(0)" @click=${model['logoutHandler']}>Logout</a></li>
        `
        : html`
        <!--Only guest-->
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        `}
    </ul>
</nav>
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
    }

    let templateResult = navigationViewTemplate(viewModel);
    cntxt.renderNav(templateResult);
    next();
}

export default {
    viewNav
}