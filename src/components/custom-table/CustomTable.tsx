import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import {PropsCustomTable} from "./PropsCustomTable";
import {ButtonAction} from "./ButtonAction";


export const CustomTable = (props: PropsCustomTable) => {
	const {data, columnDefinition, page, rowsPerPage,editRow} = props;
	return (
		<Table stickyHeader aria-label="sticky table">
			<TableHead>
				<TableRow>
					{columnDefinition.map((column) => (
						<TableCell
							key={column.id}
							align={column.align}
							style={{minWidth: column.minWidth}}
						>
							{column.label}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{data &&
				data
				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				.map((row, index) => {
					return <TableRow hover role="checkbox" tabIndex={-1} key={index}>
						{columnDefinition.map((column, idx) => {
							return <TableCell key={idx} align={column.align}>
								{
									column.value && column.type === 'text'
										? column.value(row)
										: <ButtonAction label={column.label} onClickAction={()=>editRow(row)}/>}
							</TableCell>;
						})}
					</TableRow>;
				})}
			</TableBody>
		</Table>
	)
}