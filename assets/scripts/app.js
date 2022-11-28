const defaultValue = 0;
let constantValue = defaultValue;

function getUserNumberInput(){
    return parseInt(userInput.value);
}
function calDescription(operation, initialval, userval){
    const calcDescription = `${initialval} ${operation} ${userval}`;
    outputResult(constantValue, calcDescription);
}

function add(){
    const userValue = getUserNumberInput()
    const initialResult = constantValue;
    constantValue = constantValue + userValue;
    calDescription('+', initialResult, userValue);

}
function subtract(){
    const userValue = getUserNumberInput()
    const initialResult = constantValue;
    constantValue = constantValue - userValue;
    calDescription('-', initialResult, userValue);
    
}
function multiply(){
    const userValue = getUserNumberInput()
    const initialResult = constantValue;
    constantValue = constantValue * userValue;
    calDescription('*', initialResult, userValue);
    

}
function divide(){
    const userValue = getUserNumberInput()
    const initialResult = constantValue;
    constantValue = constantValue / userValue;
    calDescription('/', initialResult, userValue);
    

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click',divide);

