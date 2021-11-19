import { html } from '../../node_modules/lit-html/lit-html.js';


import helper from '../helper.js';
import { registerUser, saveDataToStorage } from '../services/authService.js';

const registerPageTemplate = (model) => html`
<!-- Register Page ( Only for Guest users ) -->
<section id="register-page" class="register" @submit=${model['submitHandler']}>
    <form id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
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

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let email = formData.get('email');
    let password = formData.get('password');
    let repeatedPassword = formData.get('confirm-pass');

    if (!helper.checkIfInputFieldsAreFilled(email, password, repeatedPassword)) {
        alert('All fields must be filled!');
        return;
    }

    if(!helper.checkIfPasswordsMatch(password, repeatedPassword)) {
        alert('Passwords must match!');
        return;
    }

    let user = {
        email,
        password,
    }

    registerUser(user)
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
    let templateResult = registerPageTemplate(viewModel);
    _renderHandler(templateResult);
}

export default {
    initialize,
    viewPage,
}