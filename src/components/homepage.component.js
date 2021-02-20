import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class homePage extends Component {
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
                        <li className="about">
                            <Link to="/about">About us</Link>
                        </li>
                    </ul>
                </nav>
                <ul className="navbar-item">
                    <Link to="/chatlist" className="nav-link">See Chatrooms</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                </ul>

            </div>
        )
    }

}