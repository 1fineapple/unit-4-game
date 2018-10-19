
$(document).ready(function(){

    
var randomNum = 0;
randomNum = Math.floor(Math.random()*(120-19+1)+19);
$("#rando-number").html(randomNum);



var jewelsrandomNum= 0;
var totaltally = 0;
var totallosses= 0;
var totalwins = 0;


function jewelsButton(){
jewelsrandomNum= Math.floor(Math.random()*(12-1+1)+1);
$("#red").val(jewelsrandomNum);

jewelsrandomNum= Math.floor(Math.random()*(12-1+1)+1);
$("#blue").val(jewelsrandomNum);

jewelsrandomNum= Math.floor(Math.random()*(12-1+1)+1);
$("#green").val(jewelsrandomNum);

jewelsrandomNum= Math.floor(Math.random()*(12-1+1)+1);
$("#yellow").val(jewelsrandomNum);

}

jewelsButton();




$("button").click(function(){ 
    totaltally = Number(totaltally) + Number($(this).val());  
  $(".userscore").text(totaltally);

  if (totaltally > randomNum)  {
    totaltally= 0;
    $(".userscore").text(totaltally);
    totallosses++; 
    $("#losses").html("losses:  " + totallosses);
    jewelsButton();
    randomNum = Math.floor(Math.random()*(120-19+1)+19);
    $("#rando-number").html(randomNum);

}

if (totaltally === randomNum)  {
    totaltally = 0; 
    $(".userscore").text("wins:  " + totaltally);
    totalwins++; 
    $("#wins").html(totalwins);
    jewelsButton();
    randomNum = Math.floor(Math.random()*(120-19+1)+19);
    $("#rando-number").html(randomNum);
}
  });







});
