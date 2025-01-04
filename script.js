
function read_inputs() {
    const in1 = document.getElementById("vstup1");
    const num1 = parseInt(in1.value);
    if (isNaN(num1)) {
        console.log("Input 1 is not a number");
        return null
    }

    const in2 = document.getElementById("vstup2");
    const num2 = parseInt(in2.value);
    if (isNaN(num2)) {
        console.log("Input 2 is not a number");
        return null
    }

    return [num1, num2];
}

function showResult(result) {
    const divResult = document.getElementById("vysledek");
    divResult.innerText = result.toString();
}

function plus(){
    const inputs = read_inputs();
    if (inputs != null) {
        const [num1, num2] = inputs;
        const result = num1 + num2;
        showResult(result);
    }
}

function minus() {
    const inputs = read_inputs();
    if (inputs != null) {
        const [num1, num2] = inputs;
        const result = num1 - num2;
        showResult(result);
    }
}

function multiply(){
    const inputs = read_inputs();
    if (inputs != null) {
        const [num1, num2] = inputs;
        const result = num1 * num2;
        showResult(result);
    }
}

function divide() {
    const inputs = read_inputs();
    if (inputs != null) {
        const [num1, num2] = inputs;
        if (num2 == 0) {
            console.log("Cannot divide by zero");
            return;
        }
        const result = num1 / num2;
        showResult(result);
    }
}
