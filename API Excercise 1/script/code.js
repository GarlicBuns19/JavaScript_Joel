async function getData() {
    let collections =
    await fetch('https://randomuser.me/api?results=3');
    let data = collections.json();
    // JSON javascript object notation
    return data;
}
// Display
let wrapper = ''
async function displayData() {
    let data = await getData();
    data.results.forEach(item => {
        wrapper += `
                <div class="card" style="width: 18rem;">
                    <img src="${item['picture'].large}" style="border-radius: 50%;" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item['name'].first} ${item['name'].last}</h5>
                        <p id="par"></p>
                        <ul class="list-group d-inline ">
                            <li class='list'>
                                <i class="bi bi-calendar" onmouseover="para()" onmouseout="para2()"></i>
                            </li>
                        </ul>
                    </div>
                </div>
        `
    });
    let row = document.querySelector('.row');
        row.innerHTML = wrapper;
}
//
displayData();

function para(){
    let par = document.getElementById('par')
    par.innerHTML = '18/06/1936'
}
function para2(){
    let par = document.getElementById('par')
    par.innerHTML = ''
}

