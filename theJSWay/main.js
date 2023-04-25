//Improved hello
//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
//const name = prompt("Enter your first and last name")
//alert(`Hello, ${name}`)

//VAT calculation
//Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
//let rawPrice = prompt('What is the raw price?')
//let VAT = rawPrice / 100 * 20.6
//let finalPrice = Number(rawPrice) + VAT;
//alert(`$${finalPrice}`)

//From Celsius to Fahrenheit degrees
//Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

let temperature = prompt('What is the tempature today in Celcius?')
let fahrenheit = temperature * (9/5) + 32;
alert(`It is ${fahrenheit} degrees fahrenheit`)




//Variable swapping
//Observe the following program.
let number1 = 5;
let number2 = 3;
// TODO: type your code here (and nowhere else!)
number1 = number2;
number2+=2;
console.log(number1); // Should show 3
console.log(number2); // Should show 5