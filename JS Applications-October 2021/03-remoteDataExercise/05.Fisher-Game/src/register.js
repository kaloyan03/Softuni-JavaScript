let registerFormElement = document.querySelector('#register-view #register');
let baseUrl = 'http://localhost:3030';

registerFormElement.addEventListener('submit', registerFormHandler)

async function registerFormHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let emailValue = formData.get('email');
    let passwordValue = formData.get('password');
    let repeatPasswordValue = formData.get('rePass');

    // validate if the passwords match
    if (passwordValue !== repeatPasswordValue) {
        console.error('Passwords don\'t match');
        return;
    }

    let newUser = {
        email: emailValue,
        password: passwordValue,
    }

    let registerResponse = await fetch(`${baseUrl}/users/register`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)

    })

    let registerResult = await registerResponse.json();
    let token = registerResult['accessToken'];
    saveToken(token);
    location.assign('./index.html')
}


function saveToken(token) {
    localStorage.setItem('auth-token', token);
}