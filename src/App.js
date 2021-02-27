import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ChatList from "./components/chat-list.component";
import login from "./components/login.component";
import register from "./components/register.component";
import homepage from "./components/homepage.component";
import about from "./components/about-us.component";
import loginFailedAttempt from "./components/loginFailedAttempt.component";
import chatroom from "./components/chatroom.component";

function App() {
  return (
    <Router>
    <div className="container">
      <br/>
      <Route path="/" exact component={homepage} />
      <Route path="/chatList" exact component={ChatList} />
      <Route path="/login" exact component={login} />
      <Route path="/register" exact component={register} />
      <Route path="/about" exact component={about} />
      <Route path="/loginFailedAttempt" exact component={loginFailedAttempt} />
      <Route path="/chatroom/:id" exact component={chatroom} />
    </div>
    </Router>
  );
}

export default App;
