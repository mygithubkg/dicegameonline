var randomnumber1 = Math.floor(Math.random() * 7 );
var randomnumber2 = Math.floor(Math.random() * 7 );
document.querySelector(".img1").setAttribute("src","./images/dice"+randomnumber1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomnumber2+".png");

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}




// document.querySelector(".img2").src = "./images/dice"+randomnumber2+".png"

// alert("The two numbers are "+ randomnumber1 +" & " + randomnumber2)