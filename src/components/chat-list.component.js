import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ChatList extends Component {
    constructor(props) {
        super(props);

        this.onChangeCurrentRoom = this.onChangeCurrentRoom.bind(this);
        this.onChangeRoomName = this.onChangeRoomName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rooms: [],
            currentRoom: '',
            newRoom: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/rooms/')
            .then(response => {
                if (response.data.length > 0) {
                    console.log(response.data);
                    this.setState({
                        rooms: response.data.map(room => room.roomName),
                    });
                }
            });
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
                // If I had access to the user who is logged in I would now add the room to them... but I don't know how to do that well.
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

                <p>This is the ChatList</p>
                {
                    this.state.rooms.map((chatroom) => (
                        <div key={chatroom} className="chatroom">
                            {console.log(chatroom)}
                            <div>{chatroom}</div>
                            <Link to={"/chatroom/" + chatroom}>
                                <div className="join">Join</div>
                            </Link>
                        </div>
                    ))}
                {
                    /*
                     <div>
                         <label>Chat rooms:</label>
                         <select
                             required
                             className="form-control"
                             value={this.state.currentRoom}
                             onChange={this.onChangeCurrentRoom}>
                             {this.state.rooms.map(function (room) {
                                 return <option
                                     key={room}
                                     value={room}>{room}
                                 </option>;
                             })
                             }
                         </select>
                     </div>
                   */
                }
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
                        <input type="submit" value="send" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}