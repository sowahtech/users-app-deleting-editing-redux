import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { editUser } from '../store/usersActions';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.user.name,
            email: props.user.email,
            gen: props.user.gen
        };
        this.id = props.match.params.id;
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
        let updatedInfo = { name: this.state.name, email: this.state.email, gen: this.state.gen };
        this.props.editUser(this.id, updatedInfo);
        this.setState({
            name: '',
            email: '',
            gen: ''
        });
        this.props.history.push('/');

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
                    <input type="submit" value='Update User' className="submitButton" />
                </form>


            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>({
    user: state.users.find(user => user.id === ownProps.match.params.id)
})

const mapDispatchToProps = {
    editUser: editUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);


