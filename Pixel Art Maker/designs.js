const CANVAS_SIZE = 600; // the size of 'canvas-border' is defined in styles.css
const CELL_COLOR = '#f0f2f5';

/* ---------------- */
// head to line 212 for continuation

/* ---------------- */
/* Event generation on button click */

const RESET_BUTTON = document.getElementById('reset');
RESET_BUTTON.addEventListener('click', resetGrid); // line 186

const COLOR_PICKER_BUTTON = document.getElementById('color-picker');
COLOR_PICKER_BUTTON.addEventListener('click', eventHandler); // line 33

const MOUSE_CLICK_BUTTON = document.getElementById('click-effect');
MOUSE_CLICK_BUTTON.addEventListener('click', eventHandler); // line 35

const MOUSE_CLICK_RANDOM_BUTTON = document.getElementById('random-color');
MOUSE_CLICK_RANDOM_BUTTON.addEventListener('click', eventHandler); // line 37

const ERASE_BUTTON = document.getElementById('erase');
ERASE_BUTTON.addEventListener('click', eventHandler); // line 39

const MOUSE_HOVER_BUTTON = document.getElementById('mouse-hover');
MOUSE_HOVER_BUTTON.addEventListener('click', eventHandler); // line 41

const MOUSE_HOVER_RANDOM_BUTTON = document.getElementById('mouse-hover-random-color');
MOUSE_HOVER_RANDOM_BUTTON.addEventListener('click', eventHandler); // line 43

/* Event handler for button click */
function eventHandler(e){
	if (e.target == COLOR_PICKER_BUTTON){
		eventManager('colorPicked');
	} else if (e.target == MOUSE_CLICK_BUTTON){
		eventManager('colorPicked');
	} else if (e.target == MOUSE_CLICK_RANDOM_BUTTON){
		eventManager('randomColor');
	} else if (e.target == ERASE_BUTTON){
		eventManager('eraser');
	} else if (e.target == MOUSE_HOVER_BUTTON){
		eventManager('mouseHover');
	} else if (e.target == MOUSE_HOVER_RANDOM_BUTTON){
		eventManager('mouseHoverRandom');
	}
}


/* ---------------- */
/* generate random number between 0 and 255,
this number will later represent an RGB value. */
function randomNumber(){
	return Math.floor(Math.random() * 256);
}


/* canvas color effects */
const EFFECTS = {
	color: function(cell){
		const SELECTED_COLOR = COLOR_PICKER_BUTTON.value;
		console.log(SELECTED_COLOR);
		cell.style.backgroundColor = SELECTED_COLOR;
		cell.style.border = "thin solid white";
	},

	randomColor: function(cell){
		const R_COLOR = randomNumber(); // line 52
  	const G_COLOR = randomNumber();
  	const B_COLOR = randomNumber();
		cell.style.backgroundColor = `rgb(${R_COLOR},${G_COLOR},${B_COLOR})`;
		cell.style.border = "thin solid white";
	},

	erase: function(cell){
		cell.style.backgroundColor = CELL_COLOR;
		cell.style.border = "thin solid grey";
	}
};


/* Function to handle selectedColor event */
function colorEventHandler(e) {
	if (e.target.matches('.cell')){
		if (e.type == 'click'){
			EFFECTS.color(e.target); // line 59
		}else if (e.type == 'mouseover'){
			EFFECTS.color(e.target);
		}
	}
}


/* Function to handle randomColor event */
function hoverEventHandler(e) {
	if (e.target.matches('.cell')){
		if (e.type == 'click'){
			EFFECTS.randomColor(e.target); // line 66
		}else if (e.type == 'mouseover'){
			EFFECTS.randomColor(e.target);
		}
	}
}


/* Function to handle eraseColor event */
function eraseEventHandler(e) {
	if (e.target.matches('.cell')){
		if (e.type == 'click'){
			EFFECTS.erase(e.target); // line 74
		}
	}
}


