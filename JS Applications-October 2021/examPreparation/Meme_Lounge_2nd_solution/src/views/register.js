import { html } from '../lib.js';

import { setUserData } from '../util.js';
import { register } from '../services/authService.js';
import { notify } from './notifications.js';

const registerTemplate = (model) => html`
 <!-- Register Page ( Only for guest users ) -->
 <section id="register">
            <form id="register-form" @submit='${model['submitHandler']}'>
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

let cntxt = undefined;

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let username = formData.get('username');
    let email = formData.get('email');
    let password = formData.get('password');
    let repeatedPassword = formData.get('repeatPass');
    let gender = formData.get('gender');    

    formElement.reset();

    if (username.trim() == '' || email.trim() == '' || password.trim() == '' || repeatedPassword.trim() == '' || gender.trim() == '') {
        notify('There must be no empty fields!');
        return;
    } 

    if (repeatedPassword !== password) {
        notify('Passwords must match!');
        return;
    } 

    let user = {
        username,
        email,
        password,
        gender,
    }

    register(user)
    .then(data => {
        setUserData(data['email'], data['username'], data['gender'], data['_id'], data['accessToken']);
        cntxt.page.redirect('/all-memes');
    })
}


function viewPage(context) {
    cntxt = context;

    let viewModel = {
        submitHandler,
    }

    let templateResult = registerTemplate(viewModel);
    context.renderView(templateResult);
}

export default {
    viewPage
}