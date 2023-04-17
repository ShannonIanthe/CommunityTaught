// Easy //
let temp = 1;
temp = temp - 12;
// here temp is an argument, because we are passing it
// into log
console.log(temp);


// Medium //
//create a variable that holds a value from the input
let inputVal = document.querySelector('#danceDanceRevolution').value;
//add 25 to that number
inputVal = inputVal + 25;
//alert the number -> this is a function call, we are calling the function 'alert'
//when you call a function is an argument
alert(inputVal)

// Hard //
//create a variable that holds the h1
const h1Holder = document.querySelector('h1')
//add an event listener to that element that
// console logs the sum of the two previous variables

//call a function called sum
//when I click on the h1, run the function sum
h1Holder.addEventListener('click', sum) 

//original variable temp and other variable inputVal
function sum(){
    console.log(temp + inputVal)
}
