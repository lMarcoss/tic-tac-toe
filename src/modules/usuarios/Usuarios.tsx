import React, {useEffect, useState} from "react";
import {makeStyles, TableContainer} from "@material-ui/core";
import {CustomTable} from "../../components/custom-table/CustomTable";
import {Usuario} from "./definition-user-data/Usuario";
import {UserColumn} from "./definition-user-data/UserColum";
import {Modal} from "../../components/modal/Modal";
import {AddEditUser} from "./AddEditUser";
import {EditUser} from "./EditUser";

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
	container: {
		maxHeight: 440,
	},
});


export const Usuarios = ()=>{


	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [usuarios, setUsuarios] = useState<Usuario[]>([
		{
			nombre: 'Leonardo',
			apellido1: 'Marcos',
			apellido2: 'Santiago',
			rol: 'Administrador',
			username: 'lmarcoss',
			estatus: 'Activo',
			editar: 'Editar',
		},
		{
			nombre: 'Ricardo',
			apellido1: 'Cortés',
			apellido2: 'Cruz',
			rol: 'Operaciones',
			username: 'rcortes',
			estatus: 'Activo',
			editar: 'Editar',
		},
		{
			nombre: 'Manuel',
			apellido1: 'Ruíz',
			apellido2: 'Sumano',
			rol: 'Gerente',
			username: 'mruiz',
			estatus: 'Activo',
			editar: 'Editar',
		}
	]);

	const [name, setName] = useState("");
	const [url, setUrl] = useState("");

	useEffect(()=>{
		/*const fetchData = async () => {
			const data = await SearchApi.searchData();
			setUsuarios(data.results);
		};

		fetchData();*/
	}, []);

	const handleChangePage = (event: unknown, newPage: number)=>{
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	)=>{
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const [showModal, setShowModal] = useState(false);
	const [userEdit, setUserEdit] = useState<Usuario>({
		nombre: '',
		apellido1: '',
		apellido2: '',
		rol: '',
		username: '',
		estatus: '',
		editar: '',
	});

	const handleClick = (user: Usuario)=>{
		console.log(user);
		setShowModal(true);
		setUserEdit(user);
	};

	const handleCloseModal = ()=>{
		//console.log(user);
		setShowModal(false);
	};

	const handleSubmit = ()=>{
		//console.log(user);
		setShowModal(false);
	};


	return (
		<>
			<div style={{height: 300, width: "100%"}}>
				<TableContainer>
					<CustomTable
						data={usuarios}
						columnDefinition={UserColumn}
						page={page}
						rowsPerPage={rowsPerPage} editRow={(user)=>handleClick(user)}/>
				</TableContainer>

			</div>


			{showModal &&
				  <Modal open={showModal} onClose={handleCloseModal}>
					  <EditUser usuario={userEdit}/>
				  </Modal>}

		</>

	);


}