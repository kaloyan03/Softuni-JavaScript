function calculateCircleArea(input) {
    if (typeof input !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    } else {
        let circleRadius = Number(input)
        let circleArea = Math.PI * circleRadius ** 2;
        console.log(circleArea.toFixed(2));
    }
}



// calculateCircleArea(5)

// calculateCircleArea()