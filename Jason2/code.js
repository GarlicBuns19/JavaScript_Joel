function btn(){
    console.log('Hello World');
}
function btn2(){
    document.getElementById('para').innerHTML = 'Hello World';
}

function myFunction(letter){
    document.querySelector('#output').innerHTML += letter;
}
function deleteMyFunction(){
    document.querySelector('#output').innerHTML = document.querySelector("#output").innerHTML.slice(0, -1) ;
}