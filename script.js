var row1 = document.querySelectorAll(".row1");
var row2 =document.querySelectorAll(".row2");
var row3 =document.querySelectorAll(".row3");
var columns = document.querySelectorAll(".columns");
var matchesfound =document.querySelectorAll(".matchesfound");
var randomiseBtn = document.querySelector(".randomiseBtn");
var flag = false;
var numbFound ;
var countRows =0;

randomiseBtn.addEventListener('click',main);

//generates random numbers between value
function randomNumber(value){
    var rand = Math.floor(Math.random() * value)+1;
    return rand;
}

//locates the div
// function getDiv1(){ row1[0].innerHTML = randomNumber(9); }
// function getDiv2(){ row1[1].innerHTML = randomNumber(9); }
// function getDiv3(){ row1[2].innerHTML = randomNumber(9); }


// function callAll(){
//     getDiv1();
//     getDiv2();
//     getDiv3();
// }

function generateRandomNumbers(rowRandomNumbers,max){
    for(var i = 0 ; i < rowRandomNumbers.length ; i++){
        rowRandomNumbers[i].innerHTML = randomNumber(max);
    }
}

//matches found
function found(flag, numbFound, at){
    if(flag){
        matchesfound[at].innerHTML = "Row "+(at+1)+" Match number: "+ numbFound;
    }
    else{
        matchesfound[at].innerHTML = "no matches found";
    }
}

//function that matches 
function matchingNumbers(rowChecked){
    for(var i = 0 ; i < rowChecked.length ; i++){
        for(var j = 0 ; j < rowChecked.length ; j++){
            if(i == j){

            }
            else{
                if(rowChecked[i].innerHTML === rowChecked[j].innerHTML){
                    rowChecked[i].classList.add("same");
                    flag = true;
                    numbFound = rowChecked[i].innerHTML;
                }
            }
        }
    }
    countRows ++;
}

function removeColour(){
    for(var i = 0 ; i < columns.length ; i ++){
        columns[i].classList.remove("same");
    }
}

function main(){
    flag = false;
    removeColour();
    //calling the function to write to the div
    generateRandomNumbers(row1,20);
    generateRandomNumbers(row2,20);
    generateRandomNumbers(row3,20);
    matchingNumbers(row1);
    found(flag, numbFound, 0);
    flag = false;
    matchingNumbers(row2);
    found(flag, numbFound, 1);
    flag = false;
    matchingNumbers(row3);
    found(flag, numbFound, 2);
}

main();
