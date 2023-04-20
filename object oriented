const gameFunctionality = () => {
  const game = () => {
    const cellContentUndo = [];
    let currentPlayer = "";
    let currentDifficulty = "";

    const players = {
      player1: "O",
      player2: "X",
      player3: "",
      player4: null,
    };

    const difficulty = {
      firstDifficulty: "Very Easy",
      secondDifficulty: "Easy",
      thirdDifficulty: "Normal",
      fourthDifficulty: "Hard",
      fifthDifficulty: "Very Hard",
      sixthDifficulty: "Nearly Impossible",
    };

    const difficultyIds = [
      "veryEasy",
      "easy",
      "normal",
      "hard",
      "veryHard",
      "nearlyImpossible",
    ];

    const colors = {
      selectColor: "grey",
      standardColor: "darkgrey",
    };

    const cellOne = document.getElementById("col-0-0");
    const cellTwo = document.getElementById("col-1-0");
    const cellThree = document.getElementById("col-2-0");
    const cellFour = document.getElementById("col-0-1");
    const cellFive = document.getElementById("col-1-1");
    const cellSix = document.getElementById("col-2-1");
    const cellSeven = document.getElementById("col-0-2");
    const cellEight = document.getElementById("col-1-2");
    const cellNine = document.getElementById("col-2-2");
    const displayEl = document.getElementById("displayEl");
    const currentPlayerX = document.getElementById("currentPlayerX");
    const currentPlayerO = document.getElementById("currentPlayerO");
    const veryEasy = document.getElementById("veryEasy");
    const easy = document.getElementById("easy");
    const normal = document.getElementById("normal");
    const hard = document.getElementById("hard");
    const veryHard = document.getElementById("veryHard");
    const nearlyImpossible = document.getElementById("nearlyImpossible");
    const undo = document.getElementById("undo");

    const cellIds = [
      "col-0-0",
      "col-1-0",
      "col-2-0",
      "col-0-1",
      "col-1-1",
      "col-2-1",
      "col-0-2",
      "col-1-2",
      "col-2-2",
    ];

    cellOne.addEventListener("click", (e) => {
      if (e.target.id === "col-0-0") {
        if (currentPlayer === players.player1) {
          cellOne.textContent = players.player1;
          cellOne.setAttribute("id", "cellOneO");
          cellContentUndo.push(cellOne.textContent);
        } else if (currentPlayer === players.player2) {
          cellOne.textContent = players.player2;
          cellOne.setAttribute("id", "cellOneX");
          cellContentUndo.push(cellOne.textContent);
        }
      }
      if (cellOne.textContent === players.player3) {
        cellOne.textContent = currentPlayer;
        cellContentUndo.push(cellOne.textContent);
      }
    });

    cellTwo.addEventListener("click", (e) => {
      if (e.target.id === "col-1-0") {
        if (currentPlayer === players.player1) {
          cellTwo.textContent = players.player1;
          cellTwo.setAttribute("id", "cellTwoO");
          cellContentUndo.push(cellTwo.textContent);
        } else if (currentPlayer === players.player2) {
          cellTwo.setAttribute("id", "cellTwoX");
          cellTwo.textContent = players.player2;
          cellContentUndo.push(cellTwo.textContent);
        }
      }
      if (cellTwo.textContent === players.player3) {
        cellTwo.textContent = currentPlayer;
        cellContentUndo.push(cellTwo.textContent);
      }
    });

    cellThree.addEventListener("click", (e) => {
      if (e.target.id === "col-2-0") {
        if (currentPlayer === players.player1) {
          cellThree.setAttribute("id", "cellThreeO");
          cellThree.textContent = players.player1;
          cellContentUndo.push(cellThree.textContent);
        } else if (currentPlayer === players.player2) {
          cellThree.setAttribute("id", "cellThreeX");
          cellThree.textContent = players.player2;
          cellContentUndo.push(cellThree.textContent);
        }
      }
      if (cellThree.textContent === players.player3) {
        cellThree.textContent = currentPlayer;
        cellContentUndo.push(cellThree.textContent);
      }
    });

    cellFour.addEventListener("click", (e) => {
      if (e.target.id === "col-0-1") {
        if (currentPlayer === players.player1) {
          cellFour.setAttribute("id", "cellFourO");
          cellFour.textContent = players.player1;
        } else if (currentPlayer === players.player2) {
          cellFour.setAttribute("id", "cellFourX");
          cellFour.textContent = players.player2;
        }
      }
      if (cellFour.textContent === players.player3) {
        cellFour.textContent = currentPlayer;
      }
    });

    cellFive.addEventListener("click", (e) => {
      if (e.target.id === "col-1-1") {
        if (currentPlayer === players.player1) {
          cellFive.setAttribute("id", "cellFiveO");
          cellFive.textContent = players.player1;
        } else if (currentPlayer === players.player2) {
          cellFive.setAttribute("id", "cellFiveX");
          cellFive.textContent = players.player2;
        }
      }
      if (cellFive.textContent === players.player3) {
        cellFive.textContent = currentPlayer;
      }
    });

    cellSix.addEventListener("click", (e) => {
      if (e.target.id === "col-2-1") {
        if (currentPlayer === players.player1) {
          cellSix.setAttribute("id", "cellSixO");
          cellSix.textContent = players.player1;
        } else if (currentPlayer === players.player2) {
          cellSix.setAttribute("id", "cellSixX");
          cellSix.textContent = players.player2;
        }
      }
      if (cellSix.textContent === players.player3) {
        cellSix.textContent = currentPlayer;
      }
    });

    cellSeven.addEventListener("click", (e) => {
      if (e.target.id === "col-0-2") {
        if (currentPlayer === players.player1) {
          cellSeven.setAttribute("id", "cellSevenO");
          cellSeven.textContent = players.player1;
        } else if (currentPlayer === players.player2) {
          cellSeven.setAttribute("id", "cellSevenX");
          cellSeven.textContent = players.player2;
        }
      }
      if (cellSeven.textContent === players.player3) {
        cellSeven.textContent = currentPlayer;
      }
    });

    cellEight.addEventListener("click", (e) => {
      if (e.target.id === "col-1-2") {
        if (currentPlayer === players.player1) {
          cellEight.setAttribute("id", "cellEightO");
          cellEight.textContent = players.player1;
        } else if (currentPlayer === players.player2) {
          cellEight.setAttribute("id", "cellEightX");
          cellEight.textContent = players.player2;
          console.log(cellEight);
        }
      }

      if (cellEight.textContent === players.player3) {
        cellEight.textContent = currentPlayer;
      }
    });

    cellNine.addEventListener("click", (e) => {
      if (e.target.id === "col-2-2") {
        if (currentPlayer === players.player1) {
          cellNine.setAttribute("id", "cellNineO");
          cellNine.textContent = players.player1;
        } else if (currentPlayer === players.player2) {
          cellNine.setAttribute("id", "cellNineX");
          cellNine.textContent = players.player2;
        }
      }
      if (cellNine.textContent === players.player3) {
        cellNine.textContent = currentPlayer;
      }
    });

    currentPlayerX.addEventListener("click", (e) => {
      if (e.target.id === "currentPlayerX") {
        if (currentPlayer === players.player1) {
          const userMarkerX = prompt(
            "Change Marker to X? x for yes o for no  Warning: This resets the game! "
          );
          if (userMarkerX === "x") {
            displayEl.innerText = "Welcome to Tic-Tac-Toe!";
            currentPlayer = players.player2;
            cellOne.textContent = players.player3;
            cellTwo.textContent = players.player3;
            cellThree.textContent = players.player3;
            cellFour.textContent = players.player3;
            cellFive.textContent = players.player3;
            cellSix.textContent = players.player3;
            cellSeven.textContent = players.player3;
            cellEight.textContent = players.player3;
            cellNine.textContent = players.player3;
            currentPlayerX.style.backgroundColor = "grey";
            currentPlayerX.style.borderColor = "grey";
            currentPlayerO.style.backgroundColor = "lightgrey";
            currentPlayerO.style.borderColor = "lightgrey";
          } else if (userMarkerX === "o") {
            currentPlayer = players.player1;
          } else {
            userMarkerX === null;
          }
        } else if (currentPlayer === players.player3) {
          currentPlayer = players.player2;
          console.log(currentPlayer);
          currentPlayerX.style.backgroundColor = "grey";
          currentPlayerX.style.borderColor = "grey";
        }
      }
    });

    currentPlayerO.addEventListener("click", (e) => {
      if (e.target.id === "currentPlayerO") {
        if (currentPlayer === players.player2) {
          const userMarkerO = prompt(
            "Change Marker to O from X? o for yes x for no Warning: This resets the game!"
          );
          if (userMarkerO === "o") {
            displayEl.innerText = "Welcome to Tic-Tac-Toe!";
            currentPlayer = players.player1;
            cellOne.textContent = players.player3;
            cellTwo.textContent = players.player3;
            cellThree.textContent = players.player3;
            cellFour.textContent = players.player3;
            cellFive.textContent = players.player3;
            cellSix.textContent = players.player3;
            cellSeven.textContent = players.player3;
            cellEight.textContent = players.player3;
            cellNine.textContent = players.player3;
            currentPlayerO.style.backgroundColor = "grey";
            currentPlayerO.style.borderColor = "grey";
            currentPlayerX.style.backgroundColor = "lightgrey";
            currentPlayerX.style.backgroundColor = "lightgrey";
          } else if (userMarkerO === "x") {
            currentPlayer = players.player2;
          } else {
            userMarkerO === players.player4;
          }
        } else if (currentPlayer === players.player3) {
          currentPlayer = players.player1;
          currentPlayerO.style.backgroundColor = "grey";
          currentPlayerO.style.borderColor = "grey";
        }
      }
    });

    undo.addEventListener("click", () => {
      const undoPrompt = prompt(
        "Would you like to remove your marker from a specific square? 1 for 1st square, 2 for 2nd square, 3 for 3rd square, 4 for 4th square, 5 for 5th square, 6 for 6th square, 7 for 7th square, 8 for 8th square and 9 for 9th square. Warning: this cannot be reversed!"
      );
      if (undoPrompt === "1") {
        cellOne.textContent = players.player3;
      } else if (undoPrompt === "2") {
        cellTwo.textContent = players.player3;
      } else if (undoPrompt === "3") {
        cellThree.textContent = players.player3;
      } else if (undoPrompt === "4") {
        cellFour.textContent = players.player3;
      } else if (undoPrompt === "5") {
        cellFive.textContent = players.player3;
      } else if (undoPrompt === "6") {
        cellSix.textContent = players.player3;
      } else if (undoPrompt === "7") {
        cellSeven.textContent = players.player3;
      } else if (undoPrompt === "8") {
        cellEight.textContent = players.player3;
      } else if (undoPrompt === "9") {
        cellNine.textContent = players.player3;
      }
    });

    cellIds.forEach((id) => {
      const cells = document.getElementById(id);
      cells.addEventListener("click", () => {
        if (
          cellOne.textContent === players.player1 &&
          cellTwo.textContent === players.player1 &&
          cellThree.textContent === players.player1
        ) {
          displayEl.innerText = `3 O's Horizontally! You win ${currentPlayer}`;
        } else if (
          cellOne.textContent === players.player2 &&
          cellTwo.textContent === players.player2 &&
          cellThree.textContent === players.player2
        ) {
          displayEl.innerText = `3 X's Horizontally! You win ${currentPlayer}`;
        } else if (
          cellFour.textContent === players.player1 &&
          cellFive.textContent === players.player1 &&
          cellSix.textContent === players.player1
        ) {
          displayEl.innerText = `3 O's Horizontally! You win ${currentPlayer}`;
        } else if (
          cellFour.textContent === players.player2 &&
          cellFive.textContent === players.player2 &&
          cellSix.textContent === players.player2
        ) {
          displayEl.innerText = `3 X's Horizontally! You win ${currentPlayer}`;
        } else if (
          cellSeven.textContent === players.player1 &&
          cellEight.textContent === players.player1 &&
          cellNine.textContent === players.player1
        ) {
          displayEl.innerText = `3 O's Horizontally! You win ${currentPlayer}`;
        } else if (
          cellSeven.textContent === players.player2 &&
          cellEight.textContent === players.player2 &&
          cellNine.textContent === players.player2
        ) {
          displayEl.innerText = `3 X's Horizontally! You win ${currentPlayer}`;
        } else if (
          cellOne.textContent === players.player1 &&
          cellFour.textContent === players.player1 &&
          cellSeven.textContent === players.player1
        ) {
          displayEl.innerText = `3 O's Vertically! You win ${currentPlayer}`;
        } else if (
          cellOne.textContent === players.player2 &&
          cellFour.textContent === players.player2 &&
          cellSeven.textContent === players.player2
        ) {
          displayEl.innerText = `3 X's Vertically! You win ${currentPlayer}`;
        } else if (
          cellTwo.textContent === players.player1 &&
          cellFive.textContent === players.player1 &&
          cellEight.textContent === players.player1
        ) {
          displayEl.innerText = `3 O's Vertically! You win ${currentPlayer}`;
        } else if (
          cellThree.textContent === players.player2 &&
          cellSix.textContent === players.player2 &&
          cellNine.textContent === players.player2
        ) {
          displayEl.innerText = `3 X's Vertically! You win ${currentPlayer}`;
        } else if (
          cellThree.textContent === players.player1 &&
          cellSix.textContent === players.player1 &&
          cellNine.textContent === players.player1
        ) {
          displayEl.innerText = `3 O's Vertically! You win ${currentPlayer}`;
        } else if (
          cellOne.textContent === players.player2 &&
          cellFive.textContent === players.player2 &&
          cellNine.textContent === players.player2
        ) {
          displayEl.innerText = `3 X's Diagonally! You win ${currentPlayer}`;
        } else if (
          cellOne.textContent === players.player1 &&
          cellFive.textContent === players.player1 &&
          cellNine.textContent === players.player1
        ) {
          displayEl.innerText = `3 O's Diagonally! You win ${currentPlayer}`;
        } else if (
          cellSeven.textContent === players.player2 &&
          cellFive.textContent === players.player2 &&
          cellThree.textContent === players.player2
        ) {
          displayEl.innerText = `3 X's Diagonally! You win ${currentPlayer}`;
        } else if (
          cellSeven.textContent === players.player1 &&
          cellFive.textContent === players.player1 &&
          cellThree.textContent === players.player1
        ) {
          displayEl.innerText = `3 O's Diagonally! You win ${currentPlayer}`;
        } else if (
          cellOne.textContent !== players.player3 &&
          cellTwo.textContent !== players.player3 &&
          cellThree.textContent !== players.player3 &&
          cellFour.textContent !== players.player3 &&
          cellFive.textContent !== players.player3 &&
          cellSix.textContent !== players.player3 &&
          cellSeven.textContent !== players.player3 &&
          cellEight.textContent !== players.player3 &&
          cellNine.textContent !== players.player3
        ) {
          displayEl.innerText = "Looks like a tie!";
        }
      });
    });

    if (
      cellOne.textContent === players.player3 &&
      cellTwo.textContent === players.player3 &&
      cellThree.textContent === players.player3 &&
      cellFour.textContent === players.player3 &&
      cellFour.textContent === players.player3 &&
      cellFive.textContent === players.player3 &&
      cellSix.textContent === players.player3 &&
      cellSeven.textContent === players.player3 &&
      cellEight.textContent === players.player3 &&
      cellNine.textContent === players.player3
    ) {
      displayEl.innerText = "Welcome to Tic-Tac-Toe!";
    }

    veryEasy.addEventListener("click", (e) => {
      if (e.target.id === "veryEasy") {
        if (currentDifficulty === difficulty.firstDifficulty) {
          displayEl.innerText = "This difficulty is already selected";
        } else {
          currentDifficulty = difficulty.firstDifficulty;
          displayEl.innerText = "Welcome to Tic-Tac-Toe!";
        }
      }
    });
    easy.addEventListener("click", (e) => {
      if (e.target.id === "easy") {
        if (currentDifficulty === difficulty.secondDifficulty) {
          displayEl.innerText = "This difficulty is already selected";
        } else {
          currentDifficulty = difficulty.secondDifficulty;
          displayEl.innerText = "Welcome to Tic-Tac-Toe!";
        }
      }
    });

    normal.addEventListener("click", (e) => {
      if (e.target.id === "normal") {
        if (currentDifficulty === difficulty.thirdDifficulty) {
          displayEl.innerText = "This difficulty is already selected";
        } else {
          currentDifficulty = difficulty.thirdDifficulty;
          displayEl.innerText = "Welcome to Tic-Tac-Toe!";
        }
      }
    });

    hard.addEventListener("click", (e) => {
      if (e.target.id === "hard") {
        if (currentDifficulty === difficulty.fourthDifficulty) {
          displayEl.innerText = "This difficulty is already selected";
        } else {
          currentDifficulty = difficulty.fourthDifficulty;
          displayEl.innerText = "Welcome to Tic-Tac-Toe!";
        }
      }
    });

    veryHard.addEventListener("click", (e) => {
      if (e.target.id === "veryHard") {
        if (currentDifficulty === difficulty.fifthDifficulty) {
          displayEl.innerText = "This difficulty is already selected";
        } else {
          currentDifficulty = difficulty.fifthDifficulty;
          displayEl.innerText = "Welcome to Tic-Tac-Toe!";
        }
      }
    });

    nearlyImpossible.addEventListener("click", (e) => {
      if (e.target.id === "nearlyImpossible") {
        if (currentDifficulty === difficulty.sixthDifficulty) {
          displayEl.innerText = "This difficulty is already selected";
        } else {
          currentDifficulty = difficulty.sixthDifficulty;
          displayEl.innerText = "Welcome to Tic-Tac-Toe!";
        }
      }
    });

    difficultyIds.forEach((id) => {
      const difficultyLevel = document.getElementById(id);
      difficultyLevel.addEventListener("click", () => {
        if (currentDifficulty === difficulty.firstDifficulty) {
          veryEasy.style.backgroundColor = colors.selectColor;
          veryEasy.style.borderColor = colors.selectColor;
          easy.style.backgroundColor = colors.standardColor;
          easy.style.borderColor = colors.standardColor;
          normal.style.backgroundColor = colors.standardColor;
          normal.style.borderColor = colors.standardColor;
          hard.style.backgroundColor = colors.standardColor;
          hard.style.borderColor = colors.standardColor;
          veryHard.style.backgroundColor = colors.standardColor;
          veryHard.style.borderColor = colors.standardColor;
          nearlyImpossible.style.backgroundColor = colors.standardColor;
          nearlyImpossible.style.borderColor = colors.standardColor;
        } else if (currentDifficulty === difficulty.secondDifficulty) {
          easy.style.backgroundColor = colors.selectColor;
          easy.style.borderColor = colors.selectColor;
          veryEasy.style.backgroundColor = colors.standardColor;
          veryEasy.style.borderColor = colors.standardColor;
          normal.style.backgroundColor = colors.standardColor;
          normal.style.borderColor = colors.standardColor;
          hard.style.backgroundColor = colors.standardColor;
          hard.style.borderColor = colors.standardColor;
          veryHard.style.backgroundColor = colors.standardColor;
          veryHard.style.borderColor = colors.standardColor;
          nearlyImpossible.style.backgroundColor = colors.standardColor;
          nearlyImpossible.style.borderColor = colors.standardColor;
        } else if (currentDifficulty === difficulty.thirdDifficulty) {
          normal.style.backgroundColor = colors.selectColor;
          normal.style.borderColor = colors.selectColor;
          veryEasy.style.backgroundColor = colors.standardColor;
          veryEasy.style.borderColor = colors.standardColor;
          easy.style.backgroundColor = colors.standardColor;
          easy.style.borderColor = colors.standardColor;
          hard.style.backgroundColor = colors.standardColor;
          hard.style.borderColor = colors.standardColor;
          veryHard.style.backgroundColor = colors.standardColor;
          veryHard.style.borderColor = colors.standardColor;
          nearlyImpossible.style.backgroundColor = colors.standardColor;
          nearlyImpossible.style.borderColor = colors.standardColor;
        } else if (currentDifficulty === difficulty.fourthDifficulty) {
          hard.style.backgroundColor = colors.selectColor;
          hard.style.borderColor = colors.selectColor;
          veryEasy.style.backgroundColor = colors.standardColor;
          veryEasy.style.borderColor = colors.standardColor;
          easy.style.backgroundColor = colors.standardColor;
          easy.style.borderColor = colors.standardColor;
          normal.style.backgroundColor = colors.standardColor;
          normal.style.borderColor = colors.standardColor;
          veryHard.style.backgroundColor = colors.standardColor;
          veryHard.style.borderColor = colors.standardColor;
          nearlyImpossible.style.backgroundColor = colors.standardColor;
          nearlyImpossible.style.borderColor = colors.standardColor;
        } else if (currentDifficulty === difficulty.fifthDifficulty) {
          veryHard.style.backgroundColor = colors.selectColor;
          veryHard.style.borderColor = colors.selectColor;
          veryEasy.style.backgroundColor = colors.standardColor;
          veryEasy.style.borderColor = colors.standardColor;
          easy.style.backgroundColor = colors.standardColor;
          easy.style.borderColor = colors.standardColor;
          normal.style.backgroundColor = colors.standardColor;
          normal.style.borderColor = colors.standardColor;
          hard.style.backgroundColor = colors.standardColor;
          hard.style.borderColor = colors.standardColor;
          nearlyImpossible.style.backgroundColor = colors.standardColor;
          nearlyImpossible.style.borderColor = colors.standardColor;
        } else if (currentDifficulty === difficulty.sixthDifficulty) {
          nearlyImpossible.style.backgroundColor = colors.selectColor;
          nearlyImpossible.style.borderColor = colors.selectColor;
          veryEasy.style.backgroundColor = colors.standardColor;
          veryEasy.style.borderColor = colors.standardColor;
          easy.style.backgroundColor = colors.standardColor;
          easy.style.borderColor = colors.standardColor;
          normal.style.backgroundColor = colors.standardColor;
          normal.style.borderColor = colors.standardColor;
          hard.style.backgroundColor = colors.standardColor;
          hard.style.borderColor = colors.standardColor;
          veryHard.style.backgroundColor = colors.standardColor;
          veryHard.style.borderColor = colors.standardColor;
        }
      });
    });

    return { game };
  };

  return { game };
};

export default gameFunctionality;
