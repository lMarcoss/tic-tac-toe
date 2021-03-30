import React from "react";
import {Formik} from "formik";
import {Usuario} from "./definition-user-data/Usuario";
import {Simulate} from "react-dom/test-utils";

type Props = {
	usuario: Usuario
}

export const EditUser = ({usuario}: Props)=>{

	const registrar = (usuario: any)=>{
		return new Promise((resolve, reject)=>{
			setTimeout(function () {
				//resolve(true);
				reject(true);
			}, 8000);
		})
	}

	return (
		<Formik
			initialValues={usuario}
			onSubmit={(usuario, {setFieldError})=>{
				console.log(usuario);
				setFieldError('nombre', 'Nombre es inválido');
				return registrar(usuario).catch(()=>{

				});
			}}
			validate={usuario=>{
				console.log(usuario);
				const errors = {
					nombre: '',
					apellido1: '',
					apellido2: '',
					rol: '',
					username: '',
					estatus: '',
				};
				if (!usuario.nombre) {
					errors.nombre = 'Required nombre';
				}

				if (!usuario.apellido1) {
					errors.apellido1 = 'Required apellido1';
				} else if (usuario.apellido1.length < 3) {
					errors.apellido1 = 'la longitud de apellido1 es menor a 3';
				}

				return errors;
			}}
		>

			{
				({errors, handleChange, handleSubmit, isSubmitting})=>
					(<form onSubmit={handleSubmit}>
						<input name="nombre" type="text" onChange={handleChange}/>

						{errors.nombre && <span style={{color: 'red'}}>{errors.nombre}</span>}

						<input name="apellido1" type="text" onChange={handleChange}/>

						{errors.apellido1 && <span style={{color: 'red'}}>{errors.apellido1}</span>}
						<input name="apellido2" type="text" onChange={handleChange}/>
						<input name="rol" type="text" onChange={handleChange}/>
						<input name="username" type="text" onChange={handleChange}/>
						<input name="estatus" type="text" onChange={handleChange}/>
						<input name="editar" type="text" onChange={handleChange}/>


						<button type={"submit"}>Enviar</button>


					</form>)

			}

		</Formik>
	)
}