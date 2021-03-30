import {Usuario} from "./Usuario";
import React from "react";

export const UserColumn: any[] = [
	{id: "nombre", type:'text',label: "Nombre", value: (usuario: Usuario) => usuario.nombre, minWidth: 25},
	{id: "apellido1", type:'text',label: "Primer Apellido", value: (usuario: Usuario) => usuario.apellido1, minWidth: 170},
	{id: "apellido2", type:'text',label: "Segundo Apellido", value: (usuario: Usuario) => usuario.apellido2, minWidth: 40},
	{id: "rol", type:'text',label: "Rol", value: (usuario: Usuario) => usuario.rol, minWidth: 40},
	{id: "username", type:'text',label: "Username", value: (usuario: Usuario) => usuario.username, minWidth: 40},
	{id: "estatus", type:'text',label: "Estatus", value: (usuario: Usuario) => usuario.estatus, minWidth: 40},
	{id: "editar", type: 'button',label: "Editar", value: (usuario: Usuario) => usuario, minWidth: 40},
];