function checkIfFieldsAreEmpty(...params) {
    if (params.length == 2) {
        if (params[0] !== '' && params[1] !== '') {
            return true;
        }
    } else if (params.length == 3) {
        if (params[0] !== '' && params[1] !== '' && params[2] !== '') {
            return true;
        }
    } else if (params.length == 5) {
        if (params[0] !== '' && params[1] !== '' && params[2] !== '' && params[3] !== '' && params[4] !== '') {
            return true;
        }
    }
    return false;
}

function checkIfPasswordsMatch(pass1, pass2) {
    if (pass1 === pass2) {
        return true;
    }
    return false;
}

export default {
    checkIfFieldsAreEmpty,
    checkIfPasswordsMatch,
}