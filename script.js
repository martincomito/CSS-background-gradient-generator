
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");


function generateColor() {
    var pos1 = Math.floor((Math.random() * 256));
    var pos2 = Math.floor((Math.random() * 256));
    var pos3 = Math.floor((Math.random() * 256));

	var rgbColor = pos1 + "," + pos2 + "," + pos3; 

    return  rgbColor;

}


function randomBackground() {
	
	body.style.background = 
	"linear-gradient(to right, rgb(" 
	+ generateColor()
	+ "), rgb(" 
	+ generateColor() 
	+ "))";

	css.textContent = body.style.background + ";"

	

}

function setGradient(){
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";"
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomBackground);
