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
				if (eraser.classList.contains("current")) {
					column.style.backgroundColor = "black";
				} else if (color.classList.contains("current")) {
					column.style.backgroundColor = colorPicker.value;
				} else if (rainbow.classList.contains("current")) {
					column.style.backgroundColor = randomColor();
				}
			});
		}
	}
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
});

clear.addEventListener("click", () => {
	const columns = document.querySelectorAll(".column");
	columns.forEach(column => {
		column.style.backgroundColor = "black";
	});
});

toggleGrid.addEventListener("click", () => {
	const columns = document.querySelectorAll(".column");
	columns.forEach(column => {
		column.classList.toggle("hide-column-border");
	});
});
