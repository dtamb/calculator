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
    else if (input.classList.contains("operator")){
        if(!input1){
            input1 = displayValue.join('');
            displayValue.splice(0);
        }
        else if (!input2){
            input2 = displayValue.join('');
            displayValue.splice(0);
        } 
        /*
        else{
            console.log(`Input 1: ${input1}`);
            let temp = operate(input1,input2,operator);
            console.log(`Temp Value: ${temp} Type of Temp: ${typeof(temp)}`);
            input1 = temp;
            console.log(`Input 1: ${input1}`);
            input2 = 0;
            displayValue.splice(0);
        }
        */
        /*
        else{
            input2 = displayValue.join('');
            displayValue.splice(0);
        }   */
        operator = input.textContent;
        updateScreen([0],screen);
        console.log(input1);
        console.log(operator);
        console.log(input2);
    }
    else if (input.classList.contains("equals")){
        input2 = displayValue.join('');
        displayValue.splice(0);
        updateScreen([operate(input1,input2,operator)],screen);
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