// object basics
const person = {
    firstName: 'Peter',
    lastName: 'Ant',
    age: 30,
    calculateSalary: (hrs,rate) => {
        return hrs + rate;
    }
}
console.log(`Name: ${person.firstName}
Surname: ${person.lastName}
Age: ${person.age}
Salary: ${person.calculateSalary(50,650)}`);

console.log('\t',person.firstName,'\n',person.lastName);

if(person.hasOwnProperty('Salary')){
    console.log(person['age']);
}else{
    console.warn('Key was not found');
}

// Factory Function
// Objects is a black box
function Employee(name,surname,company) {
    return{
        name: 'name',
        surname: 'surname',
        company: 'company',
        display: () => {
            document.write(`<br> Name: ${name}<br>
            Surname: ${surname}<br>
            Company Name: ${company}<br>`)
        }
    }
}
let emp1 = Employee('Joel','Mukanya','Life Choices');

let emp2 = Employee('Henk','Peter','Mr D');

let emp3 = Employee('Amanda','Gudiwa','Eat Big');

// Display all info
emp1.display();
emp2.display();
emp3.display();