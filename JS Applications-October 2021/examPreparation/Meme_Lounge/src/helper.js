function checkIfFieldsAreFilled(...params) {
    if (params.length == 4) {
        if (params[0].trim() !== '' && params[1].trim() !== '' && params[2].trim() !== '' && params[3].trim() !== '') {
            return true;
        }
    } else if (params.length == 3) {
        if (params[0].trim() !== '' && params[1].trim() !== '' && params[2].trim() !== '') {
            return true;
        }
    }

    return false;
}

function checkIfPasswordsMatch(pass1, pass2) {
    return Boolean(pass1 === pass2);
}


let helper = {
    checkIfFieldsAreFilled,
    checkIfPasswordsMatch,
}

export default helper