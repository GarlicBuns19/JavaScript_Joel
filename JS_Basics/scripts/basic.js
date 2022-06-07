// function myFunction() {
//     alert("Hello! My name is Ra'ees !!");
//     }

// // Approach 1
// const btnDisplay = document.getElementById ('btnHello');

// // Approach 2
// btnDisplay.addEventListener('click', ()=>(
//     alert('Hello World')
// ))

// btnDisplay.addEventListener('click', display);

// function Function() {
//     document.getElementById('hello').innerHTML='Helloenjasbjbas'
// }
// function Function1() {
//     document.getElementById('hello').innerHTML=''
// }

const btnDisplay = document.getElementById('display');

btnDisplay.addEventListener('click',()=>(
    document.getElementById('content').
    innerHTML = 'Hello jS'
))

var myStr = "I am a\"double\" quoted string insside another \"double quoted\".";
console.log(myStr);

let firstname = 'Jack';
let lastname = 'Long';
let age = ' 33'

// console.log('My Name is '.concat(firstname,',\nSurname is ',lastname,'\nAge is',age,'years old'));

console.log('jack'.concat(' Hello',firstname,lastname,'\n is tihis my name'));

function Raees(){
    var firstName= document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    document.getElementById("show").innerText = firstName+" "+lastName;
  }

var hours = 30;
var rate = 12;

btnRate.addEventListener('click',rate)

function del(){
    document.getElementById('rate').innerHTML = ''
}