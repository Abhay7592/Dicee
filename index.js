// writing javascript for a web app that has 2 payers and 2 dice and every time you refresh it will change and will tell who won
// the winning player will be the highest scoring player
//For palyer 1
var randomNumber1 = Math.floor(Math.random() *6)+1;// getting a randome number between 1 and 6
var randomDiceImage = "dice"+randomNumber1 +".png";//range dice1.png to dice6.png
var randomeImageSource = "images/" + randomDiceImage; //images/dice1 to images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomeImageSource);
//for player 2
var randomNumber2 = Math.floor(Math.random() *6)+1;
var randomDiceImage2 = "dice"+randomNumber2 +".png";
var randomeImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src",randomeImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 wins!!";

} else if(randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = "player 2 wins!!";
}
else{
  document.querySelector("h1").innerHTML = "Its a tie";

}
