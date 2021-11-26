import { html } from '../lib.js';


import { register, setUserData } from '../services/authService.js';
const registerTemplate = (model) => html`
<!-- Register Page -->
<section id="register">
    <div class="container">
        <form id="register-form" @submit='${model['submitHandler']}'>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>
`


let cntxt = undefined;

function submitHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let username = formData.get('username');
    let repeatedPassword = formData.get('repeatPass');    
    let password = formData.get('password');    

    if (username.trim() == '' || repeatedPassword.trim() == '' || password.trim() == '') {
        alert('There must be no empty fields!');
        return;
    }

    if (repeatedPassword != password) {
        alert('The passwords aren\'t matching');
        return;
    }

    let user = {
        username,
        password,
    }

    register(user)
    .then(data => {
        setUserData(data['username'], data['_id'],data['accessToken'])
        cntxt.page.redirect('/all-listings');
    })
}

function viewPage(context) {
    cntxt = context;
    let viewModel = {
        submitHandler: submitHandler,
    }

    let templateResult = registerTemplate(viewModel);
    context.renderView(templateResult);
}


export default {
    viewPage,
}