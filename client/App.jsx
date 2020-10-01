import React from "react";
import { connect } from "react-redux";
import Login from "./components/Login";
import GameContainer from "./components/GameContainer";
import Lobby from "./components/Lobby";
import GameRoom from "./components/GameRoom";

import { Switch, Route, Link } from "react-router-dom";
import "./assets/styles.scss";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3334");
const App = () => {
  return (
    <main>
      <nav>
        <div id="welcome">Welcome To Pitch-It!</div>
        <div className="buttons are-small" id="buttons_id">
          <button className="button is-primary is-outlined is-light">
            <Link to="/">Home</Link>
          </button>
          <button className="button is-primary is-outlined is-light">
            <Link to="/loggedIn">Enter Room</Link>
          </button>
          <button className="button is-primary is-outlined is-light">
            <Link to="/gamebuilder">Make a Game</Link>
          </button>
        </div>
      </nav>
      <Switch>
        {/* <Route path="/join" component={() => <JoinRoom socket={socket} />} /> */}
        <Route path="/loggedIn" component={() => <Lobby socket={socket} />} />
        <Route
          path="/gamebuilder"
          socket={socket}
          component={() => <GameContainer socket={socket} />}
        />
        <Route path="/gameroom" component={() => <GameRoom socket={socket}/>} />

        <Route path="/" component={() => <Login socket={socket} />} exact />
      </Switch>
    </main>
  );
};

export default App;
