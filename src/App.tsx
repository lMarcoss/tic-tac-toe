import React from 'react';
import './App.css';
import Game from "modules/game/game";
import {Usuarios} from "modules/usuarios/Usuarios";
import {Route} from "wouter";
import {Header} from "components/template/header/Header";
import {Footer} from "./components/template/footer/Footer";

function App() {
	return (
		<div className="App">
			{/*<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<Game/>
			</header>*/}


			{/*<Usuarios/>*/}

			<Header/>


			<Route component={Usuarios} path="/usuarios"/>
			<Route component={Game} path="/juego"/>


			<Footer />
		</div>
	);
}

export default App;
