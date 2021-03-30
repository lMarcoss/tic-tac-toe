import {Usuario} from "../../modules/usuarios/definition-user-data/Usuario";

export interface PropsCustomTable {
	data: any[],
	columnDefinition: any[],
	page: any,
	rowsPerPage: number,
	editRow: (usuario:Usuario)=> any
}