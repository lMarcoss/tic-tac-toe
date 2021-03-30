import React from "react";
import {Usuario} from "./definition-user-data/Usuario";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {ErrorMessage, Field, FormikErrors, FormikProps, withFormik} from "formik";
import {CustomInput} from "../../components/custom-input/CustomInput";
import {TextField} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme)=>
	createStyles({
		root: {
			'& .MuiTextField-root': {
				margin: theme.spacing(1),
				width: '96%',
			},
		},
	}),
);

type Props = {
	usuario: Usuario,
}

export const FormControlUser = ({usuario, isSubmitting, isValid, errors, handleChange}: Props & FormikProps<Usuario>)=>{

	const classes = useStyles();


	return <form className={classes.root} noValidate autoComplete="off">


		<Field type="text" name="nombre"
		       component={CustomInput} label={"Nombre"}
		       id={"nombre"}
		       change={handleChange}
		       value={usuario.nombre}
		       error={errors.nombre}/>

		<TextField type="text" name="nombre"/>
		<ErrorMessage name="nombre">
			{message=><div className="error">{message}</div>}
		</ErrorMessage>


		<Field type="text"
		       id="apellido1"
		       component={CustomInput}
		       change={handleChange}
		       label={"Primer Apellido"}
		       value={usuario.apellido1}
		       error={usuario.apellido1}>

		</Field>

		<Field type="text"
		       id="apellido2"
		       component={CustomInput}
		       change={handleChange}
		       label={"Primer Apellido"}
		       value={usuario.apellido2}
		       error={usuario.apellido2}>

		</Field>

		<Field type="text"
		       id="rol"
		       component={CustomInput}
		       change={handleChange}
		       label={"Primer Apellido"}
		       value={usuario.rol}
		       error={usuario.rol}>

		</Field>


		<Field type="text"
		       id="username"
		       component={CustomInput}
		       change={handleChange}
		       label={"Rol"}
		       value={usuario.username}
		       error={usuario.username}>

		</Field>

		<Field type="text"
		       id="estatus"
		       component={CustomInput}
		       change={handleChange}
		       label={"estatus"}
		       value={usuario.estatus}
		       error={usuario.estatus}>

		</Field>

		<Field type="text"
		       id="editar"
		       component={CustomInput}
		       change={handleChange}
		       label={"editar"}
		       value={usuario.editar}
		       error={usuario.editar}>

		</Field>

		{/*<TextField id="standard-basic" fullWidth label="Nombre" defaultValue={usuario.nombre}/>
		<TextField id="standard-basic" fullWidth label="Primer Apellido" defaultValue={usuario.apellido1}/>
		<TextField id="standard-basic" fullWidth label="Segundo Apellido" defaultValue={usuario.apellido2}/>
		<TextField id="standard-basic" fullWidth label="Rol" defaultValue={usuario.rol}/>
		<TextField id="standard-basic" fullWidth label="Username" defaultValue={usuario.username}/>
		<TextField id="standard-basic" fullWidth label="Estatus" defaultValue={usuario.estatus}/>*/}
		<button type="submit" disabled={isSubmitting || !isValid}>Enviar</button>
	</form>
}


export const AddEditUser = withFormik<Props, Usuario>({
	mapPropsToValues: ({usuario}: Props)=>{//inicia valores por default
		return {
			/*nombre: usuario.nombre,
			apellido1: usuario.apellido1,
			apellido2: usuario.apellido2,
			rol: usuario.rol,
			username: usuario.username,
			estatus: usuario.estatus,
			editar: '',*/

			nombre: '',
			apellido1: '',
			apellido2: '',
			rol: '',
			username: '',
			estatus: '',
			editar: '',
		}
	},
	validate: (usuario: Usuario)=>{
		console.log(usuario);
		const errors: FormikErrors<Usuario> = {};

		if (!usuario.nombre) {
			errors.nombre = 'Nombre es requerido';
		}

		if (!usuario.apellido1) {
			errors.apellido1 = 'Primer Apellido es requerido';
		}

		return errors;
	},
	handleSubmit: (values, formikBag)=>{
		console.log(values);
		formikBag.setSubmitting(false);// hacer al terminar la peticion
		//formikBag.props.submitHandler(values);

	}
})(FormControlUser);
