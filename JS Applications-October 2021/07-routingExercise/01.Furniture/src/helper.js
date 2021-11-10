function checkIfPasswordsMatch(pass1, pass2) {
    if (pass1 === pass2) {
        return true;
    }
    return false;
}


let helper = {
    checkIfPasswordsMatch,
}

export default helper;