import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default class ChatList extends Component {
  /*  componentDidMount() {
        axios.get('http:localhost:5000/users/')
            .then(response => {

            });
    } */
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

                <p>This is the ChatList</p>
            </div>
        )
    }

}