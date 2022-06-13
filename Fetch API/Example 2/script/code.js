// Create an image
let dadAndMe = document.createElement('img');
//Place this element on the body
document.body.appendChild(dadAndMe);
/*
Re-write example 1 by applying
async and await
*/

// Create a function
// Example 1
async function display() {
    let res = await fetch('../images/acorn.png');
    if(res.status == 200) {
        let image = await res.blob();
        dadAndMe.src = URL.createObjectURL(image);
    }else{
        console.error('Was not able to access your resource');
    }
}

//Example 2
async function display() {
    let res = await fetch('../images/acorn.png');
    let image = await res.blob();
    dadAndMe.src = URL.createObjectURL(image);
}

/* Calling a function
Can be put at top or bottom
*/
display().
catch(e => {
    console.error('PLease try again later');
});
