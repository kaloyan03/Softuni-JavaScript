class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        const x1 = p1.x;
        const y1 = Number(p1.y);
        const x2 = Number(p2.x);
        const y2 = Number(p2.y);

        const distanceBetweenPoints = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
        
        return distanceBetweenPoints;
    };

}


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
