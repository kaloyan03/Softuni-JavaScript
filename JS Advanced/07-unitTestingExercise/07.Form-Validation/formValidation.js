function validate() {
    let submitButtonElement = document.getElementById('submit');
    let companyCheckboxElement = document.getElementById('company')
    
    companyCheckboxElement.addEventListener('change', (e) => {
        let companyInfoFieldElement = document.getElementById('companyInfo');
        if (e.target.checked == true) {
            companyInfoFieldElement.style.display = 'block';
        } else {
            companyInfoFieldElement.style.display = 'none';
        }
    });

    submitButtonElement.addEventListener('click', validateFormHandler);

    function validateFormHandler(e) {
        e.preventDefault();
        let everythingIsValid = true;
        validateUsername();
        validateEmail();
        validatePassword();
        if (companyCheckboxElement.checked == true) {
            validCompanyCheckbox();
        };

        if (everythingIsValid) {
            contentToShow = document.getElementById('valid');
            contentToShow.style.display = 'block';
        };

        
        function validateUsername() {
            let usernameElement = document.getElementById('username');
            const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
            isValid = usernameRegex.test(usernameElement.value);
            if (isValid === false) {
                everythingIsValid = false;
            };
            setBorder(usernameElement, isValid);
        };


        function validateEmail() {
            let emailElement = document.getElementById('email');
            const emailRegex = /^.*@.*\..*$/;
            isValid = emailRegex.test(emailElement.value);
            if (isValid === false) {
                everythingIsValid = false;
            };
            setBorder(emailElement, isValid);
        };

        function validatePassword() {
            let passwordElement = document.getElementById('password');
            let confirmPasswordElement = document.getElementById('confirm-password');
            const passwordRegex = /^\w{5,15}$/
            let passwordIsValid = passwordRegex.test(passwordElement.value);
            let confirmPasswordIsValid = passwordRegex.test(confirmPasswordElement.value);
            let passwordsAreValid = passwordIsValid & confirmPasswordIsValid & passwordElement.value === confirmPasswordElement.value
            if (passwordIsValid === false || confirmPasswordIsValid === false) {
                everythingIsValid = false;
            };
            setBorder(passwordElement, passwordsAreValid);
            setBorder(confirmPasswordElement, passwordsAreValid);
        };

        function validCompanyCheckbox() {
            let companyNumberElement = document.getElementById('companyNumber');
            let isValidCompany = false;
            if (companyNumberElement.value.trim() !== '' && !isNaN(Number(companyNumberElement.value)));
                if (companyNumberElement.value >= 1000 && companyNumberElement.value <= 9999) {
                    isValidCompany = true;
                }
            if (isValidCompany === false) {
                everythingIsValid = false;
            };
            setBorder(companyNumberElement, isValidCompany);
        };



        function setBorder(element, isValid) {
            if (!(isValid)) {
                element.style.setProperty('border-color', 'red');
            } else {
                element.style.setProperty('border', 'none')
            }
        };
    };
}
