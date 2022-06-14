// structureClone()
// const num1 = {name: 'Hek'}

// const num2 = structuredClone(num1)

// console.log(num1);
// console.log(num2);
// console.log(num1 !== num2);

// var eg1 = {'name': 'Peter', 'count': 65};
// var eg2 = JSON.parse( JSON.stringify(eg1));

// console.log(eg2.name);
// console.log(eg2.count);

let person = {name : 'Peter',surname: 'Cake',age: 40}
let p1 = structuredClone(person);
console.log(person);
console.log(p1);

// JSON.parse
let person1 = {'name': 'Peter','surname': 'Cake','count': 40}
let p2 = JSON.parse(JSON.stringify(person1));
console.log(p2.name);
console.log(p2.surname);
console.log(p2.count);
document.write(p2.name);
document.write(p2.surname);
document.write(p2.count);
