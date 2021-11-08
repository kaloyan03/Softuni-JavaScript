function deleteByEmail() {
    // select elements
    allTrElements = document.querySelectorAll('#customers tbody tr');
    inputElement = document.querySelectorAll('body label input')[0];
    resultElement = document.getElementById('result');
    //parse elements
    inputText = inputElement.value;

    //iterate over elements to get their children and check for email
    for (currentTrElement of allTrElements) {
        currentTrElementChildren = currentTrElement.children;
        email = currentTrElementChildren[1].textContent;
        if (email == inputText) {
            currentTrElement.remove();
            resultElement.textContent = 'Deleted';
            break;
        } 
    }

    if (resultElement.textContent == '') {
        resultElement.textContent = 'Not found.';
    } 


}