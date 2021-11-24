import { html } from '../../lib.js';


import helper from '../helper.js';
import { register, setStorageData } from '../services/authService.js';
const registerPageTemplate = (model) => html`
<!-- Register Page ( Only for Guest users ) -->
<section id="register-page" class="content auth">
    <form id="register" @submit='${model['submitHandler']}'>
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </div>
    </form>
</section>
`


function registerView(context) {
    async function submitHandler(e) {
        e.preventDefault();
        let formElement = e.target;
        let formData = new FormData(formElement);

        let userEmail = formData.get('email');
        let userPassword = formData.get('password');
        let userRePassword = formData.get('confirm-password');  

        if (!helper.checkIfFieldsAreEmpty(userEmail, userPassword, userRePassword)) {
            alert('Fields must be filled!');
            return;
        }

        if (!helper.checkIfPasswordsMatch(userPassword, userRePassword)) {
            alert('Passwords must match!');
            return;
        }

        let user = {
            email: userEmail,
            password: userPassword,
        }

        let result = await register(user);
        setStorageData(result['accessToken'], result['_id'], result['email'])
        
        context.page.redirect('/home');
        
    }

    let viewModel = {
        submitHandler: submitHandler,
    }

    let templateResult = registerPageTemplate(viewModel);
    context.renderView(templateResult);
}

export { registerView }