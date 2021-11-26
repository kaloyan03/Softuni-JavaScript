import { html } from '../lib.js';


import { login, setUserData } from '../services/authService.js';

const loginTemplate = (model) => html`
<!-- Login Page -->
<section id="login">
    <div class="container">
        <form id="login-form" action="#" method="post" @submit='${model['submitHandler']}'>
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
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
    let password = formData.get('password');    

    let user = {
        username,
        password,
    }

    login(user)
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

    let templateResult = loginTemplate(viewModel);
    context.renderView(templateResult);
}


export default {
    viewPage
}
// login(user)
// .then(data => {
//     setUserData(data['username'],data['_id'], data['accessToken'])
//     console.log('Logged!');
// })