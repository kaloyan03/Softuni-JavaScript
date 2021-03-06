import { registerPageTemplate } from "./registerTemplate.js";
import authService from "../../services/authService.js";
import helper from "../../helper.js";


async function submitForm(context, e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let repeatedPassword = formData.get('rePass');

    if (!helper.checkIfPasswordsMatch(password, repeatedPassword)) {
        alert('Passwords are not matching!');
        return;
    }

    let newUser = {
        email,
        password,
    }

    await authService.registerUser(newUser);
    
    context.page.redirect('/dashboard');
}


function viewPage(context) {
    let boundSubmitForm = submitForm.bind(null, context);

    let form = {
        submitHandler: boundSubmitForm,
    }
    let templateResult = registerPageTemplate(form);
    context.renderView(templateResult)
}

let registerPage = {
    viewPage,
}

export default registerPage;