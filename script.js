const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const operate = (a,b,operator) => {
    let answer;
    if (operator == '+'){
        answer = add(a,b);
    } else if (operator == '-'){
        answer = subtract(a,b);
    } else if (operator == '*'){
        answer = multiply(a,b);
    } else if (operator == '÷'){
        answer = divide(a,b);
        if( b == 0){
            alert('you done fucked up A-A-Ron');
            clear()
            return
        }
    }
    return answer;
}
let array = [0,'',0]; //will populate this array with a, b and operator below to pass to functions
let i = 0; // i will be incremented when you hit the operator so that 
//it stores the operator in array[1] and then incremented immediately after
//so that it begins storing the next number

let numberEntered = 0; // this detects if you have entered the first if statement below. 
let operatorEntered = 0;
const clear = function(){
    topRow.innerText = '';
    bottomRow.innerText = '0';
    array = [0,'',0];
    i = 0;
    answer = 0;
    numberEntered = 0;
    operatorEntered = 0;
}
//Case 15 ADDED IF STATEMENT AND MATH.CEIL TO PROPERLY DELETE NEGATIVE NUMBERS. 
const deleter = function(){
    if(array[i]<0){
        array[i] = Math.ceil(array[i]/10);
        bottomRow.innerText = array[i];
    } else {
        array[i] = Math.floor(array[i]/10);
        bottomRow.innerText = array[i];
    }
}

const updateDisplay = function(e){ //this function will populate the above array and update the display
    const input = (e.target.innerText);//saves the button text from the event listener on the buttons
    //Case 10: completing an operation with the plus sign
    //Case 11: completing an operation 
    
    

    if (parseInt(input) >= 0 && parseInt(input) <= 9){
    //Case 1: Pressing a number anytime
    //Case 2: pressing a number after a number has already been pressed
    //Case 13: pressing a number and then pressing an operator and another operator and then a number leads to NAN because the below equation is popping part of the array. FIXED WITH NAN PART
        if(isNaN(array[i])){
            array[i] = 0;
        }
        array[i] = parseInt(input) + array[i] * 10;
        bottomRow.innerText = array[i];
        numberEntered = 1;

    } else if(input == '=' && i == 0)
    //Case 3: Pressing equal before a number. 
    //Case 4: Pressing equal after the first number has been entered and before an operator.
    {
        return
    } else if(numberEntered == 0)
        //Case 5: Pressing an operator before a number. 
    //RESOLVED //Case 6: UNDESIRABLE Pressing an operator after a number. Fixed this by adding the number entered variable and incrementing it to 1 in the first IF. 
    //Case 7 pressing an operator before a number and then pressing another operator again before a number. 
    //removed '(i == 0 || i == 2) &&' because if you get to this part of the code and numberEntered is still zero then you have entered an operator before a number
    {
        array[0] = 0;
        array[1] = input;
        i = 2; 
        topRow.innerText = array[0] + ' ' + array[1];
    }
    //Case 8: This will be updated later to deal with the . 
     else if(input == '.'){//checks to see if the button pressed was the .
        //future functionality.
    //Case 9: Pressing the equal sign after entering a number and after entering an operator. 
    //case 12: after completing an operation beginning typing again do not add to the result but instead adds to the second number in the array

    } 
    else if (input == '='){
        topRow.innerText = array[0] + ' ' + array[1] + ' ' + array[2] + ' =';
        array[0] = (operate(array[0],array[2],array[1]))
        array[0] = array[0] * 1000;
        array[0] = Math.round(array[0]);
        array[0] = array[0] / 1000;
        bottomRow.innerText = array[0];
        array[2] = 0;
        i = 0;
    //Case 10: Pressing an operator after entering a number, an operator and a second number completes a calculation. 
    } else if (i == 2 && operatorEntered == 0 && (input == '÷'||input == '*'||input == '-'||input == '+'))
    {
        array[0] = operate(array[0],array[2],array[1]);
        array[0] = array[0] * 1000;
        array[0] = Math.round[array[0]];
        array[0] = array[0] / 1000;
        array[1] = input;
        topRow.innerText = array[0] + ' ' + array[1];
        bottomRow.innerText = array[0];
        array[2] = 0;
        array.pop();
        operatorEntered = 1
        //i = 1;

    } else if (array[1] != '' && operatorEntered == 1)
    //Case 11: pressing an operator twice in a row
    {
        array[1] = input;
        topRow.innerText = array[0] + ' ' + array[1];
    } else { 
        i++;
        array[i] = input;
        i++;
        topRow.innerText = array[0] + ' ' + array[1];
    }
}
document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', updateDisplay)
})

const topRow = document.querySelector('.displayTopRow')
const bottomRow = document.querySelector('.displayBottomRow')
const clearer = document.querySelector('#clear');
clearer.addEventListener('click', clear)
const deleterer = document.querySelector('#delete');
deleterer.addEventListener('click', deleter);
