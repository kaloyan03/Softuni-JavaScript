import { html } from '../lib.js';


import { login } from '../services/authService.js';
import { setUserData } from '../util.js';

const loginViewTemplate = (model) => html`
<!--Login-->
<section id="loginPage">
            <form @submit=${model['submitHandler']}>
                <fieldset>
                    <legend>Login</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <button type="submit" class="login">Login</button>

                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
`

let cntxt = undefined;

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let email = formData.get('email');
    let password = formData.get('password');

    if (email == '' || password == '') {
        alert('All fields are required!');
        return;
    }

    let user = {
        email,
        password,
    }

    login(user)
    .then(result => {
        setUserData(result['email'], result['_id'], result['accessToken']);
        cntxt.page.redirect('/home');
    })

}

function viewPage(context) {
    cntxt = context;

    let viewModel = {
        submitHandler,
    }

    let templateResult = loginViewTemplate(viewModel);
    cntxt.renderView(templateResult);
}

export default {
    viewPage
}