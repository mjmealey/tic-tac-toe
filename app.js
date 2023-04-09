
//gameBoard
const gameBoard = (() => {
  const gameArray = () => {
    let gameMoves = ["X", "O"];
    return gameMoves;
  };

  const gameGrid = (rows, columns) => {
    const gridContainer = document.getElementById("gridContainer");

    for (let i = 0; i < rows; i++) {
      const rows = document.createElement("div");
      rows.classList.add("rows");
      gridContainer.appendChild(rows);
      rows.addEventListener("mouseover", function () {});
      rows.addEventListener("mouseout", function () {});

      for (let j = 0; j < columns; i++) {
        const columns = document.createElement("div");
        columns.classList.add("columns");
        rows.appendChild(columns);
        columns.addEventListener("mouseenter", function () {
        columns.style.backgroundColor = "aliceblue";

        
            return{
                gameArray,
                gameGrid,
            }
        });
      }
    }
}})()



