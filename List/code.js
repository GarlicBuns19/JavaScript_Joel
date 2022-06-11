h1 = document.createElement('h1');
h1.innerText = 'Sir List';
document.body.append(h1);

li = document.createElement('li');
li.innerText = 'Sir List';
document.body.append(li);

const lists = ['Hello','Sir','I','Think','I','Done'];
let ul = document.getElementById('uls')
lists.forEach((item) => {
    ul.innerHTML += `
    <li>${item}</li>
    `
});

