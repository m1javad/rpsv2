window.onload = function() {

var button = document.getElementById("startbutton");
button.addEventListener("click", HideStartShowGame);


var button = document.getElementById("test");
button.addEventListener("click", doSCLanimaton);

    
  
  





/*hands animation*/

function doRLanimaton(){
    var rock = document.getElementById("RL");
    rock.classList.add("rockleftIN");
    setTimeout(() => {
        rock.classList.add("rockleftOUT");
       }, 1000);
}

function doPLanimaton(){
    var paper = document.getElementById("PL");
    paper.classList.add("paperleftIN");
    setTimeout(() => {
        paper.classList.add("paperleftOUT");
       }, 1000);
}

function doSCLanimaton(){
    var scissor = document.getElementById("SCL");
    scissor.classList.add("scissorleftIN");
    setTimeout(() => {
        scissor.classList.add("scissorleftOUT");
       }, 1000);
}





















function toggleDivss() {
    var start = document.getElementById("StartPage");
    var game = document.getElementById("GamePage");
    StartPage.style.display = "none";
    GamePage.style.display = "block";
  }
  function toggleDivs() {
    var start = document.getElementById("StartPage");
    var game = document.getElementById("GamePage");
    start.classList.toggle("fade");
  }
  function hidestart(){
    var start = document.getElementById("StartPage");
    start.classList.toggle("fade");
    setTimeout(() => {
     start.classList.toggle("gone");
    }, 2000);
  }
  function showgame(){
    var game = document.getElementById("GamePage");
    game.classList.toggle("show");

  }
function HideStartShowGame(){
    hidestart();
    showgame();
}
























};