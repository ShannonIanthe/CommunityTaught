//Create a function that grabs the number of snacks from the input and tells you to stop that many times

//set up event listener 
document.querySelector('#help').addEventListener('click', stopSnacking)

//function
function stopSnacking(){
    let snackNumber = Number(document.querySelector('#numberOfSnacks').value)
        document.querySelector('#stops').innerText = ""
    for(let i = 1; i <= snackNumber; i++){
            document.querySelector('#stops').innerText += ' STOP!' 
        
    }
}