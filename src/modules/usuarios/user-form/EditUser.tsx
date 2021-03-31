import React from "react";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {Usuario} from "../definition-user-data/Usuario";
import {validateFields} from "./validate-user-data";


const handleSubmit = (usuario: Usuario, {setFieldError}: any)=>{
	console.log(usuario);
	return registrar(usuario).catch(()=>{

	});
}

const registrar = (usuario: any)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(function () {
			//resolve(true);
			reject(true);
		}, 8000);
	})
}
type Props = {
	usuario: Usuario
}

export const EditUser = ({usuario}: Props)=>{


	return (
		<Formik
			initialValues={usuario}
			onSubmit={handleSubmit}
			validate={validateFields}
		>

			{
				({errors, isSubmitting})=>
					(<Form>
						<Field name="nombre" type="text" placeholder="Nombre"
						       className={errors.nombre ? 'error' : ''}/>
						<ErrorMessage name="nombre" component="small"/>

						<Field name="apellido1" type="text" placeholder={"apellido1"}/>
						<ErrorMessage name="apellido1"/>

						<Field name="apellido2" type="text" placeholder={"apellido2"}/>
						<ErrorMessage name="apellido2"/>

						<Field name="rol" type="text" placeholder={"rol"}/>
						<ErrorMessage name="rol"/>

						<Field name="username" type="text" placeholder={"username"}/>
						<ErrorMessage name="username" className="error-message"/>

						<Field name="estatus" type="text" placeholder={"estatus"}/>
						<ErrorMessage name="estatus"/>

						{isSubmitting}
						<button type={"submit"}>Enviar</button>


					</Form>)

			}

		</Formik>
	)
}