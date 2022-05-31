const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const operate = (a,b,operator) => {
    let answer;
    if (operator = '+'){
        answer = add(a,b);
    } else if (operator = '-'){
        answer = subtract(a,b);
    } else if (operator = '*'){
        answer = multiply(a,b);
    } else if (operator = '/'){
        answer = divide(a,b);
    }
    return answer;
}
let array = [0,'',0]; //will populate this array with a, b and operator below to pass to functions
let i = 0; // i will be incremented when you hit the operator so that 
//it stores the operator in array[1] and then incremented immediately after
//so that it begins storing the next number

const updateDisplay = function(e){ //this function will populate the above array and update the display
    const input = (e.target.innerText);//saves the button text from the event listener on the buttons
    if (parseInt(input) >= 0 && parseInt(input) <= 9){//checks to see if button clicked was a number
        array[i] = parseInt(input) + array[i] * 10;//checks to see if the array already has a number and
        //makes it so that the first number entered goes left (*10) and inserts the new number in the ones place.
        //console.log(array);// testing purposes
    } else if(input == '.'){//checks to see if the button pressed was the .
        //future functionality.
    } else if (input == '=' || array[1] != ''){//you have to press an operator to get to this part of the if statement
        //this part checks and sees if an operator has already been stored. which essentially makes any operator run the functions
        let answer = operate(array[0],array[2],array[1]) // sends the info to the function
        //console.log(answer);//testing purposes
    } else { // you can only get to this part of the if statement on your first operator press
        i++;//moves i so that you can place the operator in array[1]
        array[i] = input;//does so
        //console.log(array);//testing purposes
        i++;//prepares the next number to go in array[2]
    }
}
document.querySelectorAll('.button').forEach(item => {//event listener for buttons
    item.addEventListener('click', updateDisplay)
})
document.querySelectorAll('.upperButton').forEach(item => {//event listener for clear/delete
    item.addEventListener('click', updateDisplay)// a future functionality.
})//THESE PROBABLY NEED TO BE SEPARATED AND FUNCTIONS CREATED TO BACKSPACE AND TO CLEAR THE SCREEN AND EVERYTHING

//TODO
//NEXT UP YOU NEED TO STARTS UPDATING THE DISPLAY AND TEST OTHER OPERATORS AND MAKE SURE EVERY BUTTON YOU HAVE
//SET UP SO FAR WORKS AS INTENDED. 