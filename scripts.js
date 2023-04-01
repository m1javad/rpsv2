window.onload = function() {


    var button = document.getElementById("startbutton");
button.addEventListener("click", toggleDivs);




  };  


























function toggleDivs() {
    var start = document.getElementById("StartPage");
    var game = document.getElementById("GamePage");
    StartPage.style.display = "none";
    GamePage.style.display = "block";
  }
