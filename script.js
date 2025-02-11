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
    if(!num2){
        return('Please stop that.')
    }
    else return num1/num2;
}

function operate(input1,input2,operator){
    switch(operator){
        case "+": return add(input1,input2);
        case "-": return subtract(input1,input2);
        case "x": return multiply(input1,input2);
        case "÷": return divide(input1,input2);
    }
}

function buttonClick(eventObj){
    let input = eventObj.target;
    if(input.classList.contains("number")){
        displayValue.push(+input.textContent);
        updateScreen(displayValue,screen);
    }
    else if(input.classList.contains("point")){
        if(!displayValue.some((element)=> element === '.')){
            displayValue.push(input.textContent);
            updateScreen(displayValue,screen);
        }
    }
    else if (input.classList.contains("operator")){
        if(!input1){
            input1 = displayValue.join('');
            displayValue.splice(0);
            updateScreen([0],screen);
        }
        else if (!input2){
            input2 = displayValue.join('');
            displayValue.splice(0);
            input1 = operate(+input1,+input2,operator);
            input2 = 0;
            updateScreen([input1],screen);
        } 
        operator = input.textContent;
    }
    else if (input.classList.contains("equals")){
        if(!(input1&&operator)){
            return;
        }
        input2 = displayValue.join('');
        displayValue.splice(0);
        updateScreen([operate(+input1,+input2,operator)],screen);
        input1 = 0;
        input2 = 0;
        operator ='';
    }
    else if (input.classList.contains("clear")){
        input1 = 0;
        input2 = 0;
        operator = '';
        displayValue.splice(0);
        updateScreen([0],screen);
    }
}

function updateScreen(displayValue, screen){
    if(screen.textContent === 0){ 
        screen.textContent = '';
    }
    screen.textContent = displayValue.join('');
}

let input1, input2, operator;
let displayValue =[];

const buttons = document.querySelector(".buttons");
const screen = document.querySelector(".screen");
buttons.addEventListener("click",buttonClick);