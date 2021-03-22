import React from "react";
import {PropsCustomButton} from "components/custom-button/props-custom-button";
import CustomButton from "components/custom-button/custom-button";

export default function Square(props: PropsCustomButton) {

	return (
		<CustomButton class={props.class} label={props.label} onClick={props.onClick}/>
	);
}