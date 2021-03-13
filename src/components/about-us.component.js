import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class aboutus extends Component {
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

                <p>This project has not been easy, I have learned a lot and I'm excited to keep learning.
                   I am almost done with my schooling, just a few short quarters away from finishing up
                   and I hope that I have learned enough to be useful.
                </p>
            </div>
        )
    }

}