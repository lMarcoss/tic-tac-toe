import React, {useState} from "react";
import {createStyles, makeStyles, TextField, Theme} from "@material-ui/core";


const useStyles = makeStyles(
	(theme: Theme)=>createStyles(
		{
			error: {
				backgroundColor: '#FDE8E8'
			},
			errorlabel: {
				color: 'black !important'
			}
		}
	)
);

type Props = {
	id: string;
	value: string;
	label: string;
	error: boolean;
	change: (eventOrPath: string | React.ChangeEvent<any>) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => any);
}

export const CustomInput = (props: Props)=>{
	const classes = useStyles();
	const {id, value, label, change, error} = props;


	return (
		<TextField id="standard-basic" onChange={change} fullWidth label="Nombre" defaultValue={value}/>
		/*<TextField
			id={id}
			fullWidth
			variant='outlined'
			size='small'
			label={label}
			onChange={change}
			error={error}
			InputProps={
				{
					classes: {
						error: classes.error
					}
				}
			}
			value={value}
		/>*/
	)
}