const nameN = document.getElementById('name');

let arr = JSON.parse(localStorage.getItem('records')) ?
JSON.parse(localStorage.getItem('records')) : [
    {
        name: 'Peter'
    }
];

function addData(){
    arr.push({
        name: nameN.value,
        color: rgb.value
    })
    localStorage.setItem('records',JSON.stringify(arr));
}
document.querySelector('#add').addEventListener('click',()=>{
    const rgb = document.getElementById('rgb').value
    let color = document.querySelector('.container')
    color.style = `background-color: ${rgb}`;
})

const btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', addData);

(function loadData() {
    console.table(arr);
})();