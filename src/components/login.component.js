import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
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

    onSubmit(e) {
        e.preventDefault();
        const userToLogin = {
            username: this.state.username,
            password: this.state.password
        };
        
        const username = this.state.username;
        const password = this.state.password;

        console.log(userToLogin);
<<<<<<< HEAD
        console.log(username);
=======
>>>>>>> 2bff6376a0e68d8549cd69b209c1bddd8dc638b5
        axios.post('http://localhost:5000/users/login', userToLogin)
            .then(res => {
                console.log(res.data);
                if(res.data === 'success'){
                    window.location = '/';
                }
                else{
                    window.location = '/loginFailedAttempt';
                }
            }
            );
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

                <p>Welcome to Commune-ication, if you have an account please login</p>
                <label>Otherwise you can register here:</label> <Link to="/register" className="nav-link">Register</Link>
                <p></p>
                <h3>Login</h3>
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
                            value={this.state.password}
                            onChange={this.onChangePassword}
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