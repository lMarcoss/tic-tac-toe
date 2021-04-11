import React, {useState} from "react";

export const Contador = ()=>{

	const [contador, setContador] = useState<number>(50);

	const [ add, setAdd] = useState(0);
	const [ decrement, setDecrement] = useState(0);

	return (
		<React.Fragment>
			<span>
				{contador}
			</span>

			<button onClick={()=>{
				setContador(contador + 1);
				setAdd(add+1);
			}}>Incrementar + {add}</button>

			<button onClick={()=>{
				setContador(contador - 1);
				setDecrement(decrement+1)
			}}>Decrementar - {decrement}</button>

		</React.Fragment>
	)
}