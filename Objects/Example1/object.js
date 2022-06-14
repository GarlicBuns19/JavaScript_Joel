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
Employee = () => {
    
}