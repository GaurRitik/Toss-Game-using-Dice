
var n = Math.random();
n = Math.floor(n * 6) + 1;

var src1 = "dice" + n + ".png";

document.querySelectorAll("img")[0].setAttribute("src", src1);

var n2=Math.floor(Math.random()*6)+1;

var src2="dice"+n2+".png";

document.querySelectorAll("img")[1].setAttribute("src",src2);

if(n>n2)
{
  document.querySelector("h1").innerHTML="Player 1......WINS"
}

else if (n<n2)
{
  document.querySelector("h1").innerHTML="Player 2......WINS"

}

else
{
  document.querySelector("h1").innerHTML="DRAW......Try Again"
}
