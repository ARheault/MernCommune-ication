import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';

export default class ChatList extends Component {
    constructor(props) {
        super(props);

        this.onChangeRoomName = this.onChangeRoomName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rooms: [],
            deleteRoom: '',
            currUser: '',
        };
    }

    componentDidMount() {
        if (Cookie.get('loggedIn') === 'true') {
            this.state.currUser = Cookie.get('username');
            axios.get('http://localhost:5000/rooms/')
                .then(response => {
                    if (response.data.length > 0) {
                        this.setState({
                            rooms: response.data.map(room => room.roomName),
                        });
                    }
                });
        }
        else {
            window.location = '/login';
        }
    }

    onChangeRoomName(e) {
        this.setState({
            deleteRoom: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const roomToDelete = {
            roomName: this.state.deleteRoom
        };

        console.log(roomToDelete);
        axios.post('http://localhost:5000/rooms/delete/', roomToDelete)
            .then(res => {
                console.log(res.data);
            });
            window.location.reload();

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

                <p>Chat Rooms:</p>
                <Link to="/chatlist" className="nav-link">Join or Create Room</Link>
                {
                    this.state.rooms.map((chatroom) => (
                        <div key={chatroom} className="chatroom">
                            <div>{chatroom}</div>
                        </div>
                    ))}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Room to Delete: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.deleteRoom}
                            onChange={this.onChangeRoomName}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Delete Room" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}