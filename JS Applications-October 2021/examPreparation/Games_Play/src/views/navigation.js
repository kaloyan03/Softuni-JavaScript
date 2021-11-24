import { html } from '../../lib.js';


import { isAuthenticated, logout, clearStorage} from '../services/authService.js';

const navigationViewTemplate = (model) => html`
<!-- Navigation -->
<h1><a class="home" href="/home">GamesPlay</a></h1>
<nav>
    <a href="/catalogue">All games</a>
    ${model['isAuthenticated']
    ? html`
    <!-- Logged-in users -->
    <div id="user">
        <a href="/create">Create Game</a>
        <a href="javascript:void(0)" @click='${model['logoutHandler']}'>Logout</a>
    </div>
    `
    : html`
    <!-- Guest users -->
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    `}
</nav>
`


function navigationView(context, next) {
    let viewModel = {
        isAuthenticated: isAuthenticated(),
        logoutHandler: async function () {await logout(); clearStorage(); context.page.redirect('/home')},
    }

    let templateResult = navigationViewTemplate(viewModel);
    context.renderNav(templateResult);
    next();
}

export { navigationView }