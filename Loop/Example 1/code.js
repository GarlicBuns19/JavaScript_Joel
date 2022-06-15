// 1
for(let i = 1;i <= 10;i++){
    console.log(i);
}

// 2
let arr = [7, 4, 3, 9,10, 12];
for(w = 0;w < arr.length; w++){
    if(arr[w] % 2 === 0){
        console.log(arr[w])
    }
}

// 3
const arr2 = [1,3,5,6,7,9,11];
function deleteAnElement(n) {
    return console.log(n.splice(3,6))
}
deleteAnElement(arr2);

// 4
var s = ''
for(q = 1;q <=8;q++){
    console.log(s += q)
}
