import React from "react";
import { connect } from 'react-redux';
import { addUser, deleteUser } from './store/usersActions';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import UserItem from "./components/UserItem";
import UsersForm from './components/UsersForm';

class App extends React.Component {

	addNewUser = (newUser) => {
		this.props.addUser(newUser); 
	}
	
	deleteUser = (name) => {
		this.props.deleteUser(name);
	}

	render() {
		return (
			<div className="App">
				{/* Form to add new user */}
				<div> 
					<UsersForm addUser= {this.addNewUser} />
				</div>

				{/* List of users */}
				<div className="userList">
					{
						this.props.users.map((user, index) => <UserItem key={index} name={user.name} email={user.email} removeUser = {this.deleteUser} />)
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.users
}) 

const mapDispatchToProps = {
	addUser: addUser,
	deleteUser: deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
