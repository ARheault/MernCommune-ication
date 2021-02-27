import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default class ChatList extends Component {
    constructor(props) {
        super(props);

        this.onChangeCurrentRoom = this.onChangeCurrentRoom.bind(this);
        // this.onSubmit.bind(this);

        this.state = {
            rooms: [],
            currentRoom: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/rooms/')
            .then(response => {
                if(response.data.length > 0){
                    console.log(response.data);
                    this.setState({
                        rooms: response.data.map( room => room.roomName),
                    });
                }
            });
    } 

    onChangeCurrentRoom(e){
        this.setState({
            currentRoom: e.target.value
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
                <div>
                    <label>Chat rooms:</label>
                    <select
                        required
                        className="form-control"
                        value={this.state.currentRoom}
                        onChange={this.onChangeCurrentRoom}>
                        {this.state.rooms.map(function(room){
                            return <option
                                key={room}
                                value={room}>{room}
                                </option>;
                        })
                        }
                    </select>
                </div>
            </div>
        )
    }

}