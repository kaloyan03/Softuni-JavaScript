function sumFirstLastElement(list) {
    if (list.length != 1 && list.length != 0) {
        firstElement = Number(list[0]);
        lastElement = Number(list[list.length - 1]);

        console.log(firstElement + lastElement);
    }


}

sumFirstLastElement(['20', '30', '40'])