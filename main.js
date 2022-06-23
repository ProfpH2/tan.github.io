const number1 = parseFloat(prompt('enter a number'));
const operator = prompt('enter an operand (+, -, *, /)');
const number2 = parseFloat(prompt('enter a second number'));

let result;
if(isNaN(number1) || isNaN(number2)){
    alert('incorrect input. Refresh and try again');
}else{
if (operator === "+"){
    result = number1 + number2
}else if (operator === "-"){
    result = number1 - number2
}else if (operator ==="*"){
    result = number1 * number2
}else if (operator ==="/"){
    result = number1 / number2
}else{
    prompt('input a  valid operator')
}
alert(number1 + operator +number2 + ' = ' + result);
}