/* My process 
    
    // player one

      var n = Math.floor(Math.random() * 6) + 1; //random number between 1 and 6
      function playerOneDice() {

        if (n === 1) {
          document.querySelector(".img1").setAttribute("src","images/dice1.png");
        }
        else if (n === 2) {
          document.querySelector(".img1").setAttribute("src","images/dice2.png");
        }
        else if (n === 3) {
          document.querySelector(".img1").setAttribute("src","images/dice3.png");
        }
        else if (n === 4) {
          document.querySelector(".img1").setAttribute("src","images/dice4.png");
        }
        else if (n === 5) {
          document.querySelector(".img1").setAttribute("src","images/dice5.png");
        }
        else if (n === 6) {
          document.querySelector(".img1").setAttribute("src","images/dice6.png");
        }
      }
        playerOneDice();

      // player two

      var p = Math.floor(Math.random() * 6) + 1; //random number between 1 and 6
      function playerTwoDice() {
        if (p === 1) {
          document.querySelector(".img2").setAttribute("src","images/dice1.png");
        }
        else if (p === 2) {
          document.querySelector(".img2").setAttribute("src","images/dice2.png");
        }
        else if (p === 3) {
          document.querySelector(".img2").setAttribute("src","images/dice3.png");
        }
        else if (p === 4) {
          document.querySelector(".img2").setAttribute("src","images/dice4.png");
        }
        else if (p === 5) {
          document.querySelector(".img2").setAttribute("src","images/dice5.png");
        }
        else if (p === 6) {
          document.querySelector(".img2").setAttribute("src","images/dice6.png");
        }
      }
        playerTwoDice();
      
      // Checking Logic

      if(n > p){
        document.querySelector("h1").innerHTML = "Player One wins!";
      }
      else if(n === p){
        document.querySelector("h1").innerHTML = "Match Draw!";
      }
      else{
        document.querySelector("h1").innerHTML = "Player Two wins!";
      }  
      */

// Angela's Process

document.querySelector(".click").addEventListener("click", function(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number 1 - 6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // to select image tag

image1.setAttribute("src", randomImageSource1); //to chage the source file

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random number 1 - 6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1]; // to select image tag

image2.setAttribute("src", randomImageSource2); // to change the source file

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player One wins!";
} 
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Match Draw!";
} 
else {
  document.querySelector("h1").innerHTML = "Player Two wins!";
}

})
