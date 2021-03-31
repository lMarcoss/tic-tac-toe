import Board from "./board/board";
import React, {useState} from "react";
import CustomButton from "components/custom-button/custom-button";
import {calculateWinner} from "./board/functions/calculate-winner";
import {validateEndGame} from "./board/functions/validate-end-game";
import logo from '../../logo.png';

const Game = ()=>{
	const [squares, setSquares] = useState<string[]>(Array(9).fill(''));

	const [xIsNext, setXIsNext] = useState<boolean>(true);


	const winner = calculateWinner(squares);
	const gameOver = validateEndGame(squares);
	let status;
	if (winner.line.length > 0) {
		status = 'Ganador: ' + winner.winner;
	} else {
		if (gameOver) {
			status = '¡Empate!';
		} else {
			status = 'Turno: ' + (xIsNext ? 'X' : 'O');
		}

	}

	const handleClick = (index: number)=>{
		let newSquares = squares.slice();

		const winnerProps = calculateWinner(squares);
		// si hay jugador o un cuadrado ya ha sido llenado
		if (winnerProps.line.length > 0 || squares[index]) {
			return;
		}


		newSquares[index] = xIsNext ? 'X' : 'O';
		setSquares(newSquares);
		setXIsNext(!xIsNext)
	}

	const gameRestart = ()=>{
		setSquares(Array(9).fill(''));
		setXIsNext(true)
	}

	return (

		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo"/>

			<div className="game">
				<div className="game-board">
					<Board squares={squares} winner={winner} onClick={(index)=>handleClick(index)}
					       status={status}/>
				</div>
				<div className="game-restart">
					<CustomButton class={`button-restart ${!!winner.winner || gameOver ? "bold" : ""}`}
					              label="Reiniciar"
					              onClick={()=>{
						              gameRestart()
					              }}/>
				</div>
			</div>
		</header>
	)
}


export default Game;