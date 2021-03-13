import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatList from "./components/chat-list.component";
import login from "./components/login.component";
import register from "./components/register.component";
import homepage from "./components/homepage.component";
import about from "./components/about-us.component";
import chatroom from "./components/chatroom.component";
import logout from "./components/logout.component";
import deleteRoom from "./components/delete-room.component";


function App() {
  return (
    <Router>
    <div style={{ backgroundImage: "url(/img/background.png)"}} className="container">
      <br/>
      <Route path="/" exact component={homepage} />
      <Route path="/chatList" exact component={ChatList} />
      <Route path="/login" exact component={login} />
      <Route path="/register" exact component={register} />
      <Route path="/about" exact component={about} />
      <Route path="/chatroom/:id" exact component={chatroom} />
      <Route path="/logout" exact component={logout} />
      <Route path="/deleteRoom" exact component={deleteRoom} /> 
    </div>
    </Router>
  );
}

export default App;
