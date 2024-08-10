const display = document.getElementById("calcs");


function appendToDisplay(input){
     display.value += input
}

function clearDisplay(){
    document.getElementById('calcs').value = '' 

}

function answerToDisplay(){
    let expression = display.value;
    let replacedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100 ');
    let answer = eval(replacedExpression)
    display.value = answer



    }

