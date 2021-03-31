import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import {Menu} from "./Menu";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme)=>
	createStyles({}),
);

type Props = {
	open: boolean,
	handleDrawerClose: ()=>void,
	classes: any
}
export const DrawerTemplate = ({open, handleDrawerClose, classes}: Props)=>{
	const theme = useTheme();
	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={open}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
				</IconButton>
			</div>
			<Divider/>
			<Menu/>
		</Drawer>
	)
}