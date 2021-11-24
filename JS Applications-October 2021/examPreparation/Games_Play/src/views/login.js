import { html } from '../../lib.js';


import { login, setStorageData } from '../services/authService.js';

const loginPageTemplate = (model) => html`
<!-- Login Page ( Only for Guest users ) -->
<section id="login-page" class="auth">
    <form id="login" @submit='${model['submitHandler']}'>

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>
` 

function loginView(context) {
    async function submitHandler(e) {
        e.preventDefault();
        let formElement = e.target;
        let formData = new FormData(formElement);

        let userEmail = formData.get('email');
        let userPassword = formData.get('password');

        let user = {
            email: userEmail,
            password: userPassword,
        }

        let result = await login(user);
    
        setStorageData(result['accessToken'], result['_id'], result['email'])
        
        context.page.redirect('/home');
        
    }

    let viewModel = {
        submitHandler: submitHandler,
    }

    let templateResult = loginPageTemplate(viewModel);
    context.renderView(templateResult);
}

export { loginView }