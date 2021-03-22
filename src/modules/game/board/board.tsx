import Square from "../square/square";
import React from "react";
import {BoardProps} from "./board-props";

const Board = (props: BoardProps) => {


	return (


		<div>
			<div className="status">{props.status}</div>
			<div className="board-row">
				<Square class={"square"} label={props.squares[0]} onClick={() => {
					props.onClick(0)
				}}/>
				<Square class={"square"} label={props.squares[1]} onClick={() => {
					props.onClick(1)
				}}/>
				<Square class={"square"} label={props.squares[2]} onClick={() => {
					props.onClick(2)
				}}/>
			</div>
			<div className="board-row">
				<Square class={"square"} label={props.squares[3]} onClick={() => {
					props.onClick(3)
				}}/>
				<Square class={"square"} label={props.squares[4]} onClick={() => {
					props.onClick(4)
				}}/>
				<Square class={"square"} label={props.squares[5]} onClick={() => {
					props.onClick(5)
				}}/>
			</div>
			<div className="board-row">
				<Square class={"square"} label={props.squares[6]} onClick={() => {
					props.onClick(6)
				}}/>
				<Square class={"square"} label={props.squares[7]} onClick={() => {
					props.onClick(7)
				}}/>
				<Square class={"square"} label={props.squares[8]} onClick={() => {
					props.onClick(8)
				}}/>
			</div>
		</div>

	);
}
export default Board;