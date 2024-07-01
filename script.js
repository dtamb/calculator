function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

let input1, input2, operator;

function operate(input1,input2,operator){
    switch(operator){
        case "+": return add(input1,input2);
        case "-": return subtract(input1,input2);
        case "*": return multiply(input1,input2);
        case "/": return divide(input1,input2);
    }

}