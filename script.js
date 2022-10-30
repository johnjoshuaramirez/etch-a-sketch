const container = document.querySelector(".container");
const slider = document.querySelector('input[type="range"]');
const size = document.querySelector(".size");
const buttons = document.querySelectorAll("button");
const color = document.querySelector(".color");
const colorPicker = document.querySelector('.color input[type="color"]');
const bgColor = document.querySelector(".bg-color");
const bgColorPicker = document.querySelector('.bg-color input[type="color"]');
const rainbow = document.querySelector(".rainbow");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const toggleGrid = document.querySelector(".toggle-grid");

const choices = [color, rainbow, eraser];
choices.forEach(choice => {
	choice.addEventListener("click", () => {
		choices.forEach(choice => {
			choice.classList.remove("current");
		});
		choice.classList.add("current");
	});
});

window.addEventListener("DOMContentLoaded", () => {
	for (let i = 0; i < slider.value; i++) {
		const row = document.createElement("div");
		row.className = "row";
		container.appendChild(row);

		for (let j = 0; j < slider.value; j++) {
			const column = document.createElement("div");
			column.className = "column";
			row.appendChild(column);
			column.addEventListener("mouseover", () => {
				column.classList.add("selected");
				if (eraser.classList.contains("current")) {
					column.style.backgroundColor = bgColorPicker.value;
					column.classList.remove("selected");
				} else if (color.classList.contains("current")) {
					column.style.backgroundColor = colorPicker.value;
				} else if (rainbow.classList.contains("current")) {
					column.style.backgroundColor = randomColor();
				}
			});
		}
	}
});

slider.addEventListener("input", () => {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	size.innerText = `${slider.value} × ${slider.value}`;

	for (let i = 0; i < slider.value; i++) {
		const row = document.createElement("div");
		row.className = "row";
		container.appendChild(row);

		for (let j = 0; j < slider.value; j++) {
			const column = document.createElement("div");
			column.className = "column";
			row.appendChild(column);
			column.addEventListener("mouseover", () => {
				column.classList.add("selected");
				if (eraser.classList.contains("current")) {
					column.style.backgroundColor = bgColorPicker.value;
					column.classList.remove("selected");
				} else if (color.classList.contains("current")) {
					column.style.backgroundColor = colorPicker.value;
				} else if (rainbow.classList.contains("current")) {
					column.style.backgroundColor = randomColor();
				}
			});
		}
	}

   toggleGrid.removeAttribute("hide");
	toggleGrid.innerText = "Hide Grid";

	const columns = document.querySelectorAll(".column");
	columns.forEach(column => {
		column.classList.remove("hidden-grid");
	});
});

function randomColor() {
	const r = Math.round(Math.random() * 256);
	const g = Math.round(Math.random() * 256);
	const b = Math.round(Math.random() * 256);
	const rgb = `rgb(${r}, ${g}, ${b})`;
	return rgb;
}

buttons.forEach(button => {
	button.addEventListener("click", () => {
		buttons.forEach(button => {
			button.classList.remove("active");
		});
		button.classList.add("active");
	});
});

bgColorPicker.addEventListener("input", () => {
	container.style.backgroundColor = bgColorPicker.value;
	const columns = document.querySelectorAll(".column");
	columns.forEach(column => {
		if (column.classList.contains("selected") === false) {
			column.style.backgroundColor = bgColorPicker.value;
		}
	});
});

clear.addEventListener("click", () => {
	const columns = document.querySelectorAll(".column");
	columns.forEach(column => {
		if (column.classList.contains("selected")) {
			column.removeAttribute("style");
			column.classList.remove("selected");
		}
	});
});

toggleGrid.addEventListener("click", () => {
	toggleGrid.toggleAttribute("hide");

	if (toggleGrid.hasAttribute("hide")) {
		toggleGrid.innerText = "Show Grid";
	} else {
		toggleGrid.innerText = "Hide Grid";
	}

	const columns = document.querySelectorAll(".column");
	columns.forEach(column => {
		column.classList.toggle("hidden-grid");
	});
});

// Bugs
// clear erases including background color
// background not adding once clear is clicked

// only clear column that is selected
// only change background that is not selected
