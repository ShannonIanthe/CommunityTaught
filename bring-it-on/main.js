// *Variables*
// Create a variable and console log the value
const bring = 1;
console.log(bring);

//Create a variable, add 10 to it, and alert the value
const addTen = 0;
addTen = addTen + 10;
alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substractsNumbers(num1, num2, num3, num4){
  alert(num1 - num2 - num3- num4)
}
substractsNumbers(5,4,3,2)

// Create a function that divides one number by another and returns the remainder
function dividesNumber(n1, n2){
return n1 % n2
}
console.log(dividesNumber(12,3))


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAlertJumanji(param1, param2) {
    if (param1 + param2 > 50) {
        alert('Jumanji')
    }
}
addTwoAlertJumanji(50,1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeAndCheckDivByThree(n1, n2, n3){
let product = n1 * n2 * n3
if(product % 3 === 0){
    alert('ZEBRA')
}
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordAndNumber(word, number){
    for(let i = 1; i <= number; i++){
console.log(word)
    }
}
wordAndNumber('wonderful', 21)
