import gameBoard from "./gameBoard.js";
import gameFunctionality from "./gameFactory.js"
const newGameBoard = gameBoard();
const newGameFunctionality = gameFunctionality()

newGameBoard.gameGrid(3, 3);

newGameFunctionality.game()