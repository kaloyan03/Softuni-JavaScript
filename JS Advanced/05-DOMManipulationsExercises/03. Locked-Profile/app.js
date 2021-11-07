function lockedProfile() {
    //get elements  
    firstProfileElement = document.getElementsByClassName('profile')[0];
    firstProfileLockCheck = firstProfileElement.querySelectorAll('input')[0];
    firstProfileUnlockCheck = firstProfileElement.querySelectorAll('input')[1];
    buttonFirstProfile = firstProfileElement.querySelector('button');

    secondProfileElement = document.getElementsByClassName('profile')[1];
    secondProfileLockCheck = secondProfileElement.querySelectorAll('input')[0];
    secondProfileUnlockCheck = secondProfileElement.querySelectorAll('input')[1];
    buttonSecondProfile = secondProfileElement.querySelector('button');

    thirdProfileElement = document.getElementsByClassName('profile')[2];
    thirdProfileLockCheck = thirdProfileElement.querySelectorAll('input')[0];
    thirdProfileUnlockCheck = thirdProfileElement.querySelectorAll('input')[1];
    buttonThirdProfile = thirdProfileElement.querySelector('button');

    // add buttons event listeners

    //first profile event listener
    buttonFirstProfile.addEventListener('click', function(e) {
        userHiddenFieldsElement = document.getElementById('user1HiddenFields');
        if (firstProfileUnlockCheck.checked == true) {
            buttonTextContent = e.currentTarget.textContent;
            if (buttonTextContent == 'Show more') {
                userHiddenFieldsElement.style.display = 'block';
                e.currentTarget.textContent = 'Hide it'
            
            } else {
                userHiddenFieldsElement.style.display = 'none';
                e.currentTarget.textContent = 'Show more'
            }
        }
    })


    //second profile event listener
    buttonSecondProfile.addEventListener('click', function(e) {
        userHiddenFieldsElement = document.getElementById('user2HiddenFields');
        if (secondProfileUnlockCheck.checked == true) {
            buttonTextContent = e.currentTarget.textContent;
            if (buttonTextContent == 'Show more') {
                userHiddenFieldsElement.style.display = 'block';
                e.currentTarget.textContent = 'Hide it'
            
            } else {
                userHiddenFieldsElement.style.display = 'none';
                e.currentTarget.textContent = 'Show more'
            }
        }
    })

    //third profile event listener
    buttonThirdProfile.addEventListener('click', function(e) {
        userHiddenFieldsElement = document.getElementById('user3HiddenFields');
        if (thirdProfileUnlockCheck.checked == true) {
            buttonTextContent = e.currentTarget.textContent;
            if (buttonTextContent == 'Show more') {
                userHiddenFieldsElement.style.display = 'block';
                e.currentTarget.textContent = 'Hide it'
            
            } else {
                userHiddenFieldsElement.style.display = 'none';
                e.currentTarget.textContent = 'Show more'
            }
        }
    })


}