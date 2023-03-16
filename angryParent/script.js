document.querySelector('#yell').addEventListener('click', yell)

function run() {
    const fName = document.querySelector('#firstName').value;
    const mName = document.querySelector('#middleName').value;
    const lName = document.querySelector('#lastName').value;

    document.querySelector('#placeToYell').innerHTML = `${fName} ${mName}
    ${lName}`
  
}