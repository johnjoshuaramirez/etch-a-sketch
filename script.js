const container = document.querySelector(".container");
const slider = document.querySelector("input");
const size = document.querySelector(".size");
const buttons = document.querySelectorAll("button");
const color = document.querySelector(".color");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const toggleGrid = document.querySelector(".toggle-grid");

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
				if (eraser.classList.contains("active")) {
					column.style.backgroundColor = "black";
				} else {
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

clear.addEventListener("click", () => {
	const columns = document.querySelectorAll(".column");
	columns.forEach(column => {
		column.style.backgroundColor = "black";
	});
});

toggleGrid.addEventListener("click", () => {
   const columns = document.querySelectorAll(".column");
   container.classList.add("border");
	columns.forEach(column => {
		column.style.borderWidth = 0;
	});
})
