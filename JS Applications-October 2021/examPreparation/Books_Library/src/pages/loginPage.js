import { html } from '../../node_modules/lit-html/lit-html.js';

const loginPageTemplate = () => html`
<!-- Login Page ( Only for Guest users ) -->
<section id="login-page" class="login">
    <form id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>
`

let _router = undefined;
let _renderHandler


function initialize(givenRouter, givenRenderer) {
    _router = givenRouter;
    _renderHandler = givenRenderer;
}

function viewPage() {
    let templateResult = loginPageTemplate();
    _renderHandler(templateResult);
}

export default {
    initialize,
    viewPage,
}