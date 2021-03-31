import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
	footer: {
		height: '25px',
		flexShrink: 0,
		textAlign: 'center',
		backgroundColor: '#282c34',
		color: '#fff',
		fontSize: '14px'
	}
});

export const Footer = ()=>{


	const styles = useStyles();
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} Marcos Santiago Leonardo</p>
		</footer>
	)
}