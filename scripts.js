var player1 = 0
var player2 = 0
var pcmove
var UserInput
var massage
var button1
var button2
var button3
window.onload=function(){
	var startbutton = document.getElementById("startbutton"); 
    startbutton.addEventListener("click", function(){
    HideStartShowGame()});
}

  



    for (let index = 0; index < Infinity;) {
	if(player1===5){
		massage=`You won`+ `\n You ${player1} +"  "+ PC ${player2}`;
	}
	else if(player2===5){
		massage=`You lost`+ `\n You ${player1} +"  "+ PC ${player2}`;
	}
	else{
	main()

    }}
	

	
		



/*start page hide func*/





function main(){
         button1 = document.getElementById("userrock");
         button2 = document.getElementById("userpaper");
         button3 = document.getElementById("userscissor");
		 massage="choose your warrior"
		 UserInput=null
         button1.addEventListener("click", function(){
	     UserInput=1
	     })
         button2.addEventListener("click", function(){
         UserInput=2
		 })
          button3.addEventListener("click", function(){
      	  UserInput=3
		  if(UserInput){
			game()
		  }
		  else{
			main()
		  }
		

})


}

/*rps buttons disbaled for 1.5s func*/
button1.addEventListener("click", function(){
    button1.disabled = true;
    setTimeout(function() {
    button1.disabled = false;
  }, 1500);
  button2.disabled = true;
    setTimeout(function() {
    button2.disabled = false;
  }, 1500);
  button3.disabled = true;
    setTimeout(function() {
    button3.disabled = false;
  }, 1500);
});
button2.addEventListener("click", function(){
    button1.disabled = true;
    setTimeout(function() {
    button1.disabled = false;
  }, 1500);
  button2.disabled = true;
    setTimeout(function() {
    button2.disabled = false;
  }, 1500);
  button3.disabled = true;
    setTimeout(function() {
    button3.disabled = false;
  }, 1500);
});
button3.addEventListener("click", function(){
    button1.disabled = true;
    setTimeout(function() {
    button1.disabled = false;
  }, 1500);
  button2.disabled = true;
    setTimeout(function() {
    button2.disabled = false;
  }, 1500);
  button3.disabled = true;
    setTimeout(function() {
    button3.disabled = false;
  }, 1500);
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
        massage= "one point for player1"
    }
    else if((GR===2)){
		player2++
		massage= "one point for player2"
    }
    else if((GR===3)){
        massage= `It's a tie! Try again.`
    }}

function game(x){

	        pcmove =pc_move()
			if (pc_move=1){
				doRRanimaton();
			} 
			else if (pc_move=2){
				doPRanimaton();
			} 
			else if (pc_move=3){
				doSCRanimaton();
			} 
			var Result = analyze(pcmove,UserInput);
            ShowResult(Result);
		
	
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











 