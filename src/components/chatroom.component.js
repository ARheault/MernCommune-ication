import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class chatroom extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            currentRoom: props.match.params.id,
            messages: []
        };
        console.log(this.state);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/chats/' + this.props.match.params.id)
        .then(response => {
            if(response.data.length > 0) {
                console.log(response.data);
                this.setState({
                    messages: response.data.map(message => message.message),
                });
            }
        });
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
                <p>This is the chatroom!</p>
                {
                    this.state.messages.map((message) => (
                        <div key={message} className="message">
                            {console.log(message)}
                            <div>{message}</div>
                        </div>
                    ))}

            </div>
        )
    }

}