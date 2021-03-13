import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default class homePage extends Component {
    constructor(){
        super();
        Cookies.set('firsttime', true);
        this.state={
            User: Cookies.get('username'),
            Date: Date().toLocaleString()
        };
    }
    render() {
        return (
            <div>
                <p>Welcome to Commune-ication</p>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link to="/" className="navbar-brand">Commune-ication</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                    </div>
                    <ul>
                        <li className="User">
                                <p className = "Date" style={{color: 'white'}}>
                                {this.state.User}
                                </p>

                        </li>
                        <li className="time">
                            <p className = "Date" style={{color: 'white'}}>
                                {this.state.Date}
                                </p>
                        </li>
                        <li className="about">
                            <Link to="/about">About us</Link>
                        </li>
                    </ul>
                </nav>
                <ul className="navbar-item">
                    <Link to="/register" className="nav-link">Register</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/logout" className ="nav-link">Logout</Link>
                    <Link to="/chatlist" className="nav-link">See Chatrooms</Link>
                    <Link to="/deleteRoom" className="nav-link">Delete Room</Link>
                </ul>

            </div>
        )
    }

}