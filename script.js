var allNumbers = document.querySelectorAll(".columns");
var matchesfound =document.querySelector(".matchesfound");
var flag = false;

//generates random numbers between 1 - 9
function randomNumber(value){
    var rand = Math.floor(Math.random() * value)+1;
    return rand;
}

//locates the div
function getDiv1(){ allNumbers[0].innerHTML = randomNumber(9); }
function getDiv2(){ allNumbers[1].innerHTML = randomNumber(9); }
function getDiv3(){ allNumbers[2].innerHTML = randomNumber(9); }

function callAll(){
    getDiv1();
    getDiv2();
    getDiv3();
}

//matches found
function found(flag){
    if(flag){
        matchesfound.innerHTML = "Matches found";
    }
    else{
        matchesfound.innerHTML = "no matches found";
    }
}

//function that matches 
function matchingNumbers(){
    for(var i = 0 ; i < allNumbers.length ; i++){
        for(var j = 0 ; j < allNumbers.length ; j++){
            if(i == j){

            }
            else{
                if(allNumbers[i].innerHTML === allNumbers[j].innerHTML){
                    allNumbers[i].classList.add("same");
                    flag = true;
                }
            }
        }
    }
}

//calling the function to write to the div
callAll();
matchingNumbers();
found(flag);