import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Header} from "./components/template/header/Header";
import {DrawerTemplate} from "./components/template/left-menu/DrawerTemplate";
import {drawerWidth, useStyles} from "./components/template/template-style/StyleTemplate";
import {MainContent} from "./components/template/main-conten/MainContent";


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

			<MainContent open={open}/>


		</div>
	);
}

export default App;
