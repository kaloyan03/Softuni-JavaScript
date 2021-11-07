function validate() {
    let emailInputElement = document.getElementById('email');
    emailInputElement.addEventListener('change', () => {
        const emailRegex = /^[a-z]+\@[a-z]+\.[a-z]+$/;
        const isValid = emailRegex.test(emailInputElement.value);
        if (!(isValid)) {
            emailInputElement.classList.add('error');
        } else {
            emailInputElement.classList.remove('error');
        };
    });
}