/* ---------------- */
/* Multiple events manager (add/remove) */
function eventManager(currentEvent){
	let CANVAS = document.querySelector('#canvas-ID');

	if (CANVAS != null){
		if (currentEvent == 'mouseHover'){
			CANVAS.removeEventListener('click', colorEventHandler); // line 82
			CANVAS.removeEventListener('click', hoverEventHandler); // line 94
			CANVAS.removeEventListener('click', eraseEventHandler); // line 106
			CANVAS.removeEventListener('mouseover', hoverEventHandler);
			CANVAS.addEventListener('mouseover', colorEventHandler);
		} else if (currentEvent == 'colorPicked'){
			CANVAS.removeEventListener('click', eraseEventHandler);
			CANVAS.removeEventListener('click', hoverEventHandler);
			CANVAS.removeEventListener('mouseover', hoverEventHandler);
			CANVAS.removeEventListener('mouseover', colorEventHandler);
			CANVAS.addEventListener('click', colorEventHandler);
		} else if (currentEvent == 'eraser'){
			CANVAS.removeEventListener('click', colorEventHandler);
			CANVAS.removeEventListener('click', hoverEventHandler);
			CANVAS.removeEventListener('mouseover', hoverEventHandler);
			CANVAS.removeEventListener('mouseover', colorEventHandler);
			CANVAS.addEventListener('click', eraseEventHandler);
		} else if (currentEvent == 'randomColor'){
			CANVAS.removeEventListener('click', colorEventHandler);
			CANVAS.removeEventListener('click', eraseEventHandler);
			CANVAS.removeEventListener('mouseover', hoverEventHandler);
			CANVAS.removeEventListener('mouseover', colorEventHandler);
			CANVAS.addEventListener('click', hoverEventHandler);
		} else if (currentEvent == 'mouseHoverRandom'){
			CANVAS.removeEventListener('click', colorEventHandler);
			CANVAS.removeEventListener('click', hoverEventHandler);
			CANVAS.removeEventListener('click', eraseEventHandler);
			CANVAS.removeEventListener('mouseover', colorEventHandler);
			CANVAS.addEventListener('mouseover', hoverEventHandler);
		}
	}
}


/* ---------------- */
/* Create CANVAS */
function makeGrid(){
	const CONTAINER = document.getElementById('canvas');
	const CANVAS = document.createElement('div');
	CANVAS.classList.add('canvas'); // add the .canvas class to the canvas
  CANVAS.setAttribute('id','canvas-ID'); // add the .canvas id to the canvas div
	CONTAINER.appendChild(CANVAS); // add the canvas div to the container div
  const GRID_HEIGHT = document.getElementById("input-height").value;
  const GRID_WIDTH = document.getElementById("input-width").value;

	for (let i=0; i<(GRID_HEIGHT * GRID_WIDTH); i++){
		/* define the height and width of each individual cell,
		based on the number of cells and canvasSize. */
		const CELL_HEIGHT = CANVAS_SIZE / GRID_HEIGHT;
    const CELL_WIDTH = CANVAS_SIZE / GRID_WIDTH;
		const CELL = document.createElement('div');
		// create element cell and set the cell height and width in px
		CELL.style.height = CELL_HEIGHT.toString() + 'px';
		CELL.style.width = CELL_WIDTH.toString() + 'px';
		// extra code to check cell height and width in cosole
		// console.log('cell height and width are:');
		// console.log(cell.style.height);
    // console.log(cell.style.width);
		CELL.classList.add('cell'); // add the .cell class to the cell div
		CANVAS.appendChild(CELL); // add the cell div to the canvas div
	}
}


/* reset the canvas to initial style */
function resetGrid(){
	let CELL = document.querySelectorAll('.cell');
	CELL.forEach(CELL => {
		CELL.style.backgroundColor = CELL_COLOR;
    CELL.style.border = "thin solid grey";
	});
	// remove all events
	let CANVAS = document.querySelector('#canvas-ID');
	CANVAS.removeEventListener('click', colorEventHandler);
	CANVAS.removeEventListener('click', hoverEventHandler);
	CANVAS.removeEventListener('click', eraseEventHandler);
	CANVAS.removeEventListener('mouseover', colorEventHandler);
	CANVAS.removeEventListener('mouseover', hoverEventHandler);
}


/* delete the canvas */
function deleteGrid(){
  const CONTAINER = document.getElementById('canvas');
	while (CONTAINER.firstChild) {
			CONTAINER.firstChild.remove();
		}
}


/* ---------------- */
/* initialize the canvas creation when DOM is loaded annd ready */
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
		// create CANVAS after CANVAS size is picked
		const SUBMIT_BUTTON = document.querySelector('#size-picker');
		SUBMIT_BUTTON.addEventListener('click', function(event) {
		  console.log('hello');
			console.log('Creating new CANVAS');
			deleteGrid(); // line 204
		  makeGrid(); // line 158
			event.preventDefault();
		});
});
