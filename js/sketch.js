let toggleOutline = false;
let toggleColor = false;
let msgOnce = false;

function randomColor() {
	return Math.floor(Math.random() * 255);
}

function colorToggle() {
	toggleColor = !(toggleColor);

	if (msgOnce === false) {
		msgOnce = true;
		colorMsg();
	}

	if (toggleColor === true) {
		document.querySelector(".btn-color").style.backgroundColor = "#18a041";
	}
	else {
		document.querySelector(".btn-color").style.backgroundColor = "#4b07ba";
	}

}

function colorMsg() {
	alert("Create a new grid to use colored squares when the button is on!");
}

function createGrid() {

	// Clear old grid
	let container = document.querySelector("#container");
	while (container.firstChild) {
	   container.removeChild(container.firstChild);
	}

	let count = prompt("How many squares do you want for each grid side?");

	if (count > 100) {
		alert("This grid size is too big, try something smaller.")
		return;
	}

	let squareSize = (500 / count);

	for (let i = 0; i < count; i++) {
		for (let j = 0; j < count; j++) {
			const divElem = document.createElement("div");
			divElem.classList.add("square");
			divElem.style.width = squareSize + "px";
			divElem.style.height = squareSize + "px";
			if (toggleOutline === true) {
				divElem.classList.add("outlined");
			}
			if (toggleColor === true) {
				divElem.addEventListener("mouseenter", function() {
					divElem.style.backgroundColor = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"; 
				}, {once : true}); // Use {once : true} to trigger the event only once
			}
			else {
				divElem.addEventListener("mouseenter", function() {
					divElem.style.backgroundColor = "black";
				}, {once : true}); // Use {once : true} to trigger the event only once
			}
			container.appendChild(divElem);
		}
	}

}

function outlineToggle() {
	toggleOutline = !(toggleOutline);
	// Remember that querySelectorAll returns a NodeList, not array: forEach won't work
	let allSquares = Array.from(document.querySelectorAll(".square"));

	if (toggleOutline === true) {
		document.querySelector(".btn-outline").style.backgroundColor = "#18a041";
		allSquares.forEach((squareElem) => {
			squareElem.classList.add("outlined");
		});
	}
	else {
		document.querySelector(".btn-outline").style.backgroundColor = "#4b07ba";
		allSquares.forEach((squareElem) => {
			squareElem.classList.remove("outlined");
		});
	}
}