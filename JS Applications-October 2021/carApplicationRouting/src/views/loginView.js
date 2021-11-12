import { html } from '../../node_modules/lit-html/lit-html.js';


import { loginUser } from '../services/authService.js';
import { renderView } from '../renderingMiddleware.js';

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

export function loginPage(context) {
    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let user = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        loginUser(user)

        context.page.redirect('/home');
    }

    let templateResult = loginPageTemplate(submitHandler);
    renderView(templateResult);
}