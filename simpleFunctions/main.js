//-- Easy
// create a function that subtracts two numbers and alerts the difference
 function subtract(one, two){
    alert(one - two);
 }
// subtract(10, 4)

// create a function that divides three numbers and console logs the quotient
 function divide(oneNum, twoNum, threeNum){
    console.log(oneNum / twoNum / threeNum)
 }

divide(12, 4, 3)


// create a function that multiplies three numbers and returns the product
function multiply(first, second, third) {
    return first * second * third
}
function turnIntoMoney(){
    let product = multiply(10, 2, 5);
    alert('$' + product)
}

//turnIntoMoney()


//-- Medium 
// create a function that takes in three numbers. Add the first two numbers and return the remainder of dividiing the sum of the first two numbers by the third number

function medium(numberOne, numberTwo, numberThree){
    return (numberOne + numberTwo) % numberThree
}
console.log(medium(3,3,2))

//-- Hard
// create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less than 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hard(firstNum, secondNum, thirdNum, fourthNum){

}