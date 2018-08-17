
//generates random numbers between 1 - 9
function randomNumber(value){
    var rand = Math.floor(Math.random() * value)+1;
return rand;
}

//locates the div
function getDiv(){
    document.getElementById("number1").innerHTML = randomNumber(9);
    document.getElementById("number2").innerHTML = randomNumber(9);
    document.getElementById("number3").innerHTML = randomNumber(9);
}

//calling the function to write to the div
getDiv();