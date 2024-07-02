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

function operate(input1,input2,operator){
    switch(operator){
        case "+": return add(input1,input2);
        case "-": return subtract(input1,input2);
        case "*": return multiply(input1,input2);
        case "/": return divide(input1,input2);
    }

}

function buttonClick(eventObj){
    let input = eventObj.target.textContent;
    if(eventObj.target.classList.contains("number")){
        displayValue.push(+input);
    }
    updateScreen(displayValue,screen);
}

function updateScreen(displayValue, screen){
    if(screen.textContent === 0){ 
        screen.textContent = ''
    }
    screen.textContent = displayValue.join('');
}

let input1, input2, operator;
let displayValue =[];

const buttons = document.querySelector(".buttons");
const screen = document.querySelector(".screen");
buttons.addEventListener("click",buttonClick);