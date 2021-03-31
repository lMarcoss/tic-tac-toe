import {Usuario} from "../definition-user-data/Usuario";

export const validateFields = (usuario: Usuario)=>{
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

	if (!usuario.rol) {
		errors.rol = 'Rol nombre';
	}

	if (!usuario.username) {
		errors.username = 'Username nombre';
	}

	if (!usuario.estatus) {
		errors.estatus = 'Username nombre';
	}

	return errors;
}