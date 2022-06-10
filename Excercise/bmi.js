h1 = document.createElement('h1');
h1.innerText = 'BMI Calculator';
document.body.append(h1);



let result = document.getElementById('ageResult');
result.addEventListener('click', () => {
let age = document.querySelector('#age').value
    switch (true) {
        case (age < 10):
            document.getElementById('agePar').innerText = ('You are eating');
        break
        case (age < 20):
            document.getElementById('agePar').innerText = ('You are Thinking');
        break
        case (age < 30):
            document.getElementById('agePar').innerText = ('You are relaxing');
        break
        case (age < 40):
            document.getElementById('agePar').innerText = ('You are vibing');
        break
        case (age < 50):
            document.getElementById('agePar').innerText = ('You are eating');
        break

    };
})


