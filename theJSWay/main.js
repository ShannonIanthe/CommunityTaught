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

//let temperature = prompt('What is the tempature today in Celcius?')
//let fahrenheit = temperature * (9/5) + 32;
//alert(`It is ${fahrenheit} degrees fahrenheit`)




//Variable swapping
//Observe the following program.
let number1 = 5;
let number2 = 3;
// TODO: type your code here (and nowhere else!)
number1 = number2;
number2+=2;
console.log(number1); // Should show 3
console.log(number2); // Should show 5

/* Chapter 3: Conditions
Following day
Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
*/

//let day = prompt('What day is today?')
/*if (day === 'Monday'){
    console.log('The next day is Tuesday')
} else if (day === 'Tuesday'){
    console.log('The next day is Wednesday')
} else if (day === 'Wednesday') {
    console.log('Tomorrow is Thursday')
} else if (day === 'Thursday'){
    console.log('Tomorrow is Friday')
} else if (day === 'Friday') {
    console.log('Tomorrow is Saturday!')
} else if (day === 'Saturday'){
    console.log('Tomorrow is Sunday')
} else if (day === 'Sunday'){
    console.log('Tomorrow is Monday :(')
} else {
    console.log('not a valid input')
}
*/
/* Number comparison
Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases. */
a= 21
if ((100> a) && (a < 200)) {
    console.log('That\'s a number... wow' )
} 

/* Number of days in a month
Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account. */
let month = Number(prompt('What month is it?'))
if (month === 1){
    console.log('31 days')
} else if (month === 2){
    console.log('28 or 29 days')
} else if (month === 3) {
    console.log('31 days')
} else if (month === 4) {
    console.log('April has 30 days')
} else if (month === 5) {
    console.log('31 days')
} else if (month === 6) {
    console.log('30 days of summer')
} else if (month === 7){
    console.log('31 days')
} else if (month === 8) {
    console.log('31')
} else if (month === 9){
    console.log('30 days')
} else if (month === 10){
    console.log('Birthday month with 31 days!')
} else if (month === 11) {
    console.log('30 days')
} else if (month === 12) {
    console.log('Final month with 31 days of winter')
} else {
    console.log('not a valid month')
}

/*Following second
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.*/
let hour = Number(prompt('What hour is it?'))
let minute = Number(prompt('What minte is it?'))
let second = Number(prompt('What second is it?'))

if (second > 90 || second < 0 || minute > 60 || minute < 0 || hour > 23 || hour < 0){
    console.log('Enter a valid time.')
} else if ((hour === 23) && (minute === 59) && (seconds === 59)) {
    hour = 0;
    minute = 0;
    second = 0;
    console.log(`${hour}h ${minute}m ${second}m`)
} else if ((second <= 59) && (minute <= 59) && (hour <=23)) {
    hour++;
    minute = 0;
    second = 0;
    console.log(`${hour}h ${minute}m ${second}m`)
} else if (second < 59 && hour <= 23 && minute <= 59) {
    second++;
    console.log(`${hour}h ${minute}m ${second}m`)
} else if (second <= 59) {
    second = 0;
    minute++;
    console.log(`${hour}h ${minute}m ${second}m`)
}

//Chapter 4: for loop & while loop
//Carousel
let carouselTurns = Number(prompt('How many times you wanna go around?'));
for (let i = 1; i <= carouselTurns.length; i++) {
    console.log(i)
}

let evenOrOdd = Number(prompt('Pick a number'))
for (let i = 1; i < evenOrOdd.length; i++){
    if(i % 2 == 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}

//Input Validation
/* Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.*/

let number = '';
while (number > 100){
    number = prompt('Type a number less than 100')
}
 /*
When you are done with the above, improve the program so that the terminating number is between 50 and 100.*/
let numberAgain = '';
    while (50 > numberAgain > 100) {
        numberAgain = prompt('Pick a number between 50 and 100')
    }

/* Multiplication table
Write a program that asks the user for a number, then shows the multiplication table for this number.*/

const numberTwo = parseInt(prompt('Enter an interger: '))

for(let i =0; i < 10; i++){
    const result = i * numberTwo;
    console.log(`${numberTwo} * ${i} = ${result}`)
}
/*
When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint). */    

//not sure how to solve this
const numberThree = parseInt(prompt('Enter an integer between 2 and 9: '))

for(let i = 0; i < 10; i++){
    const resultTwo = i * numberThree
    if(2 <= numberThree <= 9) {
        console.log(`${numberThree} * ${i} = ${resultTwo}`)  
    }
}

/* Neither yes nor no
Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game. */
 const answer = prompt('Yes or No: ')

/* FizzBuzz
Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5. */

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else (i % 15 === 0) 
        console.log('FizzBuzz')
    
}