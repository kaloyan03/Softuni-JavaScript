import { html } from '../../node_modules/lit-html/lit-html.js';


import { registerUser, saveDataToStorage } from '../services/authService.js';
import helper from '../helper.js';

const registerPageTemplate = (formSubmitHandler) => html`
<!-- Register Page ( Only for guest users ) -->
<section id="register">
    <form id="register-form" @submit='${formSubmitHandler}'>
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>
`

let router = undefined;
let renderHandler = undefined;

function initialize(givenRouter, givenRenderer) {
    router = givenRouter;
    renderHandler = givenRenderer;
}

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let username = formData.get('username');
    let email = formData.get('email');
    let password = formData.get('password');
    let repeatedPassword = formData.get('repeatPass');
    let gender = formData.get('gender');

    if (!helper.checkIfFieldsAreFilled(username, email, password, gender)) {
        alert('All fields must be filled!')
        formElement.reset();
        return;
    }

    if (!helper.checkIfPasswordsMatch(password, repeatedPassword)) {
        alert('Passwords must match')
        formElement.reset();
        return;
    }

    let user = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        gender: formData.get('gender'),
    }

    registerUser(user)
    .then(result => {
        formElement.reset();
        if (result.code >= 300) {
            alert(result['message']);
            return;
        }
        saveDataToStorage(result['accessToken'], result['email'], result['_id'], user['username']);
        router.redirect('/memes');
    })
}

function registerView() {
    let templateResult = registerPageTemplate(submitHandler);
    renderHandler(templateResult);
}

export default {
    initialize,
    registerView,
}
