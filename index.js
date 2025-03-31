function randomNumberGenerator(){
    var number=Math.random();
    number=Math.floor(number*6);
    return (number+1);
}
   
var randomNumber1=randomNumberGenerator();
var randomNumber2=randomNumberGenerator();
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);
    

function playerWon(){
    if (randomNumber1===randomNumber2){
        document.querySelector(".playerWon").innerHTML="<em>Match❤️Drawn</em>";
    }
    else if (randomNumber1>randomNumber2){
        document.querySelector(".playerWon").innerHTML="<em>❤️Player1 Won</em>";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector(".playerWon").innerHTML="<em>Player2 Won❤️</em>";
    }
    
}
playerWon();


