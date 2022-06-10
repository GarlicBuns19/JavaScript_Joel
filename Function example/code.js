// ======JS===
/*
The default data type in JS is any,
in case you haven't assigned a value.
*/
// Variables
// let btnDisplay = document.querySelector('#display');
// let yourVar;
// Example 1
// function display() {
//     document.getElementById('content').innerHTML = '<strong>Hello There</strong>';
// }
// Example 2: Passing an argument or
// parameter
// function displayWithArg(arg) {
//     document.getElementById('content').innerText = `Hello There ${arg}`;
// }
// Example 3 -> default argument
// function addition(numb1, numb2 = 2) {
//     document.getElementById('content').innerText = `Sum is ${numb1 + numb2}`;
// }
// AddEventListeners to each buttons
// btnDisplay.addEventListener('click', display);

// function multiplication(num1,num2){
//     return num1 + num2
// }

// console.log(multiplication(3,3))

// console.log(multiplication(3))
// This gives u an error above


// Another example
// let displayName = (firstName) => {
//     document.write('<br> (firstName)');
// }

// displayName('Joel');
// displayName('Your Name');

// for(let  i = 0; i<5 ; i++) {
//     console.log(i);
// }

/* loops
for = when you have a collection of data , let ,varables ,condition, intrement numbers,even number use if statement
while = dont know how much loops you want to do
do while
for each
for in => object
*/

// let cnt = 0;
// while(cnt < 5) {
//     console.log(cnt);
//     cnt++;
// }

let numbers = [1,2,3,4,5,6,7]
for (let i=0; i<numbers.length; i++) {
    // if (numbers[i] % 2 == 0) {
    //     console.log(numbers[i]);
    // }
    console.log(numbers[i]);
    if(numbers[i] == 6) {
        break;
    }
}
// break, continue
