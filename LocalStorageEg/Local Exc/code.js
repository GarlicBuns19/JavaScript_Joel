const nameN = document.getElementById('name');
const rgb = document.getElementById('rgb');


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
const btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', addData);

(function loadData() {
    console.table(arr);
})();