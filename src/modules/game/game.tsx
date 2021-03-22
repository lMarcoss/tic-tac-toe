import Board from "./board/board";
import React, {useState} from "react";
import CustomButton from "components/custom-button/custom-button";
import {calculateWinner} from "./board/calculate-winner";
import {validateEndGame} from "./board/validate-end-game";

const Game = () => {
	const [squares, setSquares] = useState<string[]>(Array(9).fill(''));

	const [xIsNext, setXIsNext] = useState<boolean>(true);

	const winner = calculateWinner(squares);
	const isEnd = validateEndGame(squares);
	let status;
	if (winner) {
		status = 'Ganador: ' + winner;
	} else {
		if (isEnd) {
			status = '¡Empate!';
		} else {
			status = 'Turno: ' + (xIsNext ? 'X' : 'O');
		}

	}

	const handleClick = (index: number) => {
		let newSquares = squares.slice();

		// si hay jugador o un cuadrado ya ha sido llenado
		if (calculateWinner(squares) || squares[index]) {
			return;
		}


		newSquares[index] = xIsNext ? 'X' : 'O';
		setSquares(newSquares);
		setXIsNext(!xIsNext)
	}

	const gameRestart = () => {
		setSquares(Array(9).fill(''));
	}

	return (
		<div className="game">
			<div className="game-board">
				<Board squares={squares} onClick={(index) => handleClick(index)} status={status}/>
			</div>
			<div className="game-restart">
				<CustomButton class={"button-restart"} label="Reiniciar" onClick={() => {
					gameRestart()
				}}/>
			</div>
		</div>
	)
}


export default Game;