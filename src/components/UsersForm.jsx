import React, { Component } from 'react';

class UsersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            gen: ''
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

    handleGenChange = (e) => {
        this.setState({ gen: e.target.value });
        console.log(this.state.gen);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newUser = { name: this.state.name, email: this.state.email, gen: this.state.gen };
        this.props.addUser(newUser);
        this.setState({
            name: '',
            email: '',
            gen: ''
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
                    <input type="text" placeholder="gen" className="genBox" value={this.state.gen} onChange={this.handleGenChange} />
                    <br />
                    <input type="submit" value='Add User' className="submitButton" />
                </form>


            </div>
        );
    }
}

export default UsersForm;


