// structureClone()
const num1 = {name: 'Hek'}

const num2 = structuredClone(num1)

console.log(num1);
console.log(num2);
console.log(num1 !== num2);