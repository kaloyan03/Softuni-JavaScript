import { html } from '../../node_modules/lit-html/lit-html.js';


import { loginUser, saveDataToStorage } from '../services/authService.js';

const loginPageTemplate = (submitHandler) => html`
    <section id='login-page'>
        <h2>Login Page</h2>
        <form id='login-form' @submit=${submitHandler}>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="email" id="staticEmail">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" name="password" class="form-control" id="inputPassword">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
    </section>
`

let route = undefined;
let renderHandler = undefined;

function initialize(givenRoute, givenRenderHandler) {
    route = givenRoute;
    renderHandler = givenRenderHandler;
}

const submitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    loginUser(user)
    .then(result => {
        saveDataToStorage(result['accessToken'], result['email'], result['_id'])
        route.redirect('/home');
    })
}

export function loginView() {
    let templateResult = loginPageTemplate(submitHandler);
    renderHandler(templateResult);
}

export default {
    initialize,
    loginView,
}