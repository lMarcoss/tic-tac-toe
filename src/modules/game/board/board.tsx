import Square from "../square/square";
import React from "react";
import {BoardProps} from "./board-props";

const Board = (props: BoardProps) => {
	const winner = props.status.includes('Ganador');
	const gameOver = props.status.includes('Empate');

	//class
	const classBold = winner || gameOver ? 'bold' : '';
	const classWinner = winner ? 'winner' : '';
	const classGameOver =  gameOver ? 'game-over' : '';

	const squareIsPartOfWin = (lineWin: number[], index:number): string =>{
		if(lineWin.includes(index)){
			return 'winner'
		}
		return '';
	}

	return (


		<div>
			<div className={`status ${classBold} ${classWinner} ${classGameOver}`}>{props.status}</div>
			<div className="board-row">
				<Square class={`square ${squareIsPartOfWin(props.winner.line, 0)}`} label={props.squares[0]} onClick={() => {
					props.onClick(0)
				}}/>
				<Square class={`square ${squareIsPartOfWin(props.winner.line, 1)}`} label={props.squares[1]} onClick={() => {
					props.onClick(1)
				}}/>
				<Square class={`square ${squareIsPartOfWin(props.winner.line, 2)}`} label={props.squares[2]} onClick={() => {
					props.onClick(2)
				}}/>
			</div>
			<div className="board-row">
				<Square class={`square ${squareIsPartOfWin(props.winner.line, 3)}`} label={props.squares[3]} onClick={() => {
					props.onClick(3)
				}}/>
				<Square class={`square ${squareIsPartOfWin(props.winner.line, 4)}`} label={props.squares[4]} onClick={() => {
					props.onClick(4)
				}}/>
				<Square class={`square ${squareIsPartOfWin(props.winner.line, 5)}`} label={props.squares[5]} onClick={() => {
					props.onClick(5)
				}}/>
			</div>
			<div className="board-row">
				<Square class={`square ${squareIsPartOfWin(props.winner.line, 6)}`} label={props.squares[6]} onClick={() => {
					props.onClick(6)
				}}/>
				<Square class={`square ${squareIsPartOfWin(props.winner.line, 7)}`} label={props.squares[7]} onClick={() => {
					props.onClick(7)
				}}/>
				<Square class={`square ${squareIsPartOfWin(props.winner.line, 8)}`} label={props.squares[8]} onClick={() => {
					props.onClick(8)
				}}/>
			</div>
		</div>

	);
}
export default Board;