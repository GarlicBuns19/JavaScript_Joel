async function getData() {
    let collections =
    await fetch('https://randomuser.me/api?results=3');
    let data = collections.json();
    return data;
}
// Display
async function displayData() {
    let data = await getData();
    data.results.forEach(item => {
        console.log(item);
        console.log(
        `${item['name'].title} - ${item['name'].first}`);
    });
}
//
displayData();

