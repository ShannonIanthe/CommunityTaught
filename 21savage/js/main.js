//Create a function that has a loop that prints '21', 21 times to the console and then call that function
function loop() {
    for(let i= 1; i < 22; i++){
        console.log('21')
    }
}

//Bonus can you make it print '21' 21 times to the dom
 function savage21(){
    for(let i= 1; i < 22; i++){
    document.querySelector('#savageSays').innerText += " 21"
    }
 }
 savage21()

 //There are different kinds of loops
 //while loop
 let count = 0;
 while (count < 5){
    console.log(count)
    count++
 }