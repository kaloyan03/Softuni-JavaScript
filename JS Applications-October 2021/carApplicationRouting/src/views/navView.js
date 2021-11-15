import { html } from '../../node_modules/lit-html/lit-html.js';
import { isAuthenticated } from '../services/authService.js';

const navTemplate = (model) => html`
    <div class="container-fluid">
        <a class="navbar-brand" href="/home">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                    <a class="nav-link ${model['currentPage'] == '/cars' ? 'active': ''}" href="/cars">Cars</a>
                </li>
                ${model.isLoggedIn
        ?
        html`
                <li class="nav-item">
                    <a class="nav-link ${model['currentPage'] == '/add-car' ? 'active': ''}" href="/add-car">Add Car</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logout">Logout</a>
                </li>`
        :
        html`
                <li class="nav-item">
                    <a class="nav-link ${model['currentPage'] == '/login' ? 'active': ''}" href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${model['currentPage'] == '/register' ? 'active': ''}" href="/register">Register</a>
                </li>
                `}
            </ul>
        </div>
    </div>
`

let route = undefined;
let renderHandler = undefined;

function initialize(givenRoute, givenRenderHandler) {
    route = givenRoute;
    renderHandler = givenRenderHandler;
}

function navView(context, next) {
    let viewModel = {
        isLoggedIn: isAuthenticated(),
        currentPage: context.pathname,
    }
    let templateResult = navTemplate(viewModel);
    renderHandler(templateResult);
    next();
}

export default {
    navView,
    initialize,
}