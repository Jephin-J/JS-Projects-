var randomNumber = Math.floor(Math.random()*6)+1;
var randomDiceImage ="assets/"+"dice"+randomNumber+".png";
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 ="assets/"+"dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage );  
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage1 );  


if (randomNumber > randomNumber1){
    document.querySelector("h1").innerHTML="Player One wins!!";

}
else if( randomNumber < randomNumber1){
    document.querySelector("h1").innerHTML="Player Two wins!!";
}
else{
    document.querySelector("h1").innerHTML= "It is a TIE!!";
}