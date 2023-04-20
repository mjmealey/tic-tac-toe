//gameBoard
const gameBoard = () => {
  const gameGrid = () => {
    const gridContainer = document.getElementById("gridContainer");

    for (let i = 0; i < 3; i++) {
      const rows = document.createElement("div");
      rows.classList.add("rows");
      gridContainer.appendChild(rows);
      rows.addEventListener("mouseover", () => {
        rows.style.backgroundColor = "crimson";
      });
      rows.addEventListener("mouseout", () => {
        rows.style.backgroundColor = "white";
      });
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        rows.appendChild(cell);
        cell.setAttribute("id", "col-" + i + "-" + j);
      }
    }

    return {
      gameGrid,
    };
  };

  return { gameGrid };
};
export default gameBoard;
