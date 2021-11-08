function addAndRemoveFromArray(commands) {
    let number = 1;
    let list = [];
    for (command of commands) {
        if (command == 'add') {
            list.push(number);
        } else if (command == 'remove') {
            list.pop();
        }
        number ++ ;
    }
    return list.length != 0 ? list.join('\n') : 'Empty'

}



addAndRemoveFromArray(['add', 
'add', 
'remove', 
'add', 
'add']

)