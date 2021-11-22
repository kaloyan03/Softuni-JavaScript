import { html } from '../../node_modules/lit-html/lit-html.js';


import helper from '../helper.js';
import { loginUser, saveDataToStorage } from '../services/authService.js';

const loginPageTemplate = (model) => html`
<!-- Login Page ( Only for Guest users ) -->
<section id="login-page" class="login">
    <form id="login-form" action="" method="" @submit=${model.submitHandler}>
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
let _renderHandler = undefined;


function initialize(givenRouter, givenRenderer) {
    _router = givenRouter;
    _renderHandler = givenRenderer;
}

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let email = formData.get('email');
    let password = formData.get('password');

    if (!helper.checkIfInputFieldsAreFilled(email, password)) {
        alert('All fields must be filled!');
        return;
    }

    let user = {
        email,
        password,
    }

    loginUser(user)
        .then(result => {
            if (result.code >= 300) {
                throw new Error(result['message']);
            }
            saveDataToStorage(result['accessToken'], result['email'], result['_id']);
            _router.redirect('/dashboards');
        })
        .catch(error => {
            alert(error);
            formElement.reset();
            return;
        })

}

function viewPage() {
    let viewModel = {
        submitHandler,
    }
    let templateResult = loginPageTemplate(viewModel);
    _renderHandler(templateResult);
}

export default {
    initialize,
    viewPage,
}