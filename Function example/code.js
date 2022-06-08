// ======JS===
/*
The default data type in JS is any,
in case you haven't assigned a value.
*/
// Variables
let btnDisplay = document.querySelector('#display');
let yourVar;
// Example 1
function display() {
    document.getElementById('content').innerHTML = '<strong>Hello There</strong>';
}
// Example 2: Passing an argument or
// parameter
function displayWithArg(arg) {
    document.getElementById('content').innerText = `Hello There ${arg}`;
}
// Example 3 -> default argument
function addition(numb1, numb2 = 2) {
    document.getElementById('content').innerText = `Sum is ${numb1 + numb2}`;
}
// AddEventListeners to each buttons
btnDisplay.addEventListener('click', display);
//







