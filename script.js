var randomNumber1=Math.floor(Math.random()*6);
var imgArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.querySelector(".img1").setAttribute('src',imgArray[randomNumber1]);

var randomNumber2=Math.floor(Math.random()*6);
document.querySelector(".img2").setAttribute('src',imgArray[randomNumber2]);

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!"
} else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Play 2 Wins! 🚩"
} else {
    document.querySelector("h1").innerHTML="🚩 Draw!! 🚩"
}