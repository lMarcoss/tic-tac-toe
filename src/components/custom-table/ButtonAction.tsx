import React from "react";
import {Button} from "@material-ui/core";

type Props = {
	label:string
	onClickAction: () => any,
}

export const ButtonAction = (props: Props) => {
	const {onClickAction, label} = props;
	return (
		<Button
			variant="contained"
			color="primary"
			onClick={onClickAction}
		>
			{label}
		</Button>
	)
}