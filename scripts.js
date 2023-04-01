window.onload = function() {


    var button = document.getElementById("startbutton");
button.addEventListener("click", toggleDivs);




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
    game.classList.toggle("fade");
  }