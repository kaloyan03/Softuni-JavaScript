function solve(listOfPies, pie1, pie2) {
    pie1Index = listOfPies.indexOf(pie1);
    pie2Index = listOfPies.indexOf(pie2);

    result = listOfPies.slice(pie1Index, pie2Index + 1);

    console.log(result);
}


// solve(['Pumpkin Pie',
// 'Key Lime Pie',
// 'Cherry Pie',
// 'Lemon Meringue Pie',
// 'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie'
// )

// solve(['Apple Crisp',
// 'Mississippi Mud Pie',
// 'Pot Pie',
// 'Steak and Cheese Pie',
// 'Butter Chicken Pie',
// 'Smoked Fish Pie'],
// 'Pot Pie',
// 'Smoked Fish Pie'
// )