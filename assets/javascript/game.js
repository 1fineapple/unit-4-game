
$(document).ready(function(){


var crystaltotalValue =[$("#red"),$("#blue"), $("green"),$("yellow")];
var red, blue, green, yellow;
var image = ["assets/images/redjewel","assets/images/bluejewel","assets/images/greenjewel","assets/images/yellowjewel"]

var randomNumber = $("#rando-number");
var wins = $("#wins");
var losses = $("#losses");
var totalScore;
var gameDone;


reset();


function reset() {

  gameDone = false;
  crystaltotalValue = [];
  guessCount = 0;
  totalScore = 0;
//   wins = 0 (addition from past games);
// losses= do you just leave these out of the reset?
  

var randomNumber = Math.floor(Math.random()*120)+19;
console.log(randomNumber)


red = Math.floor(Math.random()*12)+1;
blue = Math.floor(Math.random()*12)+1;
green = Math.floor(Math.random()*12)+1;
yellow = Math.floor(Math.random()*12)+1;
}

// make a for loop here?

$("#red").on("click", function(){
    totalScore += red;
    console.log(red);
    console.log(totalScore);
});

$("#blue").on("click", function(){
    totalScore += blue;
    console.log(blue);
    console.log(totalScore);
});

$("#green").on("click", function(){
    totalScore += green;
    console.log(green)
    console.log(totalScore);
});

$("#yellow").on("click", function(){
    totalScore += yellow;
    console.log(yellow)
    console.log(totalScore);
    checkIfGameOver();
});

})


function checkIfGameOver() {

    if (totalScore = randomValue)  {
        return false; wins ++;
        $(".wins")
        .empty()
        .append(wins);
    }
    
    if (totalScore > randomNumber) {
        return  false; losses++;
        $(".losses")
        .empty()
        .append(losses);
    
    }

    // else (totalScore < randomValue); {
    //     return true;
    // }

    // then
    resetGame();
}
