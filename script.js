// const numberButtons = document.querySelector(*[data-number]*)

// const previousOperandTextElement = document.querySelector('*[data-previous-operand]*')
// const currentOperandTextElement = document.querySelector('*[data-current-operand]*')

// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;
//     }

//     clear() {
//         this.currentOperand = '';
//         this.previousOperand = '';
//         this.operation = undefined;
//     }

//     updateDisplay() {
//         this.previousOperandTextElement.innerHTML = this.previousOperand;
//         this.currentOperandTextElement.innerHTML = this.currentOperand;
//     }
// }

// const calculator = new Calculator(
//     previousOperandTextElement,
//     currentOperandTextElement
// );

// allClearButton.addEventListener('click', () => {
//     this.clear();
// }
// SE TU MEXER NISSO EU TE MATO :) SE TU MEXER NISSO EU TE MATO :) SE TU MEXER NISSO EU TE MATO :)




function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "?";

    }
}

