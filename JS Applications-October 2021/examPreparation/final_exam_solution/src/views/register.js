import { html } from '../lib.js';


import { register } from '../services/authService.js';
import { setUserData } from '../util.js';

const registerViewTemplate = (model) => html`
<!--Registration-->
<section id="registerPage">
            <form @submit=${model['submitHandler']}>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
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
    let rePassword = formData.get('conf-pass');

    if (email == '' || password == '') {
        alert('All fields are required!');
        return;
    }

    if (password !== rePassword) {
        alert('Passwords must match!');
        return;
    }

    let user = {
        email,
        password,
    }

    register(user)
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

    let templateResult = registerViewTemplate(viewModel);
    cntxt.renderView(templateResult);
}

export default {
    viewPage
}