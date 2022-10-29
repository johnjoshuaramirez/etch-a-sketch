const container = document.querySelector(".container");
const slider = document.querySelector("input");
const size = document.querySelector(".size");

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
				column.style.backgroundColor = randomColor();
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

// color
// rainbow
// background color
// eraser
// slider
// clear
// size
// toggle grid lines

