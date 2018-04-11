const css = document.querySelector(".current-background");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const rcolor = document.getElementById("random");


const setGradient = () => {
	body.style.background = `linear-gradient(to right, 
	${color1.value}, ${color2.value})`;

	css.textContent = `${body.style.background}`;
};

const generateColor = () => {
	const pos1 = Math.floor((Math.random() * 256));
	const pos2 = Math.floor((Math.random() * 256));
	const pos3 = Math.floor((Math.random() * 256));
	const rgbColor = `${pos1, pos2, pos3}`; 

// ---Converting RGB into HEX to update color value attribute with hex code---
	hexcolor = "#" + ((1 << 24) + (pos1 << 16) + (pos2 << 8) + pos3).toString(16).slice(1);
};

// Setting initial inputs color
color1.defaultValue = '#C00000';
color2.defaultValue = '#F7B32D'; 

// Animates the gradient code
const animateText = () => {css.classList.add('animate')};

// This will update "color1" value attribute--
const colorPick1 = () => { generateColor(); color1.value = hexcolor; };
// This will update "color2" value attribute--
const colorPick2 = () => { generateColor(); color2.value = hexcolor; };

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// ---First update both the colors value attribute and then apply those colors---
rcolor.addEventListener("click", function() {
	colorPick1();
	colorPick2();
	setGradient();
	animateText();

});
