import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class register extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePassword1 = this.onChangePassword1.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            password1: '',
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

     onChangePassword1(e) {
        this.setState({
            password1: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const userToLogin = {
            username: this.state.username,
            password: this.state.password,
            password1: this.state.password1
        };
        if (userToLogin.password === userToLogin.password1) {
            console.log(userToLogin);
            axios.post('http://localhost:5000/users/add', userToLogin)
                .then(res => console.log(res.data));
            window.location = '/login';
        }
        else {
            window.location = '/register';
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link to="/" className="navbar-brand">Commune-ication</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                    </div>
                    <ul>
                        <li className="about">
                            <Link to="/about">About us</Link>
                        </li>
                    </ul>
                </nav>

                <p>Welcome to Commune-ication, please register your new account below</p>
                <label>If you already have an account you can login here:</label> <Link to="/login" className="nav-link">Login</Link>
                <p></p>
                <h3>Registration</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text"
                            className="form-control"
                            value1={this.state.password}
                            onChange={this.onChangePassword}
                        />
                        <label>Re-enter Password</label>
                        <input type="text"
                            className="form-control"
                            value2={this.state.password1}
                            onChange={this.onChangePassword1}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div >
        )
    }

}