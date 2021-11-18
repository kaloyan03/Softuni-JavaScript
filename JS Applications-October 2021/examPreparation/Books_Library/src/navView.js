import { html } from '../../node_modules/lit-html/lit-html.js';

const navPageTemplate = () => html`
<nav class="navbar" id="nav-container">
    <section class="navbar-dashboard">
        <a href="#">Dashboard</a>
        <!-- Guest users -->
        <div id="guest">
            <a class="button" href="#">Login</a>
            <a class="button" href="#">Register</a>
        </div>
        <!-- Logged-in users -->
        <div id="user">
            <span>Welcome, {email}</span>
            <a class="button" href="#">My Books</a>
            <a class="button" href="#">Add Book</a>
            <a class="button" href="#">Logout</a>
        </div>
    </section>
</nav>
`

function initialize() {

}

function viewPage() {

}

export default {
    initialize,
    viewPage,
}