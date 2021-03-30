import {Dialog, DialogActions, DialogContent} from "@material-ui/core";
import React from "react";
import {Usuario} from "../../modules/usuarios/definition-user-data/Usuario";

type Props = {
	onClose: () => void,
	open: boolean,
	//data: any,
	children: any
}

const styles = {
	header: () => ({
		//backgroundColor: '#282c34',
		height: '400px',
		padding: '20px',
		//color: '#FFFFFFFF',
		width: '400px'

	})
}


export const Modal = (props: any) => {
	const {open, onClose, children} = props;
	return (<Dialog
			onClose={onClose}
			aria-labelledby="customized-dialog-title"
			open={open}
		>
			<DialogContent dividers style={styles.header()}>
				{children}
			</DialogContent>

			<DialogActions>
				{/*<Button autoFocus onClick={onClose} color="primary">
					Cerrar
				</Button>*/}

				<button onClick={() => onClose()}>Cerrar</button>
			</DialogActions>
		</Dialog>
	)
}
