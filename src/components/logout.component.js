import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';

export default class aboutus extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (Cookie.get() !== null && Cookie.get('loggedIn') !== false) {
            Cookie.set('loggedIn', false);
        }
        window.location = '/'; 
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
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="submit" value="logout" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}