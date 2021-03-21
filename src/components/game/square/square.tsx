import React, {MouseEventHandler} from "react";

type Props = {
	value: string,
	onClick: MouseEventHandler
}

export default function Square (props:Props) {

	const {value, onClick} = props;
	return (
		<button className="square" onClick={onClick}>
			{value}
		</button>
	);
}