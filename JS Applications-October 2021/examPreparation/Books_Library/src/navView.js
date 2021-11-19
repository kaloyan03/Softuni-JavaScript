import { html } from '../../node_modules/lit-html/lit-html.js';


import { getUserEmail, isAuthenticated } from './services/authService.js';
const navPageTemplate = (model) => html`
<nav class="navbar" id="nav-container">
    <section class="navbar-dashboard">
        <a href="/dashboards">Dashboard</a>

        ${!model.isLoggedIn 
        ? html`
        <!-- Guest users -->
        <div id="guest">
            <a class="button" href="/login">Login</a>
            <a class="button" href="/register">Register</a>
        </div>
        `
        : html`
        <!-- Logged-in users -->
        <div id="user">
            <span>Welcome, ${model['email']}</span>
            <a class="button" href="/my-books">My Books</a>
            <a class="button" href="/add-book">Add Book</a>
            <a class="button" href="/logout">Logout</a>
        </div>
        `}
    </section>
</nav>
`

let _router = undefined;
let _renderHandler


function initialize(givenRouter, givenRenderer) {
    _router = givenRouter;
    _renderHandler = givenRenderer;
}

function viewNav(context, next) {
    let viewModel = {
        isLoggedIn: isAuthenticated(),
        email: getUserEmail(),
    }

    let templateResult = navPageTemplate(viewModel);
    _renderHandler(templateResult);
    next();
}

export default {
    initialize,
    viewNav,
}