import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';

export default class ChatList extends Component {
    constructor(props) {
        super(props);

        this.onChangeCurrentRoom = this.onChangeCurrentRoom.bind(this);
        this.onChangeRoomName = this.onChangeRoomName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rooms: [],
            currentRoom: '',
            newRoom: '',
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

    onChangeCurrentRoom(e) {
        this.setState({
            currentRoom: e.target.value
        });
    }
    onChangeRoomName(e) {
        this.setState({
            newRoom: e.target.value
        });
    }

    onChangeroomToDelete(e) {
        this.setState({
            roomToDelete: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const newRoom = {
            roomName: this.state.newRoom,
            date: Date.now()
        };

        console.log(newRoom);
        axios.post('http://localhost:5000/rooms/add', newRoom)
            .then(res => {
                console.log(res.data);
                axios.post('http://localhost:5000/users/joinroom', this.state.currUser);
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
                <p>Chat Rooms:</p>
                <Link to="/deleteRoom" className="nav-link">Delete Room</Link>

                {
                    this.state.rooms.map((chatroom) => (
                        <div key={chatroom} className="chatroom">
                            <div>{chatroom}</div>
                            <Link to={"/chatroom/" + chatroom}>
                                <div className="join">Join</div>
                            </Link>
                        </div>
                    ))}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>New Room: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.newRoom}
                            onChange={this.onChangeRoomName}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Room" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}