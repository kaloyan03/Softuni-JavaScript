function checkIfFieldsAreEmpty(...params) {
    if (params[0] !== '' && params[1] !== '' && params[2] !== '') {
        return true;
    }
    return false;
}

function clearInputFields(...params) {
    params[0].value = '';
    params[1].value = '';
    params[2].value = '';
}

let helper = {
    checkIfFieldsAreEmpty,
    clearInputFields
}

export default helper;