import React from "react";

import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {useHeaderStyles} from "./HeaderStyle";


type Props = {
	open: boolean,
	handleDrawerOpen: ()=>void,
	drawerWidth: number
}

export const Header = ({open, handleDrawerOpen}: Props)=>{
	const classes = useHeaderStyles();
	return (
		<AppBar position="fixed"
		        className={clsx(classes.appBar, {[classes.appBarShift]: open})}>

			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					className={clsx(classes.menuButton, open && classes.hide)}
				>
					<MenuIcon/>
				</IconButton>
				<Typography variant="h6" noWrap>
					Curso de React
				</Typography>
			</Toolbar>

		</AppBar>

	)
}