import React from "react";
import {PropsCustomButton} from "components/custom-button/props-custom-button";
import CustomButton from "components/custom-button/custom-button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
	square: {
		border: '1px solid #999',
		float: 'left',
		fontSize: '44px',
		fontWeight: 'bold',
		lineHeight: '34px',
		height: '74px',
		marginRight: '-1px',
		marginTop: '-1px',
		padding: '0',
		textAlign: 'center',
		width: '74px'
	}

});
const styles = {
	square:({
		border: '1px solid #999',
		float: 'left',
		fontSize: '44px',
		fontWeight: 'bold',
		lineHeight: '34px',
		height: '74px',
		marginRight: '-1px',
		marginTop: '-1px',
		padding: '0',
		textAlign: 'center',
		width: '74px'
	})
}

export default function Square(props: PropsCustomButton) {

	return (
		<CustomButton class={props.class} label={props.label} onClick={props.onClick}/>
	);
}