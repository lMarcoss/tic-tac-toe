import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Header} from "./components/template/header/Header";
import {DrawerTemplate} from "./components/template/left-menu/DrawerTemplate";
import {drawerWidth, useStyles} from "./components/template/template-style/StyleTemplate";
import {MainRoute} from "./components/template/main-route/MainRoute";


function App() {

	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	const handleDrawerClose = ()=>{
		setOpen(false);
	};

	const handleDrawerOpen = ()=>{
		setOpen(true);
	};

	return (
		<div className={classes.root}>
			<CssBaseline/>

			<DrawerTemplate open={open} classes={classes} handleDrawerClose={handleDrawerClose}/>

			<Header open={open}
			        handleDrawerOpen={handleDrawerOpen}
			        drawerWidth={drawerWidth}/>

			<MainRoute open={open}/>


		</div>
	);
}

export default App;
