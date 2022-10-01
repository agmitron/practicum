var john = {
    id: 213,
    name: 'John'
};
delete john.name;
var a = {
    name: 'string'
};
var b = a;
b.id = 12;
b.name = 'asdsad';
var colorA = {
    red: 120,
    green: 210,
    blue: 15
};
function changeColor(obj, key, value) {
    obj[key] = value;
}
console.log({ before: colorA });
changeColor(colorA, 'yellow', 220);
console.log({ after: colorA });
