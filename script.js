
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
//	Cambiar el estilo de background por el valor de color1 + el que haya en color2:
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	//	Muestra los valores por pantalla
	css.textContent = body.style.background + ";"
}


//	Cuando cambie el valor de color1 
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomBackground);