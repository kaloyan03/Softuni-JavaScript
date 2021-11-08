let loginFormElement = document.querySelector('#login-view #login');
let baseUrl = 'http://localhost:3030';

loginFormElement.addEventListener('submit', loginFormHandler)

async function loginFormHandler(e) {
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);

    let emailValue = formData.get('email');
    let passwordValue = formData.get('password');

    let loginUser = {
        email: emailValue,
        password: passwordValue,
    }

    let loginResponse = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginUser)

    })

    let loginResult = await loginResponse.json();
    let token = loginResult['accessToken'];
    saveToken(token);
    location.assign('./index.html')
}


function saveToken(token) {
    localStorage.setItem('auth-token', token);
}