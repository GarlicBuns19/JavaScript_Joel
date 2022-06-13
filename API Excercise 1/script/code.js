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
                    <img src="${item['picture'].large}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item['name'].first} ${item['name'].last}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        `
    });
    let row = document.querySelector('.row');
        row.innerHTML = wrapper;
}

//
displayData();

