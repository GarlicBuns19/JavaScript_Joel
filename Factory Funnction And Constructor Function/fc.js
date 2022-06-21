function factoryCreate(firstName, lastName, age){
    return{
        firstName: firstName,
        lastName: lastName,
        age: age
    };
}
function ConstructorCreate(firstName, lastName, age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age;
}
const factoryPerson = factoryCreate("firstName","secondName","18");
console.log(factoryPerson);
const contructorPerson = new ConstructorCreate("firstName2","secondName2","20");
console.log(contructorPerson);

console.log(factoryCreate('Peter','Cake',28))