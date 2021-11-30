import { html } from '../lib.js';

import { setUserData } from '../util.js';
import { login } from '../services/authService.js';
import { notify } from './notifications.js';

const loginTemplate = (model) => html`
<!-- Login Page ( Only for guest users ) -->
<section id="login">
    <form id="login-form" @submit='${model['submitHandler']}'>
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

let cntxt = undefined;

function submitHandler(e) {
    // e.preventDefault();
    // let formElement = e.target;
    // let formData = new FormData(formElement);

    // let user = {
    //     email: formData.get('email'),
    //     password: formData.get('password'),
    // }

    // login(user)
    // .then(result => {
    //     formElement.reset();
    //     setUserData(result['email'], result['username'], result['gender'], result['_id'], result['accessToken']);
    //     cntxt.page.redirect('/all-memes');
    // })
    
    
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let email = formData.get('email');
    let password = formData.get('password');


    if (email == '' || password == '') {
        notify('There must be no empty fields!');
        formElement.reset();
        return;
    }

    let user = {
        email,
        password,
    }

    login(user)
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

    let templateResult = loginTemplate(viewModel);
    context.renderView(templateResult);
}

export default {
    viewPage
}