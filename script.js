var allNumbers = document.querySelectorAll(".columns");
var matchesfound =document.querySelector(".matchesfound");
var randomiseBtn = document.querySelector(".randomiseBtn");
var flag = false;
var numbFound ;
var match1 = allNumbers[0];
var match2 = allNumbers[1];


randomiseBtn.addEventListener('click',main);

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
function found(flag, numbFound){
    if(flag){
        matchesfound.innerHTML = "Matches found at: "+ numbFound;
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
                    numbFound = allNumbers[i].innerHTML
                    match1=allNumbers[i];
                    match2 = allNumbers[j];
                }
            }
        }
    }
}

function removeColour(match1, match2){
    match1.classList.remove("same");
    match2.classList.remove("same");
}

function main(){
    flag = false;
    removeColour(match1, match2);
    //calling the function to write to the div
    callAll();
    matchingNumbers();
    found(flag, numbFound);
}

main();
