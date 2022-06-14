// object basics
// const person = {
//     firstName: 'Peter',
//     lastName: 'Ant',
//     age: 30,
//     calculateSalary: (hrs,rate) => {
//         return hrs + rate;
//     }
// }
// console.log(`Name: ${person.firstName}
// Surname: ${person.lastName}
// Age: ${person.age}
// Salary: ${person.calculateSalary(50,650)}`);

// console.log('\t',person.firstName,'\n',person.lastName);

// if(person.hasOwnProperty('Salary')){
//     console.log(person['age']);
// }else{
//     console.warn('Key was not found');
// }

// Factory Function
// Objects is a black box
// function Employee(name,surname,company) {
//     return{
//         name: 'name',
//         surname: 'surname',
//         company: 'company',
//         display: () => {
//             document.write(`<br> Name: ${name}<br>
//             Surname: ${surname}<br>
//             Company Name: ${company}<br>`)
//         }
//     }
// }
// let emp1 = Employee('Joel','Mukanya','Life Choices');

// let emp2 = Employee('Henk','Peter','Mr D');

// let emp3 = Employee('Amanda','Gudiwa','Eat Big');

// // Display all info
// emp1.display();
// emp2.display();
// emp3.display();

// EXCERCIE
// function Work(name,hours,rate){
//     return{
//         name: name,
//         salary: (hours,rate) => {
//             return hours * rate;
//         }, rate:rate,
//         display: () => {
//             document.write(`<br>Name: ${name}<br>
//             Salary: ${hours}<br>`)
//         }
//     }
// }

// let w1 = Work('peter',40 * 500);
// w1.display();
// let w2 = Work('Heater',80 * 300);
// w2.display();

// Work = (name,hrs,rate) => {
//     return{
//         name: name,
//         salary: () => {
//             return hrs * rate
//         },
//         display: () => {
//             document.write(`<br>Name: ${name}<br>
//             Salary: ${hrs}<br>`)
//         }
//     }
// }
// let w1 = Work('Peter',40,500);
// let w2 = Work('Heater',80,300);

// console.log(`Name: ${'Peter'}
// Salary: ${w1.salary()}`)
// console.log(`Name: ${'Heater'}
// Salary: ${w2.salary()}`)

// Constructor Function
// function Shop() {
//     this.name= 'DJ',
//     this.address= '27 Strand Street CRD'
// }
// // Create Object
// const shop1= new Shop();
// console.log(`Nmae: ${shop1.name}
// Address ${shop1.address}`)

// Dynamtic values of
// The data does not change in ram
// Creating boxes in ram,not changing the value,but use same umber,IMMUTABLE
// Primitive values is IMMUTABLE,not changing on memory
let data  = 32;
console.log(data);
console.log(typeof data);

data  = 'Joel';
console.log(data);
console.log(typeof data);

data  = true;
console.log(data);
console.log(typeof data);
