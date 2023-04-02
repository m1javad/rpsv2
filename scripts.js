window.onload = function() {


    var button = document.getElementById("startbutton");
button.addEventListener("click", HideStartShowGame);




  };  


























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