function fly(obj) {
    console.log(`${this.name} is flying!!!`);
}

obj = {
    'name' : 'Wonderwoman',
}

fly(obj)