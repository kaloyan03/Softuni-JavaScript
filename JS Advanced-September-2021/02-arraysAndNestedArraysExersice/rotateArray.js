function arrayRotation(list, times) {
    let realRotation = times % list.length;
    for (let i = 0; i < realRotation; i++) {
        last_element = list.pop();
        list.unshift(last_element);
    }

    console.log(list.join(' '));

}


// arrayRotation(['1', 
// '2', 
// '3', 
// '4'], 
// 2
// )


// arrayRotation(['Banana', 
// 'Orange', 
// 'Coconut', 
// 'Apple'], 
// 15
// )