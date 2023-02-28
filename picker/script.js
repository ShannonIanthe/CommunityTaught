document.getElementsByClassName("green").onClick = greenQueen; 
document.getElementsByClassName("purple").onClick = partyPurple;
document.getElementsByClassName("blue").onClick = blueBuzzle;

function greenQueen(){
 document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
 document.querySelector('body').style.color = 'white';
}

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
    document.querySelector('body').style.color = 'white'
}

function blueBuzzle() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
    document.querySelector('body').style.color = 'white'
}

