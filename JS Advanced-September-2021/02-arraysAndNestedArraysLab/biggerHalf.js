function biggerHalf(list) {
    let sortedList = list.sort((a,b) => a - b);
    let listHalfLength = Math.ceil(list.length / 2);
    result = [];

    for (let i = 0; i < list.length; i++){
        if (i >= listHalfLength) {
            result.push(sortedList[i]);
        }
    }
    for (num of result) {
        console.log(num);
    }
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
biggerHalf([3, 19, 14, 7, 2, 19, 6, 20]);