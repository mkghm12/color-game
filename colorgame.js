var numofsquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay =document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbtn= document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	reset();
	setupModeButtons();
	setupsquares();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numofsquares = 3: numofsquares=6;
			reset();
		});
	}
}

function setupsquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click",function() {
			//alert(this.style.background);
			var clickColor = this.style.background;
			if(clickColor === pickedColor){
				messageDisplay.textContent ="Correct!";
				resetbtn.textContent="Play Again?";
				changeColors(clickColor);
				h1.style.background = clickColor;
			}else{
				this.style.background="#242424";
				messageDisplay.textContent= "Try Again";
			}
		});
	}
}


function reset() {
	colors=generateColor(numofsquares);
	pickedColor=pickcolor();
	colorDisplay.textContent=pickedColor;
	resetbtn.textContent="New Colors";
	messageDisplay.textContent="";
	for (var i = 0; i <squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background  ="steelblue";
}



resetbtn.addEventListener("click",function() {
	reset();
});


function changeColors(color){
	for (var i = 0; i <squares.length; i++) {
	squares[i].style.background = color;
	}
}

function pickcolor() {
	var random =Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateColor(num) {
	 var arr = [];
	 for (var i = 0; i < num; i++) {
	 		arr.push(randomColor());
		}
	 return arr;
}

function randomColor() {
	//pick red,green,blue from 0-255
	var R =Math.floor(Math.random()*256);
	var G =Math.floor(Math.random()*256);
	var B =Math.floor(Math.random()*256);
	var string = "rgb(" + R + ", " + G + ", " + B + ")" ;
	return string;
}
