// structureClone()
const num1 = {name: 'Hek'}

const num2 = structuredClone(num1)

console.log(num1);
console.log(num2);
console.log(num1 !== num2);

var eg1 = {'name': 'Peter', 'count': 65};
var eg2 = JSON.parse( JSON.stringify(eg1));

console.log(eg2.name);
console.log(eg2.count);