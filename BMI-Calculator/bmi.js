// h1 = document.createElement('h1');
// h1.innerText = 'BMI Calculator';
// document.body.append(h1);

let result = document.getElementById('Result');
result.addEventListener('click', () => {
// let age = document.querySelector('#age').value
//     switch (true) {
//         case (age < 10):
//             document.getElementById('agePar').innerText = 'You are eating';
//         break
//         case (age < 20):
//             document.getElementById('agePar').innerText = ('You are Thinking');
//         break
//         case (age < 30):
//             document.getElementById('agePar').innerText = ('You are relaxing');
//         break
//         case (age < 40):
//             document.getElementById('agePar').innerText = ('You are vibing');
//         break
//         case (age < 50):
//             document.getElementById('agePar').innerText = ('You are eating');
//         break

//     };
    let height = document.querySelector('#height').value
//     switch (true) {
//         case (height < 100):
//             document.getElementById('heightPar').innerText = ('You are growing');
//         break
//         case (height < 120):
//             document.getElementById('heightPar').innerText = ('You are in 100\'s');
//         break
//         case (height < 140):
//             document.getElementById('heightPar').innerText = ('You are almost 150');
//         break
//         case (height < 180):
//             document.getElementById('heightPar').innerText = ('You are a beast');
//         break
//         case (height < 200):
//             document.getElementById('heightPar').innerText = ('You are what you eating');
//         break

//     };
    let weight = document.querySelector('#weight').value
//     switch (true) {
//         case (weight < 40):
//             document.getElementById('weightPar').innerText = ('You are light');
//         break
//         case (weight < 80):
//             document.getElementById('weightPar').innerText = ('You are getting fat');
//         break
//         case (weight < 140):
//             document.getElementById('weightPar').innerText = ('You are obest');
//         break
//         case (weight < 480):
//             document.getElementById('weightPar').innerText = ('You need help');
//         break
//         case (weight < 1000):
//             document.getElementById('weightPar').innerText = ('How are you alive');
//         break

//     };
    let bmi1 = eval(weight/((height/100)*2));
    let bmi2 = bmi1.toFixed(2);
    document.getElementById('output').innerHTML = 'Your BMI is '.concat(bmi2)

    switch (true) {
        case (bmi1 < 18.5):
            document.getElementById('outputText').innerText = 'You fall in the underweight range';
        break
        case (bmi1 < 25):
            document.getElementById('outputText').innerText = 'You fall in the normal range';
        break
        case (bmi1 < 30):
            document.getElementById('outputText').innerText = 'You fall in the overweight range';
        break
        case (bmi1 < 35):
            document.getElementById('outputText').innerText = 'You fall in the range of getting obese';
        break
        case (bmi1 < 40):
            document.getElementById('outputText').innerText = 'You fall in the obesity range';
        break

    };

    // let bmi1 = eval(weight/((height/100)*2));
    // let bmi2 = bmi1.toFixed(2);
    // document.getElementById('output').innerHTML = 'Your BMI is '.concat(bmi2)
})


