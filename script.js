const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const slider = document.querySelector("input");
const size = document.querySelector(".size");

slider.addEventListener("input", () => {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	size.innerText = `Grid size: ${slider.value} × ${slider.value}`;

	for (let i = 0; i < slider.value; i++) {
		const row = document.createElement("div");
		row.className = "row";
		container.appendChild(row);

		for (let j = 0; j < slider.value; j++) {
			const column = document.createElement("div");
			column.className = "column";
			row.appendChild(column);
			column.addEventListener("mouseover", () => {
				column.style.backgroundColor = "black";
			});
		}
	}
});
