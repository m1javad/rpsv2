window.onload = function() {

var button = document.getElementById("startbutton");
button.addEventListener("click", function(){

    
    HideStartShowGame()
});


var button1 = document.getElementById("test");
var button2 = document.getElementById("test2");
var button3 = document.getElementById("test3");
button1.addEventListener("click", function(){
    button1.disabled = true;
    setTimeout(function() {
    button1.disabled = false;
  }, 3000);
  button2.disabled = true;
    setTimeout(function() {
    button2.disabled = false;
  }, 3000);
  button3.disabled = true;
    setTimeout(function() {
    button3.disabled = false;
  }, 3000);
    doRLanimaton()
});
button2.addEventListener("click", function(){
    button1.disabled = true;
    setTimeout(function() {
    button1.disabled = false;
  }, 3000);
  button2.disabled = true;
    setTimeout(function() {
    button2.disabled = false;
  }, 3000);
  button3.disabled = true;
    setTimeout(function() {
    button3.disabled = false;
  }, 3000);
 doPLanimaton()



});
button3.addEventListener("click", function(){
    button1.disabled = true;
    setTimeout(function() {
    button1.disabled = false;
  }, 3000);
  button2.disabled = true;
    setTimeout(function() {
    button2.disabled = false;
  }, 3000);
  button3.disabled = true;
    setTimeout(function() {
    button3.disabled = false;
  }, 3000);
 doSCLanimaton()



});


    


  





/*hands animation*/

function doRLanimaton(){
    var rock = document.getElementById("RL");
    rock.classList.remove("rockleftOUT");
    void rock.offsetWidth;
    rock.classList.add("rockleftIN");
    setTimeout(() => {
        rock.classList.add("rockleftOUT");
       }, 1000);
       
}

function doPLanimaton(){
    var paper = document.getElementById("PL");
    paper.classList.remove("paperleftOUT");
    void paper.offsetWidth;
    paper.classList.add("paperleftIN");
    setTimeout(() => {
        paper.classList.add("paperleftOUT");
       }, 1000);
}

function doSCLanimaton(){
    var scissor = document.getElementById("SCL");
    scissor.classList.remove("scissorleftOUT");
    void scissor.offsetWidth;
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