import React from 'react';
import logo from './logo.png';
import './App.css';
import Game from "./modules/game/game";
import {Usuarios} from "./modules/usuarios/Usuarios";

function App() {
	return (
		<div className="App">
			{/*<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<Game/>
			</header>*/}


			<Usuarios/>

		</div>
	);
}

export default App;
