import { html } from '../../node_modules/lit-html/lit-html.js';


import { loginUser, saveDataToStorage } from '../services/authService.js';

const loginPageTemplate = (formSubmitHandler) => html`
<section id="login">
    <form @submit=${formSubmitHandler} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
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

    let user = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    loginUser(user)
    .then(result => {
        formElement.reset();
        if (result.code >= 300) {
            alert(result['message']);
            // let templateResult = loginPageTemplate(submitHandler);
            // renderHandler(templateResult);
            return;
        }
        saveDataToStorage(result['accessToken'], result['email'], result['_id'], result['username'], result['gender']);
        router.redirect('/memes');
    })
}

function loginView() {
    let templateResult = loginPageTemplate(submitHandler);
    renderHandler(templateResult);
}

export default {
    initialize,
    loginView,
}


