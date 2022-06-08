// Built in function eval()
let btnResult = document.querySelector('#result');
btnResult.addEventListener('click',()=>{
    // Make use of eval() function
    let total = 0;
    try{
        // First operand -> value
        let fstOp =
        parseInt(
        document.getElementById('numb1').value);
        //Operator
        let ops =
        document.getElementById('operator').value;
        // Second operand
        let secOp =
        parseInt(
        document.getElementById('numb2').value);
        //
        switch(ops) {
            case '+':
                total = fstOp + secOp;
            break
            case '-':
                total = fstOp - secOp;
            break
            case '*':
                total = fstOp * secOp;
            break
            case '/':
                total = fstOp / secOp;
            break
        }
        // Display the result
        document.getElementById('output').innerText =
        `Result is ${total}`;
    }catch(e) {
        document.getElementById('output').innerText = 'An error occurred';
    }
})