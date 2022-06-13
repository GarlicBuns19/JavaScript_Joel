// Create an image tag
let dadAndMe = document.createElement('img');
document.body.appendChild(dadAndMe);
// Call the fetch function

fetch('../images/acorn.png').
then(res => {
    return res.blob();
}).
then(image => {
    // We have to convert it to the original format
    dadAndMe.src = URL.createObjectURL(image);
}).
catch(e => {
    console.log(e.message);
});
