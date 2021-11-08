let registerFormElement = document.querySelector('#register-form');
let baseUrl = 'http://localhost:3030';

registerFormElement.addEventListener('submit', registerFormHandler)

function registerFormHandler(e) {
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

    fetch(`${baseUrl}/users/register`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser),

    })
    .then(body => body.json())
    .then(data => {
        console.log(data);

    })


    // let registerResponse = await fetch(`http:localhost:3030/users/register`, {
    //     headers: {'Content-Type': 'application/json'},
    //     method: 'post',
    //     body: JSON.stringify(newUser)
    // })

}