var player1 = 0
var player2 = 0
var pcmove
var UserInput
var massage
var button1
var button2
var button3

    window.onload = (event) => {
      massage="choose your warrior"
      document.getElementById("roundResult").textContent = `${massage}`;
      
    };


    
	

	
		



/*start page hide func*/

function USERINPUT1(){
  buttondis()
  UserInput=1
  game()
   }
   function USERINPUT2(){
    buttondis()
   UserInput=2
   game()
  }
   function USERINPUT3(){
    buttondis()
    UserInput=3
    game()}



function main(){
    /*     button1 = document.getElementById("userrock");
         button2 = document.getElementById("userpaper");
         button3 = document.getElementById("userscissor");*/

         for (let index = 0; index < Infinity; index++) {
          massage="choose your warrior"
          document.getElementById("roundResult").textContent = `${massage}`;
          UserInput=null
               
               setTimeout(function(){if(UserInput){
                game()
                }},2000)
           

          
         }
		
		

}




/*rps buttons disbaled for 1.5s func*/
 function buttondis(){
  document.getElementById("USERR").onclick = null;
      setTimeout(function() {
        document.getElementById("USERR").onclick = USERINPUT1;
        }, 1500);
  document.getElementById("USERP").onclick = null;
      setTimeout(function() {
        document.getElementById("USERP").onclick = USERINPUT2;
        }, 1500);
  document.getElementById("USERS").onclick = null;
      setTimeout(function() {
        document.getElementById("USERS").onclick = USERINPUT3;
        }, 1500);
};




    


 
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


function doRRanimaton(){
    var rock = document.getElementById("RR");
    rock.classList.remove("rockrightOUT");
    void rock.offsetWidth;
    rock.classList.add("rockrightIN");
    setTimeout(() => {
        rock.classList.add("rockrightOUT");
       }, 1000);
       
}

function doPRanimaton(){
    var paper = document.getElementById("PR");
    paper.classList.remove("paperrightOUT");
    void paper.offsetWidth;
    paper.classList.add("paperrightIN");
    setTimeout(() => {
        paper.classList.add("paperrightOUT");
       }, 1000);
}

function doSCRanimaton(){
    var scissor = document.getElementById("SCR");
    scissor.classList.remove("scissorrightOUT");
    void scissor.offsetWidth;
    scissor.classList.add("scissorrightIN");
    setTimeout(() => {
        scissor.classList.add("scissorrightOUT");
       }, 1000);
}












/*hide start page func*/
  function hidestart(){
    var start = document.getElementById("StartPage");
    start.classList.toggle("fade");
    setTimeout(() => {
     start.classList.toggle("gone");
    }, 2000);
    }



  /*hide start page func*/
  function showgame(){
    var game = document.getElementById("GamePage");
    game.classList.toggle("show");

    }



  /* function for doing hide start pgae and showing game page together*/
function HideStartShowGame(){

    hidestart();
    showgame();

}








/* actual rps codes*/

function pc_move() {
	let res =  Math.floor(Math.random() * 3 + 1)
	return res
}
function analyze(PcC , UserC){
    if((UserC)&&(UserC>0)&&(UserC<4)){
        if(((UserC===1)&&(PcC===3))||((UserC===2)&&(PcC===1))||((UserC===3)&&(PcC===2))){
            return 1
        }
        else if(UserC==PcC){
            return 3
        }
        else{return 2}
    }
    else {return 0   }
}
function ShowResult(GR){
    if((GR===1)){
	    	player1++
        document.getElementById("PlayerScore").textContent = `${player1}`;
        massage= "one point for player1"
        document.getElementById("roundResult").textContent = `${massage}`;    }
    else if((GR===2)){
		player2++
    document.getElementById("Pcscore").textContent = `${player2}`;
		massage= "one point for player2"
    document.getElementById("roundResult").textContent = `${massage}`;    }
    else if((GR===3)){
        massage= `It's a tie! Try again.`
        document.getElementById("roundResult").textContent = `${massage}`;    }}


    function handsrunr(x){
      if (x===1){
				doRRanimaton();
			} 
			else if (x===2){
				doPRanimaton();
			} 
			else if (x===3){
				doSCRanimaton();
			} 
    }
    function handsrunl(x){
      if (x===1){
				doRLanimaton();
			} 
			else if (x===2){
				doPLanimaton();
			} 
			else if (x===3){
				doSCLanimaton();
			} 
    }
function restartGame(){

var button = document.createElement("button");
button.innerHTML = "restart the game";
document.getElementById("roundreS").appendChild(button);
button.classList.add("buttonstyle");
button.onclick = function(){location.reload();}
document.getElementById("USERR").style.display = "none";
document.getElementById("USERP").style.display = "none";
document.getElementById("USERS").style.display = "none";





}



function game(){

	    pcmove =pc_move();
	    handsrunr(pcmove);
      handsrunl(UserInput);
			var Result = analyze(pcmove,UserInput);
       ShowResult(Result);
       setTimeout(function(){if(player1===5){
          massage=`You won \n You ${player1}`+" "+  `PC ${player2}`;
          document.getElementById("roundResult").textContent = `${massage}`;
          restartGame();
        }
        else if(player2===5){
          massage=`You lost \n You ${player1}`+" "+  `PC ${player2}`;
          document.getElementById("roundResult").textContent = `${massage}`;
          restartGame();

        }},1000)



       }
	


/*
if(player1===5){
	massage=`You won`+ `\n You ${player1} +"  "+ PC ${player2}`;
		 }
 else if(player2===5){
	 massage=`You lost`+ `\n You ${player1} +"  "+ PC ${player2}`;
 }
 else{
	 massage="choose your warrior"*/











 