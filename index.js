var mathRandomNum1=Math.floor(Math.random()*6)+1;
var imageSrc1="images/" + "dice"+mathRandomNum1+".png";
var finalSrc=document.querySelectorAll("img");
finalSrc[0].setAttribute("src",imageSrc1);

var mathRandomNum2=Math.floor(Math.random()*6)+1;
var imageSrc2="images/" + "dice"+mathRandomNum2+".png";
finalSrc[1].setAttribute("src",imageSrc2);

if(mathRandomNum1>mathRandomNum2)
{
    console.log(document.querySelector('h1').innerHTML="player 1 wins");

}
else if(mathRandomNum2>mathRandomNum1)
{
    console.log(document.querySelector('h1').innerHTML="player 2 wins");
    
}
else {
    console.log(document.querySelector('h1').innerHTML="match Draw");
}
