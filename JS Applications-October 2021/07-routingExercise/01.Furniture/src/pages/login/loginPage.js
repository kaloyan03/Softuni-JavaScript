import { loginPageTemplate } from "./loginTemplate.js";
import authService from "../../services/authService.js";

async function submitForm(context, e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');

    let newUser = {
        email,
        password,
    }

    await authService.loginUser(newUser);
    
    context.page.redirect('/dashboard');
}


function viewPage(context) {
    let boundSubmitForm = submitForm.bind(null, context);

    let form = {
        submitHandler: boundSubmitForm,
    }

    let templateResult = loginPageTemplate(form);
    context.renderView(templateResult);
}

let loginPage = {
    viewPage,
}

export default loginPage;