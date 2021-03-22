import React from "react";
import {PropsCustomButton} from "./props-custom-button";

const CustomButton = (props: PropsCustomButton) => {
	return (
		<button className={props.class} onClick={props.onClick}>
			{props.label}
		</button>
	);
}

export default CustomButton;