import Square from "../square/square";
import React, {useState} from "react";
import {calculateWinner} from "./calculate-winner";

const Board = () => {

	const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
	const [xIsNext, setXIsNext] = useState<boolean>(true);

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O');
	}

	function handleClick(index: number) {
		let newSquares = squares.slice();

		// si hay jugador o un cuadrado ya ha sido llenado
		if (calculateWinner(squares) || squares[index]) {
			return;
		}


		newSquares[index] = xIsNext ? 'X' : 'O';
		setSquares(newSquares);
		setXIsNext(!xIsNext)
	}

	return (


		<div>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square value={squares[0]} onClick={()=>{handleClick(0)}}/>
				<Square value={squares[1]} onClick={()=>{handleClick(1)}}/>
				<Square value={squares[2]} onClick={()=>{handleClick(2)}}/>
			</div>
			<div className="board-row">
				<Square value={squares[3]} onClick={()=>{handleClick(3)}}/>
				<Square value={squares[4]} onClick={()=>{handleClick(4)}}/>
				<Square value={squares[5]} onClick={()=>{handleClick(5)}}/>
			</div>
			<div className="board-row">
				<Square value={squares[6]} onClick={()=>{handleClick(6)}}/>
				<Square value={squares[7]} onClick={()=>{handleClick(7)}}/>
				<Square value={squares[8]} onClick={()=>{handleClick(8)}}/>
			</div>
		</div>

	);
}
export default Board;