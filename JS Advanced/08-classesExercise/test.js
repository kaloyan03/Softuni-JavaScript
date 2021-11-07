let obj = {"you": 100, "me": 75, "foo": 116, "bar": 15};

let entries = Object.entries(obj);
// [["you",100],["me",75],["foo",116],["bar",15]]

let sorted = entries.sort((a, b) => a[1] - b[1]);
// [["bar",15],["me",75],["you",100],["foo",116]]


object = Object.assign(...array.map(([k, v]) => ({ [k]: v })));

console.log(object);