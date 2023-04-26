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