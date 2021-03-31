import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import {Link} from "wouter";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

export const mainListItems = [
	{
		id: 'users',
		path: '/users',
		label: 'Users',
		icon: (<PeopleIcon/>)
	},
	{
		id: 'game',
		path: '/game',
		label: 'Game',
		icon: (<SportsEsportsIcon/>)
	}
]

export const Menu = ()=>{
	return (
		<List>
			{mainListItems.map((menu, index)=>(
				<Link to={menu.path} key={menu.id}>
					<ListItem button>
						<ListItemIcon>{menu.icon}</ListItemIcon>
						<ListItemText primary={menu.label}/>

					</ListItem>
				</Link>

			))}
		</List>
	)
}