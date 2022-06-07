// let age = 18;
// let salary = 5000;
// let bonus = 500;

// if((age >= 18) && (salary >= 5000)) {
//     salary += bonus;
//     // salary = salary + bonus
//     console.log('Your Salary: R'.concat(salary))
// }else{
//     console.log('Please try again later');
// }

// // Outer if statement
// if(age >= 18) {
//     // Inner if staement
//     if(salary >= 5000){
//         salary += bonus;
//         console.log('Salary: R '.concat(salary));
//     }else{
//         console.log('Salary less than R5000')
//     }
// }else{
//     console.log('You are not qualifyed')
// }

// Collection
// let items = ['Banana', 'Mango', 'Orange', 'Laptop', 'Mouse',
// 'Keyboard'];
// // Linking
// let ul = document.getElementById('items');
// // Load items to an ul
// items.forEach( (item) => {
//     ul.innerHTML += `
//     <li class='bgDarkCyan'>${item}</li>
//     `;
//     ul
// });

// items.forEach(display);

// function display(item){
//     console.log(item);
// }

// items.forEach((e) => {
//     ul.innerHTML += `
//     <li>${e}</li>
//     `;
// })

let people = ['Jack Rack','Tak Rak','Mike Nike','Jake Cake','Shake Bake','Pop Yok','Lil Pill','Coke Choke','Pop Glock','Sit Spit'];

let ul = document.getElementById('people');

// people.forEach(friends(people));

p1 = people[2].length;
console.log(p1);

let p2 = people[2]
console.log(p2);

p3 = console.log(people[people.length/2])
p4 = console.log(people[people.length-1])

people.forEach((f) => {
    ul.innerHTML = `
    <li>${p1}</li>
    <li>${p2}</li>
    <li>${people[people.length/2]}</li>
    <li>${people[people.length-1]}</li>
    `
});

let marks = if( <= 98)
// >, >= , <, <=
// &&, ||, !
switch(marks) {
    case 100:
        console.log("A+");
    break;
    case 98:
    case 97:
    case 85:
        console.log("B+");
    break;
    case 75:
        console.log("Distinction");
    break;
    case 50:
        console.log("Pass");
    break;
    case 49:
        console.log("Fail");
    break;
    default:
        console.log("Out of range");
}