import React, { Component } from 'react';

class UsersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
        console.log(this.state.name);
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
        console.log(this.state.email);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newUser = { name: this.state.name, email: this.state.email };
        this.props.addUser(newUser);
        this.setState({
            name: '',
            email: ''
        });
        

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="newUserform">
                    <input type="text" placeholder="Name" className="nameBox" value={this.state.name} onChange={this.handleNameChange} />
                    <br />
                    <input type="email" placeholder="Email" className="emailBox" value={this.state.email} onChange={this.handleEmailChange} />
                    <br />
                    <input type="submit" value='Add User' className="submitButton" />
                </form>


            </div>
        );
    }
}

export default UsersForm;


