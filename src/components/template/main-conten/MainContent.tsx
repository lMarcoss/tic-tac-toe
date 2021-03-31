import clsx from "clsx";
import {Route} from "wouter";
import {Usuarios} from "../../../modules/usuarios/Usuarios";
import Game from "../../../modules/game/game";
import React from "react";
import {useStyles} from "../template-style/StyleTemplate";

type PropsMainConten = {
	open: boolean
}

export const MainContent = ({open}: PropsMainConten)=>{
	const classes = useStyles();
	return (
		<main className={clsx(classes.content, {[classes.contentShift]: open})}>

			<div className={classes.drawerHeader}/>

			<Route component={Usuarios} path="/users"/>
			<Route component={Game} path="/game"/>

		</main>
	)
}