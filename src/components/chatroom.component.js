import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class chatroom extends Component {
    constructor(props) {
        super(props);

        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            currentRoom: this.props.match.params.id,
            messages: [],
            user: 'testForNow', // Need to figure out how to get the user maybe a global login file to inclue
            newMessage: ''
        };
        console.log(this.state);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/chats/' + this.props.match.params.id)
            .then(response => {
                if (response.data.length > 0) {
                    console.log(response.data);
                    this.setState({
                        messages: response.data.map(message => message.senderName + ": " + message.message),
                    });
                }
            });
    }

    onChangeMessage(e) {
        this.setState({
            newMessage: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const newChat = {
            senderName: this.state.user,
            message: this.state.newMessage,
            roomName: this.state.currentRoom,
            date: Date.now()
        };

        console.log(newChat);
        axios.post('http://localhost:5000/chats/add', newChat)
            .then(res => {
                console.log(res.data);
                // I'm guessing I have to do something for push updates.. but for now
                window.location.reload();
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
                <div key={this.currentRoom} className="currentRoom">
                    <h3>Current Room: {this.state.currentRoom}</h3>
                </div>
                {
                    this.state.messages.map((message) => (
                        <div key={message} className="message">
                            <div>{message}</div>
                        </div>
                    ))
                }
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>New message: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.newMessage}
                        onChange={this.onChangeMessage}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="send" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }

}