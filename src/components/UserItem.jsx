import React from "react";
import {Link} from 'react-router-dom';


// You can also do - "class UserList extends Component",
// just that you'd have to import React this way -
// import React, {Component} from "react".


export default function UserItem({name, email, gen, id, removeUser}) {
	const handleClick = () => {
		removeUser(id);
	}
	return (
		<div>
			<h1>{name}</h1>
			<h3>{email}</h3>
			<h2>{gen}</h2>
			<button style={{borderRadius: 10, backgroundColor:"#6FF8FC", marginRight: 10}} onClick = {handleClick}>Remove User</button>
			<Link to = {`/edit/${id}`}>Edit User</Link>
			<hr style={{backgroundColor: "#B05E2A", height: 1}} />
		</div>
	)
}

