import React from "react";
import {Avatar} from "../../components/curso-react/avatar/Avatar";
import {Contador} from "../../components/curso-react/contador/Contador";

export const CursoReact = ()=>{
	return (
		<div>

			<Contador />

			<Avatar id={"1"} name={"Ana"} size={"small"}/>
			<Avatar id={"2"} name={"TSXLady"} />
			<Avatar id={"3"} name={"Rogriguez"} size={"large"} />
			<Avatar id={"4"} size={"large"} />
			<Avatar size={"large"} />


		</div>
	)
}