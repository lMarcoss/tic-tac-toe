import React from "react";
import {makeStyles} from "@material-ui/core";
import {H1} from "components/h1/H1";

const useStyles = makeStyles({
	header: {
		height: '60px',
		width: "100%",
		backgroundColor: '#282c34',
		color: '#fff',
		flexDirection: 'column',
		display: 'flex',
		fontSize: '15px'
	}
});

export const Header = ()=>{
	const styles = useStyles();

	return <header className={styles.header}>
		<H1>Bienvenido al curso de React</H1>
	</header>
